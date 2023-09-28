/* 5 Ids
currency-first
worth-first
currency-second
worth-second
exchange-rate

*/
//constant variable ,can't declared & resigned.

const currencyFirstEl = document.getElementById("currency-first");

const worthFirstEl = document.getElementById("worth-first");

const currencySecondEl = document.getElementById("currency-second");

const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

//function Call
updateRate()

//API KEY :5bcf4536697e19b1e9794fd8

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/5bcf4536697e19b1e9794fd8/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    //callback function
     .then((data) => {
     const rate = data.conversion_rates[currencySecondEl.value];
     console.log(rate);
      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${
        rate + " " + currencySecondEl.value
      }`;

      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2)
    });
}

// ${.........} ? string interpolation : [Insertion of something different ] Easy way to interpolate the variables and expressions into strings

currencyFirstEl.addEventListener("change", updateRate);

currencySecondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("input", updateRate);