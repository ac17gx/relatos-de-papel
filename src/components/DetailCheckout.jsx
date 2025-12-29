import { NavLink } from "react-router-dom";

import useDetailCheckout from '../hooks/DetailCheckoutHook';
import usePaymentCheckout from '../hooks/PaymentCheckoutHook';
export default function DetailCheckout({ books = [] }) { //recibimos los libros del carrito que se estan comprando como parametro
    //llamamos al hook del detalle de checkout
    const { totalBooks, totalPrice } = useDetailCheckout(books); 

    //llamamos al hook de pago
    const { payProcess } = usePaymentCheckout();

    return (
        <div id="detail-checkout" className="container">
            <div className="row">
                <div id="list-checkout" className="col-6">
                    <h3>Detalle de pedido</h3>
                    <div className="d-flex flex-column gap-3">
                        {books.map((item, index) => ( /*hacemos el mapa de los items de books*/
                            <div key={index} className="card">
                                <div id="item-checkout" className="card-body d-flex gap-3">
                                    <NavLink to={`/book${item.book.key}`} className="w-25">
                                        <img id="item-img" className="img-fluid rounded" src={ Array.isArray(item.book.covers) && item.book.covers.length > 0 ? `https://covers.openlibrary.org/b/id/${item.book.covers[0]}-L.jpg` : "https://placehold.co/150x200?text=Sin+Imagen" } alt={item.book.title} />
                                    </NavLink>
                                    <div id="item-info">
                                        <NavLink to={`/book${item.book.key}`} className="text-decoration-none text-dark">
                                            <h4 className="card-title">Título: {item.book.title}</h4>
                                        </NavLink>
                                        <p className="card-text">
                                            {/*Autor: {item.book.author}<br />*/}
                                            Cantidad: {item.quantity}<br />
                                            Precio: ${item.price.toFixed(2)}<br />
                                            Total: ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="total-checkout" className="col-3">
                    <h3>Total del pedido</h3>
                    <p>Cantidad libros: {totalBooks}</p>
                    <p><strong>Total a pagar: ${totalPrice.toFixed(2)}</strong></p>
                    <hr />
                    <button className="btn btn-success w-100 fs-3" onClick={() => payProcess()} > Pagar </button>
                </div>
            </div>
        </div>
    );
}