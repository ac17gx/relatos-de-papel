import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { searchBooks } from "../services/bookService";

import BookCard from "../components/BookCard";
import { useBooks } from "../hooks/useBooks";

export default function Landing() {
  const [cargandoRecomendaciones, setCargandoRecomendaciones] = useState(true);
  const [librosRecomendados, setLibrosRecomendados] = useState([]);

  const navigate = useNavigate();

  const { filterValidBooks } = useBooks();

  const cargarRecomendaciones = async () => {
    const results = await searchBooks("the");
    const validBooks = filterValidBooks(results, 10);

    const shuffled = validBooks.sort(() => 0.5 - Math.random());
    const random4 = shuffled.slice(0, 4);
    const booksWithPrice = random4.map((book) => ({
      author: book.author,
      cover: book.cover,
      id: book.id,
      title: book.title,
      price: book.price, // Precio aleatorio entre 1 y 50
    }));

    setLibrosRecomendados(booksWithPrice);
    setCargandoRecomendaciones(false);
  };

  //Carga libros recomendados
  useEffect(() => {
    cargarRecomendaciones();
  }, []);

  //Redirigir a home luego de 5 segundos de haber cargado las recomendaciones
  useEffect(() => {
    let timeOutID;

    if (!cargandoRecomendaciones) {
      timeOutID = setTimeout(() => {
        navigate("/home");
      }, 5000);
    }

    return () => {
      clearTimeout(timeOutID);
    };
  }, [cargandoRecomendaciones]);

  return cargandoRecomendaciones ? (
    <div className="container py-5 text-center">
      <div className="spinner-border text-primary" role="status" />
      <p>Obteniendo recomendaciones del día</p>
    </div>
  ) : (
    <div className="container py-5 text-center">
      <h1>
        <i className="bi bi-lightbulb"></i>
        Recomendaciones del día
      </h1>

      <div className="book-list">
        {librosRecomendados.map((libro) => (
          <BookCard key={libro.id} book={libro} />
        ))}
      </div>
    </div>
  );
}
