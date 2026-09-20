import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, get, child, onValue, push, update, onDisconnect, remove } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// DEINE ECHTEN KORREKTEN ZUGANGSDATEN:
const firebaseConfig = {
  apiKey: "AIzaSyCbYDyrMm3fdqPbiXgI3S3dPRd024H4Tuk",
  authDomain: "challengechamp-2477b.firebaseapp.com",
  databaseURL: "https://challengechamp-2477b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "challengechamp-2477b",
  storageBucket: "challengechamp-2477b.firebasestorage.app",
  messagingSenderId: "1091222818635",
  appId: "1:1091222818635:web:4925c525afbd3ad8ed22ce",
  measurementId: "G-TNM3S65YBH"
};

// Initialisierung
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Globale Variablen für den PartyManager
window.firebaseDB = db;
window.fbRef = ref;
window.fbSet = set;
window.fbGet = get;
window.fbChild = child;
window.fbOnValue = onValue;
window.fbPush = push;
window.fbUpdate = update;
window.fbOnDisconnect = onDisconnect;
window.fbRemove = remove;
