import React, { createContext, useEffect, useReducer } from "react";
import xor from "lodash/xor";

const UPDATE_CAMPUS = "update-campus";
const UPDATE_SORT_BY = "update-sort-by";
const UPDATE_CATEGORY = "update-category";
const UPDATE_NAME = "update-name";
const RESET_FILTER = "reset-filter";

const FilterContext = createContext([{}, () => {}]);

const filterReducer = (state, action) => {
    switch (action.type) {
        case RESET_FILTER:
            return { ...defaultValue };
        case UPDATE_CAMPUS:
            return {
                ...state,
                campus: action.value
            };
        case UPDATE_CATEGORY:
            return {
                ...state,
                categories: xor(state.categories, [action.category])
            };
        case UPDATE_SORT_BY:
            return {
                ...state,
                sortBy: action.sortBy
            };
        case UPDATE_NAME:
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }
};

const defaultValue = {
    campus: "johanneberg",
    categories: [],
    openNow: false,
    sortBy: "highestRating",
    name: "",
    reviewed: false
};

const testLoadSettings = () => {
    const savedFilter = localStorage.getItem("filters");
    return savedFilter == null ? defaultValue : JSON.parse(savedFilter);
};

const FilterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, testLoadSettings());

    useEffect(() => {
        localStorage.setItem("filters", JSON.stringify(state));
    }, [state]);

    return (
        <FilterContext.Provider value={[state, dispatch]}>
            {children}
        </FilterContext.Provider>
    );
};

export {
    UPDATE_CAMPUS,
    UPDATE_SORT_BY,
    UPDATE_CATEGORY,
    UPDATE_NAME,
    RESET_FILTER,
    FilterContextProvider
};
export default FilterContext;
