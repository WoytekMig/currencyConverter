{
    const helloWorld = () => {
        console.log("Witam na zapleczu 😄!");
    };

    function getResult() {
        const moneyHeldElement = document.querySelector('.js-moneyHeld');
        const moneyHeld = +moneyHeldElement.value;

        const currencyHeldElement = document.querySelector('.js-currencyHeld');
        let currencyHeld = currencyHeldElement.value;
        const currencyHeldRate = (currencyHeld) => {
            switch (currencyHeld) {
                case "PLN":
                    return 1;
                case "EUR":
                    return 4.697;
                case "GBP":
                    return 5.351;
                case "USD":
                    return 4.401;
            };
        }

        const currencyWantedElement = document.querySelector('.js-currencyWanted');
        let currencyWanted = currencyWantedElement.value;

        const currencyWantedRate = (currencyWanted) => {
            switch (currencyWanted) {
                case "PLN":
                    return 1;
                case "EUR":
                    return 4.697;
                case "GBP":
                    return 5.351;
                case "USD":
                    return 4.401;
            };
        }

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