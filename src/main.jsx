import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from "react-toastify"; //importacion del contenedor de notificaciones de react-toastify (obligatorio)

import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    {/*se agrega el contenedor de notificaciones en la aplicacion (obligatorio)*/}
    <ToastContainer /> 
  </StrictMode>,
)
