import React, { Component } from "react";
import { HomeContainer } from "./styles";
import { Restaurant } from "../../common/views/restaurant";
import { DataContext } from "../../common/context/DataContext";
import {
    FlexJustifyContentCenter,
    Padding,
    Spacing,
    Margin
} from "../../common-ui/layout";
import { HeadingLevel2 } from "../../common-ui/text";

import { DigitLayout } from "@cthit/react-digit-components";

class HomeScreen extends Component {
    render() {
        return (
            <HomeContainer>
                <Padding>
                    <DigitLayout.UniformGrid minItemWidth="300px" padding="8px">
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
            </HomeContainer>
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
