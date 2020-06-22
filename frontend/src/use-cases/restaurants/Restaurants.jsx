import React, { useEffect, useState } from "react";
import { getRestaurants } from "../../api/restaurants/get.restaurants.api";
import styled from "styled-components";
import DisplayRestaurants from "./elements/display-restaurants";
import Filters from "./elements/filters";
import { FilterContextProvider } from "./elements/filters/Filter.context";
import RestaurantsContext from "./Restaurants.context";
import { getCategories } from "../../api/categories/get.categories.api";

const Container = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: auto 300px;
    grid-template-rows: auto;
    grid-gap: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: auto;
        grid-template-rows: auto auto;
    }
`;

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState(null);
    const [categories, setCategories] = useState(null);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        Promise.all([getRestaurants(), getCategories()]).then(results => {
            setRestaurants(results[0].data);
            setCategories(results[1].data);
        });
    }, []);

    if (restaurants == null || categories == null) {
        return null;
    }

    return (
        <RestaurantsContext.Provider value={{ restaurants, categories }}>
            <FilterContextProvider>
                <Container>
                    <DisplayRestaurants restaurants={restaurants} />
                    <Filters filters={filters} onChange={setFilters} />
                </Container>
            </FilterContextProvider>
        </RestaurantsContext.Provider>
    );
};

export default Restaurants;
