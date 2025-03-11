import "./Product.css";
import { PiBreadDuotone } from "react-icons/pi";
import { LuCakeSlice } from "react-icons/lu";
import { LuSandwich } from "react-icons/lu";
import { LuCroissant } from "react-icons/lu";
import { FaShoppingBasket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart.jsx";


function Product({ products }) {
    const navigate = useNavigate();
        const { addToCart } = useCart();
    

    const handleProductClick = (product) => {
        navigate("/template", { state: { product } }); // Pasa los datos del producto por state
    };

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
        <div className="product-container">
            <ul>
                {products.map((product) => (
                    <li
                        key={product.id}
                        
                    >
                        <div className="productCard">
                            <div className="productImg_cont">
                                <img src={product.image} alt={product.name} onClick={() => handleProductClick(product)}/>
                            </div>
                            <div className="productCard_infoWrapper">
                                <div className="productCard_infoCont">
                                    <h4>{product.name}</h4>
                                    <hr />
                                    <p className="productDescription">{product.description}</p>
                                    <div className="price_category_cont">
                                        
                                        <div className="productCategory">
                                            {getCategoryIcon(product.category)}
                                        </div>
                                        <div className="price_addToCart_cont">
                                        <FaShoppingBasket onClick={() => addToCart(product)} className="price_cart"/>

                                        <p className="productPrice">
                                            {product.price} €
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Product;