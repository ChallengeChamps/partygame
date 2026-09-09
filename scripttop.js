/* -------------------- DATEN -------------------- */

/* Fußball-Kategorien */
const categoriesFootball = [
  "Angriff",
  "Mittelfeld",
  "Abwehr",
  "Tor",
  "Trainer",
  "Standartschütze",
  "Publikumsliebling",
  "Spielmacher",
  "Kapitän"
];

/* Tier-Kategorien (9 Werte, alle 1–100) */
const categoriesAnimals = [
  "Geschwindigkeit",
  "Gewicht",
  "Gefährlichkeit",
  "Intelligenz",
  "Ausdauer",
  "Sprungkraft",
  "Stärke",
  "Reaktionszeit",
  "Wendigkeit"
];

/* Geografie-Kategorien (9 Werte, alle 1–100) */
const categoriesGeografie = [
"Bruttoinlandsprodukt",
"Bevölkerung",
"Bildung",
"Sicherheit",
"Gesundheitssystem",
"Technologie",
"Klima",
"Natur",
"Infrastruktur"
];
/* Berufs-Kategorien */
const categoriesBerufe = [
  "Gehalt",
  "Stresslevel",
  "Verantwortung",
  "Risiko",
  "Ausbildungslänge",
  "Arbeitszeiten",
  "Körperliche Belastung",
  "Psychische Belastung",
  "Gefahrenlevel"
];

/* Fußball-Spieler */
const footballPlayers = [
  { name: "Cristiano Ronaldo", stats: { Angriff: 98, Mittelfeld: 70, Abwehr: 40, Tor: 10, Trainer: 20, Standartschütze: 95, Publikumsliebling: 99, Spielmacher: 85, Kapitän: 96 }},
  { name: "Lionel Messi", stats: { Angriff: 97, Mittelfeld: 90, Abwehr: 35, Tor: 5, Trainer: 25, Standartschütze: 92, Publikumsliebling: 98, Spielmacher: 99, Kapitän: 94 }},
  { name: "Kylian Mbappé", stats: { Angriff: 95, Mittelfeld: 75, Abwehr: 50, Tor: 10, Trainer: 15, Standartschütze: 88, Publikumsliebling: 90, Spielmacher: 80, Kapitän: 88 }},
  { name: "Erling Haaland", stats: { Angriff: 96, Mittelfeld: 60, Abwehr: 55, Tor: 8, Trainer: 10, Standartschütze: 85, Publikumsliebling: 85, Spielmacher: 70, Kapitän: 90 }},
  { name: "Kevin De Bruyne", stats: { Angriff: 80, Mittelfeld: 98, Abwehr: 60, Tor: 5, Trainer: 30, Standartschütze: 75, Publikumsliebling: 70, Spielmacher: 95, Kapitän: 92 }},
  { name: "Neymar Jr.", stats: { Angriff: 94, Mittelfeld: 82, Abwehr: 38, Tor: 12, Trainer: 18, Standartschütze: 90, Publikumsliebling: 96, Spielmacher: 88, Kapitän: 86 }},
  { name: "Mohamed Salah", stats: { Angriff: 93, Mittelfeld: 78, Abwehr: 45, Tor: 10, Trainer: 20, Standartschütze: 88, Publikumsliebling: 92, Spielmacher: 84, Kapitän: 87 }},
  { name: "Robert Lewandowski", stats: { Angriff: 96, Mittelfeld: 70, Abwehr: 50, Tor: 8, Trainer: 22, Standartschütze: 89, Publikumsliebling: 90, Spielmacher: 80, Kapitän: 91 }},
  { name: "Jude Bellingham", stats: { Angriff: 85, Mittelfeld: 95, Abwehr: 65, Tor: 6, Trainer: 25, Standartschütze: 70, Publikumsliebling: 88, Spielmacher: 92, Kapitän: 93 }},
  { name: "Vinícius Jr.", stats: { Angriff: 92, Mittelfeld: 76, Abwehr: 40, Tor: 10, Trainer: 15, Standartschütze: 75, Publikumsliebling: 94, Spielmacher: 82, Kapitän: 85 }},
{ name: "Zinedine Zidane", stats: { Angriff: 88, Mittelfeld: 97, Abwehr: 55, Tor: 10, Trainer: 95, Standartschütze: 86, Publikumsliebling: 94, Spielmacher: 99, Kapitän: 92 }},
{ name: "Joachim Löw", stats: { Angriff: 40, Mittelfeld: 55, Abwehr: 50, Tor: 5, Trainer: 92, Standartschütze: 30, Publikumsliebling: 70, Spielmacher: 60, Kapitän: 75 }},
{ name: "Jürgen Klopp", stats: { Angriff: 45, Mittelfeld: 60, Abwehr: 55, Tor: 5, Trainer: 96, Standartschütze: 35, Publikumsliebling: 90, Spielmacher: 65, Kapitän: 85 }},
{ name: "Pep Guardiola", stats: { Angriff: 50, Mittelfeld: 70, Abwehr: 60, Tor: 5, Trainer: 99, Standartschütze: 40, Publikumsliebling: 88, Spielmacher: 95, Kapitän: 90 }},
{ name: "José Mourinho", stats: { Angriff: 35, Mittelfeld: 55, Abwehr: 60, Tor: 5, Trainer: 94, Standartschütze: 30, Publikumsliebling: 75, Spielmacher: 70, Kapitän: 85 }},
{ name: "Carlo Ancelotti", stats: { Angriff: 40, Mittelfeld: 60, Abwehr: 55, Tor: 5, Trainer: 97, Standartschütze: 35, Publikumsliebling: 85, Spielmacher: 80, Kapitän: 88 }},
{ name: "Hansi Flick", stats: { Angriff: 45, Mittelfeld: 60, Abwehr: 55, Tor: 5, Trainer: 90, Standartschütze: 30, Publikumsliebling: 78, Spielmacher: 70, Kapitän: 80 }},
{ name: "Thomas Tuchel", stats: { Angriff: 40, Mittelfeld: 55, Abwehr: 50, Tor: 5, Trainer: 88, Standartschütze: 30, Publikumsliebling: 70, Spielmacher: 65, Kapitän: 75 }},

{ name: "Gianluigi Buffon", stats: { Angriff: 20, Mittelfeld: 40, Abwehr: 85, Tor: 98, Trainer: 60, Standartschütze: 10, Publikumsliebling: 95, Spielmacher: 50, Kapitän: 90 }},
{ name: "Iker Casillas", stats: { Angriff: 18, Mittelfeld: 35, Abwehr: 80, Tor: 96, Trainer: 55, Standartschütze: 10, Publikumsliebling: 92, Spielmacher: 48, Kapitän: 88 }},
{ name: "Manuel Neuer Prime", stats: { Angriff: 25, Mittelfeld: 45, Abwehr: 88, Tor: 99, Trainer: 50, Standartschütze: 15, Publikumsliebling: 96, Spielmacher: 60, Kapitän: 93 }},
{ name: "Edwin van der Sar", stats: { Angriff: 20, Mittelfeld: 40, Abwehr: 82, Tor: 95, Trainer: 55, Standartschütze: 10, Publikumsliebling: 90, Spielmacher: 55, Kapitän: 85 }},
{ name: "Oliver Kahn", stats: { Angriff: 30, Mittelfeld: 40, Abwehr: 90, Tor: 97, Trainer: 65, Standartschütze: 15, Publikumsliebling: 94, Spielmacher: 50, Kapitän: 95 }},

{ name: "Sergio Ramos", stats: { Angriff: 70, Mittelfeld: 65, Abwehr: 95, Tor: 12, Trainer: 40, Standartschütze: 80, Publikumsliebling: 90, Spielmacher: 70, Kapitän: 96 }},
{ name: "Virgil van Dijk", stats: { Angriff: 65, Mittelfeld: 60, Abwehr: 96, Tor: 10, Trainer: 35, Standartschütze: 70, Publikumsliebling: 85, Spielmacher: 65, Kapitän: 94 }},
{ name: "Paolo Maldini", stats: { Angriff: 55, Mittelfeld: 60, Abwehr: 98, Tor: 8, Trainer: 50, Standartschütze: 60, Publikumsliebling: 95, Spielmacher: 70, Kapitän: 97 }},
{ name: "Franz Beckenbauer", stats: { Angriff: 70, Mittelfeld: 80, Abwehr: 97, Tor: 15, Trainer: 85, Standartschütze: 75, Publikumsliebling: 98, Spielmacher: 90, Kapitän: 99 }},
{ name: "Cafu", stats: { Angriff: 75, Mittelfeld: 70, Abwehr: 90, Tor: 10, Trainer: 40, Standartschütze: 65, Publikumsliebling: 92, Spielmacher: 75, Kapitän: 88 }},
{ name: "Roberto Carlos", stats: { Angriff: 85, Mittelfeld: 70, Abwehr: 88, Tor: 12, Trainer: 35, Standartschütze: 100, Publikumsliebling: 94, Spielmacher: 78, Kapitän: 85 }},
{ name: "Dani Alves", stats: { Angriff: 80, Mittelfeld: 75, Abwehr: 85, Tor: 10, Trainer: 35, Standartschütze: 70, Publikumsliebling: 90, Spielmacher: 80, Kapitän: 84 }},

{ name: "Luka Modrić", stats: { Angriff: 78, Mittelfeld: 96, Abwehr: 60, Tor: 10, Trainer: 40, Standartschütze: 80, Publikumsliebling: 95, Spielmacher: 98, Kapitän: 90 }},
{ name: "Toni Kroos", stats: { Angriff: 75, Mittelfeld: 95, Abwehr: 65, Tor: 8, Trainer: 45, Standartschütze: 85, Publikumsliebling: 90, Spielmacher: 96, Kapitän: 88 }},
{ name: "Andrés Iniesta", stats: { Angriff: 80, Mittelfeld: 97, Abwehr: 55, Tor: 7, Trainer: 50, Standartschütze: 75, Publikumsliebling: 98, Spielmacher: 99, Kapitän: 90 }},
{ name: "Xavi Hernández", stats: { Angriff: 70, Mittelfeld: 98, Abwehr: 60, Tor: 6, Trainer: 85, Standartschütze: 70, Publikumsliebling: 95, Spielmacher: 99, Kapitän: 92 }},
{ name: "Paul Pogba", stats: { Angriff: 85, Mittelfeld: 88, Abwehr: 65, Tor: 10, Trainer: 35, Standartschütze: 80, Publikumsliebling: 90, Spielmacher: 85, Kapitän: 87 }},
{ name: "Marco Verratti", stats: { Angriff: 70, Mittelfeld: 90, Abwehr: 60, Tor: 5, Trainer: 30, Standartschütze: 65, Publikumsliebling: 85, Spielmacher: 88, Kapitän: 80 }},
{ name: "Thiago Alcântara", stats: { Angriff: 75, Mittelfeld: 92, Abwehr: 60, Tor: 6, Trainer: 35, Standartschütze: 70, Publikumsliebling: 88, Spielmacher: 90, Kapitän: 82 }},

{ name: "Harry Kane", stats: { Angriff: 95, Mittelfeld: 75, Abwehr: 55, Tor: 12, Trainer: 30, Standartschütze: 90, Publikumsliebling: 92, Spielmacher: 80, Kapitän: 90 }},
{ name: "Karim Benzema", stats: { Angriff: 94, Mittelfeld: 80, Abwehr: 50, Tor: 10, Trainer: 35, Standartschütze: 88, Publikumsliebling: 93, Spielmacher: 85, Kapitän: 89 }},
{ name: "Luis Suárez", stats: { Angriff: 93, Mittelfeld: 70, Abwehr: 45, Tor: 12, Trainer: 25, Standartschütze: 85, Publikumsliebling: 90, Spielmacher: 82, Kapitän: 86 }},
{ name: "Zlatan Ibrahimović", stats: { Angriff: 96, Mittelfeld: 75, Abwehr: 50, Tor: 14, Trainer: 40, Standartschütze: 92, Publikumsliebling: 95, Spielmacher: 85, Kapitän: 94 }},
{ name: "Antoine Griezmann", stats: { Angriff: 88, Mittelfeld: 80, Abwehr: 60, Tor: 10, Trainer: 30, Standartschütze: 80, Publikumsliebling: 88, Spielmacher: 84, Kapitän: 85 }},
{ name: "Gabriel Jesus", stats: { Angriff: 85, Mittelfeld: 75, Abwehr: 55, Tor: 10, Trainer: 25, Standartschütze: 78, Publikumsliebling: 85, Spielmacher: 80, Kapitän: 82 }},
{ name: "Raheem Sterling", stats: { Angriff: 86, Mittelfeld: 78, Abwehr: 50, Tor: 9, Trainer: 20, Standartschütze: 75, Publikumsliebling: 85, Spielmacher: 78, Kapitän: 80 }},
{ name: "Sadio Mané", stats: { Angriff: 92, Mittelfeld: 80, Abwehr: 55, Tor: 10, Trainer: 25, Standartschütze: 82, Publikumsliebling: 94, Spielmacher: 84, Kapitän: 88 }},
{ name: "Son Heung-min", stats: { Angriff: 93, Mittelfeld: 78, Abwehr: 55, Tor: 11, Trainer: 25, Standartschütze: 85, Publikumsliebling: 95, Spielmacher: 82, Kapitän: 87 }},
{ name: "Riyad Mahrez", stats: { Angriff: 87, Mittelfeld: 80, Abwehr: 50, Tor: 9, Trainer: 20, Standartschütze: 85, Publikumsliebling: 88, Spielmacher: 84, Kapitän: 82 }},

{ name: "Erik ten Hag", stats: { Angriff: 40, Mittelfeld: 55, Abwehr: 50, Tor: 5, Trainer: 90, Standartschütze: 30, Publikumsliebling: 70, Spielmacher: 75, Kapitän: 80 }},
{ name: "Diego Simeone", stats: { Angriff: 50, Mittelfeld: 60, Abwehr: 70, Tor: 5, Trainer: 95, Standartschütze: 35, Publikumsliebling: 85, Spielmacher: 70, Kapitän: 90 }},
{ name: "Arsène Wenger", stats: { Angriff: 35, Mittelfeld: 55, Abwehr: 50, Tor: 5, Trainer: 97, Standartschütze: 30, Publikumsliebling: 80, Spielmacher: 75, Kapitän: 85 }},
{ name: "Louis van Gaal", stats: { Angriff: 40, Mittelfeld: 60, Abwehr: 55, Tor: 5, Trainer: 92, Standartschütze: 30, Publikumsliebling: 75, Spielmacher: 70, Kapitän: 82 }},
{ name: "Marcelo Bielsa", stats: { Angriff: 45, Mittelfeld: 65, Abwehr: 55, Tor: 5, Trainer: 94, Standartschütze: 35, Publikumsliebling: 85, Spielmacher: 75, Kapitän: 80 }},
{ name: "Ralf Rangnick", stats: { Angriff: 35, Mittelfeld: 55, Abwehr: 50, Tor: 5, Trainer: 90, Standartschütze: 30, Publikumsliebling: 70, Spielmacher: 65, Kapitän: 78 }},
{ name: "Lucien Favre", stats: { Angriff: 40, Mittelfeld: 60, Abwehr: 55, Tor: 5, Trainer: 88, Standartschütze: 30, Publikumsliebling: 75, Spielmacher: 70, Kapitän: 80 }},
{ name: "Julian Nagelsmann", stats: { Angriff: 45, Mittelfeld: 60, Abwehr: 55, Tor: 5, Trainer: 93, Standartschütze: 35, Publikumsliebling: 80, Spielmacher: 75, Kapitän: 85 }},
{ name: "Oliver Glasner", stats: { Angriff: 40, Mittelfeld: 55, Abwehr: 50, Tor: 5, Trainer: 89, Standartschütze: 30, Publikumsliebling: 72, Spielmacher: 68, Kapitän: 78 }},
{ name: "Roberto Mancini", stats: { Angriff: 45, Mittelfeld: 60, Abwehr: 55, Tor: 5, Trainer: 91, Standartschütze: 35, Publikumsliebling: 80, Spielmacher: 75, Kapitän: 85 }},
{ name: "Didier Deschamps", stats: { Angriff: 50, Mittelfeld: 65, Abwehr: 60, Tor: 5, Trainer: 95, Standartschütze: 40, Publikumsliebling: 85, Spielmacher: 78, Kapitän: 90 }},
{ name: "Fernando Santos", stats: { Angriff: 35, Mittelfeld: 55, Abwehr: 50, Tor: 5, Trainer: 88, Standartschütze: 30, Publikumsliebling: 70, Spielmacher: 65, Kapitän: 78 }},
{ name: "Tite", stats: { Angriff: 40, Mittelfeld: 60, Abwehr: 55, Tor: 5, Trainer: 92, Standartschütze: 30, Publikumsliebling: 75, Spielmacher: 70, Kapitän: 82 }},
{ name: "Gareth Southgate", stats: { Angriff: 35, Mittelfeld: 55, Abwehr: 50, Tor: 5, Trainer: 87, Standartschütze: 30, Publikumsliebling: 70, Spielmacher: 65, Kapitän: 78 }},
{ name: "Vicente del Bosque", stats: { Angriff: 40, Mittelfeld: 60, Abwehr: 55, Tor: 5, Trainer: 98, Standartschütze: 35, Publikumsliebling: 85, Spielmacher: 75, Kapitän: 88 }},
{ name: "Ottmar Hitzfeld", stats: { Angriff: 40, Mittelfeld: 60, Abwehr: 55, Tor: 5, Trainer: 96, Standartschütze: 35, Publikumsliebling: 80, Spielmacher: 75, Kapitän: 85 }},
{ name: "Felix Magath", stats: { Angriff: 35, Mittelfeld: 55, Abwehr: 50, Tor: 5, Trainer: 85, Standartschütze: 30, Publikumsliebling: 70, Spielmacher: 65, Kapitän: 78 }},
{ name: "Rudi Völler", stats: { Angriff: 85, Mittelfeld: 70, Abwehr: 55, Tor: 10, Trainer: 80, Standartschütze: 75, Publikumsliebling: 90, Spielmacher: 78, Kapitän: 88 }},
{ name: "Lothar Matthäus", stats: { Angriff: 88, Mittelfeld: 85, Abwehr: 70, Tor: 10, Trainer: 75, Standartschütze: 80, Publikumsliebling: 95, Spielmacher: 85, Kapitän: 95 }},
{ name: "Miroslav Klose", stats: { Angriff: 92, Mittelfeld: 70, Abwehr: 55, Tor: 12, Trainer: 70, Standartschütze: 85, Publikumsliebling: 90, Spielmacher: 77, Kapitän: 81 }}
];

