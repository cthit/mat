import React, { Component } from "react";
import {
  Container,
  Text,
  Heading,
  SmallerHeading,
  MenuContainer,
  List,
  ListItem
} from "./styles";

import { Header } from "../../common/views/header";
import { Footer } from "../../common/views/footer";

class SushiMeScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <MenuContainer>
          <Heading>Sushi Me</Heading>
          <SmallerHeading>Vardagar 11:00 - 15:00</SmallerHeading>
          <List>
            <ListItem>8 bitar : 58kr (4 valfria nigiri - 4 norimaki)</ListItem>
            <ListItem>10 bitar : 65kr (5 valfria nigiri - 5 norimaki)</ListItem>
            <ListItem>12 bitar : 73kr (6 valfria nigiri - 6 norimaki)</ListItem>
            <ListItem>10 norimaki : 63kr</ListItem>
          </List>
          <SmallerHeading>Kvällar och Helger</SmallerHeading>
          <List>
            <ListItem>8 bitar : 64kr (4 valfria nigiri - 4 norimaki)</ListItem>
            <ListItem>10 bitar : 74kr (6 valfria nigiri - 4 norimaki)</ListItem>
            <ListItem>12 bitar : 84kr (7 valfria nigiri - 5 norimaki)</ListItem>
            <ListItem>14 bitar : 94kr (8 valfria nigiri - 6 norimaki)</ListItem>
            <ListItem>
              20 bitar : 134kr (10 valfria nigiri - 10 norimaki)
            </ListItem>
            <ListItem>10 norimaki : 67kr</ListItem>
          </List>
          <Text>Senast uppdaterad 2018-05-19</Text>
        </MenuContainer>
        <Footer />
      </Container>
    );
  }
}

export default SushiMeScreen;
