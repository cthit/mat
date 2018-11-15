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
class HomeScreen extends Component {
    render() {
        return (
            <HomeContainer>
                <Padding>
                    <HeadingLevel2 align="center">
                        Alla restauranger
                    </HeadingLevel2>
                    <Spacing />
                    <FlexJustifyContentCenter>
                        <DataContext.Consumer>
                            {data =>
                                data.restaurants.map(restaurant => (
                                    <Margin key={restaurant.name}>
                                        <Restaurant
                                            key={restaurant.name}
                                            data={restaurant}
                                        />
                                    </Margin>
                                ))
                            }
                        </DataContext.Consumer>
                    </FlexJustifyContentCenter>
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
