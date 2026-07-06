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
],

  'Längste Flüsse der Welt (in km)': [
    { name: 'Nil', value: 6650 },
    { name: 'Amazonas', value: 6400 },
    { name: 'Jangtse', value: 6300 },
    { name: 'Mississippi-Missouri', value: 6275 },
    { name: 'Jenissei', value: 5539 },
    { name: 'Huang He', value: 5464 },
    { name: 'Ob-Irtysch', value: 5410 },
    { name: 'Kongo', value: 4700 },
    { name: 'Amur', value: 4444 },
    { name: 'Lena', value: 4400 }
  ],

  'Größte Ozeane (Fläche in Mio. km²)': [
    { name: 'Pazifik', value: 165 },
    { name: 'Atlantik', value: 106 },
    { name: 'Indischer Ozean', value: 70 },
    { name: 'Südlicher Ozean', value: 21 },
    { name: 'Arktischer Ozean', value: 15 },
    { name: 'Mittelmeer', value: 2.5 },
    { name: 'Karibisches Meer', value: 2.7 },
    { name: 'Südchinesisches Meer', value: 3.5 },
    { name: 'Beringmeer', value: 2 },
    { name: 'Golf von Mexiko', value: 1.5 }
  ],

  'Beliebteste Obstsorten (Weltproduktion in Mio. Tonnen)': [
    { name: 'Bananen', value: 120 },
    { name: 'Äpfel', value: 86 },
    { name: 'Trauben', value: 77 },
    { name: 'Orangen', value: 75 },
    { name: 'Mangos', value: 55 },
    { name: 'Wassermelonen', value: 100 },
    { name: 'Pfirsiche', value: 25 },
    { name: 'Birnen', value: 24 },
    { name: 'Ananas', value: 28 },
    { name: 'Erdbeeren', value: 9 }
  ],

  'Beliebteste Gemüsesorten (Weltproduktion in Mio. Tonnen)': [
    { name: 'Tomaten', value: 190 },
    { name: 'Kartoffeln', value: 370 },
    { name: 'Zwiebeln', value: 100 },
    { name: 'Karotten', value: 40 },
    { name: 'Gurken', value: 80 },
    { name: 'Paprika', value: 36 },
    { name: 'Kohl', value: 70 },
    { name: 'Spinat', value: 30 },
    { name: 'Knoblauch', value: 28 },
    { name: 'Auberginen', value: 55 }
  ],

  'Beliebteste Sportarten in Deutschland (aktive Mitglieder in Mio.)': [
    { name: 'Fußball', value: 7 },
    { name: 'Turnen', value: 5 },
    { name: 'Tennis', value: 1.4 },
    { name: 'Leichtathletik', value: 1 },
    { name: 'Handball', value: 0.75 },
    { name: 'Basketball', value: 0.6 },
    { name: 'Volleyball', value: 0.5 },
    { name: 'Reiten', value: 0.7 },
    { name: 'Schwimmen', value: 0.9 },
    { name: 'Golf', value: 0.4 }
  ],

  'Beliebteste Hunderassen (Registrierungen pro Jahr)': [
    { name: 'Labrador Retriever', value: 35000 },
    { name: 'Golden Retriever', value: 30000 },
    { name: 'Französische Bulldogge', value: 28000 },
    { name: 'Deutscher Schäferhund', value: 25000 },
    { name: 'Pudel', value: 20000 },
    { name: 'Chihuahua', value: 18000 },
    { name: 'Dackel', value: 17000 },
    { name: 'Australian Shepherd', value: 16000 },
    { name: 'Rottweiler', value: 14000 },
    { name: 'Beagle', value: 13000 }
  ],

  'Beliebteste Automarken in Deutschland (Neuzulassungen pro Jahr)': [
    { name: 'Volkswagen', value: 500000 },
    { name: 'Mercedes', value: 300000 },
    { name: 'BMW', value: 280000 },
    { name: 'Audi', value: 250000 },
    { name: 'Opel', value: 150000 },
    { name: 'Ford', value: 140000 },
    { name: 'Skoda', value: 200000 },
    { name: 'Hyundai', value: 120000 },
    { name: 'Toyota', value: 100000 },
    { name: 'Renault', value: 90000 }
  ],

  'Beliebteste Farben (Umfrage in %)': [
    { name: 'Blau', value: 40 },
    { name: 'Rot', value: 30 },
    { name: 'Grün', value: 25 },
    { name: 'Schwarz', value: 50 },
    { name: 'Weiß', value: 45 },
    { name: 'Gelb', value: 15 },
    { name: 'Orange', value: 10 },
    { name: 'Lila', value: 12 },
    { name: 'Pink', value: 18 },
    { name: 'Grau', value: 35 }
  ],

  'Beliebteste Freizeitaktivitäten (Umfrage in %)': [
    { name: 'Fernsehen', value: 80 },
    { name: 'Musik hören', value: 75 },
    { name: 'Sport treiben', value: 60 },
    { name: 'Lesen', value: 55 },
    { name: 'Kochen', value: 50 },
    { name: 'Spazieren gehen', value: 65 },
    { name: 'Gaming', value: 45 },
    { name: 'Reisen', value: 70 },
    { name: 'Kino', value: 40 },
    { name: 'Shopping', value: 50 }
  ],

  'Beliebteste Länder zum Auswandern (Umfrage in %)': [
    { name: 'Kanada', value: 30 },
    { name: 'Schweiz', value: 25 },
    { name: 'Australien', value: 20 },
    { name: 'Neuseeland', value: 18 },
    { name: 'USA', value: 15 },
    { name: 'Schweden', value: 12 },
    { name: 'Norwegen', value: 10 },
    { name: 'Spanien', value: 22 },
    { name: 'Portugal', value: 17 },
    { name: 'Japan', value: 8 }
  ],

  'Beliebteste Süßigkeiten (Verkäufe in Mio. Packungen)': [
    { name: 'Schokolade', value: 500 },
    { name: 'Gummibärchen', value: 450 },
    { name: 'Chips', value: 400 },
    { name: 'Kekse', value: 350 },
    { name: 'Eis', value: 300 },
    { name: 'Bonbons', value: 250 },
    { name: 'Popcorn', value: 200 },
    { name: 'Müsliriegel', value: 180 },
    { name: 'Pralinen', value: 160 },
    { name: 'Lakritz', value: 120 }
  ],

  'Beliebteste Computerspiele (Spieler in Mio.)': [
    { name: 'Minecraft', value: 180 },
    { name: 'Fortnite', value: 150 },
    { name: 'Roblox', value: 200 },
    { name: 'GTA V', value: 120 },
    { name: 'League of Legends', value: 115 },
    { name: 'CS:GO', value: 90 },
    { name: 'Valorant', value: 80 },
    { name: 'FIFA', value: 75 },
    { name: 'Call of Duty', value: 70 },
    { name: 'PUBG', value: 65 }
  ],

  'Beliebteste Musikgenres (Umfrage in %)': [
    { name: 'Pop', value: 60 },
    { name: 'Rock', value: 50 },
    { name: 'Hip-Hop', value: 55 },
    { name: 'Elektronisch', value: 40 },
    { name: 'Klassik', value: 30 },
    { name: 'Jazz', value: 25 },
    { name: 'Schlager', value: 35 },
    { name: 'Metal', value: 20 },
    { name: 'Reggae', value: 15 },
    { name: 'Country', value: 10 }
  ],

  'Beliebteste Urlaubsarten (Umfrage in %)': [
    { name: 'Strandurlaub', value: 70 },
    { name: 'Städtereise', value: 65 },
    { name: 'Wanderurlaub', value: 40 },
    { name: 'Wellnessurlaub', value: 50 },
    { name: 'Camping', value: 35 },
    { name: 'Kreuzfahrt', value: 25 },
    { name: 'Skiurlaub', value: 20 },
    { name: 'Roadtrip', value: 30 },
    { name: 'Abenteuerurlaub', value: 15 },
    { name: 'Familienurlaub', value: 55 }
  ],

  'Beliebteste Schulabschlüsse (Anteil in %)': [
    { name: 'Abitur', value: 35 },
    { name: 'Realschulabschluss', value: 30 },
    { name: 'Hauptschulabschluss', value: 20 },
    { name: 'Bachelor', value: 15 },
    { name: 'Master', value: 10 },
    { name: 'Promotion', value: 2 },
    { name: 'Fachhochschulreife', value: 12 },
    { name: 'Berufsausbildung', value: 25 },
    { name: 'Kein Abschluss', value: 5 },
    { name: 'Fachschule', value: 8 }
  ],

  'Beliebteste Möbelstücke (Verkäufe in Mio.)': [
    { name: 'Sofa', value: 20 },
    { name: 'Bett', value: 18 },
    { name: 'Stuhl', value: 25 },
    { name: 'Tisch', value: 22 },
    { name: 'Schrank', value: 15 },
    { name: 'Kommode', value: 12 },
    { name: 'Regal', value: 14 },
    { name: 'Schreibtisch', value: 10 },
    { name: 'TV‑Board', value: 8 },
    { name: 'Nachttisch', value: 9 }
  ],

  'Schnellste Tiere der Welt (km/h)': [
    { name: 'Wanderfalke', value: 390 },
    { name: 'Goldadler', value: 320 },
    { name: 'Gepard', value: 120 },
    { name: 'Schwertfisch', value: 110 },
    { name: 'Antilopen-Gazelle', value: 100 },
    { name: 'Grauer Marlin', value: 80 },
    { name: 'Strauß', value: 70 },
    { name: 'Löwe', value: 80 },
    { name: 'Hase', value: 60 },
    { name: 'Kojote', value: 65 }
  ],

  'Größte Länder der Welt (Fläche in Mio. km²)': [
    { name: 'Russland', value: 17.1 },
    { name: 'Kanada', value: 9.98 },
    { name: 'China', value: 9.6 },
    { name: 'USA', value: 9.52 },
    { name: 'Brasilien', value: 8.51 },
    { name: 'Australien', value: 7.69 },
    { name: 'Indien', value: 3.29 },
    { name: 'Argentinien', value: 2.78 },
    { name: 'Kasachstan', value: 2.72 },
    { name: 'Algerien', value: 2.38 }
  ],

  'Beliebteste Computersprachen für Anfänger (Umfrage in %)': [
    { name: 'Python', value: 45 },
    { name: 'JavaScript', value: 35 },
    { name: 'Java', value: 25 },
    { name: 'C#', value: 20 },
    { name: 'HTML/CSS', value: 50 },
    { name: 'Scratch', value: 30 },
    { name: 'PHP', value: 15 },
    { name: 'Swift', value: 10 },
    { name: 'Go', value: 8 },
    { name: 'Ruby', value: 5 }
  ],

  'Beliebteste Schulessen (Verkäufe pro Tag in Tausend)': [
    { name: 'Pizza', value: 300 },
    { name: 'Pasta', value: 250 },
    { name: 'Burger', value: 200 },
    { name: 'Pommes', value: 180 },
    { name: 'Salat', value: 150 },
    { name: 'Suppe', value: 120 },
    { name: 'Sandwich', value: 160 },
    { name: 'Wraps', value: 140 },
    { name: 'Chicken Nuggets', value: 170 },
    { name: 'Reisgerichte', value: 130 }
  ],

  'Beliebteste Freizeitparks weltweit (Besucher in Mio.)': [
    { name: 'Magic Kingdom (USA)', value: 21 },
    { name: 'Disneyland (USA)', value: 18 },
    { name: 'Tokyo Disneyland', value: 17 },
    { name: 'Tokyo DisneySea', value: 16 },
    { name: 'Universal Studios Japan', value: 14 },
    { name: 'Universal Studios Florida', value: 12 },
    { name: 'Epcot (USA)', value: 11 },
    { name: 'Animal Kingdom (USA)', value: 10 },
    { name: 'Europa-Park (DE)', value: 6 },
    { name: 'Phantasialand (DE)', value: 4 }
  ],

  'Beliebteste Haustiernamen (Deutschland, 2023)': [
    { name: 'Bella', value: 1 },
    { name: 'Luna', value: 2 },
    { name: 'Charlie', value: 3 },
    { name: 'Max', value: 4 },
    { name: 'Milo', value: 5 },
    { name: 'Nala', value: 6 },
    { name: 'Simba', value: 7 },
    { name: 'Leo', value: 8 },
    { name: 'Lucy', value: 9 },
    { name: 'Kira', value: 10 }
  ],

  'Beliebteste Snacks weltweit (Verkäufe in Mio. Packungen)': [
    { name: 'Chips', value: 600 },
    { name: 'Schokolade', value: 550 },
    { name: 'Popcorn', value: 300 },
    { name: 'Nüsse', value: 250 },
    { name: 'Cracker', value: 200 },
    { name: 'Proteinriegel', value: 180 },
    { name: 'Gummibärchen', value: 400 },
    { name: 'Kekse', value: 350 },
    { name: 'Pralinen', value: 160 },
    { name: 'Reiswaffeln', value: 120 }
  ],

  'Beliebteste Spielkonsolen (Verkäufe in Millionen)': [
    { name: 'PlayStation 2', value: 158 },
    { name: 'Nintendo DS', value: 154 },
    { name: 'Game Boy / Color', value: 118 },
    { name: 'PlayStation 4', value: 117 },
    { name: 'Nintendo Switch', value: 140 },
    { name: 'PlayStation', value: 102 },
    { name: 'Wii', value: 101 },
    { name: 'Xbox 360', value: 85 },
    { name: 'PlayStation 3', value: 87 },
    { name: 'Xbox One', value: 58 }
  ],

  'Beliebteste Gemüsegerichte (Konsum in Millionen Portionen)': [
    { name: 'Gemüsepfanne', value: 300 },
    { name: 'Ratatouille', value: 250 },
    { name: 'Gemüsesuppe', value: 280 },
    { name: 'Salat Bowl', value: 350 },
    { name: 'Ofengemüse', value: 260 },
    { name: 'Brokkoli mit Käse', value: 200 },
    { name: 'Spinat mit Kartoffeln', value: 180 },
    { name: 'Gemüse-Curry', value: 220 },
    { name: 'Tomatenreis', value: 150 },
    { name: 'Zucchini-Pfanne', value: 170 }
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
selectedList = [['Städte nach Einwohnerzahl (in Millionen)','Berge nach Höhe (in Metern)','Beliebteste Essen (geschätzt in Millionen täglicher Konsumenten)','Instagram-Follower (in Millionen)','Vermögen (geschätzt in Milliarden USD)','Gefährlichste Tiere (geschätzte Todesfälle pro Jahr)','Beliebtester Beruf (nach Anzahl Beschäftigter in Deutschland)','Bestverdienende Berufe (Durchschnittliches Jahresgehalt in Deutschland, in Tausend €)','Lebensmittel Preis pro kg (Durchschnittspreis in Deutschland, in €)','Dinge, die die meisten Deutschen besitzen (geschätzter Anteil in %)', 'Glücklichste Länder (World Happiness Report, Score von 0–10)','Lebensmittel mit den meisten Kalorien pro 100g','Teuerste bekannte Autos (Neupreis in Millionen €)','Länder mit den meisten Touristen (Jährliche Besucher in Millionen)','Beliebteste Getränke (Konsum pro Kopf in Litern)','Beliebteste deutsche Haustiere (Anzahl in Millionen)','Häufigste männliche Vornamen (Neugeborene 2023)','Häufigste weibliche Vornamen (Neugeborene 2023)','Schwierigste Schulfächer laut Schülern (Umfragewert in % der Schüler)','Länder mit der höchsten Lebenserwartung (Durchschnittliche Lebenserwartung in Jahren)','Durchschnittliches Einkommen pro Land (Durchschnittliches Jahreseinkommen pro Kopf in Tausend €)','Erfolgreichste Kinofilme aller Zeiten (Weltweites Einspielergebnis in Milliarden US-$)','Beliebteste Sportarten weltweit (Anzahl der aktiven Fans in Milliarden)','Meistgenutzte Apps (Monatlich aktive Nutzer in Milliarden)','Längste Flüsse der Welt (in km)','Größte Ozeane (Fläche in Mio. km²)','Beliebteste Obstsorten (Weltproduktion in Mio. Tonnen)','Beliebteste Gemüsesorten (Weltproduktion in Mio. Tonnen)','Beliebteste Sportarten in Deutschland (aktive Mitglieder in Mio.)','Beliebteste Hunderassen (Registrierungen pro Jahr)','Beliebteste Automarken in Deutschland (Neuzulassungen pro Jahr)','Beliebteste Farben (Umfrage in %)','Beliebteste Freizeitaktivitäten (Umfrage in %)','Beliebteste Länder zum Auswandern (Umfrage in %)','Beliebteste Süßigkeiten (Verkäufe in Mio. Packungen)','Beliebteste Computerspiele (Spieler in Mio.)','Beliebteste Musikgenres (Umfrage in %)','Beliebteste Urlaubsarten (Umfrage in %)','Beliebteste Schulabschlüsse (Anteil in %)','Beliebteste Möbelstücke (Verkäufe in Mio.)','Schnellste Tiere der Welt (km/h)','Größte Länder der Welt (Fläche in Mio. km²)','Beliebteste Computersprachen für Anfänger (Umfrage in %)','Beliebteste Schulessen (Verkäufe pro Tag in Tausend)','Beliebteste Freizeitparks weltweit (Besucher in Mio.)','Beliebteste Haustiernamen (Deutschland, 2023)','Beliebteste Snacks weltweit (Verkäufe in Mio. Packungen)','Beliebteste Spielkonsolen (Verkäufe in Millionen)','Beliebteste Gemüsegerichte (Konsum in Millionen Portionen)']
];

