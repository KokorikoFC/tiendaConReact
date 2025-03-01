import { useNavigate } from "react-router-dom";
import "./Home.css";
import Header from "../header/Header";
import Product from "../product/Product";
import Filters from "../filters/Filters";
import Footer from "../footer/Footer";
import { products } from "./../../mocks/products.json";
import { useFilter } from "../../hooks/useFilters";
import { CartProvider } from "../../context/cartContext";

function Home() {
    const navigate = useNavigate();
    const { filterProducts } = useFilter();

    const goToTemplate = () => {
        navigate("/template");
    };

    const filteredProducts = filterProducts(products);

    return (
        <CartProvider>
            <div className="home">
                <Header />
                <div className="hero">
                <h1>Página Principal (Home)</h1>
                <p>Esta es la página de inicio.</p>
                <button onClick={goToTemplate}>Ir a Template</button>
                </div>
                <div className="products-section">
                    <Filters />
                    <Product products={filteredProducts} />
                </div>
                <Footer />
            </div>
        </CartProvider>
    );
}

export default Home;
