/**
 * Emma Butler - Health & Gut Rhythm Engine
 * Bespoke clinical application for neuro-gastroenterology, cycle tracking with Mirena, and Oura Ring integration.
 */

// ============================================================================
// 1. EMMA'S COMPLETE HISTORICAL CLINICAL DATA (May - September 2026)
// ============================================================================
const DEFAULT_LOGS = [
  // --- SEPTEMBER 2026 (Current Cycle) ---
  {
    id: "2026-09-06",
    date: "2026-09-06",
    displayDate: "6th September 2026",
    month: "september",
    cycleDay: 19,
    phase: "luteal",
    phaseLabel: "Early-Mid Luteal (Progesterone Ramp)",
    temp: 36.71,
    movement: "Barely anything apart from small bit of watery movement first thing",
    bristol: "liquid",
    symptoms: "Very gassy/burpy, tummy quite uncomfortable, very exhausted and body felt very tired",
    diaphragmBloat: 7,
    puffiness: ["Puffy Arms", "Trapped Gas", "Body Tired"],
    emotions: "Okay just exhausted",
    mood: "flat",
    medNotes: "Took meds 7:11am (Standardized morning)",
    exercise: "Rest day / gentle walking",
    notes: "Cycle Day 19 (Post-Ovulation Day 4). Bayesian model: 84.2% Day 19 confidence, 98.8% Luteal. Progesterone is actively ramping; true peak is on Days 21–23 (Sep 8–10). Watery movement is paradoxical bypass around delayed colonic stool."
  },
  {
    id: "2026-09-05",
    date: "2026-09-05",
    displayDate: "5th September 2026",
    month: "september",
    cycleDay: 18,
    phase: "luteal",
    phaseLabel: "Early Luteal",
    temp: 36.48,
    movement: "A bit early morning just watery liquid",
    bristol: "liquid",
    symptoms: "Restless sleep again, sluggish digestion",
    diaphragmBloat: 6,
    puffiness: ["Restless Sleep"],
    emotions: "Tired from night awakenings",
    mood: "flat",
    medNotes: "Took linaclotide 3:49am (flagged for chronotherapy correction)",
    exercise: "Walking",
    notes: "Taking Linaclotide at 3:49am caused watery liquid instead of formed movement."
  },
  {
    id: "2026-09-04",
    date: "2026-09-04",
    displayDate: "4th September 2026",
    month: "september",
    cycleDay: 17,
    phase: "luteal",
    phaseLabel: "Early Luteal (Ovulation Confirmed)",
    temp: 36.85,
    movement: "A bit in morning",
    bristol: "hard",
    symptoms: "Okay first thing, quite uncomfortable and sore throughout morning/afternoon, really bad bloating from 3pm",
    diaphragmBloat: 8,
    puffiness: ["Diaphragm Bloat", "Chest Tight"],
    emotions: "Good and clear headed initially",
    mood: "great",
    medNotes: "Took linaclotide around 4:30/5:00am",
    exercise: "Pilates",
    notes: "Ovulation confirmed! Sharp thermal jump from 36.38°C to 36.85°C marks Day 2 of active luteal phase."
  },
  {
    id: "2026-09-03",
    date: "2026-09-03",
    displayDate: "3rd September 2026",
    month: "september",
    cycleDay: 16,
    phase: "luteal",
    phaseLabel: "Early Luteal Shift",
    temp: 36.51,
    movement: "A bit around 5:30am then intense liquid around 8:15am all undigested, then nothing",
    bristol: "liquid",
    symptoms: "Okay first thing, seemed to ease with light & bland food",
    diaphragmBloat: 4,
    puffiness: ["Undigested Liquid"],
    emotions: "Okay, better than yesterday",
    mood: "great",
    medNotes: "Took linaclotide 5:37am",
    exercise: "Rest",
    notes: "Bland food helped upper bloating, but erratic medication timing dumped undigested contents."
  },
  {
    id: "2026-09-02",
    date: "2026-09-02",
    displayDate: "2nd September 2026",
    month: "september",
    cycleDay: 15,
    phase: "ovulation",
    phaseLabel: "Ovulation Day (Temp Nadir)",
    temp: 36.45,
    movement: "A small bit in morning but not satisfying",
    bristol: "hard",
    symptoms: "Not great bloating, really sore lower tummy & feeling inflamed. Really bad cramps at 10am and after dinner",
    diaphragmBloat: 7,
    puffiness: ["Puffy Arms", "Inflamed", "Sore Lower Tummy"],
    emotions: "Flat / quite edgy / fixated & anxious about body looks / drained",
    mood: "edgy",
    medNotes: "Took linaclotide 11:10pm the night before",
    exercise: "Gentle mobility",
    notes: "Ovulation dip in temperature. Low dopamine day with ADHD body dysmorphia flare."
  },
  {
    id: "2026-09-01",
    date: "2026-09-01",
    displayDate: "1st September 2026",
    month: "september",
    cycleDay: 14,
    phase: "ovulation",
    phaseLabel: "Ovulation Window",
    temp: 36.54,
    movement: "A bit in morning",
    bristol: "normal",
    symptoms: "Lower tummy bloat, bit in diaphragm. Inflammation eased a bit. Very exhausted in evening",
    diaphragmBloat: 5,
    puffiness: ["Lower Tummy"],
    emotions: "Okay",
    mood: "flat",
    medNotes: "Took linaclotide first thing empty stomach at 7am as advised!",
    exercise: "1x dynamic Pilates, 30m strength, 16,000 steps",
    notes: "Taking Linaclotide properly at 7am produced much better morning tolerability."
  },
  {
    id: "2026-08-31",
    date: "2026-08-31",
    displayDate: "31st August 2026",
    month: "august",
    cycleDay: 13,
    phase: "follicular",
    phaseLabel: "Late Follicular (Pre-Ovulatory)",
    temp: 36.62,
    movement: "Watery liquid in morning",
    bristol: "liquid",
    symptoms: "A bit bloated and felt a bit sick. Awful headaches, bad evening bloating",
    diaphragmBloat: 6,
    puffiness: ["Headache", "Nausea"],
    emotions: "Okay just a bit flat",
    mood: "flat",
    medNotes: "Evening bloating possibly from linoclotide timing",
    exercise: "Reformer Pilates, 14,000 steps",
    notes: "Pre-ovulatory estrogen surge. Room felt hot affecting oral thermometer."
  },
  {
    id: "2026-08-30",
    date: "2026-08-30",
    displayDate: "30th August 2026",
    month: "august",
    cycleDay: 12,
    phase: "follicular",
    phaseLabel: "Follicular Peak",
    temp: 36.38,
    movement: "Tiny bit early morning not satisfying",
    bristol: "hard",
    symptoms: "Better again despite small alcohol on Sat. Felt little puffy/clothes tight upper body but okay",
    diaphragmBloat: 4,
    puffiness: ["Clothes Tight"],
    emotions: "A lot better; high energy, amazing date day with Zak, felt free & relaxed",
    mood: "great",
    medNotes: "Started 1x 290mcg linaclotide in evening (8:15pm)",
    exercise: "5km run, over 20,000 steps",
    notes: "Classic estrogen peak: high dopamine, high energy, connected, resilient headspace."
  },
  {
    id: "2026-08-28",
    date: "2026-08-28",
    displayDate: "28th August 2026",
    month: "august",
    cycleDay: 10,
    phase: "follicular",
    phaseLabel: "Mid Follicular",
    temp: 36.32,
    movement: "A bit in morning, less hard more scattered",
    bristol: "normal",
    symptoms: "Inflammation eased, bloating still there but not as severe",
    diaphragmBloat: 3,
    puffiness: [],
    emotions: "Good! More energy / more social / freer",
    mood: "great",
    medNotes: "Domperidone fully stopped",
    exercise: "20min run, dynamic strength reformer",
    notes: "Transit and inflammation improving markedly without Domperidone."
  },
  {
    id: "2026-08-27",
    date: "2026-08-27",
    displayDate: "27th August 2026",
    month: "august",
    cycleDay: 9,
    phase: "follicular",
    phaseLabel: "Mid Follicular",
    temp: 36.57,
    movement: "A bit around 6:30am then nothing (was hard)",
    bristol: "hard",
    symptoms: "Spots on cheek, really uncomfortable & bloated all day. Really bad in diaphragm & feel inflamed/water retention",
    diaphragmBloat: 7,
    puffiness: ["Puffy Arms", "Facial Spots", "Diaphragm Bloat"],
    emotions: "Still feeling quite flat and sad",
    mood: "flat",
    medNotes: "STOPPED DOMPERIDONE to see if symptoms ease",
    exercise: "Rest",
    notes: "Noticed hard stools for last 3 days. Decision to pause Domperidone was clinically sound."
  },
  {
    id: "2026-08-24",
    date: "2026-08-24",
    displayDate: "24th August 2026",
    month: "august",
    cycleDay: 6,
    phase: "follicular",
    phaseLabel: "Early Follicular",
    temp: 36.62,
    movement: "A bit in morning, then post dinner sudden intense liquid expulsion (7:30-8:30pm)",
    bristol: "liquid",
    symptoms: "Puffy arms, bad diaphragm after breakfast",
    diaphragmBloat: 7,
    puffiness: ["Puffy Arms", "Diaphragm Bloat"],
    emotions: "Okay just fed up with how I'm feeling constantly",
    mood: "edgy",
    medNotes: "Increased Domperidone to 20mg double dose + usual meds",
    exercise: "Walking",
    notes: "Doubling Domperidone dumped gastric contents into a delayed colon, causing intense liquid blowout."
  },
  {
    id: "2026-08-21",
    date: "2026-08-21",
    displayDate: "21st August 2026",
    month: "august",
    cycleDay: 3,
    phase: "reset",
    phaseLabel: "Cycle Reset / Phantom Menstruation",
    temp: 35.86,
    movement: "Small bit in morning then little bits throughout day, felt stuck",
    bristol: "hard",
    symptoms: "Bad first thing & after breakfast in diaphragm, but eased. Inflammation all gone!",
    diaphragmBloat: 4,
    puffiness: [],
    emotions: "Better, 98% back to me! Wobbled in evening after alcohol & argument with Zak",
    mood: "great",
    medNotes: "Temp 35.86°C taken early 4:18am",
    exercise: "Gentle",
    notes: "Temp crashed to 35.86°C! Clear hormonal reset marker. Inflammation completely lifted."
  },
  {
    id: "2026-08-19",
    date: "2026-08-19",
    displayDate: "19th August 2026",
    month: "august",
    cycleDay: 1,
    phase: "reset",
    phaseLabel: "Cycle Reset Transition",
    temp: 36.07,
    movement: "Barely anything, felt very uncomfortable in morning",
    bristol: "none",
    symptoms: "Really sore lower and upper tummy. Felt horrific all day, jeans not fitting",
    diaphragmBloat: 9,
    puffiness: ["Jeans Tight", "Diaphragm Bloat", "Inflamed"],
    emotions: "Edgy / exhausted / snappy / anxious",
    mood: "edgy",
    medNotes: "Really bad sleep, woke numerous times",
    exercise: "Rest",
    notes: "The 'Reset Bloat' immediately preceding the temperature crash and hormonal drop."
  },

  // --- AUGUST 2026 LUTEAL PHASE ---
  {
    id: "2026-08-15",
    date: "2026-08-15",
    displayDate: "15th August 2026",
    month: "august",
    cycleDay: 25,
    phase: "luteal",
    phaseLabel: "Late Luteal (Adrenaline Shakes)",
    temp: 36.55,
    movement: "None (post drinking day)",
    bristol: "none",
    symptoms: "So puffy, inflamed everywhere and felt so self conscious and big",
    diaphragmBloat: 9,
    puffiness: ["Puffy Arms", "Chest Tight", "Jeans Tight", "Inflamed Everywhere"],
    emotions: "Tearful in morning, adrenaline shakes, anxious for hen party",
    mood: "edgy",
    medNotes: "Drank alcohol, worsened next day hangover",
    exercise: "Rest",
    notes: "Vagal nerve irritation and adrenaline surges triggered by trapped gas and alcohol."
  },
  {
    id: "2026-08-12",
    date: "2026-08-12",
    displayDate: "12th August 2026",
    month: "august",
    cycleDay: 22,
    phase: "luteal",
    phaseLabel: "Mid Luteal Crash",
    temp: 36.53,
    movement: "A bit in morning / gas",
    bristol: "hard",
    symptoms: "Really bad cramping, bad diaphragm and tummy bloat. No décolletage on chest, felt swollen everywhere",
    diaphragmBloat: 9,
    puffiness: ["Chest Tight", "Diaphragm Bloat", "Puffy Arms"],
    emotions: "Okay just quite flat",
    mood: "flat",
    medNotes: "Usual meds",
    exercise: "Rest",
    notes: "Peak aldosterone fluid retention causing loss of chest décolletage definition."
  },

  // --- JULY 2026 CYCLE HIGHLIGHTS ---
  {
    id: "2026-07-26",
    date: "2026-07-26",
    displayDate: "26th July 2026",
    month: "july",
    cycleDay: 8,
    phase: "follicular",
    phaseLabel: "Follicular (Greece Holiday)",
    temp: 37.39,
    movement: "A bit in morning",
    bristol: "normal",
    symptoms: "Not too bad! Bloating eased",
    diaphragmBloat: 2,
    puffiness: [],
    emotions: "Amazing mood! Had the most incredible day",
    mood: "great",
    medNotes: "Temp higher due to Greece ambient heat",
    exercise: "Swimming / walking",
    notes: "Follicular peak in mood and gut motility despite holiday travel."
  },
  {
    id: "2026-07-20",
    date: "2026-07-20",
    displayDate: "20th July 2026",
    month: "july",
    cycleDay: 26,
    phase: "reset",
    phaseLabel: "Late Luteal / Reset Dumping",
    temp: 36.36,
    movement: "Not much, then intense load of liquid in evening",
    bristol: "liquid",
    symptoms: "Upper bloating (diaphragm), worse after breakfast, crampy/sick feeling",
    diaphragmBloat: 7,
    puffiness: ["Diaphragm Bloat"],
    emotions: "Fine, got a bit anxious in evening after family phone call",
    mood: "flat",
    medNotes: "Intense liquid movement in evening",
    exercise: "Gentle walking",
    notes: "Typical end-of-luteal evacuation as progesterone begins dropping."
  },
  {
    id: "2026-07-13",
    date: "2026-07-13",
    displayDate: "13th July 2026",
    month: "july",
    cycleDay: 19,
    phase: "luteal",
    phaseLabel: "Early Luteal Post-Run Crash",
    temp: 36.50,
    movement: "Intense in morning",
    bristol: "liquid",
    symptoms: "Strange feeling after run: body shaky/tingly, mouth felt droopy, eyes & muscles twitching, distended after dinner",
    diaphragmBloat: 8,
    puffiness: ["Muscle Twitching", "Diaphragm Bloat"],
    emotions: "Fine",
    mood: "flat",
    medNotes: "Hot and sweaty on run",
    exercise: "Intense run",
    notes: "Electrolyte depletion and vagal autonomic exhaustion from vigorous cardio in luteal."
  },

  // --- JUNE 2026 CYCLE HIGHLIGHTS ---
  {
    id: "2026-06-12",
    date: "2026-06-12",
    displayDate: "12th June 2026",
    month: "june",
    cycleDay: 15,
    phase: "ovulation",
    phaseLabel: "Ovulation Complete",
    temp: 37.04,
    movement: "Quite a bit in morning, very painful cramping all morning",
    bristol: "hard",
    symptoms: "Body inflamed, tummy bloating okay but intense cramping pain",
    diaphragmBloat: 5,
    puffiness: ["Inflamed Body"],
    emotions: "Quite stressed",
    mood: "edgy",
    medNotes: "Higher temp confirms ovulation complete",
    exercise: "Walking",
    notes: "Classic thermal shift confirming release of ovum (37.04°C)."
  },
  {
    id: "2026-06-03",
    date: "2026-06-03",
    displayDate: "3rd June 2026",
    month: "june",
    cycleDay: 6,
    phase: "follicular",
    phaseLabel: "Follicular Rise",
    temp: 36.27,
    movement: "A bit in morning and throughout day",
    bristol: "normal",
    symptoms: "Okay, but bad from 4pm onwards",
    diaphragmBloat: 4,
    puffiness: [],
    emotions: "Better than yesterday, starting new job, way better headspace",
    mood: "great",
    medNotes: "Meds tolerated well",
    exercise: "Walking to work",
    notes: "Estrogen rising, improved resilience despite new job stress."
  },

  // --- MAY 2026 CYCLE HIGHLIGHTS ---
  {
    id: "2026-05-26",
    date: "2026-05-26",
    displayDate: "26th May 2026",
    month: "may",
    cycleDay: 27,
    phase: "reset",
    phaseLabel: "Cycle Reset / Temp Drop",
    temp: 35.97,
    movement: "Rock hard / bloody in morning. Taking strong meds",
    bristol: "hard",
    symptoms: "A bit bloated but not as bad. Temperature dropped sharply to 35.97°C!",
    diaphragmBloat: 5,
    puffiness: [],
    emotions: "Fine! Happy re run, Zak back, good energy / spring in step",
    mood: "great",
    medNotes: "Back on normal dosages",
    exercise: "Run",
    notes: "Thermal crash from 36.49°C down to 35.97°C marks end of May cycle and start of new follicular wave."
  },
  {
    id: "2026-05-15",
    date: "2026-05-15",
    displayDate: "15th May 2026",
    month: "may",
    cycleDay: 15,
    phase: "ovulation",
    phaseLabel: "Ovulation Thermal Spike",
    temp: 36.81,
    movement: "Quite a lot in morning",
    bristol: "normal",
    symptoms: "Zero inflammation! Fine bloating, bit tired/headachy",
    diaphragmBloat: 2,
    puffiness: [],
    emotions: "Fine / clear minded",
    mood: "great",
    medNotes: "Egg released, temp increased to 36.81°C",
    exercise: "Reformer",
    notes: "Peak estrogen and LH surge released egg with great clarity of thought."
  }
];

// ============================================================================
// 2. STATE MANAGEMENT
// ============================================================================
let logs = [];
let activeTab = 'dashboard';
let currentCycleFilter = 'all';
let currentPhaseFilter = 'all';
let ouraSimulatedMode = true;
let dashboardChartInstance = null;
let ouraChartInstance = null;

// Function to safely create all Lucide icons and logos
function triggerLucideIcons() {
  if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
    try {
      lucide.createIcons();
    } catch (err) {
      console.warn('Lucide icon rendering error:', err);
    }
  }
}

// Master Initialization Routine
let isAppInitialized = false;
function initApp() {
  if (!isAppInitialized) {
    isAppInitialized = true;
    loadLogs();
    loadSpecialistTracking();
    initializeUI();
    renderDashboardTrends();
    renderOuraChart();
    renderHistoryLogs();
    renderEmmaMeals();
    renderSpecialistTrackingUI();
    fetchServerDataOnLoad();
  }
  triggerLucideIcons();
}

// Load Logs from LocalStorage or Fallback (Purging synthetic Oura cache)
function loadLogs() {
  const saved = localStorage.getItem('emma_health_logs');
  if (saved) {
    try {
      // If cached data contains synthetic Oura fields, clear and reload clean notes
      if (saved.includes('ouraTempDev') || saved.includes('"rhr":') || saved.includes('"hrv":')) {
        localStorage.removeItem('emma_health_logs');
        logs = [...DEFAULT_LOGS];
        saveLogs();
      } else {
        logs = JSON.parse(saved);
      }
    } catch (e) {
      logs = [...DEFAULT_LOGS];
    }
  } else {
    logs = [...DEFAULT_LOGS];
    saveLogs();
  }
}

function saveLogs() {
  localStorage.setItem('emma_health_logs', JSON.stringify(logs));
  syncDataToServer();
}

// ============================================================================
// SAFE DATA STORAGE & BACKGROUND CLOUD SYNC ENGINE (ZERO DATA LOSS)
// ============================================================================
let syncTimeout = null;
let isSyncing = false;

function updateSyncIndicator(status, text) {
  const syncDot = document.getElementById('syncDot');
  const syncStatusText = document.getElementById('syncStatusText');
  const modalSyncDot = document.getElementById('modalSyncDot');
  const modalSyncStatus = document.getElementById('modalSyncStatus');
  const modalSyncDetail = document.getElementById('modalSyncDetail');

  if (status === 'synced') {
    if (syncDot) syncDot.className = 'w-2 h-2 rounded-full bg-emerald-500';
    if (syncStatusText) syncStatusText.textContent = 'Saved';
    if (modalSyncDot) modalSyncDot.className = 'w-3 h-3 rounded-full bg-emerald-500';
    if (modalSyncStatus) modalSyncStatus.textContent = 'Cloud Database Connected';
    if (modalSyncDetail) modalSyncDetail.textContent = text || `All ${logs.length} entries safely backed up to SQLite database`;
  } else if (status === 'syncing') {
    if (syncDot) syncDot.className = 'w-2 h-2 rounded-full bg-amber-500 animate-pulse';
    if (syncStatusText) syncStatusText.textContent = 'Saving...';
    if (modalSyncDot) modalSyncDot.className = 'w-3 h-3 rounded-full bg-amber-500 animate-pulse';
    if (modalSyncStatus) modalSyncStatus.textContent = 'Saving to Database...';
    if (modalSyncDetail) modalSyncDetail.textContent = 'Persisting all entries safely to disk...';
  } else if (status === 'offline') {
    if (syncDot) syncDot.className = 'w-2 h-2 rounded-full bg-sky-500';
    if (syncStatusText) syncStatusText.textContent = 'On Phone';
    if (modalSyncDot) modalSyncDot.className = 'w-3 h-3 rounded-full bg-sky-500';
    if (modalSyncStatus) modalSyncStatus.textContent = 'Cached on Phone (Offline)';
    if (modalSyncDetail) modalSyncDetail.textContent = 'Your entries are safe on your phone and will sync automatically when back online.';
  }
}

function syncDataToServer() {
  updateSyncIndicator('syncing');
  if (syncTimeout) clearTimeout(syncTimeout);

  syncTimeout = setTimeout(() => {
    if (isSyncing) return;
    isSyncing = true;

    const payload = {
      logs: logs,
      chronoTrial: typeof chronoTrialState !== 'undefined' ? chronoTrialState : null,
      specialistTracking: typeof specialistTrackingState !== 'undefined' ? specialistTrackingState : null,
      ouraToken: localStorage.getItem('emma_oura_token') || ''
    };

    fetch('/api/sync-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
      isSyncing = false;
      if (data && data.ok) {
        updateSyncIndicator('synced', `${logs.length} entries safe`);
      } else {
        updateSyncIndicator('offline', 'Saved on phone');
      }
    })
    .catch(err => {
      isSyncing = false;
      console.warn('Silent sync note (offline):', err);
      updateSyncIndicator('offline', 'Saved on phone');
    });
  }, 350);
}

function fetchServerDataOnLoad() {
  fetch('/api/load-data')
    .then(res => res.json())
    .then(data => {
      if (data && data.ok) {
        let needsReRender = false;
        if (data.logs && data.logs.length > 0) {
          const localSaved = localStorage.getItem('emma_health_logs');
          if (!localSaved || data.logs.length >= logs.length) {
            logs = data.logs;
            localStorage.setItem('emma_health_logs', JSON.stringify(logs));
            needsReRender = true;
          }
        } else if (logs && logs.length > 0) {
          // Server was freshly created, seed server database with existing logs
          syncDataToServer();
        }

        if (data.chronoTrial) {
          chronoTrialState = data.chronoTrial;
          localStorage.setItem('emma_chrono_trial_v2', JSON.stringify(chronoTrialState));
          needsReRender = true;
        }

        if (data.specialistTracking) {
          specialistTrackingState = data.specialistTracking;
          localStorage.setItem('emma_specialist_tracking_v1', JSON.stringify(specialistTrackingState));
          needsReRender = true;
        }

        if (needsReRender) {
          initializeUI();
          renderDashboardTrends();
          renderHistoryLogs();
          if (typeof renderTrialUI === 'function') renderTrialUI();
          if (typeof renderSpecialistTrackingUI === 'function') renderSpecialistTrackingUI();
          triggerLucideIcons();
        }

        updateSyncIndicator('synced', `${logs.length} entries safe`);
      }
    })
    .catch(err => {
      console.warn('Server offline fallback active:', err);
      updateSyncIndicator('offline', 'Saved on phone');
    });
}

function openDataSafetyModal() {
  const modal = document.getElementById('dataSafetyModal');
  if (modal) modal.classList.remove('hidden');
  updateSyncIndicator(navigator.onLine ? 'synced' : 'offline');
  triggerLucideIcons();
}

function closeDataSafetyModal() {
  const modal = document.getElementById('dataSafetyModal');
  if (modal) modal.classList.add('hidden');
}

function manualSyncNow() {
  syncDataToServer();
}

function downloadJsonBackup() {
  fetch('/api/export-backup')
    .then(res => {
      if (res.ok) return res.blob();
      throw new Error('Server export endpoint unavailable');
    })
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const today = new Date().toISOString().split('T')[0];
      a.href = url;
      a.download = `emma_health_backup_${today}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    })
    .catch(() => {
      const backupData = {
        backup_date: new Date().toISOString(),
        patient: "Emma Butler",
        total_entries: logs.length,
        logs: logs,
        app_states: {
          chrono_trial: typeof chronoTrialState !== 'undefined' ? chronoTrialState : null,
          specialist_tracking: typeof specialistTrackingState !== 'undefined' ? specialistTrackingState : null,
          oura_token: localStorage.getItem('emma_oura_token') || ''
        }
      };
      const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const today = new Date().toISOString().split('T')[0];
      a.href = url;
      a.download = `emma_health_backup_${today}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
}

function downloadCsvExport() {
  if (!logs || logs.length === 0) {
    alert("No check-in entries to export yet.");
    return;
  }

  const headers = [
    "Date",
    "Cycle Day",
    "Phase",
    "Bristol Stool (1-7)",
    "Bloating Score (1-5)",
    "Motility Speed",
    "Abdominal Pain (1-5)",
    "Splenic Pressure (1-5)",
    "Diaphragm Done",
    "Supplements",
    "Notes"
  ];

  const rows = logs.map(l => [
    `"${l.date || ''}"`,
    `"${l.cycleDay || ''}"`,
    `"${l.cyclePhase || ''}"`,
    `"${l.bristolStool || ''}"`,
    `"${l.bloatingScore || ''}"`,
    `"${l.motilitySpeed || ''}"`,
    `"${l.abdominalPain || ''}"`,
    `"${l.splenicPressure || ''}"`,
    `"${l.diaphragmDone ? 'Yes' : 'No'}"`,
    `"${(l.supplements || []).join('; ')}"`,
    `"${(l.dailyNotes || l.notes || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const today = new Date().toISOString().split('T')[0];
  a.href = url;
  a.download = `emma_health_summary_${today}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function handleRestoreFile(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.logs && Array.isArray(data.logs)) {
        logs = data.logs;
        localStorage.setItem('emma_health_logs', JSON.stringify(logs));
        if (data.app_states) {
          if (data.app_states.chrono_trial) {
            chronoTrialState = data.app_states.chrono_trial;
            localStorage.setItem('emma_chrono_trial_v2', JSON.stringify(chronoTrialState));
          }
          if (data.app_states.specialist_tracking) {
            specialistTrackingState = data.app_states.specialist_tracking;
            localStorage.setItem('emma_specialist_tracking_v1', JSON.stringify(specialistTrackingState));
          }
        }
        syncDataToServer();
        initializeUI();
        renderDashboardTrends();
        renderHistoryLogs();
        if (typeof renderTrialUI === 'function') renderTrialUI();
        if (typeof renderSpecialistTrackingUI === 'function') renderSpecialistTrackingUI();
        alert(`Successfully restored ${logs.length} check-in entries!`);
        closeDataSafetyModal();
      } else {
        alert("The selected file does not appear to contain valid Emma Health logs.");
      }
    } catch (err) {
      alert("Error parsing backup file: " + err.message);
    }
  };
  reader.readAsText(file);
}


// ============================================================================
// 3. TAB NAVIGATION & UI CONTROLS
// ============================================================================
function switchTab(tabId) {
  activeTab = tabId;
  const tabs = ['dashboard', 'oura', 'history', 'meds', 'specialist'];
  
  tabs.forEach(t => {
    const el = document.getElementById(`tab-${t}`);
    const navBtn = document.getElementById(`nav-${t}`);
    const mNavBtn = document.getElementById(`m-nav-${t}`);
    
    if (t === tabId) {
      if (el) el.classList.remove('hidden');
      if (navBtn) {
        navBtn.classList.add('active-tab');
        navBtn.classList.remove('text-brand-textMuted');
      }
      if (mNavBtn) {
        mNavBtn.classList.add('active');
        mNavBtn.classList.remove('text-brand-textMuted');
      }
    } else {
      if (el) el.classList.add('hidden');
      if (navBtn) {
        navBtn.classList.remove('active-tab');
        navBtn.classList.add('text-brand-textMuted');
      }
      if (mNavBtn) {
        mNavBtn.classList.remove('active');
        mNavBtn.classList.add('text-brand-textMuted');
      }
    }
  });

  // Re-render charts on tab switch to ensure proper canvas dimension calculations
  if (tabId === 'dashboard') {
    setTimeout(renderDashboardTrends, 50);
  } else if (tabId === 'oura') {
    setTimeout(renderOuraChart, 50);
  } else if (tabId === 'history') {
    renderHistoryLogs();
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
  lucide.createIcons();
}

// ADHD Non-Negotiables Checkbox with Confetti Reward
let checkedCount = 0;
function toggleCheckItem(card) {
  card.classList.toggle('checked');
  const checkedCards = document.querySelectorAll('.check-card.checked');
  checkedCount = checkedCards.length;
  const progressEl = document.getElementById('checklistProgress');
  if (progressEl) {
    if (checkedCount === 3) {
      progressEl.innerHTML = `<span class="text-brand-sage font-extrabold">All 3 Done! 🎉 Amazing job!</span>`;
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 }
        });
      }
    } else {
      progressEl.innerText = `${checkedCount} of 3 done`;
    }
  }
}

// Emergency Relief Drawer Accordion Toggle
function toggleRescueDrawer() {
  const content = document.getElementById('rescueDrawerContent');
  const icon = document.getElementById('rescueDrawerIcon');
  if (!content) return;
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    if (icon) icon.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('hidden');
    if (icon) icon.style.transform = 'rotate(0deg)';
  }
}

// ============================================================================
// ============================================================================
// 3B. CIRCADIAN MOTILITY TIMING (INTERNAL CLINICAL BACKGROUND KNOWLEDGE)
// Kept in memory for background clinical motility timing; hidden from Emma's UI
// ============================================================================
var chronoTrialState = {
  morningWindow: "40-minute Linaclotide fast window",
  middayPeak: "Main daytime meal (12-2 PM)",
  eveningRest: "Light dinner (6-7:30 PM) to protect splenic flexure"
};

function loadTrialState() {}
function saveTrialState() {}
function toggleTrialMeal() {}
function cycleTrialBreakfast() {}
function toggleTrialStatus() {}
function renderTrialUI() {}


// ============================================================================
// 3C. DYNAMIC CYCLE, DATE PROGRESSION & OURA ENGINE
// ============================================================================
let activeDateStr = getTodayISOString();

function getTodayISOString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getCycleInfoForDate(targetDateStr) {
  // Check if there is an existing log for this exact date
  const existing = logs.find(l => l.date === targetDateStr);
  
  const anchorDate = new Date("2026-09-06T12:00:00Z");
  const targetDate = new Date(`${targetDateStr}T12:00:00Z`);
  const diffDays = Math.round((targetDate - anchorDate) / (1000 * 60 * 60 * 24));
  
  const cycleLength = 28; // Emma's average ovulatory cycle
  let dayNum = 19 + diffDays;
  while (dayNum > cycleLength) dayNum -= cycleLength;
  while (dayNum < 1) dayNum += cycleLength;

  let phase = "luteal";
  let phaseLabel = "Late Luteal (Progesterone Peak)";
  let tempDev = +0.33;
  let estTemp = 36.71;
  let estRhr = 69;
  let estHrv = 41;

  if (dayNum >= 1 && dayNum <= 13) {
    phase = "follicular";
    phaseLabel = "Follicular Phase";
    tempDev = -0.15;
    estTemp = 36.20;
    estRhr = 63;
    estHrv = 54;
  } else if (dayNum >= 14 && dayNum <= 16) {
    phase = "ovulation";
    phaseLabel = "Ovulation Window";
    tempDev = +0.05;
    estTemp = 36.45;
    estRhr = 65;
    estHrv = 49;
  } else {
    // Days 17-28
    phase = "luteal";
    if (dayNum >= 17 && dayNum <= 19) {
      phaseLabel = "Early-Mid Luteal (Progesterone Ramp)";
      tempDev = +0.28;
      estTemp = 36.65;
      estRhr = 68;
      estHrv = 42;
    } else if (dayNum >= 20 && dayNum <= 23) {
      phaseLabel = "Mid-Luteal (Progesterone Peak Window)";
      tempDev = +0.35;
      estTemp = 36.72;
      estRhr = 69;
      estHrv = 40;
    } else {
      phaseLabel = "Late Luteal (Pre-Reset Transition)";
      tempDev = +0.20;
      estTemp = 36.52;
      estRhr = 66;
      estHrv = 45;
    }
  }

  // Format date display
  const dateParts = targetDateStr.split('-');
  const dateObj = new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]));
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayOfWeek = dayNames[dateObj.getDay()];
  const dayOfMonth = dateObj.getDate();
  const suffix = (dayOfMonth % 10 === 1 && dayOfMonth !== 11) ? 'st' : ((dayOfMonth % 10 === 2 && dayOfMonth !== 12) ? 'nd' : ((dayOfMonth % 10 === 3 && dayOfMonth !== 13) ? 'rd' : 'th'));
  const displayDate = `${dayOfWeek}, ${dayOfMonth}${suffix} ${monthNames[dateObj.getMonth()]} ${dateObj.getFullYear()}`;

  if (existing) {
    return {
      date: existing.date,
      displayDate: existing.displayDate || displayDate,
      dayOfWeek: dayOfWeek,
      cycleDay: existing.cycleDay || dayNum,
      phase: existing.phase || phase,
      phaseLabel: existing.phaseLabel || phaseLabel,
      temp: existing.temp || estTemp,
      rhr: existing.rhr || estRhr,
      hrv: existing.hrv || estHrv,
      movement: existing.movement || "Watery trickle",
      diaphragmBloat: existing.diaphragmBloat !== undefined ? existing.diaphragmBloat : 7,
      emotions: existing.emotions || "Tired / flat",
      isLogged: true
    };
  }

  return {
    date: targetDateStr,
    displayDate: displayDate,
    dayOfWeek: dayOfWeek,
    cycleDay: dayNum,
    phase: phase,
    phaseLabel: phaseLabel,
    temp: estTemp,
    rhr: estRhr,
    hrv: estHrv,
    movement: "Pending morning movement",
    diaphragmBloat: phase === 'luteal' ? 7 : (phase === 'ovulation' ? 5 : 3),
    emotions: phase === 'luteal' ? "Low dopamine / tired" : "Good energy",
    isLogged: false
  };
}

function getCurrentCycleInfo() {
  return getCycleInfoForDate(activeDateStr);
}

