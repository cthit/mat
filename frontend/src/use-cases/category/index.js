import React, { Component } from "react";

import { Restaurant } from "../../common/views/restaurant";
import { DataContext } from "../../common/context/DataContext";

import { Container } from "./styles";
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
                    <DigitLayout.UniformGrid
                        minItemWidth="300px"
                        padding="8px"
                        fillElement
                        // justifyContent="center"
                    >
                        <DataContext.Consumer>
                            {data =>
                                data.categories[this.props.category].map(
                                    restaurant => (
                                        <Restaurant
                                            key={restaurant.name}
                                            data={restaurant}
                                        />
                                    )
                                )
                            }
                        </DataContext.Consumer>
                    </DigitLayout.UniformGrid>
                </Padding>
            </Container>
        );
    }
}

export default CategoryScreen;
