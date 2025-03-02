import "./Product.css";
import { PiBreadDuotone } from "react-icons/pi";
import { LuCakeSlice } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function Product({ products }) {
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        navigate("/template", { state: { product } }); // Pasa los datos del producto por state
    };

    const getCategoryIcon = (category) => {
        switch (category) {
            case "panaderia":
                return <PiBreadDuotone className="categoryIcon" />;
            case "pasteleria":
                return <LuCakeSlice className="categoryIcon" />;
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
                        onClick={() => handleProductClick(product)}
                    >
                        <div className="productCard">
                            <div className="productImg_cont">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="productCard_infoWrapper">
                                <div className="productCard_infoCont">
                                    <h4>{product.name}</h4>
                                    <hr />
                                    <p>{product.description}</p>
                                    <div className="price_category_cont">
                                        <p className="productPrice">
                                            {product.price} €
                                        </p>
                                        <div className="productCategory">
                                            {getCategoryIcon(product.category)}
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