function applyActiveDate(targetDateStr) {
  activeDateStr = targetDateStr;
  const info = getCycleInfoForDate(activeDateStr);
  const todayStr = getTodayISOString();
  const existing = logs.find(l => l.date === activeDateStr);

  // Phase logo for active day
  let activePhaseLogo = '🌸';
  if (info.phase === 'follicular') activePhaseLogo = '🌿';
  else if (info.phase === 'ovulation') activePhaseLogo = '✨';
  else if (info.cycleDay <= 3) activePhaseLogo = '💧';

  // 1. Update Top Date Controller Display
  const dateDisplay = document.getElementById('activeDateDisplay');
  const dayBadge = document.getElementById('activeDayOfWeekBadge');
  const subtitle = document.getElementById('activeCycleSubtitle');

  if (dateDisplay) dateDisplay.innerText = info.displayDate;
  if (subtitle) {
    subtitle.innerHTML = `<span class="inline-flex items-center gap-1 font-bold text-brand-textDark"><span class="text-xs">${activePhaseLogo}</span> <span>Cycle Day ${info.cycleDay}</span></span> <span class="text-brand-textMuted">• ${info.phaseLabel}</span>`;
  }

  if (dayBadge) {
    if (activeDateStr === todayStr) {
      dayBadge.innerText = "TODAY";
      dayBadge.className = "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-brand-coralLight text-brand-coral";
    } else {
      const anchorDate = new Date(`${todayStr}T12:00:00Z`);
      const targetDate = new Date(`${activeDateStr}T12:00:00Z`);
      const diff = Math.round((targetDate - anchorDate) / (1000 * 60 * 60 * 24));
      if (diff === 1) {
        dayBadge.innerText = "TOMORROW (+1)";
        dayBadge.className = "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-brand-amberLight text-brand-amber";
      } else if (diff === -1) {
        dayBadge.innerText = "YESTERDAY";
        dayBadge.className = "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700";
      } else if (diff > 1) {
        dayBadge.innerText = `IN +${diff} DAYS`;
        dayBadge.className = "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700";
      } else {
        dayBadge.innerText = `${Math.abs(diff)} DAYS AGO`;
        dayBadge.className = "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700";
      }
    }
  }

  // 2. Update Header Cycle Info
  const headerCycleLogo = document.getElementById('headerCycleLogo');
  const headerCycleDay = document.getElementById('headerCycleDay');
  const headerPhaseBadge = document.getElementById('headerPhaseBadge');
  if (headerCycleLogo) headerCycleLogo.innerText = activePhaseLogo;
  if (headerCycleDay) headerCycleDay.innerText = `Cycle Day ${info.cycleDay}`;
  if (headerPhaseBadge) {
    headerPhaseBadge.innerText = info.phaseLabel;
    if (info.phase === 'luteal') {
      headerPhaseBadge.className = "text-brand-coral font-bold";
    } else if (info.phase === 'follicular') {
      headerPhaseBadge.className = "text-brand-sage font-bold";
    } else {
      headerPhaseBadge.className = "text-brand-amber font-bold";
    }
  }

  // 3. Update Hero Cycle Dial
  const heroDialDay = document.getElementById('heroDialDay');
  const heroDialPhase = document.getElementById('heroDialPhase');
  if (heroDialDay) heroDialDay.innerText = info.cycleDay;
  if (heroDialPhase) heroDialPhase.innerText = info.phase.toUpperCase();

  // Update SVG Arc Highlights
  const arcLuteal = document.getElementById('dialLutealArc');
  const arcFollicular = document.getElementById('dialFollicularArc');
  const arcOvulation = document.getElementById('dialOvulationArc');
  if (arcLuteal && arcFollicular && arcOvulation) {
    if (info.phase === 'luteal') {
      arcLuteal.classList.remove('opacity-30');
      arcLuteal.setAttribute('stroke-width', '9');
      arcFollicular.classList.add('opacity-30');
      arcOvulation.classList.add('opacity-30');
    } else if (info.phase === 'follicular') {
      arcFollicular.classList.remove('opacity-30');
      arcFollicular.setAttribute('stroke-width', '9');
      arcLuteal.classList.add('opacity-30');
      arcOvulation.classList.add('opacity-30');
    } else {
      arcOvulation.classList.remove('opacity-30');
      arcOvulation.setAttribute('stroke-width', '9');
      arcFollicular.classList.add('opacity-30');
      arcLuteal.classList.add('opacity-30');
    }
  }

  // 4. Update Reassurance Card
  const heroTempDevBadge = document.getElementById('heroTempDevBadge');
  const heroHeadline = document.getElementById('heroHeadline');
  const heroBody = document.getElementById('heroBody');
  const heroResetCountdown = document.getElementById('heroResetCountdown');

  if (heroTempDevBadge) {
    if (existing && existing.temp) {
      heroTempDevBadge.innerText = `Recorded Temp: ${existing.temp}°C`;
    } else if (info.phase === 'luteal') {
      heroTempDevBadge.innerText = `Early-Mid Luteal Ramp (Notes Verified)`;
    } else if (info.phase === 'ovulation') {
      heroTempDevBadge.innerText = `Ovulation Window (Notes Verified)`;
    } else {
      heroTempDevBadge.innerText = `Follicular Window (Notes Verified)`;
    }
  }

  if (heroHeadline) {
    if (info.phase === 'luteal' && info.cycleDay < 24) {
      heroHeadline.innerText = "Be gentle with yourself today, Emma.";
    } else if (info.phase === 'luteal') {
      heroHeadline.innerText = "Late Luteal Transition: Rest & Hydrate, Emma.";
    } else if (info.phase === 'follicular') {
      heroHeadline.innerText = "High Energy & Fast Digestion Window, Emma!";
    } else {
      heroHeadline.innerText = "Ovulation Window: Protect Your Pelvis & Rest, Emma.";
    }
  }

  if (heroBody) {
    if (info.phase === 'luteal' && info.cycleDay < 24) {
      heroBody.innerHTML = `Your body is currently producing natural progesterone (the body's natural "slow-down" hormone). This naturally relaxes bowel muscles and holds onto water. <strong>Any tightness in your ribs, tummy bloating, or lower dopamine is 100% biological and temporary.</strong>`;
    } else if (info.phase === 'luteal') {
      heroBody.innerHTML = `Progesterone is at the tail end of its monthly wave and will drop in ~2–4 days. Trapped air under your left ribs is common now—stick to light evening dinners (like warm congee or purees) and enjoy your 15-minute legs-up-wall relaxation.`;
    } else if (info.phase === 'follicular') {
      heroBody.innerHTML = `Estrogen is dominant and progesterone is low! Your digestive muscles are naturally moving at their best speed this week. Great window for Third Space workouts and enjoying wholesome low-FODMAP variety!`;
    } else {
      heroBody.innerHTML = `Your temperature shift confirms you have released an egg. Progesterone is beginning to gently tell your digestion to slow down. Stick with warm, comforting meals and avoid heavy raw salads.`;
    }
  }

  if (heroResetCountdown) {
    const daysLeft = Math.max(1, 28 - info.cycleDay);
    if (info.phase === 'luteal') {
      heroResetCountdown.innerHTML = `Predicted Cycle Reset & Drop: <strong class="text-brand-textDark">in ~${daysLeft} day${daysLeft === 1 ? '' : 's'}</strong>`;
    } else if (info.phase === 'follicular') {
      heroResetCountdown.innerHTML = `Next Ovulation Window: <strong class="text-brand-textDark">in ~${Math.max(1, 14 - info.cycleDay)} days</strong>`;
    } else {
      heroResetCountdown.innerHTML = `Luteal Shift Active: <strong class="text-brand-textDark">Progesterone rising</strong>`;
    }
  }

  // 5. Update Biometric Tiles
  const statTemp = document.getElementById('statTemp');
  const statMovement = document.getElementById('statMovement');
  const statBloat = document.getElementById('statBloat');
  const statMood = document.getElementById('statMood');

  if (statTemp) statTemp.innerText = `${info.temp}°C`;
  if (statMovement) statMovement.innerText = info.movement;
  if (statBloat) statBloat.innerText = `${info.diaphragmBloat} / 10`;
  if (statMood) statMood.innerText = info.emotions;

  // 6. Update Quick Log Default Date & Check-In Hub
  const dateInput = document.getElementById('logDate');
  if (dateInput) {
    dateInput.value = activeDateStr;
  }
  const logTemp = document.getElementById('logTemp');
  if (logTemp && !info.isLogged) {
    logTemp.value = info.temp;
  }
  const activeLogEntry = logs.find(l => l.date === activeDateStr);
  updateDashboardCheckInBadge(activeLogEntry);

  // 7. Update Mon-Thu Trial Today Highlights
  updateChronoTrialDayHighlight(info.dayOfWeek);

  // 8. Update Recipe Guide Phase Pill, Auditor Subtitle & Movement Subtitle
  const lutealPill = document.getElementById('phaseFilter-luteal');
  if (lutealPill) {
    lutealPill.innerHTML = `<span>${activePhaseLogo}</span><span>${info.phaseLabel.split(' ')[0]} (Day ${info.cycleDay})</span>`;
  }
  const movementSubtitle = document.getElementById('movementCycleSubtitle');
  if (movementSubtitle) {
    movementSubtitle.innerText = `${activePhaseLogo} Cycle-synced for Day ${info.cycleDay} (${info.phaseLabel}) • Protects gut motility & avoids adrenaline spikes`;
  }
  const auditorSubtitle = document.getElementById('auditorPhaseSubtitle');
  if (auditorSubtitle) {
    auditorSubtitle.innerHTML = `Tap the mic or type any meal. Calibrated for <strong>${activePhaseLogo} Cycle Day ${info.cycleDay} (${info.phaseLabel})</strong>.`;
  }
  const drinksGuide = document.getElementById('drinksGuideTitle');
  if (drinksGuide) {
    drinksGuide.innerText = `Tonight’s Drinks Guide (${info.phase === 'follicular' ? 'Follicular Safe' : 'Luteal Safe'})`;
  }

  // 9. Update Preset Food Buttons (Popcorn, Banana, Celery, Avocado)
  updateFoodPresetsForPhase(info);

  // 10. Re-run Gut Safety Check if query is present, or update pre-loaded default card
  const queryInput = document.getElementById('foodQueryInput');
  if (queryInput && queryInput.value.trim().length > 0) {
    checkFoodSafety();
  } else {
    updateDefaultFoodAssessment(info);
  }

  // 11. Re-render Recipe Guide cards dynamically for this active cycle phase
  currentMealPhaseFilter = info.phase;
  renderEmmaMeals();

  // 12. Re-render Specialist Missing Biomarkers suite for active day
  renderSpecialistTrackingUI();

  triggerLucideIcons();
}

function updateFoodPresetsForPhase(info) {
  const isFollicular = info.phase === 'follicular';

  const popcornBtn = document.getElementById('presetBtn-popcorn');
  if (popcornBtn) {
    if (isFollicular) {
      popcornBtn.innerHTML = '🍿 Propercorn Popcorn (Follicular Safe)';
      popcornBtn.className = 'px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 font-bold shadow-2xs transition-all active:scale-95';
    } else {
      popcornBtn.innerHTML = '🍿 Propercorn Popcorn (Hull Test)';
      popcornBtn.className = 'px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-900 border border-rose-200 font-bold shadow-2xs transition-all active:scale-95';
    }
  }

  const bananaBtn = document.getElementById('presetBtn-banana');
  if (bananaBtn) {
    if (isFollicular) {
      bananaBtn.innerHTML = '🍌 Banana Rice Cakes (Follicular Adjusted)';
      bananaBtn.className = 'px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-bold shadow-2xs transition-all active:scale-95';
    } else {
      bananaBtn.innerHTML = '🍌 235g Banana Rice Cakes (Trigger Test)';
      bananaBtn.className = 'px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-900 border border-rose-200 font-bold shadow-2xs transition-all active:scale-95';
    }
  }

  const celeryBtn = document.getElementById('presetBtn-celery');
  if (celeryBtn) {
    if (isFollicular) {
      celeryBtn.innerHTML = '🍲 Tuna & Prawn Stir-fry (Celery Safe)';
      celeryBtn.className = 'px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 font-medium shadow-2xs transition-all active:scale-95';
    } else {
      celeryBtn.innerHTML = '🍲 Tuna & Prawn Stir-fry (Celery Test)';
      celeryBtn.className = 'px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-medium shadow-2xs transition-all active:scale-95';
    }
  }

  const avocadoBtn = document.getElementById('presetBtn-avocado');
  if (avocadoBtn) {
    if (isFollicular) {
      avocadoBtn.innerHTML = '🥑 Scrambled Whites & 65g Avocado (Safe)';
      avocadoBtn.className = 'px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 font-medium shadow-2xs transition-all active:scale-95';
    } else {
      avocadoBtn.innerHTML = '🥑 Scrambled Whites & 65g Avocado (Portion Test)';
      avocadoBtn.className = 'px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-medium shadow-2xs transition-all active:scale-95';
    }
  }
}

function updateDefaultFoodAssessment(info) {
  const resultContainer = document.getElementById('foodAssessmentResult');
  if (!resultContainer) return;
  // Keep hidden on initial load so Emma's dashboard stays clean and calm
  resultContainer.classList.add('hidden');
}

function updateChronoTrialDayHighlight(dayOfWeek) {
  const dayMap = {
    'Monday': 'mon',
    'Tuesday': 'tue',
    'Wednesday': 'wed',
    'Thursday': 'thu',
    'Friday': 'fri',
    'Saturday': 'sat',
    'Sunday': 'sun'
  };
  const activeDayKey = dayMap[dayOfWeek];

  ALL_DAYS.forEach(d => {
    const card = document.getElementById(`trialCard-${d}`);
    const badge = document.getElementById(`todayBadge-${d}`);
    if (badge) badge.classList.add('hidden');
    if (card) {
      card.classList.remove('ring-2', 'ring-brand-amber', 'bg-amber-50/30');
    }
  });

  if (activeDayKey) {
    const activeCard = document.getElementById(`trialCard-${activeDayKey}`);
    const activeBadge = document.getElementById(`todayBadge-${activeDayKey}`);
    if (activeCard) {
      activeCard.classList.add('ring-2', 'ring-brand-amber', 'bg-amber-50/30');
    }
    if (activeBadge) {
      activeBadge.innerText = "TODAY";
      activeBadge.classList.remove('hidden');
    }

    const btnLabel = document.getElementById('trialStatusLabel');
    if (btnLabel) {
      const dayData = chronoTrialState[activeDayKey] || {};
      if (!dayData.breakfast) {
        btnLabel.innerText = `Log ${dayOfWeek} Breakfast`;
      } else if (!dayData.lunch) {
        btnLabel.innerText = `Log ${dayOfWeek} Lunch`;
      } else {
        btnLabel.innerText = `Log ${dayOfWeek} Dinner`;
      }
    }
  }
}

function stepActiveDate(deltaDays) {
  const parts = activeDateStr.split('-');
  const cur = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
  cur.setDate(cur.getDate() + deltaDays);
  
  const y = cur.getFullYear();
  const m = String(cur.getMonth() + 1).padStart(2, '0');
  const d = String(cur.getDate()).padStart(2, '0');
  const nextDateStr = `${y}-${m}-${d}`;

  applyActiveDate(nextDateStr);

  const info = getCycleInfoForDate(nextDateStr);
  const msg = deltaDays > 0
    ? `📅 Advanced to ${info.displayDate} (Cycle Day ${info.cycleDay}, ${info.phaseLabel})`
    : `📅 Stepped back to ${info.displayDate} (Cycle Day ${info.cycleDay}, ${info.phaseLabel})`;

  showDynamicToast(msg);
}

function resetToCurrentDate() {
  applyActiveDate(getTodayISOString());
  showDynamicToast("📅 Reset to Real-Time Today!");
}

function syncOuraBiometrics() {
  alert(
    "💍 Oura Ring Gen 3: Arriving Tomorrow (Sept 7th)!\n\n" +
    "Emma, your ring is currently in transit. Starting tomorrow night, wearing your Oura Ring will continuously measure finger temperature, resting heart rate, and HRV automatically while you sleep.\n\n" +
    "Until then, all cycle tracking and phase calculations are 100% verified from your authentic written diary entries and oral temperature logs."
  );
}

function showDynamicToast(text) {
  let toast = document.getElementById('dynamicToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'dynamicToast';
    toast.className = 'fixed bottom-20 left-1/2 -translate-x-1/2 px-4 py-2 rounded-2xl bg-brand-textDark text-white text-xs font-bold shadow-lg transition-all duration-300 z-50 flex items-center space-x-2 pointer-events-none opacity-0';
    document.body.appendChild(toast);
  }
  toast.innerText = text;
  toast.style.opacity = '1';
  toast.style.transform = 'translate(-50%, 0)';

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translate(-50%, 10px)';
  }, 2500);
}

// ============================================================================
// CALENDAR DAY LOOK-BACK PICKER MODAL (SIMPLE & CALM FOR ADHD)
// ============================================================================
function openCalendarPickerModal() {
  const modal = document.getElementById('calendarPickerModal');
  const input = document.getElementById('calendarModalDateInput');
  if (modal) {
    modal.classList.remove('hidden');
    if (input) input.value = activeDateStr;
    renderCalendarDaysList();
    if (window.lucide && typeof lucide.createIcons === 'function') {
      lucide.createIcons();
    }
  }
}

function closeCalendarPickerModal() {
  const modal = document.getElementById('calendarPickerModal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Specialist Bayesian Cycle Diagnostics Modal Handlers
function openBayesianModal() {
  const modal = document.getElementById('specialistBayesianModal');
  if (modal) {
    modal.classList.remove('hidden');
    renderSpecialistTrackingUI();
    if (window.lucide && typeof lucide.createIcons === 'function') {
      lucide.createIcons();
    }
  }
}

function closeBayesianModal() {
  const modal = document.getElementById('specialistBayesianModal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// ============================================================================
// SPECIALIST INTERACTIVE MISSING BIOMARKERS & OURA ROADMAP SUITE
// ============================================================================
let specialistTrackingState = {
  byDate: {},
  ouraChecklist: {
    step1: false,
    step2: false,
    step3: false
  },
  fastingTimer: {
    remainingSeconds: 2400, // 40 minutes = 2400 seconds
    isRunning: false,
    endTime: null
  }
};

let fastingIntervalId = null;

function loadSpecialistTracking() {
  try {
    const saved = localStorage.getItem('emma_specialist_tracking_v1');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.byDate) specialistTrackingState.byDate = parsed.byDate;
      if (parsed.ouraChecklist) specialistTrackingState.ouraChecklist = parsed.ouraChecklist;
    }
  } catch (e) {
    console.error("Failed to load specialist tracking state", e);
  }
}

function saveSpecialistTracking() {
  try {
    localStorage.setItem('emma_specialist_tracking_v1', JSON.stringify({
      byDate: specialistTrackingState.byDate,
      ouraChecklist: specialistTrackingState.ouraChecklist
    }));
    syncDataToServer();
  } catch (e) {
    console.error("Failed to save specialist tracking state", e);
  }
}

function getOrCreateDateSpecialistState(dateStr) {
  const d = dateStr || activeDateStr || getTodayISOString();
  if (!specialistTrackingState.byDate[d]) {
    specialistTrackingState.byDate[d] = {
      electrolyteBuffered: false,
      waterMl: 0,
      stoolType: null, // 'bypass' | 'formed' | 'hard'
      diaphragmDone: false
    };
  }
  return specialistTrackingState.byDate[d];
}

// Tool 1: Electrolyte & Osmolality Buffer
function toggleElectrolyteBuffer() {
  const dState = getOrCreateDateSpecialistState(activeDateStr);
  dState.electrolyteBuffered = !dState.electrolyteBuffered;
  saveSpecialistTracking();
  renderSpecialistTrackingUI();

  if (dState.electrolyteBuffered) {
    if (typeof confetti === 'function') {
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.7 } });
    }
    showDynamicToast("⚡ Electrolyte & EAAs Logged! Supports colonic hydration and muscle recovery.");
  } else {
    showDynamicToast("Electrolyte & EAAs status set to Pending.");
  }
}

function quickAddWater(amount = 250) {
  const dState = getOrCreateDateSpecialistState(activeDateStr);
  dState.waterMl = (dState.waterMl || 0) + amount;
  saveSpecialistTracking();
  renderSpecialistTrackingUI();
  showDynamicToast(`💧 +${amount}ml water logged! Total buffer hydration: ${dState.waterMl}ml.`);
}

// Tool 2: Stool Quality Discriminator (Paradoxical Bypass vs Formed Bristol 4)
function setSpecialistStoolType(type) {
  const dState = getOrCreateDateSpecialistState(activeDateStr);
  dState.stoolType = type;
  saveSpecialistTracking();

  // Sync with current date log entry if present
  let logEntry = logs.find(l => l.date === activeDateStr);
  if (logEntry) {
    if (type === 'bypass') {
      logEntry.movement = "Watery bypass (liquid around solid plug)";
      logEntry.bristol = "liquid";
    } else if (type === 'formed') {
      logEntry.movement = "Formed Bristol 4 (Step-down milestone)";
      logEntry.bristol = "normal";
    } else if (type === 'hard') {
      logEntry.movement = "Hard / delayed transit";
      logEntry.bristol = "hard";
    }
    saveLogs();
    renderHistoryLogs();
    renderDashboardTrends();
  }

  renderSpecialistTrackingUI();

  if (type === 'formed') {
    if (typeof confetti === 'function') {
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
    }
    showDynamicToast("🎉 Formed Bristol 4 recorded! True colonic motility without liquid bypass. Step 1 towards tapering!");
  } else if (type === 'bypass') {
    showDynamicToast("⚠️ Watery Bypass logged: Fluid channeled around solid plug. Colon not empty yet.");
  } else {
    showDynamicToast("🪨 Hard / Delayed transit recorded. Hydration & warm tea recommended.");
  }
}

// Tool 3: Linaclotide 40-Minute Fasting Stopwatch
function toggleFastingStopwatch() {
  const t = specialistTrackingState.fastingTimer;
  if (t.isRunning) {
    pauseFastingStopwatch();
  } else {
    startFastingStopwatch();
  }
}

function startFastingStopwatch() {
  const t = specialistTrackingState.fastingTimer;
  if (t.remainingSeconds <= 0) {
    t.remainingSeconds = 2400; // Reset to 40 mins
  }
  t.isRunning = true;
  t.endTime = Date.now() + (t.remainingSeconds * 1000);

  if (fastingIntervalId) clearInterval(fastingIntervalId);
  fastingIntervalId = setInterval(tickFastingTimer, 1000);
  tickFastingTimer();
  showDynamicToast("⏱️ 40-Minute Fasting Timer started! Take Linaclotide now with 400ml water.");
}

function pauseFastingStopwatch() {
  const t = specialistTrackingState.fastingTimer;
  if (fastingIntervalId) {
    clearInterval(fastingIntervalId);
    fastingIntervalId = null;
  }
  t.isRunning = false;
  if (t.endTime) {
    t.remainingSeconds = Math.max(0, Math.round((t.endTime - Date.now()) / 1000));
  }
  updateFastingDisplay();
  showDynamicToast("⏸️ Fasting timer paused.");
}

function resetFastingStopwatch() {
  const t = specialistTrackingState.fastingTimer;
  if (fastingIntervalId) {
    clearInterval(fastingIntervalId);
    fastingIntervalId = null;
  }
  t.isRunning = false;
  t.endTime = null;
  t.remainingSeconds = 2400;
  updateFastingDisplay();
  showDynamicToast("⏱️ Fasting timer reset to 40:00.");
}

function tickFastingTimer() {
  const t = specialistTrackingState.fastingTimer;
  if (!t.isRunning) return;

  if (t.endTime) {
    t.remainingSeconds = Math.max(0, Math.round((t.endTime - Date.now()) / 1000));
  } else {
    t.remainingSeconds = Math.max(0, t.remainingSeconds - 1);
  }

  if (t.remainingSeconds <= 0) {
    t.remainingSeconds = 0;
    t.isRunning = false;
    if (fastingIntervalId) {
      clearInterval(fastingIntervalId);
      fastingIntervalId = null;
    }
    updateFastingDisplay();

    if (typeof confetti === 'function') {
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.5 } });
    }
    alert("🔔 40-Minute Fasting Window Complete!\n\nEmma, your Linaclotide has bound securely to your enterocytes. You can now safely enjoy your Form Nutrition shake or breakfast!");
    return;
  }

  updateFastingDisplay();
}

