//initialisation
let currencyData = [
    {"currency": "BLUR", "date": "2023-08-29T07:10:40.000Z", "price": 0.20811525423728813},
    {"currency": "bNEO", "date": "2023-08-29T07:10:50.000Z", "price": 7.1282679},
    {"currency": "BUSD", "date": "2023-08-29T07:10:40.000Z", "price": 0.999183113},
    {"currency": "BUSD", "date": "2023-08-29T07:10:40.000Z", "price": 0.9998782611186441},
    {"currency": "USD", "date": "2023-08-29T07:10:30.000Z", "price": 1},
    {"currency": "ETH", "date": "2023-08-29T07:10:52.000Z", "price": 1645.9337373737374},
    {"currency": "GMX", "date": "2023-08-29T07:10:40.000Z", "price": 36.345114372881355},
    {"currency": "STEVMOS", "date": "2023-08-29T07:10:40.000Z", "price": 0.07276706779661017},
    {"currency": "LUNA", "date": "2023-08-29T07:10:40.000Z", "price": 0.40955638983050846},
    {"currency": "RATOM", "date": "2023-08-29T07:10:40.000Z", "price": 10.250918915254237},
    {"currency": "STRD", "date": "2023-08-29T07:10:40.000Z", "price": 0.7386553389830508},
    {"currency": "EVMOS", "date": "2023-08-29T07:10:40.000Z", "price": 0.06246181355932203},
    {"currency": "IBCX", "date": "2023-08-29T07:10:40.000Z", "price": 41.26811355932203},
    {"currency": "IRIS", "date": "2023-08-29T07:10:40.000Z", "price": 0.0177095593220339},
    {"currency": "ampLUNA", "date": "2023-08-29T07:10:40.000Z", "price": 0.49548589830508477},
    {"currency": "KUJI", "date": "2023-08-29T07:10:45.000Z", "price": 0.675},
    {"currency": "STOSMO", "date": "2023-08-29T07:10:45.000Z", "price": 0.431318},
    {"currency": "USDC", "date": "2023-08-29T07:10:40.000Z", "price": 0.989832},
    {"currency": "axlUSDC", "date": "2023-08-29T07:10:40.000Z", "price": 0.989832},
    {"currency": "ATOM", "date": "2023-08-29T07:10:50.000Z", "price": 7.186657333333334},
    {"currency": "STATOM", "date": "2023-08-29T07:10:45.000Z", "price": 8.512162050847458},
    {"currency": "OSMO", "date": "2023-08-29T07:10:50.000Z", "price": 0.3772974333333333},
    {"currency": "rSWTH", "date": "2023-08-29T07:10:40.000Z", "price": 0.00408771},
    {"currency": "STLUNA", "date": "2023-08-29T07:10:40.000Z", "price": 0.44232210169491526},
    {"currency": "LSI", "date": "2023-08-29T07:10:50.000Z", "price": 67.69661525423729},
    {"currency": "OKB", "date": "2023-08-29T07:10:40.000Z", "price": 42.97562059322034},
    {"currency": "OKT", "date": "2023-08-29T07:10:40.000Z", "price": 13.561577966101694},
    {"currency": "SWTH", "date": "2023-08-29T07:10:45.000Z", "price": 0.004039850455012084},
    {"currency": "USC", "date": "2023-08-29T07:10:40.000Z", "price": 0.994},
    {"currency": "USDC", "date": "2023-08-29T07:10:30.000Z", "price": 1},
    {"currency": "WBTC", "date": "2023-08-29T07:10:52.000Z", "price": 26002.82202020202},
    {"currency": "wstETH", "date": "2023-08-29T07:10:40.000Z", "price": 1872.2579742372882},
    {"currency": "YieldUSD", "date": "2023-08-29T07:10:40.000Z", "price": 1.0290847966101695},
    {"currency": "ZIL", "date": "2023-08-29T07:10:50.000Z", "price": 0.01651813559322034}
];

