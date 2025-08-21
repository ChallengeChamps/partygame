let players = [];
let scores = [];
let currentPlayerIndex = 0;
let selectedList = [];
let sortedItems = Array(10).fill(null);
let usedItems = new Set();
let gameTitle = 'Städte nach Einwohnerzahl';

const playerCountSelect = document.getElementById('player-count');
const playerNamesContainer = document.getElementById('player-names');
const startBtn = document.getElementById('start-game');
const backHomeBtn = document.getElementById('back-home');
const backHomeEndBtn = document.getElementById('back-home-end');
const restartBtn = document.getElementById('restart-game');
const endGameBtn = document.getElementById('end-game');

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');

const gameTitleEl = document.getElementById('game-title');
const currentPlayerEl = document.getElementById('current-player');
const itemCard = document.getElementById('item-card');
const positionOptions = document.getElementById('position-options');
const sortedListEl = document.getElementById('sorted-list');
const finalListEl = document.getElementById('final-list');
const scoreboardEl = document.getElementById('scoreboard');

// Beispiel-Städte
const availableLists = {
  'Städte nach Einwohnerzahl (in Millionen)': [
    { name: 'Berlin', value: 3.6 },
    { name: 'Hamburg', value: 1.8 },
    { name: 'München', value: 1.5 },
    { name: 'Köln', value: 1.1 },
    { name: 'Frankfurt', value: 0.75 },
    { name: 'Stuttgart', value: 0.63 },
    { name: 'Düsseldorf', value: 0.62 },
    { name: 'Dortmund', value: 0.59 },
    { name: 'Essen', value: 0.58 },
    { name: 'Leipzig', value: 0.6 }
  ],
  'Berge nach Höhe (in Metern)': [
    { name: 'Zugspitze', value: 2962 },
    { name: 'Watzmann', value: 2713 },
    { name: 'Hochkalter', value: 2607 },
    { name: 'Großglockner', value: 3798 },
    { name: 'Weißhorn', value: 3710 },
    { name: 'Ortler', value: 3905 },
    { name: 'Wildspitze', value: 3770 },
    { name: 'Piz Bernina', value: 4049 },
    { name: 'Dufourspitze', value: 4634 },
    { name: 'Matterhorn', value: 4478 }
  ],
'Beliebteste Essen (geschätzt in Millionen täglicher Konsumenten)': [
  { name: 'Pizza', value: 500 },
  { name: 'Burger', value: 450 },
  { name: 'Pasta', value: 400 },
  { name: 'Sushi', value: 350 },
  { name: 'Tacos', value: 300 },
  { name: 'Curry', value: 250 },
  { name: 'Pommes', value: 200 },
  { name: 'Salat', value: 180 },
  { name: 'Sandwich', value: 160 },
  { name: 'Ramen', value: 150 }
],
'Instagram-Follower (in Millionen)': [
  { name: 'Cristiano Ronaldo', value: 630 },
  { name: 'Lionel Messi', value: 500 },
  { name: 'Selena Gomez', value: 430 },
  { name: 'Kylie Jenner', value: 400 },
  { name: 'Dwayne Johnson', value: 390 },
  { name: 'Ariana Grande', value: 380 },
  { name: 'Kim Kardashian', value: 360 },
  { name: 'Beyoncé', value: 320 },
  { name: 'Justin Bieber', value: 290 },
  { name: 'Zendaya', value: 250 }
],
'Vermögen (geschätzt in Milliarden USD)': [
  { name: 'Elon Musk', value: 230 },
  { name: 'Bernard Arnault', value: 220 },
  { name: 'Jeff Bezos', value: 210 },
  { name: 'Mark Zuckerberg', value: 160 },
  { name: 'Bill Gates', value: 130 },
  { name: 'Warren Buffett', value: 120 },
  { name: 'Larry Ellison', value: 110 },
  { name: 'Steve Ballmer', value: 100 },
  { name: 'Mukesh Ambani', value: 95 },
  { name: 'Sergey Brin', value: 90 }
],
'Gefährlichste Tiere (geschätzte Todesfälle pro Jahr)': [
  { name: 'Mücke', value: 725000 },
  { name: 'Mensch', value: 475000 },
  { name: 'Schlange', value: 50000 },
  { name: 'Hund (Tollwut)', value: 25000 },
  { name: 'Raubwanze', value: 10000 },
  { name: 'Krokodil', value: 1000 },
  { name: 'Nilpferd', value: 500 },
  { name: 'Elefant', value: 100 },
  { name: 'Löwe', value: 100 },
  { name: 'Hai', value: 10 }
],
'Beliebtester Beruf (nach Anzahl Beschäftigter in Deutschland)': [
  { name: 'Verkäufer/in', value: 2.5 },
  { name: 'Bürokaufmann/-frau', value: 2.2 },
  { name: 'Pflegekraft', value: 1.8 },
  { name: 'Lagerlogistiker/in', value: 1.5 },
  { name: 'Erzieher/in', value: 1.3 },
  { name: 'Koch/Köchin', value: 1.2 },
  { name: 'Kfz-Mechatroniker/in', value: 1.1 },
  { name: 'IT-Fachkraft', value: 1.0 },
  { name: 'Lehrer/in', value: 0.9 },
  { name: 'Ingenieur/in', value: 0.8 }
],
'Bestverdienende Berufe (Durchschnittliches Jahresgehalt in Deutschland, in Tausend €)': [
  { name: 'Arzt/Ärztin', value: 120 },
  { name: 'Ingenieur/in', value: 85 },
  { name: 'IT-Manager/in', value: 95 },
  { name: 'Jurist/in', value: 90 },
  { name: 'Unternehmensberater/in', value: 88 },
  { name: 'Pilot/in', value: 100 },
  { name: 'Professor/in', value: 80 },
  { name: 'Bankmanager/in', value: 110 },
  { name: 'Pharmazeut/in', value: 78 },
  { name: 'Architekt/in', value: 70 }
],
'Lebensmittel Preis pro kg (Durchschnittspreis in Deutschland, in €)': [
  { name: 'Rindfleisch', value: 15 },
  { name: 'Lachs', value: 20 },
  { name: 'Käse', value: 10 },
  { name: 'Butter', value: 8 },
  { name: 'Kartoffeln', value: 1.5 },
  { name: 'Äpfel', value: 2.5 },
  { name: 'Reis', value: 2 },
  { name: 'Tomaten', value: 3 },
  { name: 'Zucker', value: 1.2 },
  { name: 'Mehl', value: 1 }
],
'Dinge, die die meisten Deutschen besitzen (geschätzter Anteil in %)': [
  { name: 'Smartphone', value: 95 },
  { name: 'Fernseher', value: 92 },
  { name: 'Waschmaschine', value: 90 },
  { name: 'Auto', value: 85 },
  { name: 'Laptop', value: 80 },
  { name: 'Kühlschrank', value: 98 },
  { name: 'Internetanschluss', value: 94 },
  { name: 'Mikrowelle', value: 70 },
  { name: 'Spülmaschine', value: 65 },
  { name: 'Tablet', value: 60 }
],
'Glücklichste Länder (World Happiness Report, Score von 0–10)': [
  { name: 'Finnland', value: 7.8 },
  { name: 'Dänemark', value: 7.6 },
  { name: 'Island', value: 7.5 },
  { name: 'Schweiz', value: 7.4 },
  { name: 'Niederlande', value: 7.3 },
  { name: 'Schweden', value: 7.2 },
  { name: 'Norwegen', value: 7.1 },
  { name: 'Neuseeland', value: 7.0 },
  { name: 'Luxemburg', value: 6.9 },
  { name: 'Deutschland', value: 6.8 }
],
'Lebensmittel mit den meisten Kalorien pro 100g': [
  { name: 'Schokolade', value: 550 },
  { name: 'Erdnussbutter', value: 600 },
  { name: 'Chips', value: 520 },
  { name: 'Butter', value: 740 },
  { name: 'Nüsse', value: 650 },
  { name: 'Käse', value: 400 },
  { name: 'Speck', value: 500 },
  { name: 'Müsli', value: 450 },
  { name: 'Croissant', value: 420 },
  { name: 'Pizza (TK)', value: 270 }
],
'Teuerste bekannte Autos (Neupreis in Millionen €)': [
  { name: 'Bugatti La Voiture Noire', value: 11 },
  { name: 'Pagani Zonda HP Barchetta', value: 15 },
  { name: 'Rolls-Royce Boat Tail', value: 23 },
  { name: 'Bugatti Centodieci', value: 8 },
  { name: 'Mercedes-Maybach Exelero', value: 7 },
  { name: 'Koenigsegg CCXR Trevita', value: 4.5 },
  { name: 'Lamborghini Veneno', value: 4 },
  { name: 'McLaren P1 LM', value: 3.6 },
  { name: 'Aston Martin Valkyrie', value: 3 },
  { name: 'Ferrari Pininfarina Sergio', value: 2.8 }
],
'Länder mit den meisten Touristen (Jährliche Besucher in Millionen)': [
  { name: 'Frankreich', value: 90 },
  { name: 'Spanien', value: 83 },
  { name: 'USA', value: 80 },
  { name: 'China', value: 65 },
  { name: 'Italien', value: 64 },
  { name: 'Türkei', value: 52 },
  { name: 'Mexiko', value: 45 },
  { name: 'Deutschland', value: 39 },
  { name: 'Thailand', value: 38 },
  { name: 'UK', value: 36 }
],
'Beliebteste Getränke (Konsum pro Kopf in Litern)': [
  { name: 'Mineralwasser', value: 130 },
  { name: 'Bier', value: 95 },
  { name: 'Kaffee', value: 165 },
  { name: 'Cola', value: 40 },
  { name: 'Milch', value: 50 },
  { name: 'Tee', value: 28 },
  { name: 'Orangensaft', value: 20 },
  { name: 'Apfelsaft', value: 18 },
  { name: 'Wein', value: 24 },
  { name: 'Energy Drinks', value: 10 }
],
'Beliebteste deutsche Haustiere (Anzahl in Millionen)': [
  { name: 'Katze', value: 16 },
  { name: 'Hund', value: 11 },
  { name: 'Kleintiere (z. B. Kaninchen)', value: 5 },
  { name: 'Ziervögel', value: 3 },
  { name: 'Aquarienfische', value: 2.5 },
  { name: 'Reptilien', value: 1 },
  { name: 'Hamster', value: 0.8 },
  { name: 'Meerschweinchen', value: 1.2 },
  { name: 'Pferde', value: 1 },
  { name: 'Freilandhühner', value: 0.5 }
],
'Häufigste männliche Vornamen (Neugeborene 2023)': [
  { name: 'Noah', value: 1 },
  { name: 'Leon', value: 2 },
  { name: 'Paul', value: 3 },
  { name: 'Elias', value: 4 },
  { name: 'Finn', value: 5 },
  { name: 'Luca', value: 6 },
  { name: 'Emil', value: 7 },
  { name: 'Ben', value: 8 },
  { name: 'Theo', value: 9 },
  { name: 'Luis', value: 10 }
],
'Häufigste weibliche Vornamen (Neugeborene 2023)': [
  { name: 'Emilia', value: 1 },
  { name: 'Emma', value: 2 },
  { name: 'Mia', value: 3 },
  { name: 'Sophia', value: 4 },
  { name: 'Hannah', value: 5 },
  { name: 'Lina', value: 6 },
  { name: 'Ella', value: 7 },
  { name: 'Lea', value: 8 },
  { name: 'Marie', value: 9 },
  { name: 'Clara', value: 10 }
],
'Schwierigste Schulfächer laut Schülern (Umfragewert in % der Schüler)': [
  { name: 'Mathematik', value: 72 }, // Sehr komplexe Inhalte und abstraktes Denken
  { name: 'Physik', value: 65 }, // Viele Formeln und theoretische Konzepte
  { name: 'Chemie', value: 60 }, // Experimente und Stoffmengenrechnung
  { name: 'Latein', value: 55 }, // Alte Sprache mit komplexer Grammatik
  { name: 'Französisch', value: 50 }, // Aussprache und Grammatik als Herausforderung
  { name: 'Biologie', value: 45 }, // Viel Lernstoff und Fachbegriffe
  { name: 'Deutsch', value: 40 }, // Interpretation und Textanalyse
  { name: 'Geschichte', value: 35 }, // Daten und Zusammenhänge merken
  { name: 'Englisch', value: 30 }, // Grammatik und Vokabeln
  { name: 'Musik', value: 25 } // Theorie und praktische Umsetzung
],
'Länder mit der höchsten Lebenserwartung (Durchschnittliche Lebenserwartung in Jahren)': [
  { name: 'Japan', value: 84.5 }, // Gesunde Ernährung und gutes Gesundheitssystem
  { name: 'Schweiz', value: 84 }, // Hoher Lebensstandard
  { name: 'Singapur', value: 83.9 }, // Effiziente Gesundheitsversorgung
  { name: 'Spanien', value: 83.6 }, // Mediterrane Ernährung
  { name: 'Italien', value: 83.5 }, // Familienstruktur und Ernährung
  { name: 'Australien', value: 83.4 }, // Aktiver Lebensstil
  { name: 'Island', value: 83.3 }, // Saubere Umwelt
  { name: 'Norwegen', value: 83.2 }, // Soziales System
  { name: 'Südkorea', value: 83.1 }, // Fortschrittliche Medizin
  { name: 'Luxemburg', value: 83 } // Kleines Land mit hoher Lebensqualität
],
'Durchschnittliches Einkommen pro Land (Durchschnittliches Jahreseinkommen pro Kopf in Tausend €)': [
  { name: 'Schweiz', value: 70 }, // Höchstes Durchschnittseinkommen Europas
  { name: 'USA', value: 65 }, // Hohe Gehälter in vielen Branchen
  { name: 'Luxemburg', value: 60 }, // Finanzsektor stark vertreten
  { name: 'Norwegen', value: 58 }, // Ölindustrie und Sozialstaat
  { name: 'Deutschland', value: 52 }, // Starke Industrie und Mittelstand
  { name: 'Australien', value: 50 }, // Hoher Lebensstandard
  { name: 'Niederlande', value: 48 }, // Gute Work-Life-Balance
  { name: 'Österreich', value: 47 }, // Solides Sozialsystem
  { name: 'Kanada', value: 45 }, // Stabile Wirtschaft
  { name: 'Frankreich', value: 44 } // Hohe Sozialabgaben, aber gutes Einkommen
],
'Erfolgreichste Kinofilme aller Zeiten (Weltweites Einspielergebnis in Milliarden US-$)': [
  { name: 'Avatar (2009)', value: 2.92 }, // Revolutionäre 3D-Technik
  { name: 'Avengers: Endgame (2019)', value: 2.79 }, // Marvel-Finale
  { name: 'Titanic (1997)', value: 2.19 }, // Klassiker von James Cameron
  { name: 'Star Wars: The Force Awakens (2015)', value: 2.07 }, // Comeback der Saga
  { name: 'Avengers: Infinity War (2018)', value: 2.05 }, // Marvel-Blockbuster
  { name: 'Spider-Man: No Way Home (2021)', value: 1.92 }, // Multiversum-Hype
  { name: 'Jurassic World (2015)', value: 1.67 }, // Dino-Revival
  { name: 'The Lion King (2019)', value: 1.66 }, // Disney-Remake
  { name: 'Furious 7 (2015)', value: 1.52 }, // Abschied von Paul Walker
  { name: 'Frozen II (2019)', value: 1.45 } // Erfolgreiches Sequel
],
'Beliebteste Sportarten weltweit (Anzahl der aktiven Fans in Milliarden)': [
  { name: 'Fußball', value: 4 }, // Weltweit verbreitet, besonders in Europa & Südamerika
  { name: 'Cricket', value: 2.5 }, // Beliebt in Indien, Pakistan, UK
  { name: 'Basketball', value: 2.4 }, // USA, China, Europa
  { name: 'Tennis', value: 1 }, // Globales Turniernetz
  { name: 'Leichtathletik', value: 0.8 }, // Olympisch und universell
  { name: 'Tischtennis', value: 0.6 }, // Besonders in Asien
  { name: 'Baseball', value: 0.5 }, // USA, Japan, Lateinamerika
  { name: 'Golf', value: 0.45 }, // USA, UK, Asien
  { name: 'Rugby', value: 0.4 }, // UK, Australien, Südafrika
  { name: 'Formel 1', value: 0.35 } // Motorsport-Fans weltweit
],
'Meistgenutzte Apps (Monatlich aktive Nutzer in Milliarden)': [
  { name: 'WhatsApp', value: 2.7 }, // Beliebtester Messenger weltweit
  { name: 'YouTube', value: 2.5 }, // Video-Plattform Nr. 1
  { name: 'Facebook', value: 2.9 }, // Größtes soziales Netzwerk
  { name: 'Instagram', value: 2.2 }, // Bilder & Stories
  { name: 'TikTok', value: 1.7 }, // Kurzvideos im Trend
  { name: 'WeChat', value: 1.3 }, // Chinas Super-App
  { name: 'Messenger (Facebook)', value: 1.2 }, // Ergänzung zu Facebook
  { name: 'Snapchat', value: 0.8 }, // Beliebt bei Jugendlichen
  { name: 'Spotify', value: 0.6 }, // Musikstreaming
  { name: 'Telegram', value: 0.5 } // Alternative Messenger-App
]

};

