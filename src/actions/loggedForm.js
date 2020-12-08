import { LOGGED_FORM } from '../constants/actionTypes'

const loggedForm = (values) => ({
    type: LOGGED_FORM,
    payload: values
})

export default loggedForm