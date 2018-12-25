import React, { Component } from "react";

import { Restaurant } from "../../common/views/restaurant/Restaurant.view";
import { DataContext } from "../../common/context/DataContext";

import { Container } from "./Category.styles";
import { Padding } from "../../common-ui/layout";

import { DigitLayout } from "@cthit/react-digit-components";
import DisplayRestaurants from "../../common/elements/display-restaurants";

class CategoryScreen extends Component {
    render() {
        return (
            <DataContext.Consumer>
                {data => (
                    <DisplayRestaurants
                        restaurants={data.categories[this.props.category]}
                    />
                )}
            </DataContext.Consumer>
        );
    }
}

export default CategoryScreen;
