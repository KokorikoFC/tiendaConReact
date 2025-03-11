import "./Cart.css";
import { useState, useEffect } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { useCart } from "../../hooks/useCart.jsx";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";

export function CartItem({ name, price, image, quantity, product }) {
    const { addToCart, removeOneFromCart } = useCart();

    return (
        <li className="cart-item">
            <div className="cart-item-info">
                <img src={image} alt={name} />
                <p>{name}</p>
            </div>
            <div className="cart-item-controls">
                <div className="quantity-controls">
                    <TiMinus
                        className="quantity-btn"
                        onClick={() => removeOneFromCart(product)}
                    />
                    <p>{quantity}</p>
                    <TiPlus
                        className="quantity-btn"
                        onClick={() => addToCart(product)}
                    />
                </div>
                <p className="quantity-controls-price">
                    {(price * quantity).toFixed(2)} €
                </p>
            </div>
        </li>
    );
}

export function Cart() {
    const { cart, clearCart, isCartOpen, toggleCart } = useCart();

    // Ocultar scroll cuando el carrito está abierto
    useEffect(() => {
        if (isCartOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [isCartOpen]);

    return (
        <>
            <div
                className="cartBtn"
                onClick={toggleCart}
                aria-label="Abrir carrito"
            >
                <FaShoppingBasket className="cart-icon" />
            </div>

            {isCartOpen && (
                <>
                    <div
                        className={`overlay ${isCartOpen ? "show" : ""}`}
                        onClick={toggleCart}
                    ></div>

                    <aside className={`cart ${isCartOpen ? "open" : ""}`}>
                        <h3>Carrito</h3>
                        <hr />
                        <div className="cart-list-cont">
                            <ul className="cart-items-list">
                                {cart.length === 0 ? (
                                    <p>El carrito está vacío</p>
                                ) : (
                                    cart.map((product) => (
                                        <li
                                            key={product.id}
                                            className="cart-item"
                                        >
                                            <CartItem
                                                product={product}
                                                {...product}
                                            />
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>

                        <div className="cart-btn-cont">
                            <button className="buy-btn" onClick={clearCart}>
                                Comprar
                            </button>
                        </div>
                    </aside>
                </>
            )}
        </>
    );
}

export default Cart;
