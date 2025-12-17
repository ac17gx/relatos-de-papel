import React, { useState } from 'react'
import { BookContext } from './BookContext'

export const BookProvider = ({children}) => {
    //* Para pruebas se coloca este default de usuario
    const [user, setuser] = useState("");

  return (
    <BookContext.Provider value={{
        user,
        setuser
    }}>
        {children}
    </BookContext.Provider>
  )
}
