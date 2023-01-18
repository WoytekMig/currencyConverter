{
    const helloWorld = () => {
        console.log("Witam na zapleczu 😄!");
    }

    const currencyHeldElement = document.querySelector('.js-currencyHeld');
    const moneyHeldElement = document.querySelector('.js-moneyHeld');
    const currencyWantedElement = document.querySelector('.js-currencyWanted');
    const formElement = document.querySelector('.js-form');
    const resultElement = document.querySelector('.js-result');

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const moneyHeld = moneyHeldElement.value;
        const currencyHeld = currencyHeldElement.value;
        const currencyWanted = currencyWantedElement.value;

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
            switch (currencyWanted) {
            case "EUR" :
                result = moneyHeld * 1;
                break;
           case "PLN" :
                result = moneyHeld * currencyHeldRate;
                break;
            }
        } else if (currencyHeld == "GBP" && (currencyWanted == "GBP" || currencyWanted == "PLN")) {
            switch (currencyWanted) {
            case "GBP" :
                result = moneyHeld * 1;
                break;
            case "PLN" :
                result = moneyHeld * currencyHeldRate;
                break;
            }
        } else if (currencyHeld == "USD" && (currencyWanted == "USD" || currencyWanted == "PLN")) {
            switch (currencyWanted) {
            case "USD":
                result = moneyHeld * 1;
                break;
            case "PLN":
                result = moneyHeld * currencyHeldRate;
                break;
            }
        } else {
            result = moneyHeld * currencyHeldRate / currencyWantedRate;
        }
    
        resultElement.innerText = `${result.toFixed(2)} ${currencyWanted}`;
    });

const init = () => {

    helloWorld();
};
init();

}




/* 

 const calculateResult = (currencyHeld, currencyHeldRate, currencyWanted, currencyWantedRate, moneyHeld)

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const moneyHeld = moneyHeldElement.value;
    const currencyHeld = currencyHeldElement.value;
    const currencyWanted = currencyWantedElement.value;

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
        result = moneyHeld * currencyHeldRate / currencyWantedRate;
    }

    resultElement.innerText = `${result.toFixed(2)} ${currencyWanted}`;
}); */