/* Tiere (alle Werte 1–100) */
const animalPlayers = [
  { name: "Gepard", stats: { Geschwindigkeit: 100, Gewicht: 40, Gefährlichkeit: 60, Intelligenz: 40, Ausdauer: 55, Sprungkraft: 70, Stärke: 50, Reaktionszeit: 95, Wendigkeit: 90 }},
  { name: "Tiger", stats: { Geschwindigkeit: 65, Gewicht: 90, Gefährlichkeit: 95, Intelligenz: 60, Ausdauer: 70, Sprungkraft: 80, Stärke: 95, Reaktionszeit: 80, Wendigkeit: 60 }},
  { name: "Leopard", stats: { Geschwindigkeit: 58, Gewicht: 60, Gefährlichkeit: 80, Intelligenz: 55, Ausdauer: 65, Sprungkraft: 85, Stärke: 70, Reaktionszeit: 85, Wendigkeit: 75 }},
  { name: "Jaguar", stats: { Geschwindigkeit: 80, Gewicht: 70, Gefährlichkeit: 85, Intelligenz: 55, Ausdauer: 70, Sprungkraft: 90, Stärke: 85, Reaktionszeit: 80, Wendigkeit: 70 }},
  { name: "Wolf", stats: { Geschwindigkeit: 55, Gewicht: 50, Gefährlichkeit: 70, Intelligenz: 75, Ausdauer: 85, Sprungkraft: 60, Stärke: 65, Reaktionszeit: 75, Wendigkeit: 70 }},
  { name: "Elefant", stats: { Geschwindigkeit: 40, Gewicht: 100, Gefährlichkeit: 80, Intelligenz: 100, Ausdauer: 90, Sprungkraft: 10, Stärke: 100, Reaktionszeit: 40, Wendigkeit: 20 }},
  { name: "Känguru", stats: { Geschwindigkeit: 70, Gewicht: 50, Gefährlichkeit: 40, Intelligenz: 50, Ausdauer: 75, Sprungkraft: 100, Stärke: 60, Reaktionszeit: 70, Wendigkeit: 65 }},
  { name: "Puma", stats: { Geschwindigkeit: 72, Gewicht: 60, Gefährlichkeit: 75, Intelligenz: 55, Ausdauer: 70, Sprungkraft: 85, Stärke: 70, Reaktionszeit: 85, Wendigkeit: 80 }},
  { name: "Hyänenhund", stats: { Geschwindigkeit: 60, Gewicht: 30, Gefährlichkeit: 65, Intelligenz: 60, Ausdauer: 90, Sprungkraft: 55, Stärke: 50, Reaktionszeit: 75, Wendigkeit: 70 }},
  { name: "Falke", stats: { Geschwindigkeit: 100, Gewicht: 10, Gefährlichkeit: 40, Intelligenz: 45, Ausdauer: 50, Sprungkraft: 0, Stärke: 20, Reaktionszeit: 100, Wendigkeit: 95 }},
{ name: "Huhn", stats: { Geschwindigkeit: 25, Gewicht: 5, Gefährlichkeit: 5, Intelligenz: 20, Ausdauer: 30, Sprungkraft: 20, Stärke: 10, Reaktionszeit: 40, Wendigkeit: 50 }},
{ name: "Ente", stats: { Geschwindigkeit: 30, Gewicht: 6, Gefährlichkeit: 5, Intelligenz: 25, Ausdauer: 40, Sprungkraft: 15, Stärke: 10, Reaktionszeit: 45, Wendigkeit: 55 }},
{ name: "Gans", stats: { Geschwindigkeit: 35, Gewicht: 8, Gefährlichkeit: 20, Intelligenz: 30, Ausdauer: 50, Sprungkraft: 20, Stärke: 20, Reaktionszeit: 50, Wendigkeit: 45 }},
{ name: "Truthahn", stats: { Geschwindigkeit: 30, Gewicht: 12, Gefährlichkeit: 15, Intelligenz: 25, Ausdauer: 45, Sprungkraft: 25, Stärke: 20, Reaktionszeit: 40, Wendigkeit: 40 }},
{ name: "Schaf", stats: { Geschwindigkeit: 30, Gewicht: 60, Gefährlichkeit: 10, Intelligenz: 30, Ausdauer: 60, Sprungkraft: 20, Stärke: 40, Reaktionszeit: 35, Wendigkeit: 30 }},
{ name: "Ziege", stats: { Geschwindigkeit: 40, Gewicht: 40, Gefährlichkeit: 15, Intelligenz: 40, Ausdauer: 70, Sprungkraft: 50, Stärke: 35, Reaktionszeit: 45, Wendigkeit: 55 }},
{ name: "Kuh", stats: { Geschwindigkeit: 25, Gewicht: 90, Gefährlichkeit: 20, Intelligenz: 35, Ausdauer: 70, Sprungkraft: 10, Stärke: 80, Reaktionszeit: 30, Wendigkeit: 20 }},
{ name: "Pferd", stats: { Geschwindigkeit: 75, Gewicht: 70, Gefährlichkeit: 30, Intelligenz: 50, Ausdauer: 85, Sprungkraft: 60, Stärke: 70, Reaktionszeit: 60, Wendigkeit: 55 }},
{ name: "Esel", stats: { Geschwindigkeit: 40, Gewicht: 60, Gefährlichkeit: 10, Intelligenz: 45, Ausdauer: 80, Sprungkraft: 30, Stärke: 50, Reaktionszeit: 40, Wendigkeit: 35 }},
{ name: "Maultier", stats: { Geschwindigkeit: 45, Gewicht: 65, Gefährlichkeit: 15, Intelligenz: 50, Ausdauer: 85, Sprungkraft: 35, Stärke: 55, Reaktionszeit: 45, Wendigkeit: 40 }},

{ name: "Schwein", stats: { Geschwindigkeit: 35, Gewicht: 80, Gefährlichkeit: 20, Intelligenz: 45, Ausdauer: 60, Sprungkraft: 20, Stärke: 50, Reaktionszeit: 40, Wendigkeit: 35 }},
{ name: "Wildschwein", stats: { Geschwindigkeit: 50, Gewicht: 90, Gefährlichkeit: 70, Intelligenz: 45, Ausdauer: 75, Sprungkraft: 30, Stärke: 80, Reaktionszeit: 55, Wendigkeit: 40 }},
{ name: "Fuchs", stats: { Geschwindigkeit: 60, Gewicht: 15, Gefährlichkeit: 40, Intelligenz: 60, Ausdauer: 70, Sprungkraft: 40, Stärke: 30, Reaktionszeit: 70, Wendigkeit: 75 }},
{ name: "Dachs", stats: { Geschwindigkeit: 40, Gewicht: 20, Gefährlichkeit: 60, Intelligenz: 50, Ausdauer: 65, Sprungkraft: 30, Stärke: 50, Reaktionszeit: 55, Wendigkeit: 45 }},
{ name: "Waschbär", stats: { Geschwindigkeit: 35, Gewicht: 10, Gefährlichkeit: 25, Intelligenz: 70, Ausdauer: 50, Sprungkraft: 35, Stärke: 25, Reaktionszeit: 60, Wendigkeit: 65 }},
{ name: "Marder", stats: { Geschwindigkeit: 50, Gewicht: 5, Gefährlichkeit: 35, Intelligenz: 55, Ausdauer: 60, Sprungkraft: 40, Stärke: 20, Reaktionszeit: 70, Wendigkeit: 80 }},
{ name: "Iltis", stats: { Geschwindigkeit: 45, Gewicht: 4, Gefährlichkeit: 30, Intelligenz: 50, Ausdauer: 55, Sprungkraft: 35, Stärke: 20, Reaktionszeit: 65, Wendigkeit: 75 }},
{ name: "Stinktier", stats: { Geschwindigkeit: 30, Gewicht: 6, Gefährlichkeit: 20, Intelligenz: 40, Ausdauer: 50, Sprungkraft: 20, Stärke: 20, Reaktionszeit: 50, Wendigkeit: 40 }},
{ name: "Biber", stats: { Geschwindigkeit: 30, Gewicht: 25, Gefährlichkeit: 20, Intelligenz: 60, Ausdauer: 70, Sprungkraft: 25, Stärke: 40, Reaktionszeit: 45, Wendigkeit: 35 }},

{ name: "Luchs", stats: { Geschwindigkeit: 65, Gewicht: 25, Gefährlichkeit: 70, Intelligenz: 60, Ausdauer: 70, Sprungkraft: 80, Stärke: 60, Reaktionszeit: 75, Wendigkeit: 80 }},
{ name: "Serval", stats: { Geschwindigkeit: 70, Gewicht: 20, Gefährlichkeit: 60, Intelligenz: 55, Ausdauer: 65, Sprungkraft: 85, Stärke: 50, Reaktionszeit: 70, Wendigkeit: 85 }},
{ name: "Karakal", stats: { Geschwindigkeit: 75, Gewicht: 18, Gefährlichkeit: 65, Intelligenz: 55, Ausdauer: 70, Sprungkraft: 90, Stärke: 55, Reaktionszeit: 75, Wendigkeit: 85 }},
{ name: "Ozelot", stats: { Geschwindigkeit: 60, Gewicht: 15, Gefährlichkeit: 55, Intelligenz: 55, Ausdauer: 60, Sprungkraft: 75, Stärke: 45, Reaktionszeit: 70, Wendigkeit: 80 }},
{ name: "Schneeleopard", stats: { Geschwindigkeit: 70, Gewicht: 55, Gefährlichkeit: 85, Intelligenz: 60, Ausdauer: 75, Sprungkraft: 90, Stärke: 80, Reaktionszeit: 75, Wendigkeit: 70 }},
{ name: "Löwe", stats: { Geschwindigkeit: 80, Gewicht: 90, Gefährlichkeit: 95, Intelligenz: 60, Ausdauer: 80, Sprungkraft: 70, Stärke: 95, Reaktionszeit: 70, Wendigkeit: 60 }},
{ name: "Panther", stats: { Geschwindigkeit: 75, Gewicht: 70, Gefährlichkeit: 90, Intelligenz: 60, Ausdauer: 75, Sprungkraft: 85, Stärke: 85, Reaktionszeit: 75, Wendigkeit: 70 }},
{ name: "Bär", stats: { Geschwindigkeit: 55, Gewicht: 100, Gefährlichkeit: 90, Intelligenz: 60, Ausdauer: 80, Sprungkraft: 40, Stärke: 100, Reaktionszeit: 60, Wendigkeit: 40 }},
{ name: "Grizzly", stats: { Geschwindigkeit: 60, Gewicht: 100, Gefährlichkeit: 95, Intelligenz: 55, Ausdauer: 85, Sprungkraft: 45, Stärke: 100, Reaktionszeit: 65, Wendigkeit: 40 }},
{ name: "Eisbär", stats: { Geschwindigkeit: 55, Gewicht: 100, Gefährlichkeit: 90, Intelligenz: 55, Ausdauer: 80, Sprungkraft: 40, Stärke: 100, Reaktionszeit: 60, Wendigkeit: 35 }},
{ name: "Panda", stats: { Geschwindigkeit: 30, Gewicht: 90, Gefährlichkeit: 30, Intelligenz: 50, Ausdauer: 60, Sprungkraft: 20, Stärke: 70, Reaktionszeit: 40, Wendigkeit: 30 }},
{ name: "Weißer Hai", stats: { Geschwindigkeit: 60, Gewicht: 90, Gefährlichkeit: 100, Intelligenz: 40, Ausdauer: 80, Sprungkraft: 0, Stärke: 90, Reaktionszeit: 60, Wendigkeit: 40 }},
{ name: "Kobra", stats: { Geschwindigkeit: 35, Gewicht: 10, Gefährlichkeit: 90, Intelligenz: 40, Ausdauer: 60, Sprungkraft: 0, Stärke: 40, Reaktionszeit: 70, Wendigkeit: 50 }},
{ name: "Python", stats: { Geschwindigkeit: 30, Gewicht: 60, Gefährlichkeit: 80, Intelligenz: 35, Ausdauer: 75, Sprungkraft: 0, Stärke: 70, Reaktionszeit: 55, Wendigkeit: 40 }},
{ name: "Klapperschlange", stats: { Geschwindigkeit: 35, Gewicht: 8, Gefährlichkeit: 85, Intelligenz: 35, Ausdauer: 60, Sprungkraft: 0, Stärke: 35, Reaktionszeit: 70, Wendigkeit: 50 }},

{ name: "Bison", stats: { Geschwindigkeit: 50, Gewicht: 100, Gefährlichkeit: 70, Intelligenz: 45, Ausdauer: 85, Sprungkraft: 30, Stärke: 90, Reaktionszeit: 45, Wendigkeit: 35 }},
{ name: "Wasserbüffel", stats: { Geschwindigkeit: 45, Gewicht: 100, Gefährlichkeit: 75, Intelligenz: 45, Ausdauer: 85, Sprungkraft: 25, Stärke: 90, Reaktionszeit: 40, Wendigkeit: 30 }},
{ name: "Okapi", stats: { Geschwindigkeit: 45, Gewicht: 60, Gefährlichkeit: 20, Intelligenz: 45, Ausdauer: 70, Sprungkraft: 40, Stärke: 50, Reaktionszeit: 50, Wendigkeit: 55 }},
{ name: "Tapir", stats: { Geschwindigkeit: 35, Gewicht: 70, Gefährlichkeit: 20, Intelligenz: 40, Ausdauer: 70, Sprungkraft: 25, Stärke: 50, Reaktionszeit: 40, Wendigkeit: 35 }},

{ name: "Fennek", stats: { Geschwindigkeit: 45, Gewicht: 5, Gefährlichkeit: 10, Intelligenz: 45, Ausdauer: 50, Sprungkraft: 30, Stärke: 10, Reaktionszeit: 60, Wendigkeit: 75 }},
{ name: "Schnee-Wolf", stats: { Geschwindigkeit: 60, Gewicht: 55, Gefährlichkeit: 75, Intelligenz: 70, Ausdauer: 85, Sprungkraft: 55, Stärke: 65, Reaktionszeit: 75, Wendigkeit: 70 }},

{ name: "Steinadler", stats: { Geschwindigkeit: 70, Gewicht: 7, Gefährlichkeit: 50, Intelligenz: 55, Ausdauer: 60, Sprungkraft: 0, Stärke: 35, Reaktionszeit: 85, Wendigkeit: 80 }},
{ name: "Specht", stats: { Geschwindigkeit: 30, Gewicht: 3, Gefährlichkeit: 5, Intelligenz: 40, Ausdauer: 50, Sprungkraft: 0, Stärke: 10, Reaktionszeit: 50, Wendigkeit: 70 }},
{ name: "Königspinguin", stats: { Geschwindigkeit: 25, Gewicht: 35, Gefährlichkeit: 10, Intelligenz: 40, Ausdauer: 60, Sprungkraft: 5, Stärke: 25, Reaktionszeit: 35, Wendigkeit: 25 }},

{ name: "Barrakuda", stats: { Geschwindigkeit: 55, Gewicht: 10, Gefährlichkeit: 40, Intelligenz: 35, Ausdauer: 60, Sprungkraft: 0, Stärke: 25, Reaktionszeit: 50, Wendigkeit: 55 }},
{ name: "Zander", stats: { Geschwindigkeit: 40, Gewicht: 6, Gefährlichkeit: 10, Intelligenz: 30, Ausdauer: 50, Sprungkraft: 0, Stärke: 15, Reaktionszeit: 40, Wendigkeit: 50 }},

{ name: "Biene", stats: { Geschwindigkeit: 30, Gewicht: 1, Gefährlichkeit: 10, Intelligenz: 20, Ausdauer: 30, Sprungkraft: 0, Stärke: 5, Reaktionszeit: 60, Wendigkeit: 80 }},
{ name: "Wespe", stats: { Geschwindigkeit: 35, Gewicht: 1, Gefährlichkeit: 20, Intelligenz: 20, Ausdauer: 35, Sprungkraft: 0, Stärke: 5, Reaktionszeit: 65, Wendigkeit: 85 }},
{ name: "Hornisse", stats: { Geschwindigkeit: 40, Gewicht: 2, Gefährlichkeit: 30, Intelligenz: 25, Ausdauer: 40, Sprungkraft: 0, Stärke: 10, Reaktionszeit: 70, Wendigkeit: 80 }},
{ name: "Ameise", stats: { Geschwindigkeit: 20, Gewicht: 1, Gefährlichkeit: 1, Intelligenz: 20, Ausdauer: 40, Sprungkraft: 0, Stärke: 10, Reaktionszeit: 40, Wendigkeit: 60 }},

{ name: "Chamäleon", stats: { Geschwindigkeit: 20, Gewicht: 5, Gefährlichkeit: 5, Intelligenz: 40, Ausdauer: 50, Sprungkraft: 10, Stärke: 15, Reaktionszeit: 40, Wendigkeit: 50 }},
{ name: "Leguan", stats: { Geschwindigkeit: 25, Gewicht: 8, Gefährlichkeit: 10, Intelligenz: 40, Ausdauer: 55, Sprungkraft: 15, Stärke: 20, Reaktionszeit: 45, Wendigkeit: 45 }},
{ name: "Königspython", stats: { Geschwindigkeit: 25, Gewicht: 50, Gefährlichkeit: 60, Intelligenz: 35, Ausdauer: 70, Sprungkraft: 0, Stärke: 60, Reaktionszeit: 50, Wendigkeit: 40 }},

{ name: "Haushund", stats: { Geschwindigkeit: 50, Gewicht: 30, Gefährlichkeit: 20, Intelligenz: 70, Ausdauer: 70, Sprungkraft: 40, Stärke: 40, Reaktionszeit: 60, Wendigkeit: 65 }},
{ name: "Hauskatze", stats: { Geschwindigkeit: 45, Gewicht: 5, Gefährlichkeit: 10, Intelligenz: 60, Ausdauer: 50, Sprungkraft: 50, Stärke: 20, Reaktionszeit: 65, Wendigkeit: 80 }},
{ name: "Rotfuchs", stats: { Geschwindigkeit: 60, Gewicht: 15, Gefährlichkeit: 40, Intelligenz: 60, Ausdauer: 70, Sprungkraft: 40, Stärke: 30, Reaktionszeit: 70, Wendigkeit: 75 }},
{ name: "Koala", stats: { Geschwindigkeit: 20, Gewicht: 15, Gefährlichkeit: 5, Intelligenz: 40, Ausdauer: 50, Sprungkraft: 20, Stärke: 20, Reaktionszeit: 30, Wendigkeit: 40 }},
{ name: "Faultier", stats: { Geschwindigkeit: 5, Gewicht: 10, Gefährlichkeit: 5, Intelligenz: 30, Ausdauer: 40, Sprungkraft: 5, Stärke: 10, Reaktionszeit: 5, Wendigkeit: 10 }},
{ name: "Meerschweinchen", stats: { Geschwindigkeit: 25, Gewicht: 3, Gefährlichkeit: 2, Intelligenz: 20, Ausdauer: 30, Sprungkraft: 10, Stärke: 5, Reaktionszeit: 30, Wendigkeit: 40 }},
{ name: "Hamster", stats: { Geschwindigkeit: 20, Gewicht: 2, Gefährlichkeit: 2, Intelligenz: 20, Ausdauer: 25, Sprungkraft: 10, Stärke: 5, Reaktionszeit: 25, Wendigkeit: 35 }},
{ name: "Kaninchen", stats: { Geschwindigkeit: 45, Gewicht: 4, Gefährlichkeit: 5, Intelligenz: 30, Ausdauer: 40, Sprungkraft: 60, Stärke: 10, Reaktionszeit: 50, Wendigkeit: 70 }},
{ name: "Hase", stats: { Geschwindigkeit: 55, Gewicht: 8, Gefährlichkeit: 5, Intelligenz: 35, Ausdauer: 50, Sprungkraft: 70, Stärke: 15, Reaktionszeit: 60, Wendigkeit: 75 }},
{ name: "Dromedar", stats: { Geschwindigkeit: 45, Gewicht: 90, Gefährlichkeit: 20, Intelligenz: 40, Ausdauer: 95, Sprungkraft: 20, Stärke: 70, Reaktionszeit: 40, Wendigkeit: 30 }},
{ name: "Kamel", stats: { Geschwindigkeit: 40, Gewicht: 100, Gefährlichkeit: 20, Intelligenz: 40, Ausdauer: 100, Sprungkraft: 15, Stärke: 75, Reaktionszeit: 35, Wendigkeit: 25 }},
{ name: "Zebra", stats: { Geschwindigkeit: 70, Gewicht: 60, Gefährlichkeit: 30, Intelligenz: 45, Ausdauer: 80, Sprungkraft: 50, Stärke: 60, Reaktionszeit: 55, Wendigkeit: 60 }},
{ name: "Giraffe", stats: { Geschwindigkeit: 50, Gewicht: 100, Gefährlichkeit: 40, Intelligenz: 50, Ausdauer: 70, Sprungkraft: 30, Stärke: 80, Reaktionszeit: 40, Wendigkeit: 30 }},
{ name: "Kolibri", stats: { Geschwindigkeit: 55, Gewicht: 1, Gefährlichkeit: 2, Intelligenz: 40, Ausdauer: 40, Sprungkraft: 0, Stärke: 5, Reaktionszeit: 100, Wendigkeit: 95 }},
{ name: "Libelle", stats: { Geschwindigkeit: 40, Gewicht: 1, Gefährlichkeit: 1, Intelligenz: 30, Ausdauer: 35, Sprungkraft: 0, Stärke: 3, Reaktionszeit: 90, Wendigkeit: 100 }},
{ name: "Mücke", stats: { Geschwindigkeit: 25, Gewicht: 1, Gefährlichkeit: 1, Intelligenz: 10, Ausdauer: 20, Sprungkraft: 0, Stärke: 1, Reaktionszeit: 80, Wendigkeit: 95 }},

{ name: "Nashorn", stats: { Geschwindigkeit: 45, Gewicht: 100, Gefährlichkeit: 85, Intelligenz: 40, Ausdauer: 75, Sprungkraft: 20, Stärke: 100, Reaktionszeit: 35, Wendigkeit: 25 }},
{ name: "Flusspferd", stats: { Geschwindigkeit: 40, Gewicht: 100, Gefährlichkeit: 90, Intelligenz: 40, Ausdauer: 80, Sprungkraft: 20, Stärke: 95, Reaktionszeit: 35, Wendigkeit: 20 }},
{ name: "Antilope", stats: { Geschwindigkeit: 85, Gewicht: 40, Gefährlichkeit: 20, Intelligenz: 45, Ausdauer: 80, Sprungkraft: 70, Stärke: 40, Reaktionszeit: 70, Wendigkeit: 80 }},
{ name: "Gazelle", stats: { Geschwindigkeit: 90, Gewicht: 35, Gefährlichkeit: 15, Intelligenz: 40, Ausdauer: 75, Sprungkraft: 65, Stärke: 35, Reaktionszeit: 75, Wendigkeit: 85 }},
{ name: "Strauß", stats: { Geschwindigkeit: 80, Gewicht: 90, Gefährlichkeit: 40, Intelligenz: 35, Ausdauer: 70, Sprungkraft: 40, Stärke: 60, Reaktionszeit: 50, Wendigkeit: 40 }},
{ name: "Emu", stats: { Geschwindigkeit: 70, Gewicht: 80, Gefährlichkeit: 30, Intelligenz: 35, Ausdauer: 65, Sprungkraft: 35, Stärke: 50, Reaktionszeit: 45, Wendigkeit: 35 }},
{ name: "Pinguin", stats: { Geschwindigkeit: 20, Gewicht: 30, Gefährlichkeit: 10, Intelligenz: 40, Ausdauer: 60, Sprungkraft: 5, Stärke: 20, Reaktionszeit: 30, Wendigkeit: 20 }},
{ name: "Robbe", stats: { Geschwindigkeit: 40, Gewicht: 80, Gefährlichkeit: 20, Intelligenz: 50, Ausdauer: 70, Sprungkraft: 10, Stärke: 50, Reaktionszeit: 40, Wendigkeit: 30 }},
{ name: "Walross", stats: { Geschwindigkeit: 30, Gewicht: 100, Gefährlichkeit: 50, Intelligenz: 45, Ausdauer: 70, Sprungkraft: 5, Stärke: 90, Reaktionszeit: 35, Wendigkeit: 20 }},
{ name: "Seelöwe", stats: { Geschwindigkeit: 45, Gewicht: 70, Gefährlichkeit: 25, Intelligenz: 55, Ausdauer: 75, Sprungkraft: 20, Stärke: 50, Reaktionszeit: 45, Wendigkeit: 35 }},

{ name: "Krokodil", stats: { Geschwindigkeit: 50, Gewicht: 90, Gefährlichkeit: 95, Intelligenz: 40, Ausdauer: 80, Sprungkraft: 20, Stärke: 90, Reaktionszeit: 60, Wendigkeit: 30 }},
{ name: "Alligator", stats: { Geschwindigkeit: 45, Gewicht: 85, Gefährlichkeit: 90, Intelligenz: 40, Ausdauer: 75, Sprungkraft: 20, Stärke: 85, Reaktionszeit: 55, Wendigkeit: 30 }},
{ name: "Warzenschwein", stats: { Geschwindigkeit: 45, Gewicht: 60, Gefährlichkeit: 50, Intelligenz: 40, Ausdauer: 70, Sprungkraft: 30, Stärke: 60, Reaktionszeit: 50, Wendigkeit: 40 }},
{ name: "Hyäne", stats: { Geschwindigkeit: 60, Gewicht: 55, Gefährlichkeit: 80, Intelligenz: 60, Ausdauer: 80, Sprungkraft: 40, Stärke: 70, Reaktionszeit: 65, Wendigkeit: 60 }},
{ name: "Schakal", stats: { Geschwindigkeit: 55, Gewicht: 20, Gefährlichkeit: 50, Intelligenz: 55, Ausdauer: 70, Sprungkraft: 35, Stärke: 40, Reaktionszeit: 60, Wendigkeit: 65 }},
{ name: "Dingo", stats: { Geschwindigkeit: 60, Gewicht: 25, Gefährlichkeit: 55, Intelligenz: 60, Ausdauer: 75, Sprungkraft: 40, Stärke: 45, Reaktionszeit: 65, Wendigkeit: 70 }},
{ name: "Maus", stats: { Geschwindigkeit: 20, Gewicht: 1, Gefährlichkeit: 1, Intelligenz: 20, Ausdauer: 20, Sprungkraft: 10, Stärke: 2, Reaktionszeit: 40, Wendigkeit: 60 }},
{ name: "Ratte", stats: { Geschwindigkeit: 25, Gewicht: 2, Gefährlichkeit: 5, Intelligenz: 30, Ausdauer: 30, Sprungkraft: 15, Stärke: 5, Reaktionszeit: 45, Wendigkeit: 65 }},
{ name: "Frettchen", stats: { Geschwindigkeit: 40, Gewicht: 4, Gefährlichkeit: 20, Intelligenz: 50, Ausdauer: 50, Sprungkraft: 30, Stärke: 20, Reaktionszeit: 60, Wendigkeit: 70 }},
{ name: "Igel", stats: { Geschwindigkeit: 15, Gewicht: 3, Gefährlichkeit: 10, Intelligenz: 25, Ausdauer: 40, Sprungkraft: 5, Stärke: 10, Reaktionszeit: 20, Wendigkeit: 25 }},
{ name: "Schwarzer Panther", stats: { Geschwindigkeit: 78, Gewicht: 70, Gefährlichkeit: 90, Intelligenz: 60, Ausdauer: 75, Sprungkraft: 88, Stärke: 85, Reaktionszeit: 78, Wendigkeit: 72 }},
{ name: "Berglöwe", stats: { Geschwindigkeit: 75, Gewicht: 65, Gefährlichkeit: 85, Intelligenz: 60, Ausdauer: 80, Sprungkraft: 90, Stärke: 80, Reaktionszeit: 75, Wendigkeit: 78 }},
{ name: "Schwarzer Wolf", stats: { Geschwindigkeit: 65, Gewicht: 50, Gefährlichkeit: 75, Intelligenz: 70, Ausdauer: 85, Sprungkraft: 60, Stärke: 65, Reaktionszeit: 70, Wendigkeit: 72 }},
{ name: "Gorilla", stats: { Geschwindigkeit: 45, Gewicht: 90, Gefährlichkeit: 80, Intelligenz: 70, Ausdauer: 75, Sprungkraft: 50, Stärke: 100, Reaktionszeit: 55, Wendigkeit: 45 }},
{ name: "Schimpanse", stats: { Geschwindigkeit: 55, Gewicht: 40, Gefährlichkeit: 60, Intelligenz: 100, Ausdauer: 70, Sprungkraft: 65, Stärke: 60, Reaktionszeit: 70, Wendigkeit: 75 }},
{ name: "Orang-Utan", stats: { Geschwindigkeit: 40, Gewicht: 70, Gefährlichkeit: 50, Intelligenz: 80, Ausdauer: 65, Sprungkraft: 55, Stärke: 75, Reaktionszeit: 60, Wendigkeit: 55 }},
{ name: "Mandrill", stats: { Geschwindigkeit: 55, Gewicht: 35, Gefährlichkeit: 65, Intelligenz: 60, Ausdauer: 70, Sprungkraft: 60, Stärke: 55, Reaktionszeit: 65, Wendigkeit: 70 }},
{ name: "Pavian", stats: { Geschwindigkeit: 60, Gewicht: 40, Gefährlichkeit: 70, Intelligenz: 55, Ausdauer: 75, Sprungkraft: 65, Stärke: 60, Reaktionszeit: 65, Wendigkeit: 70 }},

{ name: "Schwarzer Bär", stats: { Geschwindigkeit: 55, Gewicht: 95, Gefährlichkeit: 85, Intelligenz: 60, Ausdauer: 80, Sprungkraft: 40, Stärke: 95, Reaktionszeit: 60, Wendigkeit: 40 }},
{ name: "Kodiakbär", stats: { Geschwindigkeit: 55, Gewicht: 100, Gefährlichkeit: 90, Intelligenz: 55, Ausdauer: 85, Sprungkraft: 40, Stärke: 100, Reaktionszeit: 60, Wendigkeit: 35 }},

{ name: "Schnee-Eule", stats: { Geschwindigkeit: 40, Gewicht: 6, Gefährlichkeit: 20, Intelligenz: 50, Ausdauer: 60, Sprungkraft: 0, Stärke: 20, Reaktionszeit: 90, Wendigkeit: 85 }},
{ name: "Habicht", stats: { Geschwindigkeit: 85, Gewicht: 5, Gefährlichkeit: 40, Intelligenz: 50, Ausdauer: 55, Sprungkraft: 0, Stärke: 25, Reaktionszeit: 95, Wendigkeit: 90 }},
{ name: "Uhu", stats: { Geschwindigkeit: 45, Gewicht: 8, Gefährlichkeit: 30, Intelligenz: 55, Ausdauer: 60, Sprungkraft: 0, Stärke: 30, Reaktionszeit: 85, Wendigkeit: 80 }},

{ name: "Schwarzer Leopard", stats: { Geschwindigkeit: 70, Gewicht: 60, Gefährlichkeit: 85, Intelligenz: 60, Ausdauer: 70, Sprungkraft: 85, Stärke: 75, Reaktionszeit: 75, Wendigkeit: 80 }},
{ name: "Waldkatze", stats: { Geschwindigkeit: 55, Gewicht: 10, Gefährlichkeit: 40, Intelligenz: 55, Ausdauer: 60, Sprungkraft: 55, Stärke: 30, Reaktionszeit: 70, Wendigkeit: 75 }},
{ name: "Luchs Kanada", stats: { Geschwindigkeit: 60, Gewicht: 25, Gefährlichkeit: 65, Intelligenz: 55, Ausdauer: 65, Sprungkraft: 75, Stärke: 55, Reaktionszeit: 70, Wendigkeit: 80 }},

{ name: "Riesenwaran", stats: { Geschwindigkeit: 50, Gewicht: 70, Gefährlichkeit: 85, Intelligenz: 45, Ausdauer: 70, Sprungkraft: 20, Stärke: 80, Reaktionszeit: 55, Wendigkeit: 40 }},
{ name: "Komodowaran", stats: { Geschwindigkeit: 45, Gewicht: 80, Gefährlichkeit: 90, Intelligenz: 45, Ausdauer: 75, Sprungkraft: 20, Stärke: 85, Reaktionszeit: 55, Wendigkeit: 35 }},

{ name: "Schwarzer Panther Asien", stats: { Geschwindigkeit: 78, Gewicht: 65, Gefährlichkeit: 90, Intelligenz: 60, Ausdauer: 75, Sprungkraft: 88, Stärke: 85, Reaktionszeit: 78, Wendigkeit: 72 }},
{ name: "Riesenwolf", stats: { Geschwindigkeit: 70, Gewicht: 60, Gefährlichkeit: 80, Intelligenz: 65, Ausdauer: 85, Sprungkraft: 65, Stärke: 70, Reaktionszeit: 78, Wendigkeit: 70 }},
  { name: "Streifengnu", stats: { Geschwindigkeit: 55, Gewicht: 80, Gefährlichkeit: 40, Intelligenz: 40, Ausdauer: 85, Sprungkraft: 40, Stärke: 70, Reaktionszeit: 50, Wendigkeit: 45 }},
{ name: "Antilopenkalb", stats: { Geschwindigkeit: 50, Gewicht: 25, Gefährlichkeit: 10, Intelligenz: 35, Ausdauer: 60, Sprungkraft: 45, Stärke: 25, Reaktionszeit: 55, Wendigkeit: 60 }},
{ name: "Waldreh", stats: { Geschwindigkeit: 60, Gewicht: 35, Gefährlichkeit: 15, Intelligenz: 45, Ausdauer: 70, Sprungkraft: 55, Stärke: 35, Reaktionszeit: 60, Wendigkeit: 70 }},
{ name: "Moschusochse", stats: { Geschwindigkeit: 40, Gewicht: 100, Gefährlichkeit: 60, Intelligenz: 45, Ausdauer: 90, Sprungkraft: 20, Stärke: 90, Reaktionszeit: 40, Wendigkeit: 30 }},
{ name: "Schwarzes Schaf", stats: { Geschwindigkeit: 30, Gewicht: 60, Gefährlichkeit: 15, Intelligenz: 35, Ausdauer: 65, Sprungkraft: 20, Stärke: 40, Reaktionszeit: 35, Wendigkeit: 30 }},
{ name: "Bergziege", stats: { Geschwindigkeit: 45, Gewicht: 45, Gefährlichkeit: 20, Intelligenz: 45, Ausdauer: 75, Sprungkraft: 55, Stärke: 40, Reaktionszeit: 50, Wendigkeit: 70 }},
{ name: "Schwarzer Widder", stats: { Geschwindigkeit: 40, Gewicht: 70, Gefährlichkeit: 35, Intelligenz: 40, Ausdauer: 70, Sprungkraft: 30, Stärke: 60, Reaktionszeit: 45, Wendigkeit: 40 }},
{ name: "Waldpony", stats: { Geschwindigkeit: 55, Gewicht: 65, Gefährlichkeit: 20, Intelligenz: 45, Ausdauer: 80, Sprungkraft: 45, Stärke: 60, Reaktionszeit: 55, Wendigkeit: 50 }},
{ name: "Mini-Pferd", stats: { Geschwindigkeit: 45, Gewicht: 40, Gefährlichkeit: 10, Intelligenz: 40, Ausdauer: 60, Sprungkraft: 40, Stärke: 35, Reaktionszeit: 50, Wendigkeit: 55 }},
{ name: "Waldesel", stats: { Geschwindigkeit: 40, Gewicht: 55, Gefährlichkeit: 10, Intelligenz: 45, Ausdauer: 75, Sprungkraft: 30, Stärke: 50, Reaktionszeit: 40, Wendigkeit: 35 }},

{ name: "Schwarzer Fuchs", stats: { Geschwindigkeit: 60, Gewicht: 15, Gefährlichkeit: 45, Intelligenz: 60, Ausdauer: 70, Sprungkraft: 40, Stärke: 30, Reaktionszeit: 70, Wendigkeit: 75 }},
{ name: "Arktischer Hase", stats: { Geschwindigkeit: 55, Gewicht: 6, Gefährlichkeit: 5, Intelligenz: 35, Ausdauer: 50, Sprungkraft: 70, Stärke: 15, Reaktionszeit: 60, Wendigkeit: 75 }},
{ name: "Schneemarder", stats: { Geschwindigkeit: 50, Gewicht: 5, Gefährlichkeit: 35, Intelligenz: 55, Ausdauer: 60, Sprungkraft: 40, Stärke: 20, Reaktionszeit: 70, Wendigkeit: 80 }},
{ name: "Waldmarder", stats: { Geschwindigkeit: 48, Gewicht: 6, Gefährlichkeit: 30, Intelligenz: 55, Ausdauer: 60, Sprungkraft: 35, Stärke: 20, Reaktionszeit: 65, Wendigkeit: 75 }},
{ name: "Baumstachler", stats: { Geschwindigkeit: 25, Gewicht: 12, Gefährlichkeit: 40, Intelligenz: 40, Ausdauer: 50, Sprungkraft: 20, Stärke: 30, Reaktionszeit: 45, Wendigkeit: 35 }},
{ name: "Kängururatte", stats: { Geschwindigkeit: 35, Gewicht: 2, Gefährlichkeit: 2, Intelligenz: 30, Ausdauer: 40, Sprungkraft: 50, Stärke: 5, Reaktionszeit: 45, Wendigkeit: 60 }},
{ name: "Waldmaus", stats: { Geschwindigkeit: 25, Gewicht: 1, Gefährlichkeit: 1, Intelligenz: 20, Ausdauer: 25, Sprungkraft: 15, Stärke: 2, Reaktionszeit: 40, Wendigkeit: 60 }},
{ name: "Streifenhörnchen", stats: { Geschwindigkeit: 35, Gewicht: 3, Gefährlichkeit: 5, Intelligenz: 40, Ausdauer: 45, Sprungkraft: 40, Stärke: 10, Reaktionszeit: 55, Wendigkeit: 70 }},
{ name: "Eichhörnchen", stats: { Geschwindigkeit: 40, Gewicht: 4, Gefährlichkeit: 5, Intelligenz: 45, Ausdauer: 50, Sprungkraft: 50, Stärke: 10, Reaktionszeit: 60, Wendigkeit: 80 }},
{ name: "Flughörnchen", stats: { Geschwindigkeit: 35, Gewicht: 4, Gefährlichkeit: 5, Intelligenz: 45, Ausdauer: 50, Sprungkraft: 0, Stärke: 10, Reaktionszeit: 60, Wendigkeit: 85 }},

{ name: "Schwarzer Adler", stats: { Geschwindigkeit: 70, Gewicht: 8, Gefährlichkeit: 60, Intelligenz: 55, Ausdauer: 65, Sprungkraft: 0, Stärke: 40, Reaktionszeit: 85, Wendigkeit: 80 }},
{ name: "Falke Wüste", stats: { Geschwindigkeit: 100, Gewicht: 10, Gefährlichkeit: 45, Intelligenz: 45, Ausdauer: 50, Sprungkraft: 0, Stärke: 20, Reaktionszeit: 100, Wendigkeit: 95 }},
{ name: "Waldkauz", stats: { Geschwindigkeit: 40, Gewicht: 6, Gefährlichkeit: 25, Intelligenz: 50, Ausdauer: 55, Sprungkraft: 0, Stärke: 25, Reaktionszeit: 85, Wendigkeit: 80 }},
{ name: "Schwan", stats: { Geschwindigkeit: 45, Gewicht: 12, Gefährlichkeit: 20, Intelligenz: 45, Ausdauer: 60, Sprungkraft: 0, Stärke: 25, Reaktionszeit: 55, Wendigkeit: 60 }},
{ name: "Kormoran", stats: { Geschwindigkeit: 50, Gewicht: 8, Gefährlichkeit: 20, Intelligenz: 45, Ausdauer: 55, Sprungkraft: 0, Stärke: 20, Reaktionszeit: 60, Wendigkeit: 65 }},
{ name: "Möwe", stats: { Geschwindigkeit: 40, Gewicht: 6, Gefährlichkeit: 10, Intelligenz: 40, Ausdauer: 50, Sprungkraft: 0, Stärke: 15, Reaktionszeit: 55, Wendigkeit: 60 }},
{ name: "Storch", stats: { Geschwindigkeit: 50, Gewicht: 7, Gefährlichkeit: 15, Intelligenz: 45, Ausdauer: 60, Sprungkraft: 0, Stärke: 20, Reaktionszeit: 55, Wendigkeit: 60 }},
{ name: "Reiher", stats: { Geschwindigkeit: 45, Gewicht: 8, Gefährlichkeit: 20, Intelligenz: 45, Ausdauer: 55, Sprungkraft: 0, Stärke: 20, Reaktionszeit: 55, Wendigkeit: 60 }},
{ name: "Kakadu", stats: { Geschwindigkeit: 40, Gewicht: 5, Gefährlichkeit: 5, Intelligenz: 60, Ausdauer: 50, Sprungkraft: 0, Stärke: 10, Reaktionszeit: 70, Wendigkeit: 85 }},
{ name: "Ara", stats: { Geschwindigkeit: 45, Gewicht: 6, Gefährlichkeit: 10, Intelligenz: 65, Ausdauer: 55, Sprungkraft: 0, Stärke: 15, Reaktionszeit: 75, Wendigkeit: 80 }},

{ name: "Karpfen", stats: { Geschwindigkeit: 30, Gewicht: 8, Gefährlichkeit: 5, Intelligenz: 30, Ausdauer: 50, Sprungkraft: 0, Stärke: 15, Reaktionszeit: 35, Wendigkeit: 40 }},
{ name: "Barsch", stats: { Geschwindigkeit: 35, Gewicht: 4, Gefährlichkeit: 10, Intelligenz: 30, Ausdauer: 45, Sprungkraft: 0, Stärke: 10, Reaktionszeit: 40, Wendigkeit: 50 }},
{ name: "Makrele", stats: { Geschwindigkeit: 45, Gewicht: 5, Gefährlichkeit: 15, Intelligenz: 35, Ausdauer: 60, Sprungkraft: 0, Stärke: 15, Reaktionszeit: 45, Wendigkeit: 55 }},
{ name: "Thunfisch", stats: { Geschwindigkeit: 60, Gewicht: 80, Gefährlichkeit: 40, Intelligenz: 40, Ausdauer: 80, Sprungkraft: 0, Stärke: 70, Reaktionszeit: 55, Wendigkeit: 50 }},
{ name: "Schwertfisch", stats: { Geschwindigkeit: 70, Gewicht: 90, Gefährlichkeit: 60, Intelligenz: 40, Ausdauer: 85, Sprungkraft: 0, Stärke: 80, Reaktionszeit: 60, Wendigkeit: 55 }},
{ name: "Rochen", stats: { Geschwindigkeit: 40, Gewicht: 50, Gefährlichkeit: 50, Intelligenz: 35, Ausdauer: 60, Sprungkraft: 0, Stärke: 40, Reaktionszeit: 45, Wendigkeit: 40 }},
{ name: "Hammerhai", stats: { Geschwindigkeit: 55, Gewicht: 90, Gefährlichkeit: 90, Intelligenz: 40, Ausdauer: 80, Sprungkraft: 0, Stärke: 85, Reaktionszeit: 55, Wendigkeit: 40 }},
{ name: "Seelachs", stats: { Geschwindigkeit: 40, Gewicht: 6, Gefährlichkeit: 10, Intelligenz: 30, Ausdauer: 50, Sprungkraft: 0, Stärke: 10, Reaktionszeit: 40, Wendigkeit: 50 }},
{ name: "Hering", stats: { Geschwindigkeit: 35, Gewicht: 2, Gefährlichkeit: 2, Intelligenz: 20, Ausdauer: 40, Sprungkraft: 0, Stärke: 5, Reaktionszeit: 35, Wendigkeit: 45 }},
{ name: "Krabbe", stats: { Geschwindigkeit: 20, Gewicht: 3, Gefährlichkeit: 10, Intelligenz: 20, Ausdauer: 30, Sprungkraft: 0, Stärke: 10, Reaktionszeit: 25, Wendigkeit: 30 }},
{ name: "Salzwasserkrokodil", stats: { Geschwindigkeit: 50, Gewicht: 100, Gefährlichkeit: 90, Intelligenz: 40, Ausdauer: 80, Sprungkraft: 20, Stärke: 100, Reaktionszeit: 60, Wendigkeit: 30 }},
{ name: "Anakonda", stats: { Geschwindigkeit: 25, Gewicht: 80, Gefährlichkeit: 95, Intelligenz: 35, Ausdauer: 85, Sprungkraft: 0, Stärke: 85, Reaktionszeit: 50, Wendigkeit: 40 }},

];

