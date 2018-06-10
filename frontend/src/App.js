import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import { DataContext } from "./common/context/DataContext";

import HomeScreen from "./use-cases/home";
import CategoryScreen from "./use-cases/category";
import SushiMeScreen from "./use-cases/sushi_me";
import SushiLauScreen from "./use-cases/sushi_lau";

import _ from "lodash";

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
      process.env.NODE_ENV === "development" ? "http://127.0.0.1:8080" : "";

    axios
      .get(endpoint + "/api/mat.json")
      .then(response => {
        const categories = _.groupBy(response.data, data => data.category);
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
      <div className="App">
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

            {Object.keys(this.state.categories).map(function(category, data) {
              const path = "/" + category;
              return (
                <Route key={path} path={path} exact>
                  <CategoryScreen key={category} category={category} />
                </Route>
              );
            })}
          </Switch>
        </DataContext.Provider>
      </div>
    );
  }
}

export default App;
