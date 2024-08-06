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
        'GBP': 0.75,
        'INR': 74.57,
        'JPY': 110.61,
        'AUD': 1.34,
        'CAD': 1.25,
        'CHF': 0.92,
        'CNY': 6.47
    };

    const convertedAmount = (amount / conversionRates[fromCurrency]) * conversionRates[toCurrency];
    document.getElementById('result').innerText = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
    document.getElementById('result').style.animation = 'highlight 0.5s ease-in-out';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    toggleButton.onclick = toggleDarkMode;
});
    