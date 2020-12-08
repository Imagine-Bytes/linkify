
import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';

import home from './reducers/home';
import signup from './reducers/signup';
import login from './reducers/login';

import { routerReducer } from 'react-router-redux';

export default combineReducers({
  auth,
  common,
  home,
  signup,
  login,
  router: routerReducer
});
