import React, { useContext } from "react";
import styled from "styled-components";
import Restaurant from "../../../../common/elements/restaurant";
import FilterContext from "../filters/Filter.context";

const Grid = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;

    grid-row-start: 1;
    grid-row-end: 3;

    justify-content: center;

    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(calc(320px - 32px), 400px));
    grid-auto-rows: min-content;
    grid-gap: 1rem;
`;

const DisplayRestaurants = ({ restaurants }) => {
    const [filters] = useContext(FilterContext);

    return (
        <Grid>
            {restaurants.map(restaurant => (
                <Restaurant
                    key={restaurant.name}
                    data={restaurant}
                    filters={filters}
                />
            ))}
        </Grid>
    );
};

DisplayRestaurants.defaultProps = {
    restaurants: []
};

export default DisplayRestaurants;
