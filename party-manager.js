class PartyManager {
    constructor() {
        this.currentPartyCode = null;
        this.playerId = null;
        this.playerName = "";
        this.isHost = false;
        this.selectedGameId = null;
        this.unsubscribe = null;

        this.init();
    }

    init() {
        this.playerId = sessionStorage.getItem("cc_player_id") || "player_" + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem("cc_player_id", this.playerId);

        const urlParams = new URLSearchParams(window.location.search);
        const codeFromUrl = urlParams.get('party');
        if (codeFromUrl) {
            this.openJoinModal(codeFromUrl.toUpperCase());
        }
    }

    generatePartyCode() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let code = "";
        for (let i = 0; i < 5; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
    }

    renderGameSelection() {
        const grid = document.getElementById("party-game-grid");
        grid.innerHTML = "";

        window.CHALLENGE_CHAMP_CONFIG.multiplayerGames.forEach(game => {
            const card = document.createElement("div");
            card.className = "party-game-card";
            card.onclick = () => this.selectGame(game.id, card);
            card.innerHTML = `
                <div class="game-card-icon">${game.icon}</div>
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <span class="player-count">👥 ${game.minPlayers}-${game.maxPlayers} Spieler</span>
            `;
            grid.appendChild(card);
        });
    }

    selectGame(gameId, element) {
        document.querySelectorAll(".party-game-card").forEach(c => c.classList.remove("selected"));
        element.classList.add("selected");
        this.selectedGameId = gameId;
        document.getElementById("btn-confirm-create-party").disabled = false;
    }

    async createParty(hostName) {
        if (!hostName.trim()) {
            alert("Bitte gib deinen Namen ein.");
            return;
        }
        if (!this.selectedGameId) {
            alert("Bitte wähle ein Spiel aus.");
            return;
        }

        const code = this.generatePartyCode();
        this.currentPartyCode = code;
        this.playerName = hostName.trim();
        this.isHost = true;

        const partyData = {
            partyCode: code,
            selectedGame: this.selectedGameId,
            hostId: this.playerId,
            status: "waiting",
            createdAt: Date.now(),
            players: {
                [this.playerId]: {
                    name: this.playerName,
                    isHost: true,
                    joinedAt: Date.now()
                }
            }
        };

        const partyRef = window.fbRef(window.firebaseDB, 'parties/' + code);
        await window.fbSet(partyRef, partyData);

        window.fbOnDisconnect(window.fbRef(window.firebaseDB, `parties/${code}/players/${this.playerId}`)).remove();

        this.openLobbyUI();
        this.listenToLobbyChanges();
    }

    async joinParty(code, playerName) {
        code = code.trim().toUpperCase();
        playerName = playerName.trim();

        const errEl = document.getElementById("join-error-msg");
        errEl.innerText = "";

        if (!code) {
            errEl.innerText = "❌ Bitte gib einen Party-Code ein.";
            return;
        }
        if (!playerName) {
            errEl.innerText = "⚠️ Bitte gib deinen Namen ein.";
            return;
        }

        const partyRef = window.fbRef(window.firebaseDB, 'parties/' + code);
        const snapshot = await window.fbGet(partyRef);

        if (!snapshot.exists()) {
            errEl.innerText = "❌ Diese Party wurde nicht gefunden.";
            return;
        }

        const partyData = snapshot.val();

        if (partyData.status !== "waiting") {
            errEl.innerText = "⚠️ Dieses Spiel hat bereits begonnen.";
            return;
        }

        const existingPlayers = Object.values(partyData.players || {});
        if (existingPlayers.some(p => p.name.toLowerCase() === playerName.toLowerCase())) {
            errEl.innerText = "⚠️ Dieser Name ist in der Party bereits vergeben.";
            return;
        }

        this.currentPartyCode = code;
        this.playerName = playerName;
        this.isHost = false;

        const playerRef = window.fbRef(window.firebaseDB, `parties/${code}/players/${this.playerId}`);
        await window.fbSet(playerRef, {
            name: this.playerName,
            isHost: false,
            joinedAt: Date.now()
        });

        window.fbOnDisconnect(playerRef).remove();

        this.closeModals();
        this.openLobbyUI();
        this.listenToLobbyChanges();
    }

    listenToLobbyChanges() {
        const partyRef = window.fbRef(window.firebaseDB, 'parties/' + this.currentPartyCode);
        
        const connectedRef = window.fbRef(window.firebaseDB, ".info/connected");
        window.fbOnValue(connectedRef, (snap) => {
            const connBanner = document.getElementById("connection-status-banner");
            if (snap.val() === false) {
                connBanner.style.display = "block";
            } else {
                connBanner.style.display = "none";
            }
        });

        this.unsubscribe = window.fbOnValue(partyRef, (snapshot) => {
            if (!snapshot.exists()) {
                alert("Die Party wurde aufgelöst.");
                window.location.reload();
                return;
            }

            const data = snapshot.val();

            if (data.status === "started") {
                const gameConfig = window.CHALLENGE_CHAMP_CONFIG.multiplayerGames.find(g => g.id === data.selectedGame);
                if (gameConfig) {
                    window.location.href = `${gameConfig.url}?party=${this.currentPartyCode}&player=${this.playerId}`;
                }
                return;
            }

            this.updateLobbyUI(data);
        });
    }

    updateLobbyUI(partyData) {
        document.getElementById("display-party-code").innerText = partyData.partyCode;
        
        const joinUrl = `${window.location.origin}${window.location.pathname}?party=${partyData.partyCode}`;
        const qrContainer = document.getElementById("qrcode-container");
        qrContainer.innerHTML = "";
        new QRCode(qrContainer, {
            text: joinUrl,
            width: 160,
            height: 160,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });

        const playersList = document.getElementById("lobby-players-list");
        playersList.innerHTML = "";

        const players = partyData.players ? Object.values(partyData.players) : [];
        
        players.forEach(p => {
            const item = document.createElement("li");
            item.className = "player-item";
            item.innerHTML = `<span>${p.name}</span> ${p.isHost ? '<span class="host-badge">👑 Host</span>' : ''}`;
            playersList.appendChild(item);
        });

        const hostControls = document.getElementById("host-controls");
        const clientMessage = document.getElementById("client-message");
        const gameConfig = window.CHALLENGE_CHAMP_CONFIG.multiplayerGames.find(g => g.id === partyData.selectedGame);

        if (this.isHost) {
            hostControls.style.display = "block";
            clientMessage.style.display = "none";

            const startBtn = document.getElementById("btn-start-game");
            const warnEl = document.getElementById("host-min-player-warning");

            const minNeeded = gameConfig ? gameConfig.minPlayers : 2;
            if (players.length < minNeeded) {
                startBtn.disabled = true;
                warnEl.innerText = `⚠️ Es müssen mindestens ${minNeeded} Spieler in der Lobby sein.`;
            } else {
                startBtn.disabled = false;
                warnEl.innerText = "";
            }
        } else {
            hostControls.style.display = "none";
            clientMessage.style.display = "block";
        }
    }

    async startGame() {
        if (!this.isHost) return;
        const partyRef = window.fbRef(window.firebaseDB, 'parties/' + this.currentPartyCode);
        await window.fbUpdate(partyRef, { status: "started" });
    }

    openJoinModal(prefilledCode = "") {
        document.getElementById("modal-join-party").style.display = "flex";
        if (prefilledCode) {
            document.getElementById("input-party-code").value = prefilledCode;
        }
    }

    openCreateModal() {
        this.renderGameSelection();
        document.getElementById("modal-create-party").style.display = "flex";
    }

    openLobbyUI() {
        this.closeModals();
        document.getElementById("lobby-screen").style.display = "block";
        document.getElementById("main-startseite-content").style.display = "none";
    }

    closeModals() {
        document.querySelectorAll(".cc-modal").forEach(m => m.style.display = "none");
    }
}

window.partyManager = new PartyManager();