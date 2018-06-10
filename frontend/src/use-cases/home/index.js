import React, { Component } from "react";
import { HomeContainer } from "./styles";

import { RectangleLink } from "./elements/RectangleLink";

import { Restaurant } from "../../common/views/restaurant";

import { Header } from "../../common/elements/header";
import { Footer } from "../../common/elements/footer";
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
        <Header />
        <Padding>
          <HeadingLevel2>Alla kategorier</HeadingLevel2>
          <Spacing />
          <FlexJustifyContentCenter>
            <DataContext.Consumer>
              {data =>
                Object.keys(data.categories).map(categoryName => (
                  <Margin key={categoryName}>
                    <RectangleLink
                      key={categoryName}
                      text={_getDisplayName(categoryName, data)}
                      link={"/" + categoryName}
                    />
                  </Margin>
                ))
              }
            </DataContext.Consumer>
          </FlexJustifyContentCenter>
          <Spacing />
          <HeadingLevel2>Alla restauranger</HeadingLevel2>
          <Spacing />
          <FlexJustifyContentCenter>
            <DataContext.Consumer>
              {data =>
                data.restaurants.map(restaurant => (
                  <Margin key={restaurant.name}>
                    <Restaurant key={restaurant.name} data={restaurant} />
                  </Margin>
                ))
              }
            </DataContext.Consumer>
          </FlexJustifyContentCenter>
        </Padding>
        <Footer />
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
    default:
      return categoryName;
  }
}

export default HomeScreen;
