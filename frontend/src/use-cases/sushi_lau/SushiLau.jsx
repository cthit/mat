import React, { Component } from "react";
import {
    Container,
    ColumnContainer,
    Column,
    SushiLauMaterial
} from "./SushiLau.styles";

import { Text, Heading, HeadingLevel2 } from "../../common-ui/text";
import { Padding, PaddingList, Spacing } from "../../common-ui/layout";
import { List, ListItem } from "../../common-ui/list";

class SushiLauScreen extends Component {
    render() {
        return (
            <Container>
                <SushiLauMaterial minWidth="300px" maxWidth="600px">
                    <Padding>
                        <Heading>Sushi Lau</Heading>
                        <Spacing />
                        <HeadingLevel2>Vardagar 11:00 - 15:00</HeadingLevel2>
                        <Spacing />
                        <Text>
                            Inkl. misosoppa, dricka och grönt te. Vid byte av
                            pålägg på nigiri till extra lax kostar det 2 kr per
                            st
                        </Text>
                        <Spacing />

                        <PaddingList>
                            <List>
                                <ListItem>
                                    <Text>Sushi 8 bitar : 60 kr</Text>
                                </ListItem>
                                <Spacing />
                                <ListItem>
                                    <Text>Sushi 11 bitar : 72 kr</Text>
                                </ListItem>
                                <Spacing />
                                <ListItem>
                                    <Text>Yakiniku (Biff med ris) : 77 kr</Text>
                                </ListItem>
                                <Spacing />
                                <ListItem>
                                    <Text>
                                        Yakitorispett (4 st med ris) : 62 kr
                                    </Text>
                                </ListItem>
                                <Spacing />
                                <ListItem>
                                    <Text>
                                        5 st rullar (Maki och Insideout) : 60 kr
                                    </Text>
                                </ListItem>
                                <Spacing />
                            </List>
                        </PaddingList>

                        <Spacing />
                        <HeadingLevel2>Kvällsmeny och helgmeny</HeadingLevel2>
                        <Spacing />
                        <ColumnContainer>
                            <Column>
                                <Text>Antal</Text>
                                <Spacing />
                                <Text>7 bitar</Text>
                                <Spacing />
                                <Text>10 bitar</Text>
                                <Spacing />
                                <Text>12 bitar</Text>
                                <Spacing />
                                <Text>15 bitar</Text>
                                <Spacing />
                            </Column>
                            <Column>
                                <Text>Sushi</Text>
                                <Spacing />
                                <Text>68 kr</Text>
                                <Spacing />
                                <Text>81 kr</Text>
                                <Spacing />
                                <Text>91 kr</Text>
                                <Spacing />
                                <Text>115 kr</Text>
                                <Spacing />
                            </Column>
                            <Column>
                                <Text>Rullars</Text>
                                <Spacing />
                                <Text>56 kr</Text>
                                <Spacing />
                                <Text>78 kr</Text>
                                <Spacing />
                                <Text>88 kr</Text>
                                <Spacing />
                                <Text>110 kr</Text>
                                <Spacing />
                            </Column>
                        </ColumnContainer>
                        <Spacing />
                        <Text>Yakiniku (Biff med ris) : 83 kr</Text>
                        <Spacing />
                        <Text>Yakitorispett (4 st med ris) : 63 kr</Text>
                        <Spacing />
                        <Text>
                            Vid byte av pålägg på nigiri till extra lax kostar
                            det 2 kr per st
                        </Text>
                        <Spacing />
                        <Text>Senast uppdaterat 2018-05-19</Text>
                    </Padding>
                </SushiLauMaterial>
            </Container>
        );
    }
}

export default SushiLauScreen;
