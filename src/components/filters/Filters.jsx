import "./Filters.css";
import { useFilter } from "../../hooks/useFilters.jsx";
import { PiBreadDuotone } from "react-icons/pi";
import { LuCakeSlice } from "react-icons/lu";
import { useState } from "react";

function Filters() {
    const { setFilter } = useFilter();
    const [activeCategory, setActiveCategory] = useState("all"); // Estado para la categoría activa

    const handleCategoryClick = (category) => {
        setFilter((prevState) => ({
            ...prevState,
            category,
        }));
        setActiveCategory(category); // Actualiza la categoría activa
    };

    return (
        <div className="filters">
            <div className="filter-buttons">
                {[
                    { name: "Todos", value: "all", icon: <PiBreadDuotone /> },
                    { name: "Pastelería", value: "pasteleria", icon: <LuCakeSlice /> },
                    { name: "Panadería", value: "panaderia", icon: <PiBreadDuotone /> },
                    { name: "Sándwiches", value: "sandwiches", icon: <PiBreadDuotone /> },
                    { name: "Bollería", value: "pastry", icon: <PiBreadDuotone /> },
                ].map((category) => (
                    <div 
                        key={category.value} 
                        className={`category-btn ${activeCategory === category.value ? "active" : ""}`}
                        onClick={() => handleCategoryClick(category.value)}
                    >
                        <div className="category-icon">{category.icon}</div>
                        <a>{category.name}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Filters;
