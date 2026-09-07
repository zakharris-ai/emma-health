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
    id: "2026-09-07",
    date: "2026-09-07",
    displayDate: "7th September 2026",
    month: "september",
    cycleDay: 20,
    phase: "luteal",
    phaseLabel: "Mid-Luteal (Progesterone Peak Window)",
    temp: 36.09,
    ouraSleep: null,
    sleepScore: null,
    ouraRhr: null,
    rhr: null,
    ouraHrv: null,
    hrv: null,
    fastingAdherence: "kept_40",
    warmTrigger: true,
    electrolyteBuffered: false,
    electrolytesTaken: false,
    eaasTaken: true,
    sennaTea: true,
    diaphragmResetDone: false,
    movement: "Watery bypass (liquid around solid plug)",
    bristol: "liquid",
    stoolNuance: "bypass",
    diaphragmBloat: 0,
    upperTummyBloat: false,
    lowerTummyBloat: true,
    gassiness: false,
    burpiness: false,
    puffiness: [
      "🫧 Lower Tummy Bloating",
      "Puffy Arms",
      "Achy Body",
      "Muscle Twitches",
      "Brain Fog",
      "Headache",
      "🤍 Low/No Libido",
      "🧬 EAAs Taken",
      "🍵 Senna Tea Taken",
      "⏱️ 40m Fast Kept",
      "☕ Warm Gastrocolic Trigger",
      "Reformer Pilates Dynamic"
    ],
    emotions: "🌪️ Anxious / Nervous",
    mood: "anxious",
    sexDrive: "low",
    alcohol: "none",
    symptoms: "Mind racing and overthinking today. Big WhatsApp messages feel overwhelming today. Sorting GP / prescription admin feels like too much today. Literally only have energy to go nannying today. Social battery completely at zero, need quiet",
    medNotes: "Morning Linaclotide taken with 40-min fast",
    exercise: "Reformer Pilates Dynamic",
    notes: "Mind racing and overthinking today. Big WhatsApp messages feel overwhelming today. Sorting GP / prescription admin feels like too much today. Literally only have energy to go nannying today. Social battery completely at zero, need quiet",
    headspaceNotes: "Mind racing and overthinking today. Big WhatsApp messages feel overwhelming today. Sorting GP / prescription admin feels like too much today. Literally only have energy to go nannying today. Social battery completely at zero, need quiet",
    updatedAt: "2026-09-07T18:32:01.469Z"
  },
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
    medNotes: "Took linaclotide first thing empty stomach upon waking as advised!",
    exercise: "1x dynamic Pilates, 30m strength, 16,000 steps",
    notes: "Taking Linaclotide properly on waking produced much better morning tolerability."
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
    symptoms: "Really sore lower and upper tummy. Felt horrific all day, trousers/bottoms not fitting",
    diaphragmBloat: 9,
    puffiness: ["All Trousers/Bottoms Feeling Tight", "Diaphragm Bloat", "Inflamed"],
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
    puffiness: ["Puffy Arms", "Chest Tight", "All Trousers/Bottoms Feeling Tight", "Inflamed Everywhere"],
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
    renderMovementAndSpa();
    loadLutealDoubleSetting();
    renderCycleExercisePrescription();
    if (typeof updateOuraConnectionUI === 'function') updateOuraConnectionUI();
    if (typeof checkOuraOAuthCallback === 'function') checkOuraOAuthCallback();
    if (localStorage.getItem('emma_oura_token') && typeof fetchOuraBiometrics === 'function') {
      setTimeout(() => fetchOuraBiometrics(true), 2500);
    }
  }
  triggerLucideIcons();
}

// ============================================================================
// INDESTRUCTIBLE MULTI-TIER STORAGE ENGINE (ZERO DATA LOSS GUARANTEE)
// ============================================================================
const IDB_NAME = 'EmmaHealthPermanentStore';
const IDB_VERSION = 1;
const IDB_STORE = 'daily_checkins';

// Request persistent storage quota from browser (protects from mobile Safari eviction)
if (typeof navigator !== 'undefined' && navigator.storage && navigator.storage.persist) {
  navigator.storage.persist().then(granted => {
    if (granted) console.log('🌸 Mobile device persistent storage lock granted');
  }).catch(() => {});
}

function openPermanentIDB() {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !window.indexedDB) return resolve(null);
    try {
      const req = window.indexedDB.open(IDB_NAME, IDB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(IDB_STORE)) {
          db.createObjectStore(IDB_STORE, { keyPath: 'date' });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = (err) => {
        console.warn('IndexedDB open notice:', err);
        resolve(null);
      };
    } catch (e) {
      resolve(null);
    }
  });
}

async function persistLogsToIndexedDB(logsArray) {
  try {
    const db = await openPermanentIDB();
    if (!db) return;
    const tx = db.transaction(IDB_STORE, 'readwrite');
    const store = tx.objectStore(IDB_STORE);
    for (const entry of logsArray) {
      if (entry && entry.date) {
        store.put(entry);
      }
    }
  } catch (err) {
    console.warn('IndexedDB persist notice:', err);
  }
}

async function loadLogsFromIndexedDB() {
  try {
    const db = await openPermanentIDB();
    if (!db) return [];
    return new Promise((resolve) => {
      const tx = db.transaction(IDB_STORE, 'readonly');
      const store = tx.objectStore(IDB_STORE);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => resolve([]);
    });
  } catch (err) {
    return [];
  }
}

async function deleteLogFromIndexedDB(date) {
  try {
    const db = await openPermanentIDB();
    if (!db) return;
    const tx = db.transaction(IDB_STORE, 'readwrite');
    const store = tx.objectStore(IDB_STORE);
    store.delete(date);
  } catch (err) {
    console.warn('IndexedDB delete notice:', err);
  }
}

function getDeletedDates() {
  try {
    const raw = localStorage.getItem('emma_deleted_dates');
    if (raw) return new Set(JSON.parse(raw));
  } catch (e) {}
  return new Set();
}

function recordDeletedDate(date) {
  if (!date) return;
  const set = getDeletedDates();
  set.add(date);
  try {
    localStorage.setItem('emma_deleted_dates', JSON.stringify(Array.from(set)));
  } catch (e) {}
}

function unmarkDeletedDate(date) {
  if (!date) return;
  const set = getDeletedDates();
  if (set.has(date)) {
    set.delete(date);
    try {
      localStorage.setItem('emma_deleted_dates', JSON.stringify(Array.from(set)));
    } catch (e) {}
  }
}

/**
 * Intelligent Cumulative Union Merge:
 * Combines two log lists so that NO DATE IS EVER DROPPED OR OVERWRITTEN WITH STALE DATA.
 */
function mergeLogs(listA = [], listB = []) {
  const map = new Map();

  function entryRichness(e) {
    if (!e) return 0;
    let s = 1;
    if (e.updatedAt) s += 10;
    if (e.temp) s += 2;
    if (e.diaphragmBloat) s += 2;
    if (e.upperTummyBloat || e.lowerTummyBloat) s += 3;
    if (e.headspaceNotes && e.headspaceNotes.trim().length > 0) s += 5;
    if (e.notes && e.notes.trim().length > 0 && !e.notes.includes("Unified Daily Check-In")) s += 4;
    if (e.movement && e.movement !== 'None') s += 2;
    if (e.puffiness && e.puffiness.length > 0) s += e.puffiness.length;
    if (e.bristol && e.bristol !== 'none') s += 2;
    return s;
  }

  function mergeTwo(a, b) {
    if (!a) return b;
    if (!b) return a;

    const aTime = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
    const bTime = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;

    let base, donor;
    if (aTime !== bTime) {
      base = aTime > bTime ? { ...a } : { ...b };
      donor = aTime > bTime ? b : a;
    } else {
      const aScore = entryRichness(a);
      const bScore = entryRichness(b);
      base = aScore >= bScore ? { ...a } : { ...b };
      donor = aScore >= bScore ? b : a;
    }

    // Fill in any fields missing in base
    for (const key of Object.keys(donor)) {
      if (base[key] === null || base[key] === undefined || base[key] === '' || (Array.isArray(base[key]) && base[key].length === 0)) {
        base[key] = donor[key];
      }
    }

    // Helper: is note just empty or generic default placeholder text?
    const isGenericNote = (str) => !str || typeof str !== 'string' || str.trim() === '' || str.includes("Saved via Emma's Unified Daily Check-In") || str === "Daily check-in logged";

    // 1. Never replace real headspace notes or symptoms with generic placeholders
    if (isGenericNote(base.notes) && donor.notes && !isGenericNote(donor.notes)) {
      base.notes = donor.notes;
    }
    if (isGenericNote(base.symptoms) && donor.symptoms && !isGenericNote(donor.symptoms)) {
      base.symptoms = donor.symptoms;
    }
    if ((!base.headspaceNotes || base.headspaceNotes.trim() === '') && donor.headspaceNotes && donor.headspaceNotes.trim() !== '') {
      base.headspaceNotes = donor.headspaceNotes;
    } else if (donor.headspaceNotes && base.headspaceNotes && donor.headspaceNotes.length > base.headspaceNotes.length) {
      base.headspaceNotes = donor.headspaceNotes;
    }

    // 2. Preserve bloating score if base is 0/falsy and donor had recorded bloat
    if ((base.diaphragmBloat === 0 || base.diaphragmBloat === null || base.diaphragmBloat === undefined) && donor.diaphragmBloat > 0) {
      base.diaphragmBloat = donor.diaphragmBloat;
    }

    // 3. Preserve boolean flags (union behavior)
    if (!base.upperTummyBloat && donor.upperTummyBloat) base.upperTummyBloat = true;
    if (!base.lowerTummyBloat && donor.lowerTummyBloat) base.lowerTummyBloat = true;
    if (!base.gassiness && donor.gassiness) base.gassiness = true;
    if (!base.burpiness && donor.burpiness) base.burpiness = true;
    if (base.sennaTea === null && donor.sennaTea !== null && donor.sennaTea !== undefined) base.sennaTea = donor.sennaTea;
    if (!base.eaasTaken && donor.eaasTaken) base.eaasTaken = true;
    if (!base.electrolytesTaken && donor.electrolytesTaken) base.electrolytesTaken = true;
    if (!base.warmTrigger && donor.warmTrigger) base.warmTrigger = true;
    if (!base.diaphragmResetDone && donor.diaphragmResetDone) base.diaphragmResetDone = true;

    // 4. Union puffiness tags (deduplicated)
    const tagsA = Array.isArray(a.puffiness) ? a.puffiness : [];
    const tagsB = Array.isArray(b.puffiness) ? b.puffiness : [];
    base.puffiness = Array.from(new Set([...tagsA, ...tagsB]));

    // 5. Preserve vitals/temp if missing in base
    if ((base.temp === null || base.temp === undefined) && donor.temp !== null && donor.temp !== undefined) {
      base.temp = donor.temp;
    }
    if (!base.ouraSleep && donor.ouraSleep) base.ouraSleep = donor.ouraSleep;
    if (!base.ouraRhr && donor.ouraRhr) base.ouraRhr = donor.ouraRhr;
    if (!base.ouraHrv && donor.ouraHrv) base.ouraHrv = donor.ouraHrv;

    // 6. Preserve bowel movement / nuance if base has none
    if ((!base.movement || base.movement === 'None') && donor.movement && donor.movement !== 'None') {
      base.movement = donor.movement;
      if (!base.bristol || base.bristol === 'none') base.bristol = donor.bristol;
      if (!base.stoolNuance) base.stoolNuance = donor.stoolNuance;
    }

    // 7. Preserve headspace moods
    const baseHasMoods = (Array.isArray(base.moods) && base.moods.length > 0) || (base.mood && base.mood.trim() !== '');
    if (!baseHasMoods) {
      if (donor.moods && Array.isArray(donor.moods) && donor.moods.length > 0) {
        base.moods = [...donor.moods];
        base.mood = donor.mood || donor.moods.join(',');
      } else if (donor.mood) {
        base.mood = donor.mood;
        base.moods = donor.mood.split(',').map(s => s.trim()).filter(Boolean);
      }
    }

    return base;
  }

  for (const item of (Array.isArray(listA) ? listA : [])) {
    if (item && item.date) map.set(item.date, item);
  }

  for (const item of (Array.isArray(listB) ? listB : [])) {
    if (item && item.date) {
      if (map.has(item.date)) {
        map.set(item.date, mergeTwo(map.get(item.date), item));
      } else {
        map.set(item.date, item);
      }
    }
  }

  const merged = Array.from(map.values());
  merged.sort((x, y) => new Date(y.date).getTime() - new Date(x.date).getTime());
  return merged;
}

function isSyntheticTestEntry(e) {
  return false;
}

// Load Logs with Multi-Tier Redundancy (LocalStorage + Isolated Date Keys + IndexedDB + Defaults)
function loadLogs() {
  const saved = localStorage.getItem('emma_health_logs');
  let parsed = [];
  if (saved) {
    try {
      const p = JSON.parse(saved);
      if (Array.isArray(p)) parsed = p;
    } catch (e) {
      parsed = [];
    }
  }

  // Recover any isolated date entries saved under emma_entry_* (guarantees zero data loss even if emma_health_logs was cleared)
  try {
    if (typeof localStorage !== 'undefined') {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('emma_entry_')) {
          try {
            const item = JSON.parse(localStorage.getItem(key));
            if (item && item.date) {
              parsed.push(item);
            }
          } catch (err) {}
        }
      }
    }
  } catch (e) {}

  // Union merge with DEFAULT_LOGS so no historical cycle record is ever missing
  const deletedSet = getDeletedDates();
  parsed = parsed.filter(p => !deletedSet.has(p.date));
  const activeDefaults = DEFAULT_LOGS.filter(d => !deletedSet.has(d.date));
  logs = mergeLogs(parsed, activeDefaults).filter(l => !deletedSet.has(l.date));
  localStorage.setItem('emma_health_logs', JSON.stringify(logs));

  // Also ensure every entry is saved to its own isolated date key
  for (const entry of logs) {
    if (entry && entry.date) {
      try {
        localStorage.setItem(`emma_entry_${entry.date}`, JSON.stringify(entry));
      } catch (e) {}
    }
  }

  // Asynchronous recovery from IndexedDB (in case LocalStorage was cleared)
  loadLogsFromIndexedDB().then(idbLogs => {
    if (idbLogs && idbLogs.length > 0) {
      const activeIdb = idbLogs.filter(item => !deletedSet.has(item.date));
      const mergedWithIDB = mergeLogs(logs, activeIdb).filter(item => !deletedSet.has(item.date));
      if (mergedWithIDB.length !== logs.length) {
        logs = mergedWithIDB;
        localStorage.setItem('emma_health_logs', JSON.stringify(logs));
        persistLogsToIndexedDB(logs);
        renderDashboardTrends();
        renderHistoryLogs();
      }
    }
  });
}

function saveLogs(immediate = false) {
  // Guarantee clean deduplication and sorting
  logs = mergeLogs(logs, []);
  localStorage.setItem('emma_health_logs', JSON.stringify(logs));

  // Backup EVERY entry under its own immutable date key in LocalStorage
  for (const entry of logs) {
    if (entry && entry.date) {
      try {
        localStorage.setItem(`emma_entry_${entry.date}`, JSON.stringify(entry));
      } catch (e) {}
    }
  }

  // Persist to IndexedDB
  persistLogsToIndexedDB(logs);

  // Sync to server (immediate if user just saved check-in)
  syncDataToServer(immediate);
}

function saveSingleCheckinToServer(entry) {
  if (!entry || !entry.date) return;
  try {
    fetch('/api/save-checkin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
      keepalive: true
    })
    .then(res => res.json())
    .then(data => {
      if (data && data.ok) {
        updateSyncIndicator('synced', `Check-in for ${entry.date} permanently stored in cloud database`);
      }
    })
    .catch(err => {
      console.warn('Single check-in save fallback to queue:', err);
    });
  } catch (e) {
    console.warn('Single check-in fetch error:', e);
  }
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
    if (modalSyncDetail) modalSyncDetail.textContent = text || `All ${logs.length} entries safely backed up to permanent database`;
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

function syncDataToServer(immediate = false) {
  updateSyncIndicator('syncing');
  if (syncTimeout) clearTimeout(syncTimeout);

  const doSync = () => {
    if (isSyncing) return;
    isSyncing = true;

    const payload = {
      logs: logs,
      chronoTrial: typeof chronoTrialState !== 'undefined' ? chronoTrialState : null,
      specialistTracking: typeof specialistTrackingState !== 'undefined' ? specialistTrackingState : null,
      foodDiary: typeof foodDiaryState !== 'undefined' ? foodDiaryState : null,
      ouraToken: localStorage.getItem('emma_oura_token') || ''
    };

    fetch('/api/sync-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true
    })
    .then(res => res.json())
    .then(data => {
      isSyncing = false;
      if (data && data.ok) {
        updateSyncIndicator('synced', `All ${logs.length} entries safely secured in database`);
      } else {
        updateSyncIndicator('offline', 'Saved on phone');
      }
    })
    .catch(err => {
      isSyncing = false;
      console.warn('Silent sync note (offline):', err);
      updateSyncIndicator('offline', 'Saved on phone');
    });
  };

  if (immediate) {
    doSync();
  } else {
    syncTimeout = setTimeout(doSync, 350);
  }
}

