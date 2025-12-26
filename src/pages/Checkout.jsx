import { useNavigate } from "react-router-dom"; //se usa useNavigate para redirigir a otra pagina sin volver a pedir el HTML al servidor, solo cambiando la vista en el cliente
import { useCart } from "../context/cartContext"; //se usa el contexto del carrito

import DetailCheckout from '../components/DetailCheckout';
import MethodPaymentCheckout from '../components/MethodPaymentCheckout';
import DiscountCodeCheckout from '../components/DiscountCodeCheckout';
import AddressCheckout from '../components/AddressCheckout';
import Navbar from "../components/Navbar";

const Checkout = () => {
    //creamos la variable y su asignanacion usando useNavigate para redirigir a otra pagina
    const navigate = useNavigate();

    //llamamos al contexto del carrito (items)
    const { items } = useCart();

    //se genera un numero de orden aleatorio de 5 digitos, para simular un numero de pedido
    const orderNumber = Math.floor(Math.random() * 90000) + 10000; 

    //si no hay items en el carrito, redirigimos a la pagina principal despues de 1.5 segundos
    if (items.length === 0) {
        setTimeout(() => {
            navigate("/");
        }, 1500);
    }
    else {
        return (
            <>
                <Navbar />
                <div id="checkout" className="container">
                    <h1>Checkout</h1>
                    <hr />
                    <h2>Pedido número #{orderNumber}</h2>
                    <hr />
                    <DetailCheckout books={items} />
                    <hr />
                    <MethodPaymentCheckout />
                    <hr />
                    <DiscountCodeCheckout />
                    <hr />
                    <AddressCheckout />
                </div>
            </>
        )
    }
}

export default Checkout;