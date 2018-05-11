import React, { Component } from 'react';
import { Container } from './styles'
import { Header } from '../../views/header';
import { Footer } from '../../views/footer';

class CategoryScreen extends Component{
    
    render() {
		return (
            <Container>
                <Header/>
                <h1>Category</h1>
                <Footer/>
            </Container>
        );
    }   

}

export default CategoryScreen;