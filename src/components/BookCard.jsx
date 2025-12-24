import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="book-card">
      {/* Portada */}
      {book.cover ? (
        <img src={book.cover} alt={book.title} />
      ) : (
        <div className="book-no-cover">
          Sin portada disponible
        </div>
      )}

      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>${book.price}</p>

      <Link to={`/book/${book.id}`} state={{ book }}>
        Ver detalle
      </Link>
    </div>
  );
}
