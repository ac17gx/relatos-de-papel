import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="book-card">
      {/* Portada */}
      {book.cover ? (
        <img src={book.cover} alt={book.title} />
      ) : (
        <div className="book-no-cover">
          📖 Sin portada disponible
        </div>
      )}

      {/* Contenido */}
      <h2>{book.title}</h2>
      <p>{book.author}</p>

      {/* Botón/enlace */}
      <Link to={`/book/${book.id}`}>
        Ver detalle
      </Link>
    </div>
  );
}