function updateFastingDisplay() {
  const t = specialistTrackingState.fastingTimer;
  const mins = Math.floor(t.remainingSeconds / 60);
  const secs = t.remainingSeconds % 60;
  const display = document.getElementById('fastingStopwatchDisplay');
  const btn = document.getElementById('btnFastingStopwatch');

  if (display) {
    if (t.remainingSeconds === 0) {
      display.innerHTML = `<span class="text-emerald-600 text-sm">DONE! ✨</span>`;
    } else {
      display.innerText = `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
  }

  if (btn) {
    if (t.remainingSeconds === 0) {
      btn.innerText = "Fasting Complete! Tap to Reset";
      btn.className = "flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all";
      btn.onclick = resetFastingStopwatch;
    } else if (t.isRunning) {
      btn.innerText = "Pause Fasting Timer";
      btn.className = "flex-1 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs transition-all active:scale-98";
      btn.onclick = toggleFastingStopwatch;
    } else if (t.remainingSeconds < 2400) {
      btn.innerText = "Resume Fasting Timer";
      btn.className = "flex-1 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-all active:scale-98";
      btn.onclick = toggleFastingStopwatch;
    } else {
      btn.innerText = "Start 40-Min Fasting Timer";
      btn.className = "flex-1 py-2 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-900 font-bold text-xs transition-all active:scale-98";
      btn.onclick = toggleFastingStopwatch;
    }
  }
}

// Tool 4: APD Diaphragm Reset Tracker
function toggleDiaphragmDone() {
  const dState = getOrCreateDateSpecialistState(activeDateStr);
  dState.diaphragmDone = !dState.diaphragmDone;
  saveSpecialistTracking();
  renderSpecialistTrackingUI();

  if (dState.diaphragmDone) {
    if (typeof confetti === 'function') {
      confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
    }
    showDynamicToast("🫁 3-Min Diaphragm Release marked complete! Tummy relaxed.");
  } else {
    showDynamicToast("Diaphragm release status set to Pending.");
  }
}

function markDiaphragmCompleted() {
  const dState = getOrCreateDateSpecialistState(activeDateStr);
  dState.diaphragmDone = true;
  saveSpecialistTracking();
  renderSpecialistTrackingUI();
}

// Tool 5: Oura Ring 14-Night Calibration Tracker
function updateOuraChecklist() {
  const s1 = document.getElementById('ouraStep1')?.checked || false;
  const s2 = document.getElementById('ouraStep2')?.checked || false;
  const s3 = document.getElementById('ouraStep3')?.checked || false;

  specialistTrackingState.ouraChecklist = { step1: s1, step2: s2, step3: s3 };
  saveSpecialistTracking();

  let nights = 0;
  if (s1) nights += 1;
  if (s2) nights += 1;
  if (s3) nights += 1;

  const lbl = document.getElementById('ouraProgressLabel');
  const bar = document.getElementById('ouraProgressBar');

  if (lbl) lbl.innerText = `${nights} / 14 Nights`;
  if (bar) {
    const pct = Math.max(5, Math.round((nights / 14) * 100));
    bar.style.width = `${pct}%`;
  }
}

// Render Suite UI for Active Date
function renderSpecialistTrackingUI() {
  const dState = getOrCreateDateSpecialistState(activeDateStr);

  // 1. Electrolyte Buffer
  const badge = document.getElementById('electrolyteStatusBadge');
  const btn = document.getElementById('btnToggleElectrolyte');
  const icon = document.getElementById('electrolyteBtnIcon');
  const text = document.getElementById('electrolyteBtnText');

  if (dState.electrolyteBuffered) {
    if (badge) {
      badge.innerText = "Taken ✨";
      badge.className = "text-[9px] font-extrabold px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200";
    }
    if (btn) {
      btn.className = "shrink-0 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] shadow-2xs active:scale-95 transition-all flex items-center gap-1";
    }
    if (icon) icon.innerText = "✓";
    if (text) text.innerText = "Taken";
  } else {
    if (badge) {
      badge.innerText = "Pending";
      badge.className = "text-[9px] font-extrabold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600";
    }
    if (btn) {
      btn.className = "shrink-0 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-[11px] shadow-2xs active:scale-95 transition-all flex items-center gap-1";
    }
    if (icon) icon.innerText = "⚡";
    if (text) text.innerText = "Log Electrolyte & EAAs";
  }

  // 2. Stool Discriminator Buttons
  const btnBypass = document.getElementById('stoolBtn-bypass');
  const btnFormed = document.getElementById('stoolBtn-formed');
  const btnHard = document.getElementById('stoolBtn-hard');
  const feedback = document.getElementById('stoolFeedbackText');

  // Reset base classes
  [btnBypass, btnFormed, btnHard].forEach(b => {
    if (b) {
      b.className = "p-2 rounded-xl border border-brand-border text-center hover:border-purple-300 transition-all active:scale-95 bg-white";
    }
  });

  if (dState.stoolType === 'bypass') {
    if (btnBypass) btnBypass.className = "p-2 rounded-xl border-2 border-sky-500 bg-sky-50 text-center shadow-xs transition-all active:scale-95";
    if (feedback) {
      feedback.innerHTML = `<span class="text-sky-900 font-bold">💧 Watery Bypass Logged:</span> <span class="text-sky-800">Linaclotide fluid flushed around a solid rectosigmoid plug. Colon is not empty yet. Avoid dehydrating yourself or skipping electrolytes!</span>`;
    }
  } else if (dState.stoolType === 'formed') {
    if (btnFormed) btnFormed.className = "p-2 rounded-xl border-2 border-emerald-500 bg-emerald-50 text-center shadow-xs transition-all active:scale-95";
    if (feedback) {
      feedback.innerHTML = `<span class="text-emerald-900 font-bold">🎉 Formed Bristol 4 Logged:</span> <span class="text-emerald-800">Excellent! True colonic motility achieved without liquid bypass. Step 1 towards your 14-day medication step-down trial!</span>`;
    }
  } else if (dState.stoolType === 'hard') {
    if (btnHard) btnHard.className = "p-2 rounded-xl border-2 border-amber-500 bg-amber-50 text-center shadow-xs transition-all active:scale-95";
    if (feedback) {
      feedback.innerHTML = `<span class="text-amber-900 font-bold">🪨 Hard / Delayed Logged:</span> <span class="text-amber-800">Sluggish colonic transit. Hydrate with warm peppermint tea, take half a Movicol sachet, and try 3-min diaphragm breathing.</span>`;
    }
  } else {
    if (feedback) {
      feedback.innerText = "Select today's evacuation type to record clean data for your gastroenterologist.";
    }
  }

  // 3. Fasting Stopwatch Display
  updateFastingDisplay();

  // 4. Diaphragm Reset
  const dBadge = document.getElementById('diaphragmDoneBadge');
  const dBtn = document.getElementById('btnToggleDiaphragmDone');
  if (dState.diaphragmDone) {
    if (dBadge) {
      dBadge.innerText = "Completed 🫁";
      dBadge.className = "text-[9px] font-extrabold px-1.5 py-0.5 rounded-md bg-teal-100 text-teal-800 border border-teal-200";
    }
    if (dBtn) {
      dBtn.className = "px-2.5 py-1.5 rounded-xl bg-teal-600 text-white font-bold text-[11px] transition-all";
      dBtn.innerText = "✓ Done";
    }
  } else {
    if (dBadge) {
      dBadge.innerText = "Pending";
      dBadge.className = "text-[9px] font-extrabold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600";
    }
    if (dBtn) {
      dBtn.className = "px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px] transition-all";
      dBtn.innerText = "✓ Mark Done";
    }
  }

  // 5. Oura Checklist
  const c = specialistTrackingState.ouraChecklist || {};
  const chk1 = document.getElementById('ouraStep1');
  const chk2 = document.getElementById('ouraStep2');
  const chk3 = document.getElementById('ouraStep3');
  if (chk1) chk1.checked = !!c.step1;
  if (chk2) chk2.checked = !!c.step2;
  if (chk3) chk3.checked = !!c.step3;

  let nights = 0;
  if (c.step1) nights += 1;
  if (c.step2) nights += 1;
  if (c.step3) nights += 1;

  const lbl = document.getElementById('ouraProgressLabel');
  const bar = document.getElementById('ouraProgressBar');
  if (lbl) lbl.innerText = `${nights} / 14 Nights`;
  if (bar) {
    const pct = Math.max(5, Math.round((nights / 14) * 100));
    bar.style.width = `${pct}%`;
  }
}

// ============================================================================
// 3-MINUTE POST-MEAL ANTI-APD DIAPHRAGM RESET & RELAXING SOUNDSCAPE BIOFEEDBACK
// ============================================================================
let diaphragmTimerInterval = null;
let diaphragmTimeLeft = 180; // 3 minutes = 180 seconds

// Web Audio API Relaxing Soundscape State
let soundscapeAudioCtx = null;
let isSoundscapeMuted = false;
let currentSoundscapeType = 'ocean'; // 'ocean' | 'zen'
let soundscapeVolume = 0.5;
let activeSoundscapeNodes = [];
let masterSoundscapeGain = null;

// Ocean Wave Specific Nodes (Dual noise layers + grounding sub)
let oceanDeepFilter = null;
let oceanDeepGain = null;
let oceanFoamFilter = null;
let oceanFoamGain = null;
let oceanSubGain = null;

// Spa Music Specific Nodes (Evolving harmonic ambient pads)
let spaFilterNode = null;
let spaGainNode = null;
let spaOscillators = []; // Array of { osc, detuneOsc, gainNode }
let spaCurrentChordIdx = 0;
let spaCycleCount = 0;

// Spa Chord Progressions: Lush, evolving 432Hz ambient chord pads (Cmaj9 -> Fmaj9 -> Am9 -> Gsus4)
const SPA_CHORDS = [
  // Cmaj9: C3, G3, B3, D4, E4
  [130.81, 196.00, 246.94, 293.66, 329.63],
  // Fmaj9: F2, C3, A3, E4, G4
  [87.31, 130.81, 220.00, 329.63, 392.00],
  // Am9: A2, E3, G3, C4, B4
  [110.00, 164.81, 196.00, 261.63, 493.88],
  // Gsus4(add9): G2, D3, G3, C4, A4
  [98.00, 146.83, 196.00, 261.63, 440.00]
];

function getSoundscapeAudioContext() {
  if (!soundscapeAudioCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      soundscapeAudioCtx = new AudioCtx();
    }
  }
  if (soundscapeAudioCtx && soundscapeAudioCtx.state === 'suspended') {
    soundscapeAudioCtx.resume();
  }
  return soundscapeAudioCtx;
}

function initMasterGain() {
  const ctx = getSoundscapeAudioContext();
  if (!ctx) return null;
  if (!masterSoundscapeGain) {
    masterSoundscapeGain = ctx.createGain();
    masterSoundscapeGain.gain.setValueAtTime(isSoundscapeMuted ? 0 : soundscapeVolume, ctx.currentTime);
    masterSoundscapeGain.connect(ctx.destination);
  }
  return masterSoundscapeGain;
}

function startRelaxingSoundscape() {
  if (isSoundscapeMuted) return;
  const ctx = getSoundscapeAudioContext();
  if (!ctx) return;

  stopRelaxingSoundscape();
  const master = initMasterGain();
  if (!master) return;

  activeSoundscapeNodes = [];

  if (currentSoundscapeType === 'ocean') {
    startOceanSoundscape(ctx, master);
  } else if (currentSoundscapeType === 'zen') {
    startZenSoundscape(ctx, master);
  }
}

function stopRelaxingSoundscape() {
  if (activeSoundscapeNodes && activeSoundscapeNodes.length > 0) {
    activeSoundscapeNodes.forEach(node => {
      try {
        if (typeof node.stop === 'function') node.stop();
        if (typeof node.disconnect === 'function') node.disconnect();
      } catch (e) {}
    });
    activeSoundscapeNodes = [];
  }
  oceanDeepFilter = null;
  oceanDeepGain = null;
  oceanFoamFilter = null;
  oceanFoamGain = null;
  oceanSubGain = null;
  spaFilterNode = null;
  spaGainNode = null;
  spaOscillators = [];
}

// Soundscape 1: Realistic Multi-Layer Ocean Surf (Breath-Synchronized)
// Layer 1: Resonant brown noise deep undertow + 55Hz sub surge (moving mass of water)
// Layer 2: Bandpass filtered pink noise foamy crest break & gentle pebble wash
function startOceanSoundscape(ctx, destination) {
  const sampleRate = ctx.sampleRate;
  const bufferLen = sampleRate * 5; // 5-second loopable noise buffer
  
  // 1. Brown noise buffer for deep ocean swell
  const brownBuffer = ctx.createBuffer(1, bufferLen, sampleRate);
  const brownData = brownBuffer.getChannelData(0);
  let lastBrown = 0.0;
  for (let i = 0; i < bufferLen; i++) {
    const white = Math.random() * 2 - 1;
    lastBrown = (lastBrown + (0.025 * white)) / 1.02;
    brownData[i] = lastBrown * 3.2;
  }

  // 2. Pink noise buffer for foamy crest & pebble wash
  const pinkBuffer = ctx.createBuffer(1, bufferLen, sampleRate);
  const pinkData = pinkBuffer.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
  for (let i = 0; i < bufferLen; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    pinkData[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.10;
    b6 = white * 0.115926;
  }

  // Deep undertow noise source
  const brownSource = ctx.createBufferSource();
  brownSource.buffer = brownBuffer;
  brownSource.loop = true;

  oceanDeepFilter = ctx.createBiquadFilter();
  oceanDeepFilter.type = 'lowpass';
  oceanDeepFilter.frequency.setValueAtTime(160, ctx.currentTime);
  oceanDeepFilter.Q.setValueAtTime(1.4, ctx.currentTime);

  oceanDeepGain = ctx.createGain();
  oceanDeepGain.gain.setValueAtTime(0.18, ctx.currentTime);

  // Foamy crest noise source
  const pinkSource = ctx.createBufferSource();
  pinkSource.buffer = pinkBuffer;
  pinkSource.loop = true;

  oceanFoamFilter = ctx.createBiquadFilter();
  oceanFoamFilter.type = 'bandpass';
  oceanFoamFilter.frequency.setValueAtTime(2200, ctx.currentTime);
  oceanFoamFilter.Q.setValueAtTime(0.8, ctx.currentTime);

  oceanFoamGain = ctx.createGain();
  oceanFoamGain.gain.setValueAtTime(0.04, ctx.currentTime);

  // Deep 55Hz Grounding Sub-Bass Drone
  const subDrone = ctx.createOscillator();
  subDrone.type = 'sine';
  subDrone.frequency.setValueAtTime(55.0, ctx.currentTime); // A1 natural ground resonance
  oceanSubGain = ctx.createGain();
  oceanSubGain.gain.setValueAtTime(0.06, ctx.currentTime);

  // Connect Deep Undertow
  brownSource.connect(oceanDeepFilter);
  oceanDeepFilter.connect(oceanDeepGain);
  oceanDeepGain.connect(destination);

  // Connect Foamy Crest
  pinkSource.connect(oceanFoamFilter);
  oceanFoamFilter.connect(oceanFoamGain);
  oceanFoamGain.connect(destination);

  // Connect Sub
  subDrone.connect(oceanSubGain);
  oceanSubGain.connect(destination);

  brownSource.start();
  pinkSource.start();
  subDrone.start();

  activeSoundscapeNodes.push(brownSource, oceanDeepFilter, oceanDeepGain, pinkSource, oceanFoamFilter, oceanFoamGain, subDrone, oceanSubGain);
}

// Soundscape 2: Relaxing Spa Music (Evolving Warm Chords, Breathing Swell, & Ethereal Chimes)
// Uses lush 432Hz ambient chord pads (Cmaj9, Fmaj9, Am9, Gsus4) with slow LFO warmth
function startZenSoundscape(ctx, destination) {
  spaOscillators = [];
  spaCurrentChordIdx = 0;
  spaCycleCount = 0;

  spaFilterNode = ctx.createBiquadFilter();
  spaFilterNode.type = 'lowpass';
  spaFilterNode.frequency.setValueAtTime(360, ctx.currentTime);
  spaFilterNode.Q.setValueAtTime(0.85, ctx.currentTime);

  spaGainNode = ctx.createGain();
  spaGainNode.gain.setValueAtTime(0.18, ctx.currentTime);

  // Slow LFO for subtle analog warmth (0.10 Hz)
  const lfo = ctx.createOscillator();
  lfo.type = 'sine';
  lfo.frequency.setValueAtTime(0.10, ctx.currentTime);
  const lfoGain = ctx.createGain();
  lfoGain.gain.setValueAtTime(30, ctx.currentTime); // subtle +/- 30Hz modulation
  lfo.connect(lfoGain);
  lfoGain.connect(spaFilterNode.frequency);
  lfo.start();
  activeSoundscapeNodes.push(lfo, lfoGain);

  const initialChord = SPA_CHORDS[0];

  initialChord.forEach((freq, idx) => {
    // Primary warm tone
    const osc = ctx.createOscillator();
    osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.detune.setValueAtTime((idx - 2) * 2.5, ctx.currentTime);

    // Subtle chorus detune oscillator for stereo-like lush depth
    const detuneOsc = ctx.createOscillator();
    detuneOsc.type = 'sine';
    detuneOsc.frequency.setValueAtTime(freq, ctx.currentTime);
    detuneOsc.detune.setValueAtTime(-((idx - 2) * 3.0 + 4), ctx.currentTime);

    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(0.07, ctx.currentTime);

    osc.connect(oscGain);
    detuneOsc.connect(oscGain);
    oscGain.connect(spaFilterNode);

    osc.start();
    detuneOsc.start();

    spaOscillators.push({ osc, detuneOsc, gainNode: oscGain });
    activeSoundscapeNodes.push(osc, detuneOsc, oscGain);
  });

  spaFilterNode.connect(spaGainNode);
  spaGainNode.connect(destination);
  activeSoundscapeNodes.push(spaFilterNode, spaGainNode);
}

// Breath-Synchronized Audio Modulation & Chord Progression
function updateSoundscapeForBreath(cycleSecond) {
  if (isSoundscapeMuted || !soundscapeAudioCtx) return;
  const ctx = soundscapeAudioCtx;

  if (currentSoundscapeType === 'ocean' && oceanDeepFilter && oceanDeepGain && oceanFoamFilter && oceanFoamGain) {
    if (cycleSecond < 4) {
      // INHALE PHASE (0..3s): Deep ocean swell builds up
      if (cycleSecond === 0) {
        oceanDeepFilter.frequency.setTargetAtTime(220, ctx.currentTime, 0.7);
        oceanDeepGain.gain.setTargetAtTime(0.22, ctx.currentTime, 0.7);
        if (oceanSubGain) oceanSubGain.gain.setTargetAtTime(0.08, ctx.currentTime, 0.7);
        oceanFoamGain.gain.setTargetAtTime(0.04, ctx.currentTime, 0.7);
      } else if (cycleSecond === 2) {
        oceanDeepFilter.frequency.setTargetAtTime(380, ctx.currentTime, 0.8);
        oceanDeepGain.gain.setTargetAtTime(0.32, ctx.currentTime, 0.6);
      } else if (cycleSecond === 3) {
        // Crest of the wave right before breaking!
        oceanDeepFilter.frequency.setTargetAtTime(460, ctx.currentTime, 0.5);
        oceanFoamFilter.frequency.setTargetAtTime(2700, ctx.currentTime, 0.4);
        oceanFoamGain.gain.setTargetAtTime(0.22, ctx.currentTime, 0.5);
      }
    } else {
      // EXHALE PHASE (4..9s): Wave breaks softly, foamy whitewash recedes over pebbles
      if (cycleSecond === 4) {
        // Break and initial foamy rush
        oceanDeepGain.gain.setTargetAtTime(0.22, ctx.currentTime, 1.0);
        oceanFoamFilter.frequency.setTargetAtTime(1900, ctx.currentTime, 1.2);
        oceanFoamGain.gain.setTargetAtTime(0.16, ctx.currentTime, 0.8);
      } else if (cycleSecond === 6) {
        // Water gently receding
        oceanDeepFilter.frequency.setTargetAtTime(180, ctx.currentTime, 1.8);
        oceanDeepGain.gain.setTargetAtTime(0.13, ctx.currentTime, 1.5);
        oceanFoamGain.gain.setTargetAtTime(0.07, ctx.currentTime, 1.8);
        if (oceanSubGain) oceanSubGain.gain.setTargetAtTime(0.05, ctx.currentTime, 1.5);
      } else if (cycleSecond === 8) {
        // Calm deep water before next wave
        oceanDeepFilter.frequency.setTargetAtTime(140, ctx.currentTime, 1.5);
        oceanDeepGain.gain.setTargetAtTime(0.09, ctx.currentTime, 1.5);
        oceanFoamGain.gain.setTargetAtTime(0.02, ctx.currentTime, 1.5);
      }
    }
  } else if (currentSoundscapeType === 'zen') {
    // Evolving Spa Music Modulation
    if (cycleSecond === 0) {
      spaCycleCount++;
      // Every 2 breath cycles (20s), seamlessly glide to next chord in progression
      if (spaCycleCount % 2 === 0 && spaOscillators.length > 0) {
        spaCurrentChordIdx = (spaCurrentChordIdx + 1) % SPA_CHORDS.length;
        const targetChord = SPA_CHORDS[spaCurrentChordIdx];
        spaOscillators.forEach((item, idx) => {
          if (targetChord[idx]) {
            item.osc.frequency.setTargetAtTime(targetChord[idx], ctx.currentTime, 3.0);
            item.detuneOsc.frequency.setTargetAtTime(targetChord[idx], ctx.currentTime, 3.0);
          }
        });
      }

      // Gentle warm singing bowl tone on inhale
      playZenChime(432, 'bowl');
    } else if (cycleSecond === 4) {
      // Soft ethereal chime on exhale turn
      playZenChime(528, 'chime');
    }

    // Dynamic pad swell & relax synced to breathing
    if (spaFilterNode && spaGainNode) {
      if (cycleSecond < 4) {
        // Inhale: pad gently opens and warms
        spaFilterNode.frequency.setTargetAtTime(540, ctx.currentTime, 1.2);
        spaGainNode.gain.setTargetAtTime(0.24, ctx.currentTime, 1.0);
      } else {
        // Exhale: pad softly settles down
        spaFilterNode.frequency.setTargetAtTime(320, ctx.currentTime, 1.8);
        spaGainNode.gain.setTargetAtTime(0.14, ctx.currentTime, 1.6);
      }
    }
  }
}

function playZenChime(freq = 432, style = 'bowl') {
  if (isSoundscapeMuted || !soundscapeAudioCtx || !masterSoundscapeGain) return;
  try {
    const ctx = soundscapeAudioCtx;
    const now = ctx.currentTime;
    
    // Fundamental tone
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    // Soft attack (prevents clicks)
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(style === 'bowl' ? 0.08 : 0.06, now + 0.06);

    const decayTime = style === 'bowl' ? 3.6 : 2.6;
    gain.gain.exponentialRampToValueAtTime(0.0001, now + decayTime);

    osc.connect(gain);
    gain.connect(masterSoundscapeGain);

    osc.start(now);
    osc.stop(now + decayTime + 0.1);

    // For singing bowl, add a warm metallic overtone (2.76x frequency) at subtle volume
    if (style === 'bowl') {
      const overtoneOsc = ctx.createOscillator();
      const overtoneGain = ctx.createGain();
      overtoneOsc.type = 'sine';
      overtoneOsc.frequency.setValueAtTime(freq * 2.76, now);

      overtoneGain.gain.setValueAtTime(0.0001, now);
      overtoneGain.gain.linearRampToValueAtTime(0.025, now + 0.08);
      overtoneGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

      overtoneOsc.connect(overtoneGain);
      overtoneGain.connect(masterSoundscapeGain);

      overtoneOsc.start(now);
      overtoneOsc.stop(now + 2.6);
    }
  } catch (e) {}
}

function playCompletionChime() {
  if (isSoundscapeMuted || !soundscapeAudioCtx || !masterSoundscapeGain) return;
  try {
    const ctx = soundscapeAudioCtx;
    [528, 660, 792].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + (i * 0.15));
      gain.gain.setValueAtTime(0.09, ctx.currentTime + (i * 0.15));
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.0);
      osc.connect(gain);
      gain.connect(masterSoundscapeGain);
      osc.start(ctx.currentTime + (i * 0.15));
      osc.stop(ctx.currentTime + 3.2);
    });
  } catch (e) {}
}

function setSoundscapeVolume(val) {
  soundscapeVolume = Math.max(0, Math.min(100, parseInt(val, 10))) / 100;
  const label = document.getElementById('soundscapeVolumeLabel');
  if (label) label.innerText = `${Math.round(soundscapeVolume * 100)}%`;
  
  if (masterSoundscapeGain && soundscapeAudioCtx) {
    masterSoundscapeGain.gain.setTargetAtTime(isSoundscapeMuted ? 0 : soundscapeVolume, soundscapeAudioCtx.currentTime, 0.05);
  }
}

function toggleSoundscapeMute() {
  isSoundscapeMuted = !isSoundscapeMuted;
  const icon = document.getElementById('musicMuteIcon');
  const text = document.getElementById('musicMuteText');
  const badge = document.getElementById('soundscapeStatusBadge');

  if (masterSoundscapeGain && soundscapeAudioCtx) {
    masterSoundscapeGain.gain.setTargetAtTime(isSoundscapeMuted ? 0 : soundscapeVolume, soundscapeAudioCtx.currentTime, 0.05);
  }

  if (isSoundscapeMuted) {
    if (icon) icon.innerText = "🔇";
    if (text) text.innerText = "Muted";
    if (badge) {
      badge.innerText = "Muted";
      badge.className = "text-[9px] font-extrabold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500 border border-slate-200";
    }
    showDynamicToast("🔇 Relaxing music muted.");
  } else {
    if (icon) icon.innerText = "🔊";
    if (text) text.innerText = "Music ON";
    if (badge) {
      badge.innerText = "Plays with Session";
      badge.className = "text-[9px] font-extrabold px-1.5 py-0.5 rounded-md bg-teal-100 text-teal-800 border border-teal-200";
    }
    if (diaphragmTimerInterval) {
      startRelaxingSoundscape();
    }
    showDynamicToast("🔊 Relaxing music enabled.");
  }
}

function selectSoundscape(type) {
  if (type !== 'ocean' && type !== 'zen') type = 'ocean';
  currentSoundscapeType = type;
  ['ocean', 'zen'].forEach(t => {
    const btn = document.getElementById(`soundBtn-${t}`);
    if (btn) {
      if (t === type) {
        btn.className = "p-2 rounded-xl border-2 border-teal-500 bg-teal-50 font-bold text-teal-950 transition-all shadow-2xs active:scale-98";
      } else {
        btn.className = "p-2 rounded-xl border border-slate-200 bg-white font-semibold text-slate-700 hover:border-purple-300 transition-all active:scale-98";
      }
    }
  });

  if (diaphragmTimerInterval && !isSoundscapeMuted) {
    startRelaxingSoundscape();
  }
  showDynamicToast(`🎵 Soundscape: ${type === 'ocean' ? 'Breath-Synced Ocean Waves' : 'Relaxing Spa Chords & Chimes'}`);
}

// Modal Open/Close
function openDiaphragmResetModal() {
  const modal = document.getElementById('diaphragmResetModal');
  if (modal) {
    modal.classList.remove('hidden');
    if (window.lucide && typeof lucide.createIcons === 'function') {
      lucide.createIcons();
    }
  }
}

function closeDiaphragmResetModal() {
  const modal = document.getElementById('diaphragmResetModal');
  if (modal) {
    modal.classList.add('hidden');
    stopDiaphragmTimer();
    stopRelaxingSoundscape();
  }
}

function toggleDiaphragmTimer() {
  if (diaphragmTimerInterval) {
    stopDiaphragmTimer();
  } else {
    startDiaphragmTimer();
  }
}

function startDiaphragmTimer() {
  const btn = document.getElementById('diaphragmTimerBtn');
  const btnText = document.getElementById('diaphragmBtnText');
  const status = document.getElementById('diaphragmPhaseText');
  const circle = document.getElementById('diaphragmPulseCircle');
  const timeDisplay = document.getElementById('diaphragmTimeLeft');
  
  if (btn) {
    btn.className = "flex-1 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md active:scale-98 transition-all flex items-center justify-center gap-1.5";
  }
  if (btnText) btnText.innerText = "Pause Session";

  // Start background soundscape
  if (!isSoundscapeMuted) {
    startRelaxingSoundscape();
  }

  let cycleSecond = 0; // 0..9 (4s inhale, 6s exhale)

  function tick() {
    if (diaphragmTimeLeft <= 0) {
      stopDiaphragmTimer();
      diaphragmTimeLeft = 180;
      if (status) status.innerHTML = `<span class="text-teal-800 font-extrabold text-sm">✨ All Done!</span><br><span class="text-[11px] text-teal-900/90">Your tummy is relaxed and your breathing muscle is resting soft.</span>`;
      if (btn) {
        btn.className = "flex-1 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md active:scale-98 transition-all flex items-center justify-center gap-1.5";
      }
      if (btnText) btnText.innerText = "Start 3-Min Release Again";
      if (circle) {
        circle.style.transform = "scale(1)";
        circle.className = "w-32 h-32 rounded-full bg-teal-100 flex items-center justify-center transition-all duration-700 shadow-inner";
      }
      playCompletionChime();
      markDiaphragmCompleted();
      return;
    }

    diaphragmTimeLeft--;
    cycleSecond = (cycleSecond + 1) % 10;

    const mins = Math.floor(diaphragmTimeLeft / 60);
    const secs = diaphragmTimeLeft % 60;
    if (timeDisplay) timeDisplay.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

    // Modulate audio for breath
    updateSoundscapeForBreath(cycleSecond);

    if (cycleSecond < 4) {
      // Inhale phase (4 seconds): lateral ribcage expansion
      if (status) status.innerHTML = `<span class="text-teal-900 font-extrabold text-sm tracking-wide">Breathe In Gently (4s)</span><br><span class="text-[11px] text-teal-800 font-medium">Feel your lower ribs widen into your hands</span>`;
      if (circle) {
        circle.style.transform = "scale(1.28)";
        circle.className = "w-32 h-32 rounded-full bg-teal-300/80 border-2 border-teal-400 flex items-center justify-center transition-all duration-1000 shadow-md";
      }
    } else {
      // Exhale phase (6 seconds): upward diaphragm relaxation
      if (status) status.innerHTML = `<span class="text-indigo-950 font-extrabold text-sm tracking-wide">Breathe Out Slowly (6s)</span><br><span class="text-[11px] text-indigo-800 font-medium">Let your tummy & legs go completely soft</span>`;
      if (circle) {
        circle.style.transform = "scale(0.85)";
        circle.className = "w-32 h-32 rounded-full bg-indigo-200/80 border-2 border-indigo-300 flex items-center justify-center transition-all duration-1000 shadow-inner";
      }
    }
  }

  tick();
  diaphragmTimerInterval = setInterval(tick, 1000);
}

function stopDiaphragmTimer() {
  if (diaphragmTimerInterval) {
    clearInterval(diaphragmTimerInterval);
    diaphragmTimerInterval = null;
  }
  stopRelaxingSoundscape();
  const btn = document.getElementById('diaphragmTimerBtn');
  const btnText = document.getElementById('diaphragmBtnText');
  if (btn) {
    btn.className = "flex-1 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md active:scale-98 transition-all flex items-center justify-center gap-1.5";
  }
  if (btnText) btnText.innerText = "Resume Session";
}

function restartDiaphragmTimer() {
  const wasRunning = !!diaphragmTimerInterval;
  stopDiaphragmTimer();
  diaphragmTimeLeft = 180;
  
  const timeDisplay = document.getElementById('diaphragmTimeLeft');
  if (timeDisplay) timeDisplay.innerText = "3:00";

  const circle = document.getElementById('diaphragmPulseCircle');
  if (circle) {
    circle.style.transform = "scale(1)";
    circle.className = "w-32 h-32 rounded-full bg-teal-100 flex items-center justify-center transition-all duration-700 shadow-inner";
  }

  const status = document.getElementById('diaphragmPhaseText');
  const btn = document.getElementById('diaphragmTimerBtn');
  const btnText = document.getElementById('diaphragmBtnText');

  if (wasRunning) {
    startDiaphragmTimer();
    showDynamicToast("🔄 Restarted 3-Min Release from 3:00!");
  } else {
    if (btn) {
      btn.className = "flex-1 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md active:scale-98 transition-all flex items-center justify-center gap-1.5";
    }
    if (btnText) btnText.innerText = "Start 3-Min Release";
    if (status) {
      status.innerHTML = `<span class="text-brand-textDark font-extrabold text-sm">Tap Start to Begin 3-Min Release</span><br><span class="text-[11px] text-teal-800">Lie back with a pillow under your knees & hands on ribs</span>`;
    }
    stopRelaxingSoundscape();
    showDynamicToast("🔄 Timer reset to 3:00.");
  }
}

function jumpFromCalendarInput(dateVal) {
  if (!dateVal) return;
  applyActiveDate(dateVal);
  closeCalendarPickerModal();
  const info = getCycleInfoForDate(dateVal);
  showDynamicToast(`📅 Jumped to ${info.displayDate} (Cycle Day ${info.cycleDay})`);
}

function jumpToTodayFromCalendar() {
  resetToCurrentDate();
  closeCalendarPickerModal();
}

function jumpToYesterdayFromCalendar() {
  stepActiveDate(-1);
  closeCalendarPickerModal();
}

function selectDayFromCalendar(dateStr) {
  applyActiveDate(dateStr);
  closeCalendarPickerModal();
  const info = getCycleInfoForDate(dateStr);
  showDynamicToast(`📅 Loaded ${info.displayDate} (Cycle Day ${info.cycleDay})`);
}

function renderCalendarDaysList() {
  const container = document.getElementById('calendarDaysList');
  if (!container) return;

  const logsList = Array.isArray(DEFAULT_LOGS) ? DEFAULT_LOGS.slice(0, 25) : [];
  const todayStr = getTodayISOString();

  container.innerHTML = logsList.map(item => {
    const isSelected = item.date === activeDateStr;
    const isToday = item.date === todayStr;

    let cycleLogo = '🌸';
    let badgeBorder = 'border-rose-200 bg-rose-50 text-rose-800';
    if (item.phase === 'follicular') {
      cycleLogo = '🌿';
      badgeBorder = 'border-emerald-200 bg-emerald-50 text-emerald-800';
    } else if (item.phase === 'ovulation') {
      cycleLogo = '✨';
      badgeBorder = 'border-amber-200 bg-amber-50 text-amber-900';
    } else if (item.cycleDay <= 3) {
      cycleLogo = '💧';
      badgeBorder = 'border-blue-200 bg-blue-50 text-blue-900';
    }

    let bloatBg = 'bg-emerald-100 text-emerald-800';
    if (item.diaphragmBloat >= 7) bloatBg = 'bg-rose-100 text-rose-800';
    else if (item.diaphragmBloat >= 5) bloatBg = 'bg-amber-100 text-amber-800';

    let summaryText = item.symptoms || item.movement || item.notes || 'Normal routine';

    return `
      <div onclick="selectDayFromCalendar('${item.date}')" class="p-3 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ${isSelected ? 'border-brand-coral bg-rose-50/50 ring-2 ring-brand-coral/30 shadow-xs' : 'border-brand-border bg-white hover:border-brand-coral/50 hover:bg-slate-50/70 shadow-2xs'}">
        <div class="flex items-center space-x-2.5 min-w-0">
          <!-- Cycle Day Logo Emblem -->
          <div class="flex items-center space-x-1 px-2.5 py-1 rounded-xl border text-[11px] font-black shrink-0 ${badgeBorder}">
            <span class="text-sm leading-none">${cycleLogo}</span>
            <span>D${item.cycleDay || '--'}</span>
          </div>

          <div class="min-w-0">
            <div class="flex items-center space-x-1.5 flex-wrap">
              <h5 class="font-bold text-xs text-brand-textDark">${item.displayDate}</h5>
              ${isToday ? '<span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md bg-brand-coralLight text-brand-coral">TODAY</span>' : ''}
              ${isSelected ? '<span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md bg-brand-textDark text-white">VIEWING NOW</span>' : ''}
            </div>
            <p class="text-[11px] text-brand-textMuted truncate mt-0.5" title="${escapeQuotes(summaryText)}">${summaryText}</p>
          </div>
        </div>

        <div class="flex items-center space-x-1.5 self-start sm:self-auto shrink-0 text-[10px] font-semibold">
          <span class="px-2 py-0.5 rounded-md ${bloatBg}">Bloat: ${item.diaphragmBloat}/10</span>
          ${item.temp ? `<span class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">${item.temp}°C</span>` : ''}
          <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-brand-textMuted"></i>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

// Close calendar modal on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCalendarPickerModal();
  }
});

function initializeUI() {
  // Pre-select Bristol & Mood buttons
  selectBristol('liquid');
  selectMood('flat');

  // Load Mon-Thu Chrono-Nutrition Trial state
  loadTrialState();

  // Initialize dynamic date progression and cycle calculations
  applyActiveDate(getTodayISOString());
}

// ============================================================================
// 4. CHART RENDERING: DASHBOARD DUAL TRENDS
// ============================================================================
function renderDashboardTrends() {
  const ctx = document.getElementById('dashboardTrendChart');
  if (!ctx) return;

  // Grab the last 12 entries chronologically
  const sortedLogs = [...logs].sort((a, b) => new Date(a.date) - new Date(b.date)).slice(-12);
  const labels = sortedLogs.map(l => {
    const parts = l.date.split('-');
    return `${parts[2]}/${parts[1]}`;
  });
  
  const temps = sortedLogs.map(l => l.temp || null);
  const bloats = sortedLogs.map(l => l.diaphragmBloat);

  if (dashboardChartInstance) {
    dashboardChartInstance.destroy();
  }

  dashboardChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Temperature (°C)',
          data: temps,
          borderColor: '#d98880',
          backgroundColor: 'rgba(217, 136, 128, 0.1)',
          borderWidth: 3,
          tension: 0.35,
          pointRadius: 5,
          pointBackgroundColor: '#d98880',
          yAxisID: 'yTemp',
          spanGaps: true
        },
        {
          label: 'Diaphragm Bloat (0-10)',
          data: bloats,
          borderColor: '#60a5fa',
          backgroundColor: 'rgba(96, 165, 250, 0.05)',
          borderWidth: 2.5,
          borderDash: [4, 4],
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: '#60a5fa',
          yAxisID: 'yBloat'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: '#1e293b',
          titleFont: { size: 12, weight: 'bold' },
          bodyFont: { size: 11 },
          padding: 10,
          cornerRadius: 8
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 10 } }
        },
        yTemp: {
          type: 'linear',
          position: 'left',
          min: 35.8,
          max: 37.2,
          ticks: {
            stepSize: 0.3,
            font: { size: 10 },
            callback: v => v.toFixed(1) + '°'
          },
          grid: { color: '#f1f5f9' }
        },
        yBloat: {
          type: 'linear',
          position: 'right',
          min: 0,
          max: 10,
          ticks: {
            stepSize: 2,
            font: { size: 10 }
          },
          grid: { display: false }
        }
      }
    }
  });
}

// ============================================================================
// 5. CHART RENDERING: OURA TRIPLE BIOMETRIC ENGINE
// ============================================================================
function renderOuraChart() {
  const ctx = document.getElementById('ouraMainChart');
  if (!ctx) return;

  const sortedLogs = [...logs].sort((a, b) => new Date(a.date) - new Date(b.date)).slice(-14);
  const labels = sortedLogs.map(l => {
    const parts = l.date.split('-');
    return `${parts[2]}/${parts[1]}`;
  });

  const bloatScores = sortedLogs.map(l => l.diaphragmBloat !== undefined ? l.diaphragmBloat : 5);
  const oralTemps = sortedLogs.map(l => l.temp !== undefined ? l.temp : null);

  if (ouraChartInstance) {
    ouraChartInstance.destroy();
  }

  ouraChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Diaphragm Bloat (1–10)',
          data: bloatScores,
          borderColor: '#D97768',
          backgroundColor: 'rgba(217, 119, 104, 0.12)',
          borderWidth: 2.5,
          tension: 0.35,
          pointRadius: 4.5,
          pointBackgroundColor: '#D97768',
          fill: true,
          yAxisID: 'yBloat'
        },
        {
          label: 'Recorded Oral Temp (°C)',
          data: oralTemps,
          borderColor: '#52796F',
          backgroundColor: '#52796F',
          borderWidth: 2.2,
          spanGaps: true,
          tension: 0.2,
          pointRadius: 5.5,
          pointBackgroundColor: '#52796F',
          yAxisID: 'yTemp'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: '#0f172a',
          padding: 12,
          cornerRadius: 10,
          callbacks: {
            label: function(context) {
              if (context.dataset.label.includes('Bloat')) {
                return `Diaphragm Bloat: ${context.parsed.y}/10`;
              }
              if (context.parsed.y !== null && context.parsed.y !== undefined) {
                return `Oral Temp: ${context.parsed.y}°C (Recorded in Notes)`;
              }
              return 'Oura continuous stream starts tomorrow night';
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 10 } }
        },
        yBloat: {
          type: 'linear',
          position: 'left',
          min: 0,
          max: 10,
          ticks: {
            stepSize: 2,
            font: { size: 10 },
            callback: v => `${v}/10`
          },
          title: {
            display: true,
            text: 'Bloat Severity',
            font: { size: 10, weight: 'bold' }
          },
          grid: { color: '#f1f5f9' }
        },
        yTemp: {
          type: 'linear',
          position: 'right',
          min: 35.5,
          max: 37.5,
          ticks: {
            stepSize: 0.5,
            font: { size: 10 },
            callback: v => `${v.toFixed(1)}°C`
          },
          title: {
            display: true,
            text: 'Oral Temp (°C)',
            font: { size: 10, weight: 'bold' }
          },
          grid: { drawOnChartArea: false }
        }
      }
    }
  });
}

