import React, { Component } from "react";
import { SushiMeContainer, Container } from "./SushiMe.styles";
import { Spacing, PaddingList, Padding } from "../../common-ui/layout";
import { Heading, HeadingLevel2, Text } from "../../common-ui/text";
import { List, ListItem } from "../../common-ui/list";

class SushiMeScreen extends Component {
    render() {
        return (
            <Container>
                <SushiMeContainer minWidth="300px" maxWidth="600px">
                    <Padding>
                        <Heading>Sushi Me</Heading>
                        <Spacing />
                        <HeadingLevel2>Vardagar 11:00 - 15:00</HeadingLevel2>
                        <Spacing />
                        <PaddingList>
                            <List>
                                <ListItem>
                                    <Text>
                                        8 bitar : 58kr (4 valfria nigiri - 4
                                        norimaki)
                                    </Text>
                                </ListItem>
                                <Spacing />
                                <ListItem>
                                    <Text>
                                        10 bitar : 65kr (5 valfria nigiri - 5
                                        norimaki)
                                    </Text>
                                </ListItem>
                                <Spacing />
                                <ListItem>
                                    <Text>
                                        12 bitar : 73kr (6 valfria nigiri - 6
                                        norimaki)
                                    </Text>
                                </ListItem>
                                <Spacing />
                                <ListItem>
                                    <Text>10 norimaki : 63kr</Text>
                                </ListItem>
                            </List>
                        </PaddingList>
                        <Spacing />
                        <HeadingLevel2>Kvällar och Helger</HeadingLevel2>
                        <Spacing />
                        <PaddingList>
                            <List>
                                <ListItem>
                                    <Text>
                                        8 bitar : 64kr (4 valfria nigiri - 4
                                        norimaki)
                                    </Text>
                                </ListItem>
                                <Spacing />
                                <ListItem>
                                    <Text>
                                        10 bitar : 74kr (6 valfria nigiri - 4
                                        norimaki)
                                    </Text>
                                </ListItem>
                                <Spacing />
                                <ListItem>
                                    <Text>
                                        12 bitar : 84kr (7 valfria nigiri - 5
                                        norimaki)
                                    </Text>
                                </ListItem>
                                <Spacing />
                                <ListItem>
                                    <Text>
                                        14 bitar : 94kr (8 valfria nigiri - 6
                                        norimaki)
                                    </Text>
                                </ListItem>
                                <Spacing />
                                <ListItem>
                                    <Text>
                                        20 bitar : 134kr (10 valfria nigiri - 10
                                        norimaki)
                                    </Text>
                                </ListItem>
                                <Spacing />
                                <ListItem>
                                    <Text>10 norimaki : 67kr</Text>
                                </ListItem>
                            </List>
                        </PaddingList>
                        <Spacing />
                        <Text>Senast uppdaterad 2018-05-19</Text>
                    </Padding>
                </SushiMeContainer>
            </Container>
        );
    }
}

export default SushiMeScreen;
