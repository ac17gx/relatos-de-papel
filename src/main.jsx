import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BookApp } from "./BookApp.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BookApp />
    </BrowserRouter>
  </StrictMode>
);
