let money = 0;
let earn = 1;
let passiveIncome = 0;
let upgradePrice = 10;
let passivePrice = 100;

// DOM Elements
const moneyDisplay = document.getElementById("money");
const earnDisplay = document.getElementById("earn");
const passiveDisplay = document.getElementById("passive");
const upgradePriceDisplay = document.getElementById("upgradePrice");
const passivePriceDisplay = document.getElementById("passivePrice");
const store = document.getElementById("store");

// Event Listeners
document.getElementById("clickBtn").addEventListener("click", () => {
    money += earn;
    updateDisplay();
});

document.getElementById("storeBtn").addEventListener("click", () => {
    store.style.display = "block";
});

document.getElementById("closeStore").addEventListener("click", () => {
    store.style.display = "none";
});

document.getElementById("buyUpgrade").addEventListener("click", () => {
    if (money >= upgradePrice) {
        money -= upgradePrice;
        earn += 1;
        upgradePrice = Math.pow(earn, 2) * 10; // Increase price for the next upgrade
        updateDisplay();
    } else {
        alert("Not enough money to buy the upgrade.");
    }
});

document.getElementById("buyPassive").addEventListener("click", () => {
    if (money >= passivePrice) {
        money -= passivePrice;
        passiveIncome += 1;
        passivePrice = Math.pow(passiveIncome + 1, 3) * 10; // Increase passive income price
        updateDisplay();
    } else {
        alert("Not enough money for passive income.");
    }
});

// Passive income logic
setInterval(() => {
    if (passiveIncome > 0) {
        money += passiveIncome;
        updateDisplay();
    }
}, 3000);

// Function to update the display values
function updateDisplay() {
    moneyDisplay.textContent = money;
    earnDisplay.textContent = earn;
    passiveDisplay.textContent = passiveIncome;
    upgradePriceDisplay.textContent = upgradePrice;
    passivePriceDisplay.textContent = passivePrice;
}

// Initial update of display
updateDisplay();
