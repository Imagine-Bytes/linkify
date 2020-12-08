import { REGISTERED_FORM } from '../constants/actionTypes'

export default (state={}, action) => {
    switch(action.type) {
        case REGISTERED_FORM:
            return action.payload
        default:
            return state
    }
}