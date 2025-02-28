import "./Cart.css";
import { useId } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../hooks/useCart.jsx";

function CartItem({ name, price, image, quantity }) {
    return (
        <li>
            <img src={image} alt={name} />
            <div>
                <strong>{name}</strong> - ${price}
            </div>

            <footer>
                <small>Qty: {quantity}</small>
            </footer>
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
                        <CartItem key={product.id} {...product} />
                    ))}
                </ul>
                <button onClick={clearCart}>Limpiar</button>
            </aside>
        </>
    );
}

export default Cart;
