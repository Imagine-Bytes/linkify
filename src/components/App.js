import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import Signup from './Signup';
//import Home from './Home';
import Header from './Header/Header';

class App extends Component {
  render() {
    return (

      <div className="App">

        <BrowserRouter>
          <Switch>
            {/*<Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
             <Route path="/login" component={Login} />
      <Route path="/mylinks" component={MyLinks} /> */}

          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}
export default App;
