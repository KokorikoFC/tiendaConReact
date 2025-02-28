import { useContext } from "react";
import { FiltersContext } from "../context/filtersContext";

// Custom Hook
export function useFilter() {
    const { filter, setFilter } = useContext(FiltersContext);

    const filterProducts = (products) => {
        return products.filter((product) => {
            return (
                filter.category === "all" ||
                product.category === filter.category
            );
        });
    };

    return { filterProducts, setFilter };
}
