import React, { useEffect, useState, useContext } from 'react';
import ProductCard from '../ProductCard/ProductCard'; // Ajusta la ruta según la estructura
import { CategoryContext } from '../CategoryContext/CategoryContext';
import './ProductGrid.css'; // Asegúrate de tener este archivo CSS

const products = [
  {
    id: 1,
    name: 'VIP Bronze',
    price: 100,
    details: [
      { label: 'Dinero Limpio IC (Inicial)', value: '$8,000,000' },
      { label: 'Vip Coins (Inicial)', value: '12000' },
      { label: 'Salario VIP (Cada 30 Min)', value: '$6,000,000' },
      { label: 'VIP Coins (Cadaz 30 Min)', value: '325' },
      { label: 'Capacidad de Inventario', value: '400kg' },
      { label: 'Concesionario VIP', value: '✔' },
      { label: 'Ammu-Nation VIP', value: '✔' },
      { label: 'Reducción Reaparición (Zona Roja)', value: '30s' },
      { label: 'Casa Incluida', value: '✖' },
      { label: 'SMG Incluidas', value: '0' },
      { label: 'Tec-9 Incluidas', value: '1' },
      { label: 'Chalecos Antibalas', value: '1' },
    ],
    category: 'VIPS',
  },
  {
    id: 2,
    name: 'Vehículo 1',
    price: 200,
    details: 'Características del Vehículo 1:\n- Velocidad máxima: 200 km/h\n- Capacidad: 4 personas\n- Color: Rojo',
    category: 'Vehículos',
  },
  {
    id: 3,
    name: 'Organización 1',
    price: 300,
    details: 'Características de la Organización 1:\n- Acceso a eventos exclusivos\n- Beneficios en la tienda',
    category: 'Organizaciones',
  },
  {
    id: 4,
    name: 'Extra 1',
    price: 50,
    details: 'Características del Extra 1:\n- Beneficio adicional en el juego',
    category: 'Extras',
  },
  // Agrega más productos según sea necesario
];

const ProductGrid = () => {
  const { selectedCategory } = useContext(CategoryContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const newFilteredProducts = selectedCategory === 'Información'
      ? [] // No mostrar productos
      : selectedCategory === 'Todos'
      ? products
      : products.filter(product => product.category === selectedCategory);

    setFilteredProducts(newFilteredProducts);
    
    // Mantener la posición del scroll
    window.scrollTo(0, 0); // Esto asegura que el scroll se mantenga en la posición actual
  }, [selectedCategory]);

  return (
    <div className="product-grid">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;