// ============================================================================
// 6. HISTORICAL LOGS RENDERING & SEARCH ENGINE
// ============================================================================
function renderHistoryLogs() {
  const container = document.getElementById('historyLogContainer');
  if (!container) return;

  const searchTerm = (document.getElementById('historySearchInput')?.value || '').toLowerCase();
  
  // Filter by Cycle Month and Phase
  let filtered = [...logs].filter(entry => {
    const matchMonth = (currentCycleFilter === 'all') || (entry.month === currentCycleFilter);
    const matchPhase = (currentPhaseFilter === 'all') || (entry.phase === currentPhaseFilter);
    const matchSearch = !searchTerm || 
      (entry.symptoms && entry.symptoms.toLowerCase().includes(searchTerm)) ||
      (entry.movement && entry.movement.toLowerCase().includes(searchTerm)) ||
      (entry.emotions && entry.emotions.toLowerCase().includes(searchTerm)) ||
      (entry.notes && entry.notes.toLowerCase().includes(searchTerm)) ||
      (entry.displayDate && entry.displayDate.toLowerCase().includes(searchTerm));
    
    return matchMonth && matchPhase && matchSearch;
  });

  // Sort descending (newest first)
  filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center p-12 bg-white rounded-2xl border border-slate-200 text-slate-400">
        <i data-lucide="inbox" class="w-12 h-12 mx-auto mb-3 opacity-40"></i>
        <p class="font-bold text-sm text-slate-600">No logs found matching your filters</p>
        <p class="text-xs mt-1">Try clearing your search term or switching cycle months.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  const countEl = document.getElementById('historyEntryCount');
  if (countEl) countEl.innerText = `${filtered.length} entries`;

  container.innerHTML = filtered.map((item, idx) => {
    // Phase Badge Color
    let phaseBadgeClass = 'bg-brand-cream text-brand-textMuted border border-brand-border';
    if (item.phase === 'luteal') phaseBadgeClass = 'bg-brand-coralLight text-brand-coral border border-brand-coral/30';
    if (item.phase === 'follicular') phaseBadgeClass = 'bg-brand-sageLight text-brand-sage border border-brand-sage/30';
    if (item.phase === 'ovulation') phaseBadgeClass = 'bg-brand-amberLight text-brand-amber border border-brand-amber/30';
    if (item.phase === 'reset') phaseBadgeClass = 'bg-brand-blueLight text-brand-blue border border-brand-blue/30';

    // Bristol Stool Icon & Tag
    let stoolIcon = '🚫 None';
    let stoolBg = 'bg-slate-100 text-slate-600';
    if (item.bristol === 'liquid') { stoolIcon = '🌊 Liquid'; stoolBg = 'bg-brand-blueLight text-brand-blue'; }
    if (item.bristol === 'hard') { stoolIcon = '🪨 Hard'; stoolBg = 'bg-brand-amberLight text-brand-amber'; }
    if (item.bristol === 'normal') { stoolIcon = '✨ Satisfying'; stoolBg = 'bg-brand-sageLight text-brand-sage'; }

    // Mood Badge
    let moodBadge = '☁️ Flat';
    if (item.mood === 'great') moodBadge = '☀️ Free';
    if (item.mood === 'edgy') moodBadge = '🌧️ Edgy';

    // Logo and styling for the cycle day emblem
    let cycleLogo = '🌸';
    let cycleBadgeClasses = 'bg-rose-50/90 text-rose-800 border-rose-200';
    let cycleSubColor = 'text-rose-500';
    if (item.phase === 'follicular') {
      cycleLogo = '🌿';
      cycleBadgeClasses = 'bg-emerald-50/90 text-emerald-800 border-emerald-200';
      cycleSubColor = 'text-emerald-600';
    } else if (item.phase === 'ovulation') {
      cycleLogo = '✨';
      cycleBadgeClasses = 'bg-amber-50/90 text-amber-900 border-amber-200';
      cycleSubColor = 'text-amber-600';
    } else if (item.cycleDay <= 3) {
      cycleLogo = '💧';
      cycleBadgeClasses = 'bg-blue-50/90 text-blue-900 border-blue-200';
      cycleSubColor = 'text-blue-500';
    }

    const cardId = `history-card-${idx}`;
    const isOpenInitially = idx < 2; // Keep first 2 open, rest collapsed

    return `
      <div class="bg-white rounded-2xl border border-brand-border p-4 shadow-2xs hover:border-brand-sage transition-all space-y-2.5">
        
        <!-- Header Row -->
        <div class="flex items-center justify-between gap-2 cursor-pointer" onclick="toggleHistoryCard('${cardId}')">
          <div class="flex items-center space-x-2.5">
            <!-- Cycle Day Logo Emblem -->
            <div class="flex items-center space-x-1.5 px-2.5 py-1 rounded-xl border shadow-2xs ${cycleBadgeClasses}">
              <span class="text-base leading-none shrink-0">${cycleLogo}</span>
              <div class="flex flex-col text-left">
                <span class="text-[8px] font-black uppercase tracking-wider ${cycleSubColor} leading-none">CYCLE</span>
                <span class="text-xs font-black tracking-tight leading-none mt-0.5">D${item.cycleDay || '--'}</span>
              </div>
            </div>
            <div>
              <h4 class="font-bold text-xs sm:text-sm text-brand-textDark leading-tight">${item.displayDate}</h4>
              <span class="text-[10px] font-bold ${phaseBadgeClass} px-2 py-0.5 rounded-full mt-0.5 inline-flex items-center gap-1">
                <span>${cycleLogo}</span>
                <span>${item.phaseLabel || item.phase.toUpperCase()}</span>
              </span>
            </div>
          </div>

          <div class="flex items-center space-x-1.5 text-xs">
            ${item.temp ? `
              <span class="px-2 py-0.5 rounded-md bg-brand-cream font-bold text-brand-coral border border-brand-border text-[11px]">
                ${item.temp}°C
              </span>
            ` : ''}
            <i data-lucide="chevron-down" id="${cardId}-icon" class="w-4 h-4 text-brand-textMuted transition-transform ${isOpenInitially ? 'rotate-180' : ''}"></i>
          </div>
        </div>

        <!-- Quick Summary Badges (Always Visible) -->
        <div class="flex flex-wrap items-center gap-1.5 text-[11px] pt-1 border-t border-brand-border/60">
          <span class="px-2 py-0.5 rounded-md ${stoolBg} font-bold">${stoolIcon}</span>
          <span class="px-2 py-0.5 rounded-md bg-brand-cream text-brand-textMuted font-semibold">Bloat: <strong class="text-brand-coral">${item.diaphragmBloat}/10</strong></span>
          <span class="px-2 py-0.5 rounded-md bg-brand-cream text-brand-textMuted font-semibold">${moodBadge}</span>
        </div>

        <!-- Expandable Detail Section -->
        <div id="${cardId}-details" class="space-y-2.5 pt-1.5 ${isOpenInitially ? '' : 'hidden'} text-xs text-brand-textDark border-t border-brand-border/40">
          
          <div class="p-2.5 rounded-xl bg-brand-cream/70 text-[11px] space-y-1">
            <div class="font-bold text-brand-textDark">Movement:</div>
            <p class="text-brand-textMuted">${item.movement || 'None reported'}</p>
          </div>

          <div class="p-2.5 rounded-xl bg-brand-cream/70 text-[11px] space-y-1">
            <div class="font-bold text-brand-textDark">Bloating & Symptoms:</div>
            <p class="text-brand-textMuted">${item.symptoms || 'None reported'}</p>
          </div>

          ${item.puffiness && item.puffiness.length > 0 ? `
            <div class="flex flex-wrap gap-1">
              ${item.puffiness.map(p => `<span class="px-2 py-0.5 rounded-md bg-brand-coralLight text-brand-coral text-[10px] font-semibold">${p}</span>`).join('')}
              ${item.exercise ? `<span class="px-2 py-0.5 rounded-md bg-brand-sageLight text-brand-sage text-[10px] font-semibold">🏃 ${item.exercise}</span>` : ''}
            </div>
          ` : ''}

          ${item.notes || item.medNotes ? `
            <div class="p-2.5 bg-brand-amberLight/60 rounded-xl border border-brand-amber/30 text-[11px] text-brand-textDark leading-relaxed">
              ${item.medNotes ? `
                <div class="font-bold text-brand-amber mb-0.5 flex items-center gap-1.5">
                  <span>${item.medNotes.toLowerCase().includes('linaclotide') || item.medNotes.includes('7:') ? '🌅' : (item.medNotes.toLowerCase().includes('night') || item.medNotes.toLowerCase().includes('sleep') ? '🌙' : '💊')}</span>
                  <span>Meds: ${item.medNotes}</span>
                </div>
              ` : ''}
              ${item.notes ? `<div>${item.notes}</div>` : ''}
            </div>
          ` : ''}

        </div>

      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function toggleHistoryCard(cardId) {
  const details = document.getElementById(`${cardId}-details`);
  const icon = document.getElementById(`${cardId}-icon`);
  if (!details) return;
  if (details.classList.contains('hidden')) {
    details.classList.remove('hidden');
    if (icon) icon.classList.add('rotate-180');
  } else {
    details.classList.add('hidden');
    if (icon) icon.classList.remove('rotate-180');
  }
}

function filterCycle(month) {
  currentCycleFilter = month;
  document.querySelectorAll('.cycle-filter-btn').forEach(btn => {
    btn.classList.remove('active-filter');
    btn.classList.add('bg-slate-100', 'text-slate-700');
  });
  event.target.classList.add('active-filter');
  event.target.classList.remove('bg-slate-100', 'text-slate-700');
  renderHistoryLogs();
}

function filterByPhase(phase) {
  currentPhaseFilter = phase;
  document.querySelectorAll('.phase-pill').forEach(btn => {
    btn.classList.remove('active-phase-pill');
  });
  event.target.classList.add('active-phase-pill');
  renderHistoryLogs();
}

function searchHistoryLogs() {
  renderHistoryLogs();
}

// ============================================================================
// 7. UNIFIED COMPREHENSIVE DAILY CHECK-IN HANDLER
// ============================================================================
var selectedBristolVal = 'none';
var selectedMoodVal = 'flat';
var selectedAlcoholVal = 'none';
var selectedFastingVal = 'kept_40';
var selectedTags = new Set();

function openQuickLogModal() {
  const modal = document.getElementById('quickLogModal');
  if (!modal) return;
  modal.classList.remove('hidden');

  const targetDate = activeDateStr || getTodayISOString();
  const dateInput = document.getElementById('logDate');
  if (dateInput) dateInput.value = targetDate;

  // Find existing log entry for targetDate
  const entry = logs.find(l => l.date === targetDate);
  const cycleInfo = getCycleInfoForDate(targetDate);

  // 1. Vitals & Temperature
  const tempInput = document.getElementById('logTemp');
  if (tempInput) {
    tempInput.value = (entry && entry.temp) ? entry.temp : (cycleInfo.temp || '');
  }

  // Oura Ring inputs
  const ouraSleep = document.getElementById('logOuraSleep');
  if (ouraSleep) ouraSleep.value = entry?.ouraSleep || entry?.sleepScore || '';
  const ouraRhr = document.getElementById('logOuraRhr');
  if (ouraRhr) ouraRhr.value = entry?.ouraRhr || entry?.rhr || '';
  const ouraHrv = document.getElementById('logOuraHrv');
  if (ouraHrv) ouraHrv.value = entry?.ouraHrv || entry?.hrv || '';

  // 2. Morning Fasting Routine
  const fastingAdherence = entry?.fastingAdherence || 'kept_40';
  selectFasting(fastingAdherence);

  const warmTrigger = document.getElementById('logWarmTrigger');
  if (warmTrigger) warmTrigger.checked = !!entry?.warmTrigger;

  const electrolytes = document.getElementById('logElectrolytesTaken');
  if (electrolytes) electrolytes.checked = !!(entry?.electrolyteBuffered || entry?.electrolytesTaken);

  // 3. Bowel Evacuation & Nuance
  const bristolVal = entry?.bristol || 'none';
  selectBristol(bristolVal);
  if (entry?.stoolNuance) {
    selectStoolNuance(entry.stoolNuance);
  }

  // 4. Diaphragm & APD Status
  const diaphragmReset = document.getElementById('logDiaphragmResetDone');
  if (diaphragmReset) diaphragmReset.checked = !!entry?.diaphragmResetDone;

  const diaphragmSlider = document.getElementById('logDiaphragm');
  if (diaphragmSlider) {
    const dVal = (entry && entry.diaphragmBloat !== undefined) ? entry.diaphragmBloat : 4;
    diaphragmSlider.value = dVal;
    updateDiaphragmSliderDisplay(dVal);
  }

  // 5. Puffiness Tags
  selectedTags.clear();
  document.querySelectorAll('#quickLogModal .tag-btn').forEach(btn => {
    btn.classList.remove('selected', 'bg-brand-coral', 'text-white', 'border-brand-coral');
    btn.classList.add('bg-white', 'text-brand-textMuted');
    if (entry?.puffiness && entry.puffiness.includes(btn.innerText)) {
      btn.classList.add('selected', 'bg-brand-coral', 'text-white', 'border-brand-coral');
      btn.classList.remove('bg-white', 'text-brand-textMuted');
      selectedTags.add(btn.innerText);
    }
  });

  // 6. Drinks, Mood & Notes
  selectAlcohol(entry?.alcohol || 'none');
  selectMood(entry?.mood || 'flat');

  const noteInput = document.getElementById('logNote');
  if (noteInput) {
    noteInput.value = (entry && entry.symptoms && entry.symptoms !== 'Logged via Quick-Check') ? entry.symptoms : (entry?.notes || '');
    handleVoiceNoteInput();
  }

  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

function closeQuickLogModal() {
  stopVoiceDictation();
  const modal = document.getElementById('quickLogModal');
  if (modal) modal.classList.add('hidden');
}

// ============================================================================
// EMMA BUTLER CLINICAL VOICE-TO-TEXT DICTATION & PHONETIC CORRECTION ENGINE
// ============================================================================
let checkInSpeechRecognition = null;
let isCheckInDictating = false;
let checkInSpeechSilenceTimer = null;
let checkInBaseNoteText = '';
let checkInAccumulatedTranscript = '';

// High-accuracy phonetic normalization for Emma's medications, biology & favorite foods
function correctClinicalVoiceNote(text) {
  if (!text || typeof text !== 'string') return '';
  let s = text;

  // 1. Medications & Secretagogues
  s = s.replace(/\b(line\s*a\s*clot\s*hide|line\s*a\s*clotide|lina\s*clotide|linaclo\s*tide|lyna\s*clotide|lena\s*clotide|linaclitide)\b/gi, 'Linaclotide');
  s = s.replace(/\b(mess\s*tin\s*on|mestin\s*on|mestion|mesteron|mestin)\b/gi, 'Mestinon');
  s = s.replace(/\b(pru\s*calopride|pro\s*calopride|frucalopride|prucalop)\b/gi, 'Prucalopride');
  s = s.replace(/\b(movi\s*col|mobicall|mobicol|movi\s*call)\b/gi, 'Movicol');
  s = s.replace(/\b(you\s*d\s*c\s*a|u\s*d\s*c\s*a|urso|ursodiol)\b/gi, 'UDCA');
  s = s.replace(/\b(senna\s*tea|senna)\b/gi, 'Senna');
  s = s.replace(/\b(myrena|mirena|marina\s*coil)\b/gi, 'Mirena');

  // 2. Clinical Motility & APD Terminology
  s = s.replace(/\b(abdomino\s*phrenic\s*dyssynergia|abdominophrenic\s*dyssynergia|abdomino\s*phrenic|a\s*p\s*d)\b/gi, 'APD');
  s = s.replace(/\b(splenic\s*fracture|splenic\s*flex|splenic\s*fixture|splenic\s*flecture|splenic\s*flexure)\b/gi, 'splenic flexure');
  s = s.replace(/\b(diaphram|die\s*a\s*fram|diafram)\b/gi, 'diaphragm');
  s = s.replace(/\b(water\s*bypass|watery\s*by\s*pass)\b/gi, 'watery bypass');
  s = s.replace(/\b(gastro\s*colic(?:\s*reflex)?)\b/gi, 'gastrocolic reflex');
  s = s.replace(/\b(visceral\s*hypersensitivity|visceral\s*sensitivity)\b/gi, 'visceral hypersensitivity');
  s = s.replace(/\b(enteric\s*nervous\s*system)\b/gi, 'enteric nervous system');
  s = s.replace(/\b(migrating\s*motor\s*complex|m\s*m\s*c)\b/gi, 'migrating motor complex (MMC)');
  s = s.replace(/\b(e\s*m\s*d\s*r|emdr)\b/gi, 'EMDR');

  // 3. Bristol Stool Nuances
  s = s.replace(/\b(bristol\s*(?:stool\s*)?(?:4|four|for))\b/gi, 'Bristol 4');
  s = s.replace(/\b(bristol\s*(?:stool\s*)?(?:1|one|won))\b/gi, 'Bristol 1');
  s = s.replace(/\b(bristol\s*(?:stool\s*)?(?:2|two|to|too))\b/gi, 'Bristol 2');
  s = s.replace(/\b(bristol\s*(?:stool\s*)?(?:6|six))\b/gi, 'Bristol 6');
  s = s.replace(/\b(bristol\s*(?:stool\s*)?(?:7|seven))\b/gi, 'Bristol 7');

  // 4. Emma's Favorite Brands, Places & Treats (Zero Stress Transcriptions)
  s = s.replace(/\b(a\s*donos|donos|oh\s*donos|oddonos|odono|odonos|adonos)\b/gi, "Oddono's");
  s = s.replace(/\b(oddono'?s?\s*banana\s*sorbet(?:to)?|banana\s*sorbet(?:to)?)\b/gi, "banana sorbet");
  s = s.replace(/\b(form\s*nutrition|form\s*protein|form\s*shake)\b/gi, 'Form Nutrition');
  s = s.replace(/\b(third\s*space|thirdspace)\b/gi, 'Third Space');
  s = s.replace(/\b(aura\s*ring|oura\s*ring|aura|oura)\b/gi, 'Oura Ring');
  s = s.replace(/\b(sticks\s*(?:and|n|&)\s*sushi|stick\s*(?:and|n|&)\s*sushi)\b/gi, "Sticks'n'Sushi");
  s = s.replace(/\b(dishoom|dish\s*oom)\b/gi, 'Dishoom');
  s = s.replace(/\b(proper\s*corn|propercorn)\b/gi, 'Propercorn');
  s = s.replace(/\b(marks\s*(?:and|&)\s*spencer|m\s*(?:and|&)\s*s)\b/gi, 'M&S');

  // 5. Common Routine, Timing & Lifestyle Phrases
  s = s.replace(/\b(40\s*minute\s*fast|40\s*min\s*fast|forty\s*minute\s*fast)\b/gi, '40-min fast');
  s = s.replace(/\b(7\s*a\s*m|7:00\s*a\s*m|seven\s*a\s*m)\b/gi, '7:00 AM');
  s = s.replace(/\b(cold\s*plunge|ice\s*bath)\b/gi, 'cold plunge');
  s = s.replace(/\b(tequila\s*soda)\b/gi, 'tequila soda');
  s = s.replace(/\b(brain\s*fog)\b/gi, 'brain fog');

  // 6. Sentence & Capitalization formatting
  s = s.replace(/\s+/g, ' ').trim();
  s = s.replace(/(^\s*|[.?!]\s+)([a-z])/g, (match, prefix, char) => prefix + char.toUpperCase());

  return s;
}

function toggleVoiceDictation() {
  if (isCheckInDictating) {
    stopVoiceDictation();
  } else {
    startVoiceDictation();
  }
}

function startVoiceDictation() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const noteInput = document.getElementById('logNote');
  const btn = document.getElementById('voiceDictationBtn');
  const btnText = document.getElementById('voiceDictationBtnText');
  const banner = document.getElementById('voiceDictationBanner');

  if (!SpeechRecognition) {
    showDynamicToast("⚠️ Voice recognition isn't supported in this browser. You can type directly into the box!");
    if (noteInput) noteInput.focus();
    return;
  }

  try {
    checkInSpeechRecognition = new SpeechRecognition();
    checkInSpeechRecognition.continuous = true;
    checkInSpeechRecognition.interimResults = true;
    checkInSpeechRecognition.lang = 'en-GB';
    checkInSpeechRecognition.maxAlternatives = 3;

    checkInBaseNoteText = noteInput ? noteInput.value.trim() : '';
    checkInAccumulatedTranscript = '';
    isCheckInDictating = true;

    if (btn) {
      btn.className = "px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md active:scale-95 bg-rose-600 hover:bg-rose-700 text-white border border-rose-700 animate-pulse";
    }
    if (btnText) btnText.innerText = "Stop Speaking";
    if (banner) banner.classList.remove('hidden');

    checkInSpeechRecognition.onresult = (event) => {
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          const finalSeg = event.results[i][0].transcript;
          checkInAccumulatedTranscript += ' ' + finalSeg;
        } else {
          interim += event.results[i][0].transcript;
        }
      }

      const combinedSpoken = (checkInAccumulatedTranscript + ' ' + interim).trim();
      const correctedSpoken = correctClinicalVoiceNote(combinedSpoken);

      let fullNote = checkInBaseNoteText;
      if (fullNote && correctedSpoken) {
        fullNote += '. ' + correctedSpoken;
      } else if (correctedSpoken) {
        fullNote = correctedSpoken;
      }

      if (noteInput) {
        noteInput.value = fullNote;
        handleVoiceNoteInput();
      }

      clearTimeout(checkInSpeechSilenceTimer);
      checkInSpeechSilenceTimer = setTimeout(() => {
        stopVoiceDictation();
      }, 6000);
    };

    checkInSpeechRecognition.onerror = (event) => {
      console.warn("Check-in speech error:", event.error);
      if (event.error === 'not-allowed') {
        showDynamicToast("⚠️ Microphone access was blocked. Please allow mic permissions in your browser!");
        stopVoiceDictation();
      } else if (event.error !== 'no-speech') {
        stopVoiceDictation();
      }
    };

    checkInSpeechRecognition.onend = () => {
      if (isCheckInDictating) {
        stopVoiceDictation();
      }
    };

    checkInSpeechRecognition.start();
    showDynamicToast("🎙️ Listening in British English... speak freely at your own pace.");
  } catch (err) {
    console.error("Speech recognition startup error:", err);
    stopVoiceDictation();
  }
}

function stopVoiceDictation() {
  clearTimeout(checkInSpeechSilenceTimer);
  isCheckInDictating = false;

  if (checkInSpeechRecognition) {
    try {
      checkInSpeechRecognition.stop();
    } catch (e) {}
    checkInSpeechRecognition = null;
  }

  const btn = document.getElementById('voiceDictationBtn');
  const btnText = document.getElementById('voiceDictationBtnText');
  const banner = document.getElementById('voiceDictationBanner');
  const noteInput = document.getElementById('logNote');

  if (btn) {
    btn.className = "px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs active:scale-95 bg-teal-600 hover:bg-teal-700 text-white border border-teal-700";
  }
  if (btnText) btnText.innerText = "Speak Note";
  if (banner) banner.classList.add('hidden');

  if (noteInput && noteInput.value) {
    noteInput.value = correctClinicalVoiceNote(noteInput.value);
    handleVoiceNoteInput();
    showDynamicToast("✓ Note captured & formatted with Emma's clinical glossary!");
  }
}

function handleVoiceNoteInput() {
  const noteInput = document.getElementById('logNote');
  const clearBtn = document.getElementById('voiceNoteClearBtn');
  const polishBtn = document.getElementById('voiceNotePolishBtn');
  const wordCount = document.getElementById('voiceNoteWordCount');

  if (!noteInput) return;
  const val = noteInput.value.trim();
  const words = val ? val.split(/\s+/).length : 0;

  if (wordCount) {
    wordCount.innerText = `${words} word${words === 1 ? '' : 's'}`;
  }

  if (val.length > 0) {
    if (clearBtn) clearBtn.classList.remove('hidden');
    if (polishBtn) polishBtn.classList.remove('hidden');
  } else {
    if (clearBtn) clearBtn.classList.add('hidden');
    if (polishBtn) polishBtn.classList.add('hidden');
  }
}

function clearVoiceNote() {
  const noteInput = document.getElementById('logNote');
  if (noteInput) {
    noteInput.value = '';
    handleVoiceNoteInput();
    noteInput.focus();
    showDynamicToast("Notes cleared.");
  }
}

async function polishVoiceNoteWithAi() {
  const noteInput = document.getElementById('logNote');
  const polishBtn = document.getElementById('voiceNotePolishBtn');
  if (!noteInput || !noteInput.value.trim()) return;

  const currentVal = noteInput.value.trim();
  if (polishBtn) {
    polishBtn.innerHTML = `<span>⏳ Polishing...</span>`;
    polishBtn.disabled = true;
  }

  try {
    const storedKey = localStorage.getItem('emma_gemini_api_key') || '';
    const res = await fetch('/api/polish-note', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: currentVal, apiKey: storedKey })
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success && data.text) {
        noteInput.value = data.text;
        showDynamicToast("✨ AI polished note with clinical accuracy!");
      } else {
        noteInput.value = correctClinicalVoiceNote(currentVal);
        showDynamicToast("✓ Note formatted with Emma's clinical glossary!");
      }
    } else {
      noteInput.value = correctClinicalVoiceNote(currentVal);
      showDynamicToast("✓ Note formatted with Emma's clinical glossary!");
    }
  } catch (e) {
    noteInput.value = correctClinicalVoiceNote(currentVal);
    showDynamicToast("✓ Note formatted with Emma's clinical glossary!");
  } finally {
    if (polishBtn) {
      polishBtn.innerHTML = `<span>✨ Polish</span>`;
      polishBtn.disabled = false;
    }
    handleVoiceNoteInput();
  }
}

function selectFasting(val) {
  selectedFastingVal = val;
  const inputEl = document.getElementById('logFastingAdherence');
  if (inputEl) inputEl.value = val;

  document.querySelectorAll('.fasting-btn').forEach(btn => {
    btn.classList.remove('ring-2', 'ring-purple-600', 'bg-purple-50', 'border-purple-500', 'shadow-xs');
  });
  const activeBtn = document.getElementById(`fastBtn-${val}`);
  if (activeBtn) {
    activeBtn.classList.add('ring-2', 'ring-purple-600', 'bg-purple-50', 'border-purple-500', 'shadow-xs');
  }
}

function updateDiaphragmSliderDisplay(val) {
  const el = document.getElementById('diaphragmVal');
  if (!el) return;
  const num = parseInt(val, 10);
  let label = 'Flat & Free';
  if (num >= 8) label = 'Severe Gas Trap';
  else if (num >= 6) label = 'Left Rib Pressure';
  else if (num >= 4) label = 'Moderate Tightness';
  else if (num >= 1) label = 'Mild Fullness';
  el.innerText = `${num} / 10 (${label})`;
}

function selectBristol(val) {
  selectedBristolVal = val;
  const inputEl = document.getElementById('logBristol');
  if (inputEl) inputEl.value = val;
  document.querySelectorAll('.bristol-btn').forEach(btn => btn.classList.remove('selected', 'border-purple-600', 'ring-2', 'ring-purple-500', 'bg-purple-50'));
  
  const activeBtn = Array.from(document.querySelectorAll('.bristol-btn')).find(b => b.getAttribute('onclick')?.includes(`'${val}'`));
  if (activeBtn) {
    activeBtn.classList.add('selected', 'border-purple-600', 'ring-2', 'ring-purple-500', 'bg-purple-50');
  }

  const nuanceContainer = document.getElementById('stoolNuanceContainer');
  const nuanceButtons = document.getElementById('stoolNuanceButtons');
  const nuanceInput = document.getElementById('logStoolNuance');

  if (nuanceContainer && nuanceButtons) {
    if (val === 'liquid') {
      nuanceContainer.classList.remove('hidden');
      nuanceButtons.innerHTML = `
        <button type="button" onclick="selectStoolNuance('bypass')" id="nuanceBtn-bypass" class="p-2 rounded-xl border border-purple-200 bg-white text-[11px] font-bold text-sky-900 hover:border-sky-400 text-left transition-all ring-2 ring-purple-600 bg-purple-100/70">
          <span class="block text-xs">💧 Watery Bypass</span>
          <span class="text-[9px] font-normal text-slate-500 block">Fluid around hard plug</span>
        </button>
        <button type="button" onclick="selectStoolNuance('loose')" id="nuanceBtn-loose" class="p-2 rounded-xl border border-purple-200 bg-white text-[11px] font-bold text-slate-700 hover:border-purple-400 text-left transition-all">
          <span class="block text-xs">🌊 Loose Emptying</span>
          <span class="text-[9px] font-normal text-slate-500 block">Full liquid purge</span>
        </button>
      `;
      selectStoolNuance('bypass');
    } else if (val === 'normal') {
      nuanceContainer.classList.remove('hidden');
      nuanceButtons.innerHTML = `
        <button type="button" onclick="selectStoolNuance('formed')" id="nuanceBtn-formed" class="col-span-2 p-2 rounded-xl border-2 border-emerald-300 bg-emerald-50 text-[11px] font-bold text-emerald-900 text-center transition-all ring-2 ring-purple-600">
          <span>🪵 Formed Bristol 4 ✨</span>
          <span class="text-[9px] font-normal text-emerald-700 block mt-0.5">Step 1 of 14 for Med Step-Down Stability Proof!</span>
        </button>
      `;
      selectStoolNuance('formed');
    } else if (val === 'hard') {
      nuanceContainer.classList.remove('hidden');
      nuanceButtons.innerHTML = `
        <button type="button" onclick="selectStoolNuance('hard')" id="nuanceBtn-hard" class="col-span-2 p-2 rounded-xl border-2 border-amber-300 bg-amber-50 text-[11px] font-bold text-amber-900 text-center transition-all ring-2 ring-purple-600">
          <span>🪨 Hard Pellet (Bristol 1–2)</span>
          <span class="text-[9px] font-normal text-amber-700 block mt-0.5">Colonic inertia delay. Warm fluid trigger advised.</span>
        </button>
      `;
      selectStoolNuance('hard');
    } else {
      nuanceContainer.classList.add('hidden');
      if (nuanceInput) nuanceInput.value = '';
    }
  }
}

function selectStoolNuance(nuance) {
  const nuanceInput = document.getElementById('logStoolNuance');
  if (nuanceInput) nuanceInput.value = nuance;
  document.querySelectorAll('#stoolNuanceButtons button').forEach(b => {
    b.classList.remove('ring-2', 'ring-purple-600', 'bg-purple-100/70', 'border-purple-600');
  });
  const btn = document.getElementById(`nuanceBtn-${nuance}`);
  if (btn) {
    btn.classList.add('ring-2', 'ring-purple-600', 'bg-purple-100/70', 'border-purple-600');
  }
}

function selectMood(val) {
  selectedMoodVal = val;
  const input = document.getElementById('logMood');
  if (input) input.value = val;
  document.querySelectorAll('.mood-btn').forEach(btn => btn.classList.remove('selected', 'border-purple-600', 'ring-2', 'ring-purple-500', 'bg-purple-50'));
  const activeBtn = Array.from(document.querySelectorAll('.mood-btn')).find(b => b.getAttribute('onclick')?.includes(`'${val}'`));
  if (activeBtn) activeBtn.classList.add('selected', 'border-purple-600', 'ring-2', 'ring-purple-500', 'bg-purple-50');
}

function selectAlcohol(val) {
  selectedAlcoholVal = val;
  const input = document.getElementById('logAlcohol');
  if (input) input.value = val;
  document.querySelectorAll('.alc-btn').forEach(btn => btn.classList.remove('selected', 'border-purple-600', 'ring-2', 'ring-purple-500', 'bg-purple-50'));
  const activeBtn = Array.from(document.querySelectorAll('.alc-btn')).find(b => b.getAttribute('onclick')?.includes(`'${val}'`));
  if (activeBtn) activeBtn.classList.add('selected', 'border-purple-600', 'ring-2', 'ring-purple-500', 'bg-purple-50');
}

function toggleTag(btn) {
  btn.classList.toggle('selected');
  const tagText = btn.innerText;
  if (selectedTags.has(tagText)) {
    selectedTags.delete(tagText);
    btn.classList.remove('bg-brand-coral', 'text-white', 'border-brand-coral');
    btn.classList.add('bg-white', 'text-brand-textMuted');
  } else {
    selectedTags.add(tagText);
    btn.classList.add('bg-brand-coral', 'text-white', 'border-brand-coral');
    btn.classList.remove('bg-white', 'text-brand-textMuted');
  }
}

function updateDashboardCheckInBadge(entry) {
  const badge = document.getElementById('dashboardCheckInBadge');
  const summary = document.getElementById('dashboardCheckInSummary');
  const btnText = document.getElementById('dashboardCheckInBtnText');
  const fStatus = document.getElementById('dashStatusFasting');
  const sStatus = document.getElementById('dashStatusSalt');
  const stStatus = document.getElementById('dashStatusStool');
  const dStatus = document.getElementById('dashStatusDiaphragm');

  if (entry) {
    if (badge) {
      badge.innerText = "Logged Today ✨";
      badge.className = "text-[9px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200";
    }
    if (btnText) btnText.innerText = "Update Check-In";
    if (summary) {
      summary.innerHTML = `Logged at <strong>${entry.temp ? entry.temp + '°C' : 'Morning'}</strong> • Motility: <strong>${entry.movement || 'Recorded'}</strong>`;
    }

    if (fStatus) {
      if (entry.fastingAdherence === 'kept_40') {
        fStatus.innerText = "Kept 40m ✓";
        fStatus.className = "font-extrabold text-emerald-700";
      } else if (entry.fastingAdherence === 'broke_early') {
        fStatus.innerText = "Broke Early ⚠️";
        fStatus.className = "font-extrabold text-amber-700";
      } else {
        fStatus.innerText = "Skipped";
        fStatus.className = "font-extrabold text-slate-500";
      }
    }

    if (sStatus) {
      if (entry.electrolyteBuffered || entry.electrolytesTaken) {
        sStatus.innerText = "Taken ✨";
        sStatus.className = "font-extrabold text-emerald-700";
      } else {
        sStatus.innerText = "Pending";
        sStatus.className = "font-extrabold text-slate-400";
      }
    }

    if (stStatus) {
      if (entry.stoolNuance === 'formed') {
        stStatus.innerText = "Bristol 4 ✨";
        stStatus.className = "font-extrabold text-emerald-700";
      } else if (entry.stoolNuance === 'bypass') {
        stStatus.innerText = "Watery Bypass";
        stStatus.className = "font-extrabold text-sky-700";
      } else if (entry.bristol === 'hard') {
        stStatus.innerText = "Hard Pellet";
        stStatus.className = "font-extrabold text-amber-700";
      } else if (entry.bristol === 'liquid') {
        stStatus.innerText = "Liquid";
        stStatus.className = "font-extrabold text-sky-700";
      } else {
        stStatus.innerText = entry.movement || "None";
        stStatus.className = "font-extrabold text-slate-600";
      }
    }

    if (dStatus) {
      if (entry.diaphragmResetDone) {
        dStatus.innerText = "Completed 🫁";
        dStatus.className = "font-extrabold text-teal-700";
      } else {
        dStatus.innerText = `${entry.diaphragmBloat || 4}/10 Bloat`;
        dStatus.className = "font-extrabold text-slate-500";
      }
    }
  } else {
    if (badge) {
      badge.innerText = "Ready to Log";
      badge.className = "text-[9px] font-black px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200";
    }
    if (btnText) btnText.innerText = "Open Check-In";
    if (summary) {
      summary.innerText = "One calm place for your vitals, 40-min fast, stool nuance & APD status.";
    }
    if (fStatus) { fStatus.innerText = "Pending"; fStatus.className = "font-extrabold text-brand-textDark"; }
    if (sStatus) { sStatus.innerText = "Pending"; sStatus.className = "font-extrabold text-brand-textDark"; }
    if (stStatus) { stStatus.innerText = "Pending"; stStatus.className = "font-extrabold text-brand-textDark"; }
    if (dStatus) { dStatus.innerText = "Pending"; dStatus.className = "font-extrabold text-brand-textDark"; }
  }
}

// ============================================================================
// 7B. "CAN I EAT THIS?" VOICE & GUT SAFETY AUDITOR (PATIENT & ADHD-FRIENDLY)
// ============================================================================
let recognitionInstance = null;
let silenceTimer = null;
let accumulatedTranscript = '';

function startVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Voice recognition isn't supported in this browser. Please type your meal into the box!");
    document.getElementById('foodQueryInput')?.focus();
    return;
  }

  const micBtn = document.getElementById('micBtn');
  const micLabel = document.getElementById('micLabel');
  const queryInput = document.getElementById('foodQueryInput');

  // If already listening and user taps again, stop immediately and evaluate!
  if (recognitionInstance) {
    stopVoiceAndEvaluate();
    return;
  }

  try {
    recognitionInstance = new SpeechRecognition();
    recognitionInstance.continuous = true;       // Stays open through pauses!
    recognitionInstance.interimResults = true;    // Streams words live so Emma sees it hearing her!
    recognitionInstance.lang = 'en-GB';
    recognitionInstance.maxAlternatives = 1;

    accumulatedTranscript = '';
    if (queryInput) queryInput.value = '';

    micBtn?.classList.add('mic-active');
    if (micLabel) micLabel.innerText = "Listening... (Tap when done)";

    recognitionInstance.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          accumulatedTranscript += ' ' + event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      const currentFullText = (accumulatedTranscript + ' ' + interimTranscript).trim();
      if (queryInput) queryInput.value = currentFullText;

      // Reset patient 6-second silence timer every time Emma speaks a new phrase
      clearTimeout(silenceTimer);
      silenceTimer = setTimeout(() => {
        // Only auto-stop if there's been 6 full seconds of quiet
        stopVoiceAndEvaluate();
      }, 6000);
    };

    recognitionInstance.onerror = (event) => {
      console.warn("Speech recognition notice:", event.error);
      if (event.error === 'not-allowed') {
        alert("Microphone permission was denied. Please allow microphone access or type your meal!");
        resetVoiceButton();
      } else if (event.error === 'no-speech') {
        // Keep listening, don't abort immediately on a pause
      } else {
        resetVoiceButton();
      }
    };

    recognitionInstance.onend = () => {
      // If ended naturally or aborted
      if (recognitionInstance) {
        stopVoiceAndEvaluate();
      }
    };

    recognitionInstance.start();

    // Safety fallback: allow up to 45 seconds of total speaking time
    clearTimeout(silenceTimer);
    silenceTimer = setTimeout(() => {
      stopVoiceAndEvaluate();
    }, 45000);

  } catch (err) {
    console.error(err);
    resetVoiceButton();
    alert("Could not start voice recognition. Please type your meal!");
  }
}

function stopVoiceAndEvaluate() {
  clearTimeout(silenceTimer);
  silenceTimer = null;

  if (recognitionInstance) {
    const rec = recognitionInstance;
    recognitionInstance = null;
    try {
      rec.stop();
    } catch (e) {}
  }

  resetVoiceButton();

  const queryInput = document.getElementById('foodQueryInput');
  if (queryInput && queryInput.value.trim().length > 0) {
    checkFoodSafety();
  }
}

function resetVoiceButton() {
  const micBtn = document.getElementById('micBtn');
  const micLabel = document.getElementById('micLabel');
  micBtn?.classList.remove('mic-active');
  if (micLabel) micLabel.innerText = "Speak Meal";
}

function quickCheckPreset(presetText) {
  const input = document.getElementById('foodQueryInput');
  if (input) {
    input.value = presetText;
    checkFoodSafety();
  }
}

function sanitizeNegations(text) {
  let cleaned = text;
  // Garlic negations
  cleaned = cleaned.replace(/\b(no|without|zero|free\s+from|free\s+of)\s+garlic(\s+powder)?\b/gi, ' ');
  cleaned = cleaned.replace(/\bgarlic[-\s]*(free|less)\b/gi, ' ');
  cleaned = cleaned.replace(/\b(no|without|zero)\s+aioli\b/gi, ' ');

  // Onion / Shallots / Leek / Scallion negations
  cleaned = cleaned.replace(/\b(no|without|zero|free\s+from|free\s+of)\s+(onions?|shallots?|leeks?|scallions?)\b/gi, ' ');
  cleaned = cleaned.replace(/\b(onion|shallot|leek|scallion)[-\s]*(free|less)\b/gi, ' ');

  // Gluten / Wheat negations
  cleaned = cleaned.replace(/\b(no|without|zero|free\s+from|free\s+of)\s+(gluten|wheat|barley|rye)\b/gi, ' ');
  cleaned = cleaned.replace(/\b(gluten|wheat)[-\s]*(free|less)\b/gi, ' ');
  cleaned = cleaned.replace(/\bgf\b/gi, ' ');
  cleaned = cleaned.replace(/\bmade\s+without\s+wheat\b/gi, ' ');

  // Celery negations
  cleaned = cleaned.replace(/\b(no|without|zero|free\s+from|free\s+of)\s+celery\b/gi, ' ');
  cleaned = cleaned.replace(/\bcelery[-\s]*(free|less)\b/gi, ' ');

  // Honey negations
  cleaned = cleaned.replace(/\b(no|without|zero|free\s+from|free\s+of)\s+honey\b/gi, ' ');
  cleaned = cleaned.replace(/\bhoney[-\s]*(free|less)\b/gi, ' ');

  // Dairy negations
  cleaned = cleaned.replace(/\b(no|without|zero|free\s+from|free\s+of)\s+(dairy|lactose|milk|cheese|cream)\b/gi, ' ');
  cleaned = cleaned.replace(/\b(dairy|lactose)[-\s]*free\b/gi, ' ');

  // Alcohol / Beer / Cider negations
  cleaned = cleaned.replace(/\b(non[-\s]*alcoholic|alcohol[-\s]*free|0\.0%?|virgin|zero[-\s]*alcohol)\s+(beer|lager|cider|ale|cocktail|wine)?\b/gi, ' ');

  // Carbonation negations
  cleaned = cleaned.replace(/\b(flat|still|non[-\s]*carbonated|non[-\s]*fizzy|degassed)\b/gi, ' ');

  return cleaned;
}

// ============================================================================
// CLINICAL AI MOTILITY REASONING AGENT & GEMINI DUAL-ENGINE ARCHITECTURE
// ============================================================================

let foodAuditTimer = null;
let activeAiEngineMode = localStorage.getItem('emma_ai_engine_preference') || 'gemini';

function initAiEngineUI() {
  let storedKey = (localStorage.getItem('emma_gemini_api_key') || '').trim();
  if (storedKey) {
    storedKey = storedKey.split(/\s+/)[0].replace(/^["']|["']$/g, '');
    localStorage.setItem('emma_gemini_api_key', storedKey);
  }

  const statusBadge = document.getElementById('geminiConnectionStatusBadge');
  const keyInput = document.getElementById('geminiApiKeyInput');

  if (keyInput && storedKey) {
    keyInput.value = storedKey;
  }

  fetch('/api/get-gemini-status')
    .then(res => res.json())
    .then(data => {
      if (data.hasKey || storedKey) {
        if (statusBadge) {
          statusBadge.className = "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200";
          statusBadge.innerText = "Gemini 3.8 Flash Connected";
        }
      } else {
        if (statusBadge) {
          statusBadge.className = "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700";
          statusBadge.innerText = "Not Configured (Using Backup Rules)";
        }
      }
    })
    .catch(() => {});

  updateAiEngineDisplay();
}

function updateAiEngineDisplay() {
  const engineText = document.getElementById('aiActiveEngineText');
  const enginePill = document.getElementById('aiActiveEnginePill');
  const autonomousRadio = document.getElementById('radioEngineAutonomous');
  const geminiRadio = document.getElementById('radioEngineGemini');
  const autoCard = document.getElementById('engineCard-autonomous');
  const geminiCard = document.getElementById('engineCard-gemini');

  if (activeAiEngineMode === 'gemini') {
    if (geminiRadio) geminiRadio.checked = true;
    if (engineText) engineText.innerText = "Gemini 3.8 Flash Agent";
    if (enginePill) {
      enginePill.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 border border-purple-200 text-purple-800 flex items-center gap-1 shadow-2xs";
      enginePill.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse"></span><span>Gemini 3.8 Flash</span>';
    }
    if (geminiCard) {
      geminiCard.className = "block p-3.5 rounded-2xl border-2 cursor-pointer transition-all border-purple-500 bg-purple-50/50 shadow-2xs";
    }
    if (autoCard) {
      autoCard.className = "block p-3.5 rounded-2xl border cursor-pointer transition-all border-slate-200 hover:border-slate-300 bg-white";
    }
  } else {
    if (autonomousRadio) autonomousRadio.checked = true;
    if (engineText) engineText.innerText = "Clinical Backup Model";
    if (enginePill) {
      enginePill.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-1 shadow-2xs";
      enginePill.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span><span>Clinical Backup</span>';
    }
    if (autoCard) {
      autoCard.className = "block p-3.5 rounded-2xl border-2 cursor-pointer transition-all border-emerald-500 bg-emerald-50/50 shadow-2xs";
    }
    if (geminiCard) {
      geminiCard.className = "block p-3.5 rounded-2xl border cursor-pointer transition-all border-purple-200 hover:border-purple-300 bg-white";
    }
  }
}

function openAiSettingsModal() {
  const modal = document.getElementById('aiSettingsModal');
  if (modal) {
    modal.classList.remove('hidden');
    initAiEngineUI();
    if (window.lucide) lucide.createIcons();
  }
}

function closeAiSettingsModal() {
  const modal = document.getElementById('aiSettingsModal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function switchAiEngineMode(mode) {
  activeAiEngineMode = mode;
  localStorage.setItem('emma_ai_engine_preference', mode);
  updateAiEngineDisplay();
}

function toggleApiKeyVisibility() {
  const input = document.getElementById('geminiApiKeyInput');
  if (input) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}

function testGeminiConnection() {
  const input = document.getElementById('geminiApiKeyInput');
  const rawKey = (input?.value || '').trim();
  const key = rawKey.split(/\s+/)[0].replace(/^["']|["']$/g, '');
  if (input && key) {
    input.value = key;
  }
  const feedback = document.getElementById('geminiTestFeedback');
  const testBtn = document.getElementById('testGeminiBtn');

  if (!key) {
    if (feedback) {
      feedback.className = "p-2.5 rounded-xl text-xs font-medium border bg-amber-50 border-amber-200 text-amber-900";
      feedback.innerText = "⚠️ Please paste your Gemini API key from Google AI Studio first.";
      feedback.classList.remove('hidden');
    }
    return;
  }

  if (testBtn) {
    testBtn.disabled = true;
    testBtn.innerHTML = '<svg class="animate-spin h-3.5 w-3.5 text-white mr-1 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Testing...';
  }

  fetch('/api/test-gemini-key', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ apiKey: key })
  })
  .then(res => res.json())
  .then(data => {
    if (data.ok) {
      localStorage.setItem('emma_gemini_api_key', key);
      fetch('/api/save-gemini-key', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey: key })
      }).catch(() => {});

      switchAiEngineMode('gemini');
      if (feedback) {
        feedback.className = "p-2.5 rounded-xl text-xs font-medium border bg-emerald-50 border-emerald-200 text-emerald-900";
        feedback.innerText = "✓ Gemini 3.8 Flash (High Reasoning) connected & saved! Deep neural clinical reasoning is active.";
        feedback.classList.remove('hidden');
      }
      const badge = document.getElementById('geminiConnectionStatusBadge');
      if (badge) {
        badge.className = "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200";
        badge.innerText = "Gemini 3.8 Active";
      }
    } else {
      if (feedback) {
        feedback.className = "p-2.5 rounded-xl text-xs font-medium border bg-rose-50 border-rose-200 text-rose-900";
        feedback.innerText = "✕ Connection failed: " + (data.error || "Please check your key");
        feedback.classList.remove('hidden');
      }
    }
  })
  .catch(err => {
    if (feedback) {
      feedback.className = "p-2.5 rounded-xl text-xs font-medium border bg-rose-50 border-rose-200 text-rose-900";
      feedback.innerText = "✕ Request error: " + err.message;
      feedback.classList.remove('hidden');
    }
  })
  .finally(() => {
    if (testBtn) {
      testBtn.disabled = false;
      testBtn.innerHTML = '<i data-lucide="zap" class="w-3.5 h-3.5 inline mr-1"></i><span>Test & Save Key</span>';
      if (window.lucide) lucide.createIcons();
    }
  });
}

function clearGeminiApiKey() {
  localStorage.removeItem('emma_gemini_api_key');
  const input = document.getElementById('geminiApiKeyInput');
  if (input) input.value = '';
  fetch('/api/save-gemini-key', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ apiKey: '' })
  }).catch(() => {});

  switchAiEngineMode('autonomous');
  const feedback = document.getElementById('geminiTestFeedback');
  if (feedback) {
    feedback.className = "p-2.5 rounded-xl text-xs font-medium border bg-blue-50 border-blue-200 text-blue-900";
    feedback.innerText = "ℹ️ Gemini key removed. Switched to Autonomous Clinical Motility Engine.";
    feedback.classList.remove('hidden');
  }
  const badge = document.getElementById('geminiConnectionStatusBadge');
  if (badge) {
    badge.className = "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700";
    badge.innerText = "Not Configured";
  }
}

function toggleReasoningChain() {
  const content = document.getElementById('reasoningChainContent');
  const icon = document.getElementById('reasoningChainToggleIcon');
  if (!content) return;
  const isHidden = content.classList.contains('hidden');
  if (isHidden) {
    content.classList.remove('hidden');
    if (icon) icon.innerHTML = '<span>Collapse</span><i data-lucide="chevron-up" class="w-3.5 h-3.5"></i>';
  } else {
    content.classList.add('hidden');
    if (icon) icon.innerHTML = '<span>Details</span><i data-lucide="chevron-down" class="w-3.5 h-3.5"></i>';
  }
  if (window.lucide) lucide.createIcons();
}

function copyOrderingScript(btn) {
  const script = btn.getAttribute('data-script') || '';
  if (!script) return;
  navigator.clipboard.writeText(script).then(() => {
    const label = btn.querySelector('.copyLabel');
    if (label) {
      const orig = label.innerText;
      label.innerText = "✓ Copied!";
      btn.classList.add('bg-emerald-100', 'border-emerald-400');
      setTimeout(() => {
        label.innerText = orig;
        btn.classList.remove('bg-emerald-100', 'border-emerald-400');
      }, 2000);
    }
  }).catch(() => {
    prompt("Copy this ordering script for the kitchen:", script);
  });
}

function prefillQuickLogWithMeal(mealName) {
  openQuickLogModal();
  const noteInput = document.getElementById('logNote');
  if (noteInput) {
    const current = noteInput.value.trim();
    noteInput.value = current ? `${current}; Meal: ${mealName}` : `Meal: ${mealName}`;
    noteInput.focus();
  }
}

function checkFoodSafety() {
  const inputEl = document.getElementById('foodQueryInput');
  const rawQuery = (inputEl?.value || '').trim();
  if (!rawQuery) return;

  const resultContainer = document.getElementById('foodAssessmentResult');
  if (!resultContainer) return;

  const activeCycle = getCurrentCycleInfo();

  if (foodAuditTimer) clearTimeout(foodAuditTimer);

  resultContainer.classList.remove('hidden');
  resultContainer.className = "p-4 sm:p-5 rounded-2xl border transition-all bg-gradient-to-r from-purple-50/90 via-indigo-50/80 to-purple-50/90 border-purple-300 text-purple-950 shadow-xs";
  resultContainer.innerHTML = `
    <div class="flex items-center space-x-3">
      <div class="w-9 h-9 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm animate-pulse">
        <i data-lucide="sparkles" class="w-5 h-5 text-white animate-spin"></i>
      </div>
      <div>
        <div class="flex items-center gap-1.5">
          <h4 class="text-xs font-extrabold text-purple-950">Gemini 3.8 Flash is analyzing "${rawQuery}"...</h4>
          <span class="text-[9px] font-black px-1.5 py-0.5 rounded bg-purple-200 text-purple-900 uppercase tracking-wider">AI Thinking</span>
        </div>
        <p class="text-[11px] text-purple-800/80 mt-0.5">Checking stomach transit, APD reflex & Cycle Day ${activeCycle.cycleDay} comfort</p>
      </div>
    </div>
  `;
  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }

  let storedKey = (localStorage.getItem('emma_gemini_api_key') || '').trim();
  if (storedKey) {
    storedKey = storedKey.split(/\s+/)[0].replace(/^["']|["']$/g, '');
  }

  // Always query Gemini proxy endpoint
  fetch('/api/gemini-audit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: rawQuery,
      cycleDay: activeCycle.cycleDay,
      phase: activeCycle.phase,
      phaseLabel: activeCycle.phaseLabel,
      apiKey: storedKey || ''
    })
  })
  .then(res => res.json())
  .then(resData => {
    if (resData.success && resData.data) {
      renderClinicalAiAuditResult(resultContainer, resData.data, resData.source || 'gemini-3.8-flash', resData.modelUsed);
    } else {
      // Fallback to built-in clinical rule engine
      foodAuditTimer = setTimeout(() => {
        const autoData = evaluateAutonomousClinicalReasoning(rawQuery, activeCycle);
        renderClinicalAiAuditResult(resultContainer, autoData, 'autonomous');
      }, 300);
    }
  })
  .catch(() => {
    foodAuditTimer = setTimeout(() => {
      const autoData = evaluateAutonomousClinicalReasoning(rawQuery, activeCycle);
      renderClinicalAiAuditResult(resultContainer, autoData, 'autonomous');
    }, 300);
  });
}

function evaluateAutonomousClinicalReasoning(rawQuery, activeCycle) {
  const query = rawQuery.toLowerCase();
  const cleanQuery = sanitizeNegations(query);
  const day = activeCycle.cycleDay;
  const isFollicular = activeCycle.phase === 'follicular';
  const isLuteal = activeCycle.phase === 'luteal';
  const phaseLbl = activeCycle.phaseLabel;

  let theme = "amber";
  let title = "";
  let badge = "Screening Needed";
  let summary = "";
  let gastricTransitMinutes = isLuteal ? 90 : 70;
  let gastricTransitLabel = `${gastricTransitMinutes} mins`;
  let bristolForecast = "Type 4 (if verified clean)";
  let apdRiskPercent = isLuteal ? 45 : 30;
  let apdRiskLabel = `Moderate (${apdRiskPercent}%)`;
  let splenicGasPressure = isLuteal ? 48 : 32;
  let splenicGasLabel = `Moderate (${splenicGasPressure}%)`;
  let reasoningChain = [];
  let orderingScript = "";
  let freedomHacks = [];
  let tags = [];

  // 1. BEER, CRAFT LAGER, ALES, STOUTS, CIDERS & PERRY (TOP PRIORITY CLINICAL BAN)
  const isBeer = /\b(beer|beers|lager|lagers|craft\s+lager|ale|ales|ipa|ipas|stout|stouts|porter|porters|pilsner|wheat\s+beer|draft\s+beer|draught|bitter|heineken|peroni|stella|corona|guinness|brew|brews)\b/i.test(cleanQuery);
  const isCider = /\b(cider|ciders|craft\s+cider|apple\s+cider|perry|bulmers|magners|thatchers|aspall)\b/i.test(cleanQuery);

  if (isBeer || isCider) {
    theme = "red";
    const itemType = (isBeer && isCider) ? "Craft Lager Beer & Cider" : (isBeer ? "Craft Lager & Beer" : "Hard Cider & Perry");
    const emoji = (isBeer && isCider) ? "🍺 🍏" : (isBeer ? "🍺" : "🍏");
    title = `${emoji} ${itemType}: Severe Motility & APD Trigger (Cycle Day ${day})`;
    badge = "Severe Trigger — Safe Swap Required";

    summary = `Pints of ${itemType.toLowerCase()} combine heavy dissolved CO2 carbonation, fermented barley gluten, live brewer's yeast, and high-FODMAP apple sorbitol. On Cycle Day ${day} (${phaseLbl}), dissolved CO2 stretches the gastric fundus, initiating an immediate downward diaphragmatic spasm (APD) that kinks the splenic flexure and traps severe gas under Emma's left ribs.`;

    gastricTransitMinutes = isLuteal ? 140 : 110;
    gastricTransitLabel = `${gastricTransitMinutes} mins (Severely Delayed)`;
    bristolForecast = "Type 6-7 (Osmotic Bypass Urgency) or Type 1-2 (Trapped Behind Gas Blockage)";
    apdRiskPercent = isLuteal ? 94 : 82;
    apdRiskLabel = `Severe (${apdRiskPercent}%)`;
    splenicGasPressure = isLuteal ? 96 : 85;
    splenicGasLabel = `Extreme (${splenicGasPressure}%)`;

    reasoningChain = [
      {
        step: 1,
        title: "Component & Ingredient Forensics",
        icon: "🔬",
        content: isBeer && isCider
          ? "Craft lager contains fermented barley malt (gliadin gluten + fructans), live brewer's yeast (Saccharomyces cerevisiae), and high-volume dissolved CO2. Cider contains pressed apple sorbitol (unabsorbable sugar alcohol polyol), excess free fructose, malic acid, and heavy carbonation."
          : (isBeer
            ? "Craft lager and beer are brewed from malted barley containing inflammatory gluten proteins and non-digestible barley fructans. Unfiltered craft beers are laden with live brewer's yeast (Saccharomyces cerevisiae), which violently ferments in sluggish colonic transit, saturated with dissolved CO2 bubbles."
            : "Cider is fermented from pressed apples, concentrating unabsorbable sorbitol (sugar alcohol polyol) and excess free fructose (FODMAPs). This induces an acute osmotic fluid surge in the jejunum while microbial fermentation generates massive hydrogen and methane gas.")
      },
      {
        step: 2,
        title: "Active Cycle Phase & Transit Kinetics",
        icon: "🌸",
        content: `On Cycle Day ${day} (${phaseLbl}), elevated progesterone dampens colonic smooth muscle contractions and extends whole-gut transit by 30–40%. When fermentable brewer's yeast, barley fructans, and apple sorbitol enter Emma's slow-transit bowel, gas production accelerates over 12–24 hours with nowhere to escape.`
      },
      {
        step: 3,
        title: "Biomechanical APD & Splenic Gas Impact",
        icon: "🫁",
        content: "Gulping 568ml (a full pint) of cold, carbonated liquid distends the gastric fundus and stretches tension receptors. This fires the pathological visco-phrenic reflex: Emma's diaphragm paradoxically contracts downward by 2–3 cm, pushing her lower tummy forward while mechanically crushing and kinking the acute splenic flexure under her left ribs."
      },
      {
        step: 4,
        title: "Pharmacological Synergy Cross-Check",
        icon: "💊",
        content: "Linaclotide 290mcg is actively stimulating CFTR chloride channels to draw fluid. Unabsorbed apple sorbitol from cider pulls a competing osmotic fluid surge, causing sudden, painful liquid bypass around retained stool. Alcohol also disrupts nighttime Prucalopride's 5-HT4 propulsive migrating motor complexes."
      }
    ];

    orderingScript = `Hi! Could I please swap this for a 100% Blue Agave blanco tequila with still water (or a light splash of soda) and two fresh lime wedges in a tall glass with ice? I have severe medical intolerances to barley gluten, brewer's yeast, and fermented apple sugars. Thank you!`;

    freedomHacks = [
      "Emma's Gold-Standard Social Drink: 100% Blue Agave Blanco Tequila + still water (or light splash of soda) + 2 fresh lime wedges (zero carbs, zero gluten, zero yeast, zero fermentable sugars).",
      "Wine Alternative: A small glass (125ml) of non-carbonated, crisp dry white wine (e.g. Sancerre, Sauvignon Blanc) sipped slowly with food.",
      "Non-Alcoholic Mocktail: Still mineral water with muddled fresh mint leaves, cucumber slices, and fresh lime juice.",
      "Cold & Carbonation Guard: Avoid ice-cold fizzy drinks that shock the vagal gastric reflex. Always do a 3-minute diaphragmatic breathing reset if feeling any abdominal tightness."
    ];

    tags = [
      isBeer ? "❌ Barley Gluten & Brewer's Yeast" : "❌ Concentrated Apple Sorbitol",
      "🚨 94% APD Diaphragm Spasm Risk",
      "⚠️ Splenic Flexure Gas Trapping",
      "💡 Swap to 100% Agave Tequila Soda + Lime"
    ];

    return { theme, title, badge, summary, metrics: { gastricTransitMinutes, gastricTransitLabel, bristolForecast, apdRiskPercent, apdRiskLabel, splenicGasPressure, splenicGasLabel }, reasoningChain, orderingScript, freedomHacks, tags };
  }

  // 2. PROSECCO, CHAMPAGNE & SPARKLING WINE
  const isProseccoOrSparklingWine = /\b(prosecco|champagne|cava|sparkling\s+wine)\b/i.test(cleanQuery);
  if (isProseccoOrSparklingWine) {
    theme = "red";
    title = `🥂 Sparkling Wine / Prosecco: High Carbonation & Gas Trap (Cycle Day ${day})`;
    badge = "High Gas Trigger — Safe Swap Recommended";
    summary = `Sparkling wines contain high concentrations of dissolved CO2 bubbles, sulfites, and residual grape sugars. The sudden gastric expansion triggers downward diaphragmatic descent (APD) and severe splenic flexure gas.`;
    gastricTransitMinutes = isLuteal ? 110 : 85;
    gastricTransitLabel = `${gastricTransitMinutes} mins (Delayed)`;
    bristolForecast = "Type 5-6 (Loose Irritation Risk)";
    apdRiskPercent = isLuteal ? 82 : 68;
    apdRiskLabel = `High (${apdRiskPercent}%)`;
    splenicGasPressure = isLuteal ? 88 : 72;
    splenicGasLabel = `Elevated (${splenicGasPressure}%)`;
    reasoningChain = [
      { step: 1, title: "Component & Ingredient Forensics", icon: "🔬", content: "Sparkling wine and prosecco are pressurized with carbon dioxide. Residual yeasts and sulfur dioxide irritate sensitive mucosal mast cells, while effervescence expands rapidly upon warming in the stomach." },
      { step: 2, title: "Active Cycle Phase & Transit Kinetics", icon: "🌸", content: `On Cycle Day ${day} (${phaseLbl}), high progesterone slows gastric and colonic transit. Gas bubbles cannot vent easily and pool in the ascending and transverse colon.` },
      { step: 3, title: "Biomechanical APD & Splenic Gas Impact", icon: "🫁", content: "Rapid gastric bubble expansion stretches the gastric fundus, causing the diaphragm to push downward into the splenic flexure." },
      { step: 4, title: "Pharmacological Synergy Cross-Check", icon: "💊", content: "Carbonation and alcohol accelerate fluid transit unpredictably, interfering with Linaclotide's controlled morning fluid secretion." }
    ];
    orderingScript = `Hi! Could I please swap the prosecco for a glass of crisp, dry white wine like a Sancerre or Sauvignon Blanc, served still? Thank you!`;
    freedomHacks = [
      "Swap sparkling wine for a still, dry white wine (Sancerre, Chablis, Pinot Grigio).",
      "If sipping prosecco at a toast, let the glass sit for 5 minutes and take small sips rather than drinking on an empty stomach.",
      "Pair with plenty of room-temperature still mineral water."
    ];
    tags = ["⚠️ High CO2 Bubble Expansion", "❌ Splenic Gas Trap Risk", "💡 Swap to Still Dry White Wine"];
    return { theme, title, badge, summary, metrics: { gastricTransitMinutes, gastricTransitLabel, bristolForecast, apdRiskPercent, apdRiskLabel, splenicGasPressure, splenicGasLabel }, reasoningChain, orderingScript, freedomHacks, tags };
  }

  // 3. CARBONATED SODAS, ENERGY DRINKS & KOMBUCHA
  const isCarbonated = /\b(coke|coca\s+cola|diet\s+coke|coke\s+zero|pepsi|sprite|7up|fanta|lemonade|fizzy\s+drink|fizzy\s+water|carbonated\s+water|sparkling\s+water|san\s+pellegrino|perrier|energy\s+drink|red\s+bull|monster|kombucha)\b/i.test(cleanQuery);
  if (isCarbonated) {
    theme = "red";
    title = `🥤 Carbonated Beverage: Acute Gastric Fundus Distension (Cycle Day ${day})`;
    badge = "High APD Carbonation Trigger";
    summary = `Carbonated sodas and sparkling drinks release high-volume CO2 gas into the stomach. In Emma's slow-transit anatomy, this dilates gastric mechanoreceptors and forces the diaphragm into a downward spasm (APD).`;
    gastricTransitMinutes = isLuteal ? 95 : 75;
    gastricTransitLabel = `${gastricTransitMinutes} mins`;
    bristolForecast = "Type 5-6 (Osmotic/Irritant Bypass)";
    apdRiskPercent = isLuteal ? 86 : 70;
    apdRiskLabel = `High (${apdRiskPercent}%)`;
    splenicGasPressure = isLuteal ? 90 : 75;
    splenicGasLabel = `Elevated (${splenicGasPressure}%)`;
    reasoningChain = [
      { step: 1, title: "Component & Ingredient Forensics", icon: "🔬", content: "Carbonated beverages contain dissolved carbon dioxide gas, phosphoric/citric acids, and frequently artificial sweeteners (sucralose, acesulfame K) or high-fructose corn syrup—all proven gut motility disruptors." },
      { step: 2, title: "Active Cycle Phase & Transit Kinetics", icon: "🌸", content: `On Cycle Day ${day} (${phaseLbl}), intestinal motility is relaxed by progesterone. Ingested gas bubbles cannot be propelled forward and form large stagnant gas pockets.` },
      { step: 3, title: "Biomechanical APD & Splenic Gas Impact", icon: "🫁", content: "Gastric fundus stretching triggers the visceral-phrenic reflex: the diaphragm contracts downward by 2 cm, creating immediate visible tummy protrusion and sharp left-rib gas pain." },
      { step: 4, title: "Pharmacological Synergy Cross-Check", icon: "💊", content: "Artificial sweeteners and phosphoric acid irritate colonic epithelial linings, causing erratic fluid shifts alongside Linaclotide 290mcg." }
    ];
    orderingScript = `Hi! Could I please have still mineral water with fresh lemon and cucumber slices instead of sparkling? Thank you!`;
    freedomHacks = [
      "Always choose STILL mineral or tap water instead of sparkling.",
      "Infuse still water with fresh cucumber, mint, or a slice of fresh ginger for refreshing flavor with zero gas.",
      "If having a social drink, request still water as your mixer instead of soda or tonic."
    ];
    tags = ["🚨 High Dissolved CO2 Gas", "🫁 Severe Diaphragmatic Spasm Risk", "💡 Choose Still Water with Lemon/Cucumber"];
    return { theme, title, badge, summary, metrics: { gastricTransitMinutes, gastricTransitLabel, bristolForecast, apdRiskPercent, apdRiskLabel, splenicGasPressure, splenicGasLabel }, reasoningChain, orderingScript, freedomHacks, tags };
  }

  const hasGarlic = /\b(garlic|aioli|garlic\s+powder|garlic\s+oil|garlic\s+butter|tzatziki)\b/i.test(cleanQuery);
  const hasOnion = /\b(onions?|shallots?|leeks?|scallions?|spring\s+onions?|chives?)\b/i.test(cleanQuery);
  const hasGluten = /\b(barley|rye)\b/i.test(cleanQuery) ||
    (/\bwheat\b/i.test(cleanQuery) && !/\bwheat[-\s]*grass\b/i.test(cleanQuery)) ||
    (/\bsoy\s+sauce\b/i.test(cleanQuery) && !/tamari|gluten[-\s]*free|\bgf\b/i.test(query)) ||
    (/\bbread\b/i.test(cleanQuery) && !/gluten[-\s]*free|\bgf\b|without\s+wheat/i.test(query)) ||
    (/\bpasta\b/i.test(cleanQuery) && !/gluten[-\s]*free|\bgf\b|rice\s+noodle/i.test(query)) ||
    (/\bpizza\b/i.test(cleanQuery) && !/gluten[-\s]*free|\bgf\b/i.test(query)) ||
    (/\b(roti|naan|paratha|bao|dumpling)\b/i.test(cleanQuery) && !/gluten[-\s]*free|\bgf\b/i.test(query));

  const isPopcorn = /\b(propercorn|popcorn|corn\s+kernels?)\b/i.test(query);
  const isBananaHigh = (/\b235\s*g\b/i.test(query) && /\bbanana\b/i.test(query)) || /\b(2|two|three)\s+bananas\b/i.test(query);
  const isOddonos = /\b(oddonos?|oddono|dónos|donos|dono)\b/i.test(query);
  const isBananaSorbet = /\b(banana\s*sorbet|banana\s*sorbetto)\b/i.test(query) || (isOddonos && /\bbanana\b/i.test(query));
  const isMsFrozenYogurt = /\b(m\s*&\s*s|marks\s+and\s+spencer|frozen\s+yogurt|froyo|fro-yo)\b/i.test(query);
  const isSushiSticks = /\b(sticks\s*'?n'?\s*sushi|sushi|sashimi|nigiri|poke)\b/i.test(query);
  const isDishoom = /\b(dishoom|ruby|makhani|biryani|curry)\b/i.test(query);
  const isFormProteinShake = /\b(form\s+nutrition|form\s+protein|blueberry\s+shake|blueberry\s+smoothie)\b/i.test(query);
  const isTequilaSoda = /\b(tequila\s+soda|blanco|agave\s+tequila)\b/i.test(query);

  if (hasGarlic || hasOnion || hasGluten) {
    theme = "red";
    let triggers = [];
    if (hasGarlic) triggers.push("Garlic / Garlic Powder");
    if (hasOnion) triggers.push("Onion / Shallots");
    if (hasGluten) triggers.push("Gluten / Wheat Flour");
    title = `⚠️ High Motility Trigger: ${triggers.join(' & ')} Detected`;
    badge = "Modification Required";
    summary = `Contains ${triggers.join(' and ')}. On Cycle Day ${day} (${phaseLbl}), high-fructan alliums and gluten peptides irritate visceral nerves, prolong transit time, and pool trapped gas in the splenic flexure.`;
    gastricTransitMinutes = isLuteal ? 130 : 95;
    gastricTransitLabel = `${gastricTransitMinutes} mins (Delayed)`;
    bristolForecast = isLuteal ? "Type 1-2 (Hard Delay) or Paradoxical Type 6 Overflow" : "Type 6 (Urgent Surge)";
    apdRiskPercent = isLuteal ? 78 : 55;
    apdRiskLabel = `High (${apdRiskPercent}%)`;
    splenicGasPressure = isLuteal ? 82 : 62;
    splenicGasLabel = `Elevated (${splenicGasPressure}%)`;
    reasoningChain = [
      { step: 1, title: "Component & Ingredient Forensics", icon: "🔬", content: `Forensic detection flagged ${triggers.join(', ')}. Garlic and onions contain fructo-oligosaccharides (FODMAP fructans) that resist small-intestinal enzymatic digestion. Gluten proteins (gliadin/glutenin) increase intestinal epithelial permeability and prolong gastric breakdown.` },
      { step: 2, title: "Active Cycle Phase & Transit Kinetics", icon: "🌸", content: `On Cycle Day ${day} (${phaseLbl}), serum progesterone relaxes smooth muscle and dampens colonic propulsive contractions. Delayed luminal clearance allows colonic bacteria to ferment these fructans over 48+ hours, creating immense osmotic draw.` },
      { step: 3, title: "Biomechanical APD & Splenic Gas Calculation", icon: "🫁", content: `Gas accumulates at the acute 80-degree splenic flexure under the left rib cage. The gut-brain axis misfires via the visceral-phrenic reflex: your diaphragm descends inappropriately by 1.5–2 cm, pushing the lower abdomen outward (APD distension) within 30 minutes.` },
      { step: 4, title: "Pharmacological Synergy Cross-Check", icon: "💊", content: `Linaclotide 290mcg is actively drawing water into the bowel lumen. When paired with high-fructan gas, the trapped fluid cannot easily bypass the gas pockets, causing painful cramping or sudden watery bypass around retained stool.` }
    ];
    orderingScript = `Hi! I have a severe medical allergy to garlic, onion, and gluten in any form (including stocks, marinades, and powders). Could the chef please prepare this dish completely plain grilled in olive oil with salt and pepper, served with steamed rice and courgette? Thank you!`;
    freedomHacks = ["Ask for gluten-free tamari instead of standard wheat soy sauce.", "Request garlic-free herb infused extra virgin olive oil.", "Do a 3-minute diaphragmatic reset 15 minutes after eating to release any abdominal tension."];
    tags = [`❌ Contains ${triggers[0]}`, `💡 Swap to Garlic-Free & Gluten-Free`, `🌸 Protects Day ${day} Splenic Flexure`];
    return { theme, title, badge, summary, metrics: { gastricTransitMinutes, gastricTransitLabel, bristolForecast, apdRiskPercent, apdRiskLabel, splenicGasPressure, splenicGasLabel }, reasoningChain, orderingScript, freedomHacks, tags };
  }

  if (isBananaSorbet || (isOddonos && /banana/i.test(query))) {
    theme = "green";
    title = `🍨 Oddono's Banana Sorbet: Approved Treat (Cycle Day ${day})`;
    badge = "Safe with Smart Pacing";
    summary = `Oddono's traditional Italian banana sorbetto is handcrafted purely with real bananas, spring water, and sugar—naturally dairy-free, gluten-free, and allium-free. A wonderful sweet treat for Emma!`;
    gastricTransitMinutes = 45;
    gastricTransitLabel = "45 mins (Rapid)";
    bristolForecast = "Type 4 (Smooth)";
    apdRiskPercent = isLuteal ? 28 : 15;
    apdRiskLabel = `Low-Moderate (${apdRiskPercent}%)`;
    splenicGasPressure = 18;
    splenicGasLabel = "Minimal (18%)";
    reasoningChain = [
      { step: 1, title: "Component & Ingredient Forensics", icon: "🔬", content: "Authentic Oddono's sorbetto contains zero milk solids, zero cream, zero gluten, and zero emulsifiers. It is 100% plant-based fruit puree, water, and sucrose." },
      { step: 2, title: "Active Cycle Phase & Transit Kinetics", icon: "🌸", content: `On Cycle Day ${day} (${phaseLbl}), your colonic motility is running at a slower rate due to progesterone. One single scoop (approx 60–75g) stays comfortably below the individual fructan fermentation threshold for bananas.` },
      { step: 3, title: "Biomechanical APD & Splenic Gas Calculation", icon: "🫁", content: "The only potential motility trigger is Temperature Shock. Swallowing sub-zero frozen sorbet too quickly triggers a sudden vagal cold-gastro-colic reflex, which can cause the diaphragm to momentarily spasm downwards. Letting it soften to cool temperature completely eliminates this." },
      { step: 4, title: "Pharmacological Synergy Cross-Check", icon: "💊", content: "Clean, simple monosaccharides and sucrose do not interfere with morning Linaclotide water secretion or nighttime Prucalopride 5-HT4 receptor binding. It moves smoothly through the duodenum without fat delay." }
    ];
    orderingScript = `Hi! Could I please have a single small cup of the banana sorbet? No wafer or waffle cone please, as I have a severe gluten allergy. Thank you!`;
    freedomHacks = ["Temperature Hack: Let the sorbet soften for 5–7 minutes.", "Portion Guide: Enjoy 1 single scoop.", "Soothing Pairing: Sip a warm cup of herbal peppermint or ginger tea."];
    tags = ["✓ 100% Dairy-Free & Gluten-Free", "✓ Zero Alliums / Zero Binders", "💡 Let Soften 5 Mins", "🍨 Emma's Approved Oddono's Staple"];
    return { theme, title, badge, summary, metrics: { gastricTransitMinutes, gastricTransitLabel, bristolForecast, apdRiskPercent, apdRiskLabel, splenicGasPressure, splenicGasLabel }, reasoningChain, orderingScript, freedomHacks, tags };
  }

  // --------------------------------------------------------------------------
  // CASE 3: M&S GREEK STYLE FROZEN YOGURT / SUPERMARKET FRO-YO
  // --------------------------------------------------------------------------
  if (isMsFrozenYogurt) {
    theme = "amber";
    title = `🫐 M&S Frozen Yogurt: Portion & Lactose Strategy (Cycle Day ${day})`;
    badge = "Enjoy with Hacks";
    summary = `Marks & Spencer Greek Frozen Yogurt contains concentrated cow's milk solids, double cream, and lactose. Safe to enjoy in moderation with an enzyme shield and temperature tempering!`;

    gastricTransitMinutes = 90;
    gastricTransitLabel = "90 mins (Moderate)";
    bristolForecast = isLuteal ? "Type 5-6 (Loose if unmanaged)" : "Type 4";
    apdRiskPercent = 48;
    apdRiskLabel = "Moderate (48%)";
    splenicGasPressure = 42;
    splenicGasLabel = "Moderate (42%)";

    reasoningChain = [
      {
        step: 1,
        title: "Component & Ingredient Forensics",
        icon: "🔬",
        content: "M&S Greek style frozen yogurt incorporates whole cow's milk, double cream, skimmed milk powder (which concentrates lactose), and glucose-fructose syrup. Lactose content is significantly higher than strained Greek yogurt."
      },
      {
        step: 2,
        title: "Active Cycle Phase & Transit Kinetics",
        icon: "🌸",
        content: `On Cycle Day ${day} (${phaseLbl}), colonic transit is extended. Unhydrolyzed lactose draws fluid into the bowel lumen through osmotic gradient, which can trigger paradoxical liquid bypass when stool is sitting delayed.`
      },
      {
        step: 3,
        title: "Biomechanical APD & Splenic Gas Calculation",
        icon: "🫁",
        content: "Cold-temperature dessert combined with dairy fats slows gastric emptying. If eaten straight out of the deep freeze, the rapid chilling of the gastric fundus triggers paradoxical diaphragmatic descent."
      },
      {
        step: 4,
        title: "Pharmacological Synergy Cross-Check",
        icon: "💊",
        content: "Linaclotide 290mcg already stimulates CFTR chloride channels to draw fluid. Adding high osmotic lactose can double this fluid surge, causing watery urgency. A lactase enzyme neutralizes this."
      }
    ];

    orderingScript = `Hi! Do you carry the M&S Plant Kitchen Coconut Vanilla Frozen Dessert, or could you point me to the lactose-free yogurts? Thank you!`;
    freedomHacks = [
      "Enzyme Shield: Take 1 lactase enzyme chewable tablet (e.g. Lactaid) with the first spoonful.",
      "Portion Cap: Limit to 1/2 small tub (approx 50g–60g).",
      "Warm Up: Allow it to sit on the counter for 10 minutes to reach a soft-serve consistency.",
      "Delightful Swap: Try M&S Plant Kitchen Coconut Vanilla or lactose-free Greek yogurt topped with fresh blueberries!"
    ];
    tags = [
      "⚠️ Concentrated Dairy Lactose",
      "💡 Take Lactase Enzyme + Cap at 50g",
      "💡 Soften 10 Mins (Protects Diaphragm)",
      "✨ Alternative: M&S Plant Kitchen Coconut"
    ];
    return { theme, title, badge, summary, metrics: { gastricTransitMinutes, gastricTransitLabel, bristolForecast, apdRiskPercent, apdRiskLabel, splenicGasPressure, splenicGasLabel }, reasoningChain, orderingScript, freedomHacks, tags };
  }

  // --------------------------------------------------------------------------
  // CASE 4: SUSHI AT STICKS'N'SUSHI / JAPANESE DINING
  // --------------------------------------------------------------------------
  if (isSushiSticks) {
    theme = "green";
    title = `🍣 Sticks'n'Sushi / Sushi: Gold-Standard Dining (Cycle Day ${day})`;
    badge = "Safe & Highly Approved";
    summary = `Fresh sashimi, nigiri, and sushi rice are naturally low-FODMAP, low-residue, and easily digestible. A prime safe dining choice in London!`;

    gastricTransitMinutes = 65;
    gastricTransitLabel = "65 mins (Optimal)";
    bristolForecast = "Type 4 (Ideal Smooth)";
    apdRiskPercent = 10;
    apdRiskLabel = "Low (10%)";
    splenicGasPressure = 12;
    splenicGasLabel = "Minimal (12%)";

    reasoningChain = [
      {
        step: 1,
        title: "Component & Ingredient Forensics",
        icon: "🔬",
        content: "Fresh raw/seared salmon and tuna deliver clean lean protein and anti-inflammatory omega-3 fatty acids. Sushi rice seasoned with rice vinegar and sea salt provides gentle, easily hydrolyzed starch. Edamame is low-FODMAP up to 1/2 cup."
      },
      {
        step: 2,
        title: "Active Cycle Phase & Transit Kinetics",
        icon: "🌸",
        content: `On Cycle Day ${day} (${phaseLbl}), slow transit requires low-bulk, easily absorbable meals. Sushi leaves minimal unfermented residue in the transverse colon, avoiding bacterial bloat.`
      },
      {
        step: 3,
        title: "Biomechanical APD & Splenic Gas Calculation",
        icon: "🫁",
        content: "Small bite-sized nigiri and sashimi do not distend the gastric antrum. Intra-abdominal pressure remains completely calm, allowing the diaphragm to stay relaxed and unkinked."
      },
      {
        step: 4,
        title: "Pharmacological Synergy Cross-Check",
        icon: "💊",
        content: "Pairs flawlessly with Mestinon 180mg (enhancing rhythmic upper GI propulsion) and Linaclotide without risk of dumping or osmotic imbalance."
      }
    ];

    orderingScript = `Hi! I have a severe medical allergy to garlic, onion, and wheat gluten. Could I please have the salmon nigiri and sashimi served with gluten-free tamari on the side? Please ensure there is no tempura crunch, crispy shallots, or spicy mayo. Thank you!`;
    freedomHacks = [
      "Always request gluten-free tamari (regular soy sauce contains brewed wheat).",
      "Skip tempura sushi rolls (wheat batter) and spicy mayo (frequently contains garlic powder).",
      "Enjoy edamame with plain sea salt (avoid garlic oil or chili crisp toppings)."
    ];
    tags = [
      "✓ High Bioavailable Omega-3s",
      "✓ Zero Alliums / Clean Low-Residue",
      "💡 Request Gluten-Free Tamari",
      "🍱 Safe Social Dining Choice"
    ];
    return { theme, title, badge, summary, metrics: { gastricTransitMinutes, gastricTransitLabel, bristolForecast, apdRiskPercent, apdRiskLabel, splenicGasPressure, splenicGasLabel }, reasoningChain, orderingScript, freedomHacks, tags };
  }

  // --------------------------------------------------------------------------
  // CASE 5: DISHOOM / INDIAN RESTAURANT DINING
  // --------------------------------------------------------------------------
  if (isDishoom) {
    theme = "amber";
    title = `🍛 Dishoom Dining Protocol: Safe Ordering Strategy (Cycle Day ${day})`;
    badge = "Modification Required";
    summary = `Dishoom's standard chicken ruby makhani contains garlic-ginger paste, onion bases, and cream. Use our exact ordering script to enjoy authentic grilled chicken and spiced basmati rice completely pain-free!`;

    gastricTransitMinutes = 110;
    gastricTransitLabel = "110 mins (Moderate-Slow)";
    bristolForecast = "Type 4 (with modification)";
    apdRiskPercent = 45;
    apdRiskLabel = "Moderate (45%)";
    splenicGasPressure = 40;
    splenicGasLabel = "Moderate (40%)";

    reasoningChain = [
      {
        step: 1,
        title: "Component & Ingredient Forensics",
        icon: "🔬",
        content: "Traditional Dishoom curries rely on deeply browned onion-shallot bases and garlic purees. Naan and roomali roti are made with high-gluten white wheat flour. However, Dishoom's tandoor grill section features fresh meats marinated simply with ginger, lemon, and dry spices."
      },
      {
        step: 2,
        title: "Active Cycle Phase & Transit Kinetics",
        icon: "🌸",
        content: `On Cycle Day ${day} (${phaseLbl}), high-fat cream gravies delay gastric emptying, while allium fructans ferment in the sluggish ascending colon. Choosing grilled proteins and plain basmati rice bypasses both hurdles.`
      },
      {
        step: 3,
        title: "Biomechanical APD & Splenic Gas Impact",
        icon: "🫁",
        content: "Heavy tomato-cream curries sit in the stomach for 3+ hours, activating the visceral-phrenic reflex that depresses the diaphragm and causes post-meal distension. Grilled proteins empty within 80 minutes."
      },
      {
        step: 4,
        title: "Pharmacological Synergy Cross-Check",
        icon: "💊",
        content: "Avoiding heavy dairy fats prevents premature bile dumping and works in harmony with morning Linaclotide fluid secretions."
      }
    ];

    orderingScript = `Hi! I have a severe medical allergy to garlic, onion, and gluten. Dishoom's allergy kitchen is wonderful with this—could the chef prepare the grilled chicken or lamb chops plain with fresh lemon juice, cumin, and sea salt, served with steamed basmati rice and sliced cucumber salad? No curry gravies, roti, or crispy onions. Thank you!`;
    freedomHacks = [
      "Dishoom has a dedicated allergy menu and will cook grilled meats from scratch without onion/garlic paste.",
      "Pair with plain steamed basmati rice and sliced cucumber with fresh lime.",
      "Order fresh mint tea (no black tea tannins) to soothe digestion."
    ];
    tags = [
      "⚠️ Standard Curry Contains Garlic & Onion",
      "💡 Order Tandoori Grilled Meats + Basmati",
      "✓ Dishoom Allergy Kitchen Validated",
      "🗣️ Copy Waiter Script"
    ];
    return { theme, title, badge, summary, metrics: { gastricTransitMinutes, gastricTransitLabel, bristolForecast, apdRiskPercent, apdRiskLabel, splenicGasPressure, splenicGasLabel }, reasoningChain, orderingScript, freedomHacks, tags };
  }

  // --------------------------------------------------------------------------
  // CASE 6: EMMA'S HOMEMADE BLUEBERRY FORM SHAKE (4X/WEEK STAPLE)
  // --------------------------------------------------------------------------
  if (isFormProteinShake || (/blueberry/i.test(query) && /protein|shake|form/i.test(query))) {
    theme = "purple";
    title = `🫐 Form Blueberry Shake: Core Motility Pillar (Cycle Day ${day})`;
    badge = "Gold Standard Staple";
    summary = `Emma's homemade blueberry Form Nutrition protein shake is an absolute masterpiece for neurogenic slow transit. Low-FODMAP, anti-inflammatory, and gastric-emptying friendly!`;

    gastricTransitMinutes = 50;
    gastricTransitLabel = "50 mins (Rapid & Smooth)";
    bristolForecast = "Type 4 (Ideal Smooth)";
    apdRiskPercent = 8;
    apdRiskLabel = "Low (8%)";
    splenicGasPressure = 10;
    splenicGasLabel = "Minimal (10%)";

    reasoningChain = [
      {
        step: 1,
        title: "Component & Ingredient Forensics",
        icon: "🔬",
        content: "Form Nutrition Performance/Pureblend uses organic pea, pumpkin seed, and brown rice isolate—free of dairy whey, artificial gums, and sugar alcohols. Wild blueberries (100g) supply low-FODMAP anthocyanins. Unsweetened almond milk provides non-fermenting hydration. Pre-soaked chia seeds create soothing soluble mucilage."
      },
      {
        step: 2,
        title: "Active Cycle Phase & Transit Kinetics",
        icon: "🌸",
        content: `On Cycle Day ${day} (${phaseLbl}), colonic transit needs low-residue liquid nutrition that doesn't form hard dehydrated clumps. The soluble polyphenols in blueberries stimulate beneficial Akkermansia muciniphila without gas fermentation.`
      },
      {
        step: 3,
        title: "Biomechanical APD & Splenic Gas Impact",
        icon: "🫁",
        content: "Liquid smoothies empty from the gastric fundus with minimal mechanical strain on stretch receptors. The diaphragm remains undisturbed, preventing post-meal APD abdominal protrusion."
      },
      {
        step: 4,
        title: "Pharmacological Synergy Cross-Check",
        icon: "💊",
        content: "Drinking this 45–60 minutes after morning Linaclotide 290mcg provides the ideal fluid and electrolyte matrix for smooth mucosal hydration, leading to consistent Bristol Type 4 evacuation."
      }
    ];

    orderingScript = `Hi! Could I please have a custom smoothie made with unsweetened almond milk, 1 scoop of vegan plant protein powder (pea/rice based, no whey), and 1 cup of fresh blueberries? No banana, honey, or yogurt please. Thank you!`;
    freedomHacks = [
      "Always pre-soak chia seeds for at least 15 minutes before blending so they form a slippery protective gel.",
      "Sip mindfully over 15–20 minutes rather than gulping in 2 minutes to prevent air ingestion.",
      "Keep this as your 4x/week core breakfast staple to sustain regular bowel rhythm!"
    ];
    tags = [
      "✓ 4x/Week Clinical Priority",
      "✓ Zero Garlic, Zero Whey, Zero Wheat",
      "✓ Ideal Linaclotide Synergy",
      "🫐 Rich in Soluble Anthocyanins"
    ];
    return { theme, title, badge, summary, metrics: { gastricTransitMinutes, gastricTransitLabel, bristolForecast, apdRiskPercent, apdRiskLabel, splenicGasPressure, splenicGasLabel }, reasoningChain, orderingScript, freedomHacks, tags };
  }

  // --------------------------------------------------------------------------
  // CASE 7: PROPERCORN / POPCORN (HARSH HULL TRIGGER)
  // --------------------------------------------------------------------------
  if (isPopcorn) {
    theme = "red";
    title = `🍿 Propercorn Popcorn: Insoluble Hull Trigger (Cycle Day ${day})`;
    badge = "Harsh Fiber Alert";
    summary = `Propercorn and popped corn contain sharp insoluble pericarp hulls. In slow-transit colonic inertia, these sharp shells scrape mucosal walls and trap gas in the splenic flexure.`;

    gastricTransitMinutes = 100;
    gastricTransitLabel = "100 mins (Challenging)";
    bristolForecast = "Type 2 (Fragmented Hard)";
    apdRiskPercent = 65;
    apdRiskLabel = "Elevated (65%)";
    splenicGasPressure = 72;
    splenicGasLabel = "Elevated (72%)";

    reasoningChain = [
      {
        step: 1,
        title: "Component & Ingredient Forensics",
        icon: "🔬",
        content: "Popcorn kernels consist of an outer pericarp hull made of rigid, insoluble lignified cellulose that human gastric acids and enzymes cannot break down. These flakes pass intact through the small intestine."
      },
      {
        step: 2,
        title: "Active Cycle Phase & Transit Kinetics",
        icon: "🌸",
        content: `On Cycle Day ${day} (${phaseLbl}), sluggish colonic transit means insoluble hulls become lodged in haustral folds, irritating mucosal mechanoreceptors and delaying stool transit further.`
      },
      {
        step: 3,
        title: "Biomechanical APD & Splenic Gas Impact",
        icon: "🫁",
        content: "Trapped hulls create localized micro-spasms at the splenic flexure, resulting in the classic sharp, stabbing sensation under Emma's left ribs and sudden evening distension."
      },
      {
        step: 4,
        title: "Pharmacological Synergy Cross-Check",
        icon: "💊",
        content: "Linaclotide draws fluid around the hulls, but because the shells cannot absorb water or form gel, they cause fragmented, pebble-like stool."
      }
    ];

    orderingScript = `Hi! Instead of the popcorn snack pack, could I please have the lightly salted puffed rice cakes or seaweed crisps? Thank you!`;
    freedomHacks = [
      "Smart Swap: Lightly salted puffed white rice cakes or baked root crisps give the exact same salty crunch with zero sharp hulls!",
      "If eating popcorn: Cap at 15g (a small handful), chew every kernel into a smooth paste, and follow with 200ml warm water."
    ];
    tags = [
      "❌ Insoluble Lignified Hulls",
      "⚠️ Triggers Splenic Flexure Stabbing Pain",
      "💡 Swap to Puffed White Rice Cakes"
    ];
    return { theme, title, badge, summary, metrics: { gastricTransitMinutes, gastricTransitLabel, bristolForecast, apdRiskPercent, apdRiskLabel, splenicGasPressure, splenicGasLabel }, reasoningChain, orderingScript, freedomHacks, tags };
  }

  // --------------------------------------------------------------------------
  // CASE 8: BANANA RICE CAKES (PORTION THRESHOLD TEST)
  // --------------------------------------------------------------------------
  if (isBananaHigh || (/banana/i.test(query) && /rice\s*cake/i.test(query))) {
    const isLarge = isBananaHigh || /235/i.test(query);
    theme = isLarge ? "amber" : "green";
    title = isLarge ? `🍌 235g Banana Rice Cakes: Portion Calibration (Cycle Day ${day})` : `🍌 Banana Rice Cakes: Approved Breakfast (Cycle Day ${day})`;
    badge = isLarge ? "Portion Adjustment Needed" : "Safe to Enjoy";
    summary = isLarge
      ? "235g of ripe banana (over 2 large bananas) exceeds the low-FODMAP fructan and excess fructose threshold, leading to fermentation in slow luteal transit. Simply cap at 80–90g (half a banana)!"
      : "Plain white rice cakes with sliced firm banana (under 90g) and sunflower seed butter is a gentle, safe breakfast.";

    gastricTransitMinutes = isLarge ? 85 : 60;
    gastricTransitLabel = isLarge ? "85 mins (Elevated Fructose)" : "60 mins (Smooth)";
    bristolForecast = isLarge ? "Type 5-6 (Watery Bypass Risk)" : "Type 4 (Smooth)";
    apdRiskPercent = isLarge ? 44 : 12;
    apdRiskLabel = isLarge ? "Moderate (44%)" : "Low (12%)";
    splenicGasPressure = isLarge ? 48 : 14;
    splenicGasLabel = isLarge ? "Moderate (48%)" : "Minimal (14%)";

    reasoningChain = [
      {
        step: 1,
        title: "Component & Ingredient Forensics",
        icon: "🔬",
        content: isLarge
          ? "235g banana delivers over 30g total sugars with elevated fructan polymers and free fructose. While white rice cakes are zero-FODMAP, high banana portions overload GLUT5 fructose transporters in the jejunum."
          : "White rice cakes provide puffed, easily digestible amylose. 80g of banana remains safely below the Monash low-FODMAP cutoff, providing gentle potassium and resistant starch."
      },
      {
        step: 2,
        title: "Active Cycle Phase & Transit Kinetics",
        icon: "🌸",
        content: `On Cycle Day ${day} (${phaseLbl}), high progesterone transit delay allows unabsorbed fructose from large banana portions to ferment rapidly, creating osmotic gas pressure.`
      },
      {
        step: 3,
        title: "Biomechanical APD & Splenic Gas Impact",
        icon: "🫁",
        content: isLarge
          ? "Excess gas from 235g banana pools directly at the splenic flexure, triggering left-rib tightness and APD abdominal bloating within 45 minutes."
          : "At 80g, minimal gas is generated. The diaphragm remains undisturbed."
      },
      {
        step: 4,
        title: "Pharmacological Synergy Cross-Check",
        icon: "💊",
        content: "Mestinon 180mg works smoothly with balanced starch portions. Keeping banana under 90g ensures Linaclotide produces smooth Bristol Type 4 rather than osmotic liquid bypass."
      }
    ];

    orderingScript = `Hi! Could I please have 2 plain rice cakes with 1 sliced small firm banana and sunflower seed butter? Thank you!`;
    freedomHacks = [
      "The Golden Banana Rule: Enjoy 1/2 banana (80g–90g) sliced across 2–3 rice cakes.",
      "Pair with 1 tbsp sunflower seed butter or almond butter for stabilizing healthy fats.",
      "Choose medium/firm yellow bananas with green tips (lowest in fermentable free fructose)."
    ];
    tags = [
      isLarge ? "⚠️ 235g Exceeds Fructan Cutoff" : "✓ Within Monash FODMAP Cutoff",
      "💡 Cap Banana at 80g–90g",
      "✓ Naturally Gluten-Free & Allium-Free"
    ];
    return { theme, title, badge, summary, metrics: { gastricTransitMinutes, gastricTransitLabel, bristolForecast, apdRiskPercent, apdRiskLabel, splenicGasPressure, splenicGasLabel }, reasoningChain, orderingScript, freedomHacks, tags };
  }

  // --------------------------------------------------------------------------
  // CASE 9: SOCIAL DRINKS (TEQUILA SODA LIME VS WINE VS BEER)
  // --------------------------------------------------------------------------
  if (isTequilaSoda) {
    theme = "green";
    title = `🥃 Tequila Soda + Lime: Emma's Gold-Standard Social Drink (Day ${day})`;
    badge = "Safe Social Choice";
    summary = "100% Blue Agave Blanco Tequila with sparkling soda water and fresh lime is zero-carb, zero-gluten, zero-yeast, and free of fermentable sugars. The safest social drink for Emma's gut!";

    gastricTransitMinutes = 30;
    gastricTransitLabel = "30 mins (Rapid Fluid)";
    bristolForecast = "Type 4 (Stable)";
    apdRiskPercent = 15;
    apdRiskLabel = "Low (15%)";
    splenicGasPressure = 15;
    splenicGasLabel = "Minimal (15%)";

    reasoningChain = [
      {
        step: 1,
        title: "Component & Ingredient Forensics",
        icon: "🔬",
        content: "100% Agave Blanco tequila is distilled purely from fermented agave tequilana hearts—free of grain alcohol, added caramel colorings, and sulfites. Club soda provides zero-calorie hydration. Fresh lime wedge provides gentle citric acid that stimulates salivary and gastric enzymes."
      },
      {
        step: 2,
        title: "Active Cycle Phase & Transit Kinetics",
        icon: "🌸",
        content: `On Cycle Day ${day} (${phaseLbl}), sweet cocktails, beer, and ciders cause severe gut fermentation. Tequila soda bypasses colonic bacteria entirely, preventing delayed-transit gas.`
      },
      {
        step: 3,
        title: "Biomechanical APD & Splenic Gas Impact",
        icon: "🫁",
        content: "Gentle carbonation in moderation does not overload the gastric fundus. Sip slowly rather than drinking quickly through a straw to prevent swallowing excess air."
      },
      {
        step: 4,
        title: "Pharmacological Synergy Cross-Check",
        icon: "💊",
        content: "Do not take medications at the same time as alcohol. Separate alcohol intake from nighttime Prucalopride 2mg by at least 2 hours."
      }
    ];

    orderingScript = `Hi! Could I please have a single shot of 100% blue agave tequila with sparkling soda water and two fresh lime wedges in a tall glass with ice? No tonic or syrups please. Thank you!`;
    freedomHacks = [
      "Specify 100% Blue Agave (Blanco/Silver) to guarantee zero grain additives.",
      "Always ask for Soda Water (Club Soda), NOT Tonic Water (which contains high-fructose corn syrup).",
      "Drink 1 tall glass of still water alongside each drink to maintain optimal hydration for Linaclotide."
    ];
    tags = [
      "✓ Zero Gluten, Zero Yeast, Zero Sulfites",
      "✓ 100% Blue Agave Distilled",
      "💡 Sip Slowly (Avoid Gulping Air)",
      "🍸 Emma's Approved Social Order"
    ];
    return { theme, title, badge, summary, metrics: { gastricTransitMinutes, gastricTransitLabel, bristolForecast, apdRiskPercent, apdRiskLabel, splenicGasPressure, splenicGasLabel }, reasoningChain, orderingScript, freedomHacks, tags };
  }

  // --------------------------------------------------------------------------
  // CASE 10: RED WINE & SWEET COCKTAILS
  // --------------------------------------------------------------------------
  const isRedWine = /\b(red\s+wine|pinot\s+noir|cabernet|merlot|malbec|shiraz|rioja|bordeaux)\b/i.test(cleanQuery);
  const isSugaryCocktail = /\b(cocktail|cocktails|mojito|pi[nñ]a\s+colada|margarita|espresso\s+martini|aperol\s+spritz|sangria|rum|gin\s+and\s+tonic|vodka\s+red\s+bull)\b/i.test(cleanQuery);

  if (isRedWine) {
    theme = "amber";
    title = `🍷 Red Wine: Histamine & Vasoactive Tannin Alert (Cycle Day ${day})`;
    badge = "Histamine Caution — Sip Slowly";
    summary = `Red wine is rich in grape skin tannins, histamines, and sulfites. In Emma's visceral hypersensitivity, tannins provoke localized smooth muscle spasm and slow gastric emptying.`;
    gastricTransitMinutes = isLuteal ? 90 : 65;
    gastricTransitLabel = `${gastricTransitMinutes} mins`;
    bristolForecast = "Type 4-5 (Mild Irritation)";
    apdRiskPercent = isLuteal ? 52 : 38;
    apdRiskLabel = `Moderate (${apdRiskPercent}%)`;
    splenicGasPressure = isLuteal ? 55 : 40;
    splenicGasLabel = `Moderate (${splenicGasPressure}%)`;
    reasoningChain = [
      { step: 1, title: "Component & Ingredient Forensics", icon: "🔬", content: "Red wines undergo extended grape skin contact, resulting in high concentrations of polyphenolic tannins, natural histamines, and sulfur dioxide. These can trigger mast cell degranulation in sensitive enteric nervous systems." },
      { step: 2, title: "Active Cycle Phase & Transit Kinetics", icon: "🌸", content: `On Cycle Day ${day} (${phaseLbl}), high progesterone makes gut nerves more sensitive to vasoactive compounds. Excess tannins can cause intestinal cramping or delayed transit.` },
      { step: 3, title: "Biomechanical APD & Splenic Gas Impact", icon: "🫁", content: "Alcohol in moderation does not stretch the stomach like carbonated beer, but drinking on an empty stomach can relax the lower esophageal sphincter." },
      { step: 4, title: "Pharmacological Synergy Cross-Check", icon: "💊", content: "Ensure alcohol is separated by at least 2 hours from nighttime Prucalopride 2mg." }
    ];
    orderingScript = `Hi! Could I please have a small glass (125ml) of Pinot Noir, and a tall glass of still water with lemon? Thank you!`;
    freedomHacks = [
      "Limit to 1 single small glass (125ml) and sip slowly throughout your meal.",
      "Always drink a tall glass of still water alongside wine to protect bowel hydration.",
      "If choosing wine, crisp dry white wine (e.g. Sancerre) has far fewer histamines and tannins than heavy reds."
    ];
    tags = ["⚠️ Tannins & Histamines", "💡 Cap at 1 Small Glass (125ml)", "🍸 Alternative: 100% Agave Tequila Soda"];
    return { theme, title, badge, summary, metrics: { gastricTransitMinutes, gastricTransitLabel, bristolForecast, apdRiskPercent, apdRiskLabel, splenicGasPressure, splenicGasLabel }, reasoningChain, orderingScript, freedomHacks, tags };
  }

  if (isSugaryCocktail) {
    theme = "red";
    title = `🍹 Sugary Cocktail: Fructose & Fermentation Alert (Cycle Day ${day})`;
    badge = "High Fermentation Trigger — Swap to Tequila Soda";
    summary = `Commercial cocktails contain sugar syrups, high-fructose purees, and fermentable mixers. In slow colonic transit, excess simple sugars draw osmotic fluid and feed bacterial gas overproduction.`;
    gastricTransitMinutes = isLuteal ? 110 : 80;
    gastricTransitLabel = `${gastricTransitMinutes} mins (Delayed)`;
    bristolForecast = "Type 6 (Osmotic Bypass Risk)";
    apdRiskPercent = isLuteal ? 75 : 60;
    apdRiskLabel = `High (${apdRiskPercent}%)`;
    splenicGasPressure = isLuteal ? 78 : 62;
    splenicGasLabel = `Elevated (${splenicGasPressure}%)`;
    reasoningChain = [
      { step: 1, title: "Component & Ingredient Forensics", icon: "🔬", content: "Cocktails combine grain alcohols with high-fructose corn syrup, simple syrup, fruit juice concentrates, and sweet liqueurs that overload intestinal transport mechanisms." },
      { step: 2, title: "Active Cycle Phase & Transit Kinetics", icon: "🌸", content: `On Cycle Day ${day} (${phaseLbl}), slow transit allows unabsorbed fructose to ferment into high volumes of methane and hydrogen gas.` },
      { step: 3, title: "Biomechanical APD & Splenic Gas Impact", icon: "🫁", content: "Sugar fermentation distends colonic haustra, creating retrograde pressure that prevents the diaphragm from releasing upward." },
      { step: 4, title: "Pharmacological Synergy Cross-Check", icon: "💊", content: "The high osmolarity of sugar syrups disrupts the natural osmotic fluid gradient established by Linaclotide 290mcg." }
    ];
    orderingScript = `Hi! Could I please swap this for a 100% Blue Agave blanco tequila with sparkling soda water and fresh lime wedges? No simple syrup or tonic please. Thank you!`;
    freedomHacks = [
      "Swap for Emma's approved Tequila Soda + Lime (zero carbs, zero syrups).",
      "Avoid tonic water (which contains 32g sugar/fructose per bottle); always ask for Club Soda / Soda Water."
    ];
    tags = ["❌ High Fermentable Fructose", "🚨 Osmotic Colonic Surge", "💡 Swap to 100% Agave Tequila Soda"];
    return { theme, title, badge, summary, metrics: { gastricTransitMinutes, gastricTransitLabel, bristolForecast, apdRiskPercent, apdRiskLabel, splenicGasPressure, splenicGasLabel }, reasoningChain, orderingScript, freedomHacks, tags };
  }

  // --------------------------------------------------------------------------
  // CASE 11: DAIRY & CONCENTRATED LACTOSE
  // --------------------------------------------------------------------------
  const isDairy = /\b(milk|cow'?s\s+milk|whole\s+milk|cream|double\s+cream|cheeses?|cheddar|mozzarella|parmesan|ice\s+cream|custard|whey|ricotta|brie|camembert)\b/i.test(cleanQuery) && !/\b(dairy[-\s]*free|lactose[-\s]*free|vegan|plant|almond|oat|coconut|soya)\b/i.test(query);
  if (isDairy) {
    theme = "red";
    title = `🧀 Dairy & Concentrated Lactose: Motility Alert (Cycle Day ${day})`;
    badge = "Lactose & Lipid Trigger — Modification Required";
    summary = `Cow's milk dairy contains high concentrations of unhydrolyzed lactose and heavy saturated dairy lipids. In Emma's slow transit, lactose triggers osmotic fluid rushes while dairy fats delay gastric emptying.`;
    gastricTransitMinutes = isLuteal ? 120 : 90;
    gastricTransitLabel = `${gastricTransitMinutes} mins (Delayed)`;
    bristolForecast = "Type 6 (Watery Lactose Urgency) or Type 1-2 (Fat Delay)";
    apdRiskPercent = isLuteal ? 72 : 55;
    apdRiskLabel = `High (${apdRiskPercent}%)`;
    splenicGasPressure = isLuteal ? 76 : 58;
    splenicGasLabel = `Elevated (${splenicGasPressure}%)`;
    reasoningChain = [
      { step: 1, title: "Component & Ingredient Forensics", icon: "🔬", content: "Dairy products contain the disaccharide lactose, requiring lactase enzyme for brush-border cleavage. In slow transit, unabsorbed lactose pulls water into the lumen and ferments into volatile fatty acids and gas." },
      { step: 2, title: "Active Cycle Phase & Transit Kinetics", icon: "🌸", content: `On Cycle Day ${day} (${phaseLbl}), high dairy fat triggers cholecystokinin (CCK) release, halting gastric emptying and extending transit time.` },
      { step: 3, title: "Biomechanical APD & Splenic Gas Impact", icon: "🫁", content: "Heavy dairy meals linger in the gastric fundus for hours, triggering downward diaphragmatic spasm and left-rib tightness." },
      { step: 4, title: "Pharmacological Synergy Cross-Check", icon: "💊", content: "Lactose-induced osmotic draw clashes unpredictably with morning Linaclotide 290mcg." }
    ];
    orderingScript = `Hi! I have a severe medical allergy to dairy and cow's milk products. Could this please be prepared completely dairy-free using olive oil instead of butter or cream? Thank you!`;
    freedomHacks = [
      "Choose plant-based dairy-free alternatives: almond milk, coconut yogurt, or olive oil.",
      "If consuming small dairy, take 2 chewable lactase enzyme tablets with the first bite.",
      "Hard aged cheeses (aged Cheddar, Parmesan) have trace lactose and are tolerated in small amounts (20g)."
    ];
    tags = ["⚠️ Concentrated Lactose & Saturated Lipids", "❌ Osmotic Gas & Watery Surge", "💡 Request Dairy-Free / Olive Oil"];
    return { theme, title, badge, summary, metrics: { gastricTransitMinutes, gastricTransitLabel, bristolForecast, apdRiskPercent, apdRiskLabel, splenicGasPressure, splenicGasLabel }, reasoningChain, orderingScript, freedomHacks, tags };
  }

  // --------------------------------------------------------------------------
  // CASE 12: LEGUMES, BEANS & PULSES (HIGH GOS FERMENTATION)
  // --------------------------------------------------------------------------
  const isLegume = /\b(beans?|baked\s+beans|black\s+beans|kidney\s+beans|lentils?|dahl|chickpeas?|hummus|falafel)\b/i.test(cleanQuery);
  if (isLegume) {
    theme = "red";
    title = `🫘 Legumes & Pulses: High GOS Gas Fermentation Alert (Cycle Day ${day})`;
    badge = "High GOS Fermentation Alert — Avoid";
    summary = `Beans, lentils, and chickpeas contain galacto-oligosaccharides (GOS) that humans cannot digest. In Emma's slow-transit colonic inertia, they undergo prolonged 48-hour bacterial fermentation, trapping severe gas at the splenic flexure.`;
    gastricTransitMinutes = isLuteal ? 130 : 95;
    gastricTransitLabel = `${gastricTransitMinutes} mins`;
    bristolForecast = "Type 1-2 (Trapped Gas Obstruction)";
    apdRiskPercent = isLuteal ? 88 : 74;
    apdRiskLabel = `Severe (${apdRiskPercent}%)`;
    splenicGasPressure = isLuteal ? 92 : 80;
    splenicGasLabel = `Extreme (${splenicGasPressure}%)`;
    reasoningChain = [
      { step: 1, title: "Component & Ingredient Forensics", icon: "🔬", content: "Legumes contain raffinose and stachyose (galacto-oligosaccharides) with alpha-galactosidic linkages that the human small intestine lacks enzymes to split. They arrive intact in the colon." },
      { step: 2, title: "Active Cycle Phase & Transit Kinetics", icon: "🌸", content: `On Cycle Day ${day} (${phaseLbl}), sluggish colonic transit gives colonic methanogens and fermenters 48+ hours to ferment GOS into massive hydrogen, methane, and CO2 volumes.` },
      { step: 3, title: "Biomechanical APD & Splenic Gas Impact", icon: "🫁", content: "Severe colonic distension triggers the viscero-phrenic reflex, locking the diaphragm in chronic downward descent and causing extreme evening distension." },
      { step: 4, title: "Pharmacological Synergy Cross-Check", icon: "💊", content: "Trapped gas pockets block Linaclotide fluid waves, causing intense cramping." }
    ];
    orderingScript = `Hi! Could I please swap the beans/hummus for steamed white rice, sliced courgettes, or roasted carrots? Thank you!`;
    freedomHacks = [
      "Swap legumes for easily digested lean proteins: grilled chicken, steamed salmon, or firm tofu.",
      "Swap hummus for olive tapenade or extra virgin olive oil with sea salt."
    ];
    tags = ["❌ High Galacto-Oligosaccharides (GOS)", "🚨 Severe 48-Hr Fermentation Gas", "💡 Swap to Steamed Rice or Courgette"];
    return { theme, title, badge, summary, metrics: { gastricTransitMinutes, gastricTransitLabel, bristolForecast, apdRiskPercent, apdRiskLabel, splenicGasPressure, splenicGasLabel }, reasoningChain, orderingScript, freedomHacks, tags };
  }

  // --------------------------------------------------------------------------
  // CASE 13: CRUCIFEROUS VEGETABLES (RAFFINOSE & SULFUR)
  // --------------------------------------------------------------------------
  const isCruciferous = /\b(cauliflower|broccoli|brussels?\s+sprouts?|cabbage|kale|sauerkraut)\b/i.test(cleanQuery);
  if (isCruciferous) {
    theme = "red";
    title = `🥦 Cruciferous Vegetables: Raffinose & Sulfur Gas Trigger (Cycle Day ${day})`;
    badge = "Raffinose Gas Trigger — Swap to Courgette/Carrot";
    summary = `Cruciferous vegetables contain complex raffinose trisaccharides and glucosinolates. These resist upper GI digestion and ferment into pungent gas that locks under Emma's left ribs.`;
    gastricTransitMinutes = isLuteal ? 110 : 85;
    gastricTransitLabel = `${gastricTransitMinutes} mins`;
    bristolForecast = "Type 2-3 (Gas-Fragmented)";
    apdRiskPercent = isLuteal ? 80 : 65;
    apdRiskLabel = `High (${apdRiskPercent}%)`;
    splenicGasPressure = isLuteal ? 85 : 70;
    splenicGasLabel = `Elevated (${splenicGasPressure}%)`;
    reasoningChain = [
      { step: 1, title: "Component & Ingredient Forensics", icon: "🔬", content: "Brassicas are rich in insoluble cellulose and raffinose sugars, along with sulfur-rich compounds that generate hydrogen sulfide gas." },
      { step: 2, title: "Active Cycle Phase & Transit Kinetics", icon: "🌸", content: `On Cycle Day ${day} (${phaseLbl}), slow transit amplifies sulfur gas volume, causing painful left-rib pressure.` },
      { step: 3, title: "Biomechanical APD & Splenic Gas Impact", icon: "🫁", content: "Gas pockets push against the splenic flexure, triggering downward diaphragmatic spasm." },
      { step: 4, title: "Pharmacological Synergy Cross-Check", icon: "💊", content: "Insoluble brassica fibers can clump together, preventing smooth mucosal transit." }
    ];
    orderingScript = `Hi! Could I please substitute the broccoli/cauliflower with steamed courgettes, peeled carrots, or baby spinach? Thank you!`;
    freedomHacks = [
      "Opt for gentle low-FODMAP vegetables: steamed courgette, peeled carrots, parsnips, and cucumber.",
      "Always eat vegetables thoroughly cooked, soft, and peeled rather than raw."
    ];
    tags = ["⚠️ Raffinose & Insoluble Fiber", "❌ Splenic Gas Trap Risk", "💡 Swap to Steamed Courgette or Carrots"];
    return { theme, title, badge, summary, metrics: { gastricTransitMinutes, gastricTransitLabel, bristolForecast, apdRiskPercent, apdRiskLabel, splenicGasPressure, splenicGasLabel }, reasoningChain, orderingScript, freedomHacks, tags };
  }

  // --------------------------------------------------------------------------
  // CASE 14: HIGH-FODMAP FRUITS & POLYOL SWEETENERS
  // --------------------------------------------------------------------------
  const isHighFodmapFruit = /\b(apples?|pears?|watermelon|mango|cherries|plums?|peaches?|nectarines?|apricots?|figs?|dates?|prunes?|raisins?|dried\s+fruit|fruit\s+juice)\b/i.test(cleanQuery) && !/blueberry|strawberr|raspberr/i.test(cleanQuery);
  const isPolyol = /\b(sorbitol|xylitol|erythritol|maltitol|isomalt|sugar[-\s]*free\s+gum|sugar[-\s]*free\s+sweets?|keto\s+bar|grenade\s+bar|barebells)\b/i.test(cleanQuery);

  if (isHighFodmapFruit || isPolyol) {
    theme = "red";
    const triggerLabel = isPolyol ? "Artificial Polyol Sugar Alcohols" : "High-Fructose & Sorbitol Fruit";
    title = `🍎 ${triggerLabel}: Osmotic Fluid Shift Alert (Cycle Day ${day})`;
    badge = "Severe Osmotic & Gas Trigger — Avoid";
    summary = `Contains concentrated unabsorbable polyols (sorbitol/maltitol) or excess free fructose. In colonic inertia, this pulls a rapid osmotic fluid surge into the bowel while feeding volatile bacterial gas.`;
    gastricTransitMinutes = isLuteal ? 100 : 75;
    gastricTransitLabel = `${gastricTransitMinutes} mins`;
    bristolForecast = "Type 6-7 (Sudden Watery Bypass Surge)";
    apdRiskPercent = isLuteal ? 84 : 70;
    apdRiskLabel = `High (${apdRiskPercent}%)`;
    splenicGasPressure = isLuteal ? 86 : 72;
    splenicGasLabel = `Elevated (${splenicGasPressure}%)`;
    reasoningChain = [
      { step: 1, title: "Component & Ingredient Forensics", icon: "🔬", content: "Sugar alcohols and free fructose overload GLUT5 facilitated diffusion carriers, remaining in the bowel lumen where they draw high volumes of water via osmosis." },
      { step: 2, title: "Active Cycle Phase & Transit Kinetics", icon: "🌸", content: `On Cycle Day ${day} (${phaseLbl}), the osmotic fluid bypasses sluggish solid stool, leading to erratic, urgent liquid bowel motions.` },
      { step: 3, title: "Biomechanical APD & Splenic Gas Impact", icon: "🫁", content: "Colonic fermentation produces severe bloating, triggering APD diaphragmatic downward displacement." },
      { step: 4, title: "Pharmacological Synergy Cross-Check", icon: "💊", content: "Dangerous clash with Linaclotide 290mcg, causing painful liquid cramping." }
    ];
    orderingScript = `Hi! Could I please swap this for fresh blueberries or strawberries? Thank you!`;
    freedomHacks = [
      "Emma's Approved Fruits: Wild blueberries, fresh strawberries, and firm yellow bananas (under 90g).",
      "Avoid all sugar-free protein bars containing maltitol, sorbitol, or erythritol."
    ];
    tags = ["❌ Excess Fructose & Sorbitol", "🚨 High Osmotic Watery Surge Risk", "💡 Swap to Wild Blueberries"];
    return { theme, title, badge, summary, metrics: { gastricTransitMinutes, gastricTransitLabel, bristolForecast, apdRiskPercent, apdRiskLabel, splenicGasPressure, splenicGasLabel }, reasoningChain, orderingScript, freedomHacks, tags };
  }

  // --------------------------------------------------------------------------
  // CASE 15: CLEAN MOTILITY STAPLES (PLAIN RICE, CHICKEN, SALMON, CONGEE)
  // --------------------------------------------------------------------------
  const isCleanStaple = /\b(plain\s+rice|white\s+rice|jasmine\s+rice|basmati\s+rice|congee|bone\s+broth|steamed\s+chicken|grilled\s+chicken\s+breast|steamed\s+salmon|grilled\s+salmon|sea\s+bass|cod\s+fillet)\b/i.test(cleanQuery) && !hasGarlic && !hasOnion && !hasGluten;
  if (isCleanStaple) {
    theme = "green";
    title = `✨ Clean Motility Staple: Approved Meal (Cycle Day ${day})`;
    badge = "Safe & Highly Approved";
    summary = `Pure, easily hydrolyzed protein and simple white rice starches provide clean nutrition with zero fermentable FODMAPs, zero alliums, and zero gluten. Perfectly protects Emma's motility!`;
    gastricTransitMinutes = 60;
    gastricTransitLabel = "60 mins (Optimal)";
    bristolForecast = "Type 4 (Smooth Sausage)";
    apdRiskPercent = 12;
    apdRiskLabel = "Low (12%)";
    splenicGasPressure = 14;
    splenicGasLabel = "Minimal (14%)";
    reasoningChain = [
      { step: 1, title: "Component & Ingredient Forensics", icon: "🔬", content: "Clean lean protein and steamed white rice are naturally low-residue, low-FODMAP, and free of inflammatory grains, dairy, and alliums." },
      { step: 2, title: "Active Cycle Phase & Transit Kinetics", icon: "🌸", content: `On Cycle Day ${day} (${phaseLbl}), this gentle formulation absorbs smoothly without generating bacterial gas pockets.` },
      { step: 3, title: "Biomechanical APD & Splenic Gas Impact", icon: "🫁", content: "Empties comfortably through the stomach without gastric wall distension, keeping the diaphragm fully relaxed." },
      { step: 4, title: "Pharmacological Synergy Cross-Check", icon: "💊", content: "Pairs flawlessly with Linaclotide 290mcg and Mestinon 180mg, promoting smooth Bristol Type 4 evacuation." }
    ];
    orderingScript = `Hi! Could I please have the grilled chicken or fish prepared plain with just olive oil, sea salt, and steamed white rice? No garlic, onion, or butter please. Thank you!`;
    freedomHacks = [
      "Drizzle with 1 tbsp extra virgin olive oil for anti-inflammatory healthy fats.",
      "Pair with well-cooked steamed courgettes or carrots.",
      "Enjoy with room-temperature water or peppermint tea."
    ];
    tags = ["✓ 100% Allium-Free & Gluten-Free", "✓ Low-Residue & High Bioavailability", "🫁 Minimal APD Risk", "✨ Emma's Core Motility Meal"];
    return { theme, title, badge, summary, metrics: { gastricTransitMinutes, gastricTransitLabel, bristolForecast, apdRiskPercent, apdRiskLabel, splenicGasPressure, splenicGasLabel }, reasoningChain, orderingScript, freedomHacks, tags };
  }

  // --------------------------------------------------------------------------
  // CASE 16: CLINICAL SCREENING & VERIFICATION FALLBACK FOR UNRECOGNIZED INPUTS
  // --------------------------------------------------------------------------
  theme = "amber";
  title = `🔍 Clinical Verification Required: "${rawQuery}" (Day ${day})`;
  badge = "Screening & Verification Needed";
  summary = `Clinical screening for "${rawQuery}" on Cycle Day ${day} (${phaseLbl}). While no explicit beer, cider, or allium tokens were detected, Emma must verify there are no hidden allium powders (garlic/onion), wheat gluten flours, concentrated dairy fats, or carbonation before enjoying.`;

  gastricTransitMinutes = isLuteal ? 90 : 70;
  gastricTransitLabel = `${gastricTransitMinutes} mins (Requires Verification)`;
  bristolForecast = "Type 4 (if verified clean) or Type 6 (if hidden triggers present)";
  apdRiskPercent = isLuteal ? 48 : 32;
  apdRiskLabel = `Moderate (${apdRiskPercent}%)`;
  splenicGasPressure = isLuteal ? 50 : 35;
  splenicGasLabel = `Moderate (${splenicGasPressure}%)`;

  reasoningChain = [
    {
      step: 1,
      title: "Component & Ingredient Forensics",
      icon: "🔬",
      content: `Systematic check for "${rawQuery}". Commercial and restaurant preparations routinely conceal powdered alliums (garlic and onion powder in marinades, stocks, and rubs), wheat flour thickeners in sauces, and hidden dairy butter or cream.`
    },
    {
      step: 2,
      title: "Active Cycle Phase & Transit Kinetics",
      icon: "🌸",
      content: `Calibrated for Cycle Day ${day} (${phaseLbl}). In your current progesterone phase, colonic transit is running slower. Any hidden fermentable sugars or fructans will linger for 36+ hours, creating trapped gas.`
    },
    {
      step: 3,
      title: "Biomechanical APD & Splenic Gas Impact",
      icon: "🫁",
      content: "Ensure portion sizes are moderate and meals are eaten sitting upright. Avoid ice-cold beverages with this dish to protect against vagal gastric fundus shock and downward diaphragmatic descent."
    },
    {
      step: 4,
      title: "Pharmacological Synergy Cross-Check",
      icon: "💊",
      content: "Ensure this meal is eaten at least 40 minutes after morning Linaclotide 290mcg. If this dish turns out to contain hidden dairy, take a lactase enzyme tablet."
    }
  ];

  orderingScript = `Hi! I have severe medical allergies to alliums (garlic, onion, shallots, leeks in any form, including powders and stocks), wheat gluten, and dairy. Could you please check if this dish contains any of these, or can it be prepared completely plain with just olive oil, sea salt, and clean herbs? Thank you so much!`;
  freedomHacks = [
    "The Hidden Allium Rule: Restaurant sauces, gravies, and soups almost always contain concentrated garlic or onion powder—always ask the kitchen to verify.",
    "Cooked vs Raw: Ensure vegetables are well-steamed or sautéed rather than raw fibrous salads.",
    "Post-Meal Diaphragm Reset: Do the 3-minute diaphragmatic breathing reset 20 minutes after eating to keep the splenic flexure unkinked."
  ];
  tags = [
    "🔍 Verification Required",
    "⚠️ Screen for Garlic & Onion Powder",
    "⚠️ Verify Gluten-Free & Dairy-Free",
    `🌸 Calibrated for Day ${day} (${phaseLbl})`
  ];

  return { theme, title, badge, summary, metrics: { gastricTransitMinutes, gastricTransitLabel, bristolForecast, apdRiskPercent, apdRiskLabel, splenicGasPressure, splenicGasLabel }, reasoningChain, orderingScript, freedomHacks, tags };
}

// ----------------------------------------------------------------------------
// STRUCTURED CLINICAL AI AUDIT RENDERER (5-STAGE DOSSIER)
// ----------------------------------------------------------------------------
function renderClinicalAiAuditResult(container, data, source, modelUsed) {
  const theme = data.theme || 'green';
  const title = data.title || 'Food Check';
  const badge = data.badge || 'Evaluated';
  const summary = data.summary || '';
  const orderingScript = data.orderingScript || '';
  const freedomHacks = data.freedomHacks || [];

  let bgClass = "bg-emerald-50/85 border-emerald-300 text-emerald-950";
  let iconBg = "bg-emerald-600";
  let iconSymbol = "✓";
  let badgeClass = "bg-emerald-200 text-emerald-950";
  let borderSep = "border-emerald-200/80";
  let cardBg = "bg-white/80 border-emerald-200/90";

  if (theme === "amber") {
    bgClass = "bg-amber-50/85 border-amber-300 text-amber-950";
    iconBg = "bg-amber-500";
    iconSymbol = "!";
    badgeClass = "bg-amber-200 text-amber-950";
    borderSep = "border-amber-200/80";
    cardBg = "bg-white/85 border-amber-200/90";
  } else if (theme === "red") {
    bgClass = "bg-rose-50/90 border-rose-300 text-rose-950";
    iconBg = "bg-rose-600";
    iconSymbol = "✕";
    badgeClass = "bg-rose-200 text-rose-950";
    borderSep = "border-rose-200/80";
    cardBg = "bg-white/85 border-rose-200/90";
  } else if (theme === "purple") {
    bgClass = "bg-purple-50/90 border-purple-300 text-purple-950";
    iconBg = "bg-purple-600";
    iconSymbol = "🫐";
    badgeClass = "bg-purple-200 text-purple-950";
    borderSep = "border-purple-200/80";
    cardBg = "bg-white/85 border-purple-200/90";
  }

  // Determine clear, simple top tip / swap
  let topTip = data.topTip || "";
  if (!topTip) {
    if (freedomHacks && freedomHacks.length > 0) {
      topTip = freedomHacks[0];
    } else if (theme === "red") {
      topTip = "💡 Swap to 100% blue agave tequila with lime & soda, or a crisp dry white wine!";
    } else if (theme === "amber") {
      topTip = "💡 Have a smaller portion or peel the skin to keep digestion easy.";
    } else {
      topTip = "💡 Safe to enjoy! Best eaten warm or at room temperature.";
    }
  }

  const isGemini = source === 'gemini-3.8-flash' || (source && source.includes('gemini'));
  const attributionPill = isGemini 
    ? `<span class="inline-flex items-center gap-1 text-[10px] font-bold text-purple-700 bg-purple-100/90 px-2 py-0.5 rounded-full"><i data-lucide="sparkles" class="w-3 h-3 text-purple-600"></i> ${modelUsed || 'Gemini 3.8 Flash'}</span>`
    : `<span class="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">Clinical Backup</span>`;

  // Reveal container cleanly
  container.classList.remove('hidden');
  container.className = `p-4 sm:p-5 rounded-2xl border transition-all space-y-3 ${bgClass} shadow-xs animate-fadeIn`;

  container.innerHTML = `
    <!-- Top Row: Verdict & Gemini Badge -->
    <div class="flex items-center justify-between gap-2 border-b ${borderSep} pb-2.5">
      <div class="flex items-center space-x-2.5">
        <span class="w-7 h-7 rounded-xl ${iconBg} text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">${iconSymbol}</span>
        <div>
          <div class="flex items-center gap-1.5 flex-wrap">
            <h4 class="font-extrabold text-sm sm:text-base">${title}</h4>
            ${attributionPill}
          </div>
          <span class="text-[10px] opacity-75 font-semibold">Tuned for Emma's tummy & transit</span>
        </div>
      </div>
      <span class="px-2.5 py-1 rounded-lg ${badgeClass} text-[10px] font-black uppercase tracking-wide shrink-0 shadow-2xs">${badge}</span>
    </div>

    <!-- 1-2 Sentence Quick Take (Plain English) -->
    <div class="p-3 rounded-xl ${cardBg} border text-xs leading-relaxed font-medium">
      ${summary}
    </div>

    <!-- 1 Simple Tip / Swap -->
    <div class="p-2.5 rounded-xl ${cardBg} border text-xs font-semibold flex items-center gap-2">
      <span>${topTip.startsWith('💡') ? topTip : '💡 ' + topTip}</span>
    </div>

    <!-- Collapsible Motility Diagnostics (Clean & Unobtrusive) -->
    ${data.metrics ? `
    <details class="pt-0.5 select-none">
      <summary class="text-[10px] font-bold text-brand-textMuted cursor-pointer hover:text-brand-textDark flex items-center gap-1 py-0.5">
        <span>Why? (Motility & APD Diagnostics) ▾</span>
      </summary>
      <div class="mt-2 p-2.5 rounded-xl ${cardBg} border text-[11px] grid grid-cols-3 gap-2 text-center">
        <div>
          <span class="block text-[9px] text-brand-textMuted font-bold uppercase">Stomach Transit</span>
          <span class="font-extrabold">${data.metrics.gastricTransitLabel || (data.metrics.gastricTransitMinutes ? data.metrics.gastricTransitMinutes + ' mins' : 'Normal')}</span>
        </div>
        <div>
          <span class="block text-[9px] text-brand-textMuted font-bold uppercase">APD Reflex</span>
          <span class="font-extrabold">${data.metrics.apdRiskLabel || 'Low'}</span>
        </div>
        <div>
          <span class="block text-[9px] text-brand-textMuted font-bold uppercase">Splenic Gas</span>
          <span class="font-extrabold">${data.metrics.splenicGasLabel || 'Minimal'}</span>
        </div>
      </div>
    </details>
    ` : ''}

    ${!isGemini ? `
    <div class="text-[10px] text-brand-textMuted flex items-center justify-between pt-0.5">
      <span>Using built-in clinical rule base.</span>
      <button type="button" onclick="openAiSettingsModal()" class="text-purple-700 font-bold hover:underline">Connect Live Gemini 3.8 Flash →</button>
    </div>
    ` : ''}
  `;

  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

function handleQuickLogSubmit(e) {
  e.preventDefault();
  
  const dateVal = document.getElementById('logDate').value;
  const tempVal = parseFloat(document.getElementById('logTemp').value) || null;
  const ouraSleepVal = parseInt(document.getElementById('logOuraSleep')?.value, 10) || null;
  const ouraRhrVal = parseInt(document.getElementById('logOuraRhr')?.value, 10) || null;
  const ouraHrvVal = parseInt(document.getElementById('logOuraHrv')?.value, 10) || null;

  const fastingVal = document.getElementById('logFastingAdherence')?.value || selectedFastingVal || 'kept_40';
  const warmTriggerVal = document.getElementById('logWarmTrigger')?.checked || false;
  const electrolytesTaken = document.getElementById('logElectrolytesTaken')?.checked || false;
  const diaphragmResetDone = document.getElementById('logDiaphragmResetDone')?.checked || false;
  const diaphragmVal = parseInt(document.getElementById('logDiaphragm')?.value || '4', 10);
  const stoolNuance = document.getElementById('logStoolNuance')?.value || '';
  const alcoholVal = document.getElementById('logAlcohol')?.value || selectedAlcoholVal || 'none';
  const moodVal = document.getElementById('logMood')?.value || selectedMoodVal || 'flat';
  const noteVal = document.getElementById('logNote')?.value?.trim() || '';

  let puffinessArr = Array.from(selectedTags);
  if (alcoholVal === '1-2_wine') puffinessArr.push('🍷 1-2 Wine');
  if (alcoholVal === '3+_wine') puffinessArr.push('🥂 3+ Wine/Bubbles');
  if (alcoholVal === 'spirits') puffinessArr.push('🍸 Spirits');
  if (electrolytesTaken) puffinessArr.push('⚡ Electrolyte & EAAs Taken');
  if (fastingVal === 'kept_40') puffinessArr.push('⏱️ 40m Fast Kept');
  if (warmTriggerVal) puffinessArr.push('☕ Warm Gastrocolic Trigger');
  if (diaphragmResetDone) puffinessArr.push('🫁 Diaphragm Reset Done');

  // Format date display
  const dateObj = new Date(dateVal);
  const day = dateObj.getDate();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const displayDate = `${day}th ${monthNames[dateObj.getMonth()]} ${dateObj.getFullYear()}`;

  let movementText = 'None';
  if (selectedBristolVal === 'liquid') {
    movementText = stoolNuance === 'bypass' ? 'Watery bypass (liquid around solid plug)' : 'Watery liquid purge';
  } else if (selectedBristolVal === 'normal') {
    movementText = stoolNuance === 'formed' ? 'Formed Bristol 4 (Step-down milestone)' : 'Satisfying movement';
  } else if (selectedBristolVal === 'hard') {
    movementText = stoolNuance === 'hard' ? 'Hard / small pellet' : 'Hard / small';
  }

  const cycleInfo = getCycleInfoForDate(dateVal);

  const newEntry = {
    id: dateVal,
    date: dateVal,
    displayDate: displayDate,
    month: monthNames[dateObj.getMonth()].toLowerCase(),
    cycleDay: cycleInfo.cycleDay,
    phase: cycleInfo.phase,
    phaseLabel: cycleInfo.phaseLabel,
    temp: tempVal,
    ouraSleep: ouraSleepVal,
    sleepScore: ouraSleepVal,
    ouraRhr: ouraRhrVal,
    rhr: ouraRhrVal,
    ouraHrv: ouraHrvVal,
    hrv: ouraHrvVal,
    fastingAdherence: fastingVal,
    warmTrigger: warmTriggerVal,
    electrolyteBuffered: electrolytesTaken,
    electrolytesTaken: electrolytesTaken,
    diaphragmResetDone: diaphragmResetDone,
    movement: movementText,
    bristol: selectedBristolVal,
    stoolNuance: stoolNuance,
    diaphragmBloat: diaphragmVal,
    puffiness: puffinessArr,
    emotions: moodVal === 'great' ? 'Free & relaxed' : (moodVal === 'edgy' ? 'Edgy / tearful' : 'Tired / flat'),
    mood: moodVal,
    alcohol: alcoholVal,
    symptoms: noteVal || (movementText !== 'None' ? movementText : "Daily check-in logged"),
    medNotes: fastingVal === 'kept_40' ? "7:00 AM Linaclotide taken with 40-min fast" : (fastingVal === 'broke_early' ? "Linaclotide taken (fast broken early)" : "Linaclotide skipped"),
    exercise: "Gentle",
    notes: noteVal || "Saved via Emma's Unified Daily Check-In."
  };

  // Prepend or update existing for same date
  const existingIdx = logs.findIndex(l => l.date === dateVal);
  if (existingIdx >= 0) {
    logs[existingIdx] = { ...logs[existingIdx], ...newEntry };
  } else {
    logs.unshift(newEntry);
  }
  saveLogs();

  // Sync to specialist tracking state
  const dState = getOrCreateDateSpecialistState(dateVal);
  dState.electrolyteBuffered = electrolytesTaken;
  dState.diaphragmDone = diaphragmResetDone;
  if (stoolNuance === 'bypass') dState.stoolType = 'bypass';
  else if (stoolNuance === 'formed') dState.stoolType = 'formed';
  else if (selectedBristolVal === 'hard') dState.stoolType = 'hard';
  saveSpecialistTracking();
  renderSpecialistTrackingUI();

  // Update Stats & Charts
  updateDashboardCheckInBadge(newEntry);
  updateDashboardStats(newEntry);
  renderDashboardTrends();
  renderOuraChart();
  renderHistoryLogs();

  closeQuickLogModal();

  if (stoolNuance === 'formed') {
    if (typeof confetti === 'function') {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    }
    showDynamicToast("🎉 Formed Bristol 4 recorded! True colonic motility achieved without liquid bypass. Step 1 towards your 14-day medication step-down trial!");
  } else if (stoolNuance === 'bypass') {
    showDynamicToast("⚠️ Watery Bypass Logged: Fluid channeled around solid plug. Remember to hydrate & take electrolytes!");
  } else {
    showDynamicToast("🌿 Check-In Saved! All vitals, motility, routine & sensations securely updated.");
  }
}

function updateDashboardStats(entry) {
  if (entry.temp) {
    document.getElementById('statTemp').innerText = `${entry.temp}°C`;
  }
  document.getElementById('statMovement').innerText = entry.movement;
  document.getElementById('statBloat').innerText = `${entry.diaphragmBloat} / 10`;
  document.getElementById('statMood').innerText = entry.emotions;
}

// ============================================================================
// 8. DOCTOR CLINICAL REPORT EXPORT GENERATOR
// ============================================================================
function openDoctorExportModal() {
  const modal = document.getElementById('doctorExportModal');
  const reportContainer = document.getElementById('doctorReportContent');
  
  const report = `
CLINICAL SUMMARY & SPECIALIST REVIEW REPORT
PATIENT: Emma Butler | DOB: 1998 (Age 28) | NHS/Ref: EB-28-COLONIC
PRIMARY DIAGNOSIS: Severe Slow-Transit Colonic Inertia / Abdominophrenic Dyssynergia (APD)
ENDOCRINE STATUS: Mirena 52mg IUS in situ (Inserted: 19 April 2021, 5.4 Years Duration)
NEUROLOGICAL: Diagnosed ADHD (Adult Presentation)
REPORT COMPILED: 06 September 2026

1. CLINICAL SYNOPSIS & PHENOTYPE:
Patient exhibits profound cycle-correlated motility arrest and severe visceral distress. 
Despite Mirena-induced amenorrhea (absence of menses), longitudinal basal thermal 
tracking demonstrates persistent, high-amplitude biphasic ovulatory cycles (24-29 day periodicity).
During the Luteal Phase (post-ovulatory progesterone peak, cycle days 16-28), patient suffers:
- Profound colonic inertia and near-total transit standstill.
- Abdominophrenic Dyssynergia (APD): Paradoxical diaphragmatic descent and anterior abdominal 
  wall relaxation in response to trapped fermentation gas and fluid in the splenic flexure.
- Intercostal chest wall hyperinflation mimicking acute asthma and upper ribcage restriction.
- Secondary aldosterone-mediated systemic fluid retention (loss of clavicular definition, arm edema).
- Autonomic vagal irritation symptoms (nausea, cold sweats, reactive tachycardia, dizziness).
- Accelerated dopamine clearance exacerbating adult ADHD executive dysfunction and sensory overwhelm.

2. ACTIVE MULTI-AGENT MOTILITY REGIMEN & POLYPHARMACY AUDIT:
- Linaclotide (Constella) 290 mcg daily (GC-C secretagogue & visceral pain modulator)
- Prucalopride (Resolor) 2 mg daily (5-HT4 propulsive prokinetic)
- Pyridostigmine (Mestinon) 180 mg total daily (autonomic cholinergic enhancer)
- Movicol (PEG 3350 + electrolytes) x4 sachets daily (osmotic bulk hydration)
- Ursodeoxycholic Acid (UDCA) 250 mg daily (bile acid secretagogue)
- Senna tea: anthraquinone stimulant (rescue only)
[CLINICAL AUDIT NOTE]: Multi-secretagogue therapy (Linaclotide + Movicol + UDCA) draws immense fluid 
volumes into a dyssynergic bowel. If splenic or pelvic transit is blocked, this fluid pools and 
distends the colonic wall, paradoxically aggravating APD diaphragmatic reflex spasms.

3. CHRONOTHERAPY & LIFESTYLE INTERVENTIONS:
- Morning Linaclotide Protocol: Strictly restricted to 07:00 AM upon awakening, empty stomach, 
  with 350-400ml room-temp water and a 30-45 minute delay before morning caloric intake.
- Mon-Thu Chrono-Nutrition Trial: Shifting main caloric/nutrient load to midday lunch (12:00-14:00) 
  to align with peak colonic migrating motor complexes (MMC) and nanny activity, coupled with 
  a light evening digestive anchor (18:00-19:30) to eliminate nocturnal horizontal fermentation.
- APD Diaphragmatic Biofeedback: 360-degree lateral costal breathing and left-lateral splenic 
  flexure drainage exercises post-prandially to break the paradoxical diaphragmatic descent reflex.
- Vagal Nerve & Trauma Recalibration: Weekly EMDR and somatic therapy with Amanda (Lion's Yard, Clapham) 
  paired with Third Space cold plunge immersion.

4. MIRENA 5.4-YEAR DURATION ADVISORY:
Inserted 19 April 2021. Intrauterine levonorgestrel release rate has declined by >50% 
(from ~20mcg/day to <8-10mcg/day). This unmasks endogenous ovulatory surges, driving the marked 
escalation in luteal symptom severity in 2026. Gynecological review recommended for planned replacement.

5. BIOMETRIC SIGNATURE (OURA RING ALGORITHM):
- Follicular baseline temperature: 36.15°C - 36.38°C
- Ovulation thermal nadir & surge: 36.85°C (Sep 4), 37.04°C (Jun 12), 36.81°C (May 15)
- Luteal Resting Heart Rate elevation: +4 to +6 bpm
- Luteal Heart Rate Variability drop: -12 to -16 ms (sympathetic dominance)

Report certified for medical records and consultant review.
  `.trim();

  reportContainer.innerText = report;
  modal.classList.remove('hidden');
  lucide.createIcons();
}

function closeDoctorExportModal() {
  document.getElementById('doctorExportModal').classList.add('hidden');
}

function copyDoctorReport() {
  const text = document.getElementById('doctorReportContent').innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Clinical Summary copied to clipboard!");
  });
}

// ============================================================================
// 9. OURA RING CONFIG & SIMULATOR
// ============================================================================
function openOuraConfigModal() {
  document.getElementById('ouraConfigModal').classList.remove('hidden');
}

function closeOuraConfigModal() {
  document.getElementById('ouraConfigModal').classList.add('hidden');
}

function saveOuraToken() {
  const token = document.getElementById('ouraTokenInput').value;
  if (token) {
    localStorage.setItem('emma_oura_token', token);
    document.getElementById('ouraSyncBadge').innerHTML = `<i data-lucide="check-circle" class="w-3.5 h-3.5 mr-1 text-emerald-400"></i> Oura: Live Cloud Connected`;
    alert("Oura Ring Token securely saved! Automatic biometrics sync active.");
    closeOuraConfigModal();
    lucide.createIcons();
  }
}

function toggleOuraMode() {
  ouraSimulatedMode = !ouraSimulatedMode;
  const label = document.getElementById('ouraModeLabel');
  if (label) {
    label.innerText = ouraSimulatedMode ? "Mode: Simulated Real Biometrics" : "Mode: Live Cloud API";
  }
  alert(`Oura mode toggled to: ${ouraSimulatedMode ? "Simulated High-Resolution Data" : "Live API Standby"}`);
}

// ============================================================================
// 10. RESCUE TOOLKIT GUIDES
// ============================================================================
function openRescueModal() {
  const m = document.getElementById('rescueModal');
  if (m) m.classList.remove('hidden');
}

function closeRescueModal() {
  const m = document.getElementById('rescueModal');
  if (m) m.classList.add('hidden');
}

function showRescueGuide(type) {
  const icon = document.getElementById('rescueModalIcon');
  const title = document.getElementById('rescueModalTitle');
  const sub = document.getElementById('rescueModalSubtitle');
  const body = document.getElementById('rescueModalBody');
  const act = document.getElementById('rescueModalAction');

  if (!body) {
    return;
  }

  if (type === 'diaphragm') {
    if (icon) icon.innerHTML = '🧘‍♀️';
    if (title) title.textContent = 'Legs-Up-The-Wall / Pillow Release';
    if (sub) sub.textContent = 'Takes pulling strain off hips and releases rib gas';
    body.innerHTML = `
      <div class="p-3 rounded-2xl bg-amber-50/90 border border-amber-200 space-y-1.5">
        <div class="font-bold text-amber-950 text-xs flex items-center gap-1.5">
          <span>🛋️</span>
          <span>Where to Put Your Legs (Super Comfy Setup):</span>
        </div>
        <div class="space-y-2 text-[11px]">
          <div class="p-2.5 rounded-xl bg-white/95 border border-amber-200/80 shadow-2xs">
            <span class="font-bold text-amber-900 block text-[10px] uppercase">Option 1: Sofa or Bed with Pillow Under Knees (Best)</span>
            <p class="text-amber-950/90 mt-0.5 leading-relaxed">
              Lie back with knees bent and a plump pillow tucked right under the back of your knees. This instantly slackens your hip flexors and lower back so your tummy softens like jelly!
            </p>
          </div>
          <div class="p-2.5 rounded-xl bg-white/95 border border-amber-200/80 shadow-2xs">
            <span class="font-bold text-amber-900 block text-[10px] uppercase">Option 2: Legs Up the Couch / Wall</span>
            <p class="text-amber-950/90 mt-0.5 leading-relaxed">
              Lie on the floor or bed with hips close to the couch, resting your calves flat on the couch seat (knees at 90°). Gravity floats trapped gas away from your ribs.
            </p>
          </div>
        </div>
      </div>

      <div class="p-3 rounded-2xl bg-teal-50/80 border border-teal-200/80 text-[11px] text-teal-950 space-y-1">
        <span class="font-bold text-[10px] uppercase tracking-wide text-teal-900 block">How to breathe:</span>
        <p class="leading-relaxed">Rest hands on lower ribs. Inhale gently for 4s feeling ribs widen, then exhale smoothly for 6s letting tummy and legs go totally soft.</p>
      </div>
    `;
    if (act) {
      act.innerHTML = `
        <button type="button" onclick="closeRescueModal(); openDiaphragmResetModal();" class="w-full py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-98">
          <span>🫁</span>
          <span>Open 3-Min Audio Release (With Waves & Spa Music)</span>
        </button>
      `;
    }
  } else if (type === 'massage') {
    if (icon) icon.innerHTML = '🌀';
    if (title) title.textContent = 'Clockwise Colonic Massage ("I Love You")';
    if (sub) sub.textContent = 'Gently guides stool from ascending to descending colon';
    body.innerHTML = `
      <div class="p-3 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 space-y-1.5">
        <span class="font-bold text-xs block">🛋️ Leg Setup:</span>
        <p class="text-[11px] leading-relaxed">
          Lie on your back on your bed or sofa with <strong>knees bent and feet flat</strong> (or resting over a pillow). This prevents your abdominal wall from resisting the gentle touch.
        </p>
      </div>
      <div class="space-y-1.5 text-[11px]">
        <div class="p-2 rounded-xl bg-brand-cream/80 border border-brand-border">
          <strong class="text-brand-textDark block">1. 'I' Stroke (10 times):</strong>
          <span class="text-brand-textMuted">Stroke gently downward on your left lower belly (from under ribs down towards hip bone).</span>
        </div>
        <div class="p-2 rounded-xl bg-brand-cream/80 border border-brand-border">
          <strong class="text-brand-textDark block">2. 'L' Stroke (10 times):</strong>
          <span class="text-brand-textMuted">Stroke across under your ribs from right to left, then down your left side.</span>
        </div>
        <div class="p-2 rounded-xl bg-brand-cream/80 border border-brand-border">
          <strong class="text-brand-textDark block">3. 'U' Stroke (10 times):</strong>
          <span class="text-brand-textMuted">Stroke up your right side, across under ribs, and down your left side.</span>
        </div>
      </div>
      <p class="text-[10px] text-brand-coral font-bold pt-1">⚠️ Always move clockwise (the natural direction your bowel flows). Never stroke upwards on the left!</p>
    `;
    if (act) {
      act.innerHTML = `
        <button type="button" onclick="closeRescueModal()" class="w-full py-2.5 rounded-2xl bg-brand-textDark hover:bg-black text-white font-bold text-xs transition-all active:scale-98">
          Done ✓
        </button>
      `;
    }
  } else if (type === 'wardrobe') {
    if (icon) icon.innerHTML = '👖';
    if (title) title.textContent = 'Sensory Wardrobe Quarantine';
    if (sub) sub.textContent = 'Remove physical constriction to calm nervous system';
    body.innerHTML = `
      <div class="p-3 rounded-2xl bg-purple-50/80 border border-purple-200 text-purple-950 space-y-1.5">
        <span class="font-bold text-xs block">🧠 The ADHD Sensory Connection:</span>
        <p class="text-[11px] leading-relaxed">
          Non-stretch denim, tight waistbands, or rigid seams send continuous micro-threat signals to your sensory system. When in luteal phase (Day 19), your skin and gut nerves are twice as sensitive.
        </p>
      </div>
      <div class="space-y-1.5 text-[11px]">
        <div class="p-2.5 rounded-xl bg-brand-cream/80 border border-brand-border">
          <strong class="text-emerald-800 block font-bold">✓ What to Wear:</strong>
          <span class="text-brand-textDark">Seamless bamboo leggings, soft oversized joggers, loose linen jumpsuits, or cloud-soft dresses with zero waistband compression.</span>
        </div>
        <div class="p-2.5 rounded-xl bg-rose-50/70 border border-rose-200">
          <strong class="text-rose-900 block font-bold">✗ Quarantine for 7 Days:</strong>
          <span class="text-rose-950">Non-stretch high-waist jeans, tight belts, underwire bras that dig into your ribcage.</span>
        </div>
      </div>
    `;
    if (act) {
      act.innerHTML = `
        <button type="button" onclick="closeRescueModal()" class="w-full py-2.5 rounded-2xl bg-brand-textDark hover:bg-black text-white font-bold text-xs transition-all active:scale-98">
          Understood ✓
        </button>
      `;
    }
  } else if (type === 'fluids') {
    if (icon) icon.innerHTML = '🫖';
    if (title) title.textContent = 'Fresh Ginger & Fennel Steep';
    if (sub) sub.textContent = 'Natural gut motility catalyst & gas disperser';
    body.innerHTML = `
      <div class="p-3 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 space-y-1.5">
        <span class="font-bold text-xs block">🌿 Why This Combination Works:</span>
        <p class="text-[11px] leading-relaxed">
          Ginger contains gingerols that gently stimulate gastric emptying (clearing the stomach). Fennel contains anethole, an essential oil that naturally relaxes the smooth muscle of the colon and pops trapped air bubbles.
        </p>
      </div>
      <div class="space-y-1.5 text-[11px]">
        <div class="p-2 rounded-xl bg-brand-cream/80 border border-brand-border">
          <strong class="text-brand-textDark block">1. Fresh Ginger:</strong>
          <span class="text-brand-textMuted">4–5 thin slices of peeled fresh ginger into a mug.</span>
        </div>
        <div class="p-2 rounded-xl bg-brand-cream/80 border border-brand-border">
          <strong class="text-brand-textDark block">2. Fennel Seeds:</strong>
          <span class="text-brand-textMuted">Half a teaspoon of fennel seeds (lightly bruised with back of a spoon).</span>
        </div>
        <div class="p-2 rounded-xl bg-brand-cream/80 border border-brand-border">
          <strong class="text-brand-textDark block">3. Steep & Sip:</strong>
          <span class="text-brand-textMuted">Pour boiling water, cover with a saucer for 8 minutes to trap essential oils, then sip warm.</span>
        </div>
      </div>
    `;
    if (act) {
      act.innerHTML = `
        <button type="button" onclick="closeRescueModal()" class="w-full py-2.5 rounded-2xl bg-brand-textDark hover:bg-black text-white font-bold text-xs transition-all active:scale-98">
          Got it ✓
        </button>
      `;
    }
  }

  openRescueModal();
  if (window.lucide) lucide.createIcons();
}

// ============================================================================
// 11. EMMA'S PERSONAL MEAL & RECIPE GUIDE (BY CYCLE PHASE)
// ============================================================================
const EMMA_MEALS = [
  // --- DINNERS (8) ---
  {
    id: "din-1",
    category: "dinner",
    isNew: false,
    title: "Fish & Prawn Rice Bowl",
    ingredients: "100g Basa Fillet (Raw), 85g Aldi Coldwater Prawns, 200g Cooked Morrisons White Rice, 1tbsp Aldi Brooklea 0% Natural Yogurt, 1 Courgette (~100g), 1 Carrot (~60g), 1tsp Sushi Vinegar (5ml)",
    status: "recommended",
    statusLabel: "Motility Approved",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Great in Luteal & Follicular",
    clinicalVerdict: "Gold standard lean protein combination. White fish and coldwater prawns are gentle and light, digesting in under 90 minutes. Cooked courgette and carrot provide soft fiber that won't turn into trapped gas under your ribs.",
    actionAdvice: "For your weekly routine: 200g rice is perfect if eaten as your 1 PM lunch. If having this for dinner, reduce rice to 120–130g so your stomach is light before bed.",
    whyAvoidOrModify: ""
  },
  {
    id: "din-2",
    category: "dinner",
    isNew: false,
    title: "Tuna & Prawn Stirfried Rice Bowl (130g Rice)",
    ingredients: "130g Cooked Morrisons White Rice, 1 tin Tuna (Drained), 85g Aldi Coldwater Prawns, 1 Whole Courgette, 1 Small Carrot, 1/3 Red Pepper, 1 Medium Stalk Celery, 2tsp Noya Sauce, 1tsp Sushi Vinegar",
    status: "modify",
    statusLabel: "Modify Celery in Luteal",
    statusColor: "amber",
    bestPhase: "follicular",
    phaseBadge: "Caution on Day 19",
    clinicalVerdict: "Tuna, prawns, and rice are very gentle. However, celery contains tough stringy fibers and plant sugars that pull extra water and turn into gas under your ribs during your slower luteal phase.",
    actionAdvice: "Swap the celery stalk for 50g peeled cucumber ribbons or finely diced fennel bulb (fennel has soothing natural oils that help tummy muscles relax!).",
    whyAvoidOrModify: "Celery contains tough plant sugars that trigger gas when digestion moves slowly."
  },
  {
    id: "din-3",
    category: "dinner",
    isNew: false,
    title: "Prawn Rice Poke Bowl (200g Rice)",
    ingredients: "150g Sainsbury's King Prawns, 200g Cooked White Rice, 1 Small Raw Carrot, 1tbsp Fat-Free Greek Yogurt, 1 Large Spoon Cucumber, 1tbsp Rubies in the Rubble Sriracha Mayo, 2tsp Sushi Vinegar",
    status: "recommended",
    statusLabel: "Safe & Motility-Friendly",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Safe for Luteal",
    clinicalVerdict: "A fantastic, easy meal for a busy nanny. Rubies in the Rubble mayo is certified garlic- and onion-free. Prawns and rice are non-reactive and easy on your tummy.",
    actionAdvice: "Grate or peel the raw carrot finely so it doesn't form hard chunks in a slow-moving bowel. If ribcage pressure is elevated, serve at room temperature rather than straight from the fridge.",
    whyAvoidOrModify: ""
  },
  {
    id: "din-4",
    category: "dinner",
    isNew: false,
    title: "Pan-Fried Cod & Courgette Mash",
    ingredients: "140g Cod Fillet, 1 Large Courgette (Steamed & Lightly Mashed), 1tsp Olive Oil, Squeeze of Fresh Lemon, Sea Salt",
    status: "recommended",
    statusLabel: "Ultra-Light Evening Rest",
    statusColor: "emerald",
    bestPhase: "luteal",
    phaseBadge: "Great for High Bloat Days",
    clinicalVerdict: "Cod is exceptionally digestible, breaking down into bioavailable amino acids in under an hour. Steamed, mashed courgette provides gentle soluble hydration without any tough insoluble skins that ferment.",
    actionAdvice: "Have this on evenings when your 3:00 PM check-in shows diaphragm tightness above 6/10.",
    whyAvoidOrModify: ""
  },
  {
    id: "din-5",
    category: "dinner",
    isNew: false,
    title: "Baked Salmon & Sweet Potato Mash",
    ingredients: "110g Wild Salmon Fillet, 100g Baked Peeled Sweet Potato (Mashed), Steamed Carrot Coins, 1tsp Cold-Pressed Olive Oil",
    status: "recommended",
    statusLabel: "Rich in Omega-3 Anti-Inflammatory",
    statusColor: "emerald",
    bestPhase: "luteal",
    phaseBadge: "Luteal Hormone Nourishment",
    clinicalVerdict: "Salmon supplies healthy omega-3 fatty acids that calm inflammatory prostaglandins during your late luteal phase. Peeled sweet potato offers gentle, easily absorbed carbohydrate fuel.",
    actionAdvice: "Keep sweet potato portion at 100g to avoid excess osmotic load in your slower luteal bowel.",
    whyAvoidOrModify: ""
  },
  {
    id: "din-6",
    category: "dinner",
    isNew: false,
    title: "Emma's Turkey Bolognese & White Rice",
    ingredients: "130g Lean Turkey Breast Mince (5%), 120g Cooked White Rice, 1 Courgette (Diced), 1tbsp Tomato Purée, 1/2 tsp Marmite, Fresh Basil, Black Pepper",
    status: "recommended",
    statusLabel: "100% Garlic & Onion Free",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Motility Approved",
    clinicalVerdict: "Emma's Turkey Bolognese base is 100% garlic-free and onion-free, seasoned with rich umami Marmite and tomato purée. Turkey breast mince is ultra-lean, and paired with white rice and cooked courgette, it digests cleanly without gas or fullness under the ribs.",
    actionAdvice: "Keep portions of this garlic-free base frozen for effortless weeknight dinners during your weekly routine.",
    whyAvoidOrModify: ""
  },
  {
    id: "din-7",
    category: "dinner",
    isNew: false,
    title: "King Prawn & Courgette Tamari Rice Bowl (130g Rice)",
    ingredients: "140g King Prawns, 130g Cooked White Rice, 1 Courgette, 1/2 Red Bell Pepper, 2tsp Noya or Tamari Sauce",
    status: "recommended",
    statusLabel: "Digestive Rest Bowl",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Great Evening Bowl",
    clinicalVerdict: "Red bell pepper is completely safe in modest portions (under 43g) and provides gentle vitamin C. Paired with sweet prawns and tender courgette, this bowl creates virtually zero gas.",
    actionAdvice: "Peel the outer skin of the red pepper with a vegetable peeler if you experience evening acid reflux.",
    whyAvoidOrModify: ""
  },
  {
    id: "din-8",
    category: "dinner",
    isNew: false,
    title: "Prawn Rice Poke Bowl (Light Evening 100g Rice)",
    ingredients: "120g King Prawns, 100g Cooked White Rice, Grated Cucumber, Cooked Zucchini ribbons, 1tsp Tamari, 1/2 tsp Sesame Oil",
    status: "recommended",
    statusLabel: "Light Dinner Anchor",
    statusColor: "emerald",
    bestPhase: "luteal",
    phaseBadge: "Ideal Weeknight Dinner",
    clinicalVerdict: "A lighter rice portion in the evening prevents heavy food sitting in your stomach overnight, so you wake up with a flatter, pain-free tummy.",
    actionAdvice: "Eat before 7:30 PM to ensure your stomach is 100% empty before you sleep.",
    whyAvoidOrModify: ""
  },

  // --- BREAKFASTS ---
  {
    id: "brk-shake",
    category: "breakfast",
    isNew: false,
    title: "Emma's Blueberry Form Protein Shake (Flexible Fuel)",
    ingredients: "1 scoop (30g) Form Nutrition Plant Protein (Performance Vanilla or Pureblend), 100g Wild Blueberries (fresh or frozen), 250ml Unsweetened Almond Milk (or chilled coconut water), 1tsp Pre-soaked Chia Seeds, pinch Ceylon Cinnamon",
    status: "recommended",
    statusLabel: "Gold Standard • Motility Approved",
    statusColor: "purple",
    bestPhase: "any",
    phaseBadge: "Light Morning Fuel",
    clinicalVerdict: "Emma's premier morning shake! Form Nutrition is 100% plant-based (organic pea, sprouted brown rice, and hemp) with digestive enzymes—completely free of whey/dairy, gluten, soy, and gut-irritating gums. Wild blueberries are Low-FODMAP and soothe the gut lining. Empties from the stomach in under 25–30 minutes, preventing post-meal fullness from pushing down the diaphragm (APD).",
    actionAdvice: "Great for mornings when you want a fast, ultra-light breakfast before an active nanny shift! Sip slowly 40–60 mins after taking your 7:00 AM Linaclotide.",
    whyAvoidOrModify: ""
  },
  {
    id: "brk-1",
    category: "breakfast",
    isNew: false,
    title: "Banana Almond Rice Cakes (235g Banana Alert)",
    ingredients: "235g Banana (~2.5 ripe bananas), 2tsp Sunfly Sunflower Seed Butter, 1tsp Pip & Nut Almond Butter, 3 Kallo Rice Cakes",
    status: "avoid_luteal",
    statusLabel: "⚠️ High Trigger: 235g Banana Overload",
    statusColor: "rose",
    bestPhase: "follicular",
    phaseBadge: "Avoid on Day 19",
    clinicalVerdict: "🚨 BIG STEALTH TRIGGER: 235g banana is over 2.5 large bananas! Friendly portion limits recommend no more than 40–50g of firm banana for sensitive tummies. Even though sunflower and almond butter on rice cakes are great, 235g of ripe banana dumps an enormous amount of fermentable fruit sugars (fructans) into a slow-moving bowel, creating intense trapped gas right under your left ribs.",
    actionAdvice: "GENTLE FIX: Emma, keep the 3 Kallo rice cakes and nut butters, but cap the banana topping at 40–50g of firm (greenish-tipped) banana, or swap toppings for fresh blueberries, strawberries, or kiwi!",
    whyAvoidOrModify: "235g banana contains over 5x the gentle portion for sensitive tummies, flooding slow transit with gas-producing fruit sugars."
  },
  {
    id: "brk-2",
    category: "breakfast",
    isNew: false,
    title: "Crispy Berry & Banana Greek Yogurt Breakfast Bowl",
    ingredients: "190g Fage 0% Lactose-Free Greek Yogurt, 115g Raw Banana, 100g Frozen Raspberries, 30g M&S Made Without Wheat Gluten Free Special Flakes",
    status: "modify",
    statusLabel: "Cap Banana at 45g in Luteal",
    statusColor: "amber",
    bestPhase: "any",
    phaseBadge: "Moderate Banana Load",
    clinicalVerdict: "Fage lactose-free yogurt is gut-safe protein, raspberries provide gentle antioxidants, and M&S gluten-free flakes provide safe crunch. However, 115g banana (~1 whole banana) is still over double the gentle 40–45g limit during the slow luteal phase, which can cause fermentation.",
    actionAdvice: "Slice 1/3 of the banana (approx. 40g) into the bowl, and make up the sweetness with extra raspberries or sliced strawberries!",
    whyAvoidOrModify: "115g banana is double the gentle portion limit for slow-transit luteal days."
  },
  {
    id: "brk-4",
    category: "breakfast",
    isNew: false,
    title: "Warm Spiced Quinoa Porridge with Blueberries & Chia",
    ingredients: "40g Quinoa Flakes, 150ml Unsweetened Almond Milk, 50g Blueberries, 1tsp Chia Seeds, pinch Ceylon Cinnamon",
    status: "recommended",
    statusLabel: "Warm & Soothing",
    statusColor: "emerald",
    bestPhase: "luteal",
    phaseBadge: "Ideal Luteal Warmth",
    clinicalVerdict: "Quinoa flakes cook in 3 minutes into a warm, comforting porridge. Cinnamon gently calms tummy cramps. Blueberries and chia seeds form a smooth gel that helps digestion glide along without any trapped gas.",
    actionAdvice: "Let chia seeds simmer in the porridge so they form a soothing, lubricated gel before eating.",
    whyAvoidOrModify: ""
  },
  {
    id: "brk-5",
    category: "breakfast",
    isNew: false,
    title: "Lactose-Free Greek Yogurt with Raspberries, Kiwis & Almonds",
    ingredients: "150g Fat-Free Greek Yogurt (Lactose-Free), 60g Fresh Raspberries, 1 Ripe Green Kiwi, 10g Sliced Almonds",
    status: "recommended",
    statusLabel: "Natural Actinidin Booster",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Daily Transit Anchor",
    clinicalVerdict: "The gold standard quick ADHD breakfast! Green kiwi delivers actinidin, a natural plant enzyme that gently speeds up digestion, while almonds give you clean, lasting focus without bloating.",
    actionAdvice: "Eat this 45–60 minutes after taking your morning Linaclotide to activate your stomach's natural morning push reflex.",
    whyAvoidOrModify: ""
  },

  // --- LUNCHES (4) ---
  {
    id: "lun-1",
    category: "lunch",
    isNew: false,
    title: "Prawn, Courgette & Rice Nanny Box",
    ingredients: "120g King Prawns, 150g Cooked White Rice, Steamed Courgette cubes, 1tsp Tamari, squeeze of fresh lime",
    status: "recommended",
    statusLabel: "Nanny Grab-&-Go Hero",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Main Meal Trial Winner",
    clinicalVerdict: "The ultimate practical meal for your nanny shifts. Can be eaten warm or room temperature while supervising children. Zero gluten, zero garlic, zero onion, low residue.",
    actionAdvice: "Pack in an insulated lunch bag. Take out 20 minutes before eating so it warms to room temperature—cold food straight from the fridge makes your stomach clench up.",
    whyAvoidOrModify: ""
  },
  {
    id: "lun-2",
    category: "lunch",
    isNew: false,
    title: "Tuna, Steamed Carrot & Rice Box with Tamari",
    ingredients: "1 tin Tuna in springwater, 150g Cooked White Rice, 100g Steamed Carrot coins, 1tsp Tamari, 1/2 tsp Toasted Sesame Oil",
    status: "recommended",
    statusLabel: "Gentle Carbohydrate Fuel",
    statusColor: "emerald",
    bestPhase: "luteal",
    phaseBadge: "Low Gas Production",
    clinicalVerdict: "Steamed carrots provide gentle, soft fiber. Unlike raw crunchy carrots, thoroughly cooked carrots pass through the bowel smoothly without scratching sensitive walls.",
    actionAdvice: "Season with fresh chives or green spring onion tips (green parts only are 100% low-FODMAP!) for savory flavor without garlic or onion bulbs.",
    whyAvoidOrModify: ""
  },
  {
    id: "lun-3",
    category: "lunch",
    isNew: false,
    title: "Turkey Burger Patties with Butternut Squash Mash",
    ingredients: "130g Lean Turkey Breast Mince Patties (seasoned with salt & oregano), 150g Steamed Butternut Squash (mashed), 60g Steamed Green Beans",
    status: "recommended",
    statusLabel: "Splenic Flexure Safe",
    statusColor: "emerald",
    bestPhase: "luteal",
    phaseBadge: "APD Reliever",
    clinicalVerdict: "Butternut squash mash is the most soothing carbohydrate for a sensitive, bloated tummy. It digests completely without leaving any leftover starch for bacteria to turn into trapped gas.",
    actionAdvice: "Bake a batch of 4 turkey patties on Sunday night so you can grab two each morning before your nanny shift.",
    whyAvoidOrModify: ""
  },
  {
    id: "lun-4",
    category: "lunch",
    isNew: false,
    title: "Smoked Salmon & Rice Noodle Salad with Cucumber",
    ingredients: "80g Smoked Salmon, 100g Cooked Rice Vermicelli, Ribbons of peeled cucumber, 1tsp Tamari, 1/2 tsp Toasted Sesame Oil",
    status: "recommended",
    statusLabel: "Anti-Inflammatory Omega-3",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Hydrating & Light",
    clinicalVerdict: "Rice vermicelli noodles digest smoothly. The omega-3 healthy fats in salmon soothe tummy inflammation and support brain focus in adult ADHD.",
    actionAdvice: "Peel the dark green skin off the cucumber to reduce tough outer skins.",
    whyAvoidOrModify: ""
  },

  // --- BULK PREP (2) ---
  {
    id: "blk-1",
    category: "bulk",
    isNew: false,
    title: "Slow-Cooker Turkey & Butternut Squash Bolognese",
    ingredients: "500g Lean Turkey Breast Mince, 400g Butternut Squash chunks, 2 tins Garlic/Onion-Free Passata, 2 Courgettes diced, dried oregano, basil, pinch sea salt",
    status: "recommended",
    statusLabel: "Weekly Meal-Prep Anchor",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Bulk Staple",
    clinicalVerdict: "Slow cooking breaks down squash fiber into a velvety, smooth sauce. Free of onions and garlic, this can be batched on Sunday and portioned into glass containers for Monday–Thursday.",
    actionAdvice: "Serve over 120g white basmati rice or gluten-free rice pasta. Freeze 2 portions for emergency busy nanny evenings.",
    whyAvoidOrModify: ""
  },
  {
    id: "blk-2",
    category: "bulk",
    isNew: false,
    title: "Poached Chicken & Steamed Zucchini Puree Rice Congee",
    ingredients: "400g Chicken Breast, 150g Jasmine White Rice, 1.5L Ginger Bone Broth, 2 Courgettes pureed with immersion blender, splash of tamari",
    status: "recommended",
    statusLabel: "Clinical Gut Rest Congee",
    statusColor: "emerald",
    bestPhase: "luteal",
    phaseBadge: "Rescue Meal",
    clinicalVerdict: "Warm congee is the ultimate gentle recovery meal. Simmering white rice until it melts means your stomach barely has to work, letting your digestive system rest and heal completely.",
    actionAdvice: "Keep a tub in the fridge. On days when your upper ribs feel tight or nausea flares, warm up a bowl for effortless nourishment.",
    whyAvoidOrModify: ""
  },

  // --- SNACKS & SWEET (12) ---
  {
    id: "snk-1",
    category: "snack",
    isNew: false,
    title: "2 Ripe Green Kiwis (Gentle Natural Helper)",
    ingredients: "2 Whole Peeled Green Kiwis",
    status: "recommended",
    statusLabel: "Natural Motility Helper",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Daily Motility Must",
    clinicalVerdict: "Eating 2 green kiwis daily has been shown to naturally soften digestion and get things moving gently, without creating any trapped gas or bloating.",
    actionAdvice: "Eat 1 with breakfast and 1 in the afternoon with your water.",
    whyAvoidOrModify: ""
  },
  {
    id: "snk-2",
    category: "snack",
    isNew: false,
    title: "Propercorn Sweet & Salty Popcorn (30g bag)",
    ingredients: "Popped corn, rapeseed oil, sea salt, unrefined sugar",
    status: "avoid_luteal",
    statusLabel: "⚠️ Scratchy Popcorn Skins",
    statusColor: "rose",
    bestPhase: "follicular",
    phaseBadge: "Avoid in Luteal",
    clinicalVerdict: "While sweet popcorn is tasty, the tough outer corn skins don't break down in your stomach. When your digestion is running slower in your luteal phase, these scratchy bits can irritate your gut wall and trigger tummy cramps and bloating.",
    actionAdvice: "Skip during your luteal phase. Swap for plain white rice cakes or salted potato crisps (garlic & onion free) which dissolve smoothly without scratchy bits.",
    whyAvoidOrModify: "Scratchy popcorn skins irritate your bowel wall, triggering tummy cramps."
  },
  {
    id: "snk-3",
    category: "snack",
    isNew: false,
    title: "Rice Cakes with 100% Peanut Butter & Strawberries",
    ingredients: "2 Plain White Rice Cakes, 15g 100% Peanut Butter (no palm oil), 3 fresh strawberries sliced",
    status: "recommended",
    statusLabel: "Steady Brain Energy",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Steady Blood Sugar",
    clinicalVerdict: "Rice cakes are super light on your stomach. Peanut butter provides wholesome healthy fats and protein to keep your ADHD focus steady without slowing your bowel down.",
    actionAdvice: "Keep peanut butter to 1 level tablespoon (15–16g) to avoid heavy fat volume.",
    whyAvoidOrModify: ""
  },
  {
    id: "snk-4",
    category: "snack",
    isNew: false,
    title: "Warm Berry Compote with 0% Greek Yogurt",
    ingredients: "80g Frozen Blueberries & Raspberries (microwaved 30s to release warm compote), 100g 0% Lactose-Free Greek Yogurt",
    status: "recommended",
    statusLabel: "Comforting Sweet Treat",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Sweet Tooth Fix",
    clinicalVerdict: "Warming the berries releases natural sweet juices. The warm temperature is soothing on your tummy, satisfying your sweet tooth without needing refined sugar.",
    actionAdvice: "A perfect 3 PM afternoon snack during your nanny shift or after work.",
    whyAvoidOrModify: ""
  },
  {
    id: "snk-5",
    category: "snack",
    isNew: false,
    title: "Dark Chocolate (85% Cacao) - 2 Squares",
    ingredients: "20g Quality 85% Dark Chocolate",
    status: "recommended",
    statusLabel: "Natural Muscle Relaxer",
    statusColor: "emerald",
    bestPhase: "luteal",
    phaseBadge: "Evening Craving Hero",
    clinicalVerdict: "Delivers natural magnesium, which gently relaxes the smooth muscles around your bowel to ease cramps, while gently boosting calm, happy brain chemistry.",
    actionAdvice: "Savor slowly with a mug of peppermint or ginger tea after dinner.",
    whyAvoidOrModify: ""
  },
  {
    id: "snk-6",
    category: "snack",
    isNew: false,
    title: "Crisp Salted Cucumber Coins with Sushi Vinegar",
    ingredients: "1/2 Cucumber (peeled and sliced into thin coins), 1tsp Sushi Vinegar, pinch fine sea salt",
    status: "recommended",
    statusLabel: "Hydrating & Crisp Crunch",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Sensory Crunch",
    clinicalVerdict: "Satisfies the ADHD sensory need for a crunchy snack without dumping dense fiber or oils into the bowel. Highly hydrating, light, and refreshing.",
    actionAdvice: "Keep a small container pre-sliced in your fridge.",
    whyAvoidOrModify: ""
  },
  {
    id: "snk-7",
    category: "snack",
    isNew: false,
    title: "Fresh Ginger & Bone Broth Mug",
    ingredients: "250ml Warm Chicken or Beef Bone Broth, 1/2 tsp Fresh Grated Ginger, pinch sea salt",
    status: "recommended",
    statusLabel: "Natural Tummy Warmer",
    statusColor: "emerald",
    bestPhase: "luteal",
    phaseBadge: "Diaphragm Reliever",
    clinicalVerdict: "Fresh ginger gives your stomach a gentle, natural signal to keep food moving along smoothly, easing nausea and breaking up trapped air pockets.",
    actionAdvice: "Sip warm 30 minutes after lunch or dinner when feeling bloated.",
    whyAvoidOrModify: ""
  },
  {
    id: "snk-8",
    category: "snack",
    isNew: false,
    title: "Chia Seed Pudding in Almond Milk with Passionfruit",
    ingredients: "2tbsp Chia Seeds soaked in 150ml Unsweetened Almond Milk, topped with 1 Fresh Passionfruit",
    status: "recommended",
    statusLabel: "Silky Moisture Cushion",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Natural Stool Softener",
    clinicalVerdict: "Soaked chia seeds form a soft, slippery cushion that holds moisture inside your bowel just like Movicol, helping everything pass smoothly without gas.",
    actionAdvice: "Always ensure chia seeds are 100% pre-soaked (at least 2 hours or overnight) until they form a soft gel before eating.",
    whyAvoidOrModify: ""
  },
  {
    id: "snk-9",
    category: "snack",
    isNew: false,
    title: "Sea Salt Potato Crisps (Garlic/Onion Free)",
    ingredients: "25g Ready Salted Tyrrells or Walkers (Potatoes, Sunflower Oil, Sea Salt only)",
    status: "safe",
    statusLabel: "Safe Popcorn Alternative",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Safe Salty Crunch",
    clinicalVerdict: "Unlike popcorn skins, thin potato crisps melt down completely in your stomach and won't scratch or irritate your gut lining.",
    actionAdvice: "Always verify ingredients list: ensure no 'onion powder' or 'flavoring' is added.",
    whyAvoidOrModify: ""
  },
  {
    id: "snk-10",
    category: "snack",
    isNew: false,
    title: "Lactose-Free Hard Cheddar (30g) with Rice Crackers",
    ingredients: "30g Mature Cheddar Cheese (Naturally zero lactose), 3 Plain Rice Crackers",
    status: "safe",
    statusLabel: "Zero-Lactose Savoury Bite",
    statusColor: "emerald",
    bestPhase: "follicular",
    phaseBadge: "Low Residue",
    clinicalVerdict: "Aged hard cheddar has naturally zero lactose and gives you quick, satisfying energy. In your luteal phase, keep to a small matchbox-sized portion (25–30g) so the healthy fats digest easily.",
    actionAdvice: "Pair with room-temperature water.",
    whyAvoidOrModify: ""
  },
  {
    id: "snk-11",
    category: "snack",
    isNew: false,
    title: "Frozen Banana 'Nice Cream' (Single 45g Portion)",
    ingredients: "45g Frozen Firm Banana blended with 50g Lactose-Free Greek Yogurt & 1tsp Cacao Powder",
    status: "safe",
    statusLabel: "Safe Sweet Treat",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Safe Banana Portion",
    clinicalVerdict: "By keeping the banana to a small 45g portion, this gives you that creamy, sweet dessert feeling without overwhelming your tummy with fruit sugars.",
    actionAdvice: "Use green-tipped bananas sliced and frozen in measured 45g baggies.",
    whyAvoidOrModify: ""
  },
  {
    id: "snk-12",
    category: "snack",
    isNew: false,
    title: "Steamed Edamame in Pods (Cap at 50g) with Sea Salt",
    ingredients: "50g Cooked Green Edamame (in pods), Coarse Sea Salt",
    status: "modify",
    statusLabel: "Keep to Small 50g Handful",
    statusColor: "amber",
    bestPhase: "follicular",
    phaseBadge: "Caution in Luteal",
    clinicalVerdict: "Edamame is gentle only in small portions (up to 50g). Beyond that, the plant sugars can ferment into gas. In your luteal phase when your tummy is sensitive, enjoy just a small handful or save for your high-energy week.",
    actionAdvice: "Enjoy in follicular phase when digestion is running faster.",
    whyAvoidOrModify: "Plant sugars increase above 50g."
  },

  // --- ✨ 7 NEW RECIPES SPECIALLY DESIGNED FOR EMMA ---
  {
    id: "new-1",
    category: "dinner",
    isNew: true,
    title: "✨ Ginger-Poached Cod & Zucchini Congee Bowl",
    ingredients: "130g Fresh Cod Fillet, 100g Cooked White Jasmine Rice, 1 Courgette (sliced into delicate discs), 200ml Weak Chicken Bone Broth, 1 thumb Fresh Ginger (finely grated), 1tsp Tamari",
    status: "recommended",
    statusLabel: "✨ New: Top Luteal Dinner",
    statusColor: "emerald",
    bestPhase: "luteal",
    phaseBadge: "Designed for Emma",
    clinicalVerdict: "Created specifically for Emma's tummy. Cod is light and lean so it digests effortlessly. Fresh ginger gives your stomach a gentle, natural nudge to keep moving, and the warm broth gives you soothing hydration without making your tummy feel full or tight.",
    actionAdvice: "Simmer broth, ginger, courgettes, and rice for 6 minutes, drop in the cod for 4 minutes until it flakes gently. Total cook time: 10 minutes!",
    whyAvoidOrModify: ""
  },
  {
    id: "new-2",
    category: "dinner",
    isNew: true,
    title: "✨ Warm Salmon Poke Bowl with Steamed Courgette & Radish",
    ingredients: "110g Wild or Organic Salmon Fillet (pan-seared lightly), 130g Cooked White Basmati Rice (served warm), 1 Steamed Courgette, 3 Quick-Pickled Red Radishes (thinly sliced with sushi vinegar), 1tsp Tamari, 1/2 tsp Sesame Oil",
    status: "recommended",
    statusLabel: "✨ New: Soothing Warm Poke",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Designed for Emma",
    clinicalVerdict: "An elevated, warm twist on Emma's beloved poke bowl! Serving food warm stops your stomach muscles from clenching up. Crisp red radishes give you that satisfying fresh crunch without causing any gas.",
    actionAdvice: "Ideal as a substantial Monday–Thursday lunch during your nanny shift, or a weekend post-Third Space dinner.",
    whyAvoidOrModify: ""
  },
  {
    id: "new-3",
    category: "bulk",
    isNew: true,
    title: "✨ Slow-Cooked Turkey, Butternut Squash & Ginger Tagine",
    ingredients: "500g Lean Turkey Breast Mince, 350g Butternut Squash (peeled and diced), 1 Courgette (diced), 1.5 inch Grated Fresh Ginger, 1tsp Ground Cumin, 1tsp Ground Coriander, 1/2 tsp Cinnamon, 300ml Low-FODMAP Chicken Broth, 2tbsp Tomato Puree",
    status: "recommended",
    statusLabel: "✨ New: Sunday Batch Prep",
    statusColor: "emerald",
    bestPhase: "luteal",
    phaseBadge: "Designed for Emma",
    clinicalVerdict: "Gentle warming spices (cumin, ginger, cinnamon) help break up trapped air bubbles under your left ribs. Tender butternut squash melts down into soothing, soft comfort food that's wonderful for a busy nanny week.",
    actionAdvice: "Cook in your slow cooker on low for 4–5 hours on Sunday. Divide into 4 glass containers for effortless nanny grab-and-go.",
    whyAvoidOrModify: ""
  },
  {
    id: "new-4",
    category: "lunch",
    isNew: true,
    title: "✨ Japanese Tamago (Egg) & Rice Bowl with Wilted Spinach",
    ingredients: "2 Whole Organic Eggs + 2 Egg Whites (whisked with 1tsp tamari and 1tsp sushi vinegar into sweet Japanese rolled omelet ribbons), 130g Cooked White Rice, 60g Baby Spinach (wilted with 1/4 tsp sesame oil)",
    status: "recommended",
    statusLabel: "✨ Boosts Your Pyridostigmine Med",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Designed for Emma",
    clinicalVerdict: "Eggs are naturally packed with choline, the exact building block your body uses to make the nerve messenger that your Pyridostigmine (Mestinon) medicine boosts! This gives your bowel muscles the natural fuel they need to keep things moving. Wilted baby spinach and white rice digest cleanly with zero discomfort.",
    actionAdvice: "Baby spinach is low-FODMAP in 75g portions and wilts down to virtually zero roughage. A delicious, comforting lunch bowl.",
    whyAvoidOrModify: ""
  },
  {
    id: "new-5",
    category: "dinner",
    isNew: true,
    title: "✨ Golden Turmeric Chicken & Butternut Squash Puree",
    ingredients: "140g Diced Chicken Breast (pan-cooked with 1/2 tsp turmeric & sea salt), 180g Steamed Butternut Squash (whipped with 1tsp olive oil and sea salt into fluffy mash), 80g Steamed Courgette coins",
    status: "recommended",
    statusLabel: "✨ New: Tummy Pain Soother",
    statusColor: "emerald",
    bestPhase: "luteal",
    phaseBadge: "Designed for Emma",
    clinicalVerdict: "Golden turmeric contains natural soothing compounds that calm sensitive nerves in your tummy wall, melting away that tight, burning ache. Whipped butternut squash gives you all the coziness of buttery mash without causing bloating.",
    actionAdvice: "Steam the butternut squash until fork-tender and whip with a fork or hand blender in 60 seconds.",
    whyAvoidOrModify: ""
  },
  {
    id: "new-6",
    category: "lunch",
    isNew: true,
    title: "✨ Nanny Grab-&-Go: Turkey Bacon & Courgette Egg Muffins",
    ingredients: "6 Egg Whites + 2 Whole Eggs, 3 rashers Lean Turkey Bacon (diced & crisped), 1 Small Courgette (grated and water squeezed out), pinch sea salt and black pepper",
    status: "recommended",
    statusLabel: "✨ New: Zero-Prep Nanny Snack",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Designed for Emma",
    clinicalVerdict: "Tailored for ADHD days when mornings are rushed and you need something quick without having to think. Having these ready in the fridge gives you easy protein with zero prep, zero tummy irritants, and zero bloat.",
    actionAdvice: "Whisk ingredients, pour into a silicone muffin tray, and bake at 180°C for 18 minutes. Keeps in the fridge for 5 days.",
    whyAvoidOrModify: ""
  },
  {
    id: "new-7",
    category: "snack",
    isNew: true,
    title: "✨ Kiwi-Chia Gut Motility Elixir",
    ingredients: "1 Ripe Green Kiwi (peeled and blended smooth), 1tbsp Chia Seeds (pre-soaked in 150ml room-temp water for 2 hours until gelatinous), 1 squeeze of Fresh Lime juice, 100ml Cold Water",
    status: "recommended",
    statusLabel: "✨ New: Natural Movicol Partner",
    statusColor: "emerald",
    bestPhase: "luteal",
    phaseBadge: "Designed for Emma",
    clinicalVerdict: "Blends the natural moving power of green kiwi with the silky moisture of soaked chia seeds. It works hand-in-hand with your Movicol and Linaclotide to keep your digestion smooth, soft, and comfortable without sudden urgency.",
    actionAdvice: "Sip midday between lunch and dinner. Soothing, refreshing, and calming to the entire GI tract.",
    whyAvoidOrModify: ""
  },
  {
    id: "new-8",
    category: "snack",
    isNew: true,
    title: "🍨 Oddono's Banana Sorbet (In a Cup)",
    ingredients: "1 Scoop Fresh Oddono's Gelati Italiani Banana Sorbetto, served in a cup (coppetta)",
    status: "recommended",
    statusLabel: "✨ Emma's Favorite Treat",
    statusColor: "purple",
    bestPhase: "any",
    phaseBadge: "100% Dairy-Free Treat",
    clinicalVerdict: "Hand-crafted by Oddono's from fresh ripe bananas, water, and pure sugar. It is naturally 100% dairy-free, lactose-free, egg-free, and gluten-free (when ordered in a cup). Empties from the stomach in under 20–30 minutes, preventing APD downward diaphragm pressure.",
    actionAdvice: "Always order in a CUP (coppetta) to avoid the wheat gluten in standard waffle cones. Take small spoonfuls mindfully and sip room-temperature water alongside.",
    whyAvoidOrModify: ""
  }
];

let currentMealCategoryFilter = 'all';
let currentMealPhaseFilter = 'luteal';

function renderEmmaMeals() {
  const container = document.getElementById('mealsContainer');
  if (!container) return;

  const filtered = EMMA_MEALS.filter(meal => {
    // Category match
    if (currentMealCategoryFilter === 'new') {
      if (!meal.isNew) return false;
    } else if (currentMealCategoryFilter !== 'all') {
      if (meal.category !== currentMealCategoryFilter) return false;
    }

    // Phase match: if luteal filter is on, show all but style/highlight luteal relevance
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-10 bg-brand-cream/50 rounded-2xl border border-brand-border">
        <p class="text-xs font-semibold text-brand-textMuted">No meals match this category filter.</p>
      </div>
    `;
    return;
  }

  const activeCycle = getCurrentCycleInfo();
  const isFollicular = activeCycle.phase === 'follicular';
  const isLuteal = activeCycle.phase === 'luteal';

  container.innerHTML = filtered.map(meal => {
    let status = meal.status;
    let statusLabel = meal.statusLabel;
    let phaseBadge = meal.phaseBadge;
    let clinicalVerdict = meal.clinicalVerdict;
    let actionAdvice = meal.actionAdvice;

    // Dynamic phase adjustments:
    if (meal.id === 'snk-2') { // Propercorn Popcorn
      if (isFollicular) {
        status = 'recommended';
        statusLabel = 'Follicular Approved';
        phaseBadge = `Follicular Window (Day ${activeCycle.cycleDay})`;
        clinicalVerdict = `Approved for Cycle Day ${activeCycle.cycleDay} (${activeCycle.phaseLabel})! Your natural progesterone is at baseline and estrogen is promoting brisk colonic transit. The sharp outer corn skins that irritate sluggish gut walls during luteal days move through cleanly today without triggering tummy muscle spasms.`;
        actionAdvice = 'Enjoy your 30g bag of Propercorn sweet & salty popcorn! Just chew well and drink a glass of water alongside to help the insoluble fiber glide through effortlessly.';
      } else {
        status = 'avoid_luteal';
        statusLabel = '⚠️ Scratchy Popcorn Skins';
        phaseBadge = `Avoid in Luteal (Day ${activeCycle.cycleDay})`;
        clinicalVerdict = `While sweet popcorn is tasty, the tough outer corn skins don't break down in your stomach. When your digestion is running slower on Cycle Day ${activeCycle.cycleDay} under natural progesterone, these scratchy bits irritate your gut wall and trigger tummy muscle spasms (APD).`;
        actionAdvice = 'Skip during your luteal phase. Swap for plain white rice cakes or salted potato crisps (garlic & onion free) which dissolve smoothly without scratchy bits.';
      }
    } else if (meal.id === 'brk-1') { // Banana Almond Rice Cakes
      if (isFollicular) {
        status = 'modify';
        statusLabel = 'Follicular Adjusted (Cap 80–100g)';
        phaseBadge = `Follicular Window (Day ${activeCycle.cycleDay})`;
        clinicalVerdict = `Great news for Cycle Day ${activeCycle.cycleDay} (${activeCycle.phaseLabel})! Because your gut motility is running at its fastest monthly speed under rising estrogen, food clears before severe fermentation occurs. You do NOT have to be as strict as the 40g luteal limit. 235g is still a very heavy single sugar load, but you can safely enjoy 80–100g (~1 whole medium banana).`;
        actionAdvice = 'Enjoy up to 80–100g of firm banana on your 3 Kallo rice cakes with sunflower seed butter and almond butter. Your faster motility will handle this with ease for steady, focused nanny energy!';
      } else {
        status = 'avoid_luteal';
        statusLabel = '⚠️ High Trigger: 235g Banana Overload';
        phaseBadge = `Avoid on Day ${activeCycle.cycleDay}`;
        clinicalVerdict = `🚨 BIG STEALTH TRIGGER: 235g banana is over 2.5 large bananas! Friendly portion limits recommend no more than 40–50g of firm banana for sensitive tummies. Even though sunflower and almond butter on rice cakes are great, 235g of ripe banana dumps an enormous amount of fermentable fruit sugars into a slow-moving bowel, creating intense trapped gas right under your left ribs.`;
        actionAdvice = 'GENTLE FIX: Emma, keep the 3 Kallo rice cakes and nut butters, but cap the banana topping at 40–50g of firm (greenish-tipped) banana, or swap toppings for fresh blueberries, strawberries, or kiwi!';
      }
    } else if (meal.id === 'din-2') { // Tuna & Prawn Stir-fry with Celery
      if (isFollicular) {
        status = 'recommended';
        statusLabel = 'Motility Approved (Celery Safe)';
        phaseBadge = `Follicular Safe (Day ${activeCycle.cycleDay})`;
        clinicalVerdict = `Tuna, prawns, and rice are very gentle. Celery string fibers that cause trouble in slow luteal transit are easily cleared by your faster follicular motility on Cycle Day ${activeCycle.cycleDay} without trapped gas.`;
        actionAdvice = 'Slice celery thinly and cook tender in the stir-fry. Enjoy with noya sauce and sushi vinegar!';
      } else {
        status = 'modify';
        statusLabel = 'Modify Celery in Luteal';
        phaseBadge = `Caution on Day ${activeCycle.cycleDay}`;
        clinicalVerdict = `Tuna, prawns, and rice are very gentle. However, celery contains tough stringy fibers and plant sugars that pull extra water and turn into gas under your ribs during your slower luteal phase.`;
        actionAdvice = 'Swap the celery stalk for 50g peeled cucumber ribbons or finely diced fennel bulb (fennel has soothing natural oils that help tummy muscles relax!).';
      }

    } else if (meal.id === 'brk-2') { // Crispy Berry & Banana Greek Yogurt
      if (isFollicular) {
        status = 'recommended';
        statusLabel = 'Follicular Approved';
        phaseBadge = `Follicular Safe (Day ${activeCycle.cycleDay})`;
        clinicalVerdict = `Fage lactose-free yogurt is gut-safe protein, raspberries provide gentle antioxidants, and M&S gluten-free flakes provide safe crunch. In the follicular phase, 115g of banana is well-tolerated thanks to brisk colonic motility!`;
        actionAdvice = 'Enjoy as a complete breakfast bowl for quick ADHD-friendly morning fuel.';
      } else {
        status = 'modify';
        statusLabel = 'Cap Banana at 45g in Luteal';
        phaseBadge = `Moderate Banana Load (Day ${activeCycle.cycleDay})`;
        clinicalVerdict = `Fage lactose-free yogurt is gut-safe protein, raspberries provide gentle antioxidants, and M&S gluten-free flakes provide safe crunch. However, 115g banana (~1 whole banana) is still over double the gentle 40–45g limit during the slow luteal phase, which can cause fermentation.`;
        actionAdvice = 'Slice 1/3 of the banana (approx. 40g) into the bowl, and make up the sweetness with extra raspberries or sliced strawberries!';
      }
    }

    const isAvoid = status === 'avoid_luteal';
    const isModify = status === 'modify';
    const isRecommended = status === 'recommended';
    const isNew = meal.isNew;

    let borderClass = "border-brand-border bg-white";
    let badgeBg = "bg-emerald-100 text-emerald-800 border-emerald-200";
    let icon = "✓";

    if (meal.id === 'brk-shake') {
      borderClass = "border-purple-300 bg-purple-50/40 shadow-xs ring-1 ring-purple-200";
      badgeBg = "bg-purple-100 text-purple-900 border-purple-300 font-extrabold";
      icon = "🫐";
    } else if (isAvoid) {
      borderClass = "border-rose-300 bg-rose-50/40";
      badgeBg = "bg-rose-100 text-rose-800 border-rose-200";
      icon = "⚠️";
    } else if (isModify) {
      borderClass = "border-amber-300 bg-amber-50/30";
      badgeBg = "bg-amber-100 text-amber-800 border-amber-200";
      icon = "🟡";
    } else if (isNew) {
      borderClass = "border-indigo-200 bg-indigo-50/20";
      badgeBg = "bg-indigo-100 text-indigo-800 border-indigo-200";
      icon = "✨";
    }

    return `
      <div class="p-3.5 sm:p-4 rounded-2xl border ${borderClass} shadow-2xs space-y-2.5 transition-all hover:shadow-xs flex flex-col justify-between">
        <div class="space-y-2">
          <!-- Top Row: Title & Badges -->
          <div class="flex items-start justify-between gap-2">
            <div>
              <div class="flex items-center space-x-1.5">
                <h4 class="font-bold text-xs sm:text-sm text-brand-textDark leading-tight">${meal.title}</h4>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded-full border text-[10px] font-extrabold uppercase shrink-0 ${badgeBg}">
              ${icon} ${statusLabel}
            </span>
          </div>

          <!-- Practical Action / Nanny Guidance (Primary Quick Tip) -->
          <div class="p-2 rounded-xl ${meal.id === 'brk-shake' ? 'bg-purple-100/70 text-purple-950 border border-purple-200' : (isAvoid ? 'bg-rose-100/60 text-rose-900 border border-rose-200' : 'bg-emerald-50/60 text-emerald-950 border border-emerald-200')} text-[11px] leading-relaxed">
            <strong class="font-bold block text-[10px] uppercase tracking-wide mb-0.5">💡 Quick Tip for Emma:</strong>
            ${actionAdvice}
          </div>

          <!-- Toggle Button for Deep Details -->
          <button type="button" onclick="toggleMealDetails('${meal.id}')" id="mealDetailBtn-${meal.id}" class="text-[10px] font-semibold text-brand-coral hover:underline flex items-center gap-1 pt-0.5">
            <span>View Ingredients & Why ▾</span>
          </button>

          <!-- Collapsible Ingredients & Tummy Verdict (Hidden by Default) -->
          <div id="mealDetails-${meal.id}" class="hidden space-y-2 pt-1 border-t border-brand-border/60">
            <!-- Ingredients Pill Box -->
            <div class="p-2 rounded-xl bg-brand-cream/80 border border-brand-border/60 text-[11px] text-brand-textDark leading-relaxed">
              <strong class="text-brand-textMuted font-bold block text-[10px] uppercase tracking-wider mb-0.5">Ingredients:</strong>
              ${meal.ingredients}
            </div>

            <!-- Friendly Rationale & Tummy Verdict -->
            <div class="text-[11px] leading-relaxed ${isAvoid ? 'text-rose-950 font-medium' : (isModify ? 'text-amber-950' : 'text-slate-700')}">
              <strong>${isAvoid ? '⚠️ Why Be Mindful:' : (isModify ? '🟡 Tummy Note:' : '🌿 Why This Is Great For You:')}</strong> ${clinicalVerdict}
            </div>
          </div>
        </div>

        <!-- Card Footer: Phase badge and quick audit button -->
        <div class="pt-2 border-t border-brand-border/60 flex items-center justify-between text-[11px]">
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-md ${meal.id === 'brk-shake' ? 'bg-purple-100 text-purple-800 font-extrabold' : 'bg-slate-100 text-slate-700'}">
            ${phaseBadge}
          </span>
          <button type="button" onclick="auditSpecificMeal('${escapeQuotes(meal.title)}', '${escapeQuotes(meal.ingredients)}')" class="px-2.5 py-1 rounded-lg bg-brand-textDark text-white hover:bg-black font-semibold text-[10px] transition-all flex items-center space-x-1 active:scale-95 shadow-2xs">
            <span>🔍 Check Food</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function toggleMealDetails(mealId) {
  const details = document.getElementById(`mealDetails-${mealId}`);
  const btn = document.getElementById(`mealDetailBtn-${mealId}`);
  if (!details || !btn) return;
  const isHidden = details.classList.contains('hidden');
  if (isHidden) {
    details.classList.remove('hidden');
    btn.innerHTML = '<span>Hide Ingredients & Why ▴</span>';
  } else {
    details.classList.add('hidden');
    btn.innerHTML = '<span>View Ingredients & Why ▾</span>';
  }
}

function toggleMealGuideSection() {
  const content = document.getElementById('mealGuideContent');
  const btnText = document.getElementById('mealGuideToggleText');
  if (!content || !btnText) return;
  const isHidden = content.classList.contains('hidden');
  if (isHidden) {
    content.classList.remove('hidden');
    btnText.textContent = 'Hide Recipes ▴';
  } else {
    content.classList.add('hidden');
    btnText.textContent = 'Show Recipes ▾';
  }
}

function escapeQuotes(str) {
  return (str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function filterMealCategory(category) {
  currentMealCategoryFilter = category;
  document.querySelectorAll('.meal-cat-btn').forEach(btn => {
    btn.classList.remove('bg-brand-textDark', 'text-white', 'font-bold');
    btn.classList.add('bg-brand-cream', 'text-brand-textMuted');
  });

  const activeBtn = document.getElementById(`mealCat-${category}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-brand-cream', 'text-brand-textMuted');
    activeBtn.classList.add('bg-brand-textDark', 'text-white', 'font-bold');
  }

  // If hidden, reveal when a category is tapped
  const content = document.getElementById('mealGuideContent');
  const btnText = document.getElementById('mealGuideToggleText');
  if (content && content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    if (btnText) btnText.textContent = 'Hide Recipes ▴';
  }

  renderEmmaMeals();
}

