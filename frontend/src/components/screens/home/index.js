import React, { Component } from 'react';
import { HomeContainer, LinksContainer } from './styles'
import { RectangleLink } from '../../elements/rectangle_link';
import { Header } from '../../views/header';
import { Footer } from '../../views/footer';
import { DataContext } from '../../context/DataContext';

class HomeScreen extends Component{
    render() {
		return (
            <HomeContainer>
                <Header/>
                    <DataContext.Consumer>
                        {data => (
                            this._renderCategoryLinks(data)
                        )}
                    </DataContext.Consumer>
                <Footer/>
            </HomeContainer>
        );
    }   

    _renderCategoryLinks(data){
        var links = [];
        for(var categoryName in data){
            links.push(
                <RectangleLink key={categoryName} text={this._getDisplayName(categoryName)} link={"/" + categoryName}/>
            )
        }
        return (
            <LinksContainer>
                {links}
            </LinksContainer>
        )
    }

    _getDisplayName(categoyrName){
        switch(categoyrName){
            case 'pizza':
                return 'Pizza';
            case 'thai':
                return 'Thai';
            case 'other':
                return 'Övrigt';
            case 'hamburger':
                return 'Hamburgare';
            case 'sushi':
                return 'Sushi';
            default:
                return categoryName;
        }
    }

}

export default HomeScreen;