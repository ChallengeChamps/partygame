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
  { name: "Elefant", stats: { Geschwindigkeit: 40, Gewicht: 100, Gefährlichkeit: 80, Intelligenz: 85, Ausdauer: 90, Sprungkraft: 10, Stärke: 100, Reaktionszeit: 40, Wendigkeit: 20 }},
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

{ name: "Koala", stats: { Geschwindigkeit: 20, Gewicht: 15, Gefährlichkeit: 5, Intelligenz: 40, Ausdauer: 50, Sprungkraft: 20, Stärke: 20, Reaktionszeit: 30, Wendigkeit: 40 }},
{ name: "Faultier", stats: { Geschwindigkeit: 5, Gewicht: 10, Gefährlichkeit: 5, Intelligenz: 30, Ausdauer: 40, Sprungkraft: 5, Stärke: 10, Reaktionszeit: 5, Wendigkeit: 10 }},
{ name: "Meerschweinchen", stats: { Geschwindigkeit: 25, Gewicht: 3, Gefährlichkeit: 2, Intelligenz: 20, Ausdauer: 30, Sprungkraft: 10, Stärke: 5, Reaktionszeit: 30, Wendigkeit: 40 }},
{ name: "Hamster", stats: { Geschwindigkeit: 20, Gewicht: 2, Gefährlichkeit: 2, Intelligenz: 20, Ausdauer: 25, Sprungkraft: 10, Stärke: 5, Reaktionszeit: 25, Wendigkeit: 35 }},
{ name: "Kaninchen", stats: { Geschwindigkeit: 45, Gewicht: 4, Gefährlichkeit: 5, Intelligenz: 30, Ausdauer: 40, Sprungkraft: 60, Stärke: 10, Reaktionszeit: 50, Wendigkeit: 70 }},
{ name: "Hase", stats: { Geschwindigkeit: 55, Weight: 5, Gefährlichkeit: 5, Intelligenz: 35, Ausdauer: 50, Sprungkraft: 70, Stärke: 15, Reaktionszeit: 60, Wendigkeit: 75 }},
{ name: "Dromedar", stats: { Geschwindigkeit: 45, Gewicht: 90, Gefährlichkeit: 20, Intelligenz: 40, Ausdauer: 95, Sprungkraft: 20, Stärke: 70, Reaktionszeit: 40, Wendigkeit: 30 }},
{ name: "Kamel", stats: { Geschwindigkeit: 40, Gewicht: 100, Gefährlichkeit: 20, Intelligenz: 40, Ausdauer: 95, Sprungkraft: 15, Stärke: 75, Reaktionszeit: 35, Wendigkeit: 25 }},
{ name: "Zebra", stats: { Geschwindigkeit: 70, Gewicht: 60, Gefährlichkeit: 30, Intelligenz: 45, Ausdauer: 80, Sprungkraft: 50, Stärke: 60, Reaktionszeit: 55, Wendigkeit: 60 }},
{ name: "Giraffe", stats: { Geschwindigkeit: 50, Gewicht: 100, Gefährlichkeit: 40, Intelligenz: 50, Ausdauer: 70, Sprungkraft: 30, Stärke: 80, Reaktionszeit: 40, Wendigkeit: 30 }},

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
{ name: "Gorilla", stats: { Geschwindigkeit: 45, Gewicht: 90, Gefährlichkeit: 80, Intelligenz: 70, Ausdauer: 75, Sprungkraft: 50, Stärke: 95, Reaktionszeit: 55, Wendigkeit: 45 }},
{ name: "Schimpanse", stats: { Geschwindigkeit: 55, Gewicht: 40, Gefährlichkeit: 60, Intelligenz: 85, Ausdauer: 70, Sprungkraft: 65, Stärke: 60, Reaktionszeit: 70, Wendigkeit: 75 }},
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
{ name: "Riesenwolf", stats: { Geschwindigkeit: 70, Gewicht: 60, Gefährlichkeit: 80, Intelligenz: 65, Ausdauer: 85, Sprungkraft: 65, Stärke: 70, Reaktionszeit: 78, Wendigkeit: 70 }}
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

