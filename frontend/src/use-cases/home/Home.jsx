import React, { Component } from "react";
import { Restaurant } from "../../common/views/restaurant";
import { Padding } from "../../common-ui/layout";

import { DigitLayout } from "@cthit/react-digit-components";

const HomeScreen = ({ restaurants }) => (
    <DigitLayout.Column>
        <Padding>
            <DigitLayout.UniformGrid
                justifyItems="center"
                minItemWidth="320px"
                padding="16px"
            >
                {restaurants.map(restaurant => (
                    <Restaurant key={restaurant.name} data={restaurant} />
                ))}
            </DigitLayout.UniformGrid>
        </Padding>
    </DigitLayout.Column>
);

function _getDisplayName(categoryName) {
    switch (categoryName) {
        case "pizza":
            return "Pizza";
        case "thai":
            return "Thai";
        case "other":
            return "Övrigt";
        case "hamburger":
            return "Hamburgare";
        case "sushi":
            return "Sushi";
        case "baguettes":
            return "Baguetter";
        case "lunch":
            return "Lunch";
        default:
            return categoryName;
    }
}

export default HomeScreen;
