import './Template.css';
import Header from '../header/Header';
import { useCart } from "../../hooks/useCart.jsx";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

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

    return (
        <main>
            <Header />
            <div className="template-container">
                <div className="info-container">
                    <div className="title-container">
                        <div className='decoration'></div>
                        <div className="title">
                            <h1>{product.name}</h1>
                        </div>
                    </div>
                    <div className="price-container">
                        <div className="stars">
                            <span>⭐⭐⭐⭐⭐</span>
                        </div>
                        <div className="price">
                            <span>${product.price}</span>
                        </div>
                    </div>
                    <div className="description-container">
                        <p>{product.description}</p>
                    </div>
                    <div className="category-container">
                        <p>Categoria: {product.category}</p>
                    </div>
                    <div className="cart-container">
                        <div className="quantity-container">
                            <button className="quantity-button" onClick={decrementQuantity}>-</button>
                            <span>{quantity}</span>
                            <button className="quantity-button" onClick={incrementQuantity}>+</button>
                        </div>
                        <button className="add-to-cart-button" onClick={() => addToCart(product)}>AÑADIR AL CARRITO</button>
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
