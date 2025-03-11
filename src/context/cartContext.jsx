import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Estado para saber si el carrito está abierto o cerrado
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Usar localStorage para guardar el carrito
    const localStorageCart = localStorage.getItem("cart");
    const [cart, setCart] = useState(
        localStorageCart ? JSON.parse(localStorageCart) : []
    );

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Función para abrir/cerrar el carrito
    const toggleCart = () => {
        setIsCartOpen(prev => !prev);
    };

    //-----------AGREGAR AL CARRITO-----------
    const addToCart = (product) => {
        const productInCartId = cart.findIndex((item) => item.id === product.id);

        if (productInCartId >= 0) {
            const newCart = structuredClone(cart);
            newCart[productInCartId].quantity += 1;
            setCart(newCart);
            if (!isCartOpen) {
                toast.success(`Se agregó otra unidad de ${product.name}`, {
                    className: 'toast-success', 
                    icon: false
                });
            }
        } else {
            setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
            if (!isCartOpen) {
                toast.success(`${product.name} añadido al carrito`, {
                    className: 'toast-success', 
                    icon: false
                });
            }
        }
    };

    //-----------AGREGAR UN PRODUCTO CON CANTIDAD DEFINIDA AL CARRITO-----------
    const addProductToCartWithQuantity = (product, quantity) => {
        const productInCartId = cart.findIndex((item) => item.id === product.id);

        if (productInCartId >= 0) {
            const newCart = structuredClone(cart);
            newCart[productInCartId].quantity += quantity;
            setCart(newCart);
            if (!isCartOpen) {
                toast.success(`Se agregaron ${quantity} unidades de ${product.name} al carrito`, {
                    className: 'toast-success',
                    icon: false
                });
            }
        } else {
            setCart((prevState) => [...prevState, { ...product, quantity }]);
            if (!isCartOpen) {
                toast.success(`${product.name} añadido al carrito (${quantity} unidades)`, {
                    className: 'toast-success',
                    icon: false
                });
            }
        }
    };

    //-----------ELIMINAR UNO DEL CARRITO-----------
    const removeOneFromCart = (product) => {
        const productInCartId = cart.findIndex(
            (item) => item.id === product.id
        );

        if (productInCartId >= 0) {
            const newCart = structuredClone(cart);
            if (newCart[productInCartId].quantity > 1) {
                newCart[productInCartId].quantity -= 1;
                setCart(newCart);
                if (!isCartOpen) { // Solo mostrar el toast si el carrito está cerrado
                    toast.warn(`Se eliminó una unidad de ${product.name}`);
                }
            } else {
                newCart.splice(productInCartId, 1);
                setCart(newCart);
                if (!isCartOpen) { // Solo mostrar el toast si el carrito está cerrado
                    toast.error(`${product.name} eliminado del carrito`);
                }
            }
        }
    };

    //-----------ELIMINAR TODO EL CARRITO-----------
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                clearCart,
                removeOneFromCart,
                addProductToCartWithQuantity,
                isCartOpen,
                toggleCart, 
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
