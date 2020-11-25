import React, { Component } from 'react';

import { AppStyled } from './App.styled'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Signup from './Signup/Signup';
import Home from './Home/Home';
import Header from './Header/Header';

class App extends Component {
  render() {
    return (

      <AppStyled>

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            {/* <Route path="/login" component={Login} />
      <Route path="/mylinks" component={MyLinks} /> */}

          </Switch>
        </BrowserRouter>
      </AppStyled>

    );
  }
}
export default App;
