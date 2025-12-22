// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* la ruta debe coincidir con el Link */}
        <Route path="/book/*" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