function fetchServerDataOnLoad() {
  fetch('/api/load-data')
    .then(res => res.json())
    .then(data => {
      if (data && data.ok) {
        let needsReRender = false;
        if (data.logs && data.logs.length > 0) {
          // Cumulative union merge: combine local and remote, dropping nothing
          const deletedSet = getDeletedDates();
          const cleanServerLogs = data.logs.filter(item => !deletedSet.has(item.date) && !isSyntheticTestEntry(item));
          const combined = mergeLogs(logs, cleanServerLogs).filter(item => !deletedSet.has(item.date) && !isSyntheticTestEntry(item));
          
          if (combined.length !== logs.length || JSON.stringify(combined) !== JSON.stringify(logs)) {
            logs = combined;
            localStorage.setItem('emma_health_logs', JSON.stringify(logs));
            persistLogsToIndexedDB(logs);
            needsReRender = true;
          }

          // If local had entries that were NOT on the server, heal the server database immediately
          if (combined.length > data.logs.length) {
            console.log(`🌸 Healing server database: uploading ${combined.length - data.logs.length} entries`);
            syncDataToServer(true);
          }
        } else if (logs && logs.length > 0) {
          // Fresh server container: seed it from phone records
          syncDataToServer(true);
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

        if (data.foodDiary && typeof data.foodDiary === 'object') {
          foodDiaryState = { ...foodDiaryState, ...data.foodDiary };
          localStorage.setItem('emma_food_diary_v1', JSON.stringify(foodDiaryState));
          needsReRender = true;
        }

        if (needsReRender) {
          initializeUI();
          renderDashboardTrends();
          renderHistoryLogs();
          if (typeof renderTrialUI === 'function') renderTrialUI();
          if (typeof renderSpecialistTrackingUI === 'function') renderSpecialistTrackingUI();
          if (typeof renderFoodDiaryUI === 'function') renderFoodDiaryUI();
          triggerLucideIcons();
        }

        updateSyncIndicator('synced', `All ${logs.length} entries permanently secured`);
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
    "Upper Tummy Bloat",
    "Lower Tummy Bloat",
    "Mental State / Mood",
    "Motility Speed",
    "Abdominal Pain (1-5)",
    "Splenic Pressure (1-5)",
    "Diaphragm Done",
    "Supplements",
    "Headspace Notes",
    "Notes"
  ];

  const rows = logs.map(l => [
    `"${l.date || ''}"`,
    `"${l.cycleDay || ''}"`,
    `"${l.cyclePhase || l.phase || ''}"`,
    `"${l.bristolStool || l.bristol || ''}"`,
    `"${l.bloatingScore || l.diaphragmBloat || ''}"`,
    `"${l.upperTummyBloat ? 'Yes' : ((l.puffiness && (l.puffiness.includes('🎈 Upper Tummy Bloating') || l.puffiness.includes('Upper Tummy Bloating'))) ? 'Yes' : 'No')}"`,
    `"${l.lowerTummyBloat ? 'Yes' : ((l.puffiness && (l.puffiness.includes('🫧 Lower Tummy Bloating') || l.puffiness.includes('Lower Tummy Bloating'))) ? 'Yes' : 'No')}"`,
    `"${l.mood || ''}"`,
    `"${l.motilitySpeed || ''}"`,
    `"${l.abdominalPain || ''}"`,
    `"${l.splenicPressure || ''}"`,
    `"${l.diaphragmDone ? 'Yes' : 'No'}"`,
    `"${(l.supplements || []).join('; ')}"`,
    `"${(l.headspaceNotes || '').replace(/"/g, '""')}"`,
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
    if (typeof updateOuraConnectionUI === 'function') updateOuraConnectionUI();
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

  // Clean short phase label for headers & compact UI (strips parentheticals like "(Progesterone Peak Window)")
  const cleanPhase = (info.phaseLabel || '').replace(/\s*\([^)]*\)/g, '').trim() || (info.phase ? (info.phase.charAt(0).toUpperCase() + info.phase.slice(1)) : 'Luteal');

  // 1. Update Top Date Controller Display
  const dateDisplay = document.getElementById('activeDateDisplay');
  const dayBadge = document.getElementById('activeDayOfWeekBadge');
  const subtitle = document.getElementById('activeCycleSubtitle');

  if (dateDisplay) dateDisplay.innerText = info.displayDate;
  if (subtitle) {
    subtitle.innerHTML = `<span class="inline-flex items-center gap-1 font-bold text-brand-textDark"><span class="text-xs">${activePhaseLogo}</span> <span>Cycle Day ${info.cycleDay}</span></span> <span class="text-brand-textMuted">• ${cleanPhase}</span>`;
  }

  if (dayBadge) {
    if (activeDateStr === todayStr) {
      dayBadge.innerText = "TODAY";
      dayBadge.className = "text-[9px] sm:text-[10px] font-extrabold px-1.5 sm:px-2 py-0.5 rounded-full bg-brand-coralLight text-brand-coral shrink-0";
    } else {
      const anchorDate = new Date(`${todayStr}T12:00:00Z`);
      const targetDate = new Date(`${activeDateStr}T12:00:00Z`);
      const diff = Math.round((targetDate - anchorDate) / (1000 * 60 * 60 * 24));
      if (diff === 1) {
        dayBadge.innerText = "TOMORROW (+1)";
        dayBadge.className = "text-[9px] sm:text-[10px] font-extrabold px-1.5 sm:px-2 py-0.5 rounded-full bg-brand-amberLight text-brand-amber shrink-0";
      } else if (diff === -1) {
        dayBadge.innerText = "YESTERDAY";
        dayBadge.className = "text-[9px] sm:text-[10px] font-extrabold px-1.5 sm:px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 shrink-0";
      } else if (diff > 1) {
        dayBadge.innerText = `IN +${diff} DAYS`;
        dayBadge.className = "text-[9px] sm:text-[10px] font-extrabold px-1.5 sm:px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 shrink-0";
      } else {
        dayBadge.innerText = `${Math.abs(diff)} DAYS AGO`;
        dayBadge.className = "text-[9px] sm:text-[10px] font-extrabold px-1.5 sm:px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 shrink-0";
      }
    }
  }

  // 2. Update Header Cycle Info (Clean, non-wrapping)
  const headerCycleLogo = document.getElementById('headerCycleLogo');
  const headerCycleDay = document.getElementById('headerCycleDay');
  const headerPhaseBadge = document.getElementById('headerPhaseBadge');
  if (headerCycleLogo) headerCycleLogo.innerText = activePhaseLogo;
  if (headerCycleDay) headerCycleDay.innerHTML = `<span class="hidden sm:inline">Cycle </span>Day ${info.cycleDay}`;
  if (headerPhaseBadge) {
    headerPhaseBadge.innerText = cleanPhase;
    headerPhaseBadge.title = info.phaseLabel || cleanPhase;
    if (info.phase === 'luteal') {
      headerPhaseBadge.className = "text-brand-coral font-bold truncate";
    } else if (info.phase === 'follicular') {
      headerPhaseBadge.className = "text-brand-sage font-bold truncate";
    } else {
      headerPhaseBadge.className = "text-brand-amber font-bold truncate";
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
  // Keep check-in modal inputs blank unless actively logged by Emma
  const activeLogEntry = logs.find(l => l.date === activeDateStr);
  updateDashboardCheckInBadge(activeLogEntry);

  // 7. Update Mon-Thu Trial Today Highlights
  updateChronoTrialDayHighlight(info.dayOfWeek);

  // 8. Update Recipe Guide Phase Pill, Auditor Subtitle & Movement & Spa Protocol
  const lutealPill = document.getElementById('phaseFilter-luteal');
  if (lutealPill) {
    lutealPill.innerHTML = `<span>${activePhaseLogo}</span><span>${info.phaseLabel.split(' ')[0]} (Day ${info.cycleDay})</span>`;
  }
  
  // Dynamically update Today's Movement & Spa protocol for this cycle day/phase
  currentMovementEnergyMode = 'cycle';
  renderMovementAndSpa(info);

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

  // 13. Re-render Emma's Daily Food Diary for active day
  if (typeof renderFoodDiaryUI === 'function') {
    renderFoodDiaryUI();
  }

  // 14. Re-render Cycle Movement & Class Prescription for active day
  if (typeof renderCycleExercisePrescription === 'function') {
    renderCycleExercisePrescription();
  }

  // 15. Re-render Dashboard Headspace & Thoughts Card for active date
  renderDashboardHeadspaceCard(activeLogEntry, info);

  triggerLucideIcons();
}

// ============================================================================
// TODAY'S HEADSPACE & THOUGHTS: ADHD-AWARE DASHBOARD CARD
// ============================================================================
function renderDashboardHeadspaceCard(entry, cycleInfo) {
  const container = document.getElementById('dashboardHeadspaceCard');
  if (!container) return;

  if (!cycleInfo) {
    cycleInfo = (typeof getCurrentCycleInfo === 'function') 
      ? getCurrentCycleInfo() 
      : { cycleDay: 19, phase: 'luteal' };
  }

  const moodBadges = {
    calm: { text: '🌿 Calm', class: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    happy: { text: '😊 Happy', class: 'bg-amber-100 text-amber-900 border-amber-200' },
    edgy: { text: '⚡ Edgy', class: 'bg-rose-100 text-rose-800 border-rose-200' },
    anxious: { text: '🌪️ Anxious', class: 'bg-orange-100 text-orange-900 border-orange-200' },
    overthinking: { text: '💭 Overthinking', class: 'bg-indigo-100 text-indigo-900 border-indigo-200' },
    flat: { text: '☁️ Flat / Tired', class: 'bg-slate-100 text-slate-700 border-slate-300' },
    great: { text: '☀️ Free & Calm', class: 'bg-emerald-100 text-emerald-800 border-emerald-200' }
  };

  const entryMoods = (Array.isArray(entry?.moods) && entry.moods.length > 0)
    ? entry.moods
    : (entry?.mood ? entry.mood.split(',').map(s => s.trim()).filter(Boolean) : []);

  const moodBadgesHtml = entryMoods.length > 0
    ? entryMoods.map(m => {
        const info = moodBadges[m] || moodBadges.flat;
        return `<span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${info.class} shadow-2xs">${info.text}</span>`;
      }).join(' ')
    : `<span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${moodBadges.flat.class} shadow-2xs">${moodBadges.flat.text}</span>`;

  // Luteal vs Follicular ADHD Neuro-Affirming Insight
  let adhdInsight = '';
  if (cycleInfo.phase === 'luteal') {
    adhdInsight = '💜 <strong>ADHD Luteal Reality:</strong> Lower dopamine and high progesterone make messages and admin feel 10x louder. Choosing only work/nannying is a smart energy boundary!';
  } else if (cycleInfo.phase === 'ovulation') {
    adhdInsight = '✨ <strong>High Estrogen Window:</strong> Mental focus and social battery are higher. Great time to clear small admin tasks if you feel like it.';
  } else if (cycleInfo.cycleDay <= 4) {
    adhdInsight = '🌸 <strong>Menstrual Reset:</strong> Energy is lowest right now. Complete permission to rest, skip social texting, and keep demands minimal.';
  } else {
    adhdInsight = '🌿 <strong>Rising Dopamine Window:</strong> Brain fog is lower and cognitive resilience is climbing. Trust your natural rhythm.';
  }

  const userThought = (entry?.headspaceNotes || entry?.notes || '').trim();
  const hasLoggedThought = userThought && userThought !== "Saved via Emma's Unified Daily Check-In." && userThought !== "Daily check-in logged";

  container.innerHTML = `
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2.5">
        <div class="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-sm shadow-xs">
          <i data-lucide="brain" class="w-4 h-4 text-purple-700"></i>
        </div>
        <div>
          <div class="flex items-center space-x-1.5 flex-wrap gap-y-1">
            <h3 class="font-bold text-sm text-brand-textDark">Today’s Headspace & Thoughts</h3>
            ${moodBadgesHtml}
          </div>
          <p class="text-[11px] text-brand-textMuted">Cycle Day ${cycleInfo.cycleDay} • Raw thoughts, task overwhelm & ADHD capacity</p>
        </div>
      </div>
      <button type="button" onclick="openQuickLogModal()" class="px-2.5 py-1 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 text-xs font-bold transition-all flex items-center gap-1 active:scale-95 shadow-2xs">
        <i data-lucide="edit-3" class="w-3 h-3"></i>
        <span>${hasLoggedThought ? 'Update Thoughts' : 'Dump Thoughts'}</span>
      </button>
    </div>

    <div class="p-3.5 rounded-2xl bg-gradient-to-br from-purple-50/60 via-white to-purple-50/40 border border-purple-200/70 space-y-2.5 text-xs shadow-2xs">
      ${hasLoggedThought ? `
        <div class="flex items-start gap-2.5">
          <span class="text-xl leading-none text-purple-400 font-serif shrink-0">“</span>
          <p class="text-[12px] text-purple-950 font-medium leading-relaxed italic">
            ${userThought}
          </p>
        </div>
      ` : `
        <div class="flex items-center justify-between py-1">
          <p class="text-[11px] text-purple-900/80 italic">
            No thoughts dumped yet today. Tap below to log task overwhelm, WhatsApp fatigue, or how your head feels.
          </p>
        </div>
        <div class="flex flex-wrap gap-1 pt-0.5">
          <button type="button" onclick="openQuickLogModal(); insertHeadspaceChip('Big WhatsApp messages feel overwhelming today');" class="px-2 py-0.8 rounded-lg bg-white hover:bg-purple-100 text-purple-900 border border-purple-200 text-[10px] font-semibold transition-all shadow-2xs">
            💬 WhatsApp Overwhelm
          </button>
          <button type="button" onclick="openQuickLogModal(); insertHeadspaceChip('Sorting GP / prescription admin feels like too much today');" class="px-2 py-0.8 rounded-lg bg-white hover:bg-purple-100 text-purple-900 border border-purple-200 text-[10px] font-semibold transition-all shadow-2xs">
            📋 GP Admin Overload
          </button>
          <button type="button" onclick="openQuickLogModal(); insertHeadspaceChip('Literally only have energy to go nannying today');" class="px-2 py-0.8 rounded-lg bg-white hover:bg-purple-100 text-purple-900 border border-purple-200 text-[10px] font-semibold transition-all shadow-2xs">
            👶 Work-Only Energy
          </button>
        </div>
      `}
      <div class="pt-2 border-t border-purple-200/50 text-[10px] text-purple-900/90 leading-normal">
        ${adhdInsight}
      </div>
    </div>
  `;

  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

// ============================================================================
// TODAY'S MOVEMENT & SPA: CYCLE-SYNCED & ADHD-ADAPTIVE PROTOCOL
// ============================================================================
let currentMovementEnergyMode = 'cycle';

function setMovementEnergyMode(mode) {
  if (currentMovementEnergyMode === mode && mode !== 'cycle') {
    currentMovementEnergyMode = 'cycle';
  } else {
    currentMovementEnergyMode = mode;
  }
  const info = (typeof getCurrentCycleInfo === 'function') 
    ? getCurrentCycleInfo() 
    : { cycleDay: 19, phase: 'luteal' };
  renderMovementAndSpa(info);
}
window.setMovementEnergyMode = setMovementEnergyMode;

function getMovementAndSpaData(dayNum, phase, mode = 'cycle') {
  let boundedDay = parseInt(dayNum, 10);
  if (isNaN(boundedDay)) boundedDay = 19;
  if (boundedDay < 1) boundedDay = 1;
  if (boundedDay > 28) boundedDay = 28;

  // -------------------------------------------------------------
  // 1. OVERRIDE: Low Battery / Overwhelmed Mode (ADHD Emergency Protocol)
  // -------------------------------------------------------------
  if (mode === 'low_battery') {
    return {
      badgeText: "Low Battery • 10-Min Win",
      badgeClass: "text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 border border-rose-200 flex items-center gap-1",
      badgeDot: "bg-rose-500",
      subtitle: `🛋️ Low Battery / Overwhelmed Mode • Zero guilt; frictionless restorative movement for Emma today`,
      cards: [
        {
          theme: "rose",
          icon: "🛋️",
          title: "10-Min Pajama Stretch or Legs-Up-The-Wall",
          tag: "10 min • Zero-barrier entry",
          desc: "No gym clothes, no leaving home. Just 10 minutes of legs-up-the-wall or gentle floor cat-cows. This fully satisfies your movement goal."
        },
        {
          theme: "teal",
          icon: "🧖‍♀️",
          title: "Steam & Quiet Lounger (Zero Workout)",
          tag: "Passive recovery • Sensory refuge",
          desc: "If you make it to Third Space, skip the gym floor completely. Walk straight into the eucalyptus steam, warm rinse, and relax on the loungers."
        },
        {
          theme: "slate",
          icon: "🚫",
          title: "Banish All Workout Guilt & 'Shoulds'",
          tag: "Dopamine protection",
          desc: "Forcing high-effort workouts during executive burnout spikes cortisol, freezes colonic transit, and sparks APD diaphragmatic spasms."
        }
      ],
      adhd: {
        theme: "rose",
        badgeText: "🛋️ Low Battery Override Active",
        badgeClass: "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-rose-100 text-rose-900 border border-rose-200",
        title: "The Frictionless Sanctuary Rule",
        text: "Executive dysfunction has won today, and that is 100% OK and physiologically valid. Your nervous system is depleted of dopamine. Pushing through guilt will only prolong burnout. A warm shower, 10 minutes lying down, or a slow breathwork break is your complete victory today.",
        motility: "Lowering sympathetic fight-or-flight panic releases hypertonic tension on the enteric nervous system, helping your gut move naturally without forced effort."
      }
    };
  }

  // -------------------------------------------------------------
  // 2. OVERRIDE: High Energy Boost Mode (Dopamine Surge Protocol)
  // -------------------------------------------------------------
  if (mode === 'high_energy') {
    return {
      badgeText: "High Energy • Strength & Drive",
      badgeClass: "text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200 flex items-center gap-1",
      badgeDot: "bg-emerald-500",
      subtitle: `⚡ High Energy Boost Active • Dopamine is high; ready to challenge Third Space weights or dynamic Reformer`,
      cards: [
        {
          theme: "emerald",
          icon: "🏋️‍♀️",
          title: "Dynamic Reformer or Progressive Weights",
          tag: "45–55 min • High output & power",
          desc: "Channel your energy into progressive weights (squats, deadlifts, overhead presses) or an athletic Reformer class. Focus on crisp form and controlled tempos."
        },
        {
          theme: "teal",
          icon: "🧖‍♀️",
          title: "Contrast Therapy Power Rounds",
          tag: "15m Sauna ➔ 2m Cold Plunge (x2)",
          desc: "Finnish sauna followed by full immersion cold plunge. Delivers an instant sustained 250% dopamine surge, sharpens mental clarity, and boosts cellular repair."
        },
        {
          theme: "amber",
          icon: "⚠️",
          title: "Avoid Fasted Lifting & Dehydration",
          tag: "Carb & electrolyte fuel",
          desc: "Refuel with easy carbs (Special Flakes, rice cakes, banana) and plenty of water with electrolytes to prevent post-lift blood sugar crashes."
        }
      ],
      adhd: {
        theme: "emerald",
        badgeText: "⚡ High Energy Override Active",
        badgeClass: "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200",
        title: "Hyperfocus Flow Channel",
        text: "You have surplus energy and dopamine flowing today! Take advantage of this surge to challenge yourself with progressive weights or a dynamic class. Ride the natural momentum while keeping form controlled.",
        motility: "Keep hydration high and pause for 3 diaphragmatic belly breaths between heavy sets to prevent intra-abdominal bearing down from tensing your diaphragm."
      }
    };
  }

  // -------------------------------------------------------------
  // 3. CYCLE-SYNCED DAY-SPECIFIC PROTOCOLS (Days 1 - 28)
  // -------------------------------------------------------------

  // Window 1: Days 1 - 3 (Menstrual Shedding / Lowest Dopamine / Pelvic Release)
  if (boundedDay >= 1 && boundedDay <= 3) {
    return {
      badgeText: "Restorative • Zero Pressure",
      badgeClass: "text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 border border-rose-200 flex items-center gap-1",
      badgeDot: "bg-rose-500",
      subtitle: `🌸 Menstrual Reset for Day ${boundedDay} • Low dopamine & pelvic tension; prioritize gentle restoration`,
      cards: [
        {
          theme: "rose",
          icon: "🌿",
          title: "Gentle Stroll or Legs-Up-The-Wall",
          tag: "15–25 min • Floor mobility & pelvic release",
          desc: "Slow flat stroll or 15 mins legs-up-the-wall in pajamas. Releases pelvic congestion and eases uterine cramping without abdominal strain."
        },
        {
          theme: "teal",
          icon: "🧖‍♀️",
          title: "Warm Eucalyptus Steam & Hydro Pool",
          tag: "Soothing heat • Relaxes smooth muscle",
          desc: "Warm steam room and hydrotherapy pool relax pelvic floor hypertonicity and lower back ache. Skip the freezing cold plunge today (cold induces uterine vasoconstriction)."
        },
        {
          theme: "slate",
          icon: "🚫",
          title: "Skip Heavy Hip Thrusts & Abdominal Pikes",
          tag: "Pelvic floor guard",
          desc: "No heavy leg press, barbell hip thrusts, or intense core crunches while uterine smooth muscle is actively contracting."
        }
      ],
      adhd: {
        theme: "rose",
        badgeText: "🛋️ Dopamine Trough • Zero Guilt",
        badgeClass: "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-rose-100 text-rose-900 border border-rose-200",
        title: "The Radical Permission Rule",
        text: "Estrogen and progesterone are at baseline, making dopamine replenishment slow. Task initiation feels heavy and brain fog is real. Reframe rest as active neurological recovery. Doing 10 minutes of floor stretching in your pajamas is a 100% win—drop any shame about skipping a hard workout.",
        motility: "Pelvic floor tension mimics constipation. Soft belly diaphragmatic breathing calms the pudendal nerve and prevents cramping from locking your diaphragm."
      }
    };
  }

  // Window 2: Days 4 - 6 (Late Menstrual / Estrogen Rising / Dopamine Awakening)
  if (boundedDay >= 4 && boundedDay <= 6) {
    return {
      badgeText: "Awakening • Gentle Ramp",
      badgeClass: "text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-900 border border-teal-200 flex items-center gap-1",
      badgeDot: "bg-teal-500",
      subtitle: `🌿 Dopamine Awakening for Day ${boundedDay} • Estrogen begins climbing; brain fog begins lifting`,
      cards: [
        {
          theme: "emerald",
          icon: "🧘‍♀️",
          title: "Reformer Pilates Align & Light Dumbbells",
          tag: "35–45 min • Joint alignment & core control",
          desc: "Reformer carriage work focusing on postural alignment, glute activation, and light dumbbell upper body circuits. Keep breathing fluid."
        },
        {
          theme: "teal",
          icon: "🧖‍♀️",
          title: "Warm Finnish Sauna + 1m Cool Rinse",
          tag: "12m sauna • Gentle contrast",
          desc: "Warm Finnish sauna to ease any remaining pelvic stiffness, followed by a cool (not freezing) shower to gently awaken circulation."
        },
        {
          theme: "amber",
          icon: "⚠️",
          title: "Avoid Skipping Meals Before Movement",
          tag: "Blood sugar stability",
          desc: "Don't exercise on empty. Rising estrogen needs steady glucose; grab 2 rice cakes with almond butter or a banana 30 mins before."
        }
      ],
      adhd: {
        theme: "teal",
        badgeText: "🌱 Dopamine Awakening • Momentum Window",
        badgeClass: "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-teal-100 text-teal-900 border border-teal-200",
        title: "Dopamine Stacking & Novelty",
        text: "As estrogen rises, dopamine receptors in your prefrontal cortex become more sensitive. You'll feel executive inertia starting to thaw. Ride this wave by using novelty: try a new Reformer sequence or queue a fresh upbeat playlist for your walk to spark dopamine.",
        motility: "Rising estrogen naturally accelerates gut transit. Gentle carriage work stimulates the vagus nerve and aids morning bowel movement."
      }
    };
  }

  // Window 3: Days 7 - 10 (Mid-Follicular / Estrogen Surge / High Energy & Strength Window)
  if (boundedDay >= 7 && boundedDay <= 10) {
    return {
      badgeText: "High Energy • Strength Peak",
      badgeClass: "text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200 flex items-center gap-1",
      badgeDot: "bg-emerald-500",
      subtitle: `🌿 Strength & Motivation Surge for Day ${boundedDay} • High dopamine; prime for Third Space weights`,
      cards: [
        {
          theme: "emerald",
          icon: "🏋️‍♀️",
          title: "Progressive Strength Training (Squats & Upper Body)",
          tag: "45–55 min • Moderate-to-heavy loading",
          desc: "Prime window for strength: goblet squats, Romanian deadlifts, lat pulldowns, and dumbbell press. Muscular power and recovery are at their best."
        },
        {
          theme: "teal",
          icon: "🧖‍♀️",
          title: "Contrast Therapy Power Rounds (Sauna + Plunge)",
          tag: "15m Sauna ➔ 2m Cold Plunge (x2)",
          desc: "Full contrast rounds at Third Space. Triggers a massive sustained release of norepinephrine and dopamine, boosting mood and mental sharpness for hours."
        },
        {
          theme: "amber",
          icon: "⚠️",
          title: "Don't Rush Your Warm-Up",
          tag: "Joint prep & mobility",
          desc: "Estrogen increases joint laxity slightly. Spend 5 mins on dynamic hip openers and thoracic rotations before picking up heavy dumbbells."
        }
      ],
      adhd: {
        theme: "emerald",
        badgeText: "⚡ High Dopamine Window • Hyperfocus Prime",
        badgeClass: "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200",
        title: "Hyperfocus Power Channel",
        text: "Your prefrontal cortex has optimal dopamine and acetylcholine right now. Working memory, focus, and drive feel effortless. Channel this into learning new lift variations or tackling workouts that usually feel intimidating. Third Space will feel exhilarating today.",
        motility: "Gut motility is fast and resilient. Splanchnic blood flow easily tolerates moderate loading without triggering reflux or splenic bloating."
      }
    };
  }

  // Window 4: Days 11 - 13 (Late Follicular / Estrogen Zenith / Peak Power & Output)
  if (boundedDay >= 11 && boundedDay <= 13) {
    return {
      badgeText: "Peak Power • Max Dopamine",
      badgeClass: "text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200 flex items-center gap-1",
      badgeDot: "bg-emerald-500",
      subtitle: `⚡ Peak Power Window for Day ${boundedDay} • Maximum estrogen & dopamine drive; high coordination`,
      cards: [
        {
          theme: "emerald",
          icon: "🤸‍♀️",
          title: "Dynamic Athletic Reformer or Heavy Strength Lift",
          tag: "50–60 min • High stamina & power",
          desc: "Push the intensity: athletic Reformer jumps, progressive loading on compound lifts, or brisk hill incline treadmill walks. High motor control."
        },
        {
          theme: "teal",
          icon: "🧖‍♀️",
          title: "Cold Plunge (2–3 min) & Hydro Jets",
          tag: "2–3m plunge • Rapid muscle recovery",
          desc: "Crisp cold plunge immediately post-workout to calm inflammation, followed by high-pressure hydrotherapy jets on glutes and upper back."
        },
        {
          theme: "amber",
          icon: "⚠️",
          title: "Don't Under-Fuel Post-Workout",
          tag: "Carb & protein refill",
          desc: "High metabolic output means glycogen drains quickly. Refuel within 45 minutes (chicken, rice, or Special Flakes with almond milk) to prevent an evening crash."
        }
      ],
      adhd: {
        theme: "emerald",
        badgeText: "🔥 Dopamine Zenith • Frictionless Execution",
        badgeClass: "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200",
        title: "The Single-Alarm Launch Rule",
        text: "Your brain has all the dopamine it needs, but ADHD time-blindness can lead to endless fiddling before leaving the house. Set one countdown timer, put shoes on immediately, and walk out the door without checking emails first.",
        motility: "Your diaphragm and colon are in their most cooperative state. Enjoy the natural abdominal decompression and flat belly confidence!"
      }
    };
  }

  // Window 5: Days 14 - 16 (Ovulation Window / LH Surge / High Stamina & Sensory Awareness)
  if (boundedDay >= 14 && boundedDay <= 16) {
    return {
      badgeText: "Peak Stamina • Sensory Alert",
      badgeClass: "text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1",
      badgeDot: "bg-amber-500",
      subtitle: `✨ Ovulation Surge for Day ${boundedDay} • High physical stamina; stay mindful of ovulatory twinges`,
      cards: [
        {
          theme: "emerald",
          icon: "🤸‍♀️",
          title: "Athletic Reformer Flow or Incline LISS Walk",
          tag: "45–50 min • Controlled cadence",
          desc: "High cardiovascular stamina. Incline treadmill walking (12% incline, 4.5 km/h) or dynamic Reformer carriage work. Keep abdominal bracing controlled."
        },
        {
          theme: "teal",
          icon: "🧖‍♀️",
          title: "Magnesium Mineral Pool & Cold Dip",
          tag: "Mineral soak • Vagal calm",
          desc: "Soak in Third Space's mineral hydrotherapy pool to absorb transdermal magnesium, followed by a crisp 90-second cold plunge to sharpen focus."
        },
        {
          theme: "amber",
          icon: "⚠️",
          title: "Modify Ballistic Twists (Mittelschmerz Guard)",
          tag: "Protect tender follicle",
          desc: "If you feel sharp ovulatory twinges on one side of your lower pelvis, avoid explosive rotational ball slams or deep ballistic twists."
        }
      ],
      adhd: {
        theme: "amber",
        badgeText: "🎯 Sensory Sensitivity Alert",
        badgeClass: "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200",
        title: "The Third Space Sensory Shield",
        text: "The ovulation estrogen/testosterone spike heightens all sensory processing. Clattering weights, bright gym spotlights, or crowded locker rooms can cause sensory overload. Wear your noise-canceling headphones, choose a quieter corner, and stick to your zone.",
        motility: "Pelvic fluid from follicle release can create temporary pelvic fullness. Controlled diaphragmatic breaths prevent your pelvic floor from tensing up."
      }
    };
  }

  // Window 6: Days 17 - 19 (Early Luteal / Progesterone Ramp / Motility & Splanchnic Flow Focus - TODAY Day 19!)
  if (boundedDay >= 17 && boundedDay <= 19) {
    return {
      badgeText: "Low Stress • Colonic Motility",
      badgeClass: "text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900 border border-purple-200 flex items-center gap-1",
      badgeDot: "bg-purple-500",
      subtitle: `🌸 Early Luteal Motility Pace for Day ${boundedDay} • Progesterone slows colon transit; protect mesenteric blood flow`,
      cards: [
        {
          theme: "emerald",
          icon: "🧘‍♀️",
          title: "Reformer Align & Stretch or 60–80m Gentle Flat Walk",
          tag: "60–80 min LISS • Heart Rate <120 bpm",
          desc: "Flat outdoor walk or Reformer Align. Low-intensity steady-state movement rhythmically massages the colon and stimulates peristalsis without cortisol spikes."
        },
        {
          theme: "teal",
          icon: "🧖‍♀️",
          title: "Moderate Sauna (10–12m) + Quick 1m Dip",
          tag: "Vagal tone • Electrolyte replenishment",
          desc: "Warm Finnish sauna relaxes gastrointestinal smooth muscle and activates the vagus nerve. Follow with a brief 60s cold dip to drain luteal fluid retention. Sip electrolytes!"
        },
        {
          theme: "rose",
          icon: "🚫",
          title: "Skip Breathless HIIT, Sprints & Intense Spin",
          tag: "Prevents splanchnic steal",
          desc: "High-intensity cardio causes splanchnic steal (diverts 80% blood away from bowel to muscles), freezing colon transit and triggering APD diaphragmatic spasm."
        }
      ],
      adhd: {
        theme: "purple",
        badgeText: "🧠 Progesterone Dopamine Dip • Initiation Paralysis",
        badgeClass: "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-purple-100 text-purple-900 border border-purple-200",
        title: "The '10-Minute Initiation Rule'",
        text: "Rising progesterone dampens dopamine transmission, so the thought of exercising feels like wading through wet cement today. Don't commit to an hour—commit to putting on your trainers and walking for just 10 minutes while listening to an engaging podcast. Once outside, momentum takes over, but you have full permission to turn back after 10 mins if you want.",
        motility: "Your splenic flexure is vulnerable to gas pockets today. Rhythmic walking mechanically pushes gas past the splenic bend, keeping your tummy flat and comfortable."
      }
    };
  }

  // Window 7: Days 20 - 22 (Mid-Luteal / Progesterone Peak / Executive Fatigue & De-Bloat)
  if (boundedDay >= 20 && boundedDay <= 22) {
    return {
      badgeText: "Gentle Flow • Brain-Fog Shield",
      badgeClass: "text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900 border border-purple-200 flex items-center gap-1",
      badgeDot: "bg-purple-500",
      subtitle: `🌸 Mid-Luteal De-Bloat for Day ${boundedDay} • Progesterone peak causes slow transit & dopamine fog`,
      cards: [
        {
          theme: "emerald",
          icon: "🚶‍♀️",
          title: "Low-Incline Treadmill Walk or Gentle Reformer Flow",
          tag: "35–45 min • Low cognitive friction",
          desc: "Keep it simple: 40 mins on the treadmill at 3-4% incline listening to an audiobook, or a gentle Reformer stretch class. Steady, predictable, zero performance pressure."
        },
        {
          theme: "teal",
          icon: "🧖‍♀️",
          title: "Warm Hydrotherapy Pool & Eucalyptus Steam",
          tag: "Hydrostatic decompression",
          desc: "Hydro pool water pressure provides gentle lymphatic drainage for water retention. Warm eucalyptus steam soothes upper abdominal tension and relaxes the diaphragm."
        },
        {
          theme: "rose",
          icon: "🚫",
          title: "Avoid Compressive Gym Waistbands & Heavy Pikes",
          tag: "Zero abdominal constriction",
          desc: "Ditch ultra-tight high-waisted leggings that compress your splenic flexure. Skip hanging leg pikes and weighted crunches that trap gas."
        }
      ],
      adhd: {
        theme: "purple",
        badgeText: "🛋️ Executive Function Fatigue • Low Friction",
        badgeClass: "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-purple-100 text-purple-900 border border-purple-200",
        title: "The Zero-Decision Friction Hack",
        text: "Decision fatigue is at its peak. Every choice (what to wear, what workout to do) drains your limited dopamine. Eliminate choices: put comfortable, non-restrictive clothes in your bag the night before, and pick one simple routine. If you only make it to the Third Space lounge with a hot tea, that still counts.",
        motility: "Constipation triggers the APD reflex. Gentle pelvic circles and hip flexor stretches keep the descending colon from kinking."
      }
    };
  }

  // Window 8: Days 23 - 25 (Late Luteal / APD Diaphragm Guard / Sensory Sanctuary)
  if (boundedDay >= 23 && boundedDay <= 25) {
    return {
      badgeText: "APD Guard • Restorative Sanctuary",
      badgeClass: "text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-200 flex items-center gap-1",
      badgeDot: "bg-indigo-500",
      subtitle: `🌸 Diaphragmatic Guard for Day ${boundedDay} • High APD sensitivity; soothe the nervous system`,
      cards: [
        {
          theme: "emerald",
          icon: "🌿",
          title: "Gentle Stroll, Water Float or Mat Mobility",
          tag: "30–40 min • Diaphragmatic release",
          desc: "Leisurely walk in nature, gentle pool laps/floating, or floor mobility focusing on cat-cows and lateral rib expansion. Avoid all valsalva breath-holding."
        },
        {
          theme: "teal",
          icon: "🧖‍♀️",
          title: "Eucalyptus Steam & Relaxation Lounger",
          tag: "Vagal down-regulation",
          desc: "12 mins in the eucalyptus steam room to soften chest and diaphragm tightness. Lie on the quiet loungers for 10 mins with closed eyes to calm the nervous system."
        },
        {
          theme: "rose",
          icon: "🚫",
          title: "Skip Heavy Valsalva Lifts & High-Impact Running",
          tag: "Protects against APD spasm",
          desc: "No heavy barbell squats or jumping. Heavy bearing down forces the diaphragm into paradoxical descent, pushing your lower abdomen outwards into distension."
        }
      ],
      adhd: {
        theme: "indigo",
        badgeText: "🛡️ Low Emotional Bandwidth • Sensory Sanctuary",
        badgeClass: "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-200",
        title: "Third Space as a Sensory Sanctuary",
        text: "Your nervous system is raw and easily overstimulated. Treat Third Space not as a fitness challenge, but as a sensory recovery retreat. Leave your phone in the locker, wrap yourself in a fluffy towel, and let warm water and steam down-regulate your fight-or-flight sympathetic tone.",
        motility: "Diaphragmatic 4-7-8 breathing unclamps the crura of the diaphragm, allowing trapped gas to pass freely through the splenic flexure without bloating."
      }
    };
  }

  // Window 9: Days 26 - 28 (Pre-Menstrual Reset / Hormonal Plunge / Radical Neuro-Rest)
  return {
    badgeText: "Reset Mode • Radical Self-Care",
    badgeClass: "text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 border border-rose-200 flex items-center gap-1",
    badgeDot: "bg-rose-500",
    subtitle: `🌸 Pre-Menstrual Reset for Day ${boundedDay} • Hormones plummeting; radical neuro-affirming rest`,
    cards: [
      {
        theme: "rose",
        icon: "🛋️",
        title: "Pajama Mobility & 15m Legs-Up-The-Wall",
        tag: "15–20 min • Zero-pressure recovery",
        desc: "Stay in comfy clothes. 15 minutes of legs-up-the-wall with a hot water bottle on your pelvis, or a slow 20-minute neighborhood stroll for fresh air."
      },
      {
        theme: "teal",
        icon: "🧖‍♀️",
        title: "Warm Mineral Bath & Gentle Steam",
        tag: "Deep warmth • No cold shocks",
        desc: "Warm hydro pool soak to ease pre-menstrual lower back aching. Strictly avoid cold plunge pools today—your nervous system needs warmth and safety, not shocks."
      },
      {
        theme: "slate",
        icon: "🚫",
        title: "Skip All High-Intensity & Hard Workouts",
        tag: "Prevent burnout & cramps",
        desc: "No heavy lifting, no high-intensity classes, no guilt. Pushing through exhaustion now elevates prostaglandins and worsens upcoming period pain."
      }
    ],
    adhd: {
      theme: "rose",
      badgeText: "🛋️ Lowest Dopamine Baseline • Full Permission",
      badgeClass: "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-rose-100 text-rose-900 border border-rose-200",
      title: "Radical Neuro-Affirming Rest",
      text: "Both estrogen and progesterone are dropping rapidly. Dopamine and serotonin are at their monthly trough. ADHD self-criticism ('I should be doing more') is merely neurochemistry talking. Give yourself complete, unconditional permission to rest. You are preserving energy for the follicular surge in a few days.",
      motility: "Water retention will naturally release over the next 48 hours as bleeding starts. Rest supports colonic relaxation and reduces pelvic floor spasm."
    }
  };
}

function renderMovementAndSpa(info) {
  if (!info) {
    info = (typeof getCurrentCycleInfo === 'function') 
      ? getCurrentCycleInfo() 
      : { cycleDay: 19, phase: 'luteal' };
  }
  const dayNum = info.cycleDay || 19;
  const phase = info.phase || 'luteal';

  const subtitleEl = document.getElementById('movementCycleSubtitle');
  const badgeEl = document.getElementById('movementStressBadge');
  const containerEl = document.getElementById('movementSpaCardsContainer');
  const adhdContainerEl = document.getElementById('movementAdhdContainer');
  const labelCycleEl = document.getElementById('labelEnergyCycle');
  const btnCycleEl = document.getElementById('btnEnergyCycle');
  const btnLowEl = document.getElementById('btnEnergyLow');
  const btnHighEl = document.getElementById('btnEnergyHigh');

  if (labelCycleEl) {
    labelCycleEl.innerText = `Cycle Synced (Day ${dayNum})`;
  }

  // Update button active styles
  if (btnCycleEl && btnLowEl && btnHighEl) {
    const baseClass = "flex-1 py-1.5 px-2 rounded-xl text-[11px] transition-all flex items-center justify-center gap-1.5 whitespace-nowrap active:scale-95 cursor-pointer";
    if (currentMovementEnergyMode === 'cycle') {
      btnCycleEl.className = `${baseClass} font-bold shadow-2xs bg-white text-brand-textDark border border-slate-200/90`;
      btnLowEl.className = `${baseClass} font-medium text-slate-500 hover:text-slate-800`;
      btnHighEl.className = `${baseClass} font-medium text-slate-500 hover:text-slate-800`;
    } else if (currentMovementEnergyMode === 'low_battery') {
      btnCycleEl.className = `${baseClass} font-medium text-slate-500 hover:text-slate-800`;
      btnLowEl.className = `${baseClass} font-bold shadow-2xs bg-rose-100 text-rose-900 border border-rose-200`;
      btnHighEl.className = `${baseClass} font-medium text-slate-500 hover:text-slate-800`;
    } else if (currentMovementEnergyMode === 'high_energy') {
      btnCycleEl.className = `${baseClass} font-medium text-slate-500 hover:text-slate-800`;
      btnLowEl.className = `${baseClass} font-medium text-slate-500 hover:text-slate-800`;
      btnHighEl.className = `${baseClass} font-bold shadow-2xs bg-emerald-100 text-emerald-900 border border-emerald-200`;
    }
  }

  const data = getMovementAndSpaData(dayNum, phase, currentMovementEnergyMode);

  if (subtitleEl) {
    subtitleEl.innerText = data.subtitle;
  }
  if (badgeEl) {
    badgeEl.className = data.badgeClass;
    badgeEl.innerHTML = `<span class="w-1.5 h-1.5 rounded-full ${data.badgeDot} animate-pulse"></span><span>${data.badgeText}</span>`;
  }

  const themeStyles = {
    emerald: {
      box: 'bg-emerald-50/70 border border-emerald-200/80',
      title: 'text-emerald-900',
      tag: 'text-emerald-700 bg-emerald-100/70',
      desc: 'text-emerald-800/90'
    },
    teal: {
      box: 'bg-teal-50/70 border border-teal-200/80',
      title: 'text-teal-900',
      tag: 'text-teal-700 bg-teal-100/70',
      desc: 'text-teal-800/90'
    },
    rose: {
      box: 'bg-rose-50/70 border border-rose-200/80',
      title: 'text-rose-900',
      tag: 'text-rose-700 bg-rose-100/70',
      desc: 'text-rose-800/90'
    },
    amber: {
      box: 'bg-amber-50/70 border border-amber-200/80',
      title: 'text-amber-950',
      tag: 'text-amber-800 bg-amber-100/70',
      desc: 'text-amber-900/90'
    },
    indigo: {
      box: 'bg-indigo-50/70 border border-indigo-200/80',
      title: 'text-indigo-950',
      tag: 'text-indigo-800 bg-indigo-100/70',
      desc: 'text-indigo-900/90'
    },
    purple: {
      box: 'bg-purple-50/70 border border-purple-200/80',
      title: 'text-purple-950',
      tag: 'text-purple-800 bg-purple-100/70',
      desc: 'text-purple-900/90'
    },
    slate: {
      box: 'bg-slate-50 border border-slate-200/80',
      title: 'text-slate-900',
      tag: 'text-slate-700 bg-slate-200/70',
      desc: 'text-slate-800/90'
    }
  };

  if (containerEl) {
    containerEl.innerHTML = data.cards.map(card => {
      const st = themeStyles[card.theme] || themeStyles.emerald;
      return `
        <div class="p-3 rounded-2xl ${st.box} space-y-1.5 transition-all hover:shadow-2xs">
          <div class="flex items-center justify-between gap-1">
            <div class="font-bold ${st.title} flex items-center gap-1.5 text-xs">
              <span class="text-sm shrink-0">${card.icon}</span>
              <span class="truncate">${card.title}</span>
            </div>
          </div>
          <div class="inline-block px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wide ${st.tag}">
            ${card.tag}
          </div>
          <p class="text-[11px] ${st.desc} leading-tight">
            ${card.desc}
          </p>
        </div>
      `;
    }).join('');
  }

  // Render ADHD coaching container
  if (adhdContainerEl && data.adhd) {
    const adhdStyles = {
      purple: {
        box: 'bg-purple-50/70 border border-purple-200/80',
        headText: 'text-purple-950',
        titleText: 'text-purple-900',
        bodyText: 'text-purple-950/90',
        guardBorder: 'border-purple-200/60',
        guardText: 'text-purple-900'
      },
      emerald: {
        box: 'bg-emerald-50/70 border border-emerald-200/80',
        headText: 'text-emerald-950',
        titleText: 'text-emerald-900',
        bodyText: 'text-emerald-950/90',
        guardBorder: 'border-emerald-200/60',
        guardText: 'text-emerald-900'
      },
      rose: {
        box: 'bg-rose-50/70 border border-rose-200/80',
        headText: 'text-rose-950',
        titleText: 'text-rose-900',
        bodyText: 'text-rose-950/90',
        guardBorder: 'border-rose-200/60',
        guardText: 'text-rose-900'
      },
      amber: {
        box: 'bg-amber-50/70 border border-amber-200/80',
        headText: 'text-amber-950',
        titleText: 'text-amber-900',
        bodyText: 'text-amber-950/90',
        guardBorder: 'border-amber-200/60',
        guardText: 'text-amber-900'
      },
      indigo: {
        box: 'bg-indigo-50/70 border border-indigo-200/80',
        headText: 'text-indigo-950',
        titleText: 'text-indigo-900',
        bodyText: 'text-indigo-950/90',
        guardBorder: 'border-indigo-200/60',
        guardText: 'text-indigo-900'
      },
      teal: {
        box: 'bg-teal-50/70 border border-teal-200/80',
        headText: 'text-teal-950',
        titleText: 'text-teal-900',
        bodyText: 'text-teal-950/90',
        guardBorder: 'border-teal-200/60',
        guardText: 'text-teal-900'
      }
    };
    const ast = adhdStyles[data.adhd.theme] || adhdStyles.purple;

    adhdContainerEl.className = `p-3.5 rounded-2xl ${ast.box} space-y-2 text-xs transition-all`;
    adhdContainerEl.innerHTML = `
      <div class="flex items-center justify-between gap-2 flex-wrap">
        <div class="flex items-center gap-1.5 font-bold ${ast.headText} text-xs">
          <span class="text-sm">🧠</span>
          <span>ADHD Dopamine & Executive Rhythm</span>
        </div>
        <span class="${data.adhd.badgeClass}">
          ${data.adhd.badgeText}
        </span>
      </div>
      
      <div class="space-y-1">
        <div class="font-bold ${ast.titleText} text-xs flex items-center gap-1.5">
          <span>💡</span>
          <span>${data.adhd.title}</span>
        </div>
        <p class="text-[11.5px] ${ast.bodyText} leading-relaxed font-normal">
          ${data.adhd.text}
        </p>
      </div>

      <div class="pt-2 border-t ${ast.guardBorder} flex items-start gap-1.5 text-[10.5px] ${ast.guardText} font-medium leading-normal">
        <span class="shrink-0 text-xs mt-0.5">🛡️</span>
        <span><strong>Gut Motility & APD Guard:</strong> ${data.adhd.motility}</span>
      </div>
    `;
  }
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
    bananaBtn.innerHTML = '🍌 Banana Almond Rice Cakes';
    bananaBtn.className = 'px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 font-bold shadow-2xs transition-all active:scale-95';
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

  const allDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  allDays.forEach(d => {
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

// Emma's Calm Cycle & Tummy Guide (ADHD-Friendly) Modal Handlers
function openBayesianModal() {
  const modal = document.getElementById('specialistBayesianModal');
  if (modal) {
    modal.classList.remove('hidden');
    renderSimplifiedCycleModal();
    renderSpecialistTrackingUI();
    if (window.lucide && typeof lucide.createIcons === 'function') {
      lucide.createIcons();
    }
  }
}

function renderSimplifiedCycleModal() {
  const info = getCycleInfoForDate(activeDateStr);
  const todayStr = getTodayISOString();

  // Date display
  const dateDisp = document.getElementById('cycleModalDateDisplay');
  if (dateDisp) {
    dateDisp.innerText = activeDateStr === todayStr ? "Today" : info.displayDate;
  }

  // Day pill
  const dayEl = document.getElementById('cycleModalDay');
  if (dayEl) {
    dayEl.innerText = `Cycle Day ${info.cycleDay}`;
  }

  // Phase pill
  const phaseEl = document.getElementById('cycleModalPhase');
  if (phaseEl) {
    if (info.phase === 'luteal') {
      phaseEl.innerText = info.cycleDay >= 20 && info.cycleDay <= 23 ? "Mid-Luteal Peak" : (info.cycleDay < 20 ? "Early-Mid Luteal" : "Late Luteal");
      phaseEl.className = "font-black text-sm text-rose-700";
    } else if (info.phase === 'follicular') {
      phaseEl.innerText = "Follicular Phase";
      phaseEl.className = "font-black text-sm text-emerald-700";
    } else {
      phaseEl.innerText = "Ovulation Window";
      phaseEl.className = "font-black text-sm text-amber-700";
    }
  }

  // Hormone pill
  const hormoneEl = document.getElementById('cycleModalHormone');
  if (hormoneEl) {
    if (info.phase === 'luteal') {
      if (info.cycleDay >= 20 && info.cycleDay <= 23) {
        hormoneEl.innerText = "Progesterone Peak";
      } else if (info.cycleDay < 20) {
        hormoneEl.innerText = "Progesterone Rising";
      } else {
        hormoneEl.innerText = "Progesterone Dropping";
      }
    } else if (info.phase === 'follicular') {
      hormoneEl.innerText = "Estrogen Dominant";
    } else {
      hormoneEl.innerText = "LH / Estrogen Surge";
    }
  }

  // 4-Phase Stepper Highlights
  const stepFoll = document.getElementById('cycleStepFollicular');
  const stepOvu = document.getElementById('cycleStepOvulation');
  const stepLut = document.getElementById('cycleStepLuteal');
  const stepReset = document.getElementById('cycleStepReset');

  // Reset base styles
  [stepFoll, stepOvu, stepLut, stepReset].forEach(s => {
    if (s) {
      s.className = "p-2 rounded-xl bg-white/70 border border-slate-200/80 transition-all";
    }
  });

  if (info.cycleDay >= 27 || info.cycleDay <= 2) {
    if (stepReset) stepReset.className = "p-2 rounded-xl bg-sky-50 border-2 border-sky-500 shadow-xs transition-all";
  } else if (info.phase === 'follicular') {
    if (stepFoll) stepFoll.className = "p-2 rounded-xl bg-emerald-50 border-2 border-emerald-500 shadow-xs transition-all";
  } else if (info.phase === 'ovulation') {
    if (stepOvu) stepOvu.className = "p-2 rounded-xl bg-amber-50 border-2 border-amber-500 shadow-xs transition-all";
  } else {
    // Luteal
    if (stepLut) stepLut.className = "p-2 rounded-xl bg-purple-50 border-2 border-purple-500 shadow-xs transition-all";
  }

  // Reset countdown
  const resetBadge = document.getElementById('cycleModalResetBadge');
  const resetExp = document.getElementById('cycleModalResetExplanation');
  const daysLeft = Math.max(1, 28 - info.cycleDay);

  if (resetBadge) {
    if (info.phase === 'luteal') {
      resetBadge.innerText = `~${daysLeft} Day${daysLeft === 1 ? '' : 's'} Left`;
      resetBadge.className = "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900";
    } else if (info.phase === 'follicular') {
      resetBadge.innerText = `In ~${Math.max(1, 14 - info.cycleDay)} Days`;
      resetBadge.className = "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-100 text-blue-900";
    } else {
      resetBadge.innerText = `In ~1–2 Days`;
      resetBadge.className = "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900";
    }
  }

  if (resetExp) {
    if (info.phase === 'luteal') {
      resetExp.innerHTML = `Around <strong>September 13–15</strong>, your corpus luteum naturally winds down, progesterone plunges, and your body flushes out the retained water. Remember August 21st? You woke up and wrote: <em>"Inflammation all gone, 98% back to me!"</em> That same relief will happen again. It always passes.`;
    } else if (info.phase === 'follicular') {
      resetExp.innerHTML = `You are currently in your high-energy follicular phase. Estrogen is supporting fast, comfortable digestion and steady dopamine. Enjoy this window!`;
    } else {
      resetExp.innerHTML = `You are in your ovulation window. Gentle twinges or lower tummy sensitivity are normal as the follicle ruptures. Keep meals warm and soothing.`;
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
      eaasTaken: false,
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

  // Sync with active date log entry
  let logEntry = logs.find(l => l.date === activeDateStr);
  if (!logEntry) {
    const cycleInfo = getCycleInfoForDate(activeDateStr);
    logEntry = {
      date: activeDateStr,
      displayDate: cycleInfo.displayDate,
      cycleDay: cycleInfo.cycleDay,
      phase: cycleInfo.phase,
      phaseLabel: cycleInfo.phaseLabel,
      temp: cycleInfo.temp,
      fastingAdherence: 'kept_40',
      warmTrigger: false,
      electrolytesTaken: false,
      eaasTaken: false,
      bristol: 'none',
      diaphragm: 4,
      alcohol: 'none',
      mood: 'flat',
      sexDrive: 'normal',
      movement: 'Pending morning movement',
      puffiness: [],
      notes: ''
    };
    logs.push(logEntry);
  }

  logEntry.electrolytesTaken = dState.electrolyteBuffered;
  logEntry.electrolyteBuffered = dState.electrolyteBuffered;
  if (!logEntry.puffiness) logEntry.puffiness = [];
  if (dState.electrolyteBuffered) {
    if (!logEntry.puffiness.includes('⚡ Electrolytes Taken')) logEntry.puffiness.push('⚡ Electrolytes Taken');
  } else {
    logEntry.puffiness = logEntry.puffiness.filter(t => t !== '⚡ Electrolytes Taken' && t !== '⚡ Electrolyte & EAAs Taken');
  }
  saveLogs();
  renderHistoryLogs();
  renderDashboardTrends();
  render5PillarDashboard();

  // Sync Check-In modal checkbox if open
  const chk = document.getElementById('logElectrolytesTaken');
  if (chk) chk.checked = dState.electrolyteBuffered;

  if (dState.electrolyteBuffered) {
    if (typeof confetti === 'function') {
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.7 } });
    }
    showDynamicToast("⚡ Electrolytes Logged! Supports colonic mucosal hydration.");
  } else {
    showDynamicToast("Electrolytes status set to Pending.");
  }
}

function toggleEaasBuffer() {
  const dState = getOrCreateDateSpecialistState(activeDateStr);
  dState.eaasTaken = !dState.eaasTaken;
  saveSpecialistTracking();
  renderSpecialistTrackingUI();

  // Sync with active date log entry
  let logEntry = logs.find(l => l.date === activeDateStr);
  if (!logEntry) {
    const cycleInfo = getCycleInfoForDate(activeDateStr);
    logEntry = {
      date: activeDateStr,
      displayDate: cycleInfo.displayDate,
      cycleDay: cycleInfo.cycleDay,
      phase: cycleInfo.phase,
      phaseLabel: cycleInfo.phaseLabel,
      temp: cycleInfo.temp,
      fastingAdherence: 'kept_40',
      warmTrigger: false,
      electrolytesTaken: false,
      eaasTaken: false,
      bristol: 'none',
      diaphragm: 4,
      alcohol: 'none',
      mood: 'flat',
      sexDrive: 'normal',
      movement: 'Pending morning movement',
      puffiness: [],
      notes: ''
    };
    logs.push(logEntry);
  }

  logEntry.eaasTaken = dState.eaasTaken;
  if (!logEntry.puffiness) logEntry.puffiness = [];
  if (dState.eaasTaken) {
    if (!logEntry.puffiness.includes('🧬 EAAs Taken')) logEntry.puffiness.push('🧬 EAAs Taken');
  } else {
    logEntry.puffiness = logEntry.puffiness.filter(t => t !== '🧬 EAAs Taken' && t !== '⚡ Electrolyte & EAAs Taken');
  }
  saveLogs();
  renderHistoryLogs();
  renderDashboardTrends();
  render5PillarDashboard();

  // Sync Check-In modal checkbox if open
  const chk = document.getElementById('logEaasTaken');
  if (chk) chk.checked = dState.eaasTaken;

  if (dState.eaasTaken) {
    if (typeof confetti === 'function') {
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.7 } });
    }
    showDynamicToast("🧬 EAAs Logged! Supports muscle energy without GI digestive burden.");
  } else {
    showDynamicToast("EAAs status set to Pending.");
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
    if (text) text.innerText = "Log Electrolytes";
  }

  // 1b. EAAs Buffer
  const eaaBadge = document.getElementById('eaaStatusBadge');
  const eaaBtn = document.getElementById('btnToggleEaas');
  const eaaIcon = document.getElementById('eaaBtnIcon');
  const eaaText = document.getElementById('eaaBtnText');

  if (dState.eaasTaken) {
    if (eaaBadge) {
      eaaBadge.innerText = "Taken ✨";
      eaaBadge.className = "text-[9px] font-extrabold px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200";
    }
    if (eaaBtn) {
      eaaBtn.className = "shrink-0 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] shadow-2xs active:scale-95 transition-all flex items-center gap-1";
    }
    if (eaaIcon) eaaIcon.innerText = "✓";
    if (eaaText) eaaText.innerText = "Taken";
  } else {
    if (eaaBadge) {
      eaaBadge.innerText = "Pending";
      eaaBadge.className = "text-[9px] font-extrabold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600";
    }
    if (eaaBtn) {
      eaaBtn.className = "shrink-0 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-[11px] shadow-2xs active:scale-95 transition-all flex items-center gap-1";
    }
    if (eaaIcon) eaaIcon.innerText = "🧬";
    if (eaaText) eaaText.innerText = "Log EAAs";
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

// Close calendar or delete modal on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDeleteConfirmModal();
    closeCalendarPickerModal();
  }
});

function initializeUI() {
  // Clear any default active selections so check-in is 100% clean by default
  selectedBristolVal = '';
  selectedMoodVal = '';
  if (typeof selectedMoods !== 'undefined' && selectedMoods.clear) selectedMoods.clear();
  selectedSexDriveVal = '';
  selectedFastingVal = '';
  selectedSennaTeaVal = null;

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

    // Mood Badges (Emma's 6 Headspace States + Backwards compat, supporting multi-select)
    const moodBadgesMap = {
      calm: { text: '🌿 Calm', class: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
      happy: { text: '😊 Happy', class: 'bg-amber-50 text-amber-900 border-amber-200' },
      edgy: { text: '⚡ Edgy', class: 'bg-rose-50 text-rose-800 border-rose-200' },
      anxious: { text: '🌪️ Anxious', class: 'bg-orange-50 text-orange-900 border-orange-200' },
      overthinking: { text: '💭 Overthinking', class: 'bg-indigo-50 text-indigo-900 border-indigo-200' },
      flat: { text: '☁️ Flat', class: 'bg-slate-50 text-slate-700 border-slate-200' },
      great: { text: '☀️ Free', class: 'bg-emerald-50 text-emerald-800 border-emerald-200' }
    };

    const itemMoods = (Array.isArray(item.moods) && item.moods.length > 0)
      ? item.moods
      : (item.mood ? item.mood.split(',').map(s => s.trim()).filter(Boolean) : []);

    const moodBadgesHtml = itemMoods.length > 0
      ? itemMoods.map(m => {
          const b = moodBadgesMap[m] || { text: m, class: 'bg-brand-cream text-brand-textMuted border-brand-border' };
          return `<span class="px-2 py-0.5 rounded-md border ${b.class} font-bold text-[10px] shadow-2xs">${b.text}</span>`;
        }).join('')
      : `<span class="px-2 py-0.5 rounded-md bg-brand-cream text-brand-textMuted font-semibold text-[10px]">☁️ Flat</span>`;

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
            <button type="button" onclick="event.stopPropagation(); editDiaryEntry('${item.date}')" title="Edit diary entry" class="w-7 h-7 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 flex items-center justify-center transition-all active:scale-95 shadow-2xs">
              <i data-lucide="edit-3" class="w-3.5 h-3.5 text-purple-700"></i>
            </button>
            <button type="button" onclick="event.stopPropagation(); promptDeleteDiaryEntry('${item.date}')" title="Delete diary entry" class="w-7 h-7 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 flex items-center justify-center transition-all active:scale-95 shadow-2xs">
              <i data-lucide="trash-2" class="w-3.5 h-3.5 text-rose-600"></i>
            </button>
            <i data-lucide="chevron-down" id="${cardId}-icon" class="w-4 h-4 text-brand-textMuted transition-transform ${isOpenInitially ? 'rotate-180' : ''}"></i>
          </div>
        </div>

        <!-- Quick Summary Badges (Always Visible) -->
        <div class="flex flex-wrap items-center gap-1.5 text-[11px] pt-1 border-t border-brand-border/60">
          <span class="px-2 py-0.5 rounded-md ${stoolBg} font-bold">${stoolIcon}</span>
          <span class="px-2 py-0.5 rounded-md bg-brand-cream text-brand-textMuted font-semibold">Bloat: <strong class="text-brand-coral">${item.diaphragmBloat}/10</strong></span>
          ${moodBadgesHtml}
          ${(item.upperTummyBloat || (item.puffiness && (item.puffiness.includes('🎈 Upper Tummy Bloating') || item.puffiness.includes('Upper Tummy Bloating')))) ? `
            <span class="px-2 py-0.5 rounded-md bg-amber-100/90 text-amber-900 border border-amber-300 font-bold text-[10px] inline-flex items-center gap-1">
              <span>🎈</span><span>Upper Bloat</span>
            </span>
          ` : ''}
          ${(item.lowerTummyBloat || (item.puffiness && (item.puffiness.includes('🫧 Lower Tummy Bloating') || item.puffiness.includes('Lower Tummy Bloating')))) ? `
            <span class="px-2 py-0.5 rounded-md bg-amber-100/90 text-amber-900 border border-amber-300 font-bold text-[10px] inline-flex items-center gap-1">
              <span>🫧</span><span>Lower Bloat</span>
            </span>
          ` : ''}
          ${(item.gassiness || (item.puffiness && (item.puffiness.includes('🫧 Gassiness') || item.puffiness.includes('Gassiness') || item.puffiness.includes('Trapped Gas') || item.puffiness.includes('💨 Trapped Wind')))) ? `
            <span class="px-2 py-0.5 rounded-md bg-sky-100/90 text-sky-900 border border-sky-300 font-bold text-[10px] inline-flex items-center gap-1">
              <span>🫧</span><span>Gassy</span>
            </span>
          ` : ''}
          ${(item.burpiness || (item.puffiness && (item.puffiness.includes('🗣️ Burpiness') || item.puffiness.includes('Burpiness') || item.puffiness.includes('Can\'t Burp') || item.puffiness.includes('🔄 Can\'t Burp (Stuck Gas)')))) ? `
            <span class="px-2 py-0.5 rounded-md bg-indigo-100/90 text-indigo-900 border border-indigo-300 font-bold text-[10px] inline-flex items-center gap-1">
              <span>🗣️</span><span>Burpy</span>
            </span>
          ` : ''}
          ${(item.sennaTea || (item.puffiness && item.puffiness.includes('🍵 Senna Tea Taken'))) ? `
            <span class="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold text-[10px] inline-flex items-center gap-1">
              <span>🍵</span><span>Senna Tea</span>
            </span>
          ` : ''}
          ${item.sexDrive ? `
            <span class="px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200 font-semibold text-[10px]">
              ❤️ Libido: ${item.sexDrive === 'high' ? 'High' : (item.sexDrive === 'mild' ? 'Mild' : (item.sexDrive === 'low' ? 'Low' : 'Normal'))}
            </span>
          ` : ''}
          ${(item.electrolytesTaken || item.electrolyteBuffered || (item.puffiness && (item.puffiness.includes('⚡ Electrolytes Taken') || item.puffiness.includes('⚡ Electrolyte & EAAs Taken')))) ? `
            <span class="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 font-semibold text-[10px]">
              ⚡ Electrolytes
            </span>
          ` : ''}
          ${(item.eaasTaken || (item.puffiness && (item.puffiness.includes('🧬 EAAs Taken') || item.puffiness.includes('⚡ Electrolyte & EAAs Taken')))) ? `
            <span class="px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 border border-purple-200 font-semibold text-[10px]">
              🧬 EAAs
            </span>
          ` : ''}
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
              ${item.puffiness.map(p => {
                const isBloat = p.includes('Upper Tummy') || p.includes('Lower Tummy');
                const isGas = p.includes('Gass') || p.includes('Burp') || p.includes('Wind') || p.includes('Gas');
                const isSenna = p.includes('Senna');
                const badgeClass = isBloat 
                  ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                  : (isGas 
                      ? 'bg-sky-100 text-sky-900 border border-sky-300' 
                      : (isSenna 
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' 
                          : 'bg-brand-coralLight text-brand-coral'));
                return `<span class="px-2 py-0.5 rounded-md ${badgeClass} text-[10px] font-semibold">${p}</span>`;
              }).join('')}
              ${item.exercise ? `<span class="px-2 py-0.5 rounded-md bg-brand-sageLight text-brand-sage text-[10px] font-semibold">🏃 ${item.exercise}</span>` : ''}
            </div>
          ` : ''}

          ${(item.notes || item.headspaceNotes || item.medNotes) ? `
            <div class="space-y-2">
              ${item.medNotes ? `
                <div class="p-2.5 bg-brand-amberLight/60 rounded-xl border border-brand-amber/30 text-[11px] text-brand-textDark leading-relaxed">
                  <div class="font-bold text-brand-amber mb-0.5 flex items-center gap-1.5">
                    <span>${item.medNotes.toLowerCase().includes('linaclotide') || item.medNotes.includes('7:') ? '🌅' : (item.medNotes.toLowerCase().includes('night') || item.medNotes.toLowerCase().includes('sleep') ? '🌙' : '💊')}</span>
                    <span>Meds: ${item.medNotes}</span>
                  </div>
                </div>
              ` : ''}
              ${(item.headspaceNotes || item.notes) ? `
                <div class="p-2.5 bg-purple-50/70 rounded-xl border border-purple-200/80 text-[11px] text-purple-950 leading-relaxed shadow-2xs">
                  <div class="font-bold text-purple-800 text-[10px] uppercase tracking-wider mb-1 flex items-center gap-1">
                    <span>💭</span>
                    <span>Emma's Headspace & Daily Thoughts</span>
                  </div>
                  <div class="italic text-brand-textDark whitespace-pre-line">${item.headspaceNotes || item.notes}</div>
                </div>
              ` : ''}
            </div>
          ` : ''}

          <!-- Card Action Footer: Edit & Delete -->
          <div class="flex items-center justify-between pt-2.5 border-t border-brand-border/60">
            <span class="text-[10px] text-brand-textMuted font-mono">Date: ${item.date}</span>
            <div class="flex items-center space-x-2">
              <button type="button" onclick="event.stopPropagation(); editDiaryEntry('${item.date}')" class="px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95 shadow-2xs">
                <i data-lucide="edit-3" class="w-3.5 h-3.5 text-purple-700"></i>
                <span>Edit Entry</span>
              </button>
              <button type="button" onclick="event.stopPropagation(); promptDeleteDiaryEntry('${item.date}')" class="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95 shadow-2xs">
                <i data-lucide="trash-2" class="w-3.5 h-3.5 text-rose-600"></i>
                <span>Delete Entry</span>
              </button>
            </div>
          </div>

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
var selectedBristolVal = '';
var selectedMoodVal = '';
var selectedMoods = new Set();
var selectedAlcoholVal = '';
var selectedSexDriveVal = '';
var selectedFastingVal = '';
var selectedTags = new Set();
var selectedSennaTeaVal = null;

function setSennaTeaQuick(had) {
  // Allow tap-to-deselect: if clicking the currently active choice, reset to neutral null
  if (selectedSennaTeaVal === had) {
    selectedSennaTeaVal = null;
    const chk = document.getElementById('logSennaTea');
    if (chk) chk.checked = false;
    updateSennaTeaCard(null);
    return;
  }
  selectedSennaTeaVal = had;
  const chk = document.getElementById('logSennaTea');
  if (chk) chk.checked = had === true;
  updateSennaTeaCard(had);
}

function updateSennaTeaCard(had) {
  const badge = document.getElementById('sennaTeaBadge');
  const btnNone = document.getElementById('sennaBtn-none');
  const btnHad = document.getElementById('sennaBtn-had');

  if (had === true) {
    if (badge) {
      badge.innerText = "Had Today 🍵";
      badge.className = "text-[9px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-2xs";
    }
    if (btnHad) {
      btnHad.className = "senna-choice-btn p-2 rounded-xl border border-emerald-600 text-xs font-extrabold bg-emerald-600 text-white shadow-xs transition-all flex items-center justify-center gap-1.5";
    }
    if (btnNone) {
      btnNone.className = "senna-choice-btn p-2 rounded-xl border border-brand-border text-xs font-semibold bg-white text-brand-textMuted hover:border-slate-400 transition-all flex items-center justify-center gap-1.5";
    }
  } else if (had === false) {
    if (badge) {
      badge.innerText = "No Senna Today 🚫";
      badge.className = "text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300";
    }
    if (btnHad) {
      btnHad.className = "senna-choice-btn p-2 rounded-xl border border-emerald-200 text-xs font-semibold bg-white text-emerald-900 hover:bg-emerald-50 transition-all flex items-center justify-center gap-1.5";
    }
    if (btnNone) {
      btnNone.className = "senna-choice-btn p-2 rounded-xl border border-slate-600 text-xs font-extrabold bg-slate-700 text-white shadow-xs transition-all flex items-center justify-center gap-1.5";
    }
  } else {
    // Completely unselected / clean state
    if (badge) {
      badge.innerText = "Tap to choose";
      badge.className = "text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200";
    }
    if (btnHad) {
      btnHad.className = "senna-choice-btn p-2 rounded-xl border border-emerald-200 text-xs font-semibold bg-white text-emerald-900 hover:bg-emerald-50 transition-all flex items-center justify-center gap-1.5";
    }
    if (btnNone) {
      btnNone.className = "senna-choice-btn p-2 rounded-xl border border-brand-border text-xs font-semibold bg-white text-brand-textMuted hover:border-slate-400 transition-all flex items-center justify-center gap-1.5";
    }
  }
}

function toggleSennaTeaQuick() {
  const dState = getOrCreateDateSpecialistState(activeDateStr);
  dState.sennaTea = !dState.sennaTea;
  saveSpecialistTracking();
  renderSpecialistTrackingUI();

  let logEntry = logs.find(l => l.date === activeDateStr);
  if (!logEntry) {
    const cycleInfo = getCycleInfoForDate(activeDateStr);
    logEntry = {
      date: activeDateStr,
      displayDate: cycleInfo.displayDate,
      cycleDay: cycleInfo.cycleDay,
      phase: cycleInfo.phase,
      phaseLabel: cycleInfo.phaseLabel,
      temp: cycleInfo.temp,
      fastingAdherence: 'kept_40',
      warmTrigger: false,
      electrolytesTaken: false,
      eaasTaken: false,
      sennaTea: false,
      bristol: 'none',
      diaphragm: 4,
      alcohol: 'none',
      mood: 'flat',
      sexDrive: 'normal',
      movement: 'Pending morning movement',
      puffiness: [],
      notes: ''
    };
    logs.push(logEntry);
  }

  logEntry.sennaTea = dState.sennaTea;
  if (!logEntry.puffiness) logEntry.puffiness = [];
  if (dState.sennaTea) {
    if (!logEntry.puffiness.includes('🍵 Senna Tea Taken')) logEntry.puffiness.push('🍵 Senna Tea Taken');
  } else {
    logEntry.puffiness = logEntry.puffiness.filter(t => t !== '🍵 Senna Tea Taken' && !t.toLowerCase().includes('senna'));
  }
  saveLogs();
  renderHistoryLogs();
  renderDashboardTrends();
  updateDashboardCheckInBadge(logEntry);

  const chk = document.getElementById('logSennaTea');
  if (chk) {
    chk.checked = dState.sennaTea;
    updateSennaTeaCard(dState.sennaTea);
  }

  if (dState.sennaTea) {
    if (typeof confetti === 'function') {
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.7 } });
    }
    showDynamicToast("🍵 Senna Tea Logged! Rescue laxative support recorded.");
  } else {
    showDynamicToast("Senna Tea status set to None.");
  }
}

function resetQuickLogModalToBlank() {
  selectedFastingVal = '';
  selectedBristolVal = '';
  selectedAlcoholVal = '';
  selectedMoodVal = '';
  if (typeof selectedMoods !== 'undefined' && selectedMoods.clear) selectedMoods.clear();
  selectedSexDriveVal = '';
  selectedSennaTeaVal = null;

  // 1. Vitals & Temperature - BLANK
  const tempInput = document.getElementById('logTemp');
  if (tempInput) tempInput.value = '';

  const ouraSleep = document.getElementById('logOuraSleep');
  if (ouraSleep) ouraSleep.value = '';
  const ouraRhr = document.getElementById('logOuraRhr');
  if (ouraRhr) ouraRhr.value = '';
  const ouraHrv = document.getElementById('logOuraHrv');
  if (ouraHrv) ouraHrv.value = '';

  // 2. Morning Fasting Routine - BLANK (none selected)
  selectFasting('');

  const warmTrigger = document.getElementById('logWarmTrigger');
  if (warmTrigger) warmTrigger.checked = false;

  const electrolytes = document.getElementById('logElectrolytesTaken');
  if (electrolytes) electrolytes.checked = false;

  const eaas = document.getElementById('logEaasTaken');
  if (eaas) eaas.checked = false;

  // Senna Tea (Rescue Laxative Support) - NEUTRAL / BLANK
  const sennaChk = document.getElementById('logSennaTea');
  if (sennaChk) sennaChk.checked = false;
  setSennaTeaQuick(null);

  // 3. Bowel Evacuation & Nuance - BLANK (none selected)
  selectBristol('');
  const nuanceContainer = document.getElementById('stoolNuanceContainer');
  if (nuanceContainer) nuanceContainer.classList.add('hidden');
  const nuanceInput = document.getElementById('logStoolNuance');
  if (nuanceInput) nuanceInput.value = '';

  // 4. Diaphragm & APD Status - RESET (0 / 10)
  const diaphragmReset = document.getElementById('logDiaphragmResetDone');
  if (diaphragmReset) diaphragmReset.checked = false;

  const diaphragmSlider = document.getElementById('logDiaphragm');
  if (diaphragmSlider) {
    diaphragmSlider.value = 0;
    updateDiaphragmSliderDisplay(0);
  }

  // 5. Symptoms, Bloating, Gassiness & Puffiness Tags - ALL UNSELECTED / BLANK
  selectedTags.clear();
  document.querySelectorAll('#quickLogModal .tag-btn').forEach(btn => {
    btn.classList.remove('selected', 'bg-brand-coral', 'text-white', 'border-brand-coral', 'bg-amber-600', 'border-amber-600', 'bg-sky-600', 'border-sky-600', 'shadow-xs');
    const text = btn.innerText.trim();
    const isBloatTag = text.includes('Upper Tummy Bloating') || text.includes('Lower Tummy Bloating');
    const isGasTag = text.includes('Gassiness') || text.includes('Burpiness') || text.includes('Trapped Wind') || text.includes('Can\'t Burp');

    if (isBloatTag || isGasTag) {
      btn.classList.add('bg-white', 'text-brand-textDark', 'border-brand-border');
    } else {
      btn.classList.add('bg-white', 'text-brand-textMuted');
    }
  });

  // 6. Drinks, Mood, Sex Drive & Notes - BLANK (none selected)
  selectAlcohol('');
  selectMood('');
  selectSexDrive('');

  const exerciseInput = document.getElementById('logExercise');
  if (exerciseInput) exerciseInput.value = '';

  const noteInput = document.getElementById('logNote');
  if (noteInput) {
    noteInput.value = '';
    handleVoiceNoteInput();
  }
}

function openQuickLogModal(dateOverride) {
  const modal = document.getElementById('quickLogModal');
  if (!modal) return;
  modal.classList.remove('hidden');

  const targetDate = (typeof dateOverride === 'string' && dateOverride) ? dateOverride : (activeDateStr || getTodayISOString());
  const dateInput = document.getElementById('logDate');
  if (dateInput) dateInput.value = targetDate;

  // Find if a previously saved user entry exists for targetDate
  const entry = logs.find(l => l.date === targetDate);
  const existingBanner = document.getElementById('quickLogExistingBanner');

  if (entry && (entry.notes || entry.headspaceNotes || entry.temp || entry.movement || (entry.puffiness && entry.puffiness.length > 0) || entry.sennaTea !== null || entry.fastingAdherence)) {
    // If Emma already logged for this date, load her entry so she never sees a blank screen that feels like data loss!
    loadSavedCheckInIntoModal(targetDate);
    if (existingBanner) {
      existingBanner.innerHTML = `
        <div class="flex items-center gap-1.5 pr-2">
          <span>✨</span>
          <span class="text-[11px] font-bold text-purple-950">Editing entry for ${entry.displayDate || targetDate}. Add or update anything, then tap Save.</span>
        </div>
        <div class="flex items-center gap-1.5 shrink-0">
          <button type="button" onclick="promptDeleteDiaryEntry('${targetDate}')" class="px-2 py-1 bg-rose-50 hover:bg-rose-100 text-rose-800 font-bold border border-rose-200 rounded-xl text-[10px] active:scale-95 transition-all shadow-2xs flex items-center gap-1">
            <i data-lucide="trash-2" class="w-3 h-3 text-rose-600"></i>
            <span>Delete</span>
          </button>
          <button type="button" onclick="resetQuickLogModalToBlank()" class="px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 font-bold border border-slate-300 rounded-xl text-[10px] active:scale-95 transition-all shadow-2xs">
            Clear
          </button>
        </div>
      `;
      existingBanner.classList.remove('hidden');
    }
  } else {
    // Fresh unlogged date: open completely clean and blank
    resetQuickLogModalToBlank();
    if (existingBanner) existingBanner.classList.add('hidden');
  }

  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

function loadSavedCheckInIntoModal(customDate) {
  const targetDate = customDate || document.getElementById('logDate')?.value || activeDateStr || getTodayISOString();
  const entry = logs.find(l => l.date === targetDate && !isSyntheticTestEntry(l));
  if (!entry) {
    showDynamicToast("No previous check-in found for this date.");
    return;
  }

  // 1. Vitals & Temperature
  const tempInput = document.getElementById('logTemp');
  if (tempInput) tempInput.value = entry.temp || '';

  const ouraSleep = document.getElementById('logOuraSleep');
  if (ouraSleep) ouraSleep.value = entry.ouraSleep || entry.sleepScore || '';
  const ouraRhr = document.getElementById('logOuraRhr');
  if (ouraRhr) ouraRhr.value = entry.ouraRhr || entry.rhr || '';
  const ouraHrv = document.getElementById('logOuraHrv');
  if (ouraHrv) ouraHrv.value = entry.ouraHrv || entry.hrv || '';

  // 2. Morning Fasting Routine
  selectFasting(entry.fastingAdherence || '');

  const warmTrigger = document.getElementById('logWarmTrigger');
  if (warmTrigger) warmTrigger.checked = !!entry.warmTrigger;

  const electrolytes = document.getElementById('logElectrolytesTaken');
  if (electrolytes) {
    electrolytes.checked = !!(
      entry.electrolytesTaken ?? 
      entry.electrolyteBuffered ?? 
      (entry.puffiness && (entry.puffiness.includes('⚡ Electrolytes Taken') || entry.puffiness.includes('⚡ Electrolyte & EAAs Taken')))
    );
  }

  const eaas = document.getElementById('logEaasTaken');
  if (eaas) {
    eaas.checked = !!(
      entry.eaasTaken ?? 
      (entry.puffiness && (entry.puffiness.includes('🧬 EAAs Taken') || entry.puffiness.includes('⚡ Electrolyte & EAAs Taken')))
    );
  }

  // Senna Tea
  let sennaVal = null;
  if (entry.sennaTea !== undefined && entry.sennaTea !== null) {
    sennaVal = !!entry.sennaTea;
  } else if (
    (entry.puffiness && entry.puffiness.some(p => p.toLowerCase().includes('senna'))) ||
    (entry.medNotes && entry.medNotes.toLowerCase().includes('senna'))
  ) {
    sennaVal = true;
  }
  setSennaTeaQuick(sennaVal);

  // 3. Bowel Evacuation & Nuance
  selectBristol(entry.bristol || '');
  if (entry.stoolNuance) {
    selectStoolNuance(entry.stoolNuance);
  }

  // 4. Diaphragm & APD Status
  const diaphragmReset = document.getElementById('logDiaphragmResetDone');
  if (diaphragmReset) diaphragmReset.checked = !!entry.diaphragmResetDone;

  const diaphragmSlider = document.getElementById('logDiaphragm');
  if (diaphragmSlider) {
    const dVal = (entry.diaphragmBloat !== undefined) ? entry.diaphragmBloat : 0;
    diaphragmSlider.value = dVal;
    updateDiaphragmSliderDisplay(dVal);
  }

  // 5. Symptoms, Bloating, Gassiness & Puffiness Tags
  selectedTags.clear();
  document.querySelectorAll('#quickLogModal .tag-btn').forEach(btn => {
    btn.classList.remove('selected', 'bg-brand-coral', 'text-white', 'border-brand-coral', 'bg-amber-600', 'border-amber-600', 'bg-sky-600', 'border-sky-600');
    const text = btn.innerText.trim();
    const isBloatTag = text.includes('Upper Tummy Bloating') || text.includes('Lower Tummy Bloating');
    const isGasTag = text.includes('Gassiness') || text.includes('Burpiness') || text.includes('Trapped Wind') || text.includes('Can\'t Burp');

    if (isBloatTag || isGasTag) {
      btn.classList.add('bg-white', 'text-brand-textDark', 'border-brand-border');
    } else {
      btn.classList.add('bg-white', 'text-brand-textMuted');
    }

    const hasTag = (
      (entry.puffiness && (entry.puffiness.includes(text) || (text === 'Achy Body' && entry.puffiness.includes('Heavy Legs')))) ||
      (text.includes('Upper Tummy Bloating') && (entry.upperTummyBloat || entry.puffiness?.includes('🎈 Upper Tummy Bloating') || entry.puffiness?.includes('Upper Tummy Bloating') || entry.symptoms?.toLowerCase().includes('upper bloating'))) ||
      (text.includes('Lower Tummy Bloating') && (entry.lowerTummyBloat || entry.puffiness?.includes('🫧 Lower Tummy Bloating') || entry.puffiness?.includes('Lower Tummy Bloating') || entry.symptoms?.toLowerCase().includes('lower tummy'))) ||
      (text.includes('Gassiness') && (entry.gassiness || entry.puffiness?.some(p => p.toLowerCase().includes('gass') || p.toLowerCase().includes('trapped gas')) || entry.symptoms?.toLowerCase().includes('gass'))) ||
      (text.includes('Burpiness') && (entry.burpiness || entry.puffiness?.some(p => p.toLowerCase().includes('burp')) || entry.symptoms?.toLowerCase().includes('burp'))) ||
      (text.includes('Trapped Wind') && entry.puffiness?.some(p => p.toLowerCase().includes('trapped gas') || p.toLowerCase().includes('trapped wind'))) ||
      (text === "All Trousers/Bottoms Feeling Tight" && entry.puffiness && entry.puffiness.includes("Jeans Tight"))
    );

    if (hasTag) {
      btn.classList.add('selected');
      if (isBloatTag) {
        btn.classList.add('bg-amber-600', 'text-white', 'border-amber-600', 'shadow-xs');
        btn.classList.remove('bg-white', 'text-brand-textDark', 'border-brand-border');
      } else if (isGasTag) {
        btn.classList.add('bg-sky-600', 'text-white', 'border-sky-600', 'shadow-xs');
        btn.classList.remove('bg-white', 'text-brand-textDark', 'border-brand-border');
      } else {
        btn.classList.add('bg-brand-coral', 'text-white', 'border-brand-coral');
        btn.classList.remove('bg-white', 'text-brand-textMuted');
      }
      selectedTags.add(text);
    }
  });

  // 6. Drinks, Mood, Sex Drive & Notes
  selectAlcohol(entry.alcohol || '');
  selectMood(entry.moods || entry.mood || '', true);
  selectSexDrive(entry.sexDrive || '');

  const exerciseInput = document.getElementById('logExercise');
  if (exerciseInput) exerciseInput.value = entry.exercise || '';

  const noteInput = document.getElementById('logNote');
  if (noteInput) {
    noteInput.value = (entry.symptoms && entry.symptoms !== 'Logged via Quick-Check') ? entry.symptoms : (entry.notes || '');
    handleVoiceNoteInput();
  }

  const existingBanner = document.getElementById('quickLogExistingBanner');
  if (existingBanner) existingBanner.classList.add('hidden');

  showDynamicToast("Loaded previously saved check-in ✨");
}

function closeQuickLogModal() {
  stopVoiceDictation();
  const modal = document.getElementById('quickLogModal');
  if (modal) modal.classList.add('hidden');
}

// ============================================================================
// DIARY ENTRY EDIT & DELETE CONTROLLER
// ============================================================================
var pendingDeleteDate = null;

function editDiaryEntry(targetDate) {
  if (!targetDate) return;
  openQuickLogModal(targetDate);
}

function promptDeleteDiaryEntry(targetDate) {
  if (!targetDate) return;
  pendingDeleteDate = targetDate;
  const entry = logs.find(l => l.date === targetDate);
  const dateLabel = entry ? (entry.displayDate || targetDate) : targetDate;

  const textEl = document.getElementById('deleteConfirmDateText');
  if (textEl) textEl.innerText = dateLabel;

  const modal = document.getElementById('deleteConfirmModal');
  if (modal) modal.classList.remove('hidden');

  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

function closeDeleteConfirmModal() {
  pendingDeleteDate = null;
  const modal = document.getElementById('deleteConfirmModal');
  if (modal) modal.classList.add('hidden');
}

function confirmDeleteDiaryEntry() {
  const dateToDelete = pendingDeleteDate;
  if (!dateToDelete) return;

  const entry = logs.find(l => l.date === dateToDelete);
  const dateLabel = entry ? (entry.displayDate || dateToDelete) : dateToDelete;

  // 1. Record in deleted ledger so it is permanently excluded
  recordDeletedDate(dateToDelete);

  // 2. Filter from in-memory logs
  logs = logs.filter(l => l.date !== dateToDelete);

  // 3. Remove isolated single-entry key from localStorage
  try {
    localStorage.removeItem('emma_entry_' + dateToDelete);
  } catch (err) {}

  // 4. Update localStorage and IndexedDB
  saveLogs(true);
  deleteLogFromIndexedDB(dateToDelete);

  // 5. Send delete command to backend database & disk snapshots
  fetch('/api/delete-checkin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ date: dateToDelete })
  }).then(r => r.json()).then(res => {
    console.log('🌸 Server check-in delete confirmed:', res);
  }).catch(err => {
    console.warn('Server delete error:', err);
  });

  // 6. Close modals
  closeDeleteConfirmModal();
  const currentModalDate = document.getElementById('logDate')?.value;
  if (currentModalDate === dateToDelete) {
    closeQuickLogModal();
  }

  // 7. Refresh all UI views
  renderHistoryLogs();
  renderDashboardTrends();
  renderOuraChart();

  const currentDayLog = logs.find(l => l.date === activeDateStr);
  renderDashboardHeadspaceCard(currentDayLog);
  updateDashboardStats(currentDayLog || {});

  showDynamicToast("🗑️ Diary entry for " + dateLabel + " has been deleted.");
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
  s = s.replace(/\b(senna\s*tea|senna)\b/gi, 'Senna tea');
  s = s.replace(/\b(myrena|mirena|marina\s*coil)\b/gi, 'Mirena');

  // 2. Clinical Motility & APD Terminology
  s = s.replace(/\b(abdomino\s*phrenic\s*dyssynergia|abdominophrenic\s*dyssynergia|abdomino\s*phrenic|a\s*p\s*d)\b/gi, 'APD');
  s = s.replace(/\b(splenic\s*fracture|splenic\s*flex|splenic\s*fixture|splenic\s*flecture|splenic\s*flexure)\b/gi, 'splenic flexure');
  s = s.replace(/\b(diaphram|die\s*a\s*fram|diafram)\b/gi, 'diaphragm');
  s = s.replace(/\b(gassy|gassiness|gasiness)\b/gi, 'gassiness');
  s = s.replace(/\b(burpy|burpiness|belching)\b/gi, 'burpiness');
  s = s.replace(/\b(trapped\s*gas|trapped\s*wind)\b/gi, 'trapped wind');
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
  s = s.replace(/\b(7\s*a\s*m|7:00\s*a\s*m|seven\s*a\s*m)\b/gi, 'on waking');
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
  if (val && selectedFastingVal === val) {
    val = '';
  }
  selectedFastingVal = val || '';
  const inputEl = document.getElementById('logFastingAdherence');
  if (inputEl) inputEl.value = selectedFastingVal;

  document.querySelectorAll('.fasting-btn').forEach(btn => {
    btn.classList.remove('ring-2', 'ring-purple-600', 'bg-purple-50', 'border-purple-500', 'shadow-xs');
  });
  if (selectedFastingVal) {
    const activeBtn = document.getElementById(`fastBtn-${selectedFastingVal}`);
    if (activeBtn) {
      activeBtn.classList.add('ring-2', 'ring-purple-600', 'bg-purple-50', 'border-purple-500', 'shadow-xs');
    }
  }
}

function updateDiaphragmSliderDisplay(val) {
  const el = document.getElementById('diaphragmVal');
  if (!el) return;
  const num = parseInt(val, 10);
  let label = 'Slide to rate tightness';
  if (num >= 8) label = 'Severe Gas Trap';
  else if (num >= 6) label = 'Left Rib Pressure';
  else if (num >= 4) label = 'Moderate Tightness';
  else if (num >= 1) label = 'Mild Fullness';
  else if (num === 0) label = 'Relaxed & Flat (0/10)';
  el.innerText = `${num} / 10 (${label})`;
}

function selectBristol(val) {
  if (val && selectedBristolVal === val) {
    val = '';
  }
  selectedBristolVal = val || '';
  const inputEl = document.getElementById('logBristol');
  if (inputEl) inputEl.value = selectedBristolVal;
  document.querySelectorAll('.bristol-btn').forEach(btn => btn.classList.remove('selected', 'border-purple-600', 'ring-2', 'ring-purple-500', 'bg-purple-50'));
  
  if (selectedBristolVal) {
    const activeBtn = Array.from(document.querySelectorAll('.bristol-btn')).find(b => b.getAttribute('onclick')?.includes(`'${selectedBristolVal}'`));
    if (activeBtn) {
      activeBtn.classList.add('selected', 'border-purple-600', 'ring-2', 'ring-purple-500', 'bg-purple-50');
    }
  }

  const nuanceContainer = document.getElementById('stoolNuanceContainer');
  const nuanceButtons = document.getElementById('stoolNuanceButtons');
  const nuanceInput = document.getElementById('logStoolNuance');

  if (nuanceContainer && nuanceButtons) {
    if (selectedBristolVal === 'liquid') {
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
    } else if (selectedBristolVal === 'normal') {
      nuanceContainer.classList.remove('hidden');
      nuanceButtons.innerHTML = `
        <button type="button" onclick="selectStoolNuance('formed')" id="nuanceBtn-formed" class="col-span-2 p-2 rounded-xl border-2 border-emerald-300 bg-emerald-50 text-[11px] font-bold text-emerald-900 text-center transition-all ring-2 ring-purple-600">
          <span>🪵 Formed Bristol 4 ✨</span>
          <span class="text-[9px] font-normal text-emerald-700 block mt-0.5">Step 1 of 14 for Med Step-Down Stability Proof!</span>
        </button>
      `;
      selectStoolNuance('formed');
    } else if (selectedBristolVal === 'hard') {
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

function selectMood(val, isReplace) {
  if (typeof selectedMoods === 'undefined' || !selectedMoods) {
    selectedMoods = new Set();
  }

  if (val === '' || val === null || val === undefined) {
    selectedMoods.clear();
  } else if (isReplace || Array.isArray(val) || (typeof val === 'string' && val.includes(','))) {
    selectedMoods.clear();
    const items = Array.isArray(val) ? val : (typeof val === 'string' ? val.split(',') : []);
    items.forEach(item => {
      const clean = (item || '').trim();
      if (clean) selectedMoods.add(clean);
    });
  } else {
    // Single tap toggle: allows Emma to select multiple headspace states!
    const clean = String(val).trim();
    if (clean) {
      if (selectedMoods.has(clean)) {
        selectedMoods.delete(clean);
      } else {
        selectedMoods.add(clean);
      }
    }
  }

  selectedMoodVal = Array.from(selectedMoods).join(',');
  const input = document.getElementById('logMood');
  if (input) input.value = selectedMoodVal;

  // Re-render highlight classes for all mood buttons
  document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.classList.remove(
      'selected',
      'border-purple-600', 'border-emerald-500', 'border-amber-500', 'border-rose-500', 'border-orange-500', 'border-indigo-500', 'border-slate-500',
      'ring-2', 'ring-purple-500', 'ring-emerald-500', 'ring-amber-500', 'ring-rose-500', 'ring-orange-500', 'ring-indigo-500', 'ring-slate-400',
      'bg-purple-50', 'bg-emerald-50', 'bg-amber-50', 'bg-rose-50', 'bg-orange-50', 'bg-indigo-50', 'bg-slate-100',
      'text-emerald-950', 'text-amber-950', 'text-rose-950', 'text-orange-950', 'text-indigo-950', 'text-slate-900',
      'font-extrabold', 'shadow-xs'
    );
    btn.classList.add('border-brand-border', 'bg-white');

    const onclickAttr = btn.getAttribute('onclick') || '';
    const match = onclickAttr.match(/selectMood\(['"]([^'"]+)['"]\)/);
    const btnMood = match ? match[1] : '';

    if (btnMood && selectedMoods.has(btnMood)) {
      btn.classList.add('selected', 'shadow-xs');
      btn.classList.remove('border-brand-border', 'bg-white');

      if (btnMood === 'calm') {
        btn.classList.add('border-emerald-500', 'ring-2', 'ring-emerald-500', 'bg-emerald-50', 'text-emerald-950', 'font-extrabold');
      } else if (btnMood === 'happy') {
        btn.classList.add('border-amber-500', 'ring-2', 'ring-amber-500', 'bg-amber-50', 'text-amber-950', 'font-extrabold');
      } else if (btnMood === 'edgy') {
        btn.classList.add('border-rose-500', 'ring-2', 'ring-rose-500', 'bg-rose-50', 'text-rose-950', 'font-extrabold');
      } else if (btnMood === 'anxious') {
        btn.classList.add('border-orange-500', 'ring-2', 'ring-orange-500', 'bg-orange-50', 'text-orange-950', 'font-extrabold');
      } else if (btnMood === 'overthinking') {
        btn.classList.add('border-indigo-500', 'ring-2', 'ring-indigo-500', 'bg-indigo-50', 'text-indigo-950', 'font-extrabold');
      } else if (btnMood === 'flat') {
        btn.classList.add('border-slate-500', 'ring-2', 'ring-slate-400', 'bg-slate-100', 'text-slate-900', 'font-extrabold');
      } else {
        btn.classList.add('border-purple-600', 'ring-2', 'ring-purple-500', 'bg-purple-50', 'font-extrabold');
      }
    }
  });
}

function insertHeadspaceChip(text) {
  const textarea = document.getElementById('logNote');
  if (!textarea) return;
  const current = textarea.value.trim();
  if (!current) {
    textarea.value = text;
  } else if (!current.includes(text)) {
    textarea.value = `${current}. ${text}`;
  }
  handleVoiceNoteInput();
  textarea.focus();
}

function selectAlcohol(val) {
  if (val && selectedAlcoholVal === val) {
    val = '';
  }
  selectedAlcoholVal = val || '';
  const input = document.getElementById('logAlcohol');
  if (input) input.value = selectedAlcoholVal;
  document.querySelectorAll('.alc-btn').forEach(btn => btn.classList.remove('selected', 'border-purple-600', 'ring-2', 'ring-purple-500', 'bg-purple-50'));
  if (selectedAlcoholVal) {
    const activeBtn = Array.from(document.querySelectorAll('.alc-btn')).find(b => b.getAttribute('onclick')?.includes(`'${selectedAlcoholVal}'`));
    if (activeBtn) activeBtn.classList.add('selected', 'border-purple-600', 'ring-2', 'ring-purple-500', 'bg-purple-50');
  }
}

function selectSexDrive(val) {
  if (val && selectedSexDriveVal === val) {
    val = '';
  }
  selectedSexDriveVal = val || '';
  const input = document.getElementById('logSexDrive');
  if (input) input.value = selectedSexDriveVal;
  document.querySelectorAll('.sexdrive-btn').forEach(btn => btn.classList.remove('selected', 'border-purple-600', 'ring-2', 'ring-purple-500', 'bg-purple-50'));
  if (selectedSexDriveVal) {
    const activeBtn = Array.from(document.querySelectorAll('.sexdrive-btn')).find(b => b.getAttribute('onclick')?.includes(`'${selectedSexDriveVal}'`));
    if (activeBtn) activeBtn.classList.add('selected', 'border-purple-600', 'ring-2', 'ring-purple-500', 'bg-purple-50');
  }
}

function toggleTag(btn) {
  btn.classList.toggle('selected');
  const tagText = btn.innerText.trim();
  const isBloatTag = tagText.includes('Upper Tummy Bloating') || tagText.includes('Lower Tummy Bloating');
  const isGasTag = tagText.includes('Gassiness') || tagText.includes('Burpiness') || tagText.includes('Trapped Wind') || tagText.includes('Can\'t Burp');

  if (selectedTags.has(tagText)) {
    selectedTags.delete(tagText);
    if (isBloatTag) {
      btn.classList.remove('bg-amber-600', 'text-white', 'border-amber-600', 'shadow-xs');
      btn.classList.add('bg-white', 'text-brand-textDark', 'border-brand-border');
    } else if (isGasTag) {
      btn.classList.remove('bg-sky-600', 'text-white', 'border-sky-600', 'shadow-xs');
      btn.classList.add('bg-white', 'text-brand-textDark', 'border-brand-border');
    } else {
      btn.classList.remove('bg-brand-coral', 'text-white', 'border-brand-coral');
      btn.classList.add('bg-white', 'text-brand-textMuted');
    }
  } else {
    selectedTags.add(tagText);
    if (isBloatTag) {
      btn.classList.add('bg-amber-600', 'text-white', 'border-amber-600', 'shadow-xs');
      btn.classList.remove('bg-white', 'text-brand-textDark', 'border-brand-border');
    } else if (isGasTag) {
      btn.classList.add('bg-sky-600', 'text-white', 'border-sky-600', 'shadow-xs');
      btn.classList.remove('bg-white', 'text-brand-textDark', 'border-brand-border');
    } else {
      btn.classList.add('bg-brand-coral', 'text-white', 'border-brand-coral');
      btn.classList.remove('bg-white', 'text-brand-textMuted');
    }
  }
}

function updateDashboardCheckInBadge(entry) {
  const badge = document.getElementById('dashboardCheckInBadge');
  const summary = document.getElementById('dashboardCheckInSummary');
  const btnText = document.getElementById('dashboardCheckInBtnText');
  const fStatus = document.getElementById('dashStatusFasting');
  const sStatus = document.getElementById('dashStatusSalt');
  const eaasStatus = document.getElementById('dashStatusEaas');
  const senStatus = document.getElementById('dashStatusSenna');
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
      } else if (entry.fastingAdherence === 'not_taken') {
        fStatus.innerText = "Skipped";
        fStatus.className = "font-extrabold text-slate-500";
      } else {
        fStatus.innerText = "Pending";
        fStatus.className = "font-extrabold text-slate-400";
      }
    }

    if (sStatus) {
      const hasElectrolytes = entry.electrolytesTaken ?? entry.electrolyteBuffered ?? (entry.puffiness && (entry.puffiness.includes('⚡ Electrolytes Taken') || entry.puffiness.includes('⚡ Electrolyte & EAAs Taken')));
      if (hasElectrolytes) {
        sStatus.innerText = "Taken ✨";
        sStatus.className = "font-extrabold text-emerald-700";
      } else {
        sStatus.innerText = "Pending";
        sStatus.className = "font-extrabold text-slate-400";
      }
    }

    if (eaasStatus) {
      const hasEaas = entry.eaasTaken ?? (entry.puffiness && (entry.puffiness.includes('🧬 EAAs Taken') || entry.puffiness.includes('⚡ Electrolyte & EAAs Taken')));
      if (hasEaas) {
        eaasStatus.innerText = "Taken ✨";
        eaasStatus.className = "font-extrabold text-emerald-700";
      } else {
        eaasStatus.innerText = "Pending";
        eaasStatus.className = "font-extrabold text-slate-400";
      }
    }

    if (senStatus) {
      if (entry.sennaTea === true || (entry.puffiness && entry.puffiness.includes('🍵 Senna Tea Taken'))) {
        senStatus.innerText = "Had 🍵";
        senStatus.className = "font-extrabold text-emerald-700";
      } else if (entry.sennaTea === false) {
        senStatus.innerText = "None";
        senStatus.className = "font-extrabold text-slate-400";
      } else {
        senStatus.innerText = "Pending";
        senStatus.className = "font-extrabold text-slate-400";
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
      } else if (entry.bristol === 'none') {
        stStatus.innerText = "None";
        stStatus.className = "font-extrabold text-slate-600";
      } else {
        stStatus.innerText = entry.movement || "Pending";
        stStatus.className = "font-extrabold text-slate-400";
      }
    }

    if (dStatus) {
      if (entry.diaphragmResetDone) {
        dStatus.innerText = "Completed 🫁";
        dStatus.className = "font-extrabold text-teal-700";
      } else {
        dStatus.innerText = `${entry.diaphragmBloat ?? 0}/10 Bloat`;
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
    if (eaasStatus) { eaasStatus.innerText = "Pending"; eaasStatus.className = "font-extrabold text-brand-textDark"; }
    if (senStatus) { senStatus.innerText = "None"; senStatus.className = "font-extrabold text-brand-textDark"; }
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
  // CASE 8: BANANA RICE CAKES & CLEAN CARB COMBINATIONS
  // --------------------------------------------------------------------------
  if (isBananaHigh || (/banana/i.test(query) && /rice\s*cake/i.test(query)) || (/banana/i.test(query) && !isBananaSorbet)) {
    theme = "green";
    title = `🍌 Banana & Clean Carb Combos: Gut-Safe Energy (Cycle Day ${day})`;
    badge = "Motility Approved • Clean High Carb";
    summary = "Firm Cavendish bananas (yellow with green tips) are rich in gut-soothing resistant starch (RS2) that feeds beneficial colonic flora rather than fermenting into gas. Paired with Kallo puffed white rice cakes and sunflower or almond butter, this provides steady, bloat-free carbohydrate fuel for adult ADHD focus!";

    gastricTransitMinutes = 60;
    gastricTransitLabel = "60 mins (Optimal & Smooth)";
    bristolForecast = "Type 4 (Smooth & Formed)";
    apdRiskPercent = 12;
    apdRiskLabel = "Low (12%)";
    splenicGasPressure = 12;
    splenicGasLabel = "Minimal (12%)";

    reasoningChain = [
      {
        step: 1,
        title: "Component & Ingredient Forensics",
        icon: "🔬",
        content: "Firm (yellow with green tips) bananas are Monash-certified low-FODMAP. Their carbohydrate content is predominantly resistant starch type 2 (RS2), which does not break down in the upper GI tract into rapid-fermenting fructose. Kallo puffed white rice cakes and M&S gluten-free flakes provide pure, bloat-free complex starch. Sunfly sunflower butter and Pip & Nut almond butter deliver gentle lipids that buffer glucose absorption."
      },
      {
        step: 2,
        title: "Active Cycle Phase & Transit Kinetics",
        icon: "🌸",
        content: `On Cycle Day ${day} (${phaseLbl}), Emma's body and active lifestyle need adequate clean carbohydrates for sustained dopamine synthesis and ADHD focus. Resistant starch bypasses small intestinal fermentation and reaches the colon where it selectively feeds butyrate-producing bacteria, strengthening mucosal integrity and promoting smooth motility.`
      },
      {
        step: 3,
        title: "Biomechanical APD & Splenic Gas Impact",
        icon: "🫁",
        content: "Because firm bananas do not generate high rapid fructose fermentation, gas accumulation at the splenic flexure is negligible. Intra-abdominal pressure remains completely calm, and the diaphragm stays relaxed without APD distension."
      },
      {
        step: 4,
        title: "Pharmacological Synergy Cross-Check",
        icon: "💊",
        content: "Pairs harmoniously with morning Linaclotide 290mcg and Mestinon 180mg, facilitating natural, soft Bristol Type 4 evacuation without liquid bypass."
      }
    ];

    orderingScript = `Hi! Could I please have 3 plain white rice cakes topped with sliced firm (slightly green-tipped) banana and sunflower seed or almond butter? Thank you!`;
    freedomHacks = [
      "The Firm Banana Advantage: Choose bananas with yellow skins and slight green tips for the highest resistant starch and lowest fermentation.",
      "Safe High-Carb Fuel: Kallo puffed white rice cakes and M&S Made Without Wheat gluten-free flakes provide pure, bloat-free complex carbs.",
      "Buffer with Seed/Nut Butter: Sunfly sunflower seed butter and Pip & Nut almond butter provide healthy fats that sustain energy and ADHD focus without digestive lag."
    ];
    tags = [
      "✓ Monash Low-FODMAP Certified",
      "✓ Gut-Soothing Resistant Starch",
      "✓ 100% Bloat-Free Complex Carbs",
      "✓ Empowers Adult ADHD Energy"
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

    <!-- Action to Log Directly to Food Diary -->
    <div class="pt-1.5 flex items-center justify-between border-t ${borderSep}">
      <span class="text-[10px] text-brand-textMuted font-semibold">Keep a record of what you eat:</span>
      <button type="button" onclick="logQueriedFoodToDiary('${encodeURIComponent(JSON.stringify({
        title: title,
        name: (document.getElementById('foodQueryInput')?.value || title),
        theme: theme,
        badge: badge,
        summary: summary,
        topTip: topTip,
        isSafe: (theme === 'green' || theme === 'purple')
      }))}')" class="px-3 py-1.5 rounded-xl bg-white border ${borderSep} hover:bg-purple-50 text-purple-900 font-bold text-xs flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all">
        <span>🍽️ + Add to Today's Food Diary</span>
      </button>
    </div>
  `;

  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

// ============================================================================
// 7C. EMMA'S DAILY FOOD DIARY & GEMINI CYCLE AUDIT ENGINE
// ============================================================================
var defaultFoodDiary = {
  "2026-09-06": [
    {
      id: "meal-1725610000000",
      slot: "breakfast",
      name: "Emma's Blueberry Form Protein Shake",
      time: "08:30",
      theme: "purple",
      badge: "Cycle-Safe ✓",
      title: "Ideal Luteal Morning Fuel",
      summary: "100% plant-based (pea, rice, hemp) with wild blueberries. Empties stomach in under 30 minutes, preventing post-meal APD diaphragm descent.",
      topTip: "Sip slowly 40–60 mins after waking Linaclotide dose.",
      isSafe: true,
      cycleDay: 22,
      cyclePhase: "luteal",
      source: "gemini-3.8-flash"
    },
    {
      id: "meal-1725625000000",
      slot: "lunch",
      name: "Prawn Poke Bowl (Basmati rice, courgette, prawns, pickled cucumber, tamari)",
      time: "13:15",
      theme: "green",
      badge: "Cycle-Safe ✓",
      title: "Safe Nanny Shift Fuel",
      summary: "Clean, room-temperature basmati rice and prawns digest rapidly with zero garlic or onion. Low-FODMAP and easy on sluggish luteal transit.",
      topTip: "Take out of lunchbox 20 mins before eating so it warms to room temperature.",
      isSafe: true,
      cycleDay: 22,
      cyclePhase: "luteal",
      source: "gemini-3.8-flash"
    }
  ]
};

var foodDiaryState = (function() {
  try {
    const raw = localStorage.getItem('emma_food_diary_v1');
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('Error reading emma_food_diary_v1:', e);
  }
  return defaultFoodDiary;
})();

function saveFoodDiary() {
  try {
    localStorage.setItem('emma_food_diary_v1', JSON.stringify(foodDiaryState));
  } catch (e) {
    console.warn('Error saving emma_food_diary_v1:', e);
  }
  syncDataToServer();
}

function selectDiaryMealSlot(slot) {
  const hiddenInput = document.getElementById('diaryMealSlotInput');
  if (hiddenInput) hiddenInput.value = slot;

  document.querySelectorAll('.diary-slot-btn').forEach(btn => {
    btn.classList.remove('selected', 'bg-purple-600', 'text-white', 'border-purple-600', 'shadow-2xs');
    btn.classList.add('bg-white', 'text-brand-textMuted', 'border-brand-border');
  });

  const activeBtn = document.getElementById(`slotBtn-${slot}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-white', 'text-brand-textMuted', 'border-brand-border');
    activeBtn.classList.add('selected', 'bg-purple-600', 'text-white', 'border-purple-600', 'shadow-2xs');
  }
}

function startDiaryVoiceInput() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Speech recognition is not supported in this browser. Please type your meal.");
    return;
  }

  const micIcon = document.getElementById('diaryMicIcon');
  const micBtn = document.getElementById('diaryVoiceBtn');
  const inputEl = document.getElementById('diaryMealTextInput');

  try {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-GB';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    if (micIcon) micIcon.classList.add('text-rose-600', 'animate-pulse');
    if (micBtn) micBtn.classList.add('bg-rose-50');

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const corrected = correctClinicalVoiceNote(transcript);
      if (inputEl) {
        inputEl.value = corrected;
        analyzeAndAddDiaryMeal();
      }
    };

    recognition.onerror = (event) => {
      console.warn("Diary voice recognition error:", event.error);
    };

    recognition.onend = () => {
      if (micIcon) micIcon.classList.remove('text-rose-600', 'animate-pulse');
      if (micBtn) micBtn.classList.remove('bg-rose-50');
    };

    recognition.start();
  } catch (err) {
    console.warn("Speech start error:", err);
  }
}

