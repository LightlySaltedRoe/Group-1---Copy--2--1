document.getElementById('convert-button').addEventListener('click', function() {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = parseFloat(document.getElementById('amount').value);
    let conversionRate;

    // Example conversion rates (you can replace these with actual API calls)
    const rates = {
        'SGD': { 'MYR': 3.09, 'JPY': 81.54 },
        'MYR': { 'SGD': 0.32, 'JPY': 26.42 },
        'JPY': { 'SGD': 0.012, 'MYR': 0.038 }
    };

    if (rates[fromCurrency] && rates[fromCurrency][toCurrency]) {
        conversionRate = rates[fromCurrency][toCurrency];
    } else {
        alert('Conversion rate not available.');
        return;
    }

    const convertedAmount = amount * conversionRate;
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
});
