let items = JSON.parse(localStorage.getItem("items")) || [];
let scanned = [];
let total = 0;

function displayItems() {
    const list = document.getElementById("itemList");
    list.innerHTML = "";
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = ${item.name} (Code: ${item.code}) - $${item.price.toFixed(2)};
        list.appendChild(li);
    });
}

function scanItem() {
    const code = document.getElementById("scanCode").value;
    const item = items.find(i => i.code === code);
    const scannedList = document.getElementById("scannedItems");

    if (item) {
        scanned.push(item);
        total += item.price;
        const li = document.createElement("li");
        li.textContent = ${item.name} - $${item.price.toFixed(2)};
        scannedList.appendChild(li);
        document.getElementById("total").textContent = total.toFixed(2);
    } else {
        alert("Item not found!");
    }
    document.getElementById("scanCode").value = "";
}

// Listen for updates from Host
window.addEventListener("storageUpdated", function() {
    items = JSON.parse(localStorage.getItem("items")) || [];
    displayItems();
});

// Also listen for native storage events (for cross-tab updates)
window.addEventListener("storage", function(event) {
    if (event.key === "items") {
        items = JSON.parse(event.newValue) || [];
        displayItems();
    }
});

// Initial display
displayItems();