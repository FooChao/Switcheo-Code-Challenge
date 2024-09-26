
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

function updateCurrentOwned() {
    const inputCurrency = document.getElementById('currency').value;
    const outputCurrency = document.getElementById('currency2').value;
    document.getElementById("swapOwnedSend").textContent = "Currently Owned:" 
        + currentOwned.find(item => item.currency === inputCurrency).amount ;
    document.getElementById("swapOwnedrecieve").textContent = "Currently Owned:"
        + currentOwned.find(item => item.currency === outputCurrency).amount;
}



function change(number, event) {

    if (event) event.preventDefault(); // Prevent form submission

    // Remove 'active' class from all buttons first
    document.getElementById("swapButton").classList.remove("active");
    document.getElementById("sendButton").classList.remove("active");
    document.getElementById("buyButton").classList.remove("active");
    document.getElementById("swap").classList.add("hidden");
    document.getElementById("send").classList.add("hidden");
    document.getElementById("buy").classList.add("hidden");
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
        default:
            //fall through
    }
}

updateCurrentOwned();

function updateOutput() {
    const input = document.getElementById('input-amount').value;
    const output = document.getElementById('output-amount');
    const currencyinput = document.getElementById('currency').value;
    const currencyoutput = document.getElementById('currency2').value;
    conversion(input,currencyinput,output,currencyoutput);
}

function updateInput() {
    const input = document.getElementById('input-amount');
    const output = document.getElementById('output-amount').value;
    const currencyinput = document.getElementById('currency').value;
    const currencyoutput = document.getElementById('currency2').value;
    conversion(output,currencyoutput,input,currencyinput,);
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
        updateCurrentOwned();
        updateStorage();
        document.getElementById('input-amount').value = 0;
        document.getElementById('output-amount').value = 0;
    }
}