function generateNameInputs() {
  const count = parseInt(playerCountSelect.value);
  playerNamesContainer.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `Spieler ${i + 1} Name`;
    input.id = `player-${i}`;
    playerNamesContainer.appendChild(input);
  }
}
generateNameInputs();
playerCountSelect.addEventListener('change', generateNameInputs);

startBtn.addEventListener('click', () => {
  const count = parseInt(playerCountSelect.value);
  players = [];
  scores = [];
  for (let i = 0; i < count; i++) {
    const name = document.getElementById(`player-${i}`).value.trim() || `Spieler ${i + 1}`;
    players.push(name);
    scores.push(0);
  }

  selectedList = [...availableLists[gameTitle]];
  shuffleArray(selectedList);
  sortedItems = Array(10).fill(null);
  usedItems = new Set();
  currentPlayerIndex = Math.floor(Math.random() * players.length);

  startScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  gameTitleEl.textContent = `Sortiere nach: ${gameTitle}`;
  renderGameBoard();
});

function renderGameBoard() {
  currentPlayerEl.textContent = `Am Zug: ${players[currentPlayerIndex]}`;
  itemCard.innerHTML = '<h3>sortiere folgende:</h3>';
  selectedList.forEach((item, index) => {
    if (!usedItems.has(item.name)) {
      const btn = document.createElement('button');
      btn.textContent = item.name;
      btn.addEventListener('click', () => selectCity(item));
      itemCard.appendChild(btn);
    }
  });

  renderSortedList();
}

