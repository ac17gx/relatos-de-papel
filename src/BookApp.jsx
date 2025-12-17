import React from "react";
import "./styles/styles.css";
import { BookProvider } from "./context/BookProvider";
import { BookRouter } from "./router/BookRouter";

export const BookApp = () => {
  return (
    <BookProvider>
      <BookRouter />
    </BookProvider>
  );
};
