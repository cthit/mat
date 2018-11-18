import React, { Component } from "react";
import { Restaurant } from "../../common/views/restaurant";
import { Container } from "./Category.styles";
import { Padding } from "../../common-ui/layout";
import { DigitLayout } from "@cthit/react-digit-components";

const CategoryScreen = ({ restaurants }) => (
    <Container>
        <Padding>
            <DigitLayout.UniformGrid
                minItemWidth="300px"
                padding="16px"
                justifyItems="center"
            >
                {restaurants.map(restaurant => (
                    <Restaurant key={restaurant.name} data={restaurant} />
                ))}
            </DigitLayout.UniformGrid>
        </Padding>
    </Container>
);

export default CategoryScreen;
