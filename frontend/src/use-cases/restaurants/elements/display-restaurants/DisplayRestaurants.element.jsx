import React from "react";
import styled from "styled-components";
import Restaurant from "./elements/restaurant";

const Grid = styled.div`
    grid-row-start: 1;
    grid-row-end: 3;

    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(calc(320px - 32px), 400px));
    grid-auto-rows: min-content;
    grid-gap: 1rem;
`;

const DisplayRestaurants = ({ restaurants, filters }) => (
    <Grid>
        {restaurants.map(restaurant => (
            <Restaurant key={restaurant.name} data={restaurant} />
        ))}
    </Grid>
);

DisplayRestaurants.defaultProps = {
    restaurants: []
};

export default DisplayRestaurants;
