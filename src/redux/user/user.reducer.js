import { USER_TYPES } from './user.types'

const initialState = {
    currentUser: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_TYPES.SET_CURRENT_USER:
            return {
                currentUser: action.payload
            }
        default:
            return state
    }
}

export { userReducer }
