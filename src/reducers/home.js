import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  UPDATE_FIELD_HOME,
  ASYNC_START,
  ASYNC_END,
  SHORTEN
} from '../constants/actionTypes';


export default (state = {}, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        inProgress: false
        // ,errors: action.error ? action.payload.errors : null
      };
    case HOME_PAGE_UNLOADED:
      return {};
    case SHORTEN:
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      };
    case ASYNC_START:
      if (action.subtype === SHORTEN) {
        return { ...state, inProgress: true };
      }
      else {
        return null;
      }
      break;
    case ASYNC_END:
      if (action.subtype === SHORTEN) {
        return {
          ...state, shortens: {
            oldLink: 'l',
            newLink: action.promise.link.link

          }
        };
      }
      else {
        return null;
      }

    case UPDATE_FIELD_HOME:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }

};
