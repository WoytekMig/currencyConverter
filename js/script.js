{
    const helloWorld = () => {
        console.log("Witam na zapleczu 😄!");
    };

    function getResult() {
        const moneyHeldElement = document.querySelector('.js-moneyHeld');
        const moneyHeld = +moneyHeldElement.value;

        const currencyHeldElement = document.querySelector('.js-currencyHeld');
        let currencyHeld = currencyHeldElement.value;

        switch (currencyHeld) {
            case "PLN":
                currencyHeldRate = 1;
                break;
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

        const currencyWantedElement = document.querySelector('.js-currencyWanted');
        let currencyWanted = currencyWantedElement.value;

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
        };

        result = moneyHeld * currencyHeldRate / currencyWantedRate;

        const resultElement = document.querySelector('.js-result');
        resultElement.innerText = `${result.toFixed(2)} ${currencyWanted}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        getResult();
    };

    const init = () => {
        const formElement = document.querySelector('.js-form');
        helloWorld();
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}