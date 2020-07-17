import React, { useEffect, useState } from "react";
import { getRestaurants } from "../../api/restaurants/get.restaurants.api";
import styled from "styled-components";
import DisplayRestaurants from "./elements/display-restaurants";
import Filters from "./elements/filters";
import { FilterContextProvider } from "./elements/filters/Filter.context";
import RestaurantsContext from "./Restaurants.context";
import { getCategories } from "../../api/categories/get.categories.api";
import EatIT from "./elements/eatit";

const Container = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: min-content 1fr;
    grid-gap: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: auto;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState(null);
    const [categories, setCategories] = useState(null);

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
                    <EatIT />
                    <Filters />
                    <DisplayRestaurants restaurants={restaurants} />
                </Container>
            </FilterContextProvider>
        </RestaurantsContext.Provider>
    );
};

export default Restaurants;
