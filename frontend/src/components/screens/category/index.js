import React, { Component } from 'react';
import { Container, RestaurantsContainer } from './styles'
import { Header } from '../../views/header';
import { Footer } from '../../views/footer';
import { DataContext } from '../../context/DataContext';
import { Restaurant } from '../../elements/restaurant/index'

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
                <Restaurant key={restaurant.formatted_phone_number} data={restaurant}>
                </Restaurant>
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