/* PREMIUM SYSTEM */
const hasPremium = localStorage.getItem("premium") === "true";
const premiumCategories = ["wirtschaft","geografie","tiere","musik","filme", "socialmedia"];

/* ELEMENTS */
const playerCountSelect = document.getElementById("playerCountSelect");
const playersWrapper = document.getElementById("playersWrapper");
const categorySelect = document.getElementById("categorySelect");
const premiumPopup = document.getElementById("premiumPopup");
const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const endScreen = document.getElementById("endScreen");
const roundTitle = document.getElementById("roundTitle");
const questionText = document.getElementById("questionText");
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const feedback = document.getElementById("feedback");
const valueBox = document.getElementById("valueBox");
const scoreValue = document.getElementById("scoreValue");
const summaryCard = document.getElementById("summaryCard");
const yaySound = document.getElementById("yay-sound");

let currentCategory = "fussball";
let score = 0;
let currentPair = null;

/* REKORD SYSTEM */
const recordKeys = {
  fussball: "record_fussball",
  wirtschaft: "record_wirtschaft",
  geografie: "record_geografie",
  tiere: "record_tiere",
  musik: "record_musik",
  filme: "record_filme",
  alter: "record_alter",
  socialmedia: "record_socialmedia"
};

function getRecord(cat) {
  return parseInt(localStorage.getItem(recordKeys[cat]) || "0");
}

function updateRecord(cat, newScore) {
  const old = getRecord(cat);
  if (newScore > old) {
    localStorage.setItem(recordKeys[cat], newScore);
  }
}

function renderRecordsOnStart() {
  const box = document.createElement("div");
  box.className = "records-box";

  box.innerHTML = `
    <h3 class="records-title">🏆 Rekorde</h3>

    <div class="records-grid">
      <div class="record-item">Fußball: ${getRecord("fussball")}</div>
      <div class="record-item">Wirtschaft: ${getRecord("wirtschaft")}</div>

      <div class="record-item">Geografie: ${getRecord("geografie")}</div>
      <div class="record-item">Tiere: ${getRecord("tiere")}</div>

      <div class="record-item">Musik: ${getRecord("musik")}</div>
      <div class="record-item">Filme: ${getRecord("filme")}</div>

      <div class="record-item">Alter: ${getRecord("alter")}</div>
      <div class="record-item">Social Media: ${getRecord("socialmedia")}</div>
    </div>
  `;

  startScreen.appendChild(box);
}

renderRecordsOnStart();


/* PLAYER INPUTS */
function renderPlayerInputs() {
  playersWrapper.innerHTML = "";
  const count = parseInt(playerCountSelect.value);
  for (let i = 1; i <= count; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Spieler " + i;
    playersWrapper.appendChild(input);
  }
}
playerCountSelect.addEventListener("change", renderPlayerInputs);
renderPlayerInputs();

/* PREMIUM CHECK */
categorySelect.addEventListener("change", () => {
  const selected = categorySelect.value;
  if (!hasPremium && premiumCategories.includes(selected)) {
    premiumPopup.classList.remove("hidden");
    categorySelect.value = "fussball";
  }
});
function closePremiumPopup() {
  premiumPopup.classList.add("hidden");
}

