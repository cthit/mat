import React, { Component } from "react";

import { Restaurant } from "../../common/views/restaurant";
import { DataContext } from "../../common/context/DataContext";

import { Container } from "./Category.styles";
import {
    FlexJustifyContentCenter,
    Margin,
    Padding
} from "../../common-ui/layout";

import { DigitLayout } from "@cthit/react-digit-components";

class CategoryScreen extends Component {
    render() {
        return (
            <Container>
                <Padding>
                    <DataContext.Consumer>
                        {data => (
                            <DigitLayout.UniformGrid
                                minItemWidth="300px"
                                padding="16px"
                                justifyItems="center"
                            >
                                {data.categories[this.props.category].map(
                                    restaurant => (
                                        <Restaurant
                                            key={restaurant.name}
                                            data={restaurant}
                                        />
                                    )
                                )}
                            </DigitLayout.UniformGrid>
                        )}
                    </DataContext.Consumer>
                </Padding>
            </Container>
        );
    }
}

export default CategoryScreen;
