import React from "react";
import DisplayRestaurants from "../../common/elements/display-restaurants";

const HomeScreen = ({ restaurants }) => (
    <DisplayRestaurants restaurants={restaurants} />
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