/* DATA POOLS */
const pools = {
  fussball: {
    label: "Marktwert",
    unit: "Mio. €",
    key: "value",
    threshold: 25,
    items: [
      { name: "Lionel Messi", value: 15 },
{ name: "Luka Modrić", value: 8 },
{ name: "Toni Kroos", value: 12 },
{ name: "Pedri", value: 90 },
{ name: "Gavi", value: 80 },
{ name: "Robert Lewandowski", value: 15 },
{ name: "João Félix", value: 50 },
{ name: "Phil Foden", value: 110 },
{ name: "Bukayo Saka", value: 120 },
{ name: "Declan Rice", value: 110 },
{ name: "Rodri", value: 100 },

{ name: "Bernardo Silva", value: 70 },
{ name: "Rúben Dias", value: 80 },
{ name: "Marcus Rashford", value: 70 },
{ name: "Jadon Sancho", value: 20 },
{ name: "Mason Mount", value: 35 },
{ name: "Kai Havertz", value: 55 },
{ name: "Jamal Musiala", value: 120 },
{ name: "Florian Wirtz", value: 130 },
{ name: "Serge Gnabry", value: 40 },
{ name: "Leroy Sané", value: 60 },

{ name: "Joshua Kimmich", value: 60 },
{ name: "Leon Goretzka", value: 40 },
{ name: "Alphonso Davies", value: 70 },
{ name: "Kim Min‑jae", value: 50 },
{ name: "Dayot Upamecano", value: 45 },
{ name: "Kingsley Coman", value: 55 },
{ name: "Randal Kolo Muani", value: 75 },
{ name: "Christopher Nkunku", value: 70 },
{ name: "Antoine Griezmann", value: 25 },
{ name: "Ousmane Dembélé", value: 60 },

{ name: "Achraf Hakimi", value: 70 },
{ name: "Marquinhos", value: 55 },
{ name: "Gianluigi Donnarumma", value: 45 },
{ name: "Marco Verratti", value: 15 },
{ name: "Sergio Ramos", value: 3 },
{ name: "Ángel Di María", value: 2 },
{ name: "Paulo Dybala", value: 28 },
{ name: "Federico Chiesa", value: 50 },
{ name: "Nicolo Barella", value: 75 },
{ name: "Lautaro Martínez", value: 110 },

{ name: "Romelu Lukaku", value: 30 },
{ name: "Victor Osimhen", value: 120 },
{ name: "Khvicha Kvaratskhelia", value: 90 },
{ name: "Sandro Tonali", value: 50 },
{ name: "Theo Hernández", value: 60 },
{ name: "Rafael Leão", value: 90 },
{ name: "Bruno Fernandes", value: 70 },
{ name: "Casemiro", value: 20 },
{ name: "Lisandro Martínez", value: 40 },
{ name: "Antony", value: 30 },

{ name: "Gabriel Jesus", value: 45 },
{ name: "Martin Ødegaard", value: 90 },
{ name: "William Saliba", value: 80 },
{ name: "Ben White", value: 45 },
{ name: "Reece James", value: 55 },
{ name: "Enzo Fernández", value: 70 },
{ name: "Mykhailo Mudryk", value: 30 },
{ name: "Raheem Sterling", value: 20 },
{ name: "Cole Palmer", value: 55 },
{ name: "Darwin Núñez", value: 55 },

{ name: "Luis Díaz", value: 60 },
{ name: "Trent Alexander‑Arnold", value: 75 },
{ name: "Virgil van Dijk", value: 35 },
{ name: "Andrew Robertson", value: 35 },
{ name: "Cody Gakpo", value: 45 },
{ name: "Dominik Szoboszlai", value: 65 },
{ name: "Alexis Mac Allister", value: 55 },
{ name: "João Cancelo", value: 40 },
{ name: "Ferran Torres", value: 30 },
{ name: "Ilkay Gündogan", value: 18 },

{ name: "Ronald Araújo", value: 70 },
{ name: "Andreas Christensen", value: 35 },
{ name: "Frenkie de Jong", value: 75 },
{ name: "Raphinha", value: 45 },
{ name: "Ansu Fati", value: 20 },
{ name: "Alejandro Balde", value: 50 },
{ name: "Pau Torres", value: 35 },
{ name: "Yeremy Pino", value: 35 },
{ name: "Dani Olmo", value: 50 },
{ name: "Álvaro Morata", value: 15 },

{ name: "Isco", value: 3 },
{ name: "Rodrygo", value: 100 },
{ name: "Eduardo Camavinga", value: 70 },
{ name: "Aurélien Tchouaméni", value: 80 },
{ name: "Federico Valverde", value: 100 },
{ name: "Eder Militão", value: 60 },
{ name: "Thibaut Courtois", value: 30 },
{ name: "Jan Oblak", value: 30 },
{ name: "Saúl Ñíguez", value: 8 },
{ name: "Koke", value: 12 },

{ name: "Ángel Correa", value: 25 },
{ name: "Memphis Depay", value: 10 },
{ name: "Rodrigo De Paul", value: 30 },
{ name: "Nahuel Molina", value: 35 },
{ name: "José Giménez", value: 30 },
{ name: "Sadio Mané", value: 20 },
{ name: "Kalidou Koulibaly", value: 12 },
{ name: "Hakim Ziyech", value: 8 },
{ name: "Youssef En‑Nesyri", value: 25 },
{ name: "Sofyan Amrabat", value: 20 },

{ name: "Riyad Mahrez", value: 15 },
{ name: "Edouard Mendy", value: 8 },
{ name: "Thomas Partey", value: 18 },
      { name: "Wilfried Zaha", value: 15 }
    ]
  },

  wirtschaft: {
    label: "Unternehmenswert",
    unit: "Mrd. €",
    key: "value",
    threshold: 200,
    items: [
      { name: "Apple", value: 3000 },
{ name: "Berkshire Hathaway", value: 850 },
{ name: "Eli Lilly", value: 720 },
{ name: "Broadcom", value: 650 },
{ name: "Visa", value: 520 },
{ name: "JPMorgan Chase", value: 500 },
{ name: "Walmart", value: 480 },
{ name: "Tencent", value: 380 },
{ name: "TSMC", value: 900 },
{ name: "Nestlé", value: 330 },
{ name: "Mastercard", value: 430 },

{ name: "Netflix", value: 300 },
{ name: "Adobe", value: 240 },
{ name: "Oracle", value: 350 },
{ name: "Salesforce", value: 260 },
{ name: "PepsiCo", value: 260 },
{ name: "McDonald's", value: 210 },
{ name: "Costco", value: 350 },
{ name: "IBM", value: 160 },
{ name: "Intel", value: 130 },
{ name: "AMD", value: 220 },

{ name: "Shell", value: 220 },
{ name: "ExxonMobil", value: 420 },
{ name: "Chevron", value: 280 },
{ name: "BP", value: 100 },
{ name: "TotalEnergies", value: 160 },
{ name: "Siemens", value: 120 },
{ name: "Volkswagen", value: 60 },
{ name: "Mercedes-Benz Group", value: 70 },
{ name: "BMW", value: 65 },
{ name: "Ferrari", value: 70 },

{ name: "Sony", value: 110 },
{ name: "Nintendo", value: 60 },
{ name: "Activision Blizzard", value: 70 },
{ name: "Tencent Games", value: 380 },
{ name: "Roblox", value: 25 },
{ name: "Unity", value: 12 },
{ name: "Epic Games", value: 32 },
{ name: "Spotify", value: 50 },
{ name: "Warner Bros Discovery", value: 20 },
{ name: "Disney", value: 180 },

{ name: "Pfizer", value: 160 },
{ name: "Johnson & Johnson", value: 380 },
{ name: "Merck & Co.", value: 320 },
{ name: "Novo Nordisk", value: 550 },
{ name: "Roche", value: 230 },
{ name: "AstraZeneca", value: 240 },
{ name: "Bayer", value: 30 },
{ name: "BioNTech", value: 20 },
{ name: "Moderna", value: 40 },
{ name: "GSK", value: 70 },

{ name: "Uber", value: 120 },
{ name: "Lyft", value: 4 },
{ name: "Airbnb", value: 100 },
{ name: "Booking Holdings", value: 140 },
{ name: "Delta Airlines", value: 25 },
{ name: "United Airlines", value: 20 },
{ name: "American Airlines", value: 10 },
{ name: "Ryanair", value: 25 },
{ name: "Lufthansa", value: 10 },
{ name: "Emirates", value: 60 },

{ name: "PayPal", value: 70 },
{ name: "Block (Square)", value: 30 },
{ name: "Coinbase", value: 50 },
{ name: "Binance", value: 15 },
{ name: "Stripe", value: 60 },
{ name: "Intuit", value: 180 },
{ name: "Shopify", value: 90 },
{ name: "eBay", value: 20 },
{ name: "Alibaba", value: 180 },
{ name: "JD.com", value: 40 },

{ name: "Heineken", value: 55 },
{ name: "Anheuser-Busch", value: 110 },
{ name: "LVMH", value: 420 },
{ name: "Hermès", value: 260 },
{ name: "Zara (Inditex)", value: 120 },
{ name: "H&M", value: 20 },
{ name: "Nike", value: 150 },
{ name: "Adidas", value: 30 },
{ name: "Puma", value: 10 },
      { name: "Under Armour", value: 3 }
    ]
  },

  geografie: {
    label: "Einwohner",
    unit: "Mio.",
    key: "value",
    threshold: 20,
    items: [
      { name: "China", value: 1410 },
      { name: "Mexiko", value: 130 },
{ name: "Japan", value: 125 },
{ name: "Philippinen", value: 118 },
{ name: "Äthiopien", value: 126 },
{ name: "Ägypten", value: 110 },
{ name: "Vietnam", value: 100 },
{ name: "Iran", value: 89 },
{ name: "Türkei", value: 86 },
{ name: "Deutschland", value: 84 },
{ name: "Thailand", value: 71 },
{ name: "Frankreich", value: 65 },

{ name: "Vereinigtes Königreich", value: 68 },
{ name: "Italien", value: 59 },
{ name: "Tansania", value: 67 },
{ name: "Südafrika", value: 60 },
{ name: "Myanmar", value: 55 },
{ name: "Kolumbien", value: 52 },
{ name: "Kenya", value: 57 },
{ name: "Spanien", value: 48 },
{ name: "Argentinien", value: 46 },
{ name: "Sudan", value: 48 },

{ name: "Ukraine", value: 36 },
{ name: "Uganda", value: 49 },
{ name: "Algerien", value: 45 },
{ name: "Irak", value: 45 },
{ name: "Polen", value: 38 },
{ name: "Kanada", value: 40 },
{ name: "Marokko", value: 37 },
{ name: "Saudi-Arabien", value: 36 },
{ name: "Usbekistan", value: 36 },
{ name: "Peru", value: 34 },

{ name: "Malaysia", value: 34 },
{ name: "Angola", value: 36 },
{ name: "Ghana", value: 34 },
{ name: "Mosambik", value: 33 },
{ name: "Jemen", value: 34 },
{ name: "Nepal", value: 30 },
{ name: "Venezuela", value: 29 },
{ name: "Madagaskar", value: 30 },
{ name: "Australien", value: 26 },
{ name: "Nordkorea", value: 26 },

{ name: "Kamerun", value: 28 },
{ name: "Elfenbeinküste", value: 29 },
{ name: "Niger", value: 28 },
{ name: "Taiwan", value: 24 },
{ name: "Sri Lanka", value: 22 },
{ name: "Burkina Faso", value: 23 },
{ name: "Mali", value: 22 },
{ name: "Chile", value: 20 },
{ name: "Rumänien", value: 19 },
{ name: "Kasachstan", value: 19 },

{ name: "Syrien", value: 22 },
{ name: "Malawi", value: 21 },
{ name: "Niederlande", value: 18 },
{ name: "Ecuador", value: 18 },
{ name: "Sambia", value: 20 },
{ name: "Guatemala", value: 18 },
{ name: "Senegal", value: 18 },
{ name: "Tschad", value: 18 },
{ name: "Somalia", value: 18 },
{ name: "Zimbabwe", value: 16 },

{ name: "Kambodscha", value: 17 },
{ name: "Südsudan", value: 11 },
{ name: "Ruanda", value: 14 },
{ name: "Benin", value: 14 },
{ name: "Burundi", value: 13 },
{ name: "Tunesien", value: 12 },
{ name: "Bolivien", value: 12 },
{ name: "Belgien", value: 12 },
{ name: "Haiti", value: 11 },
{ name: "Jordanien", value: 11 },

{ name: "Dominikanische Republik", value: 11 },
{ name: "Aserbaidschan", value: 10 },
{ name: "Griechenland", value: 10 },
{ name: "Tschechien", value: 11 },
{ name: "Portugal", value: 10 },
{ name: "Schweden", value: 10 },
{ name: "Ungarn", value: 10 },
{ name: "Vereinigte Arabische Emirate", value: 10 },
{ name: "Honduras", value: 10 },
{ name: "Weißrussland", value: 9 },

{ name: "Österreich", value: 9 },
{ name: "Schweiz", value: 9 },
{ name: "Israel", value: 10 },
{ name: "Togo", value: 10 },
{ name: "Paraguay", value: 7 },
{ name: "Laos", value: 7 },
{ name: "Bulgarien", value: 6 },
{ name: "Serbien", value: 7 },
{ name: "Libyen", value: 7 },
{ name: "Nicaragua", value: 7 },
      { name: "Dänemark", value: 6 }
    ]
  },

  tiere: {
    label: "Geschwindigkeit",
    unit: "km/h",
    key: "value",
    threshold: 15,
    items: [
      { name: "Gepard", value: 110 },
{ name: "Tiger", value: 65 },
{ name: "Panther", value: 58 },
{ name: "Jaguar", value: 80 },
{ name: "Leopard", value: 58 },
{ name: "Schneeleopard", value: 55 },
{ name: "Puma", value: 72 },
{ name: "Serval", value: 80 },
{ name: "Karakal", value: 80 },
{ name: "Gepardjunges", value: 50 },
{ name: "Hyänenhund", value: 60 },

{ name: "Dingo", value: 60 },
{ name: "Fuchs", value: 50 },
{ name: "Luchs", value: 55 },
{ name: "Bobcat", value: 50 },
{ name: "Kojote", value: 65 },
{ name: "Schakal", value: 55 },
{ name: "Marderhund", value: 45 },
{ name: "Waschbär", value: 25 },
{ name: "Dachs", value: 30 },
{ name: "Marder", value: 35 },

{ name: "Elefant", value: 40 },
{ name: "Nashorn", value: 50 },
{ name: "Flusspferd", value: 30 },
{ name: "Giraffe", value: 60 },
{ name: "Zebra", value: 65 },
{ name: "Büffel", value: 55 },
{ name: "Antilope (Springbock)", value: 90 },
{ name: "Gazelle", value: 80 },
{ name: "Oryx", value: 60 },
{ name: "Impala", value: 75 },

{ name: "Esel", value: 50 },
{ name: "Kamel", value: 65 },
{ name: "Yak", value: 40 },
{ name: "Rentier", value: 60 },
{ name: "Elch", value: 55 },
{ name: "Hirsch", value: 70 },
{ name: "Reh", value: 60 },
{ name: "Wildschwein", value: 40 },
{ name: "Känguru (Rot)", value: 70 },
{ name: "Koala", value: 10 },

{ name: "Panda", value: 30 },
{ name: "Bär (Braun)", value: 55 },
{ name: "Grizzly", value: 56 },
{ name: "Eisbär", value: 40 },
{ name: "Wombat", value: 40 },
{ name: "Opossum", value: 25 },
{ name: "Stachelschwein", value: 20 },
{ name: "Gürteltier", value: 30 },
{ name: "Faultier", value: 0.3 },
{ name: "Ameisenbär", value: 30 },

{ name: "Huhn", value: 14 },
{ name: "Truthahn", value: 20 },
{ name: "Gans", value: 30 },
{ name: "Ente", value: 25 },
{ name: "Pfau", value: 16 },
{ name: "Flamingo", value: 60 },
{ name: "Pelikan", value: 65 },
{ name: "Adler", value: 160 },
{ name: "Falke", value: 200 },
{ name: "Eule", value: 80 },

{ name: "Taube", value: 120 },
{ name: "Krähe", value: 80 },
{ name: "Papagei", value: 50 },
{ name: "Kolibri", value: 50 },
{ name: "Möwe", value: 90 },
{ name: "Kondor", value: 70 },
{ name: "Geier", value: 65 },
{ name: "Schwan", value: 80 },
{ name: "Storch", value: 65 },
{ name: "Kranich", value: 70 },

{ name: "Hase (Wildkaninchen)", value: 60 },
{ name: "Hamster", value: 12 },
{ name: "Meerschweinchen", value: 10 },
{ name: "Chinchilla", value: 25 },
{ name: "Kaninchen", value: 45 },
{ name: "Eichhörnchen", value: 32 },
{ name: "Igel", value: 6 },
{ name: "Maulwurf", value: 5 },
{ name: "Biber", value: 30 },
{ name: "Otter", value: 40 },

{ name: "Krokodil", value: 17 },
{ name: "Alligator", value: 20 },
{ name: "Warane", value: 40 },
{ name: "Komodowaran", value: 20 },
{ name: "Schlange (Kobra)", value: 20 },
{ name: "Schlange (Python)", value: 10 },
{ name: "Schildkröte (Land)", value: 1 },
{ name: "Schildkröte (Meer)", value: 35 },
{ name: "Leguan", value: 30 },
{ name: "Chamäleon", value: 1 },

{ name: "Hai (Weißer Hai)", value: 60 },
{ name: "Hai (Mako)", value: 74 },
{ name: "Delfin", value: 55 },
{ name: "Orca", value: 56 },
{ name: "Wal (Blauwal)", value: 50 },
{ name: "Robbe", value: 35 },
{ name: "Seelöwe", value: 40 },
{ name: "Pinguin", value: 10 },
{ name: "Thunfisch", value: 70 },
      { name: "Schwertfisch", value: 100 }
    ]
  },

  musik: {
    label: "Streams",
    unit: "Mio.",
    key: "value",
    threshold: 5000,
    items: [
      { name: "Taylor Swift", value: 40000 },
{ name: "Justin Bieber", value: 55000 },
{ name: "Dua Lipa", value: 42000 },
{ name: "Olivia Rodrigo", value: 30000 },
{ name: "Doja Cat", value: 28000 },
{ name: "Kendrick Lamar", value: 25000 },
{ name: "Travis Scott", value: 35000 },
{ name: "SZA", value: 24000 },
{ name: "Bruno Mars", value: 32000 },
{ name: "Lady Gaga", value: 28000 },
{ name: "Katy Perry", value: 26000 },

{ name: "Imagine Dragons", value: 35000 },
{ name: "Coldplay", value: 40000 },
{ name: "Maroon 5", value: 30000 },
{ name: "The Beatles", value: 25000 },
{ name: "Queen", value: 26000 },
{ name: "Linkin Park", value: 24000 },
{ name: "OneRepublic", value: 20000 },
{ name: "The Chainsmokers", value: 22000 },
{ name: "Shawn Mendes", value: 28000 },
{ name: "Camila Cabello", value: 20000 },

{ name: "Lil Nas X", value: 18000 },
{ name: "21 Savage", value: 30000 },
{ name: "Future", value: 28000 },
{ name: "Metro Boomin", value: 25000 },
{ name: "Nicki Minaj", value: 26000 },
{ name: "Cardi B", value: 22000 },
{ name: "J. Cole", value: 20000 },
{ name: "Post Malone", value: 35000 },
{ name: "The Kid LAROI", value: 18000 },
{ name: "Juice WRLD", value: 35000 },

{ name: "Bad Bunny", value: 50000 },
{ name: "Karol G", value: 30000 },
{ name: "Peso Pluma", value: 25000 },
{ name: "Rosalía", value: 18000 },
{ name: "Ozuna", value: 20000 },
{ name: "J Balvin", value: 28000 },
{ name: "Maluma", value: 22000 },
{ name: "Anitta", value: 15000 },
{ name: "Becky G", value: 14000 },
{ name: "Rauw Alejandro", value: 20000 },

{ name: "Adele", value: 30000 },
{ name: "Sam Smith", value: 25000 },
{ name: "Halsey", value: 20000 },
{ name: "Lana Del Rey", value: 28000 },
{ name: "The Neighbourhood", value: 15000 },
{ name: "Billie Eilish", value: 30000 },
{ name: "Khalid", value: 20000 },
{ name: "Zayn", value: 15000 },
{ name: "Harry Styles", value: 35000 },
{ name: "Niall Horan", value: 12000 },

{ name: "David Guetta", value: 30000 },
{ name: "Calvin Harris", value: 28000 },
{ name: "Avicii", value: 26000 },
{ name: "Martin Garrix", value: 25000 },
{ name: "Marshmello", value: 24000 },
{ name: "Alan Walker", value: 23000 },
{ name: "Kygo", value: 20000 },
{ name: "Zedd", value: 18000 },
{ name: "Diplo", value: 15000 },
{ name: "Skrillex", value: 16000 },

{ name: "BTS", value: 35000 },
{ name: "BLACKPINK", value: 30000 },
{ name: "Stray Kids", value: 18000 },
{ name: "TWICE", value: 15000 },
{ name: "NewJeans", value: 12000 },
{ name: "SEVENTEEN", value: 14000 },
{ name: "TXT", value: 13000 },
{ name: "ITZY", value: 10000 },
{ name: "LE SSERAFIM", value: 11000 },
{ name: "EXO", value: 9000 },

{ name: "Miley Cyrus", value: 25000 },
{ name: "Selena Gomez", value: 24000 },
{ name: "Demi Lovato", value: 18000 },
{ name: "Charlie Puth", value: 20000 },
{ name: "Jason Derulo", value: 18000 },
{ name: "Pitbull", value: 15000 },
{ name: "Flo Rida", value: 14000 },
{ name: "Alicia Keys", value: 12000 },
{ name: "Sia", value: 22000 },
{ name: "Ellie Goulding", value: 20000 },

{ name: "The Rolling Stones", value: 15000 },
{ name: "AC/DC", value: 14000 },
{ name: "Red Hot Chili Peppers", value: 18000 },
{ name: "Green Day", value: 16000 },
{ name: "Blink‑182", value: 14000 },
{ name: "Arctic Monkeys", value: 20000 },
{ name: "Gorillaz", value: 15000 },
{ name: "The Killers", value: 16000 },
{ name: "Imagine Dragons", value: 35000 },
      { name: "Fall Out Boy", value: 12000 }
    ]
  },

filme: {
  label: "Einspielergebnis",
  unit: "Mio. €",
  key: "value",
  threshold: 300,
  items: [
    { name: "Avatar (2009)", value: 2800 },
    { name: "Spider-Man: No Way Home (2021)", value: 1900 },
    { name: "Furious 7 (2015)", value: 1516 },

    { name: "Avengers: Endgame (2019)", value: 2797 },
    { name: "Titanic (1997)", value: 2187 },
    { name: "Star Wars: The Force Awakens (2015)", value: 2068 },
    { name: "Avengers: Infinity War (2018)", value: 2048 },
    { name: "Jurassic World (2015)", value: 1671 },
    { name: "The Lion King (2019)", value: 1663 },
    { name: "The Avengers (2012)", value: 1519 },
    { name: "Top Gun: Maverick (2022)", value: 1495 },
    { name: "Frozen II (2019)", value: 1450 },
    { name: "Barbie (2023)", value: 1440 },
    { name: "Harry Potter und die Heiligtümer des Todes – Teil 2 (2011)", value: 1342 },
    { name: "Black Panther (2018)", value: 1337 },
    { name: "Super Mario Bros. (2023)", value: 1340 },
    { name: "Star Wars: The Last Jedi (2017)", value: 1333 },
    { name: "Jurassic World: Fallen Kingdom (2018)", value: 1310 },
    { name: "Frozen (2013)", value: 1290 },
    { name: "Beauty and the Beast (2017)", value: 1264 },
    { name: "Incredibles 2 (2018)", value: 1243 },
    { name: "The Fate of the Furious (2017)", value: 1236 },
    { name: "Iron Man 3 (2013)", value: 1215 },
    { name: "Minions (2015)", value: 1159 },
    { name: "Captain America: Civil War (2016)", value: 1153 },
    { name: "Aquaman (2018)", value: 1148 },
    { name: "The Lord of the Rings: The Return of the King (2003)", value: 1147 },
    { name: "Skyfall (2012)", value: 1108 },
    { name: "Transformers: Dark of the Moon (2011)", value: 1123 },
    { name: "Joker (2019)", value: 1074 },
    { name: "Zootopia (2016)", value: 1023 },
    { name: "Alice in Wonderland (2010)", value: 1025 },
    { name: "Rogue One: A Star Wars Story (2016)", value: 1056 },
    { name: "Toy Story 4 (2019)", value: 1073 },
    { name: "Pirates of the Caribbean: On Stranger Tides (2011)", value: 1045 },
    { name: "Despicable Me 3 (2017)", value: 1035 },
    { name: "Finding Dory (2016)", value: 1028 },
    { name: "Star Wars: Episode I – The Phantom Menace (1999)", value: 1027 },
    { name: "The Dark Knight Rises (2012)", value: 1081 },
    { name: "The Hobbit: An Unexpected Journey (2012)", value: 1017 },
    { name: "The Hobbit: The Desolation of Smaug (2013)", value: 958 },
    { name: "The Hobbit: The Battle of the Five Armies (2014)", value: 956 },
    { name: "Jumanji: Welcome to the Jungle (2017)", value: 962 },
    { name: "Spider-Man: Far From Home (2019)", value: 1131 },
    { name: "Captain Marvel (2019)", value: 1130 },
    { name: "Transformers: Age of Extinction (2014)", value: 1104 },
    { name: "The Dark Knight (2008)", value: 1006 },
    { name: "Shrek 2 (2004)", value: 928 },
    { name: "Bohemian Rhapsody (2018)", value: 910 },
    { name: "The Hunger Games: Catching Fire (2013)", value: 865 },
    { name: "Inside Out (2015)", value: 858 },
    { name: "Coco (2017)", value: 814 },
    { name: "Guardians of the Galaxy Vol. 3 (2023)", value: 845 },
    { name: "Guardians of the Galaxy Vol. 2 (2017)", value: 863 },
    { name: "Guardians of the Galaxy (2014)", value: 773 },
    { name: "Deadpool (2016)", value: 782 },
    { name: "Deadpool 2 (2018)", value: 786 },
    { name: "The Batman (2022)", value: 770 },
    { name: "It (2017)", value: 701 },
    { name: "The Matrix Reloaded (2003)", value: 742 },
    { name: "Twilight: Breaking Dawn – Part 2 (2012)", value: 829 },
    { name: "Twilight: Breaking Dawn – Part 1 (2011)", value: 712 },
    { name: "The Amazing Spider-Man (2012)", value: 757 },
    { name: "The Amazing Spider-Man 2 (2014)", value: 709 },
    { name: "Mission Impossible: Fallout (2018)", value: 791 },
    { name: "Mission Impossible: Ghost Protocol (2011)", value: 694 },
    { name: "Kung Fu Panda 3 (2016)", value: 521 },
    { name: "Kung Fu Panda 2 (2011)", value: 665 },
    { name: "Kung Fu Panda (2008)", value: 631 },
    { name: "Madagascar 3 (2012)", value: 746 },
    { name: "Madagascar 2 (2008)", value: 603 },
    { name: "Madagascar (2005)", value: 532 },
    { name: "The Incredibles (2004)", value: 633 },
    { name: "Monsters University (2013)", value: 743 },
    { name: "Monsters, Inc. (2001)", value: 577 },
    { name: "Up (2009)", value: 735 },
    { name: "Ratatouille (2007)", value: 623 },
    { name: "Cars (2006)", value: 462 },
    { name: "Cars 2 (2011)", value: 559 },
    { name: "Cars 3 (2017)", value: 383 },
    { name: "The Simpsons Movie (2007)", value: 536 },
    { name: "Ice Age (2002)", value: 383 },
    { name: "Ice Age 2 (2006)", value: 660 },
    { name: "Ice Age 3 (2009)", value: 886 },
    { name: "Ice Age 4 (2012)", value: 877 },
    { name: "Ice Age 5 (2016)", value: 408 },
    { name: "Hotel Transylvania (2012)", value: 358 },
    { name: "Hotel Transylvania 2 (2015)", value: 474 },
    { name: "Hotel Transylvania 3 (2018)", value: 528 },
    { name: "Sonic the Hedgehog 2 (2022)", value: 405 },
    { name: "Sonic the Hedgehog (2020)", value: 319 },
    { name: "Dune (2021)", value: 434 },
    { name: "Dune Part Two (2024)", value: 711 },
    { name: "Oppenheimer (2023)", value: 960 },
    { name: "Interstellar (2014)", value: 678 },
    { name: "Inception (2010)", value: 836 },
    { name: "Tenet (2020)", value: 365 },
    { name: "The Revenant (2015)", value: 533 },
    { name: "Gladiator (2000)", value: 503 }
  ]
},

alter: {
  label: "Wer ist älter?",
  unit: "Jahre",
  key: "value",
  threshold: 30,
  items: [
// ⭐ Erweiterungen – Events, Erfindungen, Kultobjekte, Fahrzeuge, Geschichte

{ name: "Fall der Berliner Mauer", value: 37 },        // 1989
{ name: "Mondlandung", value: 57 },                    // 1969
{ name: "Erfindung des Internets", value: 53 },        // 1973
{ name: "Erste E-Mail", value: 55 },                   // 1971
{ name: "Erste SMS", value: 34 },                      // 1992
{ name: "Erste Website", value: 35 },                  // 1991
{ name: "Wikipedia", value: 25 },                      // 2001
{ name: "Walkman", value: 47 },                        // 1979
{ name: "Game Boy", value: 37 },                       // 1989
{ name: "Pac-Man", value: 46 },                        // 1980
{ name: "Tetris", value: 42 },                         // 1984
{ name: "Rock'n'Roll", value: 75 },                    // 1951
{ name: "Hip-Hop", value: 53 },                        // 1973
{ name: "Erster Computer", value: 82 },                // 1944
{ name: "Erste Farbfernseher", value: 70 },            // 1956
{ name: "Erste Digitalkamera", value: 48 },            // 1978
{ name: "Erste Videospielkonsole", value: 52 },        // 1974
{ name: "Erste CD", value: 44 },                       // 1982
{ name: "Erste Blu-ray", value: 20 },                  // 2006
{ name: "Erste iPhone", value: 19 },                   // 2007
{ name: "Erste Android", value: 15 },                  // 2011
{ name: "Erste PlayStation", value: 32 },              // 1994
{ name: "Erste Xbox", value: 25 },                     // 2001
{ name: "Erste Nintendo Konsole", value: 51 },         // 1975
{ name: "Super Nintendo", value: 36 },                 // 1990
{ name: "Nintendo 64", value: 30 },                    // 1996
{ name: "PlayStation 2", value: 26 },                  // 2000
{ name: "PS5", value: 6 },                             // 2020

// ⭐ Fahrzeuge & Kultobjekte
{ name: "Trabi", value: 69 },                          // 1957
{ name: "Volkswagen Käfer", value: 88 },               // 1938
{ name: "Audi Quattro", value: 46 },                   // 1980
{ name: "BMW 3er", value: 54 },                        // 1972
{ name: "Ford Mustang", value: 62 },                   // 1964
{ name: "Porsche 911", value: 63 },                    // 1963
{ name: "Tesla Model S", value: 14 },                  // 2012

// ⭐ Historische Ereignisse
{ name: "Erster Weltkrieg", value: 112 },              // 1914
{ name: "Zweiter Weltkrieg", value: 87 },              // 1939
{ name: "Mondfinsternis total 1963", value: 63 },      // 1963
{ name: "Erste bemannte Raumfahrt", value: 65 },       // 1961
{ name: "Erste ISS Mission", value: 26 },              // 2000
{ name: "Euro Einführung", value: 24 },                // 2002
{ name: "Erste Olympische Winterspiele", value: 102 }, // 1924
{ name: "Erste Fußball-EM", value: 66 },               // 1960
{ name: "Erste Champions League Finale", value: 71 },  // 1955

// ⭐ Kultur & Medien
{ name: "Erste Batman Comic", value: 87 },             // 1939
{ name: "Erste Superman Comic", value: 88 },           // 1938
{ name: "Erste Marvel Comic", value: 87 },             // 1939
{ name: "Erste Disney Film", value: 89 },              // 1937
{ name: "Erste Pokémon Spiel", value: 30 },            // 1996
{ name: "Erste Harry Potter Buch", value: 29 },        // 1997
{ name: "Erste Star Wars Film", value: 49 },           // 1977

// ⭐ Technik & Innovation
{ name: "Erste Glühbirne", value: 147 },               // 1879
{ name: "Erste Telefon", value: 150 },                 // 1876
{ name: "Erste Kamera", value: 197 },                  // 1829
{ name: "Erste Eisenbahn", value: 201 },               // 1825
{ name: "Erste Automobil", value: 140 },               // 1886
{ name: "Erste Flugzeug", value: 123 },                // 1903
{ name: "Erste Atomuhr", value: 78 },                  // 1948
{ name: "Erste Computermaus", value: 58 },             // 1968
{ name: "Erste E-Auto", value: 132 },                  // 1894
{ name: "Erste Drohne", value: 109 },                  // 1917

// ⭐ Weitere berühmte Personen
{ name: "Nelson Mandela", value: 108 },                // 1918
{ name: "Winston Churchill", value: 152 },             // 1874
{ name: "Queen Elizabeth II", value: 100 },            // 1926
{ name: "Charlie Chaplin", value: 137 },               // 1889
{ name: "Pablo Picasso", value: 145 },                 // 1881
{ name: "Vincent van Gogh", value: 173 },              // 1853
{ name: "Marie Curie", value: 159 },                   // 1867
{ name: "Isaac Newton", value: 384 },                  // 1642
{ name: "Galileo Galilei", value: 462 },               // 1564
{ name: "Johann Wolfgang von Goethe", value: 277 },    // 1749
{ name: "Mozart", value: 270 },                        // 1756
{ name: "Beethoven", value: 256 },                     // 1770
// ⭐ Weitere Unternehmen

{ name: "IBM", value: 115 },                 // 1911
{ name: "Intel", value: 58 },                // 1968
{ name: "AMD", value: 57 },                  // 1969
{ name: "Nvidia", value: 33 },               // 1993
{ name: "Samsung", value: 88 },              // 1938
{ name: "LG", value: 78 },                   // 1947
{ name: "Dell", value: 42 },                 // 1984
{ name: "HP", value: 87 },                   // 1939
{ name: "Siemens", value: 179 },             // 1847
{ name: "Bosch", value: 140 },               // 1886
{ name: "Philips", value: 135 },             // 1891
{ name: "Panasonic", value: 108 },           // 1918
{ name: "Sony Music", value: 97 },           // 1929
{ name: "Warner Bros.", value: 103 },        // 1923
{ name: "Universal Pictures", value: 114 },  // 1912
{ name: "Paramount Pictures", value: 114 },  // 1912
{ name: "Coca-Cola Company", value: 140 },   // 1886
{ name: "PepsiCo", value: 61 },              // 1965
{ name: "Nestlé", value: 160 },              // 1866
{ name: "Unilever", value: 95 },             // 1930
{ name: "McDonald's", value: 81 },           // 1945
{ name: "Burger King", value: 70 },          // 1956
{ name: "KFC", value: 71 },                  // 1955
{ name: "Starbucks", value: 55 },            // 1971
{ name: "Subway", value: 61 },               // 1965
{ name: "IKEA", value: 83 },                 // 1943
{ name: "H&M", value: 79 },                  // 1947
{ name: "Zara", value: 51 },                 // 1975
{ name: "Adidas", value: 77 },               // 1949
{ name: "Puma", value: 78 },                 // 1948
{ name: "Nike", value: 62 },                 // 1964
{ name: "Reebok", value: 68 },               // 1958
{ name: "New Balance", value: 120 },         // 1906
{ name: "Rolex", value: 121 },               // 1905
{ name: "TAG Heuer", value: 166 },           // 1860
{ name: "Louis Vuitton", value: 172 },       // 1854
{ name: "Gucci", value: 105 },               // 1921
{ name: "Prada", value: 113 },               // 1913
{ name: "Chanel", value: 117 },              // 1909
{ name: "Hermès", value: 189 },              // 1837
{ name: "Ford", value: 123 },                // 1903
{ name: "General Motors", value: 118 },      // 1908
{ name: "Toyota", value: 89 },               // 1937
{ name: "Honda", value: 78 },                // 1948
{ name: "Volkswagen", value: 89 },           // 1937
{ name: "Porsche", value: 88 },              // 1938
{ name: "Audi", value: 117 },                // 1909
{ name: "Opel", value: 157 },                // 1862
{ name: "Renault", value: 127 },             // 1899
{ name: "Fiat", value: 127 },                // 1899
{ name: "Ferrari", value: 79 },              // 1947
{ name: "Lamborghini", value: 63 },          // 1963
{ name: "Bugatti", value: 117 },             // 1909
{ name: "Airbus", value: 56 },               // 1970
{ name: "Boeing", value: 110 },              // 1916
{ name: "Deutsche Bank", value: 156 },       // 1870
{ name: "Commerzbank", value: 156 },         // 1870
{ name: "PayPal", value: 27 },               // 1999
{ name: "Visa", value: 66 },                 // 1960
{ name: "Mastercard", value: 57 },           // 1969
{ name: "American Express", value: 176 },    // 1850
{ name: "Shell", value: 115 },               // 1911
{ name: "BP", value: 117 },                  // 1909
{ name: "ExxonMobil", value: 146 },          // 1882
{ name: "Tesla", value: 23 },                // 2003
{ name: "SpaceX", value: 24 },               // 2002
{ name: "OpenAI", value: 11 },               // 2015
{ name: "Nokia", value: 161 },               // 1865
{ name: "Canon", value: 89 },                // 1937
{ name: "GoPro", value: 22 },                // 2004
{ name: "Spotify", value: 20 },              // 2006
{ name: "Uber", value: 17 },                 // 2009
{ name: "Airbnb", value: 18 },               // 2008
{ name: "TikTok", value: 10 },               // 2016
{ name: "Snapchat", value: 13 },             // 2013
{ name: "Red Bull", value: 39 },             // 1987
{ name: "Haribo", value: 105 },              // 1921
{ name: "Nivea", value: 115 },               // 1911
{ name: "C&A", value: 180 },                 // 1841
{ name: "Lidl", value: 53 },                 // 1973
{ name: "Aldi", value: 83 },                 // 1943
{ name: "MediaMarkt", value: 47 },           // 1979
{ name: "Saturn", value: 62 },               // 1964
{ name: "T-Mobile", value: 31 },             // 1995
{ name: "Vodafone", value: 41 },             // 1985
{ name: "O2", value: 22 }                    // 2004


  ]
},

socialmedia: {
  label: "Instagram Follower",
  unit: "Mio.",
  key: "value",
  threshold: 50,
  items: [
    { name: "Cristiano Ronaldo", value: 630 }, // Instagram, 2026
    { name: "Lionel Messi", value: 500 }, // Instagram, 2026
    { name: "Selena Gomez", value: 430 }, // Instagram, 2026
    { name: "Kylie Jenner", value: 400 }, // Instagram, 2026
    { name: "Dwayne Johnson", value: 390 }, // Instagram, 2026
    { name: "Ariana Grande", value: 380 }, // Instagram, 2026
    { name: "Kim Kardashian", value: 360 }, // Instagram, 2026
    { name: "Taylor Swift", value: 320 }, // Instagram, 2026
    { name: "Beyoncé", value: 320 }, // Instagram, 2026
    { name: "Justin Bieber", value: 290 }, // Instagram, 2026

    { name: "Virat Kohli", value: 270 }, // Instagram, 2026
    { name: "Khaby Lame", value: 160 }, // Instagram, 2026
    { name: "Zendaya", value: 180 }, // Instagram, 2026
    { name: "Nicki Minaj", value: 230 }, // Instagram, 2026
    { name: "Katy Perry", value: 200 }, // Instagram, 2026

    { name: "MrBeast", value: 110 }, // Instagram, 2026
    { name: "Neymar", value: 220 }, // Instagram, 2026
    { name: "LeBron James", value: 160 }, // Instagram, 2026
    { name: "Conor McGregor", value: 120 }, // Instagram, 2026
    { name: "Snoop Dogg", value: 90 }, // Instagram, 2026

    { name: "Billie Eilish", value: 120 }, // Instagram, 2026
    { name: "Bad Bunny", value: 50 }, // Instagram, 2026
    { name: "Shakira", value: 90 }, // Instagram, 2026
    { name: "Jennifer Lopez", value: 250 }, // Instagram, 2026
    { name: "Rihanna", value: 150 }, // Instagram, 2026

    { name: "KSI", value: 15 }, // Instagram, 2026
    { name: "PewDiePie", value: 22 }, // Instagram, 2026
    { name: "Ninja", value: 14 }, // Instagram, 2026
    { name: "Addison Rae", value: 40 }, // Instagram, 2026
    { name: "Charli D'Amelio", value: 50 }, // Instagram, 2026
// ⭐ Influencer & Stars (mit Länderflaggen)
{ name: "Emma Watson 🇬🇧", value: 75 }, // Instagram, 2026
{ name: "Chris Hemsworth 🇦🇺", value: 110 }, // Instagram, 2026
{ name: "Tom Holland 🇬🇧", value: 90 }, // Instagram, 2026
{ name: "Gal Gadot 🇮🇱", value: 110 }, // Instagram, 2026
{ name: "Kevin Hart 🇺🇸", value: 80 }, // Instagram, 2026

{ name: "Cardi B 🇺🇸", value: 170 }, // Instagram, 2026
{ name: "Post Malone 🇺🇸", value: 35 }, // Instagram, 2026
{ name: "Dua Lipa 🇬🇧", value: 90 }, // Instagram, 2026
{ name: "The Weeknd 🇨🇦", value: 60 }, // Instagram, 2026
{ name: "Doja Cat 🇺🇸", value: 35 }, // Instagram, 2026

{ name: "Kendall Jenner 🇺🇸", value: 290 }, // Instagram, 2026
{ name: "Gigi Hadid 🇺🇸", value: 80 }, // Instagram, 2026
{ name: "Bella Hadid 🇺🇸", value: 60 }, // Instagram, 2026
{ name: "Hailey Bieber 🇺🇸", value: 55 }, // Instagram, 2026
{ name: "Sommer Ray 🇺🇸", value: 27 }, // Instagram, 2026

{ name: "Will Smith 🇺🇸", value: 75 }, // Instagram, 2026
{ name: "Jason Statham 🇬🇧", value: 45 }, // Instagram, 2026
{ name: "Vin Diesel 🇺🇸", value: 100 }, // Instagram, 2026
{ name: "Robert Downey Jr. 🇺🇸", value: 60 }, // Instagram, 2026
{ name: "Chris Evans 🇺🇸", value: 20 }, // Instagram, 2026

{ name: "Zac Efron 🇺🇸", value: 60 }, // Instagram, 2026
{ name: "Millie Bobby Brown 🇬🇧", value: 75 }, // Instagram, 2026
{ name: "Noah Schnapp 🇺🇸", value: 25 }, // Instagram, 2026
{ name: "Finn Wolfhard 🇨🇦", value: 25 }, // Instagram, 2026
{ name: "Sadie Sink 🇺🇸", value: 30 }, // Instagram, 2026

{ name: "Bella Poarch 🇵🇭", value: 15 }, // Instagram, 2026
{ name: "Loren Gray 🇺🇸", value: 25 }, // Instagram, 2026
{ name: "Sommer Ray 🇺🇸", value: 27 }, // Instagram, 2026
{ name: "Brent Rivera 🇺🇸", value: 30 }, // Instagram, 2026
{ name: "James Charles 🇺🇸", value: 25 }, // Instagram, 2026

{ name: "Logan Paul 🇺🇸", value: 30 }, // Instagram, 2026
{ name: "Jake Paul 🇺🇸", value: 25 }, // Instagram, 2026
{ name: "KSI 🇬🇧", value: 15 }, // Instagram, 2026
{ name: "PewDiePie 🇸🇪", value: 22 }, // Instagram, 2026
{ name: "Markiplier 🇺🇸", value: 12 }, // Instagram, 2026

{ name: "Jacksepticeye 🇮🇪", value: 10 }, // Instagram, 2026
{ name: "Valkyrae 🇺🇸", value: 5 }, // Instagram, 2026
{ name: "Pokimane 🇲🇦", value: 7 }, // Instagram, 2026
{ name: "Ninja 🇺🇸", value: 14 }, // Instagram, 2026
{ name: "MrBeast 🇺🇸", value: 110 }, // Instagram, 2026

{ name: "Virat Kohli 🇮🇳", value: 270 }, // Instagram, 2026
{ name: "MS Dhoni 🇮🇳", value: 45 }, // Instagram, 2026
{ name: "Sachin Tendulkar 🇮🇳", value: 45 }, // Instagram, 2026
{ name: "Hardik Pandya 🇮🇳", value: 30 }, // Instagram, 2026
{ name: "Rohit Sharma 🇮🇳", value: 35 }, // Instagram, 2026

{ name: "Neymar 🇧🇷", value: 220 }, // Instagram, 2026
{ name: "Kylian Mbappé 🇫🇷", value: 110 }, // Instagram, 2026
{ name: "Erling Haaland 🇳🇴", value: 40 }, // Instagram, 2026
{ name: "Vinicius Jr. 🇧🇷", value: 50 }, // Instagram, 2026
{ name: "Antoine Griezmann 🇫🇷", value: 40 }, // Instagram, 2026

{ name: "Lewis Hamilton 🇬🇧", value: 35 }, // Instagram, 2026
{ name: "Max Verstappen 🇳🇱", value: 20 }, // Instagram, 2026
{ name: "Charles Leclerc 🇲🇨", value: 15 }, // Instagram, 2026
{ name: "Lando Norris 🇬🇧", value: 10 }, // Instagram, 2026
{ name: "Daniel Ricciardo 🇦🇺", value: 8 }, // Instagram, 2026

// ⭐ Unternehmen (mit passenden Emojis)
{ name: "Nike 👟", value: 260 }, // Instagram, 2026
{ name: "Adidas 👟", value: 150 }, // Instagram, 2026
{ name: "Zara 👗", value: 70 }, // Instagram, 2026
{ name: "H&M 👚", value: 40 }, // Instagram, 2026
{ name: "Gucci 👜", value: 60 }, // Instagram, 2026

{ name: "Louis Vuitton 🧳", value: 55 }, // Instagram, 2026
{ name: "Mercedes-Benz 🚗", value: 40 }, // Instagram, 2026
{ name: "BMW 🚘", value: 35 }, // Instagram, 2026
{ name: "Ferrari 🏎️", value: 30 }, // Instagram, 2026
{ name: "Lamborghini 🐂", value: 35 }, // Instagram, 2026

{ name: "Apple 🍏", value: 35 }, // Instagram, 2026
{ name: "Samsung 📱", value: 25 }, // Instagram, 2026
{ name: "Netflix 🎬", value: 45 }, // Instagram, 2026
{ name: "Spotify 🎵", value: 12 }, // Instagram, 2026
{ name: "Google 🔍", value: 15 }, // Instagram, 2026

// ⭐ Berühmte Instagram‑Seiten
{ name: "433 ⚽", value: 100 }, // Instagram, 2026
{ name: "9GAG 😂", value: 60 }, // Instagram, 2026
{ name: "NASA 🚀", value: 95 }, // Instagram, 2026
{ name: "Marvel 🎥", value: 70 }, // Instagram, 2026
{ name: "National Geographic 🌍", value: 280 }, // Instagram, 2026

{ name: "Champions League ⚽", value: 110 }, // Instagram, 2026
{ name: "UEFA ⚽", value: 80 }, // Instagram, 2026
{ name: "FIFA ⚽", value: 30 }, // Instagram, 2026
{ name: "Formula 1 🏎️", value: 45 }, // Instagram, 2026
{ name: "NBA 🏀", value: 80 }, // Instagram, 2026

{ name: "Barbie 🎀", value: 12 }, // Instagram, 2026
{ name: "Minecraft ⛏️", value: 10 }, // Instagram, 2026
{ name: "Fortnite 🔫", value: 15 }, // Instagram, 2026
{ name: "Call of Duty 🔥", value: 12 }, // Instagram, 2026
{ name: "Pokémon ⚡", value: 15 }, // Instagram, 2026
{ name: "Premier League ⚽", value: 35 }, // Instagram, 2026
{ name: "Bundesliga ⚽", value: 10 }, // Instagram, 2026
{ name: "LaLiga ⚽", value: 15 }, // Instagram, 2026
{ name: "NFL Memes 🏈😂", value: 12 }, // Instagram, 2026
{ name: "SportsCenter 🏀", value: 30 }, // Instagram, 2026

{ name: "Netflix Geeked 🎬", value: 8 }, // Instagram, 2026
{ name: "Disney+ ✨", value: 12 }, // Instagram, 2026
{ name: "Hulu 🎥", value: 5 }, // Instagram, 2026
{ name: "Prime Video 🎬", value: 10 }, // Instagram, 2026
{ name: "Crunchyroll 🍥", value: 6 }, // Instagram, 2026

{ name: "IGN 🎮", value: 15 }, // Instagram, 2026
{ name: "GameSpot 🎮", value: 8 }, // Instagram, 2026
{ name: "PlayStation 🎮", value: 35 }, // Instagram, 2026
{ name: "Xbox 🎮", value: 15 }, // Instagram, 2026
{ name: "Nintendo 🎮", value: 12 }, // Instagram, 2026

{ name: "Formula E ⚡🏎️", value: 5 }, // Instagram, 2026
{ name: "MotoGP 🏍️", value: 12 }, // Instagram, 2026
{ name: "Red Bull Racing 🏎️", value: 8 }, // Instagram, 2026
{ name: "Ferrari F1 🏎️", value: 10 }, // Instagram, 2026
{ name: "McLaren F1 🧡🏎️", value: 7 }, // Instagram, 2026

{ name: "BBC Earth 🌍", value: 15 }, // Instagram, 2026
{ name: "History Channel 📺", value: 6 }, // Instagram, 2026
{ name: "Animal Planet 🐾", value: 8 }, // Instagram, 2026
{ name: "Food Network 🍽️", value: 6 }, // Instagram, 2026
{ name: "Tasty 🍔", value: 12 }, // Instagram, 2026

{ name: "FashionNova 👗", value: 21 }, // Instagram, 2026
{ name: "Shein 👚", value: 30 }, // Instagram, 2026
{ name: "Gymshark 💪", value: 7 }, // Instagram, 2026
{ name: "GoPro 📷", value: 20 }, // Instagram, 2026
{ name: "LEGO 🧱", value: 12 }, // Instagram, 2026

{ name: "Balenciaga 👠", value: 15 }, // Instagram, 2026
{ name: "Versace 👗", value: 25 }, // Instagram, 2026
{ name: "Armani 👔", value: 12 }, // Instagram, 2026
{ name: "Burberry 🧥", value: 10 }, // Instagram, 2026
{ name: "Moncler 🧊", value: 8 }, // Instagram, 2026

{ name: "Rolex ⌚", value: 12 }, // Instagram, 2026
{ name: "TAG Heuer ⏱️", value: 5 }, // Instagram, 2026
{ name: "Omega ⌚", value: 6 }, // Instagram, 2026
{ name: "Cartier 💎", value: 10 }, // Instagram, 2026
{ name: "Tiffany & Co 💍", value: 15 }, // Instagram, 2026

{ name: "Volkswagen 🚗", value: 12 }, // Instagram, 2026
{ name: "Toyota 🚙", value: 10 }, // Instagram, 2026
{ name: "Honda 🚗", value: 8 }, // Instagram, 2026
{ name: "Ford 🚘", value: 7 }, // Instagram, 2026
{ name: "Chevrolet 🚗", value: 6 }, // Instagram, 2026

{ name: "Coca-Cola 🥤", value: 10 }, // Instagram, 2026
{ name: "Pepsi 🥤", value: 5 }, // Instagram, 2026
{ name: "Monster Energy ⚡", value: 8 }, // Instagram, 2026
{ name: "KFC 🍗", value: 6 }, // Instagram, 2026
{ name: "Domino's Pizza 🍕", value: 4 }, // Instagram, 2026

{ name: "Adobe 🎨", value: 5 }, // Instagram, 2026
{ name: "Nvidia 💻", value: 4 }, // Instagram, 2026
{ name: "Intel 💾", value: 3 }, // Instagram, 2026
{ name: "Dell 💻", value: 2 }, // Instagram, 2026
{ name: "HP 🖥️", value: 2 }, // Instagram, 2026

{ name: "Airbnb 🏠", value: 7 }, // Instagram, 2026
{ name: "Uber 🚗", value: 6 }, // Instagram, 2026
{ name: "Lyft 🚕", value: 2 }, // Instagram, 2026
{ name: "Booking.com 🛏️", value: 3 }, // Instagram, 2026
{ name: "Tripadvisor 🌍", value: 5 } // Instagram, 2026

  ]
}

};

