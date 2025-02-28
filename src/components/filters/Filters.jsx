import { useId } from "react";
import "./Filters.css";
import { useFilter } from "../../hooks/useFilters.jsx";

function Filters() {
    const { setFilter } = useFilter();
    const categoryFieldId = useId();

    const handleChangeCategory = (event) => {
        setFilter((prevState) => ({
            ...prevState,
            category: event.target.value,
        }));
    };

    return (
        <div>
            <label htmlFor={categoryFieldId}>Categoría</label>
            <select id={categoryFieldId} onChange={handleChangeCategory}>
                <option value="all">Todos</option>
                <option value="pasteleria">Pastelería</option>
                <option value="panaderia">Panadería</option>
            </select>
        </div>
    );
}

export default Filters;