const geografiePlayers = [

  { 
    name: "USA", 
    stats: { 
      Bruttoinlandsprodukt: 100,
      Bevölkerung: 95,
      Bildung: 75,
      Sicherheit: 60,
      Gesundheitssystem: 65,
      Technologie: 95,
      Klima: 70,
      Natur: 85,
      Infrastruktur: 90
    }
  },

  { 
    name: "China", 
    stats: { 
      Bruttoinlandsprodukt: 95,
      Bevölkerung: 100,
      Bildung: 70,
      Sicherheit: 65,
      Gesundheitssystem: 60,
      Technologie: 85,
      Klima: 75,
      Natur: 80,
      Infrastruktur: 88
    }
  },

  { 
    name: "Schweiz", 
    stats: { 
      Bruttoinlandsprodukt: 90,
      Bevölkerung: 25,
      Bildung: 95,
      Sicherheit: 98,
      Gesundheitssystem: 97,
      Technologie: 85,
      Klima: 85,
      Natur: 90,
      Infrastruktur: 95
    }
  },

  { 
    name: "Deutschland", 
    stats: { 
      Bruttoinlandsprodukt: 92,
      Bevölkerung: 70,
      Bildung: 90,
      Sicherheit: 85,
      Gesundheitssystem: 90,
      Technologie: 88,
      Klima: 80,
      Natur: 75,
      Infrastruktur: 90
    }
  },

  { 
    name: "Japan", 
    stats: { 
      Bruttoinlandsprodukt: 93,
      Bevölkerung: 60,
      Bildung: 95,
      Sicherheit: 95,
      Gesundheitssystem: 95,
      Technologie: 98,
      Klima: 70,
      Natur: 65,
      Infrastruktur: 95
    }
  },

  { 
    name: "Indien", 
    stats: { 
      Bruttoinlandsprodukt: 85,
      Bevölkerung: 98,
      Bildung: 65,
      Sicherheit: 55,
      Gesundheitssystem: 50,
      Technologie: 75,
      Klima: 80,
      Natur: 90,
      Infrastruktur: 60
    }
  },

  { 
    name: "Australien", 
    stats: { 
      Bruttoinlandsprodukt: 88,
      Bevölkerung: 30,
      Bildung: 85,
      Sicherheit: 90,
      Gesundheitssystem: 92,
      Technologie: 80,
      Klima: 85,
      Natur: 95,
      Infrastruktur: 88
    }
  },

  { 
    name: "Brasilien", 
    stats: { 
      Bruttoinlandsprodukt: 75,
      Bevölkerung: 85,
      Bildung: 60,
      Sicherheit: 40,
      Gesundheitssystem: 55,
      Technologie: 60,
      Klima: 90,
      Natur: 100,
      Infrastruktur: 50
    }
  },

  { 
    name: "Frankreich", 
    stats: { 
      Bruttoinlandsprodukt: 90,
      Bevölkerung: 65,
      Bildung: 88,
      Sicherheit: 80,
      Gesundheitssystem: 85,
      Technologie: 82,
      Klima: 80,
      Natur: 70,
      Infrastruktur: 88
    }
  },

  { 
    name: "Kanada", 
    stats: { 
      Bruttoinlandsprodukt: 88,
      Bevölkerung: 40,
      Bildung: 90,
      Sicherheit: 95,
      Gesundheitssystem: 90,
      Technologie: 85,
      Klima: 70,
      Natur: 95,
      Infrastruktur: 85
    }
  }

];

