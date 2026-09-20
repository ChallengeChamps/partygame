/**
 * ChallengeChamp - Imposter Multiplayer Echtzeit-Steuerung
 */

class ImposterGameManager {
    constructor() {
        this.partyCode = null;
        this.playerId = null;
        this.isHost = false;
        this.partyData = null;
        this.wordsList = [
            "Strand", "Flugzeug", "Krankenhaus", "Schule", "Restaurant", 
            "Kino", "Supermarkt", "Fitnessstudio", "Museum", "Weltall"
        ]; // Beispiel-Wörter (können durch deine Liste ersetzt werden)

        this.init();
    }

    init() {
        const urlParams = new URLSearchParams(window.location.search);
        this.partyCode = urlParams.get('party');
        this.playerId = urlParams.get('player');

        if (!this.partyCode || !this.playerId) {
            alert("Keine gültige Party-Session gefunden.");
            window.location.href = "startseite.html";
            return;
        }

        // Auf Firebase-Initialisierung warten
        const checkFB = setInterval(() => {
            if (window.firebaseDB) {
                clearInterval(checkFB);
                this.connectToParty();
            }
        }, 100);
    }

    connectToParty() {
        const partyRef = window.fbRef(window.firebaseDB, 'parties/' + this.partyCode);

        window.fbOnValue(partyRef, (snapshot) => {
            if (!snapshot.exists()) {
                alert("Die Party wurde beendet.");
                window.location.href = "startseite.html";
                return;
            }

            this.partyData = snapshot.val();
            this.isHost = (this.partyData.hostId === this.playerId);

            this.renderState();
        });
    }

    renderState() {
        const gameData = this.partyData.gameState || { status: 'setup' };
        const players = Object.values(this.partyData.players || {});

        // Zustand 1: Einstellungen & Warten
        if (gameData.status === 'setup') {
            if (this.isHost) {
                this.showHostSetupUI(players);
            } else {
                this.showWaitingUI("Der Host wählt gerade die Imposter-Anzahl aus...");
            }
        } 
        // Zustand 2: Karten aufdecken
        else if (gameData.status === 'reveal_cards') {
            const myPlayerData = this.partyData.players[this.playerId];
            const myRole = gameData.roles ? gameData.roles[this.playerId] : null;
            this.showCardRevealUI(myRole, gameData.secretWord);
        }
        // Zustand 3: Diskussion läuft
        else if (gameData.status === 'playing') {
            this.showPlayingUI();
        }
        // Zustand 4: Auflösung
        else if (gameData.status === 'revealed') {
            this.showResultUI(gameData);
        }
    }

    // Host-Einstellungen UI
    showHostSetupUI(players) {
        document.getElementById("imposter-game-container").innerHTML = `
            <div class="imposter-card">
                <h2>👑 Imposter Einstellungen (Host)</h2>
                <p>Mitspieler in dieser Runde (${players.length}):</p>
                <ul class="player-pill-list">
                    ${players.map(p => `<li>${p.name}</li>`).join('')}
                </ul>

                <div style="margin: 20px 0;">
                    <label><b>Anzahl der Imposter:</b></label>
                    <select id="imposter-count-select" class="form-input">
                        <option value="1">1 Imposter</option>
                        <option value="2" ${players.length < 5 ? 'disabled' : ''}>2 Imposter</option>
                        <option value="3" ${players.length < 8 ? 'disabled' : ''}>3 Imposter</option>
                    </select>
                </div>

                <button class="btn-party btn-create-party" style="width: 100%;" onclick="imposterGame.startRound()">
                    🎲 Rollen verteilen & Starten
                </button>
            </div>
        `;
    }

    // Warteraum UI für normale Spieler
    showWaitingUI(message) {
        document.getElementById("imposter-game-container").innerHTML = `
            <div class="imposter-card">
                <h2>⏳ Bitte warten...</h2>
                <p>${message}</p>
            </div>
        `;
    }

    // Host verteilt Rollen zufällig
    async startRound() {
        const imposterCount = parseInt(document.getElementById("imposter-count-select").value, 10);
        const playerIds = Object.keys(this.partyData.players);
        
        // Z zufälliges Wort wählen
        const randomWord = this.wordsList[Math.floor(Math.random() * this.wordsList.length)];

        // Imposter zufällig bestimmen
        const shuffled = [...playerIds].sort(() => 0.5 - Math.random());
        const imposters = shuffled.slice(0, imposterCount);

        const roles = {};
        playerIds.forEach(id => {
            roles[id] = imposters.includes(id) ? 'imposter' : 'civilian';
        });

        // In Firebase speichern
        const partyRef = window.fbRef(window.firebaseDB, 'parties/' + this.partyCode + '/gameState');
        await window.fbSet(partyRef, {
            status: 'reveal_cards',
            secretWord: randomWord,
            roles: roles,
            imposterIds: imposters
        });
    }

