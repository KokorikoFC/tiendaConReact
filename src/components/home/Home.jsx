import { useNavigate } from "react-router-dom";
import Header from "../header/Header"; // Importa Header
import Product from "../product/Product";
import Filters from "../filters/Filters";
import { products } from "./../../mocks/products.json";
import { useState } from "react";

function Home() {
    const navigate = useNavigate();

    const [filter, setFilter] = useState({
        category: "all",
    });
    
    const filterProducts = (products) => {
        return products.filter((product) => {
            return (
                filter.category === "all" || product.category === filter.category
            );
        });
    };
    
    const goToTemplate = () => {
        navigate("/template");
    };

    const filteredProducts = filterProducts(products);
    return (
        <div>
            <Header /> {/* Usa el componente Header aquí */}
            <h1>Página Principal (Home)</h1>
            <p>Esta es la página de inicio.</p>
            <button onClick={goToTemplate}>Ir a Template</button>
            <div className="">
                <Filters filter={filter} setFilter={setFilter} />
                <Product products={filteredProducts} />
            </div>
        </div>
    );
}

export default Home;
