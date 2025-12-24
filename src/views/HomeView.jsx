import { useContext } from "react";
import { BookContext } from "../context/BookContext";
const books = [
  {
    id: "1",
    name: "Libro A",
    price: 10,
    img: "https://media.istockphoto.com/id/1411701868/es/foto/magic-book-with-glitter-libro-abierto-con-luces-que-brillan-en-el-fondo-oscuro.jpg?s=612x612&w=0&k=20&c=SHpdYT20NIlRE1-y5Jj7ETWtj6zU9k2IwviLFJ2oRsA=",
  },
  {
    id: "2",
    name: "Libro B",
    price: 15,
    img: "https://guru-soft.com/wp-content/uploads/2024/07/Libro.png",
  },
];

export const HomeView = () => {
  const { addItem } = useContext(BookContext);

  return (
    <div className="p-4">
      <h2>Libros</h2>
      <div className="d-flex gap-3 mt-3">
        {books.map((p, i) => (
          <div key={i} className="card p-3" style={{ width: "150px" }}>
            <h6>{p.name}</h6>
            <p>${p.price}</p>
            <img src={p.img} alt="" />
            <button
              className="btn btn-primary w-100"
              onClick={() => addItem(p)}
            >
              Agregar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
