let balance = 0;
let historyList = document.getElementById("history");

function addTransaction() {
    let desc = document.getElementById("desc").value;
    let amount = parseFloat(document.getElementById("amount").value);

    if (desc === "" || isNaN(amount)) {
        alert("Enter valid details");
        return;
    }

    balance += amount;
    document.getElementById("balance").innerText = balance;

    let listItem = document.createElement("li");
    listItem.textContent = `${desc}: ₹${amount}`;
    historyList.appendChild(listItem);

    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
}
