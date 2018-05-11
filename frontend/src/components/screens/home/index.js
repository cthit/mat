import React, { Component } from 'react';
import { HomeContainer, LinksContainer } from './styles'
import { RectangleLink } from '../../elements/rectangle_link';
import { Header } from '../../views/header';
import { Footer } from '../../views/footer';

class HomeScreen extends Component{
    render() {
		return (
            <HomeContainer>
                <Header/>
                <LinksContainer>
                    <RectangleLink text="Pizza" link="/pizza" color="#808e9b" fontColor="#FEFEFE"/>
                    <RectangleLink text="Hamburgare" link="/hamburger" color="#00d8d6" fontColor="#FEFEFE"/>
                    <RectangleLink text="Thai" link="/thai" color="#05c46b" fontColor="#FEFEFE"/>
                    <RectangleLink text="Sushi" link="/sushi" color="#ff3f34" fontColor="#FEFEFE"/>
                    <RectangleLink text="Övrigt" link="/other" color="#ffd32a" fontColor="#FEFEFE"/>
                </LinksContainer>
                <Footer/>
            </HomeContainer>
        );
    }   

}

export default HomeScreen;