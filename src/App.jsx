// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import { CartProvider } from "./context/cartContext";
import { Shop } from "./pages/Shop";
import Checkout from './pages/Checkout';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/book/*" element={<BookDetail />} />
        <Route path="/cart" element={<Shop />} />
        <Route path="/payment/checkout" element={<Checkout />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
