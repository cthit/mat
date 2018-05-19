import React, {Component} from 'react';
import { Container, MenuContainer, Heading, SmallerHeading, Text, ColumnContainer, Column } from './styles';

import { Header } from '../../views/header/index';
import { Footer } from '../../views/footer/index';

class SushiLauScreen extends Component{
    render(){
        return (
            <Container>
                <Header/>
                <MenuContainer>
                    <Heading>Sushi Lau</Heading>

                    <SmallerHeading>Vardagar 11:00 - 15:00</SmallerHeading>
                    <Text>Inkl. misosoppa, dricka och grönt te</Text>
                    <Text>Sushi 8 bitar : 60 kr</Text>
                    <Text>Sushi 11 bitar : 72 kr</Text>
                    <Text>Yakiniku (Biff med ris) : 77 kr</Text>
                    <Text>Yakitorispett (4 st med ris) : 62 kr</Text>
                    <Text>5 st rullar (Maki och Insideout) : 60 kr</Text>
                    <Text>Vid byte av pålägg på nigiri till extra lax kostar det 2 kr per st</Text>

                    <SmallerHeading>Kvällsmeny och helgmeny</SmallerHeading>
                    <ColumnContainer>
                        <Column>
                            <Text>Antal</Text>
                            <Text>7 bitar</Text>
                            <Text>10 bitar</Text>
                            <Text>12 bitar</Text>
                            <Text>15 bitar</Text>
                        </Column>
                        <Column>
                            <Text>Sushi</Text>
                            <Text>68 kr</Text>
                            <Text>81 kr</Text>
                            <Text>91 kr</Text>
                            <Text>115 kr</Text>
                        </Column>
                        <Column>
                            <Text>Rullars</Text>
                            <Text>56 kr</Text>
                            <Text>78 kr</Text>
                            <Text>88 kr</Text>
                            <Text>110 kr</Text>
                        </Column>
                    </ColumnContainer>
                    <Text>Yakiniku (Biff med ris) : 83 kr</Text>
                    <Text>Yakitorispett (4 st med ris) : 63 kr</Text>
                    <Text>Vid byte av pålägg på nigiri till extra lax kostar det 2 kr per st</Text>
                    <Text>Senast uppdaterat 2018-05-19</Text>
                </MenuContainer>
                <Footer/>
            </Container>
        );
    }
}

export default SushiLauScreen;