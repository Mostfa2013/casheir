let items = JSON.parse(localStorage.getItem("items")) || [];

document.getElementById("itemForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("itemName").value;
    const code = document.getElementById("itemCode").value;
    const price = parseFloat(document.getElementById("itemPrice").value);

    items.push({ name, code, price });
    localStorage.setItem("items", JSON.stringify(items));
    
    // Trigger a storage event for other tabs
    window.dispatchEvent(new Event("storageUpdated"));
    
    displayItems();
    this.reset();
});

function displayItems() {
    const list = document.getElementById("itemList");
    list.innerHTML = "";
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = ${item.name} (Code: ${item.code}) - $${item.price.toFixed(2)};
        list.appendChild(li);
    });
}

displayItems();