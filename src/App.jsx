// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* la ruta debe coincidir con el Link */}
        <Route path="/book/*" element={<BookDetail />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
