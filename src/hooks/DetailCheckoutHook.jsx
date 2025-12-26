import { useMemo } from 'react'; //se usa useMemo para guardar los calculos en memoria, y se vuelve a recalcular solo si cambian, en este caso aplicado al carrito del checkout.
export default function useDetailCheckout( books = [] ) { //pasamos el parametros de los libros que se estarian comprando

    //creamos la variable y su asignanacion usando useMemo con funcion flecha para calcular la cantidad de libros
    const totalBooks = useMemo(() => { 
        return books.reduce((sum, book) => sum + (book.quantity), 0); //metodo reduce(), se usa para acumular la cantidad de libros, la variable sum se inicia en 0
    }, [books]);

    //creamos la variable y su asignanacion usando useMemo con funcion flecha para calcular el total a pagar por los libros
    const totalPrice = useMemo(() => { 
        return books.reduce((sum, book) => sum + (book.price * book.quantity), 0);  //metodo reduce(), se usa para acumular el total a pagar por los libros, la variable sum se inicia en 0
    }, [books]);

    //retornamos las variables
    return {
        totalBooks, 
        totalPrice
    };
}