/* RANDOM PAIR */
function getRandomPair(pool) {
  const items = pool.items;
  let a = null, b = null;
  let tries = 0;

  while (tries < 50) {
    a = items[Math.floor(Math.random() * items.length)];
    b = items[Math.floor(Math.random() * items.length)];
    if (a === b) { tries++; continue; }

    const diff = Math.abs(a[pool.key] - b[pool.key]);
    if (diff <= pool.threshold) return { a, b };

    tries++;
  }
  return { a, b };
}

/* START ROUND */
function startRound() {
  const pool = pools[currentCategory];
  currentPair = getRandomPair(pool);

  const label = pool.label;
  const unit = pool.unit;

  let question = "";
  if (currentCategory === "fussball") question = `Welcher Spieler ist mehr wert (${label} in ${unit})?`;
  if (currentCategory === "wirtschaft") question = `Welches Unternehmen ist mehr wert (${label} in ${unit})?`;
  if (currentCategory === "geografie") question = `Welches Land hat mehr Einwohner (${label} in ${unit})?`;
  if (currentCategory === "tiere") question = `Welches Tier ist schneller (${label} in ${unit})?`;
  if (currentCategory === "musik") question = `Welcher Künstler hat mehr ${label} (${unit})?`;
  if (currentCategory === "filme") question = `Welcher Film hat mehr ${label} (${unit}) eingespielt?`;
  if (currentCategory === "alter") question = `${label} (${unit})?`;
  if (currentCategory === "socialmedia") question = `Wer hat mehr ${label} (${unit})?`;

  roundTitle.textContent = "Guess the Hype – " + label;
  questionText.innerHTML = `<p>${question}</p>`;
  choiceA.textContent = currentPair.a.name;
  choiceB.textContent = currentPair.b.name;
  feedback.innerHTML = "";
  valueBox.classList.add("hidden");
}

