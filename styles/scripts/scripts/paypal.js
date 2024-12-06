paypal.Buttons({
    createOrder: (data, actions) => {
        let total = cart.reduce((sum, item) => sum + item.price, 0);
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: total.toFixed(2)
                }
            }]
        });
    },
    onApprove: (data, actions) => {
        return actions.order.capture().then(details => {
            alert(`Payment Successful!`);
            cart = [];
            window.location.href = "receipt.html";
        });
    }
}).render("#paypal-button-container");
