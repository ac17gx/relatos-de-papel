import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import { CartProvider } from "./context/CartContext";
import { Shop } from "./pages/Shop";
import Checkout from './pages/Checkout';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <Routes>
        <Route path="/" element={<Landing />} />  
        <Route path="/home" element={<Home />} />  
        <Route path="/book/*" element={<BookDetail />} />
        <Route path="/cart" element={<Shop />} />
        <Route path="/payment/checkout" element={<Checkout />} />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
