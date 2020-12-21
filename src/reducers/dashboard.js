import {
  DASHBOARD_PAGE_LOADED,
  DASHBOARD_PAGE_UNLOADED,
  UPDATE_FIELD_DASHBOARD,
  ASYNC_START,
  ASYNC_END,
  SHORTEN,
  ADD_BRANCH,
} from '../constants/actionTypes';

const initState = {
  branches: [{
    name: 'fb',
    link: 'face'
  }]
}

export default (state = initState, action) => {
  switch (action.type) {
    case DASHBOARD_PAGE_LOADED:
      return {
        ...state,
        //branches: action.payload ? [{ name: 'faceb', link: 'ooo' }] : action.payload[0].tree.branches
        //branches: [{ name: 'link', link: 'li' }]
      };
    case DASHBOARD_PAGE_UNLOADED:
      return {};
    // case SHORTEN:
    //   return {
    //     ...state,
    //     inProgress: true,
    //     errors: action.error ? action.payload.errors : null
    //   };
    case ADD_BRANCH:
      return {
        ...state,
        branches: state.branches.concat([{ name: state.branchName, link: state.branchLink }]),
        branchLink: '',
        branchName: ''
      };
    case ASYNC_START:
      if (action.subtype === SHORTEN) {
        return {
          ...state

        }

      } else if (action.subtype === ADD_BRANCH) {
        return {
          ...state,

        }
      }
      return state;
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
      //Do the add link stuff
      else {
        return state;
      }
    case UPDATE_FIELD_DASHBOARD:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }

};
