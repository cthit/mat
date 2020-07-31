import React, { createContext, useState } from "react";
const FilterMobileOpenContext = createContext(null);

const FilterMobileOpenContextSingletonProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <FilterMobileOpenContext.Provider value={[open, setOpen]}>
            {children}
        </FilterMobileOpenContext.Provider>
    );
};

export { FilterMobileOpenContextSingletonProvider };
export default FilterMobileOpenContext;
