import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeScreen from './components/screens/home/index';
import CategoryScreen from './components/screens/category/index';

class App extends Component {

  render() {
    return (
      <div className="App">
				<Switch>
					<Route path="/" exact>
						<HomeScreen/>
					</Route>

					<Route path="/pizza" exact>
            <CategoryScreen/>
          </Route>

          <Route path="/sushi" exact>
            <CategoryScreen/>
          </Route>

          <Route path="/hamburger" exact>
            <CategoryScreen/>
          </Route>

          <Route path="/thai" exact>
            <CategoryScreen/> 
          </Route>

          <Route path="/other" exact>
            <CategoryScreen/>
          </Route>
				</Switch>
			</div>
    );
  }
}

export default App;
