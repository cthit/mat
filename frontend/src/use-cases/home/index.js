import React, { Component } from "react";
import { HomeContainer, LinksContainer } from "./styles";
import { Links } from "./elements/Links.jsx";

import { Header } from "../../common/views/header";
import { Footer } from "../../common/views/footer";
import { DataContext } from "../../common/context/DataContext";

class HomeScreen extends Component {
  render() {
    return (
      <HomeContainer>
        <Header />
        <DataContext.Consumer>
          {data => <Links categories={data} />}
        </DataContext.Consumer>
        <Footer />
      </HomeContainer>
    );
  }
}
export default HomeScreen;
