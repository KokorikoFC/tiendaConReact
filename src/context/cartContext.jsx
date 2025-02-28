import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const productInCartId = cart.findIndex(
            (item) => item.id === product.id
        );

        if (productInCartId >= 0) {
            const newCart = structuredClone(cart);
            newCart[productInCartId].quantity += 1;
            setCart(newCart);
            return setCart(newCart);
        }

        setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
    };
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
