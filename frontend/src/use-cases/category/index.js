import React, { Component } from "react";

import { Header } from "../../common/elements/header";
import { Footer } from "../../common/elements/footer";
import { Restaurant } from "../../common/views/restaurant";
import { DataContext } from "../../common/context/DataContext";

import { Container, RestaurantsContainer } from "./styles";
import {
  FlexJustifyContentCenter,
  Margin,
  Spacing,
  Padding
} from "../../common-ui/layout";

class CategoryScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Padding>
          <FlexJustifyContentCenter>
            <DataContext.Consumer>
              {data =>
                data.categories[this.props.category].map(restaurant => (
                  <Margin key={restaurant.name}>
                    <Restaurant key={restaurant.name} data={restaurant} />
                  </Margin>
                ))
              }
            </DataContext.Consumer>
          </FlexJustifyContentCenter>
        </Padding>
        <Spacing />
        <Footer />
        <Spacing />
      </Container>
    );
  }
}

export default CategoryScreen;