let currentOwned;
if (localStorage.getItem('currentOwned') === null) {
    currentOwned = [
        {"currency": "BLUR", "amount": 0},
        {"currency": "bNEO", "amount": 0},
        {"currency": "BUSD", "amount": 0},
        {"currency": "BUSD", "amount": 0},
        {"currency": "USD", "amount": 10000},
        {"currency": "ETH", "amount": 0},
        {"currency": "GMX", "amount": 0},
        {"currency": "STEVMOS", "amount": 0},
        {"currency": "LUNA", "amount": 0},
        {"currency": "RATOM", "amount": 0},
        {"currency": "STRD", "amount": 0},
        {"currency": "EVMOS", "amount": 0},
        {"currency": "IBCX", "amount": 0},
        {"currency": "IRIS", "amount": 0},
        {"currency": "ampLUNA", "amount": 0},
        {"currency": "KUJI", "amount": 0},
        {"currency": "STOSMO", "amount": 0},
        {"currency": "USDC", "amount": 0},
        {"currency": "axlUSDC", "amount": 0},
        {"currency": "ATOM", "amount": 0},
        {"currency": "STATOM", "amount": 0},
        {"currency": "OSMO", "amount": 0},
        {"currency": "rSWTH", "amount": 0},
        {"currency": "STLUNA", "amount": 0},
        {"currency": "LSI", "amount": 0},
        {"currency": "OKB", "amount": 0},
        {"currency": "OKT", "amount": 0},
        {"currency": "SWTH", "amount": 0},
        {"currency": "USC", "amount": 0},
        {"currency": "USDC", "amount": 0},
        {"currency": "USDC", "amount": 0},
        {"currency": "USDC", "amount": 0},
        {"currency": "WBTC", "amount": 0},
        {"currency": "wstETH", "amount": 0},
        {"currency": "YieldUSD", "amount": 0},
        {"currency": "ZIL", "amount": 0}
      ]
} else {
    currentOwned = JSON.parse(localStorage.getItem('currentOwned'));
}   


function updateStorage () {
    localStorage.setItem('currentOwned', JSON.stringify(currentOwned));
}

function updateCurrentOwnedAtSwap() {
    const inputCurrency = document.getElementById('currency').value;
    const outputCurrency = document.getElementById('currency2').value;
    document.getElementById("swapOwnedSend").textContent = "Currently Owned:" 
        + currentOwned.find(item => item.currency === inputCurrency).amount ;
    document.getElementById("swapOwnedrecieve").textContent = "Currently Owned:"
        + currentOwned.find(item => item.currency === outputCurrency).amount;
}

function updateCurrentOwnedAtSend() {
    const inputCurrency = document.getElementById('currency3').value;
    document.getElementById("sendOwnedSend").textContent = "Currently Owned:" 
    + currentOwned.find(item => item.currency === inputCurrency).amount ;
}

function updateCurrentOwnedAtBuy() {
    document.getElementById('usd-balance').textContent = "USD to spend (balance: "
    + currentOwned.find(item => item.currency === 'USD').amount + ")";
}

function updateCurrentOwnedAtLimit() {
    const inputCurrency = document.getElementById('currency4').value;
    const outputCurrency = document.getElementById('currency5').value;
    document.getElementById("limitOwnedSend").textContent = "Currently Owned:" 
        + currentOwned.find(item => item.currency === inputCurrency).amount ;
    document.getElementById("limitOwnedrecieve").textContent = "Currently Owned:"
        + currentOwned.find(item => item.currency === outputCurrency).amount;
}

updateCurrentOwnedAtSwap();
updateCurrentOwnedAtSend();
updateCurrentOwnedAtBuy();
updateCurrentOwnedAtLimit()
updateCurrencyExchange();


















// Navigation functions
function change(number, event) {

    if (event) event.preventDefault(); // Prevent form submission

    // Remove 'active' class from all buttons first
    document.getElementById("swapButton").classList.remove("active");
    document.getElementById("sendButton").classList.remove("active");
    document.getElementById("buyButton").classList.remove("active");
    document.getElementById("limitButton").classList.remove("active");
    document.getElementById("swap").classList.add("hidden");
    document.getElementById("send").classList.add("hidden");
    document.getElementById("buy").classList.add("hidden");
    document.getElementById("limit").classList.add("hidden");
    switch (number) {
        case 1 : 
            document.getElementById("swapButton").classList.add("active");
            document.getElementById("swap").classList.remove("hidden");
            break;
        case 2 :
            document.getElementById("sendButton").classList.add("active");
            document.getElementById("send").classList.remove("hidden");
            break;
        case 3 : 
            document.getElementById("buyButton").classList.add("active");
            document.getElementById("buy").classList.remove("hidden");
            break;
        case 4 :
            document.getElementById("limitButton").classList.add("active");
            document.getElementById("limit").classList.remove("hidden");
        default:
            //fall through
    }
}
















