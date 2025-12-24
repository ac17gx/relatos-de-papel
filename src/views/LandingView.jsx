import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { obtenerLibroLanding } from '../services/obtenerLibroLanding.js';

import "../styles/landingView.css";

export const LandingView = () => {
  const navigate = useNavigate();
  const [cargando, setCargando] = useState(true);
  const [libro, setLibro] = useState({});


  const cargarLibroLanding = async () => {
    setCargando(true);    

    try {
      const libroObtenido = await obtenerLibroLanding();      
      setLibro(libroObtenido);            

    } catch (error) {
      console.log(error);
    }
    setCargando(false);
  };
    

  useEffect(() => {    
    cargarLibroLanding();    

    const timeOutID = setTimeout(() => {
      navigate("/home")
    }, 5000)

    return () => { clearTimeout(timeOutID)}	

  }, [])  
  
  const VerDetallesLibro = () => {
    navigate()
  }
  console.log(libro);
  return (
    cargando ? 
    (
        <div className="container py-5 text-center">
          <div className="spinner-border text-primary" role="status" />
          <p>Obteniendo libro</p>
        </div>
    ) :      

    (
        <div className="libro">
          <img src={`https://covers.openlibrary.org/b/olid/${libro.cover_edition_key}-M.jpg`} alt={libro.title}></img>          

          <p className="libro__nombre"> {libro.title}</p>
          <p className="libro__promocion">50% de descuento</p>
          
          <Link to={`/book/${libro.id}`}>
            Ver detalles
          </Link>
        </div>
    )
   )     
}
