import { LOGGED_FORM } from '../constants/actionTypes'

export default (state={}, action) => {
    switch(action.type) {
        case LOGGED_FORM:
            return action.payload
        default:
            return state
    }
}