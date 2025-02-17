import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ProcessBuy = () => {
    const { cartItems, clearCart } = useContext(CartContext);

    const handlePurchase = () => {
        // Lógica para procesar la compra
        console.log('Compra procesada:', cartItems);
        clearCart(); // Limpia el carrito después de la compra
    };

    return (
        <div>
            <h2>Proceso de Compra</h2>
            {cartItems.length === 0 ? (
                <p>No hay artículos en el carrito.</p>
            ) : (
                <div>
                    <h3>Resumen de Compra</h3>
                    {cartItems.map(item => (
                        <div key={item.id}>
                            <h4>{item.name}</h4>
                            <p>Precio: ${item.price}</p>
                        </div>
                    ))}
                    <button onClick={handlePurchase}>Confirmar Compra</button>
                </div>
            )}
        </div>
    );
};

export default ProcessBuy;