/* -------------------- Gegner-Teams & Länder -------------------- */

const footballOpponents = {

  bayern: {
type: "fussball",
    name: "FC Bayern",
    players: {
      Tor: { name: "Manuel Neuer", value: 86 },
      Abwehr: { name: "Kim Min-jae", value: 83 },
      Mittelfeld: { name: "Joshua Kimmich", value: 91 },
      Angriff: { name: "Harry Kane", value: 96 },
      Trainer: { name: "Vincent Kompany", value: 83 },
      Standartschütze: { name: "Michael Olise", value: 92 },
      Publikumsliebling: { name: "Joshua Kimmich", value: 86 },
      Spielmacher: { name: "Jamal Musiala", value: 91 },
      Kapitän: { name: "Manuel Neuer", value: 92 }
    }
  },

  real: {
type: "fussball",
    name: "Real Madrid",
    players: {
      Tor: { name: "Thibaut Courtois", value: 88 },
      Abwehr: { name: "Antonio Rüdiger", value: 86 },
      Mittelfeld: { name: "Federico Valverde", value: 92 },
      Angriff: { name: "Kylian Mbappé", value: 96 },
      Trainer: { name: "José Mourinho", value: 96 },
      Standartschütze: { name: "Jude Bellingham", value: 93 },
      Publikumsliebling: { name: "Jude Bellingham", value: 90 },
      Spielmacher: { name: "Jude Bellingham", value: 94 },
      Kapitän: { name: "Federico Valverde", value: 81 }
    }
  },

  barcelona: {
type: "fussball",
    name: "FC Barcelona",
    players: {
      Tor: { name: "Joan Garcia", value: 85 },
      Abwehr: { name: "Ronald Araújo", value: 91 },
      Mittelfeld: { name: "Pedri", value: 93 },
      Angriff: { name: "Lamine Yamal", value: 94 },
      Trainer: { name: "Hansi Flick", value: 89 },
      Standartschütze: { name: "Ferran Torres", value: 86 },
      Publikumsliebling: { name: "Gavi", value: 94 },
      Spielmacher: { name: "Pedri", value: 96 },
      Kapitän: { name: "Ronald Araújo", value: 82 }
    }
  },

  city: {
type: "fussball",
    name: "Manchester City",
    players: {
      Tor: { name: "Gianluigi Donnarumma", value: 90 },
      Abwehr: { name: "Rúben Dias", value: 91 },
      Mittelfeld: { name: "Rodri", value: 93 },
      Angriff: { name: "Erling Haaland", value: 97 },
      Trainer: { name: "Pep Guardiola", value: 98 },
      Standartschütze: { name: "Phil Foden", value: 91 },
      Publikumsliebling: { name: "Erling Haaland", value: 90 },
      Spielmacher: { name: "Phil Foden", value: 87 },
      Kapitän: { name: "Bernardo Silva", value: 86 }
     }
  },

  deutschland: {
type: "fussball",
    name: "Deutsche Nationalmannschaft",
    players: {
      Tor: { name: "Manuel Neuer", value: 86 },
      Abwehr: { name: "Nico Schlotterbeck", value: 89 },
      Mittelfeld: { name: "Joshua Kimmich", value: 91 },
      Angriff: { name: "Kai Havertz", value: 88 },
      Trainer: { name: "Julian Nagelsmann", value: 89 },
      Standartschütze: { name: "Florian Wirtz", value: 90 },
      Publikumsliebling: { name: "Joshua Kimmich", value: 86 },
      Spielmacher: { name: "Jamal Musiala", value: 91 },
      Kapitän: { name: "Joshua Kimmich", value: 91 }
    }
  },

liverpool: {
type: "fussball",
  name: "Liverpool FC",
  players: {
    Tor: { name: "Alisson Becker", value: 93 },
    Abwehr: { name: "Virgil van Dijk", value: 94 },
    Mittelfeld: { name: "Dominik Szoboszlai", value: 90 },
    Angriff: { name: "Mohamed Salah", value: 95 },
    Trainer: { name: "Pepijn Lijnders", value: 83 },
    Standartschütze: { name: "Mohamed Salah", value: 92 },
    Publikumsliebling: { name: "Darwin Núñez", value: 90 },
    Spielmacher: { name: "Szoboszlai", value: 91 },
    Kapitän: { name: "Virgil van Dijk", value: 93 }
  }
},
psg: {
type: "fussball",
  name: "Paris Saint-Germain",
  players: {
    Tor: { name: "Matwei Safonow", value: 80 },
    Abwehr: { name: "Marquinhos", value: 90 },
    Mittelfeld: { name: "Vitinha", value: 89 },
    Angriff: { name: "Ousmane Dembélé", value: 91 },
    Trainer: { name: "Luis Enrique", value: 91 },
    Standartschütze: { name: "Achraf Hakimi", value: 86 },
    Publikumsliebling: { name: "Warren Zaïre-Emery", value: 94 },
    Spielmacher: { name: "Vitinha", value: 91 },
    Kapitän: { name: "Marquinhos", value: 90 }
  }
},

  /* --- NEUE TEAMS (5 Stück) --- */
  arsenal: {
type: "fussball",
    name: "Arsenal FC",
    players: {
      Tor: { name: "David Raya", value: 88 },
      Abwehr: { name: "William Saliba", value: 93 },
      Mittelfeld: { name: "Martin Ødegaard", value: 96 },
      Angriff: { name: "Bukayo Saka", value: 95 },
      Trainer: { name: "Mikel Arteta", value: 94 },
      Standartschütze: { name: "Bukayo Saka", value: 90 },
      Publikumsliebling: { name: "Gabriel Martinelli", value: 92 },
      Spielmacher: { name: "Martin Ødegaard", value: 97 },
      Kapitän: { name: "Martin Ødegaard", value: 94 }
    }
  },

  inter: {
type: "fussball",
    name: "Inter Mailand",
    players: {
      Tor: { name: "Yann Sommer", value: 89 },
      Abwehr: { name: "Alessandro Bastoni", value: 92 },
      Mittelfeld: { name: "Nicolò Barella", value: 95 },
      Angriff: { name: "Lautaro Martínez", value: 96 },
      Trainer: { name: "Simone Inzaghi", value: 90 },
      Standartschütze: { name: "Hakan Çalhanoğlu", value: 92 },
      Publikumsliebling: { name: "Lautaro Martínez", value: 95 },
      Spielmacher: { name: "Hakan Çalhanoğlu", value: 94 },
      Kapitän: { name: "Lautaro Martínez", value: 94 }
    }
  },

  atletico: {
type: "fussball",
    name: "Atlético Madrid",
    players: {
      Tor: { name: "Jan Oblak", value: 92 },
      Abwehr: { name: "José Giménez", value: 88 },
      Mittelfeld: { name: "Rodrigo De Paul", value: 89 },
      Angriff: { name: "Antoine Griezmann", value: 95 },
      Trainer: { name: "Diego Simeone", value: 96 },
      Standartschütze: { name: "Antoine Griezmann", value: 90 },
      Publikumsliebling: { name: "Álvaro Morata", value: 88 },
      Spielmacher: { name: "Griezmann", value: 96 },
      Kapitän: { name: "Koke", value: 87 }
    }
  },

  /* --- NATIONALMANNSCHAFTEN (NICHT Deutschland) --- */

  frankreich: {
type: "fussball",
    name: "Frankreich",
    players: {
      Tor: { name: "Mike Maignan", value: 92 },
      Abwehr: { name: "William Saliba", value: 94 },
      Mittelfeld: { name: "Aurélien Tchouaméni", value: 90 },
      Angriff: { name: "Kylian Mbappé", value: 99 },
      Trainer: { name: "Didier Deschamps", value: 95 },
      Standartschütze: { name: "Antoine Griezmann", value: 92 },
      Publikumsliebling: { name: "Kylian Mbappé", value: 98 },
      Spielmacher: { name: "Griezmann", value: 95 },
      Kapitän: { name: "Kylian Mbappé", value: 97 }
    }
  },

  brasilien: {
type: "fussball",
    name: "Brasilien",
    players: {
      Tor: { name: "Alisson Becker", value: 93 },
      Abwehr: { name: "Éder Militão", value: 90 },
      Mittelfeld: { name: "Bruno Guimarães", value: 89 },
      Angriff: { name: "Rodrygo", value: 94 },
      Trainer: { name: "Dorival Júnior", value: 85 },
      Standartschütze: { name: "Neymar Jr.", value: 94 },
      Publikumsliebling: { name: "Vinícius Jr.", value: 97 },
      Spielmacher: { name: "Neymar Jr.", value: 96 },
      Kapitän: { name: "Casemiro", value: 90 }
    }
  },

  argentinien: {
type: "fussball",
    name: "Argentinien",
    players: {
      Tor: { name: "Emiliano Martínez", value: 92 },
      Abwehr: { name: "Cristian Romero", value: 92 },
      Mittelfeld: { name: "Enzo Fernández", value: 90 },
      Angriff: { name: "Lionel Messi", value: 98 },
      Trainer: { name: "Lionel Scaloni", value: 94 },
      Standartschütze: { name: "Lionel Messi", value: 99 },
      Publikumsliebling: { name: "Lionel Messi", value: 100 },
      Spielmacher: { name: "Lionel Messi", value: 99 },
      Kapitän: { name: "Lionel Messi", value: 99 }
    }
  },

};
const berufePlayers = [
{ name: "Polizist", stats: { Gehalt: 55, Stresslevel: 85, Verantwortung: 80, Risiko: 90, Ausbildungslänge: 60, "Körperliche Belastung": 75, "Psychische Belastung": 85, Arbeitszeiten: 70, Gefahrenlevel: 90 }},
{ name: "Arzt", stats: { Gehalt: 90, Stresslevel: 95, Verantwortung: 100, Risiko: 70, Ausbildungslänge: 95, "Körperliche Belastung": 60, "Psychische Belastung": 95, Arbeitszeiten: 80, Gefahrenlevel: 70 }},
{ name: "Lehrer", stats: { Gehalt: 60, Stresslevel: 70, Verantwortung: 75, Risiko: 20, Ausbildungslänge: 70, "Körperliche Belastung": 40, "Psychische Belastung": 65, Arbeitszeiten: 75, Gefahrenlevel: 20 }},
{ name: "Pilot", stats: { Gehalt: 85, Stresslevel: 90, Verantwortung: 95, Risiko: 95, Ausbildungslänge: 90, "Körperliche Belastung": 50, "Psychische Belastung": 85, Arbeitszeiten: 70, Gefahrenlevel: 95 }},
{ name: "Feuerwehrmann", stats: { Gehalt: 50, Stresslevel: 85, Verantwortung: 80, Risiko: 100, Ausbildungslänge: 55, "Körperliche Belastung": 95, "Psychische Belastung": 80, Arbeitszeiten: 65, Gefahrenlevel: 100 }},
{ name: "Programmierer", stats: { Gehalt: 75, Stresslevel: 60, Verantwortung: 65, Risiko: 10, Ausbildungslänge: 70, "Körperliche Belastung": 20, "Psychische Belastung": 70, Arbeitszeiten: 60, Gefahrenlevel: 10 }},
{ name: "Koch", stats: { Gehalt: 45, Stresslevel: 75, Verantwortung: 55, Risiko: 30, Ausbildungslänge: 50, "Körperliche Belastung": 80, "Psychische Belastung": 70, Arbeitszeiten: 85, Gefahrenlevel: 30 }},
{ name: "Soldat", stats: { Gehalt: 55, Stresslevel: 90, Verantwortung: 85, Risiko: 100, Ausbildungslänge: 65, "Körperliche Belastung": 90, "Psychische Belastung": 85, Arbeitszeiten: 70, Gefahrenlevel: 100 }},
{ name: "Krankenpfleger", stats: { Gehalt: 50, Stresslevel: 90, Verantwortung: 80, Risiko: 40, Ausbildungslänge: 60, "Körperliche Belastung": 85, "Psychische Belastung": 90, Arbeitszeiten: 80, Gefahrenlevel: 40 }},

{ name: "Zahnarzt", stats: { Gehalt: 85, Stresslevel: 70, Verantwortung: 90, Risiko: 40, Ausbildungslänge: 90, "Körperliche Belastung": 40, "Psychische Belastung": 75, Arbeitszeiten: 70, Gefahrenlevel: 30 }},
{ name: "Apotheker", stats: { Gehalt: 80, Stresslevel: 60, Verantwortung: 85, Risiko: 20, Ausbildungslänge: 85, "Körperliche Belastung": 20, "Psychische Belastung": 60, Arbeitszeiten: 65, Gefahrenlevel: 15 }},
{ name: "Physiotherapeut", stats: { Gehalt: 55, Stresslevel: 65, Verantwortung: 70, Risiko: 20, Ausbildungslänge: 60, "Körperliche Belastung": 70, "Psychische Belastung": 65, Arbeitszeiten: 70, Gefahrenlevel: 20 }},
{ name: "Psychologe", stats: { Gehalt: 65, Stresslevel: 80, Verantwortung: 85, Risiko: 10, Ausbildungslänge: 80, "Körperliche Belastung": 20, "Psychische Belastung": 95, Arbeitszeiten: 70, Gefahrenlevel: 10 }},
{ name: "Kriminalkommissar", stats: { Gehalt: 70, Stresslevel: 85, Verantwortung: 85, Risiko: 85, Ausbildungslänge: 70, "Körperliche Belastung": 60, "Psychische Belastung": 85, Arbeitszeiten: 75, Gefahrenlevel: 85 }},
{ name: "Richter", stats: { Gehalt: 90, Stresslevel: 75, Verantwortung: 100, Risiko: 10, Ausbildungslänge: 95, "Körperliche Belastung": 10, "Psychische Belastung": 85, Arbeitszeiten: 70, Gefahrenlevel: 5 }},
{ name: "Anwalt", stats: { Gehalt: 85, Stresslevel: 80, Verantwortung: 90, Risiko: 10, Ausbildungslänge: 90, "Körperliche Belastung": 10, "Psychische Belastung": 80, Arbeitszeiten: 85, Gefahrenlevel: 5 }},
{ name: "Architekt", stats: { Gehalt: 75, Stresslevel: 70, Verantwortung: 80, Risiko: 15, Ausbildungslänge: 75, "Körperliche Belastung": 20, "Psychische Belastung": 70, Arbeitszeiten: 70, Gefahrenlevel: 10 }},
{ name: "Bauarbeiter", stats: { Gehalt: 45, Stresslevel: 65, Verantwortung: 50, Risiko: 70, Ausbildungslänge: 40, "Körperliche Belastung": 95, "Psychische Belastung": 60, Arbeitszeiten: 75, Gefahrenlevel: 70 }},
{ name: "Elektriker", stats: { Gehalt: 55, Stresslevel: 60, Verantwortung: 65, Risiko: 60, Ausbildungslänge: 50, "Körperliche Belastung": 70, "Psychische Belastung": 55, Arbeitszeiten: 70, Gefahrenlevel: 60 }},

{ name: "Mechaniker", stats: { Gehalt: 50, Stresslevel: 60, Verantwortung: 55, Risiko: 50, Ausbildungslänge: 45, "Körperliche Belastung": 80, "Psychische Belastung": 55, Arbeitszeiten: 70, Gefahrenlevel: 50 }},
{ name: "Kfz-Mechatroniker", stats: { Gehalt: 55, Stresslevel: 65, Verantwortung: 60, Risiko: 55, Ausbildungslänge: 50, "Körperliche Belastung": 75, "Psychische Belastung": 60, Arbeitszeiten: 70, Gefahrenlevel: 55 }},
{ name: "Lkw-Fahrer", stats: { Gehalt: 50, Stresslevel: 70, Verantwortung: 70, Risiko: 60, Ausbildungslänge: 40, "Körperliche Belastung": 70, "Psychische Belastung": 60, Arbeitszeiten: 85, Gefahrenlevel: 60 }},
{ name: "Busfahrer", stats: { Gehalt: 45, Stresslevel: 65, Verantwortung: 65, Risiko: 40, Ausbildungslänge: 40, "Körperliche Belastung": 60, "Psychische Belastung": 55, Arbeitszeiten: 80, Gefahrenlevel: 40 }},
{ name: "Taxifahrer", stats: { Gehalt: 40, Stresslevel: 60, Verantwortung: 50, Risiko: 35, Ausbildungslänge: 20, "Körperliche Belastung": 40, "Psychische Belastung": 50, Arbeitszeiten: 85, Gefahrenlevel: 35 }},
{ name: "Lokführer", stats: { Gehalt: 60, Stresslevel: 65, Verantwortung: 80, Risiko: 30, Ausbildungslänge: 60, "Körperliche Belastung": 40, "Psychische Belastung": 60, Arbeitszeiten: 70, Gefahrenlevel: 30 }},
{ name: "Pilot-Assistent", stats: { Gehalt: 55, Stresslevel: 70, Verantwortung: 70, Risiko: 50, Ausbildungslänge: 70, "Körperliche Belastung": 40, "Psychische Belastung": 65, Arbeitszeiten: 75, Gefahrenlevel: 50 }},
{ name: "Flugbegleiter", stats: { Gehalt: 50, Stresslevel: 70, Verantwortung: 60, Risiko: 40, Ausbildungslänge: 40, "Körperliche Belastung": 60, "Psychische Belastung": 70, Arbeitszeiten: 85, Gefahrenlevel: 40 }},
{ name: "Seemann", stats: { Gehalt: 55, Stresslevel: 75, Verantwortung: 60, Risiko: 70, Ausbildungslänge: 40, "Körperliche Belastung": 80, "Psychische Belastung": 70, Arbeitszeiten: 90, Gefahrenlevel: 70 }},

{ name: "Landwirt", stats: { Gehalt: 45, Stresslevel: 70, Verantwortung: 60, Risiko: 50, Ausbildungslänge: 40, "Körperliche Belastung": 90, "Psychische Belastung": 60, Arbeitszeiten: 90, Gefahrenlevel: 50 }},
{ name: "Gärtner", stats: { Gehalt: 40, Stresslevel: 55, Verantwortung: 45, Risiko: 20, Ausbildungslänge: 30, "Körperliche Belastung": 70, "Psychische Belastung": 50, Arbeitszeiten: 70, Gefahrenlevel: 20 }},
{ name: "Tierpfleger", stats: { Gehalt: 45, Stresslevel: 60, Verantwortung: 55, Risiko: 30, Ausbildungslänge: 40, "Körperliche Belastung": 75, "Psychische Belastung": 60, Arbeitszeiten: 70, Gefahrenlevel: 30 }},
{ name: "Forstwirt", stats: { Gehalt: 50, Stresslevel: 65, Verantwortung: 60, Risiko: 60, Ausbildungslänge: 40, "Körperliche Belastung": 85, "Psychische Belastung": 60, Arbeitszeiten: 75, Gefahrenlevel: 60 }},
{ name: "Jäger", stats: { Gehalt: 55, Stresslevel: 60, Verantwortung: 55, Risiko: 70, Ausbildungslänge: 40, "Körperliche Belastung": 80, "Psychische Belastung": 55, Arbeitszeiten: 70, Gefahrenlevel: 70 }},
{ name: "Biologe", stats: { Gehalt: 65, Stresslevel: 55, Verantwortung: 70, Risiko: 10, Ausbildungslänge: 80, "Körperliche Belastung": 30, "Psychische Belastung": 60, Arbeitszeiten: 65, Gefahrenlevel: 10 }},
{ name: "Chemiker", stats: { Gehalt: 70, Stresslevel: 60, Verantwortung: 75, Risiko: 20, Ausbildungslänge: 85, "Körperliche Belastung": 30, "Psychische Belastung": 65, Arbeitszeiten: 65, Gefahrenlevel: 20 }},
{ name: "Physiker", stats: { Gehalt: 75, Stresslevel: 55, Verantwortung: 80, Risiko: 10, Ausbildungslänge: 90, "Körperliche Belastung": 20, "Psychische Belastung": 70, Arbeitszeiten: 60, Gefahrenlevel: 10 }},
{ name: "Astronom", stats: { Gehalt: 70, Stresslevel: 50, Verantwortung: 75, Risiko: 5, Ausbildungslänge: 90, "Körperliche Belastung": 10, "Psychische Belastung": 60, Arbeitszeiten: 60, Gefahrenlevel: 5 }},
{ name: "Laborant", stats: { Gehalt: 50, Stresslevel: 55, Verantwortung: 55, Risiko: 20, Ausbildungslänge: 50, "Körperliche Belastung": 30, "Psychische Belastung": 55, Arbeitszeiten: 65, Gefahrenlevel: 20 }},

{ name: "Bäcker", stats: { Gehalt: 40, Stresslevel: 60, Verantwortung: 50, Risiko: 20, Ausbildungslänge: 40, "Körperliche Belastung": 80, "Psychische Belastung": 55, Arbeitszeiten: 85, Gefahrenlevel: 20 }},
{ name: "Metzger", stats: { Gehalt: 45, Stresslevel: 60, Verantwortung: 55, Risiko: 40, Ausbildungslänge: 40, "Körperliche Belastung": 85, "Psychische Belastung": 60, Arbeitszeiten: 75, Gefahrenlevel: 40 }},
{ name: "Kellner", stats: { Gehalt: 35, Stresslevel: 70, Verantwortung: 40, Risiko: 10, Ausbildungslänge: 20, "Körperliche Belastung": 70, "Psychische Belastung": 60, Arbeitszeiten: 90, Gefahrenlevel: 10 }},
{ name: "Hotelmanager", stats: { Gehalt: 70, Stresslevel: 75, Verantwortung: 80, Risiko: 20, Ausbildungslänge: 70, "Körperliche Belastung": 30, "Psychische Belastung": 70, Arbeitszeiten: 85, Gefahrenlevel: 20 }},
{ name: "Rezeptionist", stats: { Gehalt: 35, Stresslevel: 55, Verantwortung: 40, Risiko: 10, Ausbildungslänge: 20, "Körperliche Belastung": 30, "Psychische Belastung": 50, Arbeitszeiten: 80, Gefahrenlevel: 10 }},
{ name: "Eventmanager", stats: { Gehalt: 60, Stresslevel: 80, Verantwortung: 70, Risiko: 15, Ausbildungslänge: 60, "Körperliche Belastung": 40, "Psychische Belastung": 75, Arbeitszeiten: 90, Gefahrenlevel: 15 }},
{ name: "Barista", stats: { Gehalt: 30, Stresslevel: 55, Verantwortung: 35, Risiko: 10, Ausbildungslänge: 20, "Körperliche Belastung": 50, "Psychische Belastung": 45, Arbeitszeiten: 75, Gefahrenlevel: 10 }},
{ name: "Barkeeper", stats: { Gehalt: 35, Stresslevel: 70, Verantwortung: 40, Risiko: 20, Ausbildungslänge: 20, "Körperliche Belastung": 60, "Psychische Belastung": 60, Arbeitszeiten: 95, Gefahrenlevel: 20 }},
{ name: "Sommelier", stats: { Gehalt: 55, Stresslevel: 50, Verantwortung: 60, Risiko: 10, Ausbildungslänge: 60, "Körperliche Belastung": 20, "Psychische Belastung": 55, Arbeitszeiten: 70, Gefahrenlevel: 10 }},
{ name: "Reiseleiter", stats: { Gehalt: 40, Stresslevel: 60, Verantwortung: 50, Risiko: 20, Ausbildungslänge: 30, "Körperliche Belastung": 60, "Psychische Belastung": 55, Arbeitszeiten: 85, Gefahrenlevel: 20 }},

{ name: "Journalist", stats: { Gehalt: 55, Stresslevel: 80, Verantwortung: 70, Risiko: 20, Ausbildungslänge: 70, "Körperliche Belastung": 30, "Psychische Belastung": 75, Arbeitszeiten: 85, Gefahrenlevel: 20 }},
{ name: "Fotograf", stats: { Gehalt: 45, Stresslevel: 55, Verantwortung: 50, Risiko: 15, Ausbildungslänge: 40, "Körperliche Belastung": 60, "Psychische Belastung": 55, Arbeitszeiten: 75, Gefahrenlevel: 15 }},
{ name: "Designer", stats: { Gehalt: 60, Stresslevel: 65, Verantwortung: 60, Risiko: 10, Ausbildungslänge: 60, "Körperliche Belastung": 20, "Psychische Belastung": 70, Arbeitszeiten: 70, Gefahrenlevel: 10 }},
{ name: "Musiker", stats: { Gehalt: 50, Stresslevel: 70, Verantwortung: 50, Risiko: 20, Ausbildungslänge: 40, "Körperliche Belastung": 40, "Psychische Belastung": 75, Arbeitszeiten: 90, Gefahrenlevel: 20 }},
{ name: "Schauspieler", stats: { Gehalt: 70, Stresslevel: 75, Verantwortung: 60, Risiko: 20, Ausbildungslänge: 40, "Körperliche Belastung": 40, "Psychische Belastung": 80, Arbeitszeiten: 90, Gefahrenlevel: 20 }},
{ name: "Regisseur", stats: { Gehalt: 80, Stresslevel: 85, Verantwortung: 90, Risiko: 10, Ausbildungslänge: 70, "Körperliche Belastung": 20, "Psychische Belastung": 85, Arbeitszeiten: 85, Gefahrenlevel: 10 }},
{ name: "Influencer", stats: { Gehalt: 60, Stresslevel: 75, Verantwortung: 40, Risiko: 20, Ausbildungslänge: 10, "Körperliche Belastung": 30, "Psychische Belastung": 80, Arbeitszeiten: 90, Gefahrenlevel: 15 }},
{ name: "YouTuber", stats: { Gehalt: 55, Stresslevel: 70, Verantwortung: 40, Risiko: 15, Ausbildungslänge: 10, "Körperliche Belastung": 25, "Psychische Belastung": 75, Arbeitszeiten: 85, Gefahrenlevel: 10 }},
{ name: "Streamer", stats: { Gehalt: 50, Stresslevel: 80, Verantwortung: 35, Risiko: 10, Ausbildungslänge: 10, "Körperliche Belastung": 20, "Psychische Belastung": 85, Arbeitszeiten: 95, Gefahrenlevel: 10 }},
{ name: "Game-Designer", stats: { Gehalt: 65, Stresslevel: 70, Verantwortung: 60, Risiko: 10, Ausbildungslänge: 60, "Körperliche Belastung": 20, "Psychische Belastung": 70, Arbeitszeiten: 75, Gefahrenlevel: 10 }},
{ name: "Softwareentwickler", stats: { Gehalt: 80, Stresslevel: 65, Verantwortung: 70, Risiko: 10, Ausbildungslänge: 70, "Körperliche Belastung": 20, "Psychische Belastung": 70, Arbeitszeiten: 70, Gefahrenlevel: 10 }},
{ name: "IT-Sicherheitsexperte", stats: { Gehalt: 85, Stresslevel: 75, Verantwortung: 85, Risiko: 20, Ausbildungslänge: 80, "Körperliche Belastung": 20, "Psychische Belastung": 80, Arbeitszeiten: 70, Gefahrenlevel: 20 }},
{ name: "Datenanalyst", stats: { Gehalt: 70, Stresslevel: 60, Verantwortung: 65, Risiko: 10, Ausbildungslänge: 70, "Körperliche Belastung": 10, "Psychische Belastung": 65, Arbeitszeiten: 65, Gefahrenlevel: 10 }},
{ name: "Systemadministrator", stats: { Gehalt: 65, Stresslevel: 70, Verantwortung: 60, Risiko: 15, Ausbildungslänge: 60, "Körperliche Belastung": 20, "Psychische Belastung": 70, Arbeitszeiten: 70, Gefahrenlevel: 15 }},
{ name: "Webentwickler", stats: { Gehalt: 70, Stresslevel: 60, Verantwortung: 55, Risiko: 10, Ausbildungslänge: 60, "Körperliche Belastung": 15, "Psychische Belastung": 65, Arbeitszeiten: 65, Gefahrenlevel: 10 }},
{ name: "KI-Forscher", stats: { Gehalt: 90, Stresslevel: 70, Verantwortung: 85, Risiko: 10, Ausbildungslänge: 95, "Körperliche Belastung": 10, "Psychische Belastung": 75, Arbeitszeiten: 70, Gefahrenlevel: 10 }},

{ name: "Bankkaufmann", stats: { Gehalt: 65, Stresslevel: 60, Verantwortung: 70, Risiko: 10, Ausbildungslänge: 60, "Körperliche Belastung": 10, "Psychische Belastung": 60, Arbeitszeiten: 65, Gefahrenlevel: 10 }},
{ name: "Investmentbanker", stats: { Gehalt: 95, Stresslevel: 95, Verantwortung: 90, Risiko: 20, Ausbildungslänge: 80, "Körperliche Belastung": 10, "Psychische Belastung": 95, Arbeitszeiten: 100, Gefahrenlevel: 20 }},
{ name: "Buchhalter", stats: { Gehalt: 55, Stresslevel: 55, Verantwortung: 60, Risiko: 10, Ausbildungslänge: 50, "Körperliche Belastung": 10, "Psychische Belastung": 55, Arbeitszeiten: 60, Gefahrenlevel: 10 }},
{ name: "Steuerberater", stats: { Gehalt: 75, Stresslevel: 70, Verantwortung: 80, Risiko: 10, Ausbildungslänge: 80, "Körperliche Belastung": 10, "Psychische Belastung": 70, Arbeitszeiten: 70, Gefahrenlevel: 10 }},
{ name: "Wirtschaftsprüfer", stats: { Gehalt: 85, Stresslevel: 80, Verantwortung: 90, Risiko: 15, Ausbildungslänge: 85, "Körperliche Belastung": 10, "Psychische Belastung": 80, Arbeitszeiten: 80, Gefahrenlevel: 15 }},
{ name: "Versicherungskaufmann", stats: { Gehalt: 55, Stresslevel: 55, Verantwortung: 50, Risiko: 10, Ausbildungslänge: 50, "Körperliche Belastung": 10, "Psychische Belastung": 50, Arbeitszeiten: 60, Gefahrenlevel: 10 }},
{ name: "Finanzberater", stats: { Gehalt: 70, Stresslevel: 65, Verantwortung: 70, Risiko: 10, Ausbildungslänge: 60, "Körperliche Belastung": 10, "Psychische Belastung": 65, Arbeitszeiten: 70, Gefahrenlevel: 10 }},
{ name: "Aktuar", stats: { Gehalt: 85, Stresslevel: 60, Verantwortung: 85, Risiko: 10, Ausbildungslänge: 90, "Körperliche Belastung": 10, "Psychische Belastung": 70, Arbeitszeiten: 60, Gefahrenlevel: 10 }},
{ name: "Bankmanager", stats: { Gehalt: 90, Stresslevel: 85, Verantwortung: 95, Risiko: 15, Ausbildungslänge: 80, "Körperliche Belastung": 10, "Psychische Belastung": 85, Arbeitszeiten: 85, Gefahrenlevel: 15 }},
{ name: "Kassierer", stats: { Gehalt: 30, Stresslevel: 50, Verantwortung: 40, Risiko: 10, Ausbildungslänge: 10, "Körperliche Belastung": 40, "Psychische Belastung": 45, Arbeitszeiten: 70, Gefahrenlevel: 10 }},

{ name: "Einzelhandelskaufmann", stats: { Gehalt: 35, Stresslevel: 55, Verantwortung: 45, Risiko: 10, Ausbildungslänge: 20, "Körperliche Belastung": 50, "Psychische Belastung": 50, Arbeitszeiten: 75, Gefahrenlevel: 10 }},
{ name: "Verkäufer", stats: { Gehalt: 30, Stresslevel: 50, Verantwortung: 40, Risiko: 10, Ausbildungslänge: 10, "Körperliche Belastung": 40, "Psychische Belastung": 45, Arbeitszeiten: 70, Gefahrenlevel: 10 }},
{ name: "Store-Manager", stats: { Gehalt: 55, Stresslevel: 70, Verantwortung: 70, Risiko: 10, Ausbildungslänge: 40, "Körperliche Belastung": 40, "Psychische Belastung": 60, Arbeitszeiten: 80, Gefahrenlevel: 10 }},
{ name: "Logistiker", stats: { Gehalt: 45, Stresslevel: 60, Verantwortung: 55, Risiko: 20, Ausbildungslänge: 30, "Körperliche Belastung": 60, "Psychische Belastung": 55, Arbeitszeiten: 75, Gefahrenlevel: 20 }},
{ name: "Lagerarbeiter", stats: { Gehalt: 35, Stresslevel: 55, Verantwortung: 40, Risiko: 20, Ausbildungslänge: 10, "Körperliche Belastung": 70, "Psychische Belastung": 50, Arbeitszeiten: 75, Gefahrenlevel: 20 }},
{ name: "Postbote", stats: { Gehalt: 40, Stresslevel: 55, Verantwortung: 45, Risiko: 20, Ausbildungslänge: 20, "Körperliche Belastung": 70, "Psychische Belastung": 55, Arbeitszeiten: 70, Gefahrenlevel: 20 }},
{ name: "Kurrierfahrer", stats: { Gehalt: 40, Stresslevel: 60, Verantwortung: 50, Risiko: 30, Ausbildungslänge: 10, "Körperliche Belastung": 60, "Psychische Belastung": 55, Arbeitszeiten: 80, Gefahrenlevel: 30 }},
{ name: "E-Commerce-Manager", stats: { Gehalt: 70, Stresslevel: 65, Verantwortung: 70, Risiko: 10, Ausbildungslänge: 60, "Körperliche Belastung": 20, "Psychische Belastung": 65, Arbeitszeiten: 70, Gefahrenlevel: 10 }},
{ name: "Supply-Chain-Manager", stats: { Gehalt: 80, Stresslevel: 75, Verantwortung: 85, Risiko: 15, Ausbildungslänge: 70, "Körperliche Belastung": 20, "Psychische Belastung": 75, Arbeitszeiten: 75, Gefahrenlevel: 15 }},
{ name: "Vertriebsleiter", stats: { Gehalt: 85, Stresslevel: 80, Verantwortung: 90, Risiko: 10, Ausbildungslänge: 70, "Körperliche Belastung": 20, "Psychische Belastung": 80, Arbeitszeiten: 85, Gefahrenlevel: 10 }},

{ name: "Marketingmanager", stats: { Gehalt: 75, Stresslevel: 70, Verantwortung: 75, Risiko: 10, Ausbildungslänge: 60, "Körperliche Belastung": 20, "Psychische Belastung": 70, Arbeitszeiten: 75, Gefahrenlevel: 10 }},
{ name: "Social-Media-Manager", stats: { Gehalt: 55, Stresslevel: 65, Verantwortung: 50, Risiko: 10, Ausbildungslänge: 40, "Körperliche Belastung": 20, "Psychische Belastung": 70, Arbeitszeiten: 75, Gefahrenlevel: 10 }},
{ name: "PR-Manager", stats: { Gehalt: 70, Stresslevel: 75, Verantwortung: 70, Risiko: 10, Ausbildungslänge: 60, "Körperliche Belastung": 20, "Psychische Belastung": 75, Arbeitszeiten: 80, Gefahrenlevel: 10 }},
{ name: "Grafiker", stats: { Gehalt: 50, Stresslevel: 55, Verantwortung: 45, Risiko: 10, Ausbildungslänge: 40, "Körperliche Belastung": 20, "Psychische Belastung": 60, Arbeitszeiten: 65, Gefahrenlevel: 10 }},
{ name: "Animator", stats: { Gehalt: 55, Stresslevel: 60, Verantwortung: 50, Risiko: 10, Ausbildungslänge: 50, "Körperliche Belastung": 20, "Psychische Belastung": 65, Arbeitszeiten: 70, Gefahrenlevel: 10 }},
{ name: "Videoproduzent", stats: { Gehalt: 60, Stresslevel: 65, Verantwortung: 55, Risiko: 10, Ausbildungslänge: 50, "Körperliche Belastung": 30, "Psychische Belastung": 70, Arbeitszeiten: 75, Gefahrenlevel: 10 }},
{ name: "Tonmeister", stats: { Gehalt: 55, Stresslevel: 60, Verantwortung: 50, Risiko: 10, Ausbildungslänge: 50, "Körperliche Belastung": 20, "Psychische Belastung": 60, Arbeitszeiten: 70, Gefahrenlevel: 10 }},
{ name: "Kameramann", stats: { Gehalt: 55, Stresslevel: 65, Verantwortung: 55, Risiko: 20, Ausbildungslänge: 40, "Körperliche Belastung": 60, "Psychische Belastung": 60, Arbeitszeiten: 75, Gefahrenlevel: 20 }},
{ name: "Drehbuchautor", stats: { Gehalt: 65, Stresslevel: 60, Verantwortung: 60, Risiko: 10, Ausbildungslänge: 60, "Körperliche Belastung": 10, "Psychische Belastung": 70, Arbeitszeiten: 70, Gefahrenlevel: 10 }},
{ name: "Produzent", stats: { Gehalt: 85, Stresslevel: 85, Verantwortung: 95, Risiko: 15, Ausbildungslänge: 70, "Körperliche Belastung": 20, "Psychische Belastung": 85, Arbeitszeiten: 85, Gefahrenlevel: 15 }},

{ name: "Politiker", stats: { Gehalt: 80, Stresslevel: 95, Verantwortung: 100, Risiko: 40, Ausbildungslänge: 70, "Körperliche Belastung": 20, "Psychische Belastung": 95, Arbeitszeiten: 100, Gefahrenlevel: 40 }},
{ name: "Diplomat", stats: { Gehalt: 85, Stresslevel: 80, Verantwortung: 90, Risiko: 20, Ausbildungslänge: 80, "Körperliche Belastung": 20, "Psychische Belastung": 80, Arbeitszeiten: 80, Gefahrenlevel: 20 }},
{ name: "Beamter", stats: { Gehalt: 55, Stresslevel: 40, Verantwortung: 50, Risiko: 5, Ausbildungslänge: 40, "Körperliche Belastung": 10, "Psychische Belastung": 40, Arbeitszeiten: 60, Gefahrenlevel: 5 }},
{ name: "Stadtplaner", stats: { Gehalt: 70, Stresslevel: 60, Verantwortung: 70, Risiko: 10, Ausbildungslänge: 70, "Körperliche Belastung": 20, "Psychische Belastung": 60, Arbeitszeiten: 65, Gefahrenlevel: 10 }},
{ name: "Sozialarbeiter", stats: { Gehalt: 45, Stresslevel: 80, Verantwortung: 70, Risiko: 20, Ausbildungslänge: 60, "Körperliche Belastung": 40, "Psychische Belastung": 85, Arbeitszeiten: 70, Gefahrenlevel: 20 }},
{ name: "Erzieher", stats: { Gehalt: 40, Stresslevel: 65, Verantwortung: 60, Risiko: 10, Ausbildungslänge: 40, "Körperliche Belastung": 50, "Psychische Belastung": 60, Arbeitszeiten: 70, Gefahrenlevel: 10 }},
{ name: "Pflegehelfer", stats: { Gehalt: 35, Stresslevel: 75, Verantwortung: 55, Risiko: 20, Ausbildungslänge: 30, "Körperliche Belastung": 70, "Psychische Belastung": 75, Arbeitszeiten: 75, Gefahrenlevel: 20 }},
{ name: "Hebamme", stats: { Gehalt: 55, Stresslevel: 85, Verantwortung: 85, Risiko: 30, Ausbildungslänge: 70, "Körperliche Belastung": 70, "Psychische Belastung": 85, Arbeitszeiten: 80, Gefahrenlevel: 30 }},
{ name: "Tierarzt", stats: { Gehalt: 70, Stresslevel: 75, Verantwortung: 80, Risiko: 40, Ausbildungslänge: 85, "Körperliche Belastung": 60, "Psychische Belastung": 75, Arbeitszeiten: 70, Gefahrenlevel: 40 }},
{ name: "Pharmaforscher", stats: { Gehalt: 85, Stresslevel: 70, Verantwortung: 85, Risiko: 20, Ausbildungslänge: 90, "Körperliche Belastung": 20, "Psychische Belastung": 70, Arbeitszeiten: 65, Gefahrenlevel: 20 }}
];

