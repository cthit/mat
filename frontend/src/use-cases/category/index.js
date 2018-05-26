import React, { Component } from "react";

import { Header } from "../../common/views/header";
import { Footer } from "../../common/views/footer";
import { DataContext } from "../../common/context/DataContext";

import { Container, RestaurantsContainer } from "./styles";
import { Restaurant } from "./elements/restaurant";

class CategoryScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <DataContext.Consumer>
          {categories => this._renderRestaurants(categories)}
        </DataContext.Consumer>
        <Footer />
      </Container>
    );
  }

  _renderRestaurants(categories) {
    const restaurants = [];
    categories[this.props.category].forEach(restaurant => {
      restaurants.push(
        <Restaurant key={restaurant.formatted_phone_number} data={restaurant} />
      );
    });

    return <RestaurantsContainer>{restaurants}</RestaurantsContainer>;
  }
}

export default CategoryScreen;