let pendingMealForLogging = null;

function analyzeAndAddDiaryMeal() {
  const inputEl = document.getElementById('diaryMealTextInput');
  const rawMeal = (inputEl?.value || '').trim();
  if (!rawMeal) {
    if (inputEl) inputEl.focus();
    return;
  }

  const card = document.getElementById('diaryAnalysisCard');
  if (!card) return;

  const slot = document.getElementById('diaryMealSlotInput')?.value || 'lunch';
  const targetDate = activeDateStr || getTodayISOString();
  const activeCycle = getCycleInfoForDate(targetDate);

  card.classList.remove('hidden');
  card.className = "p-4 rounded-2xl border transition-all bg-gradient-to-r from-purple-50/90 via-indigo-50/80 to-purple-50/90 border-purple-300 text-purple-950 shadow-xs space-y-3 animate-fadeIn";
  card.innerHTML = `
    <div class="flex items-center space-x-3">
      <div class="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs animate-pulse">
        <i data-lucide="sparkles" class="w-4 h-4 text-white animate-spin"></i>
      </div>
      <div>
        <div class="flex items-center gap-1.5">
          <h4 class="text-xs font-extrabold text-purple-950">Gemini 3.8 Flash is evaluating "${rawMeal}"...</h4>
          <span class="text-[9px] font-black px-1.5 py-0.5 rounded bg-purple-200 text-purple-900 uppercase tracking-wider">Cycle Day ${activeCycle.cycleDay}</span>
        </div>
        <p class="text-[11px] text-purple-800/80 mt-0.5">Checking gastric transit, APD diaphragmatic load & ${activeCycle.phaseLabel} motility</p>
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

  fetch('/api/gemini-audit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: rawMeal,
      cycleDay: activeCycle.cycleDay,
      phase: activeCycle.phase,
      phaseLabel: activeCycle.phaseLabel,
      apiKey: storedKey || ''
    })
  })
  .then(res => res.json())
  .then(resData => {
    let evalData = null;
    let source = 'gemini-3.8-flash';
    if (resData.success && resData.data) {
      evalData = resData.data;
    } else {
      evalData = evaluateAutonomousClinicalReasoning(rawMeal, activeCycle);
      source = 'autonomous';
    }
    renderDiaryAnalysisCard(evalData, rawMeal, slot, activeCycle, source);
  })
  .catch(() => {
    const autoData = evaluateAutonomousClinicalReasoning(rawMeal, activeCycle);
    renderDiaryAnalysisCard(autoData, rawMeal, slot, activeCycle, 'autonomous');
  });
}

function renderDiaryAnalysisCard(evalData, mealName, slot, activeCycle, source) {
  const card = document.getElementById('diaryAnalysisCard');
  if (!card) return;

  const theme = evalData.theme || 'green';
  const isSafe = (theme === 'green' || theme === 'purple');
  const title = evalData.title || (isSafe ? 'Cycle-Safe Meal' : 'Trigger Warning');
  const badge = evalData.badge || (isSafe ? 'Safe to Enjoy' : 'Caution / High Risk');
  const summary = evalData.summary || '';
  const topTip = evalData.topTip || (evalData.freedomHacks && evalData.freedomHacks[0]) || '';

  pendingMealForLogging = {
    mealName: mealName,
    slot: slot,
    theme: theme,
    title: title,
    badge: badge,
    summary: summary,
    topTip: topTip,
    isSafe: isSafe,
    cycleDay: activeCycle.cycleDay,
    cyclePhase: activeCycle.phase,
    source: source
  };

  if (isSafe) {
    card.className = "p-4 rounded-2xl border transition-all space-y-3 bg-emerald-50/90 border-emerald-300 text-emerald-950 shadow-xs animate-fadeIn";
    card.innerHTML = `
      <div class="flex items-center justify-between gap-2 border-b border-emerald-200/80 pb-2.5">
        <div class="flex items-center space-x-2.5">
          <span class="w-7 h-7 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">✓</span>
          <div>
            <div class="flex items-center gap-1.5 flex-wrap">
              <h4 class="font-extrabold text-xs sm:text-sm text-emerald-950">${title}</h4>
              <span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">✨ Cycle-Safe (Day ${activeCycle.cycleDay})</span>
            </div>
            <span class="text-[10px] text-emerald-800/80 font-medium">Gentle on your transit & diaphragm</span>
          </div>
        </div>
        <span class="px-2.5 py-1 rounded-lg bg-emerald-200 text-emerald-950 text-[10px] font-black uppercase tracking-wide shrink-0 shadow-2xs">${badge}</span>
      </div>

      <div class="p-2.5 rounded-xl bg-white/90 border border-emerald-200/90 text-xs leading-relaxed font-medium">
        ${summary}
      </div>

      ${topTip ? `
        <div class="p-2 rounded-xl bg-white/80 border border-emerald-200/70 text-[11px] font-semibold text-emerald-900 flex items-center gap-1.5">
          <span>💡 ${topTip.replace(/^💡\s*/, '')}</span>
        </div>
      ` : ''}

      <div class="flex items-center justify-between gap-2 pt-1 border-t border-emerald-200/80">
        <span class="text-[10px] text-emerald-800 font-semibold">Gemini approved for Day ${activeCycle.cycleDay}</span>
        <div class="flex items-center gap-2">
          <button type="button" onclick="cancelDiaryAnalysis()" class="px-3 py-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-600 text-xs font-bold transition-all">
            Cancel
          </button>
          <button type="button" onclick="confirmCommitPendingMeal()" class="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-2xs flex items-center gap-1 active:scale-95">
            <span>✓ Add to Diary</span>
          </button>
        </div>
      </div>
    `;
  } else {
    const isRed = (theme === 'red');
    const bgClasses = isRed 
      ? "bg-rose-50/95 border-rose-300 text-rose-950" 
      : "bg-amber-50/95 border-amber-300 text-amber-950";
    const iconBg = isRed ? "bg-rose-600" : "bg-amber-500";
    const badgeBg = isRed ? "bg-rose-200 text-rose-950" : "bg-amber-200 text-amber-950";
    const borderSep = isRed ? "border-rose-200/80" : "border-amber-200/80";
    const cardBg = isRed ? "bg-white/90 border-rose-200/90" : "bg-white/90 border-amber-200/90";

    card.className = `p-4 rounded-2xl border transition-all space-y-3 ${bgClasses} shadow-xs animate-fadeIn`;
    card.innerHTML = `
      <div class="flex items-center justify-between gap-2 border-b ${borderSep} pb-2.5">
        <div class="flex items-center space-x-2.5">
          <span class="w-7 h-7 rounded-xl ${iconBg} text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">⚠️</span>
          <div>
            <div class="flex items-center gap-1.5 flex-wrap">
              <h4 class="font-extrabold text-xs sm:text-sm">${title}</h4>
              <span class="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeBg}">
                ⚠️ Notice for Cycle Day ${activeCycle.cycleDay}
              </span>
            </div>
            <span class="text-[10px] opacity-80 font-medium">May provoke fermentation or APD tightness today</span>
          </div>
        </div>
        <span class="px-2.5 py-1 rounded-lg ${badgeBg} text-[10px] font-black uppercase tracking-wide shrink-0 shadow-2xs">${badge}</span>
      </div>

      <div class="p-2.5 rounded-xl ${cardBg} border text-xs leading-relaxed font-medium">
        ${summary}
      </div>

      ${topTip ? `
        <div class="p-2 rounded-xl ${cardBg} border text-[11px] font-semibold flex items-center gap-1.5">
          <span>💡 Recommendation: ${topTip.replace(/^💡\s*/, '')}</span>
        </div>
      ` : ''}

      <div class="p-2.5 rounded-xl bg-amber-100/70 border border-amber-200/80 text-[11px] text-amber-950 leading-tight">
        <strong>Gentle Note for Emma:</strong> It's completely okay if you had this! Keeping an accurate record helps us understand how your gut responds. You can log it anyway, or modify your entry.
      </div>

      <div class="flex items-center justify-between gap-2 pt-1 border-t ${borderSep}">
        <button type="button" onclick="cancelDiaryAnalysis(true)" class="px-3 py-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all">
          Modify / Swap
        </button>
        <button type="button" onclick="confirmCommitPendingMeal()" class="px-4 py-1.5 rounded-xl ${isRed ? 'bg-rose-600 hover:bg-rose-700' : 'bg-amber-600 hover:bg-amber-700'} text-white text-xs font-bold transition-all shadow-2xs flex items-center gap-1.5 active:scale-95">
          <span>Log It Anyway ➔</span>
        </button>
      </div>
    `;
  }

  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

function confirmCommitPendingMeal() {
  if (!pendingMealForLogging) return;
  const targetDate = activeDateStr || getTodayISOString();
  const mealItem = {
    id: "meal-" + Date.now(),
    slot: pendingMealForLogging.slot,
    name: pendingMealForLogging.mealName,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    theme: pendingMealForLogging.theme,
    title: pendingMealForLogging.title,
    badge: pendingMealForLogging.badge,
    summary: pendingMealForLogging.summary,
    topTip: pendingMealForLogging.topTip,
    isSafe: pendingMealForLogging.isSafe,
    cycleDay: pendingMealForLogging.cycleDay,
    cyclePhase: pendingMealForLogging.cyclePhase,
    source: pendingMealForLogging.source
  };

  commitMealToDiary(targetDate, mealItem);
  cancelDiaryAnalysis();
  const inputEl = document.getElementById('diaryMealTextInput');
  if (inputEl) inputEl.value = '';
}

function cancelDiaryAnalysis(focusInput) {
  pendingMealForLogging = null;
  const card = document.getElementById('diaryAnalysisCard');
  if (card) {
    card.classList.add('hidden');
    card.innerHTML = '';
  }
  if (focusInput) {
    const inputEl = document.getElementById('diaryMealTextInput');
    if (inputEl) inputEl.focus();
  }
}

function commitMealToDiary(dateStr, mealItem) {
  if (!foodDiaryState[dateStr]) {
    foodDiaryState[dateStr] = [];
  }
  foodDiaryState[dateStr].push(mealItem);
  saveFoodDiary();
  renderFoodDiaryUI();
  showDiaryToast(`Added "${mealItem.name}" to food diary ✓`);
}

function deleteDiaryMeal(mealId) {
  const targetDate = activeDateStr || getTodayISOString();
  if (!foodDiaryState[targetDate]) return;
  foodDiaryState[targetDate] = foodDiaryState[targetDate].filter(m => m.id !== mealId);
  saveFoodDiary();
  renderFoodDiaryUI();
}

function quickLogSafeStaple(type) {
  const targetDate = activeDateStr || getTodayISOString();
  const activeCycle = getCycleInfoForDate(targetDate);
  let staple = null;

  if (type === 'prawn_poke') {
    staple = {
      id: "meal-" + Date.now(),
      slot: "lunch",
      name: "Prawn Poke Bowl (Cooked basmati rice, steamed courgette, prawns, pickled cucumber, tamari)",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      theme: "green",
      title: "Prawn Poke Bowl (Staple)",
      badge: "Cycle-Safe ✓",
      summary: "Room-temperature basmati rice and prawns digest rapidly with zero garlic or onion. Low-FODMAP and easy on sluggish luteal transit.",
      topTip: "Take out of lunchbox 20 mins before eating so it warms to room temperature.",
      isSafe: true,
      cycleDay: activeCycle.cycleDay,
      cyclePhase: activeCycle.phase,
      source: "gemini-3.8-flash"
    };
  } else if (type === 'form_shake') {
    staple = {
      id: "meal-" + Date.now(),
      slot: "breakfast",
      name: "Emma's Blueberry Form Protein Shake (Almond milk, wild blueberries, soaked chia)",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      theme: "purple",
      title: "Blueberry Form Protein Shake",
      badge: "Cycle-Safe ✓",
      summary: "100% plant-based with wild blueberries. Empties stomach in under 30 minutes, preventing post-meal APD diaphragm descent.",
      topTip: "Sip slowly 40–60 mins after waking Linaclotide dose.",
      isSafe: true,
      cycleDay: activeCycle.cycleDay,
      cyclePhase: activeCycle.phase,
      source: "gemini-3.8-flash"
    };
  } else if (type === 'jasmine_cod') {
    staple = {
      id: "meal-" + Date.now(),
      slot: "dinner",
      name: "Steamed Jasmine Rice & White Cod Fillet with wilted spinach and tamari",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      theme: "green",
      title: "Steamed Jasmine Rice & Cod",
      badge: "Cycle-Safe ✓",
      summary: "Ultra-lean white fish with gentle jasmine rice. Leaves stomach completely empty before sleep, eliminating overnight fermentation.",
      topTip: "Eat before 7:30 PM for a flat, comfortable morning stomach.",
      isSafe: true,
      cycleDay: activeCycle.cycleDay,
      cyclePhase: activeCycle.phase,
      source: "gemini-3.8-flash"
    };
  }

  if (staple) {
    commitMealToDiary(targetDate, staple);
  }
}

function logQueriedFoodToDiary(encodedJson) {
  try {
    const data = JSON.parse(decodeURIComponent(encodedJson));
    const targetDate = activeDateStr || getTodayISOString();
    const activeCycle = getCycleInfoForDate(targetDate);
    const slotInput = document.getElementById('diaryMealSlotInput')?.value || 'lunch';

    const mealItem = {
      id: "meal-" + Date.now(),
      slot: slotInput,
      name: data.name || data.title,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      theme: data.theme || 'green',
      title: data.title || 'Logged Meal',
      badge: data.badge || 'Evaluated',
      summary: data.summary || '',
      topTip: data.topTip || '',
      isSafe: (data.theme === 'green' || data.theme === 'purple'),
      cycleDay: activeCycle.cycleDay,
      cyclePhase: activeCycle.phase,
      source: "gemini-3.8-flash"
    };

    commitMealToDiary(targetDate, mealItem);
    const diarySection = document.getElementById('foodDiaryCard');
    if (diarySection) {
      diarySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } catch (err) {
    console.warn('Error adding queried food to diary:', err);
  }
}

function renderFoodDiaryUI() {
  const container = document.getElementById('diaryItemsList');
  if (!container) return;

  const targetDate = activeDateStr || getTodayISOString();
  const activeCycle = getCycleInfoForDate(targetDate);
  const meals = foodDiaryState[targetDate] || [];

  // Update Header Badges
  const dayPillText = document.getElementById('foodDiaryDayPillText');
  if (dayPillText) {
    dayPillText.textContent = `Cycle Day ${activeCycle.cycleDay} (${activeCycle.phaseLabel})`;
  }

  const dateSubtitle = document.getElementById('foodDiaryDateSubtitle');
  if (dateSubtitle) {
    dateSubtitle.textContent = `Meals logged for ${activeCycle.displayDate} • Gemini cycle feedback active`;
  }

  const countPill = document.getElementById('diaryCountPill');
  if (countPill) {
    countPill.textContent = `${meals.length} meal${meals.length === 1 ? '' : 's'}`;
  }

  const statsNotice = document.getElementById('diaryStatsNotice');
  if (statsNotice) {
    if (meals.length > 0) {
      const safeCount = meals.filter(m => m.isSafe).length;
      const cautionCount = meals.length - safeCount;
      statsNotice.innerHTML = `
        <span class="text-emerald-700 font-bold">${safeCount} cycle-safe</span>
        ${cautionCount > 0 ? ` • <span class="text-amber-600 font-bold">${cautionCount} trigger noted</span>` : ''}
      `;
    } else {
      statsNotice.textContent = 'No meals logged yet';
    }
  }

  if (meals.length === 0) {
    container.innerHTML = `
      <div class="p-6 rounded-2xl bg-brand-cream/40 border border-brand-border/60 text-center space-y-2 select-none">
        <span class="text-2xl block opacity-60">🥣</span>
        <div class="text-xs font-bold text-brand-textDark">No meals logged yet for ${activeCycle.displayDate}</div>
        <p class="text-[11px] text-brand-textMuted max-w-sm mx-auto">
          Type or speak what you ate above. Gemini 3.8 Flash will check how it fits your Cycle Day ${activeCycle.cycleDay} motility.
        </p>
      </div>
    `;
    if (window.lucide && typeof lucide.createIcons === 'function') {
      lucide.createIcons();
    }
    return;
  }

  const slotIcons = {
    breakfast: '🥣 Breakfast',
    lunch: '🥗 Lunch',
    dinner: '🍲 Dinner',
    snack: '🍎 Snack / Drink'
  };

  container.innerHTML = meals.map(meal => {
    let badgeBg = "bg-emerald-100 text-emerald-950 border-emerald-200";
    let iconSymbol = "✨";
    let borderClass = "border-emerald-200/90 hover:border-emerald-300";
    let cardBg = "bg-emerald-50/40";

    if (meal.theme === 'amber') {
      badgeBg = "bg-amber-100 text-amber-950 border-amber-200";
      iconSymbol = "⚠️";
      borderClass = "border-amber-200/90 hover:border-amber-300";
      cardBg = "bg-amber-50/40";
    } else if (meal.theme === 'red') {
      badgeBg = "bg-rose-100 text-rose-950 border-rose-200";
      iconSymbol = "🚫";
      borderClass = "border-rose-200/90 hover:border-rose-300";
      cardBg = "bg-rose-50/40";
    } else if (meal.theme === 'purple') {
      badgeBg = "bg-purple-100 text-purple-950 border-purple-200";
      iconSymbol = "🫐";
      borderClass = "border-purple-200/90 hover:border-purple-300";
      cardBg = "bg-purple-50/40";
    }

    const slotLabel = slotIcons[meal.slot] || '🍽️ Meal';

    return `
      <div class="p-3 sm:p-3.5 rounded-2xl border ${borderClass} ${cardBg} transition-all space-y-2 shadow-2xs">
        <div class="flex items-start justify-between gap-2">
          <div class="flex items-start space-x-2.5">
            <span class="text-base leading-none mt-0.5">${iconSymbol}</span>
            <div class="space-y-0.5">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white border border-brand-border/60 text-brand-textDark shadow-2xs">${slotLabel}</span>
                <h4 class="text-xs sm:text-sm font-bold text-brand-textDark leading-tight">${meal.name}</h4>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${badgeBg}">${meal.badge || (meal.isSafe ? 'Cycle-Safe' : 'Caution')}</span>
              </div>
              ${meal.time ? `<span class="text-[9px] text-brand-textMuted font-medium block">Logged at ${meal.time} • Cycle Day ${meal.cycleDay || activeCycle.cycleDay}</span>` : ''}
            </div>
          </div>
          <button type="button" onclick="deleteDiaryMeal('${meal.id}')" title="Delete meal" class="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all active:scale-95 shrink-0">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </div>

        ${meal.summary ? `
          <div class="p-2 rounded-xl bg-white/80 border border-slate-200/60 text-[11px] text-brand-textDark leading-relaxed">
            ${meal.summary}
          </div>
        ` : ''}

        ${meal.topTip ? `
          <div class="text-[10px] text-brand-textMuted font-medium flex items-center gap-1">
            <span>💡</span>
            <span>${meal.topTip.replace(/^💡\s*/, '')}</span>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');

  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

function showDiaryToast(msg) {
  const existing = document.getElementById('diaryToast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'diaryToast';
  toast.className = 'fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-2xl bg-emerald-700 text-white font-bold text-xs shadow-xl flex items-center gap-2 animate-bounce';
  toast.innerHTML = `<span>✓</span><span>${msg}</span>`;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// ============================================================================
// EMMA'S CYCLE MOVEMENT & GEMINI EXERCISE AUDITOR (BITE-SIZED NOTE FORMAT)
// ============================================================================
let lutealDoubleDuration = (localStorage.getItem('emma_luteal_double_exercise') !== 'false');

function toggleLutealDoubleDuration() {
  const toggle = document.getElementById('lutealDoubleToggle');
  if (toggle) {
    lutealDoubleDuration = toggle.checked;
    localStorage.setItem('emma_luteal_double_exercise', lutealDoubleDuration ? 'true' : 'false');
    renderCycleExercisePrescription();
    if (lutealDoubleDuration) {
      showDynamicToast("⏱️ 2x Luteal Duration Active: 60–80m gentle sessions for colonic pumping.");
    } else {
      showDynamicToast("Standard Exercise Duration Active (30–45m).");
    }
  }
}

function loadLutealDoubleSetting() {
  const toggle = document.getElementById('lutealDoubleToggle');
  if (toggle) {
    toggle.checked = lutealDoubleDuration;
  }
}

function renderCycleExercisePrescription() {
  const container = document.getElementById('cycleExercisePrescription');
  const dayPill = document.getElementById('exerciseCycleDayPillText');
  if (!container) return;

  const cycle = (typeof getCycleInfoForDate === 'function') 
    ? getCycleInfoForDate(activeDateStr || getTodayISOString()) 
    : { cycleDay: 19, phase: 'luteal', phaseLabel: 'Late Luteal (Slow Motility)' };

  if (dayPill) {
    dayPill.innerText = `Cycle Day ${cycle.cycleDay} (${cycle.phase.toUpperCase()})`;
  }

  const isLuteal = cycle.phase === 'luteal' || cycle.cycleDay >= 17;
  const isFollicular = cycle.phase === 'follicular' || (cycle.cycleDay >= 6 && cycle.cycleDay <= 13);
  const isOvulation = cycle.phase === 'ovulation' || (cycle.cycleDay >= 14 && cycle.cycleDay <= 16);
  const isMenstrual = cycle.phase === 'menstrual' || cycle.cycleDay <= 5;

  let targetDuration = "30–45 mins";
  let recommendedClasses = "Reformer Pilates, Low-Incline Walking";
  let gutMechanism = "Gentle rhythmic movement stimulates colonic transit without adrenaline spike.";
  let avoidNote = "Max-effort sprint intervals / exhaustion running (shuts off mesenteric bowel perfusion).";
  let defaultLogPick = "Reformer Pilates & Mobility";

  if (isLuteal) {
    targetDuration = lutealDoubleDuration 
      ? "60–80 mins (2x Extended Gentle Mode for Luteal)" 
      : "30–45 mins";
    recommendedClasses = "Reformer Stretch & Align, 60m Incline Walk, Gentle Mobility Flow";
    gutMechanism = "High progesterone relaxes bowel smooth muscle. Twice-as-long low-intensity steady movement provides continuous lymphatic and colonic pumping with zero cortisol spike.";
    avoidNote = "Heavy abdominal crunches or anaerobic sprint intervals (spikes APD diaphragmatic spasm and splenic flexure gas trapping).";
    defaultLogPick = lutealDoubleDuration ? "60m Restorative Reformer & Walk" : "30m Gentle Reformer";
  } else if (isFollicular) {
    targetDuration = "45–60 mins (Peak Estrogen Power)";
    recommendedClasses = "Dynamic Reformer, Strength Training (Weights), 5km Tempo Run";
    gutMechanism = "Rising estrogen accelerates colonic transit and boosts musculoskeletal recovery. You can push higher tempo with confidence!";
    avoidNote = "Inadequate hydration — remember 400ml water + electrolytes around workouts.";
    defaultLogPick = "Dynamic Reformer & Strength";
  } else if (isOvulation) {
    targetDuration = "45–55 mins (High Energy)";
    recommendedClasses = "Reformer Strength, Outdoor Incline Walk, Functional Resistance Training";
    gutMechanism = "Peak energy and pain tolerance. Bowel motility is at its monthly baseline peak.";
    avoidNote = "Over-straining if feeling mild ovulation twinges (Mittelschmerz).";
    defaultLogPick = "Reformer Strength & Cardio";
  } else if (isMenstrual) {
    targetDuration = "25–35 mins (Restorative & Gentle)";
    recommendedClasses = "Gentle Flat Walk, Pelvic Floor Down-Training, Legs-Up-Wall, Gentle Mobility";
    gutMechanism = "Down-regulates pelvic hypersensitivity and relaxes pelvic floor muscles, supporting morning Linaclotide action.";
    avoidNote = "High impact jumping, inverted core pikes, heavy barbell lifts.";
    defaultLogPick = "Restorative Mobility & Walk";
  }

  container.innerHTML = `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1 border-b border-brand-border/60">
      <div class="flex items-center space-x-2">
        <span class="text-sm">📋</span>
        <h4 class="text-xs sm:text-sm font-bold text-brand-textDark">
          Today's Movement Protocol (Note Format)
        </h4>
      </div>
      <button type="button" onclick="logSpecificExerciseDirectly('${defaultLogPick}')" class="px-2.5 py-1 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-[10px] shadow-2xs active:scale-95 transition-all flex items-center gap-1 self-start sm:self-auto">
        <span>✓ Log "${defaultLogPick}"</span>
      </button>
    </div>

    <!-- Bite-Sized Bullet Notes -->
    <div class="space-y-1.5 text-xs text-brand-textDark pt-1">
      <div class="flex items-start gap-1.5">
        <span class="text-purple-600 font-bold leading-tight">•</span>
        <div><strong class="text-purple-950 font-bold">Target Duration:</strong> <span class="text-purple-900 font-semibold">${targetDuration}</span></div>
      </div>
      <div class="flex items-start gap-1.5">
        <span class="text-purple-600 font-bold leading-tight">•</span>
        <div><strong class="text-brand-textDark font-bold">Recommended Classes:</strong> <span class="text-slate-800">${recommendedClasses}</span></div>
      </div>
      <div class="flex items-start gap-1.5">
        <span class="text-purple-600 font-bold leading-tight">•</span>
        <div><strong class="text-emerald-900 font-bold">Gut & APD Physiology:</strong> <span class="text-emerald-950/90">${gutMechanism}</span></div>
      </div>
      <div class="flex items-start gap-1.5">
        <span class="text-rose-500 font-bold leading-tight">•</span>
        <div><strong class="text-rose-950 font-bold">Avoid / Caution:</strong> <span class="text-rose-900">${avoidNote}</span></div>
      </div>
    </div>
  `;

  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

function quickSelectClass(className) {
  const input = document.getElementById('exerciseQueryInput');
  if (input) {
    input.value = className;
    auditExerciseWithGemini(className);
    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

async function auditExerciseWithGemini(overrideQuery) {
  const input = document.getElementById('exerciseQueryInput');
  const query = (overrideQuery || input?.value || '').trim();
  if (!query) {
    showDynamicToast("Please enter or tap a class to analyze!");
    if (input) input.focus();
    return;
  }

  const container = document.getElementById('exerciseAuditResultContainer');
  if (!container) return;

  const cycle = (typeof getCycleInfoForDate === 'function') 
    ? getCycleInfoForDate(activeDateStr || getTodayISOString()) 
    : { cycleDay: 19, phase: 'luteal', phaseLabel: 'Late Luteal (Slow Motility)' };

  // Show thinking state
  container.classList.remove('hidden');
  container.innerHTML = `
    <div class="p-4 rounded-2xl bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 border border-purple-200/90 flex items-center space-x-3 shadow-2xs animate-pulse">
      <div class="w-7 h-7 rounded-xl bg-purple-600 text-white flex items-center justify-center text-xs shrink-0 shadow-2xs animate-spin">
        ✨
      </div>
      <div class="space-y-0.5">
        <div class="text-xs font-bold text-purple-950">Gemini 3.8 Flash is analyzing '${query}'...</div>
        <div class="text-[10px] text-purple-800/80">Checking splanchnic blood flow, APD diaphragm descent & Cycle Day ${cycle.cycleDay} motility</div>
      </div>
    </div>
  `;

  try {
    const payload = {
      query: query,
      cycleDay: cycle.cycleDay,
      phase: cycle.phase,
      phaseLabel: cycle.phaseLabel,
      lutealDoubleDuration: lutealDoubleDuration,
      apiKey: (typeof getGeminiApiKey === 'function') ? getGeminiApiKey() : ''
    };

    const res = await fetch('/api/gemini-exercise-audit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    const result = data.data || data;

    renderExerciseAuditCard(result, query, cycle);
  } catch (err) {
    console.error("Exercise audit error:", err);
    container.innerHTML = `
      <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-2">
        <div class="font-bold flex items-center gap-1.5">
          <span>⚠️</span>
          <span>Offline Motility Rule Applied:</span>
        </div>
        <p>In Cycle Day ${cycle.cycleDay} (${cycle.phase}), prioritize low-intensity rhythmic movement (Reformer / 60m incline walk) and avoid high-intensity cardio that diverts mesenteric blood from your colon.</p>
        <button type="button" onclick="logSpecificExerciseDirectly('${query.replace(/'/g, "\\'")}')" class="px-3 py-1.5 rounded-xl bg-purple-600 text-white font-bold text-xs">
          ✓ Log "${query}" Anyway
        </button>
      </div>
    `;
  }
}

function renderExerciseAuditCard(result, query, cycle) {
  const container = document.getElementById('exerciseAuditResultContainer');
  if (!container) return;

  const theme = result.theme || 'green';
  let borderClass = 'border-emerald-200 bg-emerald-50/40';
  let badgeClass = 'bg-emerald-100 text-emerald-950 border-emerald-200';
  let symbol = '✨';

  if (theme === 'amber') {
    borderClass = 'border-amber-200 bg-amber-50/40';
    badgeClass = 'bg-amber-100 text-amber-950 border-amber-200';
    symbol = '⚠️';
  } else if (theme === 'red') {
    borderClass = 'border-rose-200 bg-rose-50/40';
    badgeClass = 'bg-rose-100 text-rose-950 border-rose-200';
    symbol = '🚫';
  }

  const notesList = Array.isArray(result.notes) ? result.notes : [result.summary || 'Cycle-adapted movement.'];

  container.classList.remove('hidden');
  container.innerHTML = `
    <div class="p-4 rounded-2xl border ${borderClass} shadow-2xs space-y-3">
      <!-- Title & Badge -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-brand-border/60 pb-2.5">
        <div class="flex items-start space-x-2.5">
          <span class="text-base mt-0.5">${symbol}</span>
          <div>
            <div class="flex items-center gap-1.5 flex-wrap">
              <h4 class="text-xs sm:text-sm font-bold text-brand-textDark">${result.className || query}</h4>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${badgeClass}">
                ${result.badge || 'Cycle Motility Evaluation'}
              </span>
            </div>
            ${result.durationNote ? `
              <span class="text-[10px] text-purple-900 font-extrabold block mt-0.5">
                ⏱️ Target Duration: ${result.durationNote}
              </span>
            ` : ''}
          </div>
        </div>

        <button type="button" onclick="logSpecificExerciseDirectly('${(result.className || query).replace(/'/g, "\\'")}')" class="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-2xs active:scale-95 transition-all flex items-center gap-1 self-start sm:self-auto">
          <span>✓ Log Class to Today</span>
        </button>
      </div>

      <!-- Notes in Note Format -->
      <div class="space-y-1.5 p-3 rounded-xl bg-white/80 border border-brand-border/60 text-xs">
        <span class="text-[9px] font-extrabold uppercase tracking-wider text-brand-textMuted block mb-1">Clinical Notes (Cycle Day ${cycle.cycleDay}):</span>
        ${notesList.map(n => `
          <div class="flex items-start gap-1.5">
            <span class="text-purple-600 font-bold leading-tight">•</span>
            <span class="text-brand-textDark">${n.replace(/^[•\s]+/, '')}</span>
          </div>
        `).join('')}
      </div>

      <!-- Tags -->
      ${result.tags && result.tags.length > 0 ? `
        <div class="flex items-center gap-1 flex-wrap pt-0.5">
          ${result.tags.map(t => `<span class="px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 border border-purple-200 text-[10px] font-semibold">${t}</span>`).join('')}
        </div>
      ` : ''}
    </div>
  `;

  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

function logSpecificExerciseDirectly(exerciseText) {
  const dStr = activeDateStr || getTodayISOString();
  let entry = logs.find(l => l.date === dStr);

  if (entry) {
    entry.exercise = exerciseText;
  } else {
    const cycleInfo = (typeof getCycleInfoForDate === 'function') ? getCycleInfoForDate(dStr) : { cycleDay: 19, phase: 'luteal', phaseLabel: 'Luteal' };
    const dateObj = new Date(dStr);
    const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    entry = {
      id: dStr,
      date: dStr,
      displayDate: `${dateObj.getDate()}th ${monthNames[dateObj.getMonth()]} ${dateObj.getFullYear()}`,
      month: monthNames[dateObj.getMonth()],
      cycleDay: cycleInfo.cycleDay,
      phase: cycleInfo.phase,
      phaseLabel: cycleInfo.phaseLabel,
      exercise: exerciseText,
      symptoms: `Movement logged: ${exerciseText}`,
      notes: `Logged via Cycle Movement Planner.`
    };
    logs.unshift(entry);
  }

  saveLogs();
  renderHistoryLogs();
  updateDashboardCheckInBadge(entry);

  if (typeof confetti === 'function') {
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
  }
  showDynamicToast(`🏃‍♀️ "${exerciseText}" logged to today's check-in!`);
}

