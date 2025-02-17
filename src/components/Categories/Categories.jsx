import React, { useContext } from 'react';
import { CategoryContext } from '../../components/CategoryContext/CategoryContext';

const Categories = () => {
  const { setSelectedCategory } = useContext(CategoryContext);

  const handleCategoryClick = (category) => {
    if (setSelectedCategory) {
      setSelectedCategory(category);
    } else {
      console.error("setSelectedCategory no está definido");
    }
  };

  return (
    <div>
      <button onClick={() => handleCategoryClick('VIPS')}>VIPS</button>
      <button onClick={() => handleCategoryClick('Vehículos')}>Vehículos</button>
      <button onClick={() => handleCategoryClick('Organizaciones')}>Organizaciones</button>
      <button onClick={() => handleCategoryClick('Extras')}>Extras</button>
    </div>
  );
};

export default Categories;
