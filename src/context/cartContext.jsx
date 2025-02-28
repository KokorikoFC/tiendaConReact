import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    //Usar localStorage para guardar el carrito
    const localStorageCart = localStorage.getItem("cart");
    const [cart, setCart] = useState(
        localStorageCart ? JSON.parse(localStorageCart) : []
    );

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    //-----------AGREGAR AL CARRITO-----------
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

    //-----------ELIMINAR UNO DEL CARRITO-----------
    const removeOneFromCart = (product) => {
        const productInCartId = cart.findIndex(
            (item) => item.id === product.id
        );

        if (productInCartId >= 0) {
            const newCart = structuredClone(cart);
            if (newCart[productInCartId].quantity > 1) {
                // Decrease quantity if quantity is greater than 1
                newCart[productInCartId].quantity -= 1;
            } else {
                // Remove product from cart if quantity is 1
                newCart.splice(productInCartId, 1);
            }
            setCart(newCart);
        }
    };

    //-----------ELIMINAR TODO EL CARRITO-----------
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, clearCart, removeOneFromCart }}
        >
            {children}
        </CartContext.Provider>
    );
};
