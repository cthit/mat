import React, { createContext, useCallback, useState } from "react";
const FilterMobileOpenContext = createContext(null);

const FilterMobileOpenContextSingletonProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    const toggle = useCallback(() => setOpen(!open), [open, setOpen]);

    return (
        <FilterMobileOpenContext.Provider value={[open, setOpen]}>
            {children}
        </FilterMobileOpenContext.Provider>
    );
};

export { FilterMobileOpenContextSingletonProvider };
export default FilterMobileOpenContext;