const berufeOpponents = {
berufeIT: {
  type: "berufe",
  name: "IT & Technologie",
  players: {
    Gehalt: { name: "Softwareentwickler", value: 80 },
    Stresslevel: { name: "IT-Sicherheitsexperte", value: 75 },
    Verantwortung: { name: "KI-Forscher", value: 85 },
    Risiko: { name: "Systemadministrator", value: 15 },
    Ausbildungslänge: { name: "KI-Forscher", value: 95 },
    "Körperliche Belastung": { name: "Webentwickler", value: 15 },
    "Psychische Belastung": { name: "IT-Sicherheitsexperte", value: 80 },
    Arbeitszeiten: { name: "Streamer", value: 95 },
    Gefahrenlevel: { name: "IT-Sicherheitsexperte", value: 20 }
  }
},

berufeFinanzen: {
  type: "berufe",
  name: "Finanzen & Wirtschaft",
  players: {
    Gehalt: { name: "Investmentbanker", value: 95 },
    Stresslevel: { name: "Investmentbanker", value: 95 },
    Verantwortung: { name: "Wirtschaftsprüfer", value: 90 },
    Risiko: { name: "Finanzberater", value: 10 },
    Ausbildungslänge: { name: "Aktuar", value: 90 },
    "Körperliche Belastung": { name: "Buchhalter", value: 10 },
    "Psychische Belastung": { name: "Investmentbanker", value: 95 },
    Arbeitszeiten: { name: "Investmentbanker", value: 100 },
    Gefahrenlevel: { name: "Investmentbanker", value: 20 }
  }
},

berufeHandwerk: {
  type: "berufe",
  name: "Handwerk",
  players: {
    Gehalt: { name: "Elektriker", value: 55 },
    Stresslevel: { name: "Mechaniker", value: 60 },
    Verantwortung: { name: "Elektriker", value: 65 },
    Risiko: { name: "Kfz-Mechatroniker", value: 55 },
    Ausbildungslänge: { name: "Elektriker", value: 50 },
    "Körperliche Belastung": { name: "Bauarbeiter", value: 95 },
    "Psychische Belastung": { name: "Mechaniker", value: 55 },
    Arbeitszeiten: { name: "Lkw-Fahrer", value: 85 },
    Gefahrenlevel: { name: "Bauarbeiter", value: 70 }
  }
},

berufeTransport: {
  type: "berufe",
  name: "Transport & Verkehr",
  players: {
    Gehalt: { name: "Lokführer", value: 60 },
    Stresslevel: { name: "Lkw-Fahrer", value: 70 },
    Verantwortung: { name: "Pilot-Assistent", value: 70 },
    Risiko: { name: "Seemann", value: 70 },
    Ausbildungslänge: { name: "Pilot-Assistent", value: 70 },
    "Körperliche Belastung": { name: "Seemann", value: 80 },
    "Psychische Belastung": { name: "Flugbegleiter", value: 70 },
    Arbeitszeiten: { name: "Flugbegleiter", value: 85 },
    Gefahrenlevel: { name: "Seemann", value: 70 }
  }
},

berufeLandwirtschaft: {
  type: "berufe",
  name: "Landwirtschaft",
  players: {
    Gehalt: { name: "Landwirt", value: 45 },
    Stresslevel: { name: "Landwirt", value: 70 },
    Verantwortung: { name: "Forstwirt", value: 60 },
    Risiko: { name: "Jäger", value: 70 },
    Ausbildungslänge: { name: "Biologe", value: 80 },
    "Körperliche Belastung": { name: "Landwirt", value: 90 },
    "Psychische Belastung": { name: "Tierpfleger", value: 60 },
    Arbeitszeiten: { name: "Landwirt", value: 90 },
    Gefahrenlevel: { name: "Jäger", value: 70 }
  }
},

berufeWissenschaft: {
  type: "berufe",
  name: "Wissenschaft",
  players: {
    Gehalt: { name: "Physiker", value: 75 },
    Stresslevel: { name: "Chemiker", value: 60 },
    Verantwortung: { name: "Astronom", value: 75 },
    Risiko: { name: "Laborant", value: 20 },
    Ausbildungslänge: { name: "Physiker", value: 90 },
    "Körperliche Belastung": { name: "Laborant", value: 30 },
    "Psychische Belastung": { name: "Psychologe", value: 95 },
    Arbeitszeiten: { name: "Chemiker", value: 65 },
    Gefahrenlevel: { name: "Chemiker", value: 20 }
  }
},

berufeGastronomie2: {
  type: "berufe",
  name: "Hotellerie & Gastronomie",
  players: {
    Gehalt: { name: "Hotelmanager", value: 70 },
    Stresslevel: { name: "Eventmanager", value: 80 },
    Verantwortung: { name: "Hotelmanager", value: 80 },
    Risiko: { name: "Metzger", value: 40 },
    Ausbildungslänge: { name: "Sommelier", value: 60 },
    "Körperliche Belastung": { name: "Bäcker", value: 80 },
    "Psychische Belastung": { name: "Kellner", value: 60 },
    Arbeitszeiten: { name: "Barkeeper", value: 95 },
    Gefahrenlevel: { name: "Metzger", value: 40 }
  }
},

berufeMedien: {
  type: "berufe",
  name: "Medien & Kreativbranche",
  players: {
    Gehalt: { name: "Regisseur", value: 80 },
    Stresslevel: { name: "Journalist", value: 80 },
    Verantwortung: { name: "Produzent", value: 95 },
    Risiko: { name: "Kameramann", value: 20 },
    Ausbildungslänge: { name: "Regisseur", value: 70 },
    "Körperliche Belastung": { name: "Kameramann", value: 60 },
    "Psychische Belastung": { name: "Schauspieler", value: 80 },
    Arbeitszeiten: { name: "Musiker", value: 90 },
    Gefahrenlevel: { name: "Kameramann", value: 20 }
  }
},

berufeMarketing: {
  type: "berufe",
  name: "Marketing & Kommunikation",
  players: {
    Gehalt: { name: "Marketingmanager", value: 75 },
    Stresslevel: { name: "PR-Manager", value: 75 },
    Verantwortung: { name: "Vertriebsleiter", value: 90 },
    Risiko: { name: "Grafiker", value: 10 },
    Ausbildungslänge: { name: "PR-Manager", value: 60 },
    "Körperliche Belastung": { name: "Grafiker", value: 20 },
    "Psychische Belastung": { name: "Social-Media-Manager", value: 70 },
    Arbeitszeiten: { name: "Eventmanager", value: 90 },
    Gefahrenlevel: { name: "Grafiker", value: 10 }
  }
},

berufePolitik: {
  type: "berufe",
  name: "Politik & Verwaltung",
  players: {
    Gehalt: { name: "Politiker", value: 80 },
    Stresslevel: { name: "Politiker", value: 95 },
    Verantwortung: { name: "Politiker", value: 100 },
    Risiko: { name: "Diplomat", value: 20 },
    Ausbildungslänge: { name: "Diplomat", value: 80 },
    "Körperliche Belastung": { name: "Beamter", value: 10 },
    "Psychische Belastung": { name: "Politiker", value: 95 },
    Arbeitszeiten: { name: "Politiker", value: 100 },
    Gefahrenlevel: { name: "Politiker", value: 40 }
  }
},

berufeSoziales: {
  type: "berufe",
  name: "Soziales & Betreuung",
  players: {
    Gehalt: { name: "Hebamme", value: 55 },
    Stresslevel: { name: "Sozialarbeiter", value: 80 },
    Verantwortung: { name: "Hebamme", value: 85 },
    Risiko: { name: "Pflegehelfer", value: 20 },
    Ausbildungslänge: { name: "Hebamme", value: 70 },
    "Körperliche Belastung": { name: "Pflegehelfer", value: 70 },
    "Psychische Belastung": { name: "Sozialarbeiter", value: 85 },
    Arbeitszeiten: { name: "Pflegehelfer", value: 75 },
    Gefahrenlevel: { name: "Pflegehelfer", value: 20 }
  }
},

berufeTierwelt: {
  type: "berufe",
  name: "Tierwelt & Pflege",
  players: {
    Gehalt: { name: "Tierarzt", value: 70 },
    Stresslevel: { name: "Tierpfleger", value: 60 },
    Verantwortung: { name: "Tierarzt", value: 80 },
    Risiko: { name: "Jäger", value: 70 },
    Ausbildungslänge: { name: "Tierarzt", value: 85 },
    "Körperliche Belastung": { name: "Tierpfleger", value: 75 },
    "Psychische Belastung": { name: "Tierpfleger", value: 60 },
    Arbeitszeiten: { name: "Tierpfleger", value: 70 },
    Gefahrenlevel: { name: "Jäger", value: 70 }
  }
},

berufeLogistik: {
  type: "berufe",
  name: "Logistik & Versand",
  players: {
    Gehalt: { name: "Supply-Chain-Manager", value: 80 },
    Stresslevel: { name: "Logistiker", value: 60 },
    Verantwortung: { name: "Supply-Chain-Manager", value: 85 },
    Risiko: { name: "Kurrierfahrer", value: 30 },
    Ausbildungslänge: { name: "E-Commerce-Manager", value: 60 },
    "Körperliche Belastung": { name: "Lagerarbeiter", value: 70 },
    "Psychische Belastung": { name: "Postbote", value: 55 },
    Arbeitszeiten: { name: "Kurrierfahrer", value: 80 },
    Gefahrenlevel: { name: "Kurrierfahrer", value: 30 }
  }
},

berufeKunst: {
  type: "berufe",
  name: "Kunst & Kultur",
  players: {
    Gehalt: { name: "Schauspieler", value: 70 },
    Stresslevel: { name: "Musiker", value: 70 },
    Verantwortung: { name: "Regisseur", value: 90 },
    Risiko: { name: "Kameramann", value: 20 },
    Ausbildungslänge: { name: "Regisseur", value: 70 },
    "Körperliche Belastung": { name: "Kameramann", value: 60 },
    "Psychische Belastung": { name: "Musiker", value: 75 },
    Arbeitszeiten: { name: "Musiker", value: 90 },
    Gefahrenlevel: { name: "Kameramann", value: 20 }
  }
},

berufeBildung: {
  type: "berufe",
  name: "Bildung",
  players: {
    Gehalt: { name: "Lehrer", value: 60 },
    Stresslevel: { name: "Lehrer", value: 70 },
    Verantwortung: { name: "Lehrer", value: 75 },
    Risiko: { name: "Erzieher", value: 10 },
    Ausbildungslänge: { name: "Lehrer", value: 70 },
    "Körperliche Belastung": { name: "Erzieher", value: 50 },
    "Psychische Belastung": { name: "Lehrer", value: 65 },
    Arbeitszeiten: { name: "Lehrer", value: 75 },
    Gefahrenlevel: { name: "Erzieher", value: 10 }
  }
},

berufePharma: {
  type: "berufe",
  name: "Pharma & Forschung",
  players: {
    Gehalt: { name: "Pharmaforscher", value: 85 },
    Stresslevel: { name: "Chemiker", value: 60 },
    Verantwortung: { name: "Pharmaforscher", value: 85 },
    Risiko: { name: "Laborant", value: 20 },
    Ausbildungslänge: { name: "Pharmaforscher", value: 90 },
    "Körperliche Belastung": { name: "Laborant", value: 30 },
    "Psychische Belastung": { name: "Psychologe", value: 95 },
    Arbeitszeiten: { name: "Chemiker", value: 65 },
    Gefahrenlevel: { name: "Chemiker", value: 20 }
  }
},
berufeMedizin: {
  type: "berufe",
  name: "Medizin",
  players: {
    Gehalt: { name: "Arzt", value: 90 },
    Stresslevel: { name: "Krankenpfleger", value: 90 },
    Verantwortung: { name: "Arzt", value: 100 },
    Risiko: { name: "Notarzt", value: 85 },
    Ausbildungslänge: { name: "Arzt", value: 95 },
    "Körperliche Belastung": { name: "Krankenpfleger", value: 85 },
    "Psychische Belastung": { name: "Psychologe", value: 95 },
    Arbeitszeiten: { name: "Krankenpfleger", value: 80 },
    Gefahrenlevel: { name: "Notarzt", value: 85 }
  }
},

berufeSicherheit: {
  type: "berufe",
  name: "Sicherheitswesen",
  players: {
    Gehalt: { name: "Pilot", value: 85 },
    Stresslevel: { name: "Polizist", value: 85 },
    Verantwortung: { name: "Pilot", value: 95 },
    Risiko: { name: "Soldat", value: 100 },
    Ausbildungslänge: { name: "Pilot", value: 90 },
    "Körperliche Belastung": { name: "Feuerwehrmann", value: 95 },
    "Psychische Belastung": { name: "Polizist", value: 85 },
    Arbeitszeiten: { name: "Feuerwehrmann", value: 65 },
    Gefahrenlevel: { name: "Soldat", value: 100 }
  }
},

berufeGastronomie: {
  type: "berufe",
  name: "Gastronomie",
  players: {
    Gehalt: { name: "Koch", value: 45 },
    Stresslevel: { name: "Koch", value: 75 },
    Verantwortung: { name: "Koch", value: 55 },
    Risiko: { name: "Metzger", value: 40 },
    Ausbildungslänge: { name: "Sommelier", value: 60 },
    "Körperliche Belastung": { name: "Bäcker", value: 80 },
    "Psychische Belastung": { name: "Kellner", value: 60 },
    Arbeitszeiten: { name: "Barkeeper", value: 95 },
    Gefahrenlevel: { name: "Metzger", value: 40 }
  }
}
};


