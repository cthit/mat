import React from "react";
import { DigitLayout } from "@cthit/react-digit-components";
import { Restaurant } from "../../views/restaurant/Restaurant.view";

const DisplayRestaurants = ({ restaurants }) => (
    <DigitLayout.Row
        justifyContent="center"
        flexWrap={"wrap"}
        margin={"0"}
        marginVertical={"0"}
    >
        {restaurants.map(restaurant => (
            <DigitLayout.Column
                key={restaurant.name}
                margin={"0"}
                marginVertical={"0"}
            >
                <DigitLayout.Spacing />
                <Restaurant key={restaurant.name} data={restaurant} />
            </DigitLayout.Column>
        ))}
    </DigitLayout.Row>
);

export default DisplayRestaurants;
