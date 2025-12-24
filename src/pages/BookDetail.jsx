import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/cartContext";

export default function BookDetail() {
  const location = useLocation();
  const [book, setBook] = useState(null);
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  const workPath = location.pathname.replace("/book", "");
  const bookDetail = location.state?.book;
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`https://openlibrary.org${workPath}.json`);
        if (!res.ok) throw new Error("No se pudo cargar el detalle");
        const data = await res.json();
        setBook(data);

        if (data.authors && data.authors.length > 0) {
          const authorPromises = data.authors.map(async (a) => {
            const id = a.author?.key;
            if (id) {
              const resAuthor = await fetch(`https://openlibrary.org${id}.json`);
              if (resAuthor.ok) {
                const authorData = await resAuthor.json();
                return authorData.name;
              }
            }
            return "Autor desconocido";
          });
          const authorNames = await Promise.all(authorPromises);
          setAuthors(authorNames);
        }
      } catch (e) {
        setError(e.message);
      }
    };
    load();
  }, [workPath]);

  if (error)
    return (
      <>
        <Navbar />
        <div className="container py-5 text-danger text-center">
          <h4>Error: {error}</h4>
        </div>
      </>
    );

  if (!book)
    return (
      <>
        <Navbar />
        <div className="container py-5 text-center">
          <div className="spinner-border text-primary" role="status" />
          <p className="mt-3">Cargando detalle…</p>
        </div>
      </>
    );

  return (
    <>
      <Navbar />
      <div className="container py-5" style={{ marginTop: "70px" }}>
        <div className="card shadow-lg">
          <div className="row g-0">
            <div className="col-md-4 text-center p-4">
              {book.covers && book.covers.length > 0 ? (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
                  alt={book.title}
                  className="img-fluid rounded"
                />
              ) : (
                <div className="text-muted">Sin portada disponible</div>
              )}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">{book.title}</h2>

                {book.description ? (
                  <p className="card-text">
                    {typeof book.description === "string"
                      ? book.description
                      : book.description.value}
                  </p>
                ) : (
                  <p className="text-muted">
                    Sin descripción disponible
                  </p>
                )}

                {authors.length > 0 && (
                  <div className="mt-3">
                    <h5>Autores:</h5>
                    <ul>
                      {authors.map((name, idx) => (
                        <li key={idx}>{name}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {book.subjects && book.subjects.length > 0 && (
                  <div className="mt-3">
                    <h5>Temas:</h5>
                    {book.subjects.slice(0, 8).map((s, idx) => (
                      <span key={idx} className="badge bg-success me-1">
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-3">
                  <p className="card-text">
                    <small className="text-muted">
                      Creado:{" "}
                      {book.created?.value
                        ? new Date(book.created.value).toLocaleDateString()
                        : "N/A"} 
                      &nbsp;
                      Última modificación:{" "}
                      {book.last_modified?.value
                        ? new Date(book.last_modified.value).toLocaleDateString()
                        : "N/A"}
                    </small>
                  </p>
                  <p className="card-text">
                      Precio: ${bookDetail.price}
                  </p>
                </div>
              </div>
              <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-secondary" type="button" onClick={() => addToCart(book, bookDetail.price)}>
                  Agreagar al carrito
                </button>
              </div>
              <br />
              <div className="d-grid gap-2 d-md-flex justify-content-md-end pb-3 pe-3">
                <Link to="/" className="btn btn-primary">Regresar</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
