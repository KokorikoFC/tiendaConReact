import "./Cart.css";
import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../hooks/useCart.jsx";

function CartItem({ name, price, image, quantity, product }) {
    const { addToCart, removeOneFromCart } = useCart();

    return (
        <li>
            <img src={image} alt={name} />
            <div>
                <strong>{name}</strong> - ${price}
            </div>

            <div className="quantity-controls">
                <button onClick={() => removeOneFromCart(product)}>-</button>
                <small>Qty: {quantity}</small>
                <button onClick={() => addToCart(product)}>+</button>
            </div>
        </li>
    );
}

export function Cart() {
    const { cart, clearCart } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => {
        setIsOpen((prev) => !prev);
        console.log("Carrito abierto:", !isOpen);
    };

    // Efecto para agregar o quitar la clase 'no-scroll' cuando el carrito está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        // Limpiar clase 'no-scroll' cuando el componente se desmonte
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [isOpen]);

    return (
        <>
            <button
                className="cartBtn"
                onClick={toggleCart}
                aria-label="Abrir carrito"
            >
                <FaShoppingCart className="cart-icon" />
            </button>

            {isOpen && (
                <>
                    <div
                        className={`overlay ${isOpen ? "show" : ""}`}
                        onClick={toggleCart}
                    ></div>

                    <aside className={`cart ${isOpen ? "open" : ""}`}>
                        <ul>
                            {cart.length === 0 ? (
                                <p>El carrito está vacío</p>
                            ) : (
                                cart.map((product) => (
                                    <CartItem
                                        key={product.id}
                                        product={product}
                                        {...product}
                                    />
                                ))
                            )}
                        </ul>
                        <button onClick={clearCart}>Limpiar carrito</button>
                    </aside>
                </>
            )}
        </>
    );
}

export default Cart;
