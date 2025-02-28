import "./Product.css";
import { useCart } from "../../hooks/useCart.jsx";
import { PiBreadDuotone } from "react-icons/pi";
import { LuCakeSlice } from "react-icons/lu";


function Product({ products }) {
    const { addToCart, cart } = useCart();

    const getCategoryIcon = (category) => {
        switch (category) {
            case "panaderia":
                return <PiBreadDuotone className="categoryIcon"/>;
            case "pasteleria":
                return <LuCakeSlice className="categoryIcon"/>;
            default:
                return <PiBreadDuotone className="categoryIcon"/>; 
        }
    };

    return (
        <div className="product-container">
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <div className="productCard">
                            <img src={product.image} alt={product.name} />
                            <div className="productCard_infoWrapper">
                                <div className="productCard_infoCont">
                                    <h4>{product.name}</h4>
                                    <hr />
                                    <p>{product.description}</p>
                                    <div className="price_category_cont">
                                        <p className="productPrice">{product.price} €</p>
                                         <div className="productCategory">
                                            {getCategoryIcon(product.category)}
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => addToCart(product)}
                                        >
                                            Añadir al carrito
                                        </button>
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