// Swap functions
function updateOutput() {
    const input = document.getElementById('input-amount').value;
    const output = document.getElementById('output-amount');
    const currencyinput = document.getElementById('currency').value;
    const currencyoutput = document.getElementById('currency2').value;
    conversion(input,currencyinput,output,currencyoutput);
    updateCurrentOwnedAtSwap()
}

function updateInput() {
    const input = document.getElementById('input-amount');
    const output = document.getElementById('output-amount').value;
    const currencyinput = document.getElementById('currency').value;
    const currencyoutput = document.getElementById('currency2').value;
    conversion(output,currencyoutput,input,currencyinput,);
    updateCurrentOwnedAtSwap()
}

// this portion of code is by chatgpt
function conversion(input, inputCurrency, output, outputCurrency) {
    // Find the input currency rate
    const inputRate = currencyData.find(item => item.currency === inputCurrency)?.price;
    // Find the output currency rate
    const outputRate = currencyData.find(item => item.currency === outputCurrency)?.price;

    // Ensure both rates are found
    if (inputRate === undefined || outputRate === undefined) {
        console.error('Currency not found');
        return null;
    }

    // Calculate the converted amount
    const convertedAmount = (input / inputRate) * outputRate;
    
    // Assign the converted amount to the output
    output.value = convertedAmount;
    return convertedAmount;
}

function confirmAndTrade(event) {

    if (event) event.preventDefault(); // Prevent form submission
    
    const userConfirmed = confirm("Are you sure you want to proceed with the swap?");
    if (userConfirmed) {
        tryToTrade();
    } else {
        alert("You have cancelled the swap!")
    }
}

function tryToTrade() {
    const input = parseFloat(document.getElementById('input-amount').value);
    const output = parseFloat(document.getElementById('output-amount').value);
    const inputCurrency = document.getElementById('currency').value;
    const outputCurrency = document.getElementById('currency2').value;
    const inputAmount = currentOwned.find(item => item.currency === inputCurrency)?.amount;
    const outputAmount = currentOwned.find(item => item.currency === outputCurrency)?.amount;
    if (inputAmount === undefined || outputAmount === undefined ) {
        alert("Currency used not available at the moment!");
    } else if (isNaN(input) || isNaN(output)) {
        alert("Please enter a valid number!")
    } else if (input > inputAmount) {
        alert("You do not have enough curency to trade!");
    } else {
        //can trade
        currentOwned.find(item => item.currency === inputCurrency).amount -= input;
        currentOwned.find(item => item.currency === outputCurrency).amount += output;
        updateCurrentOwnedAtSwap();
        updateCurrentOwnedAtSend();
        updateCurrentOwnedAtBuy();
        updateCurrentOwnedAtLimit();
        updateStorage();
        document.getElementById('input-amount').value = 0;
        document.getElementById('output-amount').value = 0;
        alert("Swap success!");
    }
}












//Send functions
function confirmAndSend (event) {
    if (event) event.preventDefault(); // Prevent form submission

    const input = parseFloat(document.getElementById('input-amount-to-send').value);
    const inputCurrency = document.getElementById('currency3').value;
    const inputAmount = currentOwned.find(item => item.currency === inputCurrency)?.amount;
    if (inputAmount === undefined) {
        alert("Currency used not available at the moment!");
    } else if (isNaN(input) || input <= 0) {
        alert("Please enter a valid number!")
    } else if (input > inputAmount) {
        alert("You do not have enough curency to send!");
    } else if (document.getElementById('person-to-send').value === "") {
        alert("Please enter who you want to send to!")
    } else {
        //can send
        currentOwned.find(item => item.currency === inputCurrency).amount -= input;
        updateCurrentOwnedAtSwap();
        updateCurrentOwnedAtSend();
        updateCurrentOwnedAtBuy();
        updateCurrentOwnedAtLimit();
        updateStorage();
        document.getElementById('input-amount-to-send').value = 0;

        alert("Money sent to " + document.getElementById("person-to-send").value);
        document.getElementById("person-to-send").value = "";
    }

}














