import { REGISTERED_FORM } from '../constants/actionTypes'

const registeredForm = (values) => ({
    type: REGISTERED_FORM,
    payload: values
})

export default registeredForm