const geografieOpponents = {

  europa: {
type: "geografie",
    name: "Europa",
    players: {
      Bruttoinlandsprodukt: { name: "Deutschland", value: 92 },
      Bevölkerung: { name: "Deutschland", value: 70 },
      Bildung: { name: "Finnland", value: 95 },
      Sicherheit: { name: "Schweiz", value: 98 },
      Gesundheitssystem: { name: "Schweiz", value: 97 },
      Technologie: { name: "Deutschland", value: 88 },
      Klima: { name: "Portugal", value: 85 },
      Natur: { name: "Norwegen", value: 95 },
      Infrastruktur: { name: "Niederlande", value: 95 }
    }
  },

  eu: {
type: "geografie",
    name: "Europäische Union",
    players: {
      Bruttoinlandsprodukt: { name: "Deutschland", value: 92 },
      Bevölkerung: { name: "Deutschland", value: 70 },
      Bildung: { name: "Niederlande", value: 90 },
      Sicherheit: { name: "Österreich", value: 85 },
      Gesundheitssystem: { name: "Deutschland", value: 90 },
      Technologie: { name: "Deutschland", value: 88 },
      Klima: { name: "Spanien", value: 80 },
      Natur: { name: "Schweden", value: 90 },
      Infrastruktur: { name: "Niederlande", value: 90 }
    }
  },

  nato: {
type: "geografie",
    name: "NATO",
    players: {
      Bruttoinlandsprodukt: { name: "USA", value: 100 },
      Bevölkerung: { name: "USA", value: 95 },
      Bildung: { name: "Kanada", value: 95 },
      Sicherheit: { name: "Kanada", value: 95 },
      Gesundheitssystem: { name: "Kanada", value: 95 },
      Technologie: { name: "USA", value: 95 },
      Klima: { name: "Kanada", value: 85 },
      Natur: { name: "Kanada", value: 95 },
      Infrastruktur: { name: "USA", value: 95 }
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
      Klima: { name: "Thailand", value: 80 },
      Natur: { name: "Indonesien", value: 100 },
      Infrastruktur: { name: "Japan", value: 95 }
    }
  },

  südamerika: {
type: "geografie",
    name: "Südamerika",
    players: {
      Bruttoinlandsprodukt: { name: "Brasilien", value: 75 },
      Bevölkerung: { name: "Brasilien", value: 85 },
      Bildung: { name: "Chile", value: 75 },
      Sicherheit: { name: "Uruguay", value: 60 },
      Gesundheitssystem: { name: "Chile", value: 70 },
      Technologie: { name: "Brasilien", value: 60 },
      Klima: { name: "Brasilien", value: 90 },
      Natur: { name: "Brasilien", value: 100 },
      Infrastruktur: { name: "Chile", value: 70 }
    }
  },

  /* ⭐ NEU: Australien (Kontinent) */
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

  /* ⭐ NEU: Afrika (Kontinent) */
  afrikaKontinent: {
type: "geografie",
    name: "Afrika (Kontinent)",
    players: {
      Bruttoinlandsprodukt: { name: "Südafrika", value: 75 },
      Bevölkerung: { name: "Nigeria", value: 85 },
      Bildung: { name: "Südafrika", value: 70 },
      Sicherheit: { name: "Botswana", value: 60 },
      Gesundheitssystem: { name: "Südafrika", value: 65 },
      Technologie: { name: "Südafrika", value: 60 },
      Klima: { name: "Kenia", value: 90 },
      Natur: { name: "Kongo", value: 100 },
      Infrastruktur: { name: "Südafrika", value: 60 }
    }
  },

  /* ⭐ NEU: Nordamerika (Kontinent) */
  nordamerika: {
type: "geografie",
    name: "Nordamerika",
    players: {
      Bruttoinlandsprodukt: { name: "USA", value: 100 },
      Bevölkerung: { name: "USA", value: 95 },
      Bildung: { name: "Kanada", value: 95 },
      Sicherheit: { name: "Kanada", value: 95 },
      Gesundheitssystem: { name: "Kanada", value: 95 },
      Technologie: { name: "USA", value: 95 },
      Klima: { name: "Kanada", value: 85 },
      Natur: { name: "Kanada", value: 95 },
      Infrastruktur: { name: "USA", value: 95 }
    }
  },

  /* ⭐ NEU: Inseln der Welt */
  inseln: {
type: "geografie",
    name: "Inseln der Welt",
    players: {
      Bruttoinlandsprodukt: { name: "Singapur", value: 90 },
      Bevölkerung: { name: "Indonesien", value: 85 },
      Bildung: { name: "Japan", value: 95 },
      Sicherheit: { name: "Japan", value: 95 },
      Gesundheitssystem: { name: "Japan", value: 95 },
      Technologie: { name: "Japan", value: 98 },
      Klima: { name: "Malediven", value: 90 },
      Natur: { name: "Indonesien", value: 100 },
      Infrastruktur: { name: "Singapur", value: 95 }
    }
  },

/* ===================== NEUE GEOGRAFIE-GEGNER ===================== */

skandinavien: {
  type: "geografie",
  name: "Skandinavien",
  players: {
    Bruttoinlandsprodukt: { name: "Schweden", value: 88 },
    Bevölkerung: { name: "Schweden", value: 40 },
    Bildung: { name: "Finnland", value: 95 },
    Sicherheit: { name: "Norwegen", value: 97 },
    Gesundheitssystem: { name: "Norwegen", value: 94 },
    Technologie: { name: "Schweden", value: 85 },
    Klima: { name: "Norwegen", value: 70 },
    Natur: { name: "Norwegen", value: 98 },
    Infrastruktur: { name: "Dänemark", value: 92 }
  }
},

arabischeHalbinsel: {
  type: "geografie",
  name: "Arabische Halbinsel",
  players: {
    Bruttoinlandsprodukt: { name: "Saudi-Arabien", value: 90 },
    Bevölkerung: { name: "Saudi-Arabien", value: 75 },
    Bildung: { name: "VAE", value: 80 },
    Sicherheit: { name: "Oman", value: 85 },
    Gesundheitssystem: { name: "Katar", value: 88 },
    Technologie: { name: "VAE", value: 90 },
    Klima: { name: "Saudi-Arabien", value: 95 },
    Natur: { name: "Oman", value: 70 },
    Infrastruktur: { name: "Katar", value: 92 }
  }
},

balkan: {
  type: "geografie",
  name: "Balkan",
  players: {
    Bruttoinlandsprodukt: { name: "Griechenland", value: 70 },
    Bevölkerung: { name: "Rumänien", value: 65 },
    Bildung: { name: "Slowenien", value: 85 },
    Sicherheit: { name: "Kroatien", value: 80 },
    Gesundheitssystem: { name: "Slowenien", value: 88 },
    Technologie: { name: "Serbien", value: 70 },
    Klima: { name: "Griechenland", value: 90 },
    Natur: { name: "Montenegro", value: 95 },
    Infrastruktur: { name: "Kroatien", value: 82 }
  }
},

benelux: {
  type: "geografie",
  name: "Benelux",
  players: {
    Bruttoinlandsprodukt: { name: "Niederlande", value: 90 },
    Bevölkerung: { name: "Belgien", value: 55 },
    Bildung: { name: "Luxemburg", value: 92 },
    Sicherheit: { name: "Luxemburg", value: 95 },
    Gesundheitssystem: { name: "Belgien", value: 90 },
    Technologie: { name: "Niederlande", value: 88 },
    Klima: { name: "Belgien", value: 75 },
    Natur: { name: "Luxemburg", value: 85 },
    Infrastruktur: { name: "Niederlande", value: 95 }
  }
},

osteuropa: {
  type: "geografie",
  name: "Osteuropa",
  players: {
    Bruttoinlandsprodukt: { name: "Polen", value: 80 },
    Bevölkerung: { name: "Polen", value: 70 },
    Bildung: { name: "Tschechien", value: 85 },
    Sicherheit: { name: "Estland", value: 90 },
    Gesundheitssystem: { name: "Tschechien", value: 88 },
    Technologie: { name: "Estland", value: 92 },
    Klima: { name: "Litauen", value: 70 },
    Natur: { name: "Slowakei", value: 85 },
    Infrastruktur: { name: "Polen", value: 80 }
  }
},

naherOsten: {
  type: "geografie",
  name: "Naher Osten",
  players: {
    Bruttoinlandsprodukt: { name: "Saudi-Arabien", value: 90 },
    Bevölkerung: { name: "Türkei", value: 85 },
    Bildung: { name: "Israel", value: 92 },
    Sicherheit: { name: "Israel", value: 90 },
    Gesundheitssystem: { name: "Israel", value: 93 },
    Technologie: { name: "Israel", value: 95 },
    Klima: { name: "Jordanien", value: 85 },
    Natur: { name: "Libanon", value: 80 },
    Infrastruktur: { name: "VAE", value: 95 }
  }
},

indischerSubkontinent: {
  type: "geografie",
  name: "Indischer Subkontinent",
  players: {
    Bruttoinlandsprodukt: { name: "Indien", value: 85 },
    Bevölkerung: { name: "Indien", value: 98 },
    Bildung: { name: "Sri Lanka", value: 75 },
    Sicherheit: { name: "Bhutan", value: 90 },
    Gesundheitssystem: { name: "Sri Lanka", value: 70 },
    Technologie: { name: "Indien", value: 75 },
    Klima: { name: "Bangladesch", value: 85 },
    Natur: { name: "Nepal", value: 95 },
    Infrastruktur: { name: "Indien", value: 60 }
  }
},

karibik: {
  type: "geografie",
  name: "Karibik",
  players: {
    Bruttoinlandsprodukt: { name: "Puerto Rico", value: 80 },
    Bevölkerung: { name: "Kuba", value: 70 },
    Bildung: { name: "Kuba", value: 85 },
    Sicherheit: { name: "Barbados", value: 90 },
    Gesundheitssystem: { name: "Kuba", value: 88 },
    Technologie: { name: "Puerto Rico", value: 75 },
    Klima: { name: "Dominikanische Republik", value: 95 },
    Natur: { name: "Jamaika", value: 90 },
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
    Natur: { name: "Neuseeland", value: 98 },
    Infrastruktur: { name: "Australien", value: 88 }
  }
},

baltikum: {
  type: "geografie",
  name: "Baltikum",
  players: {
    Bruttoinlandsprodukt: { name: "Estland", value: 80 },
    Bevölkerung: { name: "Litauen", value: 40 },
    Bildung: { name: "Estland", value: 92 },
    Sicherheit: { name: "Estland", value: 95 },
    Gesundheitssystem: { name: "Litauen", value: 85 },
    Technologie: { name: "Estland", value: 95 },
    Klima: { name: "Lettland", value: 70 },
    Natur: { name: "Lettland", value: 85 },
    Infrastruktur: { name: "Estland", value: 90 }
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
    Klima: { name: "Österreich", value: 80 },
    Natur: { name: "Schweiz", value: 95 },
    Infrastruktur: { name: "Deutschland", value: 90 }
  }
},

westafrika: {
  type: "geografie",
  name: "Westafrika",
  players: {
    Bruttoinlandsprodukt: { name: "Nigeria", value: 70 },
    Bevölkerung: { name: "Nigeria", value: 85 },
    Bildung: { name: "Ghana", value: 65 },
    Sicherheit: { name: "Ghana", value: 70 },
    Gesundheitssystem: { name: "Senegal", value: 60 },
    Technologie: { name: "Nigeria", value: 55 },
    Klima: { name: "Ghana", value: 90 },
    Natur: { name: "Sierra Leone", value: 85 },
    Infrastruktur: { name: "Nigeria", value: 50 }
  }
},

ostafrika: {
  type: "geografie",
  name: "Ostafrika",
  players: {
    Bruttoinlandsprodukt: { name: "Kenia", value: 65 },
    Bevölkerung: { name: "Äthiopien", value: 80 },
    Bildung: { name: "Kenia", value: 70 },
    Sicherheit: { name: "Tansania", value: 65 },
    Gesundheitssystem: { name: "Kenia", value: 60 },
    Technologie: { name: "Kenia", value: 65 },
    Klima: { name: "Tansania", value: 85 },
    Natur: { name: "Uganda", value: 90 },
    Infrastruktur: { name: "Kenia", value: 55 }
  }
},

suedostasien: {
  type: "geografie",
  name: "Südostasien",
  players: {
    Bruttoinlandsprodukt: { name: "Singapur", value: 90 },
    Bevölkerung: { name: "Indonesien", value: 85 },
    Bildung: { name: "Singapur", value: 95 },
    Sicherheit: { name: "Singapur", value: 95 },
    Gesundheitssystem: { name: "Singapur", value: 95 },
    Technologie: { name: "Singapur", value: 98 },
    Klima: { name: "Thailand", value: 85 },
    Natur: { name: "Indonesien", value: 100 },
    Infrastruktur: { name: "Singapur", value: 95 }
  }
},

mittelamerika: {
  type: "geografie",
  name: "Mittelamerika",
  players: {
    Bruttoinlandsprodukt: { name: "Costa Rica", value: 70 },
    Bevölkerung: { name: "Guatemala", value: 65 },
    Bildung: { name: "Costa Rica", value: 85 },
    Sicherheit: { name: "Costa Rica", value: 90 },
    Gesundheitssystem: { name: "Costa Rica", value: 88 },
    Technologie: { name: "Panama", value: 75 },
    Klima: { name: "Costa Rica", value: 95 },
    Natur: { name: "Costa Rica", value: 100 },
    Infrastruktur: { name: "Panama", value: 80 }
  }
},

suedpazifik: {
  type: "geografie",
  name: "Südpazifik",
  players: {
    Bruttoinlandsprodukt: { name: "Neuseeland", value: 88 },
    Bevölkerung: { name: "Fidschi", value: 20 },
    Bildung: { name: "Neuseeland", value: 90 },
    Sicherheit: { name: "Neuseeland", value: 95 },
    Gesundheitssystem: { name: "Neuseeland", value: 92 },
    Technologie: { name: "Neuseeland", value: 85 },
    Klima: { name: "Fidschi", value: 90 },
    Natur: { name: "Neuseeland", value: 98 },
    Infrastruktur: { name: "Neuseeland", value: 88 }
  }
},

kleinasien: {
  type: "geografie",
  name: "Kleinasien",
  players: {
    Bruttoinlandsprodukt: { name: "Türkei", value: 80 },
    Bevölkerung: { name: "Türkei", value: 85 },
    Bildung: { name: "Türkei", value: 75 },
    Sicherheit: { name: "Türkei", value: 70 },
    Gesundheitssystem: { name: "Türkei", value: 72 },
    Technologie: { name: "Türkei", value: 78 },
    Klima: { name: "Türkei", value: 85 },
    Natur: { name: "Türkei", value: 80 },
    Infrastruktur: { name: "Türkei", value: 75 }
  }
},

iberischeHalbinsel: {
  type: "geografie",
  name: "Iberische Halbinsel",
  players: {
    Bruttoinlandsprodukt: { name: "Spanien", value: 85 },
    Bevölkerung: { name: "Spanien", value: 70 },
    Bildung: { name: "Portugal", value: 85 },
    Sicherheit: { name: "Portugal", value: 90 },
    Gesundheitssystem: { name: "Spanien", value: 88 },
    Technologie: { name: "Spanien", value: 82 },
    Klima: { name: "Portugal", value: 90 },
    Natur: { name: "Portugal", value: 95 },
    Infrastruktur: { name: "Spanien", value: 88 }
  }
}

};