function selectCity(item) {
  positionOptions.innerHTML = `<h3>Wähle Position für ${item.name}:</h3>`;
  for (let i = 1; i <= 10; i++) {
    const btn = document.createElement('button');
    btn.textContent = `${i}`;
    btn.addEventListener('click', () => checkPosition(item, i));
    positionOptions.appendChild(btn);
  }
}

function checkPosition(item, pos) {
  const correctList = [...selectedList].sort((a, b) => b.value - a.value);
  const correctIndex = correctList.findIndex(i => i.name === item.name) + 1;

  if (pos === correctIndex) {
    scores[currentPlayerIndex]++;
    sortedItems[pos - 1] = item;
    usedItems.add(item.name);
    alert(`✅ Richtig! ${item.name} ist auf Platz ${pos}.`);
  } else {
    alert(`❌ Falsch! ${item.name} gehört auf einen anderen Platz.`);
  }

  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;

  if (usedItems.size === 10) {
    showEndScreen();
  } else {
    positionOptions.innerHTML = '';
    renderGameBoard();
  }
}

function renderSortedList() {
  sortedListEl.innerHTML = '<h3>Deine Liste:</h3>';
  sortedItems.forEach((item, index) => {
    const entry = document.createElement('div');
    entry.textContent = item ? `${index + 1}. ${item.name}` : `${index + 1}. [leer]`;
    sortedListEl.appendChild(entry);
  });
}

