import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import Restaurant from "../../../common/components/restaurant";
import FilterCompContext from "../filters/Filter.comp.context";
import orderBy from "lodash/orderBy";
import { useDigitTranslations, DigitText } from "@cthit/react-digit-components";
import useRestaurantFilter from "./use-restaurant-filter/use-restaurant-filter";
import useAdmin from "../../../common/hooks/use-admin/use-admin";
import RestaurantAdmin from "../../../common/components/restaurant-admin";

const Grid = styled.div`
    @media (min-width: 768px) {
        grid-row-start: 2;
        grid-row-end: -1;

        grid-column-start: 2;
        grid-column-end: 3;
    }

    justify-content: center;

    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(calc(320px - 32px), 400px));
    grid-auto-rows: min-content;
    grid-gap: 1rem;
`;

const NoRestaurantsFilter = styled.div`
    grid-row-start: 2;
    grid-row-end: -1;
`;

const sort = (restaurants, sortBy) => {
    switch (sortBy) {
        case "az":
            return orderBy(
                restaurants.map(r => ({ lname: r.name.toLowerCase(), ...r })),
                ["lname"],
                ["asc"]
            );
        case "za":
            return orderBy(
                restaurants.map(r => ({ lname: r.name.toLowerCase(), ...r })),
                ["lname"],
                ["desc"]
            );
        case "highestRating":
            return orderBy(
                restaurants,
                //To prevent scenarios where rating is null to be above ratings
                [restaurant => restaurant.rating || 0],
                ["desc"]
            );
        case "lowestRating":
            return orderBy(restaurants, ["rating"], ["asc"]);
        default:
            return restaurants;
    }
};

const DisplayRestaurants = ({ restaurants }) => {
    const [text] = useDigitTranslations();
    const [filters] = useContext(FilterCompContext);
    const acceptedByFilter = useRestaurantFilter(filters);
    const isAdmin = useAdmin();

    const sortedRestaurants = useMemo(() => {
        const filteredRestaurants = restaurants.filter(acceptedByFilter);
        return sort(filteredRestaurants, filters.sortBy);
    }, [restaurants, filters, acceptedByFilter]);

    const sortedRestaurantsElements = useMemo(
        () =>
            sortedRestaurants.map(restaurant =>
                isAdmin ? (
                    <RestaurantAdmin key={restaurant.id} data={restaurant} />
                ) : (
                    <Restaurant key={restaurant.id} data={restaurant} />
                )
            ),
        [sortedRestaurants, isAdmin]
    );

    return (
        <Grid>
            {sortedRestaurants.length === 0 && (
                <NoRestaurantsFilter>
                    <DigitText.Text bold text={text.NoRestaurants} />
                </NoRestaurantsFilter>
            )}
            {sortedRestaurantsElements}
        </Grid>
    );
};

DisplayRestaurants.defaultProps = {
    restaurants: []
};

export default DisplayRestaurants;
