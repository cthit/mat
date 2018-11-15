import React, { Component } from "react";
import { Restaurant } from "../../common/views/restaurant";
import { DataContext } from "../../common/context/DataContext";
import { Padding } from "../../common-ui/layout";

import { DigitLayout } from "@cthit/react-digit-components";

class HomeScreen extends Component {
    render() {
        return (
            <DigitLayout.Column>
                <Padding>
                    <DigitLayout.UniformGrid
                        justifyContent="center"
                        minItemWidth="300px"
                        padding="8px"
                    >
                        <DataContext.Consumer>
                            {data =>
                                data.restaurants.map(restaurant => (
                                    <Restaurant
                                        key={restaurant.name}
                                        data={restaurant}
                                    />
                                ))
                            }
                        </DataContext.Consumer>
                    </DigitLayout.UniformGrid>
                </Padding>
            </DigitLayout.Column>
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
