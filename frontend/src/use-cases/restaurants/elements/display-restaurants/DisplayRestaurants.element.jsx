import React from "react";
import styled from "styled-components";
import Restaurant from "./elements/restaurant";

const Grid = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
