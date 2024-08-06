function convert() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount === '' || isNaN(amount)) {
        document.getElementById('result').innerText = 'Please enter a valid amount';
        return;
    }
                                                                                                                        
    const conversionRates = {
        'USD': 1,
        'EUR': 0.85,
        'GBP': 0.75
    };

    const convertedAmount = (amount / conversionRates[fromCurrency]) * conversionRates[toCurrency];
    document.getElementById('result').innerText = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
