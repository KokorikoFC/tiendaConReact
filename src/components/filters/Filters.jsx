import './Filters.css';

function Filters({ setFilter }) {
    const handleChangeCategory = (event) => {
        setFilter(prevState => ({
            ...prevState,
            category: event.target.value
        }));
    };

    return (
        <div>
            <label htmlFor="category">Categoría</label>
            <select id="category" onChange={handleChangeCategory}>
                <option value="all">Todos</option>
                <option value="pasteleria">Pastelería</option>
                <option value="panaderia">Panadería</option>
            </select>
        </div>
    );
}

export default Filters;