const animalOpponents = {


  /* Länder für Tiere */
  australien: {
type: "tiere",
    name: "Australien",
    best: {
      Geschwindigkeit: "Känguru",
      Gewicht: "Elefant",
      Gefährlichkeit: "Tiger Snake",
      Intelligenz: "Kakadu",
      Ausdauer: "Känguru",
      Sprungkraft: "Känguru",
      Stärke: "Salzwasserkrokodil",
      Reaktionszeit: "Falke",
      Wendigkeit: "Wallaby"
    },
    stats: {
      Geschwindigkeit: 70,
      Gewicht: 100,
      Gefährlichkeit: 95,
      Intelligenz: 70,
      Ausdauer: 90,
      Sprungkraft: 95,
      Stärke: 100,
      Reaktionszeit: 100,
      Wendigkeit: 85
    }
  },

  afrika: {
type: "tiere",
    name: "Afrika",
    best: {
      Geschwindigkeit: "Gepard",
      Gewicht: "Elefant",
      Gefährlichkeit: "Nilkrokodil",
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
      Gefährlichkeit: 90,
      Intelligenz: 80,
      Ausdauer: 95,
      Sprungkraft: 90,
      Stärke: 100,
      Reaktionszeit: 95,
      Wendigkeit: 90
    }
  },

  südamerika: {
type: "tiere",
    name: "Südamerika",
    best: {
      Geschwindigkeit: "Jaguar",
      Gewicht: "Tapir",
      Gefährlichkeit: "Anakonda",
      Intelligenz: "Papagei",
      Ausdauer: "Lama",
      Sprungkraft: "Puma",
      Stärke: "Jaguar",
      Reaktionszeit: "Falke",
      Wendigkeit: "Ozelot"
    },
    stats: {
      Geschwindigkeit: 85,
      Gewicht: 80,
      Gefährlichkeit: 88,
      Intelligenz: 75,
      Ausdauer: 85,
      Sprungkraft: 90,
      Stärke: 90,
      Reaktionszeit: 95,
      Wendigkeit: 85
    }
  },
europaTiere: {
  type: "tiere",
  name: "Europa",
  best: {
    Geschwindigkeit: "Wolf",
    Gewicht: "Bär",
    Gefährlichkeit: "Wolf",
    Intelligenz: "Fuchs",
    Ausdauer: "Wolf",
    Sprungkraft: "Luchs",
    Stärke: "Bär",
    Reaktionszeit: "Falke",
    Wendigkeit: "Luchs"
  },
  stats: {
    Geschwindigkeit: 55,
    Gewicht: 80,
    Gefährlichkeit: 70,
    Intelligenz: 60,
    Ausdauer: 75,
    Sprungkraft: 70,
    Stärke: 85,
    Reaktionszeit: 80,
    Wendigkeit: 75
  }
},

nordamerikaTiere: {
  type: "tiere",
  name: "Nordamerika",
  best: {
    Geschwindigkeit: "Puma",
    Gewicht: "Grizzly",
    Gefährlichkeit: "Grizzly",
    Intelligenz: "Waschbär",
    Ausdauer: "Wolf",
    Sprungkraft: "Puma",
    Stärke: "Grizzly",
    Reaktionszeit: "Falke",
    Wendigkeit: "Luchs"
  },
  stats: {
    Geschwindigkeit: 70,
    Gewicht: 95,
    Gefährlichkeit: 85,
    Intelligenz: 55,
    Ausdauer: 80,
    Sprungkraft: 85,
    Stärke: 95,
    Reaktionszeit: 85,
    Wendigkeit: 75
  }
},

mittelamerikaTiere: {
  type: "tiere",
  name: "Mittelamerika",
  best: {
    Geschwindigkeit: "Ozelot",
    Gewicht: "Tapir",
    Gefährlichkeit: "Jaguar",
    Intelligenz: "Papagei",
    Ausdauer: "Ozelot",
    Sprungkraft: "Puma",
    Stärke: "Jaguar",
    Reaktionszeit: "Falke",
    Wendigkeit: "Ozelot"
  },
  stats: {
    Geschwindigkeit: 65,
    Gewicht: 70,
    Gefährlichkeit: 80,
    Intelligenz: 70,
    Ausdauer: 75,
    Sprungkraft: 85,
    Stärke: 85,
    Reaktionszeit: 85,
    Wendigkeit: 80
  }
},

nordafrikaTiere: {
  type: "tiere",
  name: "Nordafrika",
  best: {
    Geschwindigkeit: "Gazelle",
    Gewicht: "Kamel",
    Gefährlichkeit: "Nilkrokodil",
    Intelligenz: "Schakal",
    Ausdauer: "Dromedar",
    Sprungkraft: "Gazelle",
    Stärke: "Nilkrokodil",
    Reaktionszeit: "Falke",
    Wendigkeit: "Serval"
  },
  stats: {
    Geschwindigkeit: 80,
    Gewicht: 90,
    Gefährlichkeit: 85,
    Intelligenz: 55,
    Ausdauer: 85,
    Sprungkraft: 75,
    Stärke: 90,
    Reaktionszeit: 85,
    Wendigkeit: 75
  }
},

westafrikaTiere: {
  type: "tiere",
  name: "Westafrika",
  best: {
    Geschwindigkeit: "Gepard",
    Gewicht: "Elefant",
    Gefährlichkeit: "Hyäne",
    Intelligenz: "Schimpanse",
    Ausdauer: "Hyänenhund",
    Sprungkraft: "Gazelle",
    Stärke: "Gorilla",
    Reaktionszeit: "Falke",
    Wendigkeit: "Serval"
  },
  stats: {
    Geschwindigkeit: 95,
    Gewicht: 100,
    Gefährlichkeit: 85,
    Intelligenz: 75,
    Ausdauer: 90,
    Sprungkraft: 85,
    Stärke: 95,
    Reaktionszeit: 90,
    Wendigkeit: 80
  }
},

ostafrikaTiere: {
  type: "tiere",
  name: "Ostafrika",
  best: {
    Geschwindigkeit: "Gepard",
    Gewicht: "Elefant",
    Gefährlichkeit: "Hyäne",
    Intelligenz: "Schimpanse",
    Ausdauer: "Hyänenhund",
    Sprungkraft: "Gazelle",
    Stärke: "Gorilla",
    Reaktionszeit: "Falke",
    Wendigkeit: "Serval"
  },
  stats: {
    Geschwindigkeit: 90,
    Gewicht: 100,
    Gefährlichkeit: 85,
    Intelligenz: 70,
    Ausdauer: 90,
    Sprungkraft: 85,
    Stärke: 95,
    Reaktionszeit: 90,
    Wendigkeit: 80
  }
},

ozeanienTiere: {
  type: "tiere",
  name: "Ozeanien",
  best: {
    Geschwindigkeit: "Känguru",
    Gewicht: "Walross",
    Gefährlichkeit: "Salzwasserkrokodil",
    Intelligenz: "Kakadu",
    Ausdauer: "Känguru",
    Sprungkraft: "Känguru",
    Stärke: "Salzwasserkrokodil",
    Reaktionszeit: "Falke",
    Wendigkeit: "Wallaby"
  },
  stats: {
    Geschwindigkeit: 65,
    Gewicht: 90,
    Gefährlichkeit: 90,
    Intelligenz: 65,
    Ausdauer: 85,
    Sprungkraft: 90,
    Stärke: 95,
    Reaktionszeit: 90,
    Wendigkeit: 80
  }
},

suedostasienTiere: {
  type: "tiere",
  name: "Südostasien",
  best: {
    Geschwindigkeit: "Tiger",
    Gewicht: "Elefant",
    Gefährlichkeit: "Tiger",
    Intelligenz: "Papagei",
    Ausdauer: "Tiger",
    Sprungkraft: "Tiger",
    Stärke: "Tiger",
    Reaktionszeit: "Falke",
    Wendigkeit: "Leopard"
  },
  stats: {
    Geschwindigkeit: 65,
    Gewicht: 100,
    Gefährlichkeit: 95,   // Tiger = 95
    Intelligenz: 60,
    Ausdauer: 70,
    Sprungkraft: 80,
    Stärke: 95,           // Tiger = 95
    Reaktionszeit: 80,
    Wendigkeit: 60
  }
},

indienTiere: {
  type: "tiere",
  name: "Indien",
  best: {
    Geschwindigkeit: "Tiger",
    Gewicht: "Elefant",
    Gefährlichkeit: "Tiger",
    Intelligenz: "Papagei",
    Ausdauer: "Tiger",
    Sprungkraft: "Tiger",
    Stärke: "Tiger",
    Reaktionszeit: "Falke",
    Wendigkeit: "Leopard"
  },
  stats: {
    Geschwindigkeit: 65,
    Gewicht: 100,
    Gefährlichkeit: 95,
    Intelligenz: 60,
    Ausdauer: 70,
    Sprungkraft: 80,
    Stärke: 95,
    Reaktionszeit: 80,
    Wendigkeit: 60
  }
},

arktisTiere: {
  type: "tiere",
  name: "Arktis",
  best: {
    Geschwindigkeit: "Eisbär",
    Gewicht: "Eisbär",
    Gefährlichkeit: "Eisbär",
    Intelligenz: "Robbe",
    Ausdauer: "Eisbär",
    Sprungkraft: "Eisbär",
    Stärke: "Eisbär",
    Reaktionszeit: "Falke",
    Wendigkeit: "Robbe"
  },
  stats: {
    Geschwindigkeit: 55,
    Gewicht: 100,
    Gefährlichkeit: 90,
    Intelligenz: 45,
    Ausdauer: 80,
    Sprungkraft: 40,
    Stärke: 100,
    Reaktionszeit: 60,
    Wendigkeit: 35
  }
},

antarktisTiere: {
  type: "tiere",
  name: "Antarktis",
  best: {
    Geschwindigkeit: "Pinguin",
    Gewicht: "Walross",
    Gefährlichkeit: "Walross",
    Intelligenz: "Pinguin",
    Ausdauer: "Pinguin",
    Sprungkraft: "Pinguin",
    Stärke: "Walross",
    Reaktionszeit: "Pinguin",
    Wendigkeit: "Pinguin"
  },
  stats: {
    Geschwindigkeit: 20,
    Gewicht: 100,
    Gefährlichkeit: 50,
    Intelligenz: 40,
    Ausdauer: 60,
    Sprungkraft: 5,
    Stärke: 90,
    Reaktionszeit: 30,
    Wendigkeit: 20
  }
},

mitteleuropaTiere: {
  type: "tiere",
  name: "Mitteleuropa",
  best: {
    Geschwindigkeit: "Wolf",
    Gewicht: "Bär",
    Gefährlichkeit: "Wolf",
    Intelligenz: "Fuchs",
    Ausdauer: "Wolf",
    Sprungkraft: "Luchs",
    Stärke: "Bär",
    Reaktionszeit: "Falke",
    Wendigkeit: "Luchs"
  },
  stats: {
    Geschwindigkeit: 55,
    Gewicht: 80,
    Gefährlichkeit: 70,
    Intelligenz: 60,
    Ausdauer: 75,
    Sprungkraft: 70,
    Stärke: 85,
    Reaktionszeit: 80,
    Wendigkeit: 75
  }
},

naherOstenTiere: {
  type: "tiere",
  name: "Naher Osten",
  best: {
    Geschwindigkeit: "Gazelle",
    Gewicht: "Kamel",
    Gefährlichkeit: "Hyäne",
    Intelligenz: "Schakal",
    Ausdauer: "Dromedar",
    Sprungkraft: "Gazelle",
    Stärke: "Kamel",
    Reaktionszeit: "Falke",
    Wendigkeit: "Serval"
  },
  stats: {
    Geschwindigkeit: 70,
    Gewicht: 90,
    Gefährlichkeit: 70,
    Intelligenz: 55,
    Ausdauer: 85,
    Sprungkraft: 75,
    Stärke: 80,
    Reaktionszeit: 80,
    Wendigkeit: 70
  }
},

karibikTiere: {
  type: "tiere",
  name: "Karibik",
  best: {
    Geschwindigkeit: "Ozelot",
    Gewicht: "Tapir",
    Gefährlichkeit: "Anakonda",
    Intelligenz: "Papagei",
    Ausdauer: "Ozelot",
    Sprungkraft: "Puma",
    Stärke: "Jaguar",
    Reaktionszeit: "Falke",
    Wendigkeit: "Ozelot"
  },
  stats: {
    Geschwindigkeit: 60,
    Gewicht: 70,
    Gefährlichkeit: 75,
    Intelligenz: 70,
    Ausdauer: 70,
    Sprungkraft: 80,
    Stärke: 85,
    Reaktionszeit: 85,
    Wendigkeit: 80
  }
},

balkanTiere: {
  type: "tiere",
  name: "Balkan",
  best: {
    Geschwindigkeit: "Wolf",
    Gewicht: "Bär",
    Gefährlichkeit: "Wolf",
    Intelligenz: "Fuchs",
    Ausdauer: "Wolf",
    Sprungkraft: "Luchs",
    Stärke: "Bär",
    Reaktionszeit: "Falke",
    Wendigkeit: "Luchs"
  },
  stats: {
    Geschwindigkeit: 50,
    Gewicht: 80,
    Gefährlichkeit: 65,
    Intelligenz: 55,
    Ausdauer: 70,
    Sprungkraft: 65,
    Stärke: 80,
    Reaktionszeit: 75,
    Wendigkeit: 70
  }
}
};