/* HANDLE CHOICE */
function handleChoice(choice) {
  const pool = pools[currentCategory];
  const aVal = currentPair.a[pool.key];
  const bVal = currentPair.b[pool.key];

  valueBox.classList.remove("hidden");
  valueBox.innerHTML = `
    <strong>${currentPair.a.name}:</strong> ${aVal} ${pool.unit}<br>
    <strong>${currentPair.b.name}:</strong> ${bVal} ${pool.unit}
  `;

  /* Gleichstand = immer richtig */
  if (aVal === bVal) {
    score++;
    scoreValue.textContent = score;
    yaySound.currentTime = 0;
    yaySound.play();
    feedback.innerHTML = `<div class="correct">✔️ Gleichstand – immer richtig!</div>`;
    setTimeout(startRound, 1200);
    return;
  }

  const correct = aVal >= bVal ? currentPair.a : currentPair.b;
  const chosen = choice === "A" ? currentPair.a : currentPair.b;

  if (chosen === correct) {
    score++;
    scoreValue.textContent = score;
    yaySound.currentTime = 0;
    yaySound.play();
    feedback.innerHTML = `<div class="correct">✔️ Richtig!</div>`;
    setTimeout(startRound, 1200);
  } else {
    feedback.innerHTML = `<div class="wrong">❌ Falsch! ${correct.name} wäre richtig gewesen.</div>`;
    setTimeout(endGame, 1500);
  }
}

/* END GAME */
function endGame() {
  updateRecord(currentCategory, score);

  gameScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");

  summaryCard.innerHTML = `
    <p>Du hast <strong>${score}</strong> Punkte erreicht.</p>
    <p>Rekord in dieser Kategorie: <strong>${getRecord(currentCategory)}</strong></p>
  `;
}

/* START GAME */
document.getElementById("startGameBtn").addEventListener("click", () => {
  currentCategory = categorySelect.value;
  score = 0;
  scoreValue.textContent = score;
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  endScreen.classList.add("hidden");
  startRound();
});

choiceA.addEventListener("click", () => handleChoice("A"));
choiceB.addEventListener("click", () => handleChoice("B"));

document.getElementById("restartBtn").addEventListener("click", () => {
  score = 0;
  scoreValue.textContent = score;
  endScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  startRound();
});

window.closePremiumPopup = closePremiumPopup;