function showEndScreen() {
  gameScreen.classList.add('hidden');
  endScreen.classList.remove('hidden');

  finalListEl.innerHTML = '<h3>Richtige Reihenfolge:</h3>';
  const sorted = [...selectedList].sort((a, b) => b.value - a.value);
  sorted.forEach((item, index) => {
    const entry = document.createElement('div');
    entry.textContent = `${index + 1}. ${item.name} – ${item.value} Mio`;
    finalListEl.appendChild(entry);
  });

  scoreboardEl.innerHTML = '<h3>Punktestand:</h3>';
  players.forEach((name, i) => {
    const score = document.createElement('div');
    score.textContent = `${name}: ${scores[i]} Punkte`;
    scoreboardEl.appendChild(score);
  });
}

restartBtn.addEventListener('click', () => {
  endScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
});

backHomeBtn.addEventListener('click', () => {
  window.location.href = 'startseite.html';
});
backHomeEndBtn.addEventListener('click', () => {
  window.location.href = 'startseite.html';
});
endGameBtn.addEventListener('click', () => {
  showEndScreen();
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
const keys = Object.keys(availableLists);
gameTitle = keys[Math.floor(Math.random() * keys.length)];
selectedList = [['Städte nach Einwohnerzahl (in Millionen)','Berge nach Höhe (in Metern)','Beliebteste Essen (geschätzt in Millionen täglicher Konsumenten)','Instagram-Follower (in Millionen)','Vermögen (geschätzt in Milliarden USD)','Gefährlichste Tiere (geschätzte Todesfälle pro Jahr)','Beliebtester Beruf (nach Anzahl Beschäftigter in Deutschland)','Bestverdienende Berufe (Durchschnittliches Jahresgehalt in Deutschland, in Tausend €)','Lebensmittel Preis pro kg (Durchschnittspreis in Deutschland, in €)','Dinge, die die meisten Deutschen besitzen (geschätzter Anteil in %)', 'Glücklichste Länder (World Happiness Report, Score von 0–10)','Lebensmittel mit den meisten Kalorien pro 100g','Teuerste bekannte Autos (Neupreis in Millionen €)','Länder mit den meisten Touristen (Jährliche Besucher in Millionen)','Beliebteste Getränke (Konsum pro Kopf in Litern)','Beliebteste deutsche Haustiere (Anzahl in Millionen)','Häufigste männliche Vornamen (Neugeborene 2023)','Häufigste weibliche Vornamen (Neugeborene 2023)','Schwierigste Schulfächer laut Schülern (Umfragewert in % der Schüler)','Länder mit der höchsten Lebenserwartung (Durchschnittliche Lebenserwartung in Jahren)','Durchschnittliches Einkommen pro Land (Durchschnittliches Jahreseinkommen pro Kopf in Tausend €)','Erfolgreichste Kinofilme aller Zeiten (Weltweites Einspielergebnis in Milliarden US-$)','Beliebteste Sportarten weltweit (Anzahl der aktiven Fans in Milliarden)','Meistgenutzte Apps (Monatlich aktive Nutzer in Milliarden)']
];

