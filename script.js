// Variables
let money = 0;
let earn = 1;
let passiveIncome = 0;

// Load game data from localStorage
function loadGame() {
    money = parseInt(localStorage.getItem('money')) || 0;
    earn = parseInt(localStorage.getItem('earn')) || 1;
    passiveIncome = parseInt(localStorage.getItem('passiveIncome')) || 0;
    updateDisplay();
}

// Save game data to localStorage
function saveGame() {
    localStorage.setItem('money', money);
    localStorage.setItem('earn', earn);
    localStorage.setItem('passiveIncome', passiveIncome);
}

// Update display function
function updateDisplay() {
    document.getElementById("money").innerText = money;
    document.getElementById("earn").innerText = earn;
    document.getElementById("passive").innerText = passiveIncome;
    updatePrices();
}

function updatePrices() {
    let upgradePrice = Math.pow(earn, 2) * 10;
    let passivePrice = Math.pow(passiveIncome + 1, 3) * 100;
    document.getElementById("upgradePrice").innerText = upgradePrice;
    document.getElementById("passivePrice").innerText = passivePrice;
}

// Call this function after every money change or store interaction


// Passive income interval
setInterval(() => {
    if (passiveIncome > 0) {
        money += passiveIncome;
        updateDisplay();
    }
}, 3000); // Every 3 seconds

// Button event listeners
document.getElementById("clickBtn").addEventListener("click", () => {
    money += earn;
    updateDisplay();
});

document.getElementById("storeBtn").addEventListener("click", () => {
    document.getElementById("store").style.display = "block";
});

document.getElementById("closeStore").addEventListener("click", () => {
    document.getElementById("store").style.display = "none";
});

document.getElementById("buyUpgrade").addEventListener("click", () => {
    const upgradePrice = Math.pow(earn, 2) * 10;
    if (money >= upgradePrice) {
        money -= upgradePrice;
        earn += 1;
        updateDisplay();
    } else {
        alert("Not enough money for upgrade.");
    }
});

document.getElementById("buyPassive").addEventListener("click", () => {
    const passivePrice = Math.pow(passiveIncome, 3) * 100;
    if (money >= passivePrice) {
        money -= passivePrice;
        passiveIncome += 1;
        updateDisplay();;
    } else {
        alert("Not enough money for passive income.");
    }
});

// Save button functionality
document.getElementById("saveBtn").addEventListener("click", saveGame);

// Load game data when the game starts
loadGame();


