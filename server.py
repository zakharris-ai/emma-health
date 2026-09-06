#!/usr/bin/env python3
"""
Emma's Health & Gut Rhythm Local Web Server
Runs a lightweight local HTTP server on port 8000 with a dedicated
AI Proxy endpoint for Google Gemini API integration and local key storage.
"""
import http.server
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import socketserver
import os
import sys
import json
import sqlite3
import datetime
import tempfile
import signal
import urllib.request
import urllib.error

PORT = int(os.environ.get('PORT', 8000))
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.environ.get('DATA_DIR', DIRECTORY)
if not os.path.exists(DATA_DIR):
    os.makedirs(DATA_DIR, exist_ok=True)

KEY_FILE = os.path.join(DATA_DIR, ".gemini_key")
DB_FILE = os.path.join(DATA_DIR, "emma_health.db")
BACKUP_FILE = os.path.join(DATA_DIR, "emma_backup.json")

PRIMARY_MODEL = "gemini-3.8-flash"
FALLBACK_MODEL = "gemini-3.7-flash"

def get_db_connection():
    conn = sqlite3.connect(DB_FILE, timeout=10.0)
    conn.execute("PRAGMA journal_mode=WAL;")
    conn.execute("PRAGMA busy_timeout=5000;")
    conn.execute("PRAGMA synchronous=NORMAL;")
    return conn

def init_db():
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("""
            CREATE TABLE IF NOT EXISTS checkins (
                date TEXT PRIMARY KEY,
                cycle_day INTEGER,
                cycle_phase TEXT,
                bristol_stool INTEGER,
                bloating_score INTEGER,
                motility_speed TEXT,
                abdominal_pain INTEGER,
                splenic_pressure INTEGER,
                data_json TEXT,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        cur.execute("""
            CREATE TABLE IF NOT EXISTS app_state (
                key TEXT PRIMARY KEY,
                value TEXT,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        conn.commit()

        cur.execute("SELECT COUNT(*) FROM checkins")
        count = cur.fetchone()[0]
        if count == 0:
            for seed_file in [os.path.join(DIRECTORY, "seed_data.json"), os.path.join(DIRECTORY, "emma_backup.json")]:
                if os.path.isfile(seed_file):
                    try:
                        with open(seed_file, "r", encoding="utf-8") as f:
                            seed = json.load(f)
                        for item in seed.get("logs", []):
                            d_str = item.get("date")
                            if d_str:
                                cur.execute("""
                                    INSERT OR REPLACE INTO checkins
                                    (date, cycle_day, cycle_phase, bristol_stool, bloating_score, motility_speed, abdominal_pain, splenic_pressure, data_json)
                                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                                """, (
                                    d_str,
                                    item.get('cycleDay'),
                                    item.get('cyclePhase'),
                                    item.get('bristol'),
                                    item.get('bloatScore'),
                                    item.get('motilitySpeed'),
                                    item.get('abPain'),
                                    item.get('splenicPressure'),
                                    json.dumps(item)
                                ))
                        for k, v in seed.get("app_states", {}).items():
                            cur.execute("""
                                INSERT OR REPLACE INTO app_state (key, value)
                                VALUES (?, ?)
                            """, (k, v if isinstance(v, str) else json.dumps(v)))
                        conn.commit()
                        print(f"📦 Seeded {len(seed.get('logs', []))} initial records from {os.path.basename(seed_file)}")
                        break
                    except Exception as s_err:
                        print(f"⚠️ Seeding notice: {s_err}")

        conn.close()
    except Exception as e:
        print(f"⚠️ SQLite Init Warning: {e}")

init_db()


PRIMARY_MODEL = "gemini-3.8-flash"
FALLBACK_MODEL = "gemini-3.7-flash"
SECONDARY_FALLBACK_MODEL = "gemini-2.5-flash"

def sanitize_api_key(raw_key):
    if not raw_key:
        return ""
    cleaned = str(raw_key).strip().strip('"').strip("'")
    parts = cleaned.split()
    if parts:
        return parts[0]
    return ""

def get_stored_gemini_key():
    # 1. Environment variable
    if os.environ.get('GEMINI_API_KEY'):
        return sanitize_api_key(os.environ.get('GEMINI_API_KEY'))

    # 2. Check local and user .env files
    env_paths = [
        os.path.join(DATA_DIR, ".env"),
        os.path.join(DIRECTORY, ".env"),
        os.path.expanduser("~/.env")
    ]
    for env_path in env_paths:
        if os.path.isfile(env_path):
            try:
                with open(env_path, 'r', encoding='utf-8') as f:
                    for line in f:
                        line = line.strip()
                        if line.startswith("GEMINI_API_KEY="):
                            val = line.split("=", 1)[1].strip().strip('"').strip("'")
                            if val:
                                return sanitize_api_key(val)
            except Exception:
                pass

    # 3. .gemini_key file
    if os.path.isfile(KEY_FILE):
        try:
            with open(KEY_FILE, 'r', encoding='utf-8') as f:
                return sanitize_api_key(f.read())
        except Exception:
            return ""
    return ""

def call_gemini_api(api_key, payload, model=PRIMARY_MODEL, timeout=25):
    models = [model, FALLBACK_MODEL, SECONDARY_FALLBACK_MODEL]
    # Deduplicate while preserving order
    seen = set()
    unique_models = [m for m in models if not (m in seen or seen.add(m))]

    last_err = None
    for m in unique_models:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{m}:generateContent?key={api_key}"
        p = json.loads(json.dumps(payload))
        if m == SECONDARY_FALLBACK_MODEL and "generationConfig" in p and "thinkingConfig" in p["generationConfig"]:
            p["generationConfig"].pop("thinkingConfig", None)

        req = urllib.request.Request(
            url,
            data=json.dumps(p).encode('utf-8'),
            headers={"Content-Type": "application/json"}
        )
        try:
            with urllib.request.urlopen(req, timeout=timeout) as resp:
                return m, json.loads(resp.read().decode('utf-8'))
        except urllib.error.HTTPError as e:
            last_err = e
            if e.code in (400, 404):
                print(f"ℹ️ Model {m} returned {e.code}, attempting fallback...")
                continue
            raise
    if last_err:
        raise last_err
    raise RuntimeError("No Gemini model succeeded")

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        if self.path in ('/health', '/api/health'):
            self._send_json(200, {
                "status": "healthy",
                "app": "Emma Health Tracker",
                "version": "1.0.0",
                "timestamp": datetime.datetime.now().isoformat()
            })
        elif self.path == '/api/get-gemini-status':
            self.handle_get_status()
        elif self.path == '/api/load-data':
            self.handle_load_data()
        elif self.path == '/api/export-backup':
            self.handle_export_backup()
        else:
            super().do_GET()

    def do_POST(self):
        if self.path == '/api/sync-data':
            self.handle_sync_data()
        elif self.path == '/api/restore-backup':
            self.handle_restore_backup()
        elif self.path == '/api/gemini-audit':
            self.handle_gemini_audit()
        elif self.path == '/api/test-gemini-key':
            self.handle_test_key()
        elif self.path == '/api/save-gemini-key':
            self.handle_save_key()
        elif self.path == '/api/get-gemini-status':
            self.handle_get_status()
        elif self.path == '/api/polish-note':
            self.handle_polish_note()
        else:
            self.send_error(404, "Endpoint not found")

    def handle_load_data(self):
        try:
            conn = get_db_connection()
            cur = conn.cursor()
            cur.execute("SELECT data_json FROM checkins ORDER BY date DESC")
            rows = cur.fetchall()
            logs = []
            for (dj,) in rows:
                try:
                    logs.append(json.loads(dj))
                except Exception:
                    pass

            cur.execute("SELECT key, value FROM app_state")
            state_rows = cur.fetchall()
            conn.close()

            app_states = {}
            for k, v in state_rows:
                try:
                    app_states[k] = json.loads(v)
                except Exception:
                    app_states[k] = v

            # If DB is empty, check if emma_backup.json exists on disk
            if not logs and os.path.isfile(BACKUP_FILE):
                try:
                    with open(BACKUP_FILE, 'r') as f:
                        bk = json.load(f)
                        logs = bk.get('logs', [])
                        app_states = bk.get('app_states', {})
                except Exception:
                    pass

            self._send_json(200, {
                "ok": True,
                "logs": logs,
                "chronoTrial": app_states.get('chrono_trial'),
                "specialistTracking": app_states.get('specialist_tracking'),
                "ouraToken": app_states.get('oura_token'),
                "count": len(logs)
            })
        except Exception as e:
            self._send_json(500, {"ok": False, "error": str(e)})

    def handle_sync_data(self):
        try:
            content_length = int(self.headers.get('Content-Length', 0))
            raw_body = self.rfile.read(content_length).decode('utf-8')
            payload = json.loads(raw_body) if raw_body else {}

            logs = payload.get('logs', [])
            chrono_trial = payload.get('chronoTrial')
            specialist_tracking = payload.get('specialistTracking')
            oura_token = payload.get('ouraToken')

            conn = get_db_connection()
            cur = conn.cursor()

            # Upsert logs into checkins table
            for log in logs:
                if not isinstance(log, dict) or not log.get('date'):
                    continue
                d = log.get('date')
                c_day = log.get('cycleDay')
                c_phase = log.get('cyclePhase', '')
                b_stool = log.get('bristolStool')
                b_score = log.get('bloatingScore')
                m_speed = log.get('motilitySpeed', '')
                a_pain = log.get('abdominalPain')
                s_press = log.get('splenicPressure')
                dj = json.dumps(log)
                cur.execute("""
                    INSERT INTO checkins (date, cycle_day, cycle_phase, bristol_stool, bloating_score, motility_speed, abdominal_pain, splenic_pressure, data_json, updated_at)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
                    ON CONFLICT(date) DO UPDATE SET
                        cycle_day=excluded.cycle_day,
                        cycle_phase=excluded.cycle_phase,
                        bristol_stool=excluded.bristol_stool,
                        bloating_score=excluded.bloating_score,
                        motility_speed=excluded.motility_speed,
                        abdominal_pain=excluded.abdominal_pain,
                        splenic_pressure=excluded.splenic_pressure,
                        data_json=excluded.data_json,
                        updated_at=CURRENT_TIMESTAMP
                """, (d, c_day, c_phase, b_stool, b_score, m_speed, a_pain, s_press, dj))

            if chrono_trial is not None:
                cur.execute("""
                    INSERT INTO app_state (key, value, updated_at)
                    VALUES ('chrono_trial', ?, CURRENT_TIMESTAMP)
                    ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=CURRENT_TIMESTAMP
                """, (json.dumps(chrono_trial),))

            if specialist_tracking is not None:
                cur.execute("""
                    INSERT INTO app_state (key, value, updated_at)
                    VALUES ('specialist_tracking', ?, CURRENT_TIMESTAMP)
                    ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=CURRENT_TIMESTAMP
                """, (json.dumps(specialist_tracking),))

            if oura_token is not None:
                cur.execute("""
                    INSERT INTO app_state (key, value, updated_at)
                    VALUES ('oura_token', ?, CURRENT_TIMESTAMP)
                    ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=CURRENT_TIMESTAMP
                """, (json.dumps(oura_token),))

            conn.commit()
            conn.close()

            # Dual-redundancy: atomic JSON snapshot to emma_backup.json
            now_iso = datetime.datetime.now().isoformat()
            backup_dict = {
                "version": "1.0",
                "last_synced": now_iso,
                "total_logs": len(logs),
                "logs": logs,
                "app_states": {
                    "chrono_trial": chrono_trial,
                    "specialist_tracking": specialist_tracking,
                    "oura_token": oura_token
                }
            }
            tmp_backup = BACKUP_FILE + ".tmp"
            with open(tmp_backup, 'w') as f:
                json.dump(backup_dict, f, indent=2)
            os.replace(tmp_backup, BACKUP_FILE)

            self._send_json(200, {
                "ok": True,
                "message": "Data safely persisted to SQLite database & disk snapshot",
                "timestamp": now_iso,
                "count": len(logs)
            })
        except Exception as e:
            self._send_json(500, {"ok": False, "error": str(e)})

    def handle_export_backup(self):
        try:
            conn = get_db_connection()
            cur = conn.cursor()
            cur.execute("SELECT data_json FROM checkins ORDER BY date DESC")
            logs = [json.loads(r[0]) for r in cur.fetchall()]
            cur.execute("SELECT key, value FROM app_state")
            app_states = {}
            for r in cur.fetchall():
                try:
                    app_states[r[0]] = json.loads(r[1])
                except Exception:
                    app_states[r[0]] = r[1]
            conn.close()

            today_str = datetime.date.today().isoformat()
            filename = f"emma_health_backup_{today_str}.json"
            content = json.dumps({
                "backup_date": datetime.datetime.now().isoformat(),
                "patient": "Emma Butler",
                "total_entries": len(logs),
                "logs": logs,
                "app_states": app_states
            }, indent=2).encode('utf-8')

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Content-Disposition', f'attachment; filename="{filename}"')
            self.send_header('Content-Length', str(len(content)))
            self.end_headers()
            self.wfile.write(content)
        except Exception as e:
            self._send_json(500, {"ok": False, "error": str(e)})

    def handle_restore_backup(self):
        try:
            content_length = int(self.headers.get('Content-Length', 0))
            raw_body = self.rfile.read(content_length).decode('utf-8')
            payload = json.loads(raw_body) if raw_body else {}

            logs = payload.get('logs', [])
            app_states = payload.get('app_states', {})

            conn = get_db_connection()
            cur = conn.cursor()
            for log in logs:
                if not isinstance(log, dict) or not log.get('date'):
                    continue
                d = log.get('date')
                c_day = log.get('cycleDay')
                c_phase = log.get('cyclePhase', '')
                b_stool = log.get('bristolStool')
                b_score = log.get('bloatingScore')
                m_speed = log.get('motilitySpeed', '')
                a_pain = log.get('abdominalPain')
                s_press = log.get('splenicPressure')
                dj = json.dumps(log)
                cur.execute("""
                    INSERT INTO checkins (date, cycle_day, cycle_phase, bristol_stool, bloating_score, motility_speed, abdominal_pain, splenic_pressure, data_json, updated_at)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
                    ON CONFLICT(date) DO UPDATE SET
                        cycle_day=excluded.cycle_day,
                        cycle_phase=excluded.cycle_phase,
                        bristol_stool=excluded.bristol_stool,
                        bloating_score=excluded.bloating_score,
                        motility_speed=excluded.motility_speed,
                        abdominal_pain=excluded.abdominal_pain,
                        splenic_pressure=excluded.splenic_pressure,
                        data_json=excluded.data_json,
                        updated_at=CURRENT_TIMESTAMP
                """, (d, c_day, c_phase, b_stool, b_score, m_speed, a_pain, s_press, dj))

            for k, v in app_states.items():
                cur.execute("""
                    INSERT INTO app_state (key, value, updated_at)
                    VALUES (?, ?, CURRENT_TIMESTAMP)
                    ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=CURRENT_TIMESTAMP
                """, (k, json.dumps(v)))

            conn.commit()
            conn.close()

            self._send_json(200, {"ok": True, "message": f"Successfully restored {len(logs)} logs to database."})
        except Exception as e:
            self._send_json(500, {"ok": False, "error": str(e)})


    def handle_get_status(self):
        stored_key = get_stored_gemini_key()
        has_key = bool(stored_key)
        masked_key = ""
        if has_key:
            masked_key = stored_key[:6] + "..." + stored_key[-4:] if len(stored_key) > 10 else "***"
        self._send_json(200, {
            "hasKey": has_key,
            "maskedKey": masked_key,
            "model": "gemini-3.8-flash (high reasoning)"
        })

    def handle_test_key(self):
        try:
            content_length = int(self.headers.get('Content-Length', 0))
            raw_body = self.rfile.read(content_length).decode('utf-8')
            payload = json.loads(raw_body) if raw_body else {}
            api_key = sanitize_api_key(payload.get('apiKey')) or get_stored_gemini_key()
            if not api_key:
                self._send_json(400, {"ok": False, "error": "No API key provided"})
                return

            # Test call to Google Gemini 3.8 Flash (High Reasoning)
            test_payload = {
                "contents": [{"parts": [{"text": "Hello, respond with OK"}]}],
                "generationConfig": {
                    "thinkingConfig": {
                        "thinkingBudget": 1024
                    }
                }
            }
            try:
                used_model, _ = call_gemini_api(api_key, test_payload, PRIMARY_MODEL, timeout=12)
                self._send_json(200, {
                    "ok": True,
                    "message": f"Gemini 3.8 Flash verified successfully ({used_model})!",
                    "model": used_model
                })
            except urllib.error.HTTPError as e:
                err_body = e.read().decode('utf-8')
                try:
                    err_json = json.loads(err_body)
                    err_msg = err_json.get('error', {}).get('message', err_body)
                except Exception:
                    err_msg = err_body
                self._send_json(200, {"ok": False, "error": err_msg})
        except Exception as e:
            self._send_json(200, {"ok": False, "error": str(e)})

    def handle_save_key(self):
        try:
            content_length = int(self.headers.get('Content-Length', 0))
            raw_body = self.rfile.read(content_length).decode('utf-8')
            payload = json.loads(raw_body) if raw_body else {}
            api_key = sanitize_api_key(payload.get('apiKey'))
            if api_key:
                with open(KEY_FILE, 'w') as f:
                    f.write(api_key)
                self._send_json(200, {"ok": True, "message": "API key saved successfully to server!"})
            else:
                if os.path.isfile(KEY_FILE):
                    os.remove(KEY_FILE)
                self._send_json(200, {"ok": True, "message": "API key cleared from server"})
        except Exception as e:
            self._send_json(500, {"ok": False, "error": str(e)})

    def handle_gemini_audit(self):
        try:
            content_length = int(self.headers.get('Content-Length', 0))
            raw_body = self.rfile.read(content_length).decode('utf-8')
            payload = json.loads(raw_body) if raw_body else {}

            query = payload.get('query', '').strip()
            cycle_day = payload.get('cycleDay', 19)
            phase = payload.get('phase', 'luteal')
            phase_label = payload.get('phaseLabel', 'Late Luteal (Slow Motility)')
            api_key = sanitize_api_key(payload.get('apiKey')) or get_stored_gemini_key()

            if not api_key:
                # Cleanly signal fallback to client autonomous clinical engine
                self._send_json(200, {
                    "success": False,
                    "fallback": True,
                    "message": "No Gemini API key configured. Utilizing Autonomous Clinical Motility Engine."
                })
                return

            system_instruction = (
                "You are the world's foremost neuro-gastroenterologist and specialist motility consultant for Emma Butler.\n"
                "EMMA'S CLINICAL & PSYCHO-SOMATIC PROFILE:\n"
                "- Neurogenic slow colonic transit / colonic inertia\n"
                "- Visceral Hypersensitivity & Enteric Nervous System Trauma Loops: Emma undergoes weekly holistic and EMDR therapy with Amanda to reprocess traumatic gut-brain loops and downregulate autonomic alarm reactions.\n"
                "- Adult ADHD Interplay: In the luteal phase, progesterone-mediated dopamine dips heighten sensory magnification, waistband hyperfixation, and anxiety over tummy appearance. Always reassure her that symptoms are neuro-chemical and physiological.\n"
                "- Abdomino-Phrenic Dyssynergia (APD): paradoxical diaphragmatic descent & anterior abdominal wall protrusion triggered by gas, fermentation, or gastric cold shock\n"
                "- Splenic flexure gas trapping causing sharp left subcostal rib pain/pressure\n"
                "- Risk of paradoxical liquid bypass / diarrhea if fluid backs up behind retained stool\n"
                "- Medications & Routine: Linaclotide 290mcg (morning secretagogue), Mestinon 180mg daily (cholinergic parasympathetic boost), Prucalopride 2mg (bedtime 5-HT4 propulsive wave trigger), Electrolytes & EAAs (Essential Amino Acids) in water for colonic mucosal hydration and muscular energy.\n"
                "- STRICT Dietary Rules: 100% garlic-free & onion-free (all alliums banned), 100% gluten-free, lactose-free only, low-FODMAP, minimal harsh insoluble fiber.\n"
                "- BEVERAGE & FERMENTATION MANDATES:\n"
                "  * BEER / LAGER / CRAFT BEER / ALES / STOUTS: NEVER mark as 'Safe to Enjoy' or theme 'green'! Contains barley gluten, brewer's yeast (Saccharomyces), and dissolved CO2 carbonation. CO2 stretches the gastric fundus, firing the visco-phrenic reflex and triggering immediate downward diaphragmatic spasm (APD) and severe left-rib splenic flexure gas trapping. MUST be marked theme 'red' with badge 'High Trigger — Safe Swap' (swap to 100% Blue Agave Blanco Tequila Soda + Lime or crisp dry white wine).\n"
                "  * CIDER & PERRY: NEVER mark as safe! Fermented apples/pears contain high-FODMAP sorbitol (sugar alcohol polyol) and excess free fructose. Causes massive osmotic fluid shifts and clashes dangerously with Linaclotide 290mcg, provoking painful watery bypass and gas. MUST be marked theme 'red' with badge 'High Trigger — Safe Swap'.\n"
                "  * CARBONATED DRINKS & SODAS: Dilates the gastric fundus and mechanically forces the diaphragm down (theme 'red').\n"
                "  * ALLIUMS & GLUTEN: Any dish containing garlic, onions, shallots, wheat, or barley MUST be marked theme 'red' with safe gut-friendly swap recommendations.\n"
                "  * UNVERIFIED / AMBIGUOUS DISHES: If a dish is not explicitly confirmed safe, NEVER say 'Specialist Approved' or 'Safe to Enjoy' without warning about hidden allium powders (stocks/seasoning), dairy cream, or wheat thickeners (use theme 'amber' with badge 'Screening & Verification Needed').\n"
                f"- CURRENT HORMONAL CONTEXT: Cycle Day {cycle_day} ({phase_label}). Explain explicitly how her current hormone levels (progesterone vs estrogen) modulate digestion of this food.\n"
                "TONE: Deeply empathetic, calming, empowering, NEVER restrictive or scolding. Keep language clear, short, and bite-sized in plain English without medical jargon or restaurant ordering scripts so Emma is never overwhelmed.\n\n"
                "You must return ONLY a JSON object matching this schema:\n"
                "{\n"
                '  "theme": "green" | "amber" | "red",\n'
                '  "title": "Short descriptive title with emoji and cycle day",\n'
                '  "badge": "Safe to Enjoy" | "Enjoy with Hacks" | "High Trigger — Safe Swap",\n'
                '  "summary": "1-2 sentence clinical summary of why this is safe or what mechanism requires adjustment",\n'
                '  "metrics": {\n'
                '    "gastricTransitMinutes": number (estimated minutes in stomach, e.g. 50-120),\n'
                '    "gastricTransitLabel": "e.g. 75 mins (Normal/Slow)",\n'
                '    "bristolForecast": "e.g. Type 4 (Ideal Smooth) or Type 6 (Watery Surge Risk)",\n'
                '    "apdRiskPercent": number (0 to 100),\n'
                '    "apdRiskLabel": "Low (12%)" | "Moderate (42%)" | "High (76%)",\n'
                '    "splenicGasPressure": number (0 to 100),\n'
                '    "splenicGasLabel": "Minimal (10%)" | "Moderate (38%)" | "Elevated (78%)"\n'
                '  },\n'
                '  "freedomHacks": ["Actionable tip 1", "Actionable tip 2"],\n'
                '  "tags": ["Tag 1", "Tag 2", "Tag 3"]\n'
                "}"
            )

            prompt = f"Perform an intelligent clinical neuro-gastroenterology assessment on: '{query}'"
            gemini_payload = {
                "contents": [
                    {
                        "parts": [
                            {"text": f"{system_instruction}\n\nMeal Query: {prompt}\nReturn JSON only."}
                        ]
                    }
                ],
                "generationConfig": {
                    "temperature": 0.2,
                    "thinkingConfig": {
                        "thinkingBudget": 4096
                    },
                    "responseMimeType": "application/json"
                }
            }

            used_model, data = call_gemini_api(api_key, gemini_payload, PRIMARY_MODEL, timeout=25)
            parts = data['candidates'][0]['content']['parts']
            text_parts = [p.get('text', '') for p in parts if not p.get('thought')]
            if not text_parts:
                text_parts = [p.get('text', '') for p in parts]
            raw_text = text_parts[-1].strip()
            if raw_text.startswith("```"):
                lines = raw_text.splitlines()
                if lines[0].startswith("```"):
                    lines = lines[1:]
                if lines and lines[-1].startswith("```"):
                    lines = lines[:-1]
                raw_text = "\n".join(lines).strip()
            parsed_json = json.loads(raw_text)
            self._send_json(200, {
                "success": True,
                "source": "gemini-3.8-flash",
                "modelUsed": used_model,
                "data": parsed_json
            })
        except urllib.error.HTTPError as e:
            try:
                err_body = e.read().decode('utf-8')
            except Exception:
                err_body = str(e)
            self._send_json(200, {
                "success": False,
                "fallback": True,
                "error": f"Gemini API error ({e.code}): {err_body}"
            })
        except Exception as e:
            self._send_json(200, {
                "success": False,
                "fallback": True,
                "error": str(e)
            })

    def handle_polish_note(self):
        try:
            content_length = int(self.headers.get('Content-Length', 0))
            raw_body = self.rfile.read(content_length).decode('utf-8')
            payload = json.loads(raw_body) if raw_body else {}
            raw_text = payload.get('text', '').strip()
            api_key = payload.get('apiKey') or get_stored_gemini_key()

            if not raw_text:
                self._send_json(200, {"success": True, "text": ""})
                return

            if not api_key:
                self._send_json(200, {"success": False, "fallback": True})
                return

            prompt = (
                "You are an expert clinical medical transcriptionist for Emma Butler.\n"
                "Clean up and accurately format Emma's spoken daily check-in note, correcting speech-to-text recognition errors, removing verbal fillers (um, ah, like), fixing run-on sentences, and setting proper medical capitalization.\n"
                "CRITICAL: Keep her meaning, tone, and specific symptoms 100% authentic and intact. Do not add advice or commentary.\n"
                "EMMA'S CLINICAL GLOSSARY (Speech-to-text fixes):\n"
                "- Oddono's (banana sorbet in a cup, Italian gelato - NEVER 'a donos' or 'donuts')\n"
                "- Linaclotide (290mcg morning peptide secretagogue, 40-min fast window - NOT 'line a clot hide')\n"
                "- Mestinon (180mg cholinergic prokinetic - NOT 'mess tin on')\n"
                "- Prucalopride (5-HT4 agonist)\n"
                "- Movicol (osmotic laxative)\n"
                "- UDCA (ursodeoxycholic acid)\n"
                "- APD (Abdomino-Phrenic Dyssynergia - diaphragmatic descent reflex)\n"
                "- Splenic flexure (left rib subcostal bend)\n"
                "- Bristol 4 (formed smooth stool) / Bristol 1 (hard pellets) / Bristol 6/7 (watery)\n"
                "- Watery bypass (liquid stool passing around solid plug)\n"
                "- Third Space (cold plunge / sauna)\n"
                "- Form Nutrition (blueberry protein shake)\n"
                "- Sticks'n'Sushi / Dishoom / Propercorn\n"
                f"Emma's spoken note: \"{raw_text}\"\n\n"
                "Return ONLY the cleaned, accurately transcribed text with zero surrounding markdown, quotes, or explanation."
            )

            req_body = {
                "contents": [{"parts": [{"text": prompt}]}],
                "generationConfig": {
                    "temperature": 0.2,
                    "thinkingConfig": {
                        "thinkingBudget": 1024
                    },
                    "maxOutputTokens": 600
                }
            }

            used_model, resp_data = call_gemini_api(api_key, req_body, PRIMARY_MODEL, timeout=15)
            parts = resp_data.get('candidates', [{}])[0].get('content', {}).get('parts', [])
            text_parts = [p.get('text', '') for p in parts if not p.get('thought')]
            if not text_parts:
                text_parts = [p.get('text', '') for p in parts]
            polished = text_parts[-1].strip()
            # Strip any surrounding quotes if returned
            if polished.startswith('"') and polished.endswith('"'):
                polished = polished[1:-1].strip()
            self._send_json(200, {"success": True, "text": polished, "model": used_model})
        except Exception as e:
            self._send_json(200, {"success": False, "fallback": True, "error": str(e)})

    def _send_json(self, status, payload):
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(payload).encode('utf-8'))

if __name__ == '__main__':
    os.chdir(DIRECTORY)
    init_db()
    ThreadingHTTPServer.allow_reuse_address = True

    httpd = None
    try:
        httpd = ThreadingHTTPServer(("0.0.0.0", PORT), Handler)
    except OSError:
        FALLBACK_PORT = 8080
        httpd = ThreadingHTTPServer(("0.0.0.0", FALLBACK_PORT), Handler)

    def graceful_shutdown(signum, frame):
        print("\n🌸 Shutting down gracefully...")
        if httpd:
            httpd.server_close()
        sys.exit(0)

    try:
        signal.signal(signal.SIGINT, graceful_shutdown)
        signal.signal(signal.SIGTERM, graceful_shutdown)
    except Exception:
        pass

    print(f"============================================================")
    print(f"🌸 Emma Butler's Health & Gut Rhythm Tracker is Live (Production Threading)!")
    print(f"👉 Listening on: 0.0.0.0:{PORT}")
    print(f"👉 Static Directory: {DIRECTORY}")
    print(f"👉 Data Directory: {DATA_DIR}")
    print(f"👉 AI Proxy: /api/gemini-audit enabled")
    print(f"👉 Health Check: /health")
    print(f"============================================================")
    httpd.serve_forever()
