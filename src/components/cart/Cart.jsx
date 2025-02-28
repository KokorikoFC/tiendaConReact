import './Cart.css';
import { useId } from "react";
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
  const cartCheckBoxId = useId();

  return (
    <>
      <label className="cartBtn" htmlFor={cartCheckBoxId}>
        <FaShoppingCart className="cart-icon"/>
      </label>
      <input type="checkbox" id={cartCheckBoxId} hidden />
      <aside className="cart">
        <ul>
          <li>
            <img src="src/assets/products_img/fruit_pastry.png" alt="" />
            <p>Tarta</p>
            <div className="">
              <p>Qty:1</p>
              <button>+</button>
            </div>
          </li>
        </ul>
        <button>Limpiar</button>
      </aside>
    </>
  );
}

export default Cart;
