import React, { Component } from 'react';
import { Container, RestaurantsContainer } from './styles'
import { Header } from '../../views/header';
import { Footer } from '../../views/footer';
import { DataContext } from '../../context/DataContext';
import { RectangleLink } from '../../elements/rectangle_link'

class CategoryScreen extends Component{
    
    render() {
		return (
            <Container>
                <Header/>
                <DataContext.Consumer>
                    {categories => (
                        this._renderRestaurants(categories)
                    )}
                </DataContext.Consumer>
                <Footer/>
            </Container>
        );
    }   

    _renderRestaurants(categories){
        const restaurants = [];
        categories[this.props.category].forEach(restaurant => {
            restaurants.push(
                <RectangleLink key={restaurant.formatted_phone_number} text={restaurant.name} link="/pizzaaaaa">
                </RectangleLink>
            );
        });

        return (
            <RestaurantsContainer>
                { restaurants }
            </RestaurantsContainer>
        )
    }

}

export default CategoryScreen;