    // UI zum Karte Aufdecken
    showCardRevealUI(role, secretWord) {
        document.getElementById("imposter-game-container").innerHTML = `
            <div class="imposter-card">
                <h2>🂠 Deine Geheimkarte</h2>
                <p>Tippe auf die Karte, um deine Rolle zu sehen:</p>

                <div id="secret-card" class="secret-card-box" onclick="imposterGame.flipCard(this, '${role}', '${secretWord}')">
                    ❓ Karte umdrehen
                </div>

                <button id="btn-ready" class="btn-party btn-join-party" style="width: 100%; margin-top: 20px; display: none;" onclick="imposterGame.setPlayerReady()">
                    Weiter zum Spiel 👍
                </button>
            </div>
        `;
    }

    flipCard(element, role, secretWord) {
        if (role === 'imposter') {
            element.innerHTML = `<h1 style="color: #ff4757;">🕵️‍♂️ DU BIST DER IMPOSTER!</h1><p>Versuche nicht aufzufallen!</p>`;
        } else {
            element.innerHTML = `<h3 style="color: #2ed573;">Das geheime Wort lautet:</h3><h1 style="color: #FFD700;">${secretWord}</h1>`;
        }
        element.style.background = "#2f3542";
        document.getElementById("btn-ready").style.display = "block";
    }

    setPlayerReady() {
        // Spiel geht in den Diskussionsmodus
        if (this.isHost) {
            const partyRef = window.fbRef(window.firebaseDB, 'parties/' + this.partyCode + '/gameState/status');
            window.fbSet(partyRef, 'playing');
        } else {
            this.showWaitingUI("Warte darauf, dass alle Spieler bereit sind...");
        }
    }

    // Diskussions-Phase
    showPlayingUI() {
        document.getElementById("imposter-game-container").innerHTML = `
            <div class="imposter-card">
                <h2>🗣️ Das Spiel läuft!</h2>
                <p>Stellt euch gegenseitig Fragen und findet heraus, wer der Imposter ist.</p>

                ${this.isHost ? `
                    <div style="margin-top: 30px;">
                        <button class="btn-party btn-create-party" style="width: 100%; font-size: 1.2rem;" onclick="imposterGame.revealImposter()">
                            🚨 Imposter auflösen
                        </button>
                    </div>
                ` : `
                    <p style="margin-top: 20px; opacity: 0.8;">⏳ Der Host löst das Spiel auf, sobald ihr abgestimmt habt.</p>
                `}
            </div>
        `;
    }

    // Host löst auf
    async revealImposter() {
        const partyRef = window.fbRef(window.firebaseDB, 'parties/' + this.partyCode + '/gameState/status');
        await window.fbSet(partyRef, 'revealed');
    }

    // Ergebnis anzeigen
    showResultUI(gameData) {
        const imposters = gameData.imposterIds.map(id => this.partyData.players[id]?.name || "Unbekannt");

        document.getElementById("imposter-game-container").innerHTML = `
            <div class="imposter-card">
                <h2>🎉 Auflösung!</h2>
                <p>Das geheime Wort war: <b>${gameData.secretWord}</b></p>
                
                <div style="margin: 20px 0; padding: 15px; background: rgba(255,71,87,0.2); border-radius: 12px; border: 1px solid #ff4757;">
                    <h3>🕵️‍♂️ Imposter war:</h3>
                    <h1 style="color: #ff4757; margin: 5px 0;">${imposters.join(", ")}</h1>
                </div>

                ${this.isHost ? `
                    <button class="btn-party btn-join-party" style="width: 100%; margin-top: 15px;" onclick="imposterGame.resetToSetup()">
                        🔄 Nächste Runde starten
                    </button>
                ` : `
                    <p style="opacity: 0.8;">Warte auf die nächste Runde vom Host...</p>
                `}
            </div>
        `;
    }

    async resetToSetup() {
        const partyRef = window.fbRef(window.firebaseDB, 'parties/' + this.partyCode + '/gameState');
        await window.fbSet(partyRef, { status: 'setup' });
    }
}

window.imposterGame = new ImposterGameManager();