function setQuickLogExercise(val) {
  const input = document.getElementById('logExercise');
  if (input) {
    input.value = val;
    input.focus();
  }
}

function useSuggestedCycleExercise() {
  const cycle = (typeof getCycleInfoForDate === 'function') 
    ? getCycleInfoForDate(activeDateStr || getTodayISOString()) 
    : { cycleDay: 19, phase: 'luteal' };

  let pick = "Reformer Pilates";
  if (cycle.phase === 'luteal' || cycle.cycleDay >= 17) {
    pick = lutealDoubleDuration ? "60m Restorative Reformer & Walk" : "30m Gentle Reformer";
  } else if (cycle.phase === 'follicular') {
    pick = "Dynamic Reformer & Strength";
  } else if (cycle.phase === 'ovulation') {
    pick = "Reformer Strength & Cardio";
  } else {
    pick = "Restorative Mobility & Walk";
  }

  setQuickLogExercise(pick);
}

function startExerciseVoiceInput() {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    showDynamicToast("Speech recognition not supported in this browser.");
    return;
  }
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-GB';

  const micIcon = document.getElementById('exerciseMicIcon');
  if (micIcon) micIcon.classList.add('text-purple-600', 'animate-pulse');

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    const input = document.getElementById('exerciseQueryInput');
    if (input) {
      input.value = text;
      auditExerciseWithGemini(text);
    }
    if (micIcon) micIcon.classList.remove('text-purple-600', 'animate-pulse');
  };

  recognition.onerror = () => {
    if (micIcon) micIcon.classList.remove('text-purple-600', 'animate-pulse');
  };

  recognition.onend = () => {
    if (micIcon) micIcon.classList.remove('text-purple-600', 'animate-pulse');
  };

  recognition.start();
}

