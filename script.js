document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('checkoutForm').addEventListener('submit', function(e) {
        e.preventDefault();

        // Collect form data
        const billingName = document.getElementById('billingName').value;
        const billingEmail = document.getElementById('billingEmail').value;
        const billingAddress = document.getElementById('billingAddress').value;
        const billingCity = document.getElementById('billingCity').value;
        const billingZip = document.getElementById('billingZip').value;
        
        const shippingName = document.getElementById('shippingName').value;
        const shippingAddress = document.getElementById('shippingAddress').value;
        const shippingCity = document.getElementById('shippingCity').value;
        const shippingZip = document.getElementById('shippingZip').value;
        
        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;

        // Mock userId for demonstration
        const userId = 1;

        // Mock wallet balance for demonstration
        const walletBalance = {
            'USD': 1000,
            'EUR': 800
        };

        // Mock payment details
        const paymentDetails = {
            cardNumber,
            expiryDate,
            cvv
        };

        // Checkout amount and currency (for demonstration)
        const amount = 100;
        const currency = 'USD';

        // Checkout function call
        const result = checkout(userId, amount, currency, paymentDetails, walletBalance);
        alert(result);
    });
});

function checkout(userId, amount, currency, paymentDetails, walletBalance) {
    // Ensure sufficient balance
    if (walletBalance[currency] >= amount) {
        // Create a transaction
        const transactionData = {
            userId,
            amount,
            currency,
            paymentDetails,
            date: new Date(),
            type: 'checkout'
        };

        // Deduct the amount from wallet
        walletBalance[currency] -= amount;

        // Track expense
        trackExpense(userId, transactionData);

        return 'Transaction successful!';
    } else {
        return 'Insufficient balance!';
    }
}

function trackExpense(userId, expenseData) {
    // Implementation for tracking an expense
    console.log(`Tracking expense for user ${userId}:`, expenseData);
}