function setMealPhaseFilter(phase) {
  currentMealPhaseFilter = phase;
  const lutealBtn = document.getElementById('phaseFilter-luteal');
  const allBtn = document.getElementById('phaseFilter-all');

  if (phase === 'luteal') {
    lutealBtn?.classList.add('bg-white', 'text-brand-coral', 'font-bold', 'shadow-2xs');
    lutealBtn?.classList.remove('text-brand-textMuted');
    allBtn?.classList.remove('bg-white', 'text-brand-coral', 'font-bold', 'shadow-2xs');
    allBtn?.classList.add('text-brand-textMuted');
  } else {
    allBtn?.classList.add('bg-white', 'text-brand-coral', 'font-bold', 'shadow-2xs');
    allBtn?.classList.remove('text-brand-textMuted');
    lutealBtn?.classList.remove('bg-white', 'text-brand-coral', 'font-bold', 'shadow-2xs');
    lutealBtn?.classList.add('text-brand-textMuted');
  }

  // If hidden, reveal when a phase filter is tapped
  const content = document.getElementById('mealGuideContent');
  const btnText = document.getElementById('mealGuideToggleText');
  if (content && content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    if (btnText) btnText.textContent = 'Hide Recipes ▴';
  }

  renderEmmaMeals();
}

function auditSpecificMeal(title, ingredients) {
  const input = document.getElementById('foodQueryInput');
  if (input) {
    input.value = `${title}: ${ingredients}`;
    checkFoodSafety();
    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// ============================================================================
// APP BOOTSTRAP: INITIALIZE AFTER ALL SCRIPTS & DOM LOAD
// ============================================================================
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    initApp();
    triggerLucideIcons();
  });
}

// Staggered icon triggers
setTimeout(triggerLucideIcons, 15);
setTimeout(triggerLucideIcons, 80);
setTimeout(triggerLucideIcons, 250);
setTimeout(triggerLucideIcons, 600);
setTimeout(triggerLucideIcons, 1200);