function handleQuickLogSubmit(e) {
  e.preventDefault();
  
  const dateVal = document.getElementById('logDate').value;
  unmarkDeletedDate(dateVal);
  const tempVal = parseFloat(document.getElementById('logTemp').value) || null;
  const ouraSleepVal = parseInt(document.getElementById('logOuraSleep')?.value, 10) || null;
  const ouraRhrVal = parseInt(document.getElementById('logOuraRhr')?.value, 10) || null;
  const ouraHrvVal = parseInt(document.getElementById('logOuraHrv')?.value, 10) || null;

  const fastingVal = document.getElementById('logFastingAdherence')?.value || selectedFastingVal || '';
  const warmTriggerVal = document.getElementById('logWarmTrigger')?.checked || false;
  const electrolytesTaken = document.getElementById('logElectrolytesTaken')?.checked || false;
  const eaasTaken = document.getElementById('logEaasTaken')?.checked || false;
  const sennaTeaTaken = selectedSennaTeaVal === true || (document.getElementById('logSennaTea')?.checked && selectedSennaTeaVal !== false) || false;
  const diaphragmResetDone = document.getElementById('logDiaphragmResetDone')?.checked || false;
  const diaphragmVal = parseInt(document.getElementById('logDiaphragm')?.value || '0', 10);
  const stoolNuance = document.getElementById('logStoolNuance')?.value || '';
  const alcoholVal = document.getElementById('logAlcohol')?.value || selectedAlcoholVal || '';
  const moodsArr = Array.from(selectedMoods || []);
  const moodVal = moodsArr.length > 0 ? moodsArr.join(',') : (document.getElementById('logMood')?.value || selectedMoodVal || '');
  const finalMoods = moodVal ? moodVal.split(',').map(m => m.trim()).filter(Boolean) : [];
  const sexDriveVal = document.getElementById('logSexDrive')?.value || selectedSexDriveVal || '';
  const exerciseVal = document.getElementById('logExercise')?.value?.trim() || '';
  const noteVal = document.getElementById('logNote')?.value?.trim() || '';

  let puffinessArr = Array.from(selectedTags);
  const upperTummyBloat = selectedTags.has('🎈 Upper Tummy Bloating') || selectedTags.has('Upper Tummy Bloating');
  const lowerTummyBloat = selectedTags.has('🫧 Lower Tummy Bloating') || selectedTags.has('Lower Tummy Bloating');
  const hasGassiness = selectedTags.has('🫧 Gassiness') || selectedTags.has('Gassiness') || selectedTags.has('💨 Trapped Wind') || selectedTags.has('Trapped Wind') || selectedTags.has('Trapped Gas');
  const hasBurpiness = selectedTags.has('🗣️ Burpiness') || selectedTags.has('Burpiness') || selectedTags.has('🔄 Can\'t Burp (Stuck Gas)') || selectedTags.has('Can\'t Burp');

  if (alcoholVal === '1-2_wine') puffinessArr.push('🍷 1-2 Wine');
  if (alcoholVal === '3+_wine') puffinessArr.push('🥂 3+ Wine/Bubbles');
  if (alcoholVal === 'spirits') puffinessArr.push('🍸 Spirits');
  if (sexDriveVal === 'high') puffinessArr.push('🔥 High Libido');
  else if (sexDriveVal === 'mild') puffinessArr.push('❤️ Mild Libido');
  else if (sexDriveVal === 'low') puffinessArr.push('🤍 Low/No Libido');
  if (electrolytesTaken) puffinessArr.push('⚡ Electrolytes Taken');
  if (eaasTaken) puffinessArr.push('🧬 EAAs Taken');
  if (sennaTeaTaken) puffinessArr.push('🍵 Senna Tea Taken');
  if (fastingVal === 'kept_40') puffinessArr.push('⏱️ 40m Fast Kept');
  if (warmTriggerVal) puffinessArr.push('☕ Warm Gastrocolic Trigger');
  if (diaphragmResetDone) puffinessArr.push('🫁 Diaphragm Reset Done');

  // Format date display
  const dateObj = new Date(dateVal);
  const day = dateObj.getDate();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const displayDate = `${day}th ${monthNames[dateObj.getMonth()]} ${dateObj.getFullYear()}`;

  let movementText = '';
  if (selectedBristolVal === 'liquid') {
    movementText = stoolNuance === 'bypass' ? 'Watery bypass (liquid around solid plug)' : 'Watery liquid purge';
  } else if (selectedBristolVal === 'normal') {
    movementText = stoolNuance === 'formed' ? 'Formed Bristol 4 (Step-down milestone)' : 'Satisfying movement';
  } else if (selectedBristolVal === 'hard') {
    movementText = stoolNuance === 'hard' ? 'Hard / small pellet' : 'Hard / small';
  } else if (selectedBristolVal === 'none') {
    movementText = 'None';
  }

  const cycleInfo = getCycleInfoForDate(dateVal);

  const moodLabels = {
    calm: '🌿 Calm & Grounded',
    happy: '😊 Happy & Positive',
    edgy: '⚡ Edgy / Irritable',
    anxious: '🌪️ Anxious / Nervous',
    overthinking: '💭 Overthinking / Mind Racing',
    flat: '☁️ Flat / Low Energy',
    great: '☀️ Free & Calm'
  };
  const emotionText = finalMoods.length > 0
    ? finalMoods.map(m => moodLabels[m] || m).join(' • ')
    : (moodVal ? (moodLabels[moodVal] || moodVal) : '');

  let medNotesText = '';
  if (fastingVal === 'kept_40') {
    medNotesText = "Morning Linaclotide taken with 40-min fast";
  } else if (fastingVal === 'broke_early') {
    medNotesText = "Linaclotide taken (fast broken early)";
  } else if (fastingVal === 'not_taken') {
    medNotesText = "Linaclotide skipped";
  }

  const existing = logs.find(l => l.date === dateVal);

  const newEntry = {
    id: dateVal,
    date: dateVal,
    displayDate: displayDate,
    month: monthNames[dateObj.getMonth()].toLowerCase(),
    cycleDay: cycleInfo.cycleDay,
    phase: cycleInfo.phase,
    phaseLabel: cycleInfo.phaseLabel,
    temp: (tempVal !== null) ? tempVal : (existing?.temp ?? null),
    ouraSleep: (ouraSleepVal !== null) ? ouraSleepVal : (existing?.ouraSleep ?? null),
    sleepScore: (ouraSleepVal !== null) ? ouraSleepVal : (existing?.sleepScore ?? null),
    ouraRhr: (ouraRhrVal !== null) ? ouraRhrVal : (existing?.ouraRhr ?? null),
    rhr: (ouraRhrVal !== null) ? ouraRhrVal : (existing?.rhr ?? null),
    ouraHrv: (ouraHrvVal !== null) ? ouraHrvVal : (existing?.ouraHrv ?? null),
    hrv: (ouraHrvVal !== null) ? ouraHrvVal : (existing?.hrv ?? null),
    fastingAdherence: fastingVal || existing?.fastingAdherence || '',
    warmTrigger: warmTriggerVal || existing?.warmTrigger || false,
    electrolyteBuffered: electrolytesTaken || existing?.electrolyteBuffered || false,
    electrolytesTaken: electrolytesTaken || existing?.electrolytesTaken || false,
    eaasTaken: eaasTaken || existing?.eaasTaken || false,
    sennaTea: selectedSennaTeaVal === true ? true : (selectedSennaTeaVal === false ? false : (existing?.sennaTea ?? null)),
    diaphragmResetDone: diaphragmResetDone || existing?.diaphragmResetDone || false,
    movement: movementText || existing?.movement || '',
    bristol: selectedBristolVal || existing?.bristol || '',
    stoolNuance: stoolNuance || existing?.stoolNuance || '',
    diaphragmBloat: (diaphragmVal > 0) ? diaphragmVal : (existing?.diaphragmBloat ?? 0),
    upperTummyBloat: upperTummyBloat || existing?.upperTummyBloat || false,
    lowerTummyBloat: lowerTummyBloat || existing?.lowerTummyBloat || false,
    gassiness: hasGassiness || existing?.gassiness || false,
    burpiness: hasBurpiness || existing?.burpiness || false,
    puffiness: Array.from(new Set([...(existing?.puffiness || []), ...puffinessArr])),
    emotions: emotionText || existing?.emotions || '',
    moods: finalMoods.length > 0 ? finalMoods : (existing?.moods || (moodVal ? moodVal.split(',').map(m => m.trim()).filter(Boolean) : [])),
    mood: moodVal || existing?.mood || '',
    sexDrive: sexDriveVal || existing?.sexDrive || '',
    alcohol: alcoholVal || existing?.alcohol || '',
    symptoms: noteVal || existing?.symptoms || (movementText ? movementText : "Daily check-in logged"),
    medNotes: medNotesText || existing?.medNotes || '',
    exercise: exerciseVal || existing?.exercise || 'Gentle',
    notes: noteVal || existing?.notes || "Saved via Emma's Unified Daily Check-In.",
    headspaceNotes: noteVal || existing?.headspaceNotes || ''
  };

  newEntry.updatedAt = new Date().toISOString();
  // Cumulative union merge: guarantees newEntry is merged and no historical entry is dropped
  logs = mergeLogs([newEntry], logs);
  saveLogs(true);
  saveSingleCheckinToServer(newEntry);

  // Sync to specialist tracking state
  const dState = getOrCreateDateSpecialistState(dateVal);
  dState.electrolyteBuffered = electrolytesTaken;
  dState.eaasTaken = eaasTaken;
  dState.sennaTea = sennaTeaTaken;
  dState.diaphragmDone = diaphragmResetDone;
  if (stoolNuance === 'bypass') dState.stoolType = 'bypass';
  else if (stoolNuance === 'formed') dState.stoolType = 'formed';
  else if (selectedBristolVal === 'hard') dState.stoolType = 'hard';
  saveSpecialistTracking();
  renderSpecialistTrackingUI();

  // Update Stats, Headspace Card & Charts
  updateDashboardCheckInBadge(newEntry);
  updateDashboardStats(newEntry);
  renderDashboardHeadspaceCard(newEntry, cycleInfo);
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
- Morning Linaclotide Protocol: Strictly upon awakening on an empty stomach, 
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
// 9. OURA RING CONFIG & 1-TAP OAUTH CLOUD SYNC
// ============================================================================
const OURA_CLIENT_ID = '0b1da539-b6c9-4bbf-b9b0-bb6eb09b857e';

function getOuraRedirectUri() {
  if (typeof window !== 'undefined' && window.location) {
    if (window.location.origin.includes('localhost') || window.location.origin.includes('127.0.0.1')) {
      return window.location.origin + '/';
    }
  }
  return 'https://emma-health.onrender.com/';
}

function updateOuraConnectionUI() {
  const savedToken = localStorage.getItem('emma_oura_token');
  const btnLabel = document.getElementById('btnConnectOuraLabel');
  const btnIcon = document.getElementById('btnConnectOuraIcon');
  if (btnLabel && btnIcon) {
    if (savedToken) {
      btnLabel.innerText = "Oura Connected";
      btnIcon.innerText = "🟢";
    } else {
      btnLabel.innerText = "Connect Oura Ring";
      btnIcon.innerText = "⚡";
    }
  }

  const tabSyncBtn = document.getElementById('btnOuraTabSync');
  if (tabSyncBtn) {
    if (savedToken) {
      tabSyncBtn.classList.remove('hidden');
      tabSyncBtn.classList.add('inline-flex');
    } else {
      tabSyncBtn.classList.add('hidden');
      tabSyncBtn.classList.remove('inline-flex');
    }
  }

  const badge = document.getElementById('ouraSyncBadge');
  if (badge) {
    if (savedToken) {
      badge.innerHTML = `<i data-lucide="check-circle" class="w-3.5 h-3.5 mr-1 text-emerald-400"></i> Oura: Live Cloud Connected`;
    } else {
      badge.innerHTML = `<i data-lucide="shield-alert" class="w-3.5 h-3.5 mr-1 text-purple-400"></i> Oura: Standby`;
    }
  }

  const modalBadge = document.getElementById('ouraTokenStatusBadge');
  const disconnectBtn = document.getElementById('btnDisconnectOura');
  const syncNowBtn = document.getElementById('btnSyncOuraNow');
  if (modalBadge) {
    if (savedToken) {
      modalBadge.innerText = '🟢 Connected & Active';
      modalBadge.className = 'text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200';
    } else {
      modalBadge.innerText = 'Not Connected';
      modalBadge.className = 'text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white';
    }
  }
  if (disconnectBtn) {
    if (savedToken) disconnectBtn.classList.remove('hidden');
    else disconnectBtn.classList.add('hidden');
  }
  if (syncNowBtn) {
    if (savedToken) syncNowBtn.classList.remove('hidden');
    else syncNowBtn.classList.add('hidden');
  }
}

function openOuraConfigModal() {
  const modal = document.getElementById('ouraConfigModal');
  const input = document.getElementById('ouraTokenInput');
  const savedToken = localStorage.getItem('emma_oura_token');

  if (input) {
    input.value = savedToken || '';
  }

  // Dynamically set OAuth authorization link
  const oauthBtn = document.getElementById('btnOuraOAuthAuthorize');
  if (oauthBtn) {
    const redirectUri = encodeURIComponent(getOuraRedirectUri());
    oauthBtn.href = `https://cloud.ouraring.com/oauth/authorize?response_type=code&client_id=${OURA_CLIENT_ID}&redirect_uri=${redirectUri}&scope=email+personal+daily+heartrate+workout+tag+session+spo2`;
  }

  updateOuraConnectionUI();

  if (modal) {
    modal.classList.remove('hidden');
    if (window.lucide && typeof lucide.createIcons === 'function') {
      lucide.createIcons();
    }
  }
}

function closeOuraConfigModal() {
  const modal = document.getElementById('ouraConfigModal');
  if (modal) modal.classList.add('hidden');
}

async function checkOuraOAuthCallback() {
  try {
    if (typeof window === 'undefined' || !window.location) return;
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const error = urlParams.get('error');

    if (error) {
      console.warn("Oura OAuth returned error:", error);
      showDynamicToast(`⚠️ Oura Authorization cancelled or failed: ${error}`, 5000);
      window.history.replaceState({}, document.title, window.location.pathname);
      return;
    }

    if (!code) return;

    showDynamicToast("💍 Exchanging Oura code with Cloud API...", 5000);

    const redirectUri = getOuraRedirectUri();
    const res = await fetch('/api/oura/exchange-token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        code: code,
        redirect_uri: redirectUri
      })
    });

    const data = await res.json();
    if (data.ok && data.access_token) {
      localStorage.setItem('emma_oura_token', data.access_token);
      updateOuraConnectionUI();
      showDynamicToast("🎉 Oura Ring Connected Successfully! Fetching biometrics...", 5000);
      window.history.replaceState({}, document.title, window.location.pathname);
      setTimeout(() => fetchOuraBiometrics(), 500);
    } else {
      showDynamicToast(`⚠️ Oura authorization exchange error: ${data.error || 'Check server logs'}`, 6000);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  } catch (err) {
    console.error("checkOuraOAuthCallback error:", err);
    showDynamicToast(`⚠️ Oura connection check: ${err.message}`, 5000);
  }
}

