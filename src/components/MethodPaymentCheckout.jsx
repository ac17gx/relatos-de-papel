
export default function MethodPaymentCheckout() {
    return (
        <div id="method-payment-checkout" className="container">
            <h3>Seleccionar método de pago</h3>
            <label className="form-label" htmlFor="method-payment-select-checkout">Pagar con:</label>
            <select id="method-payment-select-checkout" className="form-select">
                <option value="159296" typeMethodPayment="credit-card" selected>Visa ************-1234</option>
                <option value="165489" typeMethodPayment="credit-card">MasterCard ************-5678</option>
                <option value="178929" typeMethodPayment="paypal">PayPal</option>
                <option value="179620" typeMethodPayment="google-pay">GooglePay</option>
            </select>
        </div>
    );
}