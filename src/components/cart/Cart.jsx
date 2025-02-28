import "./Cart.css";
import { useId } from "react";
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
    const cartCheckBoxId = useId();
    const { cart, clearCart } = useCart();
    return (
        <>
            <label className="cartBtn" htmlFor={cartCheckBoxId}>
                <FaShoppingCart className="cart-icon" />
            </label>
            <input type="checkbox" id={cartCheckBoxId} hidden />
            <aside className="cart">
                <ul>
                    {cart.map((product) => (
                        <CartItem
                            key={product.id}
                            product={product}
                            {...product}
                        />
                    ))}
                </ul>
                <button onClick={clearCart}>Limpiar</button>
            </aside>
        </>
    );
}

export default Cart;
