import './Template.css'
import Header from '../header/Header';
import CherryJuice from '../../assets/img/image.png';
import { useState } from 'react';

function Template() {
    const [quantity, setQuantity] = useState(2);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <main>
            <Header /> {/* Usa el componente Header aquí */}
            <div className="template-container">
                <div className="info-container">
                    <div className="title-container">
                        <div className='decoration'></div>
                        <div className="title">
                            <h1>Fresh Cherry Juice</h1>
                        </div>
                    </div>
                    <div className="price-container">
                        <div className="stars">
                            <span>⭐⭐⭐⭐⭐</span>
                        </div>
                        <div className="price">
                            <span>$29.00</span>
                        </div>
                    </div>
                    <div className="description-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim amet nunc in sodales facilisis commodo. Dolor cursus cursus arcu urna integer. Quis nutrum lorem potenti una lacus. Tempus tempus, uma aenean pellentesque. Fames malesuada quam mattis ut eu sit riisus, augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim amet nunc in sodales facilisis commodo. Dolor cursus cursus arcu urna integer. Quis nutrum lorem potenti una lacus. Tempus tempus, uma aenean pellentesque. Fames malesuada quam mattis ut eu sit riisus, augue.</p>
                    </div>
                    <div className="category-container">
                        <p>Categoria</p>
                        <div className="category">
                            <div className="category-item">

                            </div>
                            <div className="category-item">

                            </div>
                            <div className="category-item">

                            </div>
                        </div>
                    </div>
                    <div className="cart-container">
                        <div className="quantity-container">
                            <button className="quantity-button" onClick={decrementQuantity}>-</button>
                            <span>{quantity}</span>
                            <button className="quantity-button" onClick={incrementQuantity}>+</button>
                        </div>
                        <button className="add-to-cart-button">AÑADIR AL CARRITO</button>
                    </div>
                </div>

                <div className="img-container">
                    <div className="circle">
                        <img src={CherryJuice} alt="Fresh Cherry Juice" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Template