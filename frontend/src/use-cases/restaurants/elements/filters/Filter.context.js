import React, { createContext, useEffect, useReducer } from "react";
import xor from "lodash/xor";

const UPDATE_OPEN_NOW = "update-open-now";
const UPDATE_CAMPUS = "update-campus";
const UPDATE_SORT_BY = "update-sort-by";
const UPDATE_CATEGORY = "update-category";
const UPDATE_NAME = "update-name";
const UPDATE_REVIEWED = "update-reviewed";

const FilterContext = createContext([{}, () => {}]);

const filterReducer = (state, action) => {
    switch (action.type) {
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
        case UPDATE_OPEN_NOW:
            return {
                ...state,
                openNow: action.openNow
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
        case UPDATE_REVIEWED:
            return {
                ...state,
                reviewed: action.reviewed
            };
        default:
            return state;
    }
};

const savedFilter = localStorage.getItem("filters");

const defaultValue =
    savedFilter == null
        ? {
              campus: "johanneberg",
              categories: [],
              openNow: false,
              sortBy: "highestRating",
              name: "",
              reviewed: false
          }
        : JSON.parse(savedFilter);

const FilterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, defaultValue);

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
    UPDATE_OPEN_NOW,
    UPDATE_CAMPUS,
    UPDATE_SORT_BY,
    UPDATE_CATEGORY,
    UPDATE_NAME,
    UPDATE_REVIEWED,
    FilterContextProvider
};
export default FilterContext;