//buy functions
function updateAmountRecieved() {
    const input = document.getElementById('usd-to-spend').value;
    const output = document.getElementById('amount-recieved');
    const currencyinput = "USD"
    const currencyoutput = document.getElementById('amount-recieved-type').value;
    conversionBuy(input,currencyinput,output,currencyoutput);
    updateCurrentOwnedAtSwap();
    updateValueActive(input);
}

// this portion of code is by chatgpt
// since many portion of this code is repeated from conversion ideally I should extract those repeated lines out but I have many upcoming exams and do not have the time
function conversionBuy(input, inputCurrency, output, outputCurrency) { 
    // Find the input currency rate
    const inputRate = currencyData.find(item => item.currency === inputCurrency)?.price;
    // Find the output currency rate
    const outputRate = currencyData.find(item => item.currency === outputCurrency)?.price;

    // Ensure both rates are found
    if (inputRate === undefined || outputRate === undefined) {
        console.error('Currency not found');
        return null;
    }

    // Calculate the converted amount
    const convertedAmount = (input / inputRate) * outputRate;
    
    // Assign the converted amount to the output
    output.textContent = "Amount recieved: " + convertedAmount;
    return convertedAmount;
}

function confirmAndBuy(event) {

    if (event) event.preventDefault(); // Prevent form submission
    
    const userConfirmed = confirm("Are you sure you want to proceed with buying?");
    if (userConfirmed) {
        tryToBuy();
    } else {
        alert("You have cancelled the buy!")
    }
}

function tryToBuy() {
    const input = parseFloat(document.getElementById('usd-to-spend').value);
    const output = parseFloat(document.getElementById('amount-recieved').textContent.split(': ')[1]);
    const inputCurrency = "USD";
    const outputCurrency = document.getElementById('amount-recieved-type').value;
    const inputAmount = currentOwned.find(item => item.currency === inputCurrency)?.amount;
    const outputAmount = currentOwned.find(item => item.currency === outputCurrency)?.amount;
    if (inputAmount === undefined || outputAmount === undefined ) {
        alert("Currency used not available at the moment!");
    } else if (isNaN(input) || isNaN(output)) {
        alert("Please enter a valid number!")
    } else if (input > inputAmount) {
        alert("You do not have enough curency to trade!");
    } else {
        //can trade
        currentOwned.find(item => item.currency === inputCurrency).amount -= input;
        currentOwned.find(item => item.currency === outputCurrency).amount += output;
        updateCurrentOwnedAtSwap();
        updateCurrentOwnedAtSend();
        updateCurrentOwnedAtBuy();
        updateCurrentOwnedAtLimit();
        updateStorage();
        document.getElementById('usd-to-spend').value = 0;
        document.getElementById('amount-recieved').textContent = "Amount recieved: " + 0;
        alert("Buy success!");
    }

    
}

function changeUSD(amount, event) {
    if (event) event.preventDefault(); // Prevent form submission
    document.getElementById('usd-to-spend').value = amount;
    updateAmountRecieved();
}

function updateValueActive(amount) {
    document.getElementById('buy100').classList.remove('value-button-active');
    document.getElementById('buy300').classList.remove('value-button-active');
    document.getElementById('buy1000').classList.remove('value-button-active');
    switch (amount) {
        case '100':
            document.getElementById('buy100').classList.add('value-button-active');
            break;            
        case '300':
            document.getElementById('buy300').classList.add('value-button-active');
            break; 
        case '1000':
            document.getElementById('buy1000').classList.add('value-button-active');
            break;
        default:
            //do nothing
    }
}















// Limit functions
function updateBuyAmount() {
    const input = document.getElementById('sell-amount').value;
    const output = document.getElementById('buy-amount');
    const currencyinput = document.getElementById('currency4').value;
    const currencyoutput = document.getElementById('currency5').value;
    conversionLimit(input,output,false); 
    //updateCurrentOwnedAtSwap2()
}

function updateSellAmount() {
    const input = document.getElementById('sell-amount');
    const output = document.getElementById('buy-amount').value;
    const currencyinput = document.getElementById('currency4').value;
    const currencyoutput = document.getElementById('currency5').value;
    conversionLimit(input,output,true); 
    //updateCurrentOwnedAtSwap()
}


function confirmAndLimit(event) {

    if (event) event.preventDefault(); // Prevent form submission
    
    const userConfirmed = confirm("Are you sure you want to proceed with the limit?");
    if (userConfirmed) {
        tryToLimit();
    } else {
        alert("You have cancelled the limit!")
    }
}