const geografiePlayers = [

{ name: "USA", stats: { Bruttoinlandsprodukt: 100, Bevölkerung: 95, Bildung: 75, Sicherheit: 60, Gesundheitssystem: 65, Technologie: 95, Klima: 70, Natur: 85, Infrastruktur: 90 }},
{ name: "China", stats: { Bruttoinlandsprodukt: 95, Bevölkerung: 100, Bildung: 70, Sicherheit: 65, Gesundheitssystem: 60, Technologie: 85, Klima: 75, Natur: 80, Infrastruktur: 88 }},
{ name: "Schweiz", stats: { Bruttoinlandsprodukt: 90, Bevölkerung: 25, Bildung: 95, Sicherheit: 98, Gesundheitssystem: 97, Technologie: 85, Klima: 85, Natur: 90, Infrastruktur: 95 }},
{ name: "Deutschland", stats: { Bruttoinlandsprodukt: 92, Bevölkerung: 70, Bildung: 90, Sicherheit: 85, Gesundheitssystem: 90, Technologie: 88, Klima: 80, Natur: 75, Infrastruktur: 90 }},
{ name: "Japan", stats: { Bruttoinlandsprodukt: 93, Bevölkerung: 60, Bildung: 95, Sicherheit: 95, Gesundheitssystem: 95, Technologie: 98, Klima: 70, Natur: 65, Infrastruktur: 95 }},
{ name: "Indien", stats: { Bruttoinlandsprodukt: 85, Bevölkerung: 98, Bildung: 65, Sicherheit: 55, Gesundheitssystem: 50, Technologie: 75, Klima: 80, Natur: 90, Infrastruktur: 60 }},
{ name: "Australien", stats: { Bruttoinlandsprodukt: 88, Bevölkerung: 30, Bildung: 85, Sicherheit: 90, Gesundheitssystem: 92, Technologie: 80, Klima: 85, Natur: 95, Infrastruktur: 88 }},
{ name: "Brasilien", stats: { Bruttoinlandsprodukt: 75, Bevölkerung: 85, Bildung: 60, Sicherheit: 40, Gesundheitssystem: 55, Technologie: 60, Klima: 90, Natur: 100, Infrastruktur: 50 }},
{ name: "Frankreich", stats: { Bruttoinlandsprodukt: 90, Bevölkerung: 65, Bildung: 88, Sicherheit: 80, Gesundheitssystem: 85, Technologie: 82, Klima: 80, Natur: 70, Infrastruktur: 88 }},
{ name: "Kanada", stats: { Bruttoinlandsprodukt: 88, Bevölkerung: 40, Bildung: 90, Sicherheit: 95, Gesundheitssystem: 90, Technologie: 85, Klima: 70, Natur: 95, Infrastruktur: 85 }},
{ name: "Italien", stats: { Bruttoinlandsprodukt: 88, Bevölkerung: 60, Bildung: 85, Sicherheit: 80, Gesundheitssystem: 82, Technologie: 80, Klima: 85, Natur: 75, Infrastruktur: 86 }},
{ name: "Spanien", stats: { Bruttoinlandsprodukt: 86, Bevölkerung: 58, Bildung: 82, Sicherheit: 78, Gesundheitssystem: 83, Technologie: 78, Klima: 88, Natur: 80, Infrastruktur: 84 }},
{ name: "Portugal", stats: { Bruttoinlandsprodukt: 80, Bevölkerung: 40, Bildung: 78, Sicherheit: 82, Gesundheitssystem: 80, Technologie: 75, Klima: 88, Natur: 82, Infrastruktur: 80 }},
{ name: "Niederlande", stats: { Bruttoinlandsprodukt: 89, Bevölkerung: 45, Bildung: 90, Sicherheit: 88, Gesundheitssystem: 88, Technologie: 86, Klima: 78, Natur: 70, Infrastruktur: 92 }},
{ name: "Belgien", stats: { Bruttoinlandsprodukt: 87, Bevölkerung: 42, Bildung: 88, Sicherheit: 82, Gesundheitssystem: 86, Technologie: 82, Klima: 76, Natur: 68, Infrastruktur: 90 }},
{ name: "Österreich", stats: { Bruttoinlandsprodukt: 88, Bevölkerung: 35, Bildung: 90, Sicherheit: 92, Gesundheitssystem: 90, Technologie: 84, Klima: 82, Natur: 88, Infrastruktur: 90 }},
{ name: "Schweden", stats: { Bruttoinlandsprodukt: 90, Bevölkerung: 30, Bildung: 92, Sicherheit: 94, Gesundheitssystem: 92, Technologie: 88, Klima: 70, Natur: 85, Infrastruktur: 92 }},
{ name: "Norwegen", stats: { Bruttoinlandsprodukt: 91, Bevölkerung: 25, Bildung: 92, Sicherheit: 96, Gesundheitssystem: 93, Technologie: 87, Klima: 68, Natur: 92, Infrastruktur: 90 }},
{ name: "Finnland", stats: { Bruttoinlandsprodukt: 88, Bevölkerung: 25, Bildung: 93, Sicherheit: 95, Gesundheitssystem: 92, Technologie: 86, Klima: 65, Natur: 88, Infrastruktur: 88 }},
{ name: "Dänemark", stats: { Bruttoinlandsprodukt: 89, Bevölkerung: 28, Bildung: 91, Sicherheit: 94, Gesundheitssystem: 91, Technologie: 86, Klima: 72, Natur: 80, Infrastruktur: 90 }},
{ name: "Polen", stats: { Bruttoinlandsprodukt: 82, Bevölkerung: 55, Bildung: 80, Sicherheit: 78, Gesundheitssystem: 75, Technologie: 72, Klima: 75, Natur: 70, Infrastruktur: 78 }},
{ name: "Tschechien", stats: { Bruttoinlandsprodukt: 83, Bevölkerung: 35, Bildung: 82, Sicherheit: 82, Gesundheitssystem: 80, Technologie: 78, Klima: 74, Natur: 72, Infrastruktur: 80 }},
{ name: "Slowakei", stats: { Bruttoinlandsprodukt: 80, Bevölkerung: 30, Bildung: 80, Sicherheit: 80, Gesundheitssystem: 78, Technologie: 74, Klima: 73, Natur: 72, Infrastruktur: 78 }},
{ name: "Ungarn", stats: { Bruttoinlandsprodukt: 79, Bevölkerung: 35, Bildung: 78, Sicherheit: 76, Gesundheitssystem: 75, Technologie: 72, Klima: 74, Natur: 70, Infrastruktur: 76 }},
{ name: "Rumänien", stats: { Bruttoinlandsprodukt: 76, Bevölkerung: 45, Bildung: 75, Sicherheit: 70, Gesundheitssystem: 70, Technologie: 68, Klima: 76, Natur: 78, Infrastruktur: 70 }},
{ name: "Bulgarien", stats: { Bruttoinlandsprodukt: 72, Bevölkerung: 35, Bildung: 72, Sicherheit: 68, Gesundheitssystem: 68, Technologie: 65, Klima: 75, Natur: 76, Infrastruktur: 68 }},
{ name: "Griechenland", stats: { Bruttoinlandsprodukt: 78, Bevölkerung: 40, Bildung: 78, Sicherheit: 74, Gesundheitssystem: 75, Technologie: 70, Klima: 85, Natur: 80, Infrastruktur: 75 }},
{ name: "Türkei", stats: { Bruttoinlandsprodukt: 80, Bevölkerung: 80, Bildung: 72, Sicherheit: 65, Gesundheitssystem: 70, Technologie: 72, Klima: 80, Natur: 78, Infrastruktur: 74 }},
{ name: "Irland", stats: { Bruttoinlandsprodukt: 88, Bevölkerung: 25, Bildung: 86, Sicherheit: 88, Gesundheitssystem: 84, Technologie: 82, Klima: 70, Natur: 80, Infrastruktur: 86 }},
{ name: "Island", stats: { Bruttoinlandsprodukt: 86, Bevölkerung: 10, Bildung: 90, Sicherheit: 96, Gesundheitssystem: 90, Technologie: 80, Klima: 60, Natur: 95, Infrastruktur: 84 }},
{ name: "Vereinigtes Königreich", stats: { Bruttoinlandsprodukt: 92, Bevölkerung: 70, Bildung: 90, Sicherheit: 85, Gesundheitssystem: 82, Technologie: 90, Klima: 75, Natur: 70, Infrastruktur: 90 }},
{ name: "Russland", stats: { Bruttoinlandsprodukt: 82, Bevölkerung: 90, Bildung: 80, Sicherheit: 60, Gesundheitssystem: 70, Technologie: 78, Klima: 60, Natur: 88, Infrastruktur: 72 }},
{ name: "Ukraine", stats: { Bruttoinlandsprodukt: 70, Bevölkerung: 60, Bildung: 75, Sicherheit: 40, Gesundheitssystem: 65, Technologie: 65, Klima: 70, Natur: 80, Infrastruktur: 60 }},
{ name: "Weißrussland", stats: { Bruttoinlandsprodukt: 68, Bevölkerung: 40, Bildung: 72, Sicherheit: 55, Gesundheitssystem: 65, Technologie: 62, Klima: 68, Natur: 75, Infrastruktur: 62 }},
{ name: "Litauen", stats: { Bruttoinlandsprodukt: 78, Bevölkerung: 25, Bildung: 82, Sicherheit: 80, Gesundheitssystem: 78, Technologie: 76, Klima: 70, Natur: 74, Infrastruktur: 78 }},
{ name: "Lettland", stats: { Bruttoinlandsprodukt: 76, Bevölkerung: 22, Bildung: 80, Sicherheit: 78, Gesundheitssystem: 76, Technologie: 74, Klima: 70, Natur: 76, Infrastruktur: 76 }},
{ name: "Estland", stats: { Bruttoinlandsprodukt: 80, Bevölkerung: 20, Bildung: 84, Sicherheit: 82, Gesundheitssystem: 78, Technologie: 80, Klima: 68, Natur: 78, Infrastruktur: 80 }},
{ name: "Serbien", stats: { Bruttoinlandsprodukt: 74, Bevölkerung: 40, Bildung: 74, Sicherheit: 68, Gesundheitssystem: 70, Technologie: 68, Klima: 74, Natur: 76, Infrastruktur: 70 }},
{ name: "Kroatien", stats: { Bruttoinlandsprodukt: 78, Bevölkerung: 30, Bildung: 78, Sicherheit: 80, Gesundheitssystem: 78, Technologie: 72, Klima: 80, Natur: 82, Infrastruktur: 78 }},
{ name: "Slowenien", stats: { Bruttoinlandsprodukt: 80, Bevölkerung: 25, Bildung: 82, Sicherheit: 84, Gesundheitssystem: 82, Technologie: 76, Klima: 78, Natur: 80, Infrastruktur: 82 }},
{ name: "Mexiko", stats: { Bruttoinlandsprodukt: 80, Bevölkerung: 80, Bildung: 70, Sicherheit: 55, Gesundheitssystem: 65, Technologie: 70, Klima: 85, Natur: 82, Infrastruktur: 70 }},
{ name: "Argentinien", stats: { Bruttoinlandsprodukt: 78, Bevölkerung: 60, Bildung: 75, Sicherheit: 60, Gesundheitssystem: 70, Technologie: 68, Klima: 80, Natur: 88, Infrastruktur: 68 }},
{ name: "Chile", stats: { Bruttoinlandsprodukt: 80, Bevölkerung: 40, Bildung: 78, Sicherheit: 75, Gesundheitssystem: 75, Technologie: 72, Klima: 78, Natur: 84, Infrastruktur: 76 }},
{ name: "Peru", stats: { Bruttoinlandsprodukt: 74, Bevölkerung: 55, Bildung: 70, Sicherheit: 55, Gesundheitssystem: 65, Technologie: 65, Klima: 80, Natur: 90, Infrastruktur: 60 }},
{ name: "Kolumbien", stats: { Bruttoinlandsprodukt: 76, Bevölkerung: 70, Bildung: 68, Sicherheit: 50, Gesundheitssystem: 62, Technologie: 64, Klima: 82, Natur: 88, Infrastruktur: 62 }},
{ name: "Venezuela", stats: { Bruttoinlandsprodukt: 60, Bevölkerung: 60, Bildung: 65, Sicherheit: 30, Gesundheitssystem: 50, Technologie: 55, Klima: 82, Natur: 88, Infrastruktur: 50 }},
{ name: "Ecuador", stats: { Bruttoinlandsprodukt: 72, Bevölkerung: 45, Bildung: 68, Sicherheit: 55, Gesundheitssystem: 60, Technologie: 60, Klima: 82, Natur: 90, Infrastruktur: 58 }},
{ name: "Uruguay", stats: { Bruttoinlandsprodukt: 78, Bevölkerung: 30, Bildung: 78, Sicherheit: 75, Gesundheitssystem: 75, Technologie: 70, Klima: 78, Natur: 80, Infrastruktur: 74 }},
{ name: "Paraguay", stats: { Bruttoinlandsprodukt: 70, Bevölkerung: 35, Bildung: 65, Sicherheit: 55, Gesundheitssystem: 58, Technologie: 58, Klima: 80, Natur: 82, Infrastruktur: 55 }},
{ name: "Bolivien", stats: { Bruttoinlandsprodukt: 68, Bevölkerung: 40, Bildung: 62, Sicherheit: 50, Gesundheitssystem: 55, Technologie: 55, Klima: 78, Natur: 88, Infrastruktur: 52 }},
{ name: "Südafrika", stats: { Bruttoinlandsprodukt: 78, Bevölkerung: 70, Bildung: 70, Sicherheit: 45, Gesundheitssystem: 60, Technologie: 68, Klima: 80, Natur: 90, Infrastruktur: 70 }},
{ name: "Nigeria", stats: { Bruttoinlandsprodukt: 72, Bevölkerung: 90, Bildung: 60, Sicherheit: 40, Gesundheitssystem: 55, Technologie: 60, Klima: 82, Natur: 85, Infrastruktur: 55 }},
{ name: "Ägypten", stats: { Bruttoinlandsprodukt: 74, Bevölkerung: 85, Bildung: 65, Sicherheit: 50, Gesundheitssystem: 60, Technologie: 62, Klima: 85, Natur: 78, Infrastruktur: 60 }},
{ name: "Marokko", stats: { Bruttoinlandsprodukt: 72, Bevölkerung: 60, Bildung: 65, Sicherheit: 60, Gesundheitssystem: 62, Technologie: 60, Klima: 82, Natur: 80, Infrastruktur: 62 }},
{ name: "Algerien", stats: { Bruttoinlandsprodukt: 70, Bevölkerung: 70, Bildung: 62, Sicherheit: 55, Gesundheitssystem: 58, Technologie: 58, Klima: 80, Natur: 78, Infrastruktur: 58 }},
{ name: "Tunesien", stats: { Bruttoinlandsprodukt: 72, Bevölkerung: 50, Bildung: 68, Sicherheit: 62, Gesundheitssystem: 64, Technologie: 62, Klima: 82, Natur: 78, Infrastruktur: 64 }},
{ name: "Kenia", stats: { Bruttoinlandsprodukt: 68, Bevölkerung: 70, Bildung: 60, Sicherheit: 50, Gesundheitssystem: 55, Technologie: 58, Klima: 80, Natur: 88, Infrastruktur: 55 }},
{ name: "Äthiopien", stats: { Bruttoinlandsprodukt: 65, Bevölkerung: 80, Bildung: 55, Sicherheit: 45, Gesundheitssystem: 50, Technologie: 52, Klima: 78, Natur: 85, Infrastruktur: 50 }},
{ name: "Ghana", stats: { Bruttoinlandsprodukt: 70, Bevölkerung: 60, Bildung: 60, Sicherheit: 55, Gesundheitssystem: 58, Technologie: 58, Klima: 80, Natur: 82, Infrastruktur: 56 }},
{ name: "Senegal", stats: { Bruttoinlandsprodukt: 68, Bevölkerung: 50, Bildung: 58, Sicherheit: 55, Gesundheitssystem: 56, Technologie: 55, Klima: 80, Natur: 82, Infrastruktur: 54 }},
{ name: "Saudi-Arabien", stats: { Bruttoinlandsprodukt: 88, Bevölkerung: 60, Bildung: 70, Sicherheit: 70, Gesundheitssystem: 75, Technologie: 78, Klima: 85, Natur: 70, Infrastruktur: 82 }},
{ name: "Vereinigte Arabische Emirate", stats: { Bruttoinlandsprodukt: 90, Bevölkerung: 40, Bildung: 78, Sicherheit: 80, Gesundheitssystem: 80, Technologie: 85, Klima: 85, Natur: 65, Infrastruktur: 90 }},
{ name: "Katar", stats: { Bruttoinlandsprodukt: 92, Bevölkerung: 30, Bildung: 80, Sicherheit: 82, Gesundheitssystem: 82, Technologie: 86, Klima: 85, Natur: 60, Infrastruktur: 90 }},
{ name: "Kuwait", stats: { Bruttoinlandsprodukt: 88, Bevölkerung: 30, Bildung: 78, Sicherheit: 78, Gesundheitssystem: 78, Technologie: 82, Klima: 85, Natur: 60, Infrastruktur: 86 }},
{ name: "Bahrain", stats: { Bruttoinlandsprodukt: 86, Bevölkerung: 25, Bildung: 78, Sicherheit: 80, Gesundheitssystem: 78, Technologie: 80, Klima: 85, Natur: 58, Infrastruktur: 84 }},
{ name: "Oman", stats: { Bruttoinlandsprodukt: 82, Bevölkerung: 30, Bildung: 75, Sicherheit: 78, Gesundheitssystem: 76, Technologie: 76, Klima: 85, Natur: 70, Infrastruktur: 80 }},
{ name: "Israel", stats: { Bruttoinlandsprodukt: 88, Bevölkerung: 40, Bildung: 90, Sicherheit: 80, Gesundheitssystem: 82, Technologie: 92, Klima: 80, Natur: 70, Infrastruktur: 86 }},
{ name: "Jordanien", stats: { Bruttoinlandsprodukt: 76, Bevölkerung: 45, Bildung: 72, Sicherheit: 70, Gesundheitssystem: 70, Technologie: 70, Klima: 80, Natur: 72, Infrastruktur: 72 }},
{ name: "Libanon", stats: { Bruttoinlandsprodukt: 70, Bevölkerung: 40, Bildung: 75, Sicherheit: 55, Gesundheitssystem: 68, Technologie: 68, Klima: 80, Natur: 70, Infrastruktur: 68 }},
{ name: "Iran", stats: { Bruttoinlandsprodukt: 78, Bevölkerung: 80, Bildung: 72, Sicherheit: 55, Gesundheitssystem: 68, Technologie: 70, Klima: 78, Natur: 75, Infrastruktur: 70 }},
{ name: "Pakistan", stats: { Bruttoinlandsprodukt: 72, Bevölkerung: 90, Bildung: 60, Sicherheit: 45, Gesundheitssystem: 55, Technologie: 60, Klima: 78, Natur: 80, Infrastruktur: 55 }},
{ name: "Bangladesch", stats: { Bruttoinlandsprodukt: 70, Bevölkerung: 95, Bildung: 58, Sicherheit: 45, Gesundheitssystem: 52, Technologie: 58, Klima: 80, Natur: 78, Infrastruktur: 52 }},
{ name: "Sri Lanka", stats: { Bruttoinlandsprodukt: 72, Bevölkerung: 50, Bildung: 70, Sicherheit: 60, Gesundheitssystem: 65, Technologie: 62, Klima: 82, Natur: 84, Infrastruktur: 60 }},
{ name: "Nepal", stats: { Bruttoinlandsprodukt: 65, Bevölkerung: 45, Bildung: 60, Sicherheit: 55, Gesundheitssystem: 55, Technologie: 55, Klima: 78, Natur: 90, Infrastruktur: 50 }},
{ name: "Bhutan", stats: { Bruttoinlandsprodukt: 62, Bevölkerung: 20, Bildung: 65, Sicherheit: 70, Gesundheitssystem: 60, Technologie: 55, Klima: 80, Natur: 92, Infrastruktur: 50 }},
{ name: "Myanmar", stats: { Bruttoinlandsprodukt: 60, Bevölkerung: 60, Bildung: 55, Sicherheit: 40, Gesundheitssystem: 50, Technologie: 52, Klima: 80, Natur: 85, Infrastruktur: 48 }},
{ name: "Thailand", stats: { Bruttoinlandsprodukt: 78, Bevölkerung: 70, Bildung: 70, Sicherheit: 60, Gesundheitssystem: 68, Technologie: 70, Klima: 85, Natur: 88, Infrastruktur: 70 }},
{ name: "Vietnam", stats: { Bruttoinlandsprodukt: 76, Bevölkerung: 80, Bildung: 68, Sicherheit: 58, Gesundheitssystem: 65, Technologie: 68, Klima: 82, Natur: 88, Infrastruktur: 68 }},
{ name: "Malaysia", stats: { Bruttoinlandsprodukt: 80, Bevölkerung: 60, Bildung: 75, Sicherheit: 70, Gesundheitssystem: 72, Technologie: 75, Klima: 82, Natur: 84, Infrastruktur: 76 }},
{ name: "Singapur", stats: { Bruttoinlandsprodukt: 92, Bevölkerung: 30, Bildung: 95, Sicherheit: 95, Gesundheitssystem: 90, Technologie: 95, Klima: 80, Natur: 60, Infrastruktur: 95 }},
{ name: "Indonesien", stats: { Bruttoinlandsprodukt: 78, Bevölkerung: 90, Bildung: 65, Sicherheit: 55, Gesundheitssystem: 60, Technologie: 65, Klima: 85, Natur: 90, Infrastruktur: 62 }},
{ name: "Philippinen", stats: { Bruttoinlandsprodukt: 74, Bevölkerung: 85, Bildung: 62, Sicherheit: 50, Gesundheitssystem: 58, Technologie: 60, Klima: 85, Natur: 88, Infrastruktur: 58 }},
{ name: "Brunei", stats: { Bruttoinlandsprodukt: 86, Bevölkerung: 20, Bildung: 78, Sicherheit: 80, Gesundheitssystem: 78, Technologie: 80, Klima: 82, Natur: 70, Infrastruktur: 84 }},
{ name: "Laos", stats: { Bruttoinlandsprodukt: 62, Bevölkerung: 35, Bildung: 55, Sicherheit: 55, Gesundheitssystem: 52, Technologie: 50, Klima: 80, Natur: 88, Infrastruktur: 48 }},
{ name: "Kambodscha", stats: { Bruttoinlandsprodukt: 60, Bevölkerung: 45, Bildung: 55, Sicherheit: 50, Gesundheitssystem: 52, Technologie: 50, Klima: 82, Natur: 85, Infrastruktur: 48 }},
{ name: "Mongolei", stats: { Bruttoinlandsprodukt: 70, Bevölkerung: 15, Bildung: 70, Sicherheit: 75, Gesundheitssystem: 65, Technologie: 60, Klima: 65, Natur: 88, Infrastruktur: 60 }},
{ name: "Kasachstan", stats: { Bruttoinlandsprodukt: 78, Bevölkerung: 40, Bildung: 75, Sicherheit: 70, Gesundheitssystem: 68, Technologie: 70, Klima: 70, Natur: 80, Infrastruktur: 72 }},
{ name: "Usbekistan", stats: { Bruttoinlandsprodukt: 72, Bevölkerung: 35, Bildung: 70, Sicherheit: 65, Gesundheitssystem: 60, Technologie: 62, Klima: 70, Natur: 78, Infrastruktur: 65 }},
{ name: "Turkmenistan", stats: { Bruttoinlandsprodukt: 70, Bevölkerung: 20, Bildung: 65, Sicherheit: 60, Gesundheitssystem: 58, Technologie: 60, Klima: 75, Natur: 70, Infrastruktur: 60 }},
{ name: "Kirgisistan", stats: { Bruttoinlandsprodukt: 65, Bevölkerung: 15, Bildung: 65, Sicherheit: 60, Gesundheitssystem: 55, Technologie: 55, Klima: 70, Natur: 80, Infrastruktur: 55 }},
{ name: "Tadschikistan", stats: { Bruttoinlandsprodukt: 60, Bevölkerung: 20, Bildung: 60, Sicherheit: 55, Gesundheitssystem: 55, Technologie: 50, Klima: 70, Natur: 78, Infrastruktur: 50 }},
{ name: "Georgien", stats: { Bruttoinlandsprodukt: 72, Bevölkerung: 20, Bildung: 75, Sicherheit: 70, Gesundheitssystem: 70, Technologie: 68, Klima: 75, Natur: 85, Infrastruktur: 70 }},
{ name: "Armenien", stats: { Bruttoinlandsprodukt: 70, Bevölkerung: 15, Bildung: 72, Sicherheit: 68, Gesundheitssystem: 68, Technologie: 65, Klima: 75, Natur: 80, Infrastruktur: 68 }},
{ name: "Aserbaidschan", stats: { Bruttoinlandsprodukt: 75, Bevölkerung: 25, Bildung: 70, Sicherheit: 65, Gesundheitssystem: 65, Technologie: 68, Klima: 75, Natur: 78, Infrastruktur: 70 }},
{ name: "Südkorea", stats: { Bruttoinlandsprodukt: 92, Bevölkerung: 50, Bildung: 95, Sicherheit: 85, Gesundheitssystem: 90, Technologie: 98, Klima: 70, Natur: 65, Infrastruktur: 95 }},
{ name: "Nordkorea", stats: { Bruttoinlandsprodukt: 55, Bevölkerung: 25, Bildung: 60, Sicherheit: 30, Gesundheitssystem: 50, Technologie: 55, Klima: 65, Natur: 70, Infrastruktur: 50 }},
{ name: "Neuseeland", stats: { Bruttoinlandsprodukt: 88, Bevölkerung: 10, Bildung: 90, Sicherheit: 95, Gesundheitssystem: 92, Technologie: 85, Klima: 80, Natur: 95, Infrastruktur: 88 }},
{ name: "Papua-Neuguinea", stats: { Bruttoinlandsprodukt: 60, Bevölkerung: 30, Bildung: 55, Sicherheit: 45, Gesundheitssystem: 50, Technologie: 45, Klima: 85, Natur: 90, Infrastruktur: 45 }},
{ name: "Fidschi", stats: { Bruttoinlandsprodukt: 65, Bevölkerung: 10, Bildung: 60, Sicherheit: 70, Gesundheitssystem: 60, Technologie: 55, Klima: 85, Natur: 92, Infrastruktur: 55 }},
{ name: "Samoa", stats: { Bruttoinlandsprodukt: 60, Bevölkerung: 5, Bildung: 60, Sicherheit: 75, Gesundheitssystem: 60, Technologie: 50, Klima: 85, Natur: 90, Infrastruktur: 50 }},
{ name: "Tonga", stats: { Bruttoinlandsprodukt: 58, Bevölkerung: 5, Bildung: 58, Sicherheit: 70, Gesundheitssystem: 55, Technologie: 48, Klima: 85, Natur: 88, Infrastruktur: 48 }},
{ name: "Jamaika", stats: { Bruttoinlandsprodukt: 65, Bevölkerung: 30, Bildung: 65, Sicherheit: 45, Gesundheitssystem: 60, Technologie: 55, Klima: 85, Natur: 88, Infrastruktur: 55 }},
{ name: "Kuba", stats: { Bruttoinlandsprodukt: 70, Bevölkerung: 40, Bildung: 80, Sicherheit: 60, Gesundheitssystem: 75, Technologie: 60, Klima: 85, Natur: 80, Infrastruktur: 60 }},
{ name: "Dominikanische Republik", stats: { Bruttoinlandsprodukt: 72, Bevölkerung: 50, Bildung: 65, Sicherheit: 55, Gesundheitssystem: 60, Technologie: 60, Klima: 85, Natur: 85, Infrastruktur: 60 }},
{ name: "Haiti", stats: { Bruttoinlandsprodukt: 50, Bevölkerung: 30, Bildung: 45, Sicherheit: 30, Gesundheitssystem: 40, Technologie: 40, Klima: 85, Natur: 80, Infrastruktur: 35 }},
{ name: "Costa Rica", stats: { Bruttoinlandsprodukt: 78, Bevölkerung: 20, Bildung: 80, Sicherheit: 85, Gesundheitssystem: 80, Technologie: 70, Klima: 85, Natur: 95, Infrastruktur: 75 }},
{ name: "Panama", stats: { Bruttoinlandsprodukt: 80, Bevölkerung: 25, Bildung: 75, Sicherheit: 70, Gesundheitssystem: 72, Technologie: 70, Klima: 85, Natur: 85, Infrastruktur: 78 }},
{ name: "Guatemala", stats: { Bruttoinlandsprodukt: 65, Bevölkerung: 40, Bildung: 55, Sicherheit: 40, Gesundheitssystem: 50, Technologie: 50, Klima: 85, Natur: 80, Infrastruktur: 45 }},
{ name: "Honduras", stats: { Bruttoinlandsprodukt: 60, Bevölkerung: 35, Bildung: 55, Sicherheit: 35, Gesundheitssystem: 48, Technologie: 48, Klima: 85, Natur: 80, Infrastruktur: 45 }},
{ name: "El Salvador", stats: { Bruttoinlandsprodukt: 62, Bevölkerung: 30, Bildung: 58, Sicherheit: 40, Gesundheitssystem: 50, Technologie: 50, Klima: 85, Natur: 78, Infrastruktur: 48 }},
{ name: "Nicaragua", stats: { Bruttoinlandsprodukt: 58, Bevölkerung: 30, Bildung: 55, Sicherheit: 40, Gesundheitssystem: 48, Technologie: 45, Klima: 85, Natur: 80, Infrastruktur: 45 }},
{ name: "Botswana", stats: { Bruttoinlandsprodukt: 70, Bevölkerung: 20, Bildung: 70, Sicherheit: 65, Gesundheitssystem: 65, Technologie: 60, Klima: 80, Natur: 85, Infrastruktur: 65 }},
{ name: "Namibia", stats: { Bruttoinlandsprodukt: 68, Bevölkerung: 15, Bildung: 68, Sicherheit: 70, Gesundheitssystem: 65, Technologie: 60, Klima: 80, Natur: 90, Infrastruktur: 60 }},
{ name: "Sambia", stats: { Bruttoinlandsprodukt: 60, Bevölkerung: 30, Bildung: 55, Sicherheit: 45, Gesundheitssystem: 50, Technologie: 50, Klima: 80, Natur: 85, Infrastruktur: 50 }},
{ name: "Simbabwe", stats: { Bruttoinlandsprodukt: 55, Bevölkerung: 25, Bildung: 50, Sicherheit: 40, Gesundheitssystem: 45, Technologie: 45, Klima: 80, Natur: 85, Infrastruktur: 45 }},
{ name: "Mosambik", stats: { Bruttoinlandsprodukt: 58, Bevölkerung: 35, Bildung: 50, Sicherheit: 40, Gesundheitssystem: 45, Technologie: 45, Klima: 85, Natur: 90, Infrastruktur: 45 }},
{ name: "Madagaskar", stats: { Bruttoinlandsprodukt: 60, Bevölkerung: 30, Bildung: 55, Sicherheit: 45, Gesundheitssystem: 50, Technologie: 48, Klima: 85, Natur: 95, Infrastruktur: 45 }},
{ name: "Tschad", stats: { Bruttoinlandsprodukt: 50, Bevölkerung: 20, Bildung: 45, Sicherheit: 35, Gesundheitssystem: 40, Technologie: 40, Klima: 80, Natur: 75, Infrastruktur: 40 }},
{ name: "Sudan", stats: { Bruttoinlandsprodukt: 55, Bevölkerung: 35, Bildung: 50, Sicherheit: 35, Gesundheitssystem: 45, Technologie: 45, Klima: 80, Natur: 78, Infrastruktur: 45 }},
{ name: "Südsudan", stats: { Bruttoinlandsprodukt: 45, Bevölkerung: 15, Bildung: 40, Sicherheit: 20, Gesundheitssystem: 35, Technologie: 35, Klima: 80, Natur: 75, Infrastruktur: 35 }},
{ name: "Kongo", stats: { Bruttoinlandsprodukt: 55, Bevölkerung: 30, Bildung: 50, Sicherheit: 30, Gesundheitssystem: 45, Technologie: 40, Klima: 85, Natur: 90, Infrastruktur: 40 }},
{ name: "Demokratische Republik Kongo", stats: { Bruttoinlandsprodukt: 50, Bevölkerung: 60, Bildung: 45, Sicherheit: 25, Gesundheitssystem: 40, Technologie: 38, Klima: 85, Natur: 95, Infrastruktur: 35 }},
{ name: "Ruanda", stats: { Bruttoinlandsprodukt: 65, Bevölkerung: 20, Bildung: 65, Sicherheit: 70, Gesundheitssystem: 65, Technologie: 60, Klima: 80, Natur: 85, Infrastruktur: 60 }},
{ name: "Burundi", stats: { Bruttoinlandsprodukt: 50, Bevölkerung: 20, Bildung: 45, Sicherheit: 35, Gesundheitssystem: 40, Technologie: 38, Klima: 80, Natur: 80, Infrastruktur: 38 }},
{ name: "Uganda", stats: { Bruttoinlandsprodukt: 60, Bevölkerung: 40, Bildung: 55, Sicherheit: 45, Gesundheitssystem: 50, Technologie: 45, Klima: 80, Natur: 85, Infrastruktur: 45 }},
{ name: "Tansania", stats: { Bruttoinlandsprodukt: 62, Bevölkerung: 50, Bildung: 55, Sicherheit: 50, Gesundheitssystem: 50, Technologie: 48, Klima: 85, Natur: 90, Infrastruktur: 48 }},
{ name: "Luxemburg", stats: { Bruttoinlandsprodukt: 90, Bevölkerung: 10, Bildung: 90, Sicherheit: 95, Gesundheitssystem: 90, Technologie: 85, Klima: 75, Natur: 70, Infrastruktur: 92 }}



];

