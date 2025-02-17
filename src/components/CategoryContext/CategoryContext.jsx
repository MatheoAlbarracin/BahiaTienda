import React, { createContext, useState } from 'react';

// Crear el contexto
export const CategoryContext = createContext();

// Proveedor del contexto
export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
