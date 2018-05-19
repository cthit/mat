import React, {Component} from 'react';
import { Container, Text, Heading, SmallerHeading, MenuContainer } from './styles';

import { Header } from '../../views/header';
import { Footer } from '../../views/footer';

class SushiMeScreen extends Component{

    render(){
        return (
            <Container>
                <Header/>
                <MenuContainer>
                    <Heading>Sushi Me</Heading>
                    <div>
                        <SmallerHeading>Vardagar 11:00 - 15:00</SmallerHeading>
                        <Text>8 bitar : 58kr (4 valfria nigiri - 4 norimaki)</Text>
                        <Text>10 bitar : 65kr (5 valfria nigiri - 5 norimaki)</Text>
                        <Text>12 bitar : 73kr (6 valfria nigiri - 6 norimaki)</Text>
                        <Text>10 norimaki : 63kr</Text>
                    </div>
                    <div>
                        <SmallerHeading>Kvällar och Helger</SmallerHeading>
                        <Text>8 bitar : 64kr (4 valfria nigiri - 4 norimaki)</Text>
                        <Text>10 bitar : 74kr (6 valfria nigiri - 4 norimaki)</Text>
                        <Text>12 bitar : 84kr (7 valfria nigiri - 5 norimaki)</Text>
                        <Text>14 bitar : 94kr (8 valfria nigiri - 6 norimaki)</Text>
                        <Text>20 bitar : 134kr (10 valfria nigiri - 10 norimaki)</Text>
                        <Text>10 norimaki : 67kr</Text>
                    </div>
                    <Text>Senast uppdaterad 2018-05-19</Text>
                </MenuContainer>
                <Footer/>
            </Container>
        )
    }

}

export default SushiMeScreen;