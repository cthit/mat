import React, { Component } from "react";
import { Restaurant } from "../../common/views/restaurant/Restaurant.view";
import { DataContext } from "../../common/context/DataContext";
import { Padding } from "../../common-ui/layout";

import { DigitLayout } from "@cthit/react-digit-components";
import DisplayRestaurants from "../../common/elements/display-restaurants";

class HomeScreen extends Component {
    render() {
        return (
            <DataContext.Consumer>
                {data => <DisplayRestaurants restaurants={data.restaurants} />}
            </DataContext.Consumer>
        );
    }
}

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
