import "./Cart.css";
import { useState, useEffect } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { useCart } from "../../hooks/useCart.jsx";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";


function CartItem({ name, price, image, quantity, product }) {
    const { addToCart, removeOneFromCart } = useCart();

    return (
        <li className="cart-item">
            <div className="cart-item-info">
                <img src={image} alt={name} />
                <p>
                    <strong>{name}</strong>
                </p>
            </div>
            <div className="cart-item-controls">
                <div className="quantity-controls">
                    <TiMinus className="quantity-btn" onClick={() => removeOneFromCart(product)} />
                    <p>{quantity}</p>
                    <TiPlus className="quantity-btn" onClick={() => addToCart(product)} />
                </div>
                <p className="quantity-controls-price">{(price * quantity).toFixed(2)} €</p>

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
            <div 
                className="cartBtn"
                onClick={toggleCart}
                aria-label="Abrir carrito"
            >
                <FaShoppingBasket className="cart-icon" />{" "}
            </div>

            {isOpen && (
                <>
                    <div
                        className={`overlay ${isOpen ? "show" : ""}`}
                        onClick={toggleCart}
                    ></div>

                    <aside className={`cart ${isOpen ? "open" : ""}`}>
                    <h3>Carrito</h3>
                    <hr />
                        <ul className="cart-items-list">
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
                        <button className="buy-btn" onClick={clearCart}>Comprar</button>
                            
                        </ul>
                    </aside>
                </>
            )}
        </>
    );
}

export default Cart;
