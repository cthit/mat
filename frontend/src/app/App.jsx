import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
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
    DigitLoading
} from "@cthit/react-digit-components";

import _ from "lodash";
import { Footer } from "../common/elements/footer";
import { MarginTop, Margin } from "../common-ui/layout";

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            selected: "/"
        };

        props.loadRestaurants();
    }

    onSelectedChange = selected => {
        this.props.redirectTo(selected);
        this.setState({
            selected: selected
        });
    };

    componentDidMount() {
        const path = this.props.location.pathname;
        if (path !== this.state.selected) {
            this.onSelectedChange(path);
        }
    }

    render() {
        const { selected } = this.state;
        const { categories, restaurants } = this.props;

        return (
            <div>
                <DigitHeader
                    title="Mat på Johanneberg"
                    renderToolbar={() => (
                        <DigitTabs
                            selected={selected}
                            onChange={this.onSelectedChange}
                            tabs={
                                !_.isEmpty(categories)
                                    ? [
                                          {
                                              text: "Alla",
                                              value: "/"
                                          },
                                          ...Object.keys(categories).map(
                                              category => ({
                                                  text: _getDisplayName(
                                                      category
                                                  ),
                                                  value: "/" + category
                                              })
                                          )
                                      ]
                                    : []
                            }
                        />
                    )}
                    renderMain={() => (
                        <DigitLayout.Column>
                            <DigitRedirect />
                            <MarginTop />
                            <DigitIfElseRendering
                                test={restaurants.length === 0}
                                ifRender={() => (
                                    <DigitLayout.Center>
                                        <MarginTop />
                                        <MarginTop />
                                        <DigitLoading loading size={40} />
                                    </DigitLayout.Center>
                                )}
                                elseRender={() => (
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

                                        {Object.keys(categories).map(
                                            category => {
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
                                            }
                                        )}
                                    </Switch>
                                )}
                            />
                            <Footer />
                        </DigitLayout.Column>
                    )}
                />
            </div>
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
