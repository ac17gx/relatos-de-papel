import { useNavigate } from "react-router-dom"; //se usa useNavigate para redirigir a otra pagina sin volver a pedir el HTML al servidor, solo cambiando la vista en el cliente
import { toast } from "react-toastify"; //se usa react-toastify para alertas o notificaciones
import { useCart } from "../context/CartContext"; //se usa el contexto del carrito
export default function usePaymentCheckout() {
    //creamos la variable y su asignanacion usando useNavigate para redirigir a otra pagina
    const navigate = useNavigate();

    //llamamos al contexto del carrito (items y delete items)
    const { items, clearCart } = useCart();

    //funcion de proceso de pago (simulacion)
    const payProcess = () => {
        if (items.length === 0) {
            toast.error("No hay libros en el carrito para procesar el pago", {
                position: "top-center",
                autoClose: 1500,
                closeOnClick: false,
                draggable: false
            });
        }
        else {
            const toastId = toast.loading("Procesando pago, espere por favor...", {
                position: "top-center",
                autoClose: false,
                closeOnClick: false,
                draggable: false
            });

            setTimeout(() => {
                const success = Math.random() > 0.2; //20% de exito (simulacion)

                if (!success) {
                    toast.update(toastId, {
                        render: "Error en el procesamiento del pago. Por favor, intente nuevamente",
                        type: "error",
                        isLoading: false,
                        autoClose: 1500,
                    });
                }
                else {
                    toast.update(toastId, {
                        render: "Pago realizado con éxito, redireccionando a la página principal",
                        type: "success",
                        isLoading: false,
                        autoClose: 1500,
                    });

                    //vaciamos el carrito de libros (items) (localStorage)
                    clearCart();

                    //redirigimos a la pagina principal despues de 1.5 segundo
                    setTimeout(() => {
                        navigate("/home");
                    }, 1500);
                }

            }, 1500);
        }
    }

    //retornamos las variables
    return {
        payProcess
    };
}