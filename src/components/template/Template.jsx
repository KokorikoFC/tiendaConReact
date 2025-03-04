import "./Template.css";
import Header from "../header/Header";
import { useCart } from "../../hooks/useCart.jsx";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { LuCakeSlice } from "react-icons/lu";
import { LuSandwich } from "react-icons/lu";
import { LuCroissant } from "react-icons/lu";
import { PiBreadDuotone } from "react-icons/pi";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";

function Template() {
    const { addToCart } = useCart();

    const { state } = useLocation();
    const product = state?.product;

    const [quantity, setQuantity] = useState(2);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    if (!product) {
        return <h2>No se encontraron datos del producto</h2>;
    }

    const getCategoryIcon = (category) => {
        switch (category) {
            case "panaderia":
                return <PiBreadDuotone className="categoryIcon" />;
            case "pasteleria":
                return <LuCakeSlice className="categoryIcon" />;
            case "sandwiches":
                return <LuSandwich className="categoryIcon" />;
            case "bolleria":
                return <LuCroissant className="categoryIcon" />;
            default:
                return <PiBreadDuotone className="categoryIcon" />;
        }
    };
    return (
        <main>
            <Header />
            <div className="template-container">
                <div className="info-container">
                    <div className="title-container">
                        <div className="title">
                            <h1>{product.name}</h1>
                        </div>
                        <div className="decoration"></div>
                    </div>
                    <div className="price-container">
                        <div className="stars">
                            <span>⭐⭐⭐⭐⭐</span>
                        </div>
                        <div className="price">
                            <span>{product.price} €</span>
                        </div>
                    </div>
                    <div className="description-container">
                        <p>{product.longDescription}</p>
                    </div>
                    <div className="category-container">
                        <p>Categoría: </p>
                        <div className="productCategory">
                            {getCategoryIcon(product.category)}
                        </div>
                    </div>
                    <div className="cart-container">
                        <div className="quantity-container">
                            <TiMinus
                                className="quantity-button"
                                onClick={decrementQuantity}
                            />

                            <span>{quantity}</span>
                            <TiPlus
                                className="quantity-button"
                                onClick={incrementQuantity}
                            />
                        </div>
                        <button
                            className="add-to-cart-button"
                            onClick={() => addToCart(product)}
                        >
                            AÑADIR AL CARRITO
                        </button>
                    </div>
                </div>

                <div className="img-container">
                    <div className="circle">
                        <img src={product.image} alt={product.name} />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Template;
