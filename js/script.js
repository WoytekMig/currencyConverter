
let currencyHeldElement = document.querySelector('.js-currencyHeld');
let moneyHeldElement = document.querySelector('.js-moneyHeld');
let currencyWantedElement = document.querySelector('.js-currencyWanted');
let formElement = document.querySelector('.js-form');
let resultElement = document.querySelector('.js-result');

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let moneyHeld = moneyHeldElement.value;
    let currencyHeld = currencyHeldElement.value;
    let currencyWanted = currencyWantedElement.value;

    let currencyHeldRate;
    switch (currencyHeld) {
        case "EUR":
            currencyHeldRate = 4.697;
            break;
        case "GBP":
            currencyHeldRate = 5.351;
            break;
        case "USD":
            currencyHeldRate = 4.401;
            break;
    }

    let currencyWantedRate;
    switch (currencyWanted) {
        case "PLN":
            currencyWantedRate = 1;
            break;
        case "EUR":
            currencyWantedRate = 4.697;
            break;
        case "GBP":
            currencyWantedRate = 5.351;
            break;
        case "USD":
            currencyWantedRate = 4.401;
            break;
    }

    if (currencyHeld == "PLN") {
        result = moneyHeld / currencyWantedRate;
    } else if (currencyHeld == "EUR" && (currencyWanted == "EUR" || currencyWanted == "PLN")) {
        if (currencyWanted == "EUR") {
            result = moneyHeld * 1;
        } else if (currencyWanted == "PLN") {
            result = moneyHeld * currencyHeldRate;
        }
    } else if (currencyHeld == "GBP" && (currencyWanted == "GBP" || currencyWanted == "PLN")) {
        if (currencyWanted == "GBP") {
            result = moneyHeld * 1;
        } else if (currencyWanted == "PLN") {
            result = moneyHeld * currencyHeldRate;
        }
    } else if (currencyHeld == "USD" && (currencyWanted == "USD" || currencyWanted == "PLN")) {
        if (currencyWanted == "USD") {
            result = moneyHeld * 1;
        } else if (currencyWanted == "PLN") {
            result = moneyHeld * currencyHeldRate;
        }
    } else {
        result = moneyHeld * currencyWantedRate / currencyHeldRate;
    }

    resultElement.innerText = `${result.toFixed(2)} ${currencyWanted}`;
   });