import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import Restaurant from "../../../../common/elements/restaurant";
import FilterContext, { RESET_FILTER } from "../filters/Filter.context";
import orderBy from "lodash/orderBy";
import {
    useDigitTranslations,
    DigitDesign,
    DigitButton
} from "@cthit/react-digit-components";
import useRestaurantFilter from "./hooks/use-restaurant-filter";
import useAdmin from "../../../../common/hooks/use-admin/use-admin";
import RestaurantAdmin from "../../../../common/elements/restaurant-admin";

const Grid = styled.div`
    @media (min-width: 768px) {
        grid-row-start: 1;
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
    grid-row-start: 1;
    grid-row-end: -1;
`;

const sort = (restaurants, sortBy) => {
    switch (sortBy) {
        case "az":
            return orderBy(restaurants, ["name"], ["asc"]);
        case "za":
            return orderBy(restaurants, ["name"], ["desc"]);
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
    const [filters, dispatch] = useContext(FilterContext);
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
                    <DigitDesign.Card>
                        <DigitDesign.CardHeader>
                            <DigitDesign.CardTitle text={text.NoRestaurants} />
                        </DigitDesign.CardHeader>
                        <DigitDesign.CardButtons reverseDirection>
                            <DigitButton
                                onClick={() => dispatch({ type: RESET_FILTER })}
                                secondary
                                raised
                                text={text.ResetFilter}
                            />
                        </DigitDesign.CardButtons>
                    </DigitDesign.Card>
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
