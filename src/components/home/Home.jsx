import { useNavigate } from "react-router-dom";
import Header from "../header/Header"; 
import Product from "../product/Product";
import Filters from "../filters/Filters";
import { products } from "./../../mocks/products.json";
import { useFilter } from "../../hooks/useFilters";

function Home() {
    const navigate = useNavigate();
    const { filterProducts } = useFilter();

    const goToTemplate = () => {
        navigate("/template");
    };

    const filteredProducts = filterProducts(products);

    return (
        <div>
            <Header />
            <h1>Página Principal (Home)</h1>
            <p>Esta es la página de inicio.</p>
            <button onClick={goToTemplate}>Ir a Template</button>
            <div>
                <Filters />
                <Product products={filteredProducts} />
            </div>
        </div>
    );
}

export default Home;
