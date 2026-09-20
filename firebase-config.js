import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, get, child, onValue, push, update, onDisconnect, remove } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// HIER SIND DEINE ECHTEN FIREBASE-ZUGANGSDATEN:
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "challengechamp-1234.firebaseapp.com",
  databaseURL: "https://challengechamp-1234-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "challengechamp-1234",
  storageBucket: "challengechamp-1234.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
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
