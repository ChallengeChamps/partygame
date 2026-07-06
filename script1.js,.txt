const symbols = ['🍒', '💎', '🔔', '🍀', '🎁'];
const probabilities = {
  '🍒': 0.4,
  '💎': 0.2,
  '🔔': 0.05,
  '🍀': 0.005,
  '🎁': 0.1
};

const payouts = {
  '🍒': 1,
  '💎': 2,
  '🔔': 5,
  '🍀': 20,
  '🎁': 0
};

let balance = parseFloat(localStorage.getItem('casinoBalance')) || 0;
let freeSpins = 0;

document.getElementById('balance').textContent = balance.toFixed(2);

function showTopUp() {
  document.getElementById('topup-container').style.display = 'block';
}

function topUp() {
  const amount = parseFloat(document.getElementById('topup-amount').value);
  if (!isNaN(amount) && amount > 0) {
    document.getElementById('topup-status').textContent = '⏳ Wird aufgeladen...';
    setTimeout(() => {
      balance += amount;
      localStorage.setItem('casinoBalance', balance);
      document.getElementById('balance').textContent = balance.toFixed(2);
      document.getElementById('topup-status').textContent = '✅ Konto erfolgreich aufgeladen!';
    }, 1000);
  }
}

function spin() {
  const bet = parseFloat(document.getElementById('bet').value);
  if (balance < bet && freeSpins === 0) {
    alert('Nicht genug Guthaben!');
    return;
  }

  if (freeSpins > 0) {
    freeSpins--;
  } else {
    balance -= bet;
  }

  document.getElementById('balance').textContent = balance.toFixed(2);
  localStorage.setItem('casinoBalance', balance);

  document.getElementById('spin-sound').play();

  const reels = document.getElementById('reels');
  reels.innerHTML = '';
  const result = [];

  for (let i = 0; i < 4; i++) {
    const symbol = getRandomSymbol();
    result.push(symbol);
    const reel = document.createElement('div');
    reel.className = 'reel';
    reel.textContent = symbol;
    reels.appendChild(reel);
  }

  checkWin(result, bet);
}

function getRandomSymbol() {
  const rand = Math.random();
  let cumulative = 0;
  for (const symbol of symbols) {
    cumulative += probabilities[symbol];
    if (rand <= cumulative) return symbol;
  }
  return symbols[0];
}

function checkWin(result, bet) {
  const unique = new Set(result);
  if (unique.size === 1) {
    const symbol = result[0];
    if (symbol === '🎁') {
      freeSpins += 2;
      showMessage('🎁 Bonus! 2 Free Spins!');
    } else {
      const win = bet * payouts[symbol];
      balance += win;
      localStorage.setItem('casinoBalance', balance);
      document.getElementById('balance').textContent = balance.toFixed(2);
      showMessage(`🎉 Gewinn! ${win.toFixed(2)}€`);
    }
  } else {
    showMessage('😢 Leider kein Gewinn...');
  }
}

function showMessage(msg) {
  const message = document.getElementById('message');
  message.textContent = msg;
  message.style.opacity = 1;
  setTimeout(() => message.style.opacity = 0, 3000);
}