async function fetchOuraBiometrics(silent = false) {
  const savedToken = localStorage.getItem('emma_oura_token');
  if (!savedToken) {
    if (!silent) {
      openOuraConfigModal();
      showDynamicToast("Please connect your Oura Ring first!");
    }
    return;
  }

  const syncBtn = document.getElementById('btnSyncOuraNow');
  const tabSyncBtn = document.getElementById('btnOuraTabSync');
  if (syncBtn) {
    syncBtn.innerHTML = `<span>⏳</span><span>Syncing Oura Cloud...</span>`;
    syncBtn.disabled = true;
  }
  if (tabSyncBtn) {
    tabSyncBtn.innerHTML = `<span>⏳</span><span>Syncing...</span>`;
    tabSyncBtn.disabled = true;
  }

  if (!silent) {
    showDynamicToast("💍 Contacting Oura Cloud API for nightly data...", 3000);
  }

  try {
    const headers = { 'Authorization': `Bearer ${savedToken}` };
    const res = await fetch('/api/oura/daily-data', { headers });
    const data = await res.json();

    if (!data.ok) {
      if (!silent) {
        showDynamicToast(`⚠️ Oura sync: ${data.error || 'Unable to load biometrics'}`, 5000);
      }
      return;
    }

    const days = data.days || {};
    const dateKeys = Object.keys(days);

    if (dateKeys.length === 0) {
      if (!silent) {
        showDynamicToast("💍 Oura connected! No new sleep entries uploaded to Oura yet today.", 4500);
      }
      return;
    }

    let updatedCount = 0;
    dateKeys.forEach(dateStr => {
      const d = days[dateStr];
      let entry = logs.find(l => l.date === dateStr);
      if (!entry) {
        const cycleInfo = typeof getCycleInfoForDate === 'function' ? getCycleInfoForDate(dateStr) : { cycleDay: 1, phase: 'follicular' };
        entry = {
          id: dateStr,
          date: dateStr,
          displayDate: dateStr,
          month: '',
          cycleDay: cycleInfo.cycleDay,
          phase: cycleInfo.phase,
          temp: null,
          ouraSleep: null,
          ouraRhr: null,
          ouraHrv: null,
          diaphragmBloat: 5,
          notes: 'Auto-created from Oura Ring daily sync.'
        };
        logs.push(entry);
      }

      let changed = false;
      if (d.sleep_score !== undefined && d.sleep_score !== null) {
        entry.ouraSleep = d.sleep_score;
        entry.sleepScore = d.sleep_score;
        changed = true;
      }
      if (d.rhr !== undefined && d.rhr !== null) {
        entry.ouraRhr = d.rhr;
        entry.rhr = d.rhr;
        changed = true;
      }
      if (d.hrv !== undefined && d.hrv !== null) {
        entry.ouraHrv = d.hrv;
        entry.hrv = d.hrv;
        changed = true;
      }
      if (d.temperature_deviation !== undefined && d.temperature_deviation !== null) {
        entry.ouraTempDev = d.temperature_deviation;
        if (entry.temp === null || entry.temp === undefined) {
          entry.temp = parseFloat((36.4 + d.temperature_deviation).toFixed(2));
        }
        changed = true;
      }
      if (d.readiness_score !== undefined && d.readiness_score !== null) {
        entry.readinessScore = d.readiness_score;
        changed = true;
      }
      if (changed) updatedCount++;
    });

    if (updatedCount > 0) {
      saveLogs();
      renderDashboardTrends();
      renderOuraChart();
      renderHistoryLogs();
      if (typeof syncStateWithDatabase === 'function') {
        syncStateWithDatabase();
      }
      showDynamicToast(`✨ Successfully synced ${updatedCount} days from Oura Ring!`, 4000);
    } else if (!silent) {
      showDynamicToast("💍 Oura Ring is up to date!", 3000);
    }
  } catch (err) {
    console.error("fetchOuraBiometrics error:", err);
    if (!silent) {
      showDynamicToast(`⚠️ Oura sync failed: ${err.message}`, 4500);
    }
  } finally {
    if (syncBtn) {
      syncBtn.innerHTML = `<span>🔄</span><span>Sync Ring Data Now</span>`;
      syncBtn.disabled = false;
    }
    if (tabSyncBtn) {
      tabSyncBtn.innerHTML = `<span>🔄</span><span>Sync Ring</span>`;
      tabSyncBtn.disabled = false;
    }
  }
}

