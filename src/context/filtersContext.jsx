import { createContext, useState } from "react";

// Crear contexto
export const FiltersContext = createContext();

// Crear Provider
export const FiltersProvider = ({ children }) => {
    const [filter, setFilter] = useState({ category: "all" }); // 👈 Ahora es un objeto

    return (
        <FiltersContext.Provider value={{ filter, setFilter }}>
            {children}
        </FiltersContext.Provider>
    );
};
