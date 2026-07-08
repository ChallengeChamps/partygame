/* PREMIUM SYSTEM */
const hasPremium = localStorage.getItem("premium") === "true";
const premiumCategories = ["wirtschaft","geografie","tiere","musik","filme"];

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
  filme: "record_filme"
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
  box.style.marginTop = "15px";
  box.style.padding = "12px";
  box.style.background = "rgba(255,255,255,0.15)";
  box.style.borderRadius = "12px";
  box.style.fontSize = "1rem";
  box.innerHTML = `
    <h3 style="text-align:center; margin-bottom:10px;">🏆 Rekorde</h3>
    Fußball: ${getRecord("fussball")}<br>
    Wirtschaft: ${getRecord("wirtschaft")}<br>
    Geografie: ${getRecord("geografie")}<br>
    Tiere: ${getRecord("tiere")}<br>
    Musik: ${getRecord("musik")}<br>
    Filme: ${getRecord("filme")}
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
      { name: "Avatar", value: 2800 },
      { name: "Spider-Man: No Way Home", value: 1900 },
      { name: "Furious 7", value: 1516 }
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