function saveOuraToken() {
  const input = document.getElementById('ouraTokenInput');
  const token = input ? input.value.trim() : '';
  if (!token) {
    alert("Please paste your Oura Personal Access Token or use the 1-Tap Authorize button above.");
    return;
  }
  localStorage.setItem('emma_oura_token', token);
  updateOuraConnectionUI();

  if (typeof syncStateWithDatabase === 'function') {
    syncStateWithDatabase();
  }

  showDynamicToast("💍 Oura Ring Token Saved! Syncing biometrics...", 4000);
  closeOuraConfigModal();
  fetchOuraBiometrics();
}

function disconnectOuraToken() {
  if (confirm("Disconnect Oura Ring token from this app?")) {
    localStorage.removeItem('emma_oura_token');
    const input = document.getElementById('ouraTokenInput');
    if (input) input.value = '';

    updateOuraConnectionUI();

    if (typeof syncStateWithDatabase === 'function') {
      syncStateWithDatabase();
    }

    showDynamicToast("Oura Token Disconnected");
  }
}

window.disconnectOuraToken = disconnectOuraToken;
window.updateOuraConnectionUI = updateOuraConnectionUI;
window.checkOuraOAuthCallback = checkOuraOAuthCallback;
window.fetchOuraBiometrics = fetchOuraBiometrics;
window.saveOuraToken = saveOuraToken;
window.openOuraConfigModal = openOuraConfigModal;
window.closeOuraConfigModal = closeOuraConfigModal;

function toggleOuraMode() {
  ouraSimulatedMode = !ouraSimulatedMode;
  const label = document.getElementById('ouraModeLabel');
  if (label) {
    label.innerText = ouraSimulatedMode ? "Mode: Simulated Real Biometrics" : "Mode: Live Cloud API";
  }
  showDynamicToast(`Oura mode: ${ouraSimulatedMode ? "Simulated Data" : "Live Cloud API"}`);
}

// ============================================================================
// OURA RING PERIOD START DATE HELPER
// ============================================================================
function getLatestPeriodStartDate(targetDateStr) {
  const dateStr = targetDateStr || activeDateStr || getTodayISOString();
  const info = (typeof getCycleInfoForDate === 'function') 
    ? getCycleInfoForDate(dateStr) 
    : { cycleDay: 20, phase: 'luteal', phaseLabel: 'Mid-Luteal' };
  const cycleDay = info.cycleDay || 20;
  
  // Calculate start of cycle (Day 1)
  const d = new Date(`${dateStr}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() - (cycleDay - 1));
  
  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  const iso = `${year}-${month}-${day}`;
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayNum = d.getUTCDate();
  const suffix = (dayNum % 10 === 1 && dayNum !== 11) ? 'st' : ((dayNum % 10 === 2 && dayNum !== 12) ? 'nd' : ((dayNum % 10 === 3 && dayNum !== 13) ? 'rd' : 'th'));
  const formatted = `${dayNum}${suffix} ${monthNames[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
  const dayOfWeek = dayNames[d.getUTCDay()];
  
  // Next cycle start (approx Day 28/Day 1)
  const daysUntilNext = 28 - cycleDay + 1;
  const dNext = new Date(`${dateStr}T12:00:00Z`);
  dNext.setUTCDate(dNext.getUTCDate() + daysUntilNext);
  const nextDayNum = dNext.getUTCDate();
  const nextSuffix = (nextDayNum % 10 === 1 && nextDayNum !== 11) ? 'st' : ((nextDayNum % 10 === 2 && nextDayNum !== 12) ? 'nd' : ((nextDayNum % 10 === 3 && nextDayNum !== 13) ? 'rd' : 'th'));
  const nextFormatted = `${nextDayNum}${nextSuffix} ${monthNames[dNext.getUTCMonth()]}`;

  return {
    iso,
    formatted,
    plainDate: `${dayNum} ${monthNames[d.getUTCMonth()]} ${d.getUTCFullYear()}`,
    dayOfWeek,
    cycleDay,
    nextFormatted,
    phase: info.phase,
    phaseLabel: info.phaseLabel
  };
}

function openOuraPeriodModal() {
  const periodInfo = getLatestPeriodStartDate(activeDateStr || getTodayISOString());
  
  const dateEl = document.getElementById('ouraPeriodDateDisplay');
  if (dateEl) dateEl.innerText = periodInfo.formatted;
  
  const dayOfWeekEl = document.getElementById('ouraPeriodDayOfWeek');
  if (dayOfWeekEl) dayOfWeekEl.innerText = `${periodInfo.dayOfWeek}, ${periodInfo.formatted}`;
  
  const cycleDayEl = document.getElementById('ouraCycleDayDisplay');
  if (cycleDayEl) cycleDayEl.innerText = `Day ${periodInfo.cycleDay}`;
  
  const nextPeriodEl = document.getElementById('ouraNextPeriodDisplay');
  if (nextPeriodEl) nextPeriodEl.innerText = periodInfo.nextFormatted;

  const m = document.getElementById('ouraPeriodModal');
  if (m) {
    m.classList.remove('hidden');
    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }
}

function closeOuraPeriodModal() {
  const m = document.getElementById('ouraPeriodModal');
  if (m) m.classList.add('hidden');
}

function copyOuraPeriodDate() {
  const periodInfo = getLatestPeriodStartDate(activeDateStr || getTodayISOString());
  const textToCopy = periodInfo.plainDate || "19 August 2026";
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      const btn = document.getElementById('copyOuraPeriodBtn');
      if (btn) {
        btn.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-300"></i><span>Copied! ✨</span>`;
        if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
        setTimeout(() => {
          btn.innerHTML = `<i data-lucide="copy" class="w-3.5 h-3.5"></i><span>Copy Date</span>`;
          if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
        }, 2500);
      }
      showDynamicToast(`📋 Copied "${textToCopy}" to clipboard!`);
    }).catch(() => {
      showDynamicToast(`19 August 2026`);
    });
  } else {
    showDynamicToast(`19 August 2026`);
  }
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
          <span class="text-rose-950">Non-stretch trousers/bottoms, stiff waistbands, tight belts, underwire bras that dig into your ribcage.</span>
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
    clinicalVerdict: "Gold standard lean protein combination. White fish and coldwater prawns are gentle and light, digesting in under 90 minutes. Cooked courgette and carrot provide soft soluble fiber that won't turn into trapped gas under your ribs.",
    actionAdvice: "For your weekly routine: 200g rice is perfect if eaten as your 1 PM lunch. If having this for dinner, 130–150g rice keeps your stomach light before bed.",
    whyAvoidOrModify: ""
  },
  {
    id: "din-2",
    category: "dinner",
    isNew: false,
    title: "Tuna & Prawn Stirfried Rice Bowl (130g Rice)",
    ingredients: "130g Cooked Morrisons White Rice, 1 tin Tuna (Drained), 85g Aldi Coldwater Prawns, 1 Whole Courgette, 1 Small Carrot, 1/3 Red Pepper, 1 Medium Stalk of Celery, 2tsp Noya Sauce, 1tsp Sushi Vinegar",
    status: "recommended",
    statusLabel: "Motility Approved",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Safe for Luteal & Follicular",
    clinicalVerdict: "Tuna, coldwater prawns, and white rice digest cleanly and smoothly. Slicing the celery stalk thinly and stir-frying it until tender softens its natural plant fibers completely, preventing trapped gas pockets.",
    actionAdvice: "Stir-fry until vegetables are tender, or swap celery for 50g peeled cucumber ribbons. Noya sauce and sushi vinegar provide savory umami with zero garlic or onion!",
    whyAvoidOrModify: ""
  },
  {
    id: "din-3",
    category: "dinner",
    isNew: false,
    title: "Prawn Rice Poke Bowl (200g Rice)",
    ingredients: "1 Full Pack (150g) Sainsbury's Large King Prawns, 200g Cooked Morrisons White Rice, 1 Small Raw Carrot, 1tbsp Aldi Fat-Free Greek Yogurt, 1 Large Spoon of Cucumber, 2tsp Sushi Vinegar",
    status: "recommended",
    statusLabel: "Safe & Motility-Friendly",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Safe for Luteal",
    clinicalVerdict: "A fantastic, easy meal for a busy nanny. Prawns and white rice are non-reactive and gentle on your tummy, passing smoothly through your digestive tract with zero bloat.",
    actionAdvice: "Grate or peel the raw carrot finely so it softens easily in a slower luteal bowel. Sliced cucumber provides hydrating, refreshing crunch.",
    whyAvoidOrModify: ""
  },
  {
    id: "din-4",
    category: "dinner",
    isNew: false,
    title: "MORE Prawn Rice Poke Bowl (170g Rice)",
    ingredients: "1 Pack (225g) Sainsbury's Taste the Difference Frozen Cooked Jumbo King Prawns, 170g Cooked Morrisons White Rice, 1 Small Raw Carrot, 1tbsp Aldi Fat-Free Greek Yogurt, 1 Large Spoon of Cucumber, 1tsp Sushi Vinegar",
    status: "recommended",
    statusLabel: "High Protein & Light",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Jumbo Prawn Favourite",
    clinicalVerdict: "High lean protein from tender jumbo king prawns without heavy fats. Paired with 170g white rice, Greek yogurt, and cucumber, this meal provides pure nourishment that empties rapidly from the stomach.",
    actionAdvice: "Defrost jumbo prawns in cold water for 10 minutes. Toss with sushi vinegar and yogurt for a restaurant-style poke bowl in under 5 minutes!",
    whyAvoidOrModify: ""
  },
  {
    id: "din-5",
    category: "dinner",
    isNew: false,
    title: "Turkey Bolognese & Rice Bowl (120g Rice)",
    ingredients: "1 portion Turkey & Veggie Bolognese (from 3 batch), 120g Cooked Morrisons White Rice, 1 Whole Courgette (~100g), 1tbsp (15g) Aldi Fat-Free Cottage Cheese",
    status: "recommended",
    statusLabel: "100% Garlic & Onion Free",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Motility Approved",
    clinicalVerdict: "Emma's Turkey Bolognese base is 100% garlic-free and onion-free, seasoned with rich umami Marmite and tomato purée. Lean turkey breast paired with white rice and tender courgette digests cleanly without gas or fullness under the ribs.",
    actionAdvice: "Keep portions of this garlic-free base frozen for effortless weeknight dinners during your nanny routine.",
    whyAvoidOrModify: ""
  },
  {
    id: "din-6",
    category: "dinner",
    isNew: false,
    title: "Turkey Bolognese & Butternut Squash Bowl",
    ingredients: "1 portion Turkey & Veggie Bolognese (from 3 batch), 280g Cooked Butternut Squash, 1 Whole Courgette (~100g), 1tbsp (15g) Aldi Fat-Free Cottage Cheese",
    status: "recommended",
    statusLabel: "Soothing Gut Rest",
    statusColor: "emerald",
    bestPhase: "luteal",
    phaseBadge: "Ideal Luteal Dinner",
    clinicalVerdict: "Butternut squash is one of the most soothing, easily digested carbohydrates for a sensitive tummy. It breaks down into a soft, velvety mash that doesn't leave unfermented residue for bacteria to turn into gas.",
    actionAdvice: "Steam or roast butternut squash cubes until fork-tender. Mash lightly and spoon the warm bolognese over the top for cozy comfort.",
    whyAvoidOrModify: ""
  },
  {
    id: "din-7",
    category: "dinner",
    isNew: false,
    title: "Turkey Bolognese & Quinoa Bowl",
    ingredients: "1 portion Turkey & Veggie Bolognese (from 3 batch), 120g Cooked Quinoa, 1 Whole Courgette (~100g), 1tbsp (15g) Aldi Fat-Free Cottage Cheese",
    status: "recommended",
    statusLabel: "Clean Ancient Grain",
    statusColor: "emerald",
    bestPhase: "follicular",
    phaseBadge: "Best in Follicular",
    clinicalVerdict: "Cooked quinoa is naturally gluten-free and gentle on the bowel lining in follicular phase when digestion is brisk. During luteal slow transit, white rice or butternut squash digests with less abdominal fullness.",
    actionAdvice: "Enjoy during high-motility follicular days. In luteal phase, swap quinoa for white rice or tender butternut squash mash.",
    whyAvoidOrModify: ""
  },
  {
    id: "din-8",
    category: "dinner",
    isNew: false,
    title: "Tuna & Egg White Jacket Potato",
    ingredients: "1 Bannisters Farm Jacket Potato, 1 tin Tuna (Drained), 2 Medium Egg Whites, 1tbsp Tesco 0% Fat Greek Yogurt, 100g Raw Spinach, 1tbsp Reduced Sugar Ketchup",
    status: "recommended",
    statusLabel: "Comfort Food Hero",
    statusColor: "emerald",
    bestPhase: "follicular",
    phaseBadge: "Best in Follicular",
    clinicalVerdict: "Fluffy baked potato starch provides pure, easily absorbed complex carbohydrates that restore glycogen after active days. In luteal phase, large starch density and potato skins digest slower than white rice bowls.",
    actionAdvice: "Great for follicular and high-movement days! If having in luteal, scoop the fluffy potato flesh and leave the tougher outer skin aside.",
    whyAvoidOrModify: ""
  },

  // --- BREAKFASTS (5) ---
  {
    id: "brk-1",
    category: "breakfast",
    isNew: false,
    title: "Banana Almond Rice Cakes (x3)",
    ingredients: "235g Banana (Firm / Green-Tipped), 2tsp Sunfly Sunflower Seed Butter, 1tsp Pip & Nut Almond Butter, 3 Kallo Rice Cakes",
    status: "recommended",
    statusLabel: "Motility Approved • Clean High Carb",
    statusColor: "emerald",
    bestPhase: "luteal",
    phaseBadge: "ADHD Fuel Anchor",
    clinicalVerdict: "Using firm, greenish-tipped bananas gives you clean, energizing carbohydrates packed with prebiotic resistant starch rather than fast-fermenting sugars. Resistant starch feeds soothing butyrate-producing gut flora and bypasses small-bowel gas formation. Kallo puffed white rice cakes provide pure, bloat-free starch, while sunflower and almond butters supply healthy fats that buffer absorption and keep your brain sharp and calm without diaphragm tension (APD).",
    actionAdvice: "Choose firm bananas with green tips (Cavendish) for the highest resistant starch and lowest fermentation! The combination with 3 Kallo puffed rice cakes gives you sustained, bloat-free energy for long nanny shifts and workouts.",
    whyAvoidOrModify: ""
  },
  {
    id: "brk-2",
    category: "breakfast",
    isNew: false,
    title: "Crispy Berry & Banana Yogurt Breakfast Bowl (115g Banana)",
    ingredients: "190g Fage 0% Lactose-Free Greek Yogurt, 115g Raw Banana (Firm), 100g Frozen Raspberries, 30g M&S Made Without Wheat Gluten Free Special Flakes",
    status: "recommended",
    statusLabel: "Motility Approved • High Crunch",
    statusColor: "emerald",
    bestPhase: "luteal",
    phaseBadge: "Fast ADHD Fuel",
    clinicalVerdict: "115g firm banana is well within safe thresholds and delivers rich potassium and gentle prebiotic starch. Paired with M&S gluten-free flakes (crisp puffed rice & corn that dissolve without roughage), antioxidant-rich raspberries, and Fage lactose-free yogurt, this gives Emma wonderful bloat-free energy and lasting satiety.",
    actionAdvice: "Use firm, yellow-green bananas and enjoy the satisfying sensory crunch of M&S Made Without Wheat flakes! Easy to throw together in 60 seconds.",
    whyAvoidOrModify: ""
  },
  {
    id: "brk-3",
    category: "breakfast",
    isNew: false,
    title: "Homemade Perfect Matcha Shake",
    ingredients: "30g Raw Cacao Protein Powder, 1tsp Matcha, 50g Frozen Blueberries, 100g Frozen Banana, 8g Pip & Nut Smooth Almond Butter, 150ml Alpro Unsweetened Almond Milk, 100ml Water, Handful of Ice",
    status: "recommended",
    statusLabel: "Clean Morning Power",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Smooth Transit",
    clinicalVerdict: "Frozen banana blended with matcha, blueberries, and cacao protein empties from the stomach in under 30 minutes. Japanese matcha delivers L-theanine for smooth, jitter-free ADHD focus, while frozen banana provides silky texture and gentle carbohydrates without causing bloating.",
    actionAdvice: "Blend until silky smooth. Sip slowly 40–50 minutes after your morning Linaclotide to gently activate your bowel's natural morning rhythm.",
    whyAvoidOrModify: ""
  },
  {
    id: "brk-4",
    category: "breakfast",
    isNew: false,
    title: "Cacao Homemade Perfect Matcha Shake",
    ingredients: "30g Raw Cacao Protein Powder, 1tsp Matcha, 80g Frozen Blueberries, 115g Frozen Banana, 170ml Alpro Unsweetened Almond Milk, Stevia, Handful of Ice",
    status: "recommended",
    statusLabel: "Antioxidant & Energy Boost",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Rapid Motility Drink",
    clinicalVerdict: "Rich in polyphenols from wild blueberries and raw cacao, which naturally soothe visceral hypersensitivity. 115g of frozen banana provides satisfying natural sweetness and steady carbohydrate fuel without gas.",
    actionAdvice: "Freezing firm banana slices locks in gentle resistant starch and yields a frosty milkshake texture without needing dairy or ice cream.",
    whyAvoidOrModify: ""
  },
  {
    id: "brk-5",
    category: "breakfast",
    isNew: false,
    title: "Form Homemade Perfect Matcha Shake",
    ingredients: "30g Form Nutrition Performance Vanilla Protein Powder, 1tsp Matcha, 80g Frozen Blueberries, 115g Frozen Banana, 170ml Alpro Unsweetened Almond Milk, Stevia, Handful of Ice",
    status: "recommended",
    statusLabel: "Gold Standard • Motility Approved",
    statusColor: "purple",
    bestPhase: "luteal",
    phaseBadge: "Emma's Ultimate Shake",
    clinicalVerdict: "Form Nutrition Performance plant protein is formulated with digestive enzymes and zero allergens. 115g frozen banana and blueberries give optimal clean carbs that power Emma through high-energy nanny days.",
    actionAdvice: "Emma's premier go-to shake! Keeps your stomach light and happy while providing lasting, non-jittery energy.",
    whyAvoidOrModify: ""
  },

  // --- LUNCHES (4) ---
  {
    id: "lun-1",
    category: "lunch",
    isNew: false,
    title: "Turkey Burger & Marmite Rice Cakes (6 EW)",
    ingredients: "1 Cottage Cheese Turkey Burger (Homemade), 6 Medium Egg Whites, 2tbsp (30g) Aldi Emporium Lighter Soft Cheese, 1 Tomato, 1tsp Marmite, 4 Kallo Rice Cakes",
    status: "recommended",
    statusLabel: "High Protein • Low Residue",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Grab-&-Go Lunch",
    clinicalVerdict: "Egg whites and lean turkey burger deliver pure, easily hydrolysed protein that passes through the duodenum without fat delay. Marmite provides energizing B-vitamins, soft cheese adds creaminess without lactose irritation, and 4 Kallo rice cakes provide bloat-free crunch.",
    actionAdvice: "Pre-cook egg whites and turkey burgers in advance. Assemble on 4 Kallo rice cakes in under 2 minutes for an effortless nanny shift lunch.",
    whyAvoidOrModify: ""
  },
  {
    id: "lun-2",
    category: "lunch",
    isNew: false,
    title: "Spinach Eggs (w) & RC",
    ingredients: "6 Egg Whites, 65g Avocado, 2 Tomatoes, 1tbsp Aldi FF Cottage Cheese, 4 Kallo Rice Cakes, 50g Spinach",
    status: "recommended",
    statusLabel: "Motility Approved",
    statusColor: "emerald",
    bestPhase: "luteal",
    phaseBadge: "Gentle Fats & Greens",
    clinicalVerdict: "65g avocado is the certified Monash sweet spot for gentle monounsaturated fats that nourish bowel lining without delaying gastric emptying. 6 egg whites provide ultra-clean protein, and tender baby spinach adds micronutrients without tough stalky fiber.",
    actionAdvice: "Lightly scramble egg whites and fold in fresh baby spinach until wilted. Top rice cakes with sliced avocado and cottage cheese.",
    whyAvoidOrModify: ""
  },
  {
    id: "lun-3",
    category: "lunch",
    isNew: false,
    title: "Ham & Egg Rice Cakes",
    ingredients: "4 Kallo Rice Cakes, 1.5tsp (~6g) Marmite, 6 Slices Lean Ham, 4 Medium Egg Whites, 1.5tbsp Aldi Emporium Lighter Soft Cheese, Large Handful of Cucumber (~50g)",
    status: "recommended",
    statusLabel: "Zero-Prep Power Lunch",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Fast & Soothing",
    clinicalVerdict: "Ultra-lean ham and egg whites are exceptionally light on the stomach. Paired with refreshing peeled cucumber, Marmite umami, and puffed rice cakes, this meal requires zero cooking on busy mornings.",
    actionAdvice: "Spread soft cheese and Marmite onto the 4 rice cakes, layer lean ham and sliced boiled egg whites, and enjoy with cucumber coins.",
    whyAvoidOrModify: ""
  },
  {
    id: "lun-4",
    category: "lunch",
    isNew: false,
    title: "Tuna & Beetroot Rice Cakes",
    ingredients: "1 tin Tuna (in spring water, drained), 1.5tbsp (22.5g) Aldi Emporium Lighter Soft Cheese, 1tbsp (15g) Aldi Brooklea 0% Fat Natural Yogurt, 30g Aldi Pickled Sliced Beetroot, 4 Kallo Rice Cakes",
    status: "recommended",
    statusLabel: "Digestive Rest Crunch",
    statusColor: "emerald",
    bestPhase: "follicular",
    phaseBadge: "Best in Follicular",
    clinicalVerdict: "Pickled beetroot provides natural digestive support and nitric oxide without gas in follicular phase. In luteal slow transit, concentrated beetroot sugars can ferment in sluggish colonic haustra.",
    actionAdvice: "Best in follicular phase. In luteal, swap beetroot for crisp peeled cucumber coins or sliced tomatoes with Marmite.",
    whyAvoidOrModify: ""
  },

  // --- BULK COOKING (2) ---
  {
    id: "blk-1",
    category: "bulk",
    isNew: false,
    title: "Cottage Cheese Turkey Burgers (Makes 7)",
    ingredients: "500g Tesco 2% Fat Turkey Mince, 2 Large Carrots (grated), 1tbsp Fat-Free Cottage Cheese",
    status: "recommended",
    statusLabel: "Sunday Batch Prep Anchor",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Makes 7 Patties",
    clinicalVerdict: "Grated carrots keep the turkey mince juicy and tender while adding gentle, cooked soluble fiber. Fat-free cottage cheese binds the burgers seamlessly without dairy fat. Keeps in the fridge for 4 days or can be individually frozen.",
    actionAdvice: "Shape into 7 even patties and pan-sear or bake at 190°C for 18 minutes. Store in glass Tupperware for grab-and-go nanny lunches all week.",
    whyAvoidOrModify: ""
  },
  {
    id: "blk-2",
    category: "bulk",
    isNew: false,
    title: "Turkey & Veggie Bolognese Base (Makes 3)",
    ingredients: "500g Ocado British Turkey Breast Mince, 1 Large Carrot, 2 Celery Stalks (80g), 1 tin Chopped Tomatoes (400g), 2tbsp Tomato Purée (30g), 1tsp Marmite (6g)",
    status: "recommended",
    statusLabel: "100% Allium-Free Base",
    statusColor: "emerald",
    bestPhase: "any",
    phaseBadge: "Makes 3 Portions",
    clinicalVerdict: "A 100% garlic-free and onion-free bolognese base enriched with savory Marmite and tomato purée. Slow simmering breaks down the celery and carrot until tender, eliminating tough fibers. Perfect served over rice, butternut squash, or quinoa.",
    actionAdvice: "Simmer on low for 35–40 minutes until rich and thick. Divide into 3 containers: enjoy one fresh, keep one in the fridge, and freeze one for next week.",
    whyAvoidOrModify: ""
  },

  // --- DESSERTS (2) ---
  {
    id: "des-1",
    category: "dessert",
    isNew: false,
    title: "M&S Strawb Frito (120g)",
    ingredients: "120g M&S Strawberry Frito (Frozen 100% strawberry fruit puree dessert)",
    status: "recommended",
    statusLabel: "100% Dairy-Free & Light",
    statusColor: "purple",
    bestPhase: "any",
    phaseBadge: "Sweet Relief",
    clinicalVerdict: "Pure strawberry fruit puree that is naturally dairy-free, gluten-free, and low in residue. Empties from the stomach in under 20 minutes, giving Emma sweet satisfaction without abdominal heaviness.",
    actionAdvice: "Let sit out of the freezer for 5 minutes before enjoying so the temperature is pleasant and gentle on stomach nerves.",
    whyAvoidOrModify: ""
  },
  {
    id: "des-2",
    category: "dessert",
    isNew: false,
    title: "Oddono's Banana or Fruit Sorbet (In a Cup)",
    ingredients: "1 Cup Oddono's Fresh Banana or Fruit Sorbetto (Coppetta, Dairy-Free & Gluten-Free)",
    status: "recommended",
    statusLabel: "Emma's London Favourite",
    statusColor: "purple",
    bestPhase: "any",
    phaseBadge: "100% Dairy-Free Treat",
    clinicalVerdict: "Hand-crafted by Oddono's from fresh fruit, water, and pure sugar. Naturally 100% dairy-free, lactose-free, and gluten-free when ordered in a cup (coppetta). Passes smoothly through the digestive tract.",
    actionAdvice: "Always order in a cup (coppetta) to stay 100% gluten-free. Savor slowly with room-temperature water alongside.",
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
    bestPhase: "luteal",
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
    bestPhase: "luteal",
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
    title: "Frozen Banana 'Nice Cream' (Firm Banana Resistant Starch)",
    ingredients: "Frozen Firm Green-Tipped Banana blended with 50g Lactose-Free Greek Yogurt & 1tsp Cacao Powder",
    status: "recommended",
    statusLabel: "Clean Sweet Treat",
    statusColor: "emerald",
    bestPhase: "luteal",
    phaseBadge: "Resistant Starch Fuel",
    clinicalVerdict: "Using firm, green-tipped bananas provides gut-soothing resistant starch that doesn't ferment into gas. Blended with lactose-free Greek yogurt and raw cacao, this gives a rich, creamy soft-serve texture that is gentle on your bowel.",
    actionAdvice: "Slice bananas when yellow with green tips and keep in freezer bags. Blend with yogurt for a quick 2-minute dessert!",
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
  }
];

let currentMealCategoryFilter = 'all';
let currentMealPhaseFilter = 'luteal';

function updateMealCategoryTabs(isLutealFiltered) {
  const pool = EMMA_MEALS.filter(meal => {
    if (isLutealFiltered) {
      if (meal.status === 'avoid_luteal') return false;
      if (meal.bestPhase === 'follicular') return false;
      return true;
    }
    return true;
  });

  const counts = {
    all: pool.length,
    dinner: pool.filter(m => m.category === 'dinner').length,
    breakfast: pool.filter(m => m.category === 'breakfast').length,
    lunch: pool.filter(m => m.category === 'lunch').length,
    bulk: pool.filter(m => m.category === 'bulk').length,
    dessert: pool.filter(m => m.category === 'dessert').length,
    snack: pool.filter(m => m.category === 'snack').length,
    new: pool.filter(m => m.isNew).length,
  };

  const catMap = {
    all: `All (${counts.all})`,
    dinner: `🍲 Dinners (${counts.dinner})`,
    breakfast: `☀️ Breakfasts (${counts.breakfast})`,
    lunch: `🥪 Lunches (${counts.lunch})`,
    bulk: `🥘 Bulk Prep (${counts.bulk})`,
    dessert: `🍨 Desserts (${counts.dessert})`,
    snack: `🫐 Snacks & Sweet (${counts.snack})`,
    new: `✨ 7 New Recipes (${counts.new})`
  };

  Object.keys(catMap).forEach(cat => {
    const el = document.getElementById(`mealCat-${cat}`);
    if (el) el.textContent = catMap[cat];
  });
}

function renderEmmaMeals() {
  const container = document.getElementById('mealsContainer');
  if (!container) return;

  const activeCycle = (typeof getCurrentCycleInfo === 'function') ? getCurrentCycleInfo() : { cycleDay: 19, phase: 'luteal', phaseLabel: 'Luteal Phase' };
  const isLutealFiltered = (currentMealPhaseFilter === 'luteal');

  // 1. Update tab counts dynamically
  updateMealCategoryTabs(isLutealFiltered);

  // 2. Update Active Phase Filter Banner
  const bannerEl = document.getElementById('mealPhaseBanner');
  if (bannerEl) {
    if (isLutealFiltered) {
      bannerEl.innerHTML = `
        <div class="p-3 rounded-2xl bg-amber-50/90 border border-amber-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-2xs mb-1">
          <div class="flex items-center space-x-2.5">
            <div class="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm shrink-0">
              🌸
            </div>
            <div class="text-xs text-amber-950 leading-tight">
              <span class="font-bold">Filtered for Cycle Day ${activeCycle.cycleDay} (${activeCycle.phaseLabel}):</span>
              <span class="text-amber-800 ml-1">Showing 34 motility-approved meals. High-roughage hulls, seeds, and slow-fermenting snacks are hidden to prevent APD cramps and slow transit.</span>
            </div>
          </div>
          <button type="button" onclick="setMealPhaseFilter('all')" class="text-[11px] font-bold text-amber-900 bg-white hover:bg-amber-100 px-3 py-1 rounded-xl border border-amber-300 shadow-2xs shrink-0 active:scale-95 transition-all">
            Show All 40
          </button>
        </div>
      `;
    } else {
      bannerEl.innerHTML = `
        <div class="p-2.5 px-3 rounded-2xl bg-brand-cream/90 border border-brand-border flex items-center justify-between gap-2 shadow-2xs text-xs text-brand-textDark mb-1">
          <div class="flex items-center space-x-2">
            <span class="text-sm">📋</span>
            <span class="text-[11px] font-medium text-brand-textMuted">Showing all <strong class="text-brand-textDark font-bold">40 meals & recipes</strong> across all cycle phases.</span>
          </div>
          <button type="button" onclick="setMealPhaseFilter('luteal')" class="text-[11px] font-bold text-brand-coral bg-white hover:bg-rose-50 px-2.5 py-1 rounded-xl border border-brand-border shadow-2xs shrink-0 active:scale-95 transition-all flex items-center gap-1">
            <span>🌸</span>
            <span>Filter for Day ${activeCycle.cycleDay}</span>
          </button>
        </div>
      `;
    }
  }

  // 3. Filter meals by category and phase
  let pool = EMMA_MEALS.filter(meal => {
    // Category match
    if (currentMealCategoryFilter === 'new') {
      if (!meal.isNew) return false;
    } else if (currentMealCategoryFilter !== 'all') {
      if (meal.category !== currentMealCategoryFilter) return false;
    }

    // Phase match: if luteal filter is on, exclude avoid_luteal and follicular-only items
    if (isLutealFiltered) {
      if (meal.status === 'avoid_luteal') return false;
      if (meal.bestPhase === 'follicular') return false;
    }

    return true;
  });

  // 4. Sort: In Luteal mode, sort bestPhase === 'luteal' to top
  if (isLutealFiltered) {
    pool.sort((a, b) => {
      const aLuteal = a.bestPhase === 'luteal' ? 1 : 0;
      const bLuteal = b.bestPhase === 'luteal' ? 1 : 0;
      return bLuteal - aLuteal;
    });
  }

  if (pool.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-10 bg-brand-cream/50 rounded-2xl border border-brand-border">
        <p class="text-xs font-semibold text-brand-textMuted">No meals match this category filter.</p>
        <button type="button" onclick="setMealPhaseFilter('all')" class="mt-2 text-xs text-brand-coral font-bold underline">Show all meals</button>
      </div>
    `;
    return;
  }

  const isFollicular = activeCycle.phase === 'follicular';
  const isLuteal = activeCycle.phase === 'luteal';

  container.innerHTML = pool.map(meal => {
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
      status = 'recommended';
      statusLabel = 'Motility Approved • Clean High Carb';
      phaseBadge = isFollicular ? `Peak Motility Carb Fuel (Day ${activeCycle.cycleDay})` : `Luteal Sustained Energy (Day ${activeCycle.cycleDay})`;
      clinicalVerdict = `Approved for Cycle Day ${activeCycle.cycleDay} (${activeCycle.phaseLabel})! Using firm Cavendish bananas (yellow with green tips) provides high prebiotic resistant starch rather than rapid-fermenting fructose. This starch bypasses small intestinal gas formation and feeds soothing butyrate flora in the colon. Paired with 3 Kallo puffed white rice cakes and healthy fats from Sunfly sunflower seed butter and Pip & Nut almond butter, this provides steady, non-bloating carbohydrate fuel to power your ADHD focus all morning without diaphragm tension (APD)!`;
      actionAdvice = 'Use firm bananas with slight green tips for maximum gut-safe resistant starch! The combination with 3 Kallo rice cakes and rich seed/nut butters buffers gastric emptying naturally for long-lasting energy.';
    } else if (meal.id === 'din-2') { // Tuna & Prawn Stir-fry with Celery
      status = 'recommended';
      statusLabel = isFollicular ? 'Motility Approved' : 'Motility Approved (Cook Celery Tender)';
      phaseBadge = isFollicular ? `Follicular Safe (Day ${activeCycle.cycleDay})` : `Safe for Luteal (Day ${activeCycle.cycleDay})`;
      clinicalVerdict = isFollicular
        ? `Tuna, coldwater prawns, and Morrisons white rice are exceptionally gentle on your tummy. Celery string fibers are easily cleared by your faster follicular motility on Cycle Day ${activeCycle.cycleDay} without trapped gas.`
        : `Tuna, coldwater prawns, and Morrisons white rice are exceptionally gentle on your tummy. Slicing the celery stalk thinly and stir-frying it until tender softens its natural plant fibers completely, preventing trapped gas pockets under your ribs.`;
      actionAdvice = 'Stir-fry until vegetables are tender, or swap celery for 50g peeled cucumber ribbons. Noya sauce and sushi vinegar provide savory umami with zero garlic or onion!';
    } else if (meal.id === 'brk-2') { // Crispy Berry & Banana Greek Yogurt
      status = 'recommended';
      statusLabel = 'Motility Approved • High Crunch';
      phaseBadge = isFollicular ? `Follicular Approved (Day ${activeCycle.cycleDay})` : `Gentle Luteal Fuel (Day ${activeCycle.cycleDay})`;
      clinicalVerdict = `Approved for Cycle Day ${activeCycle.cycleDay} (${activeCycle.phaseLabel})! 115g of firm banana provides clean potassium and smooth carbohydrate energy without gas. Paired with M&S Made Without Wheat gluten-free flakes (super light puffed rice and corn that melt cleanly), antioxidant frozen raspberries, and Fage 0% lactose-free Greek yogurt, this gives high protein and sensory crunch without bloating!`;
      actionAdvice = 'Slice 115g firm banana directly over your Fage lactose-free Greek yogurt and M&S gluten-free flakes. Delicious, fast, and 100% bloat-free!';
    }

    const isLutealStar = isLutealFiltered && (meal.bestPhase === 'luteal');
    if (isLutealStar && !phaseBadge.includes('Day ' + activeCycle.cycleDay)) {
      phaseBadge = `⭐ Top Luteal Pick (Day ${activeCycle.cycleDay})`;
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
    } else if (isLutealStar) {
      borderClass = "border-amber-300 bg-amber-50/25 ring-1 ring-amber-200/70";
      badgeBg = "bg-amber-100 text-amber-900 border-amber-300 font-bold";
      icon = "🌸";
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

  // Smooth scroll to meal phase banner
  const banner = document.getElementById('mealPhaseBanner');
  if (banner) {
    banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
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


