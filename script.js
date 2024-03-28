
let api = "https://v6.exchangerate-api.com/v6/186a3255ef202b75a85fb861/latest/USD";
let fromCurrencyDropdown = document.getElementById("from-currency");
let toCurrencyDropdown = document.getElementById("to-currency");
let op = document.getElementById("op");
op.innerHTML = "output";
let currencyArr = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "CHF", "CNY", "COP", "EGP", "EUR", "GBP", "HKD", "IDR", "INR"];

currencyArr.forEach((currecy) => {
  let option = document.createElement("option");
  option.value = currecy;
  fromCurrencyDropdown.appendChild(option);
})

currencyArr.forEach((currecy) => {
  let option = document.createElement("option");
  option.value = currecy;
  option.innerHTML = currecy;
  fromCurrencyDropdown.appendChild(option);
})
currencyArr.forEach((currecy) => {
  let option = document.createElement("option");
  option.value = currecy;
  option.innerHTML = currecy;
  toCurrencyDropdown.appendChild(option);
})

fromCurrencyDropdown.value = "INR";
toCurrencyDropdown.value = "USD";

function convertCurrency() {
  fetch(api)
    .then(response => response.json())
    .then(data => {
      let fromCurr = document.getElementById("from-currency").value;
      let toCurr = document.getElementById("to-currency").value;
      console.log(data);
      let fromCurreRate = data.conversion_rates[fromCurr];
      let toCurreRate = data.conversion_rates[toCurr];
      let amount = document.getElementById("amount").value;
      if (amount != "") {
        let convertedAmount = (amount / fromCurreRate) * toCurreRate;
        op.innerHTML = `${fromCurr} = ${convertedAmount.toFixed(2)} ${toCurr}`;
      } else {
        alert("Enter an amount")
      }
    })
}



