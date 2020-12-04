
import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import dashboard from './reducers/dashboard'
import home from './reducers/home';

import { routerReducer } from 'react-router-redux';

export default combineReducers({
  auth,
  common,
  dashboard,
  home,
  router: routerReducer
});
