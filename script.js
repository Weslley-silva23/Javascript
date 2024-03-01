
const convertButton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")

const convertvalues = async () => {

    const inputcurrencyvalue = document.querySelector(".input-currency").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert")
    const currencyvalueconverted = document.querySelector(".currency-value")

    const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const libra = 6.28
    const bitcoin = 3.5
    
    if (currencyselect.value == "dolar") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue / dolar)

    }

    if (currencyselect.value == "euro") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyvalue / euro)
    }
    currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {

        style: "currency",
        currency: "BRL"
    }).format(inputcurrencyvalue)

    if (currencyselect.value == "libra") {

        currencyvalueconverted.innerHTML = new Intl.NumberFormat("GBP", {
            style: "currency",
            currency: "GBP"
        }).format(inputcurrencyvalue / libra)
    }

    if (currencyselect.value == "bitcoin") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputcurrencyvalue / bitcoin)

    }
}

 function changecurrency() {

    const currencyname = document.getElementById('currency-name')
    const currencyimg = document.querySelector('.currency-img')

    if (currencyselect.value == 'dolar') {
        currencyname.innerHTML = 'Dolár americano'
        currencyimg.src = './assets/usa.png'
    }
    if (currencyselect.value == 'euro') {
        currencyname.innerHTML = 'Euro'
        currencyimg.src = './assets/euro.png'
    }
    if (currencyselect.value == "libra") {

        currencyname.innerHTML = "Libra"
        currencyimg.src = "./assets/libra 1.png"
    }
    if (currencyselect.value == "bitcoin") {

        currencyname.innerHTML = "Bitcoin"
        currencyimg.src = "./assets/bitcoin 1.png"
    }

    convertvalues()

}

currencyselect.addEventListener("change", changecurrency)
convertButton.addEventListener("click", convertvalues)


