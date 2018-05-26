import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import { DataContext } from "./common/context/DataContext";

import HomeScreen from "./use-cases/home";
import CategoryScreen from "./use-cases/category";
import SushiMeScreen from "./use-cases/sushi_me";
import SushiLauScreen from "./use-cases/sushi_lau";

class App extends Component {
  componentWillMount() {
    this.setState({ categories: {} });

    axios
      .get("http://127.0.0.1:8080/api/mat.json")
      .then(
        function(response) {
          var categories = {};

          for (var index in response.data) {
            var restaurantData = response.data[index];
            if (categories[restaurantData.category] == null) {
              categories[restaurantData.category] = [];
            }

            categories[restaurantData.category].push(restaurantData);
          }

          this.setState({
            categories: categories
          });
        }.bind(this)
      )
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <DataContext.Provider value={this.state.categories}>
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
