import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, get, child, onValue, push, update, onDisconnect, remove } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "DEIN_API_KEY",
  authDomain: "dein-projekt.firebaseapp.com",
  databaseURL: "https://dein-projekt-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dein-projekt",
  storageBucket: "dein-projekt.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

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