const geografieOpponents = {

  europa: {
type: "geografie",
    name: "Europa",
    players: {
      Bruttoinlandsprodukt: { name: "Deutschland", value: 92 },
      Bevölkerung: { name: "Deutschland", value: 70 },
      Bildung: { name: "Finnland", value: 93 },
      Sicherheit: { name: "Schweiz", value: 98 },
      Gesundheitssystem: { name: "Schweiz", value: 97 },
      Technologie: { name: "Deutschland", value: 88 },
      Klima: { name: "Portugal", value: 88 },
      Natur: { name: "Norwegen", value: 92 },
      Infrastruktur: { name: "Niederlande", value: 92 }
    }
  },

  eu: {
type: "geografie",
    name: "Europäische Union",
    players: {
      Bruttoinlandsprodukt: { name: "Deutschland", value: 92 },
      Bevölkerung: { name: "Deutschland", value: 70 },
      Bildung: { name: "Niederlande", value: 90 },
      Sicherheit: { name: "Österreich", value: 92 },
      Gesundheitssystem: { name: "Deutschland", value: 90 },
      Technologie: { name: "Deutschland", value: 88 },
      Klima: { name: "Spanien", value: 88 },
      Natur: { name: "Schweden", value: 85 },
      Infrastruktur: { name: "Niederlande", value: 92 }
    }
  },

  nato: {
type: "geografie",
    name: "NATO",
    players: {
      Bruttoinlandsprodukt: { name: "USA", value: 100 },
      Bevölkerung: { name: "USA", value: 95 },
      Bildung: { name: "Kanada", value: 90 },
      Sicherheit: { name: "Kanada", value: 95 },
      Gesundheitssystem: { name: "Kanada", value: 90 },
      Technologie: { name: "USA", value: 95 },
      Klima: { name: "Kanada", value: 70 },
      Natur: { name: "Kanada", value: 95 },
      Infrastruktur: { name: "USA", value: 90 }
    }
  },

  asien: {
type: "geografie",
    name: "Asien",
    players: {
      Bruttoinlandsprodukt: { name: "China", value: 95 },
      Bevölkerung: { name: "China", value: 100 },
      Bildung: { name: "Japan", value: 95 },
      Sicherheit: { name: "Japan", value: 95 },
      Gesundheitssystem: { name: "Japan", value: 95 },
      Technologie: { name: "Japan", value: 98 },
      Klima: { name: "Thailand", value: 85 },
      Natur: { name: "Indonesien", value: 90 },
      Infrastruktur: { name: "Japan", value: 95 }
    }
  },

  südamerika: {
type: "geografie",
    name: "Südamerika",
    players: {
      Bruttoinlandsprodukt: { name: "Brasilien", value: 75 },
      Bevölkerung: { name: "Brasilien", value: 85 },
      Bildung: { name: "Chile", value: 78 },
      Sicherheit: { name: "Uruguay", value: 75 },
      Gesundheitssystem: { name: "Chile", value: 75 },
      Technologie: { name: "Brasilien", value: 60 },
      Klima: { name: "Brasilien", value: 90 },
      Natur: { name: "Brasilien", value: 100 },
      Infrastruktur: { name: "Chile", value: 76 }
    }
  },

  australienKontinent: {
type: "geografie",
    name: "Australien (Kontinent)",
    players: {
      Bruttoinlandsprodukt: { name: "Australien", value: 88 },
      Bevölkerung: { name: "Australien", value: 30 },
      Bildung: { name: "Australien", value: 85 },
      Sicherheit: { name: "Australien", value: 90 },
      Gesundheitssystem: { name: "Australien", value: 92 },
      Technologie: { name: "Australien", value: 80 },
      Klima: { name: "Australien", value: 85 },
      Natur: { name: "Australien", value: 95 },
      Infrastruktur: { name: "Australien", value: 88 }
    }
  },

  afrikaKontinent: {
type: "geografie",
    name: "Afrika (Kontinent)",
    players: {
      Bruttoinlandsprodukt: { name: "Südafrika", value: 78 },
      Bevölkerung: { name: "Nigeria", value: 90 },
      Bildung: { name: "Südafrika", value: 70 },
      Sicherheit: { name: "Botswana", value: 65 },
      Gesundheitssystem: { name: "Südafrika", value: 60 },
      Technologie: { name: "Südafrika", value: 68 },
      Klima: { name: "Kenia", value: 80 },
      Natur: { name: "Kongo", value: 90 },
      Infrastruktur: { name: "Südafrika", value: 70 }
    }
  },

  nordamerika: {
type: "geografie",
    name: "Nordamerika",
    players: {
      Bruttoinlandsprodukt: { name: "USA", value: 100 },
      Bevölkerung: { name: "USA", value: 95 },
      Bildung: { name: "Kanada", value: 90 },
      Sicherheit: { name: "Kanada", value: 95 },
      Gesundheitssystem: { name: "Kanada", value: 90 },
      Technologie: { name: "USA", value: 95 },
      Klima: { name: "Kanada", value: 70 },
      Natur: { name: "Kanada", value: 95 },
      Infrastruktur: { name: "USA", value: 90 }
    }
  },

  inseln: {
type: "geografie",
    name: "Inseln der Welt",
    players: {
      Bruttoinlandsprodukt: { name: "Singapur", value: 92 },
      Bevölkerung: { name: "Indonesien", value: 90 },
      Bildung: { name: "Japan", value: 95 },
      Sicherheit: { name: "Japan", value: 95 },
      Gesundheitssystem: { name: "Japan", value: 95 },
      Technologie: { name: "Japan", value: 98 },
      Klima: { name: "Malediven", value: 90 },
      Natur: { name: "Indonesien", value: 90 },
      Infrastruktur: { name: "Singapur", value: 95 }
    }
  },

skandinavien: {
  type: "geografie",
  name: "Skandinavien",
  players: {
    Bruttoinlandsprodukt: { name: "Norwegen", value: 91 },
    Bevölkerung: { name: "Schweden", value: 30 },
    Bildung: { name: "Finnland", value: 93 },
    Sicherheit: { name: "Norwegen", value: 96 },
    Gesundheitssystem: { name: "Norwegen", value: 93 },
    Technologie: { name: "Schweden", value: 88 },
    Klima: { name: "Norwegen", value: 68 },
    Natur: { name: "Norwegen", value: 92 },
    Infrastruktur: { name: "Dänemark", value: 90 }
  }
},

arabischeHalbinsel: {
  type: "geografie",
  name: "Arabische Halbinsel",
  players: {
    Bruttoinlandsprodukt: { name: "Saudi-Arabien", value: 88 },
    Bevölkerung: { name: "Saudi-Arabien", value: 60 },
    Bildung: { name: "VAE", value: 78 },
    Sicherheit: { name: "Oman", value: 78 },
    Gesundheitssystem: { name: "Katar", value: 82 },
    Technologie: { name: "VAE", value: 85 },
    Klima: { name: "Saudi-Arabien", value: 85 },
    Natur: { name: "Oman", value: 70 },
    Infrastruktur: { name: "Katar", value: 90 }
  }
},

balkan: {
  type: "geografie",
  name: "Balkan",
  players: {
    Bruttoinlandsprodukt: { name: "Griechenland", value: 78 },
    Bevölkerung: { name: "Rumänien", value: 45 },
    Bildung: { name: "Slowenien", value: 82 },
    Sicherheit: { name: "Kroatien", value: 80 },
    Gesundheitssystem: { name: "Slowenien", value: 82 },
    Technologie: { name: "Serbien", value: 68 },
    Klima: { name: "Griechenland", value: 85 },
    Natur: { name: "Montenegro", value: 95 },
    Infrastruktur: { name: "Kroatien", value: 78 }
  }
},

benelux: {
  type: "geografie",
  name: "Benelux",
  players: {
    Bruttoinlandsprodukt: { name: "Niederlande", value: 89 },
    Bevölkerung: { name: "Belgien", value: 42 },
    Bildung: { name: "Luxemburg", value: 90 },
    Sicherheit: { name: "Luxemburg", value: 95 },
    Gesundheitssystem: { name: "Belgien", value: 86 },
    Technologie: { name: "Niederlande", value: 86 },
    Klima: { name: "Belgien", value: 76 },
    Natur: { name: "Luxemburg", value: 70 },
    Infrastruktur: { name: "Niederlande", value: 92 }
  }
},

osteuropa: {
  type: "geografie",
  name: "Osteuropa",
  players: {
    Bruttoinlandsprodukt: { name: "Polen", value: 82 },
    Bevölkerung: { name: "Polen", value: 55 },
    Bildung: { name: "Tschechien", value: 82 },
    Sicherheit: { name: "Estland", value: 82 },
    Gesundheitssystem: { name: "Tschechien", value: 80 },
    Technologie: { name: "Estland", value: 80 },
    Klima: { name: "Litauen", value: 70 },
    Natur: { name: "Slowakei", value: 72 },
    Infrastruktur: { name: "Polen", value: 78 }
  }
},

naherOsten: {
  type: "geografie",
  name: "Naher Osten",
  players: {
    Bruttoinlandsprodukt: { name: "Saudi-Arabien", value: 88 },
    Bevölkerung: { name: "Türkei", value: 80 },
    Bildung: { name: "Israel", value: 90 },
    Sicherheit: { name: "Israel", value: 80 },
    Gesundheitssystem: { name: "Israel", value: 82 },
    Technologie: { name: "Israel", value: 92 },
    Klima: { name: "Jordanien", value: 80 },
    Natur: { name: "Libanon", value: 70 },
    Infrastruktur: { name: "VAE", value: 90 }
  }
},

indischerSubkontinent: {
  type: "geografie",
  name: "Indischer Subkontinent",
  players: {
    Bruttoinlandsprodukt: { name: "Indien", value: 85 },
    Bevölkerung: { name: "Indien", value: 98 },
    Bildung: { name: "Sri Lanka", value: 70 },
    Sicherheit: { name: "Bhutan", value: 70 },
    Gesundheitssystem: { name: "Sri Lanka", value: 65 },
    Technologie: { name: "Indien", value: 75 },
    Klima: { name: "Bangladesch", value: 80 },
    Natur: { name: "Nepal", value: 90 },
    Infrastruktur: { name: "Indien", value: 60 }
  }
},

karibik: {
  type: "geografie",
  name: "Karibik",
  players: {
    Bruttoinlandsprodukt: { name: "Puerto Rico", value: 80 },
    Bevölkerung: { name: "Kuba", value: 40 },
    Bildung: { name: "Kuba", value: 80 },
    Sicherheit: { name: "Barbados", value: 90 },
    Gesundheitssystem: { name: "Kuba", value: 75 },
    Technologie: { name: "Puerto Rico", value: 75 },
    Klima: { name: "Dominikanische Republik", value: 85 },
    Natur: { name: "Jamaika", value: 88 },
    Infrastruktur: { name: "Puerto Rico", value: 85 }
  }
},

ozeanien: {
  type: "geografie",
  name: "Ozeanien",
  players: {
    Bruttoinlandsprodukt: { name: "Australien", value: 88 },
    Bevölkerung: { name: "Australien", value: 30 },
    Bildung: { name: "Neuseeland", value: 90 },
    Sicherheit: { name: "Neuseeland", value: 95 },
    Gesundheitssystem: { name: "Neuseeland", value: 92 },
    Technologie: { name: "Australien", value: 80 },
    Klima: { name: "Fidschi", value: 85 },
    Natur: { name: "Neuseeland", value: 95 },
    Infrastruktur: { name: "Australien", value: 88 }
  }
},

baltikum: {
  type: "geografie",
  name: "Baltikum",
  players: {
    Bruttoinlandsprodukt: { name: "Estland", value: 80 },
    Bevölkerung: { name: "Litauen", value: 25 },
    Bildung: { name: "Estland", value: 84 },
    Sicherheit: { name: "Estland", value: 82 },
    Gesundheitssystem: { name: "Litauen", value: 78 },
    Technologie: { name: "Estland", value: 80 },
    Klima: { name: "Lettland", value: 70 },
    Natur: { name: "Lettland", value: 76 },
    Infrastruktur: { name: "Estland", value: 80 }
  }
},

mitteleuropa: {
  type: "geografie",
  name: "Mitteleuropa",
  players: {
    Bruttoinlandsprodukt: { name: "Deutschland", value: 92 },
    Bevölkerung: { name: "Deutschland", value: 70 },
    Bildung: { name: "Österreich", value: 90 },
    Sicherheit: { name: "Schweiz", value: 98 },
    Gesundheitssystem: { name: "Schweiz", value: 97 },
    Technologie: { name: "Deutschland", value: 88 },
    Klima: { name: "Österreich", value: 82 },
    Natur: { name: "Schweiz", value: 90 },
    Infrastruktur: { name: "Deutschland", value: 90 }
  }
},

westafrika: {
  type: "geografie",
  name: "Westafrika",
  players: {
    Bruttoinlandsprodukt: { name: "Nigeria", value: 72 },
    Bevölkerung: { name: "Nigeria", value: 90 },
    Bildung: { name: "Ghana", value: 60 },
    Sicherheit: { name: "Ghana", value: 55 },
    Gesundheitssystem: { name: "Senegal", value: 56 },
    Technologie: { name: "Nigeria", value: 60 },
    Klima: { name: "Ghana", value: 80 },
    Natur: { name: "Sierra Leone", value: 80 },
    Infrastruktur: { name: "Nigeria", value: 55 }
  }
},

ostafrika: {
  type: "geografie",
  name: "Ostafrika",
  players: {
    Bruttoinlandsprodukt: { name: "Kenia", value: 68 },
    Bevölkerung: { name: "Äthiopien", value: 80 },
    Bildung: { name: "Kenia", value: 60 },
    Sicherheit: { name: "Tansania", value: 50 },
    Gesundheitssystem: { name: "Kenia", value: 55 },
    Technologie: { name: "Kenia", value: 58 },
    Klima: { name: "Tansania", value: 85 },
    Natur: { name: "Uganda", value: 85 },
    Infrastruktur: { name: "Kenia", value: 55 }
  }
},

suedostasien: {
  type: "geografie",
  name: "Südostasien",
  players: {
    Bruttoinlandsprodukt: { name: "Singapur", value: 92 },
    Bevölkerung: { name: "Indonesien", value: 90 },
    Bildung: { name: "Singapur", value: 95 },
    Sicherheit: { name: "Singapur", value: 95 },
    Gesundheitssystem: { name: "Singapur", value: 90 },
    Technologie: { name: "Singapur", value: 95 },
    Klima: { name: "Thailand", value: 85 },
    Natur: { name: "Indonesien", value: 90 },
    Infrastruktur: { name: "Singapur", value: 95 }
  }
},

mittelamerika: {
  type: "geografie",
  name: "Mittelamerika",
  players: {
    Bruttoinlandsprodukt: { name: "Costa Rica", value: 78 },
    Bevölkerung: { name: "Guatemala", value: 40 },
    Bildung: { name: "Costa Rica", value: 80 },
    Sicherheit: { name: "Costa Rica", value: 85 },
    Gesundheitssystem: { name: "Costa Rica", value: 80 },
    Technologie: { name: "Panama", value: 70 },
    Klima: { name: "Costa Rica", value: 85 },
    Natur: { name: "Costa Rica", value: 95 },
    Infrastruktur: { name: "Panama", value: 78 }
  }
},

suedpazifik: {
  type: "geografie",
  name: "Südpazifik",
  players: {
    Bruttoinlandsprodukt: { name: "Neuseeland", value: 88 },
    Bevölkerung: { name: "Fidschi", value: 10 },
    Bildung: { name: "Neuseeland", value: 90 },
    Sicherheit: { name: "Neuseeland", value: 95 },
    Gesundheitssystem: { name: "Neuseeland", value: 92 },
    Technologie: { name: "Neuseeland", value: 85 },
    Klima: { name: "Fidschi", value: 85 },
    Natur: { name: "Neuseeland", value: 95 },
    Infrastruktur: { name: "Neuseeland", value: 88 }
  }
},

kleinasien: {
  type: "geografie",
  name: "Kleinasien",
  players: {
    Bruttoinlandsprodukt: { name: "Türkei", value: 80 },
    Bevölkerung: { name: "Türkei", value: 80 },
    Bildung: { name: "Türkei", value: 72 },
    Sicherheit: { name: "Türkei", value: 65 },
    Gesundheitssystem: { name: "Türkei", value: 70 },
    Technologie: { name: "Türkei", value: 72 },
    Klima: { name: "Türkei", value: 80 },
    Natur: { name: "Türkei", value: 78 },
    Infrastruktur: { name: "Türkei", value: 74 }
  }
},

iberischeHalbinsel: {
  type: "geografie",
  name: "Iberische Halbinsel",
  players: {
    Bruttoinlandsprodukt: { name: "Spanien", value: 86 },
    Bevölkerung: { name: "Spanien", value: 58 },
    Bildung: { name: "Portugal", value: 78 },
    Sicherheit: { name: "Portugal", value: 82 },
    Gesundheitssystem: { name: "Spanien", value: 83 },
    Technologie: { name: "Spanien", value: 78 },
    Klima: { name: "Portugal", value: 88 },
    Natur: { name: "Portugal", value: 82 },
    Infrastruktur: { name: "Spanien", value: 84 }
  }
}
};

