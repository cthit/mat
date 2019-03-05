import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import HomeScreen from "../use-cases/home";
import CategoryScreen from "../use-cases/category";
import SushiMeScreen from "../use-cases/sushi_me";
import SushiLauScreen from "../use-cases/sushi_lau";

import {
    DigitHeader,
    DigitLayout,
    DigitTabs,
    DigitRedirect,
    DigitIfElseRendering,
    DigitLoading,
    DigitText
} from "@cthit/react-digit-components";

import _ from "lodash";
import { MarginTop } from "../common-ui/layout";
import { FooterContainer, SpacingBetweenToolbarAndMain } from "./App.styles";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: {},
            restaurants: []
        };
        
        props.loadRestaurants();
    }


    onSelectedChange = selected => {
        this.props.redirectTo(selected);
    };

    render() {
        return (
            <DigitHeader
                title="Mat"
                renderHeader={() => (
                    <DigitText.Text white text={"Data från Google"} />
                )}
                renderToolbar={() => (
                    <DigitIfElseRendering
                        test={this.state.restaurants.length > 0}
                        ifRender={() => (
                            <DigitTabs
                                selected={this.props.location.pathname}
                                onChange={this.onSelectedChange}
                                tabs={[
                                    {
                                        text: "Alla",
                                        value: "/"
                                    },
                                    ...Object.keys(this.state.categories).map(
                                        category => ({
                                            text: _getDisplayName(category),
                                            value: "/" + category
                                        })
                                    )
                                ]}
                            />
                        )}
                    />
                )}
                renderMain={() => (
                    <>
                        <SpacingBetweenToolbarAndMain />
                        <DigitLayout.Column>
                            <DigitIfElseRendering
                                test={this.state.restaurants.length === 0}
                                ifRender={() => (
                                    <DigitLayout.Center>
                                        <MarginTop />
                                        <MarginTop />
                                        <DigitLoading loading size={40} />
                                    </DigitLayout.Center>
                                )}
                                elseRender={() => (
                                    <>
                                        <DigitRedirect />
                                        <Switch>
                                            <Route
                                                component={HomeScreen}
                                                path="/"
                                                exact
                                            />
                                            <Route
                                                component={SushiMeScreen}
                                                path="/menu/sushime"
                                                exact
                                            />

                                            <Route
                                                component={SushiLauScreen}
                                                path="/menu/sushilau"
                                                exact
                                            />

                                            {Object.keys(
                                                this.state.categories
                                            ).map(category => {
                                                const path = "/" + category;
                                                return (
                                                    <Route
                                                        key={path}
                                                        path={path}
                                                        exact
                                                        render={() => (
                                                            <CategoryScreen
                                                                category={
                                                                    category
                                                                }
                                                            />
                                                        )}
                                                    />
                                                );
                                            })}
                                        </Switch>
                                    </>
                                )}
                            />
                            <FooterContainer>
                                <DigitText.Text text="Made by digIT with ❤" />
                            </FooterContainer>
                        </DigitLayout.Column>
                    </>
                )}
            />
        );
    }
}

const nameToDisplayNameMap = {
    pizza: "Pizza",
    thai: "Thai",
    other: "Övrigt",
    hamburger: "Hamburgare",
    sushi: "Sushi",
    baguettes: "Baguetter",
    lunch: "Lunch"
};

function _getDisplayName(categoryName) {
    return nameToDisplayNameMap[categoryName];
}

export default App;
