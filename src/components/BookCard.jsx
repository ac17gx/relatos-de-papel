import { NavLink } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="book-card card shadow-sm p-3 mb-3">
      
      {book.cover ? (
        <img src={book.cover} alt={book.title} />
      ) : (
        <div className="book-no-cover">
          <i className="bi bi-book me-2"></i> Sin portada disponible
        </div>
        )}
    
      <h2 className="h5">
        <i className="bi bi-journal-bookmark me-2"></i>
        {book.title} 
      </h2>
      <p className="text-secondary">
        <i className="bi bi-person me-2"></i>
        {book.author}
      </p>
        <p className="text-secondary">
        <i className="bi bi-currency-dollar"></i>
        {book.price}
      </p>

      
      <NavLink to={`/book${book.id}`} className="btn btn-outline-primary btn-sm mt-2" state={{book}}>
        <i className="bi bi-info-circle me-1"></i> Ver detalle
      </NavLink>
    </div>
  );
}