const animalOpponents = {


/* Länder für Tiere – NEU & konsistent mit Spieler-Tieren */
  australien: {
    type: "tiere",
    name: "Australien",
    best: {
      Geschwindigkeit: "Känguru",          // 70
      Gewicht: "Salzwasserkrokodil",       // 100
      Gefährlichkeit: "Salzwasserkrokodil",// 90
      Intelligenz: "Kakadu",               // 60
      Ausdauer: "Salzwasserkrokodil",      // 80
      Sprungkraft: "Känguru",              // 100
      Stärke: "Salzwasserkrokodil",        // 100
      Reaktionszeit: "Falke Wüste",        // 100
      Wendigkeit: "Kakadu"                 // 85
    },
    stats: {
      Geschwindigkeit: 70,
      Gewicht: 100,
      Gefährlichkeit: 90,
      Intelligenz: 60,
      Ausdauer: 80,
      Sprungkraft: 100,
      Stärke: 100,
      Reaktionszeit: 100,
      Wendigkeit: 85
    }
  },

  sahara: {
    type: "tiere",
    name: "Sahara",
    best: {
      Geschwindigkeit: "Gazelle",
      Gewicht: "Kamel",
      Gefährlichkeit: "Kobra",
      Intelligenz: "Schakal",
      Ausdauer: "Dromedar",
      Sprungkraft: "Gazelle",
      Stärke: "Kamel",
      Reaktionszeit: "Falke",
      Wendigkeit: "Serval"
    },
    stats: {
      Geschwindigkeit: 90,
      Gewicht: 100,
      Gefährlichkeit: 90,
      Intelligenz: 55,
      Ausdauer: 95,
      Sprungkraft: 65,
      Stärke: 75,
      Reaktionszeit: 100,
      Wendigkeit: 85
    }
  },

  amazonas: {
    type: "tiere",
    name: "Amazonas",
    best: {
      Geschwindigkeit: "Jaguar",
      Gewicht: "Anakonda",
      Gefährlichkeit: "Anakonda",
      Intelligenz: "Ara",
      Ausdauer: "Anakonda",
      Sprungkraft: "Puma",
      Stärke: "Jaguar",
      Reaktionszeit: "Falke",
      Wendigkeit: "Ozelot"
    },
    stats: {
      Geschwindigkeit: 80,
      Gewicht: 80,
      Gefährlichkeit: 95,
      Intelligenz: 65,
      Ausdauer: 85,
      Sprungkraft: 85,
      Stärke: 85,
      Reaktionszeit: 100,
      Wendigkeit: 80
    }
  },

  alpen: {
    type: "tiere",
    name: "Alpen",
    best: {
      Geschwindigkeit: "Luchs",
      Gewicht: "Bär",
      Gefährlichkeit: "Bär",
      Intelligenz: "Fuchs",
      Ausdauer: "Bergziege",
      Sprungkraft: "Bergziege",
      Stärke: "Bär",
      Reaktionszeit: "Falke",
      Wendigkeit: "Luchs"
    },
    stats: {
      Geschwindigkeit: 65,
      Gewicht: 100,
      Gefährlichkeit: 90,
      Intelligenz: 60,
      Ausdauer: 75,
      Sprungkraft: 55,
      Stärke: 100,
      Reaktionszeit: 100,
      Wendigkeit: 80
    }
  },

  mongolei: {
    type: "tiere",
    name: "Mongolei",
    best: {
      Geschwindigkeit: "Pferd",
      Gewicht: "Kamel",
      Gefährlichkeit: "Wolf",
      Intelligenz: "Wolf",
      Ausdauer: "Kamel",
      Sprungkraft: "Pferd",
      Stärke: "Kamel",
      Reaktionszeit: "Falke",
      Wendigkeit: "Wolf"
    },
    stats: {
      Geschwindigkeit: 75,
      Gewicht: 100,
      Gefährlichkeit: 70,
      Intelligenz: 75,
      Ausdauer: 100,
      Sprungkraft: 60,
      Stärke: 75,
      Reaktionszeit: 100,
      Wendigkeit: 70
    }
  },

  himalaya: {
    type: "tiere",
    name: "Himalaya",
    best: {
      Geschwindigkeit: "Schneeleopard",
      Gewicht: "Yak", // Yak nicht in Liste → ersetzen durch "Giraffe"? Nein. → stärkstes Bergtier = "Bär"
      Gefährlichkeit: "Schneeleopard",
      Intelligenz: "Schneeleopard",
      Ausdauer: "Bergziege",
      Sprungkraft: "Schneeleopard",
      Stärke: "Bär",
      Reaktionszeit: "Falke",
      Wendigkeit: "Schneeleopard"
    },
    stats: {
      Geschwindigkeit: 70,
      Gewicht: 100,
      Gefährlichkeit: 85,
      Intelligenz: 60,
      Ausdauer: 75,
      Sprungkraft: 90,
      Stärke: 100,
      Reaktionszeit: 100,
      Wendigkeit: 70
    }
  },

  pazifikInseln: {
    type: "tiere",
    name: "Pazifik-Inseln",
    best: {
      Geschwindigkeit: "Kakadu",
      Gewicht: "Walross",
      Gefährlichkeit: "Salzwasserkrokodil",
      Intelligenz: "Kakadu",
      Ausdauer: "Salzwasserkrokodil",
      Sprungkraft: "Känguru",
      Stärke: "Salzwasserkrokodil",
      Reaktionszeit: "Falke Wüste",
      Wendigkeit: "Kakadu"
    },
    stats: {
      Geschwindigkeit: 55,
      Gewicht: 100,
      Gefährlichkeit: 90,
      Intelligenz: 60,
      Ausdauer: 80,
      Sprungkraft: 100,
      Stärke: 100,
      Reaktionszeit: 100,
      Wendigkeit: 85
    }
  },

  mittelmeer: {
    type: "tiere",
    name: "Mittelmeer",
    best: {
      Geschwindigkeit: "Schwertfisch",
      Gewicht: "Walross",
      Gefährlichkeit: "Weißer Hai",
      Intelligenz: "Kormoran",
      Ausdauer: "Schwertfisch",
      Sprungkraft: "Kormoran",
      Stärke: "Weißer Hai",
      Reaktionszeit: "Falke",
      Wendigkeit: "Kormoran"
    },
    stats: {
      Geschwindigkeit: 70,
      Gewicht: 100,
      Gefährlichkeit: 100,
      Intelligenz: 45,
      Ausdauer: 85,
      Sprungkraft: 0,
      Stärke: 90,
      Reaktionszeit: 100,
      Wendigkeit: 65
    }
  },

  skandinavien: {
    type: "tiere",
    name: "Skandinavien",
    best: {
      Geschwindigkeit: "Schnee-Wolf",
      Gewicht: "Eisbär",
      Gefährlichkeit: "Eisbär",
      Intelligenz: "Schnee-Eule",
      Ausdauer: "Schnee-Wolf",
      Sprungkraft: "Schnee-Wolf",
      Stärke: "Eisbär",
      Reaktionszeit: "Falke",
      Wendigkeit: "Schnee-Eule"
    },
    stats: {
      Geschwindigkeit: 60,
      Gewicht: 100,
      Gefährlichkeit: 90,
      Intelligenz: 50,
      Ausdauer: 85,
      Sprungkraft: 55,
      Stärke: 100,
      Reaktionszeit: 100,
      Wendigkeit: 85
    }
  },

  indonesien: {
    type: "tiere",
    name: "Indonesien",
    best: {
      Geschwindigkeit: "Tiger",
      Gewicht: "Komodowaran",
      Gefährlichkeit: "Komodowaran",
      Intelligenz: "Ara",
      Ausdauer: "Tiger",
      Sprungkraft: "Tiger",
      Stärke: "Tiger",
      Reaktionszeit: "Falke",
      Wendigkeit: "Leopard"
    },
    stats: {
      Geschwindigkeit: 65,
      Gewicht: 80,
      Gefährlichkeit: 90,
      Intelligenz: 65,
      Ausdauer: 70,
      Sprungkraft: 80,
      Stärke: 95,
      Reaktionszeit: 100,
      Wendigkeit: 75
    }
  },

  südafrika: {
    type: "tiere",
    name: "Südafrika",
    best: {
      Geschwindigkeit: "Gepard",
      Gewicht: "Elefant",
      Gefährlichkeit: "Löwe",
      Intelligenz: "Schimpanse",
      Ausdauer: "Hyänenhund",
      Sprungkraft: "Gazelle",
      Stärke: "Gorilla",
      Reaktionszeit: "Falke",
      Wendigkeit: "Serval"
    },
    stats: {
      Geschwindigkeit: 100,
      Gewicht: 100,
      Gefährlichkeit: 95,
      Intelligenz: 100,
      Ausdauer: 90,
      Sprungkraft: 65,
      Stärke: 100,
      Reaktionszeit: 100,
      Wendigkeit: 85
    }
  },
  afrika: {
    type: "tiere",
    name: "Afrika",
    best: {
      Geschwindigkeit: "Gepard",           // 100
      Gewicht: "Elefant",                  // 100
      Gefährlichkeit: "Krokodil",          // 95
      Intelligenz: "Schimpanse",           // 100
      Ausdauer: "Kamel",                   // 100
      Sprungkraft: "Serval",               // 85
      Stärke: "Gorilla",                   // 100
      Reaktionszeit: "Falke",              // 100
      Wendigkeit: "Serval"                 // 85
    },
    stats: {
      Geschwindigkeit: 100,
      Gewicht: 100,
      Gefährlichkeit: 95,
      Intelligenz: 100,
      Ausdauer: 100,
      Sprungkraft: 85,
      Stärke: 100,
      Reaktionszeit: 100,
      Wendigkeit: 85
    }
  },

  südamerika: {
    type: "tiere",
    name: "Südamerika",
    best: {
      Geschwindigkeit: "Jaguar",           // 80
      Gewicht: "Anakonda",                 // 80
      Gefährlichkeit: "Anakonda",          // 95
      Intelligenz: "Ara",                  // 65
      Ausdauer: "Anakonda",                // 85
      Sprungkraft: "Jaguar",               // 90
      Stärke: "Jaguar",                    // 85
      Reaktionszeit: "Falke",              // 100
      Wendigkeit: "Ozelot"                 // 80
    },
    stats: {
      Geschwindigkeit: 80,
      Gewicht: 80,
      Gefährlichkeit: 95,
      Intelligenz: 65,
      Ausdauer: 85,
      Sprungkraft: 90,
      Stärke: 85,
      Reaktionszeit: 100,
      Wendigkeit: 80
    }
  },

  europaTiere: {
    type: "tiere",
    name: "Europa",
    best: {
      Geschwindigkeit: "Wolf",             // 55
      Gewicht: "Bär",                      // 100
      Gefährlichkeit: "Bär",               // 90
      Intelligenz: "Fuchs",                // 60
      Ausdauer: "Wolf",                    // 85
      Sprungkraft: "Luchs",                // 80
      Stärke: "Bär",                       // 100
      Reaktionszeit: "Falke",              // 100
      Wendigkeit: "Luchs"                  // 80
    },
    stats: {
      Geschwindigkeit: 55,
      Gewicht: 100,
      Gefährlichkeit: 90,
      Intelligenz: 60,
      Ausdauer: 85,
      Sprungkraft: 80,
      Stärke: 100,
      Reaktionszeit: 100,
      Wendigkeit: 80
    }
  },

  nordamerikaTiere: {
    type: "tiere",
    name: "Nordamerika",
    best: {
      Geschwindigkeit: "Puma",             // 72
      Gewicht: "Grizzly",                  // 100
      Gefährlichkeit: "Grizzly",           // 95
      Intelligenz: "Waschbär",             // 70
      Ausdauer: "Schnee-Wolf",             // 85
      Sprungkraft: "Berglöwe",             // 90
      Stärke: "Grizzly",                   // 100
      Reaktionszeit: "Falke",              // 100
      Wendigkeit: "Luchs Kanada"           // 80
    },
    stats: {
      Geschwindigkeit: 72,
      Gewicht: 100,
      Gefährlichkeit: 95,
      Intelligenz: 70,
      Ausdauer: 85,
      Sprungkraft: 90,
      Stärke: 100,
      Reaktionszeit: 100,
      Wendigkeit: 80
    }
  },

  mittelamerikaTiere: {
    type: "tiere",
    name: "Mittelamerika",
    best: {
      Geschwindigkeit: "Ozelot",           // 60
      Gewicht: "Tapir",                    // 70
      Gefährlichkeit: "Jaguar",            // 85
      Intelligenz: "Ara",                  // 65
      Ausdauer: "Tapir",                   // 70
      Sprungkraft: "Puma",                 // 85
      Stärke: "Jaguar",                    // 85
      Reaktionszeit: "Falke",              // 100
      Wendigkeit: "Ozelot"                 // 80
    },
    stats: {
      Geschwindigkeit: 60,
      Gewicht: 70,
      Gefährlichkeit: 85,
      Intelligenz: 65,
      Ausdauer: 70,
      Sprungkraft: 85,
      Stärke: 85,
      Reaktionszeit: 100,
      Wendigkeit: 80
    }
  },

  nordafrikaTiere: {
    type: "tiere",
    name: "Nordafrika",
    best: {
      Geschwindigkeit: "Gazelle",          // 90
      Gewicht: "Kamel",                    // 100
      Gefährlichkeit: "Krokodil",          // 95
      Intelligenz: "Schakal",              // 55
      Ausdauer: "Dromedar",                // 95
      Sprungkraft: "Gazelle",              // 65
      Stärke: "Kamel",                     // 75
      Reaktionszeit: "Falke",              // 100
      Wendigkeit: "Serval"                 // 85
    },
    stats: {
      Geschwindigkeit: 90,
      Gewicht: 100,
      Gefährlichkeit: 95,
      Intelligenz: 55,
      Ausdauer: 95,
      Sprungkraft: 65,
      Stärke: 75,
      Reaktionszeit: 100,
      Wendigkeit: 85
    }
  },

  westafrikaTiere: {
    type: "tiere",
    name: "Westafrika",
    best: {
      Geschwindigkeit: "Gepard",           // 100
      Gewicht: "Elefant",                  // 100
      Gefährlichkeit: "Hyäne",             // 80
      Intelligenz: "Schimpanse",           // 100
      Ausdauer: "Hyänenhund",              // 90
      Sprungkraft: "Gazelle",              // 65
      Stärke: "Gorilla",                   // 100
      Reaktionszeit: "Falke",              // 100
      Wendigkeit: "Serval"                 // 85
    },
    stats: {
      Geschwindigkeit: 100,
      Gewicht: 100,
      Gefährlichkeit: 80,
      Intelligenz: 100,
      Ausdauer: 90,
      Sprungkraft: 65,
      Stärke: 100,
      Reaktionszeit: 100,
      Wendigkeit: 85
    }
  },

  ostafrikaTiere: {
    type: "tiere",
    name: "Ostafrika",
    best: {
      Geschwindigkeit: "Gepard",           // 100
      Gewicht: "Elefant",                  // 100
      Gefährlichkeit: "Hyäne",             // 80
      Intelligenz: "Schimpanse",           // 100
      Ausdauer: "Hyänenhund",              // 90
      Sprungkraft: "Gazelle",              // 65
      Stärke: "Gorilla",                   // 100
      Reaktionszeit: "Falke",              // 100
      Wendigkeit: "Serval"                 // 85
    },
    stats: {
      Geschwindigkeit: 100,
      Gewicht: 100,
      Gefährlichkeit: 80,
      Intelligenz: 100,
      Ausdauer: 90,
      Sprungkraft: 65,
      Stärke: 100,
      Reaktionszeit: 100,
      Wendigkeit: 85
    }
  },

  ozeanienTiere: {
    type: "tiere",
    name: "Ozeanien",
    best: {
      Geschwindigkeit: "Känguru",          // 70
      Gewicht: "Walross",                  // 100
      Gefährlichkeit: "Salzwasserkrokodil",// 90
      Intelligenz: "Kakadu",               // 60
      Ausdauer: "Salzwasserkrokodil",      // 80
      Sprungkraft: "Känguru",              // 100
      Stärke: "Salzwasserkrokodil",        // 100
      Reaktionszeit: "Falke Wüste",        // 100
      Wendigkeit: "Kakadu"                 // 85
    },
    stats: {
      Geschwindigkeit: 70,
      Gewicht: 100,
      Gefährlichkeit: 90,
      Intelligenz: 60,
      Ausdauer: 80,
      Sprungkraft: 100,
      Stärke: 100,
      Reaktionszeit: 100,
      Wendigkeit: 85
    }
  },

  suedostasienTiere: {
    type: "tiere",
    name: "Südostasien",
    best: {
      Geschwindigkeit: "Tiger",            // 65
      Gewicht: "Elefant",                  // 100
      Gefährlichkeit: "Tiger",             // 95
      Intelligenz: "Ara",                  // 65
      Ausdauer: "Tiger",                   // 70
      Sprungkraft: "Tiger",                // 80
      Stärke: "Tiger",                     // 95
      Reaktionszeit: "Falke",              // 100
      Wendigkeit: "Leopard"                // 75
    },
    stats: {
      Geschwindigkeit: 65,
      Gewicht: 100,
      Gefährlichkeit: 95,
      Intelligenz: 65,
      Ausdauer: 70,
      Sprungkraft: 80,
      Stärke: 95,
      Reaktionszeit: 100,
      Wendigkeit: 75
    }
  },

  indienTiere: {
    type: "tiere",
    name: "Indien",
    best: {
      Geschwindigkeit: "Tiger",            // 65
      Gewicht: "Elefant",                  // 100
      Gefährlichkeit: "Tiger",             // 95
      Intelligenz: "Ara",                  // 65
      Ausdauer: "Tiger",                   // 70
      Sprungkraft: "Tiger",                // 80
      Stärke: "Tiger",                     // 95
      Reaktionszeit: "Falke",              // 100
      Wendigkeit: "Leopard"                // 75
    },
    stats: {
      Geschwindigkeit: 65,
      Gewicht: 100,
      Gefährlichkeit: 95,
      Intelligenz: 65,
      Ausdauer: 70,
      Sprungkraft: 80,
      Stärke: 95,
      Reaktionszeit: 100,
      Wendigkeit: 75
    }
  },

  arktisTiere: {
    type: "tiere",
    name: "Arktis",
    best: {
      Geschwindigkeit: "Eisbär",           // 55
      Gewicht: "Eisbär",                   // 100
      Gefährlichkeit: "Eisbär",            // 90
      Intelligenz: "Schnee-Eule",          // 50
      Ausdauer: "Eisbär",                  // 80
      Sprungkraft: "Eisbär",               // 40
      Stärke: "Eisbär",                    // 100
      Reaktionszeit: "Falke",              // 100
      Wendigkeit: "Schnee-Eule"            // 85
    },
    stats: {
      Geschwindigkeit: 55,
      Gewicht: 100,
      Gefährlichkeit: 90,
      Intelligenz: 50,
      Ausdauer: 80,
      Sprungkraft: 40,
      Stärke: 100,
      Reaktionszeit: 100,
      Wendigkeit: 85
    }
  },

  antarktisTiere: {
    type: "tiere",
    name: "Antarktis",
    best: {
      Geschwindigkeit: "Königspinguin",    // 25
      Gewicht: "Walross",                  // 100
      Gefährlichkeit: "Walross",           // 50
      Intelligenz: "Königspinguin",        // 40
      Ausdauer: "Königspinguin",           // 60
      Sprungkraft: "Königspinguin",        // 5
      Stärke: "Walross",                   // 90
      Reaktionszeit: "Königspinguin",      // 35
      Wendigkeit: "Königspinguin"          // 25
    },
    stats: {
      Geschwindigkeit: 25,
      Gewicht: 100,
      Gefährlichkeit: 50,
      Intelligenz: 40,
      Ausdauer: 60,
      Sprungkraft: 5,
      Stärke: 90,
      Reaktionszeit: 35,
      Wendigkeit: 25
    }
  },

  mitteleuropaTiere: {
    type: "tiere",
    name: "Mitteleuropa",
    best: {
      Geschwindigkeit: "Wolf",             // 55
      Gewicht: "Bär",                      // 100
      Gefährlichkeit: "Bär",               // 90
      Intelligenz: "Fuchs",                // 60
      Ausdauer: "Wolf",                    // 85
      Sprungkraft: "Luchs",                // 80
      Stärke: "Bär",                       // 100
      Reaktionszeit: "Falke",              // 100
      Wendigkeit: "Luchs"                  // 80
    },
    stats: {
      Geschwindigkeit: 55,
      Gewicht: 100,
      Gefährlichkeit: 90,
      Intelligenz: 60,
      Ausdauer: 85,
      Sprungkraft: 80,
      Stärke: 100,
      Reaktionszeit: 100,
      Wendigkeit: 80
    }
  },

  naherOstenTiere: {
    type: "tiere",
    name: "Naher Osten",
    best: {
      Geschwindigkeit: "Gazelle",          // 90
      Gewicht: "Kamel",                    // 100
      Gefährlichkeit: "Hyäne",             // 80
      Intelligenz: "Schakal",              // 55
      Ausdauer: "Dromedar",                // 95
      Sprungkraft: "Gazelle",              // 65
      Stärke: "Kamel",                     // 75
      Reaktionszeit: "Falke",              // 100
      Wendigkeit: "Serval"                 // 85
    },
    stats: {
      Geschwindigkeit: 90,
      Gewicht: 100,
      Gefährlichkeit: 80,
      Intelligenz: 55,
      Ausdauer: 95,
      Sprungkraft: 65,
      Stärke: 75,
      Reaktionszeit: 100,
      Wendigkeit: 85
    }
  },

  karibikTiere: {
    type: "tiere",
    name: "Karibik",
    best: {
      Geschwindigkeit: "Ozelot",           // 60
      Gewicht: "Tapir",                    // 70
      Gefährlichkeit: "Anakonda",          // 95
      Intelligenz: "Ara",                  // 65
      Ausdauer: "Anakonda",                // 85
      Sprungkraft: "Puma",                 // 85
      Stärke: "Jaguar",                    // 85
      Reaktionszeit: "Falke",              // 100
      Wendigkeit: "Ozelot"                 // 80
    },
    stats: {
      Geschwindigkeit: 60,
      Gewicht: 70,
      Gefährlichkeit: 95,
      Intelligenz: 65,
      Ausdauer: 85,
      Sprungkraft: 85,
      Stärke: 85,
      Reaktionszeit: 100,
      Wendigkeit: 80
    }
  },

  balkanTiere: {
    type: "tiere",
    name: "Balkan",
    best: {
      Geschwindigkeit: "Wolf",             // 55
      Gewicht: "Bär",                      // 100
      Gefährlichkeit: "Bär",               // 90
      Intelligenz: "Fuchs",                // 60
      Ausdauer: "Wolf",                    // 85
      Sprungkraft: "Luchs",                // 80
      Stärke: "Bär",                       // 100
      Reaktionszeit: "Falke",              // 100
      Wendigkeit: "Luchs"                  // 80
    },
    stats: {
      Geschwindigkeit: 55,
      Gewicht: 100,
      Gefährlichkeit: 90,
      Intelligenz: 60,
      Ausdauer: 85,
      Sprungkraft: 80,
      Stärke: 100,
      Reaktionszeit: 100,
      Wendigkeit: 80
    }
  }
};



