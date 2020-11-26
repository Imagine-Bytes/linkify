import React, { Component } from 'react';

import { AppStyled } from './App.styled'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Signup from './Signup/Signup';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard'



class App extends Component {
  render() {
    return (

      <AppStyled>
        <BrowserRouter>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            {/*<Route path="/signup" component={Signup} />
             <Route path="/login" component={Login} />
       */}

          </Switch>
        </BrowserRouter>
      </AppStyled>

    );
  }
}
export default App;