function tryToLimit() {
    const input = parseFloat(document.getElementById('sell-amount').value);
    const output = parseFloat(document.getElementById('buy-amount').value);
    const inputCurrency = document.getElementById('currency4').value;
    const outputCurrency = document.getElementById('currency5').value;

    if (isNaN(input) || isNaN(output) || input <= 0) {
        alert("Please enter a valid number!")
    } else {
        document.getElementById('sell-amount').value = 0;
        document.getElementById('buy-amount').value = 0;
        alert("Limit set successfully. Trade will be made in future when conditions are met! Expect up to 1 hour delay.");
    }
}

function updateCurrencyExchange(ratioAdded, event) {
    if (event) event.preventDefault(); // Prevent form submission
    const inputCurrency = document.getElementById('currency4').value;
    const outputCurrency = document.getElementById('currency5').value;
    document.getElementById('exchange-amount').value = conversionNoChangeOutput(1,inputCurrency,outputCurrency) * (1 + ratioAdded);
    updateRateButton();
    updateBuyAmount();
}

function updateMarketCurrencyExchange(event) {
    if (event) event.preventDefault(); // Prevent form submission
    updateCurrencyExchange(0,event);
}

updateMarketCurrencyExchange();

function conversionNoChangeOutput(input, inputCurrency, outputCurrency) {
    // Find the input currency rate
    const inputRate = currencyData.find(item => item.currency === inputCurrency)?.price;
    // Find the output currency rate
    const outputRate = currencyData.find(item => item.currency === outputCurrency)?.price;

    // Ensure both rates are found
    if (inputRate === undefined || outputRate === undefined) {
        console.error('Currency not found');
        return null;
    }

    // Calculate the converted amount
    const convertedAmount = (input / inputRate) * outputRate;
    
    return convertedAmount;
}

// since many portion of this code is repeated from conversion ideally I should extract those repeated lines out but I have many upcoming exams and do not have the time
function conversionLimit(input, output, isflipped) { 
    let convertedAmount;
    if (!isflipped){
        convertedAmount = document.getElementById('exchange-amount').value * input;
    } else {
        convertedAmount = input / document.getElementById('exchange-amount').value ;
    }
    
    // Assign the converted amount to the output
    output.value = convertedAmount;
    return convertedAmount;
}

function updateRateButton() {
    const inputCurrency = document.getElementById('currency4').value;
    const outputCurrency = document.getElementById('currency5').value;
    const marketRate = conversionNoChangeOutput(1,inputCurrency,outputCurrency);
    const amount = document.getElementById('exchange-amount').value;
    console.log(amount);
    console.log(marketRate);
    const percent = Math.round((amount - marketRate)/marketRate * 100);

    document.getElementById('market').classList.remove('value-button-active');
    document.getElementById('add1').classList.remove('value-button-active');
    document.getElementById('add5').classList.remove('value-button-active');
    document.getElementById('add10').classList.remove('value-button-active');
    console.log(percent);
    switch (percent) {
        case 1:
            document.getElementById('add1').classList.add('value-button-active');
            break;            
        case 5:
            document.getElementById('add5').classList.add('value-button-active');
            break; 
        case 10:
            document.getElementById('add10').classList.add('value-button-active');
            break;
        case 0:
            document.getElementById('market').classList.add('value-button-active');
            document.getElementById('market').textContent = "Market";
            break;
        default:
            //do nothing
            document.getElementById('market').classList.add('value-button-active');
            document.getElementById('market').textContent = percent + "% X";
    }  


}

function handleChangeInSellCurrency() {
    updateMarketCurrencyExchange();
    updateBuyAmount();
    document.getElementById("exchange-currency").textContent = "When 1 "
        + document.getElementById("currency4").value + " is worth";
}


function handleChangeInBuyCurrency() {
    updateMarketCurrencyExchange();
    updateSellAmount();
    document.getElementById("currency6").textContent = document.getElementById("currency5").value;   
}

function changeExpiry(type, event) {
    if (event) event.preventDefault(); // Prevent form submission
    document.getElementById('day').classList.remove('value-button-active');
    document.getElementById('week').classList.remove('value-button-active');
    document.getElementById('month').classList.remove('value-button-active');
    document.getElementById('year').classList.remove('value-button-active');
    document.getElementById(type).classList.add('value-button-active');
}