/* --- Zentrales Gegner-Objekt --- */
const opponentTeams = {
  ...footballOpponents,
  ...animalOpponents,
  ...geografieOpponents,
  ...berufeOpponents
};

/* ================== SPIELLOGIK ================== */

let usedCategories = [];
let usedPlayers = [];
let userTeam = {};
let currentPlayer = null;
let wins = 0;

/* DOM-Elemente – passe IDs an deine HTML an */
const startGameBtn = document.querySelector("#startGameBtn");
const categorySelect = document.querySelector("#categorySelect");
const premiumPopup = document.querySelector("#premiumPopup");
const startScreen = document.querySelector("#startScreen");
const gameScreen = document.querySelector("#gameScreen");
const endScreen = document.querySelector("#endScreen");
const roundTitle = document.querySelector("#roundTitle");
const playerCard = document.querySelector("#playerCard");
const playerNameEl = document.querySelector("#playerName");
const ratingBox = document.querySelector("#ratingBox");
const categoryButtonsEl = document.querySelector("#categoryButtons");
const scoreLine = document.querySelector("#scoreLine");
const summaryCard = document.querySelector("#summaryCard");
const endScreenTitle = document.querySelector("#endScreenTitle");

/* -------------------- START -------------------- */
startGameBtn.addEventListener("click", () => {
  const cat = categorySelect.value;

  if (cat !== "fussball" && cat !== "tiere" && cat !== "geografie" && cat !== "berufe") {
    premiumPopup.classList.remove("hidden");
    return;
  }

  startGame();
});

function closePremiumPopup() {
  premiumPopup.classList.add("hidden");
}

function startGame() {
  usedCategories = [];
  usedPlayers = [];
  userTeam = {};
  wins = 0;

  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  endScreen.classList.add("hidden");

  const cat = categorySelect.value;

  roundTitle.textContent =
    cat === "fussball"
      ? "Stelle dein Team zusammen"
      : cat === "tiere"
        ? "Stelle dein Tier zusammen"
        : cat === "geografie"
          ? "Stelle dein Land zusammen"
          : "Stelle deinen Beruf zusammen";

  nextPlayer();
}

/* -------------------- SPIELER -------------------- */
function nextPlayer() {
  const cat = categorySelect.value;

  const pool =
    cat === "fussball"
      ? footballPlayers
      : cat === "tiere"
        ? animalPlayers
        : cat === "geografie"
          ? geografiePlayers
          : berufePlayers;

  const catList =
    cat === "fussball"
      ? categoriesFootball
      : cat === "tiere"
        ? categoriesAnimals
        : cat === "geografie"
          ? categoriesGeografie
          : categoriesBerufe;

  if (usedCategories.length === catList.length) {
    renderFinal();
    return;
  }

  let p;
  do {
    p = pool[Math.floor(Math.random() * pool.length)];
  } while (usedPlayers.includes(p.name));

  usedPlayers.push(p.name);
  currentPlayer = p;

  renderPlayerScreen(catList);
}

function renderPlayerScreen(catList) {
  playerCard.classList.remove("slot");
  void playerCard.offsetWidth;
  playerCard.classList.add("slot");

  playerNameEl.innerHTML = `<b>${currentPlayer.name}</b>`;
  ratingBox.classList.add("hidden");
  ratingBox.innerHTML = "";
  categoryButtonsEl.innerHTML = "";

  const availableCats = catList.filter(c => !usedCategories.includes(c));

  availableCats.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.onclick = () => chooseCategory(cat);
    categoryButtonsEl.appendChild(btn);
  });
}

/* -------------------- KATEGORIE WÄHLEN -------------------- */
function chooseCategory(cat) {
  const buttons = categoryButtonsEl.querySelectorAll("button");
  buttons.forEach(b => {
    b.disabled = true;
    b.style.opacity = "0.5";
  });

  usedCategories.push(cat);

  const value = currentPlayer.stats[cat];

  let ratingText = "Schwache Wahl 👎";

  if (value > 95) {
    ratingText = "Weltklasse Wahl 🔥";
  } else if (value > 80) {
    ratingText = "Gute Wahl 👍";
  } else if (value > 60) {
    ratingText = "Solide Wahl ✊";
  }

  userTeam[cat] = { name: currentPlayer.name, value };

  ratingBox.classList.remove("hidden");
  ratingBox.innerHTML = `
    <div id="closeRating" onclick="closeRatingAndNext()">✖</div>
    <b>${ratingText}</b><br>
    ${currentPlayer.name}<br>
    Wert: <b>${value}</b>
  `;
}

function closeRatingAndNext() {
  ratingBox.classList.add("hidden");
  ratingBox.innerHTML = "";
  categoryButtonsEl.innerHTML = "";
  nextPlayer();
}

/* -------------------- FINALE -------------------- */
function renderFinal() {
  gameScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");

  const cat = categorySelect.value;

  const catList =
    cat === "fussball"
      ? categoriesFootball
      : cat === "tiere"
        ? categoriesAnimals
        : cat === "geografie"
          ? categoriesGeografie
          : categoriesBerufe;

  const opponentKeys = Object.keys(opponentTeams);

  const footballOpps = opponentKeys.filter(k => opponentTeams[k].type === "fussball");
  const animalOpps   = opponentKeys.filter(k => opponentTeams[k].type === "tiere");
  const geoOpps      = opponentKeys.filter(k => opponentTeams[k].type === "geografie");
  const berufeOpps   = opponentKeys.filter(k => opponentTeams[k].type === "berufe");

  let opponent;

  if (cat === "fussball") {
    opponent = opponentTeams[footballOpps[Math.floor(Math.random() * footballOpps.length)]];
  } else if (cat === "tiere") {
    opponent = opponentTeams[animalOpps[Math.floor(Math.random() * animalOpps.length)]];
  } else if (cat === "geografie") {
    opponent = opponentTeams[geoOpps[Math.floor(Math.random() * geoOpps.length)]];
  } else {
    opponent = opponentTeams[berufeOpps[Math.floor(Math.random() * berufeOpps.length)]];
  }

  endScreenTitle.innerHTML = `Duell gegen ${opponent.name}`;

  let compareHTML = "";
  wins = 0;
  let losses = 0;

  catList.forEach(catName => {
    const user = userTeam[catName];



let oppValue, oppName;

if (cat === "fussball") {
  const entry = opponent.players[catName];
  if (entry) {
    oppValue = entry.value;
    oppName = entry.name;
  } else {
    oppValue = 0;
    oppName = "Unbekannt";
  }

} else if (cat === "tiere") {
  oppValue = opponent.stats[catName];
  oppName = opponent.best[catName];

} else { // geografie + berufe
  const entry = opponent.players[catName];
  if (entry) {
    oppValue = entry.value;
    oppName = entry.name;
  } else {
    oppValue = 0;
    oppName = "Unbekannt";
  }
}
    let result;
    if (user.value > oppValue) {
      result = "win";
      wins++;
    } else if (user.value < oppValue) {
      result = "loss";
      losses++;
    } else {
      result = "draw";
    }

    let color;
    if (result === "win") color = "#4CAF50";
    else if (result === "loss") color = "#ff2a2a";
    else color = "#2196F3";

    compareHTML += `
      <div class="duel-row slot" style="border-left-color:${color};">
        <div class="duel-left">
          <b>${catName}</b>
          ${user.name} ${user.value}
        </div>
        <div class="duel-right">
          ${oppName} ${oppValue}
        </div>
      </div>
    `;
  });

  const finalText =
    wins > losses
      ? "🎉 Du hast gewonnen!"
      : wins < losses
        ? "❌ Du hast verloren!"
        : "🤝 Unentschieden!";

  scoreLine.textContent = `${wins}-${losses} · ${finalText}`;

  summaryCard.innerHTML = compareHTML;
}