/* --- Zentrales Gegner-Objekt --- */
const opponentTeams = {
  ...footballOpponents,
  ...animalOpponents,
  ...geografieOpponents
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

  if (cat !== "fussball" && cat !== "tiere" && cat !== "geografie") {
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
        : "Stelle dein Land zusammen";

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
        : geografiePlayers;

  const catList =
    cat === "fussball"
      ? categoriesFootball
      : cat === "tiere"
        ? categoriesAnimals
        : categoriesGeografie;

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
        : categoriesGeografie;

  const opponentKeys = Object.keys(opponentTeams);

  const footballOpps = opponentKeys.filter(k => opponentTeams[k].type === "fussball");
  const animalOpps   = opponentKeys.filter(k => opponentTeams[k].type === "tiere");
  const geoOpps      = opponentKeys.filter(k => opponentTeams[k].type === "geografie");

  let opponent;

  if (cat === "fussball") {
    opponent = opponentTeams[footballOpps[Math.floor(Math.random() * footballOpps.length)]];
  } else if (cat === "tiere") {
    opponent = opponentTeams[animalOpps[Math.floor(Math.random() * animalOpps.length)]];
  } else {
    opponent = opponentTeams[geoOpps[Math.floor(Math.random() * geoOpps.length)]];
  }

  endScreenTitle.innerHTML = `Duell gegen ${opponent.name}`;

  let compareHTML = "";
  wins = 0;
  let losses = 0;

  catList.forEach(catName => {
    const user = userTeam[catName];

    let oppValue, oppName;

    if (cat === "fussball") {
      oppValue = opponent.players[catName].value;
      oppName = opponent.players[catName].name;
    } else if (cat === "tiere") {
      oppValue = opponent.stats[catName];
      oppName = opponent.best[catName];
    } else {
      oppValue = opponent.players[catName].value;
      oppName = opponent.players[catName].name;
    }

let result;
if (user.value > oppValue) {
  result = "win";
  wins++;
} else if (user.value < oppValue) {
  result = "loss";
  losses++;
} else {
  result = "draw"; // Unentschieden
}


let color;
if (result === "win") color = "#4CAF50";       // grün
else if (result === "loss") color = "#ff2a2a"; // rot
else color = "#2196F3";                        // blau (Unentschieden)


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
