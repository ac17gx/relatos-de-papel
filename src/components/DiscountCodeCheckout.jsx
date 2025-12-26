export default function DiscountCodeCheckout() {
    return (
        <div id="discount-checkout" className="container">
            <h3>Ingresar cupón</h3>
            <label className="form-label" htmlFor="discount-code-checkout">Código de cupón:</label>
            <div className="d-flex gap-2">
                <input className="form-control" type="text" id="discount-code-checkout" placeholder="Código de descuento" />
                <button className="btn btn-secondary">Aplicar</button>
            </div>
        </div>
    );
}