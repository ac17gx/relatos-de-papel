import { useState, useEffect } from "react";
import { searchBooks } from "../services/bookService";
 
export function useBooks() {
  const [books, setBooks] = useState([]);
 
  // Filtra libros válidos: únicos por autor y título, hasta un límite
  const filterValidBooks = (results, limit = 20) => {
    const seenAuthors = new Set();
    const seenTitles = new Set();
    const uniqueBooks = [];
 
    let i = 0;
    // Invariante: en cada paso, uniqueBooks contiene solo libros válidos y no supera el límite
    while (i < results.length && uniqueBooks.length < limit) {
      const book = results[i];
 
      if (
        book.author &&
        book.title &&
        !seenAuthors.has(book.author) &&
        !seenTitles.has(book.title)
      ) {
        seenAuthors.add(book.author);
        seenTitles.add(book.title);
        uniqueBooks.push(book);
      }
      i++; // avanzar al siguiente libro
    }
 
    return uniqueBooks;
  };
 
  const fetchBooks = async (query) => {
    const results = await searchBooks(query);
    const validBooks = filterValidBooks(results);
    setBooks(validBooks);
  };
 
  useEffect(() => {
    const loadInitialBooks = async () => {
      const results = await searchBooks("the");
 
      const validBooks = filterValidBooks(results, 100);
 
      // Mezclar aleatoriamente y tomar 20
      const shuffled = validBooks.sort(() => 0.5 - Math.random());
      const random20 = shuffled.slice(0, 20);
 
      // Asignar precio aleatorio entre 1 y 50
      const booksWithPrice = random20.map((book) => ({
        author: book.author,
        cover: book.cover,
        id: book.id,
        title: book.title,
        price: book.price
      }));
 
      setBooks(booksWithPrice);
    };
 
    loadInitialBooks();
  }, []);
 
  return { books, fetchBooks, filterValidBooks };
}