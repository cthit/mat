import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import { DataContext } from "./common/context/DataContext";

import HomeScreen from "./use-cases/home";
import CategoryScreen from "./use-cases/category";
import SushiMeScreen from "./use-cases/sushi_me";
import SushiLauScreen from "./use-cases/sushi_lau";

import {
    DigitProviders,
    DigitHeader,
    DigitLayout,
    DigitTabs
} from "@cthit/react-digit-components";

import _ from "lodash";
import { Footer } from "./common/elements/footer";

class App extends Component {
    constructor() {
        super();
        this.state = {
            categories: {},
            restaurants: []
        };
    }

    componentWillMount() {
        const endpoint =
            process.env.NODE_ENV === "development"
                ? "http://127.0.0.1:8080"
                : "";

        axios
            .get(endpoint + "/api/mat.json")
            .then(response => {
                const categories = _.groupBy(
                    response.data,
                    data => data.category
                );
                const restaurants = response.data;
                this.setState({
                    categories: categories,
                    restaurants: restaurants
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    render() {
        return (
            <DigitProviders>
                <DigitHeader
                    title="Mat på Johanneberg"
                    renderMain={() => (
                        <DigitLayout.Column>
                            <DigitTabs
                                selected={this.state.selectedTab}
                                onChange={selected => {
                                    this.setState({
                                        selected: selected
                                    });
                                }}
                                labels={[
                                    "Alla restauranger",
                                    ...Object.keys(this.state.categories).map(
                                        category => _getDisplayName(category)
                                    )
                                ]}
                            />
                            <DataContext.Provider value={this.state}>
                                <Switch>
                                    <Route path="/" exact>
                                        <HomeScreen />
                                    </Route>

                                    <Route path="/menu/sushime" exact>
                                        <SushiMeScreen />
                                    </Route>

                                    <Route path="/menu/sushilau" exact>
                                        <SushiLauScreen />
                                    </Route>

                                    {Object.keys(this.state.categories).map(
                                        function(category, data) {
                                            const path = "/" + category;
                                            return (
                                                <Route
                                                    key={path}
                                                    path={path}
                                                    exact
                                                >
                                                    <CategoryScreen
                                                        key={category}
                                                        category={category}
                                                    />
                                                </Route>
                                            );
                                        }
                                    )}
                                </Switch>
                            </DataContext.Provider>
                            <Footer />
                        </DigitLayout.Column>
                    )}
                />
            </DigitProviders>
        );
    }
}

function _getDisplayName(categoryName) {
    switch (categoryName) {
        case "pizza":
            return "Pizza";
        case "thai":
            return "Thai";
        case "other":
            return "Övrigt";
        case "hamburger":
            return "Hamburgare";
        case "sushi":
            return "Sushi";
        case "baguettes":
            return "Baguetter";
        case "lunch":
            return "Lunch";
        default:
            return categoryName;
    }
}

export default App;
