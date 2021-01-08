import { USER_TYPES } from './user.types'

const initialState = {
    loggedIn: !!localStorage.user,
    user: localStorage.user ? JSON.parse(localStorage.user) : {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_TYPES.LOG_IN_USER:
            return {
                loggedIn: true,
                user: action.payload
            }
        case USER_TYPES.LOG_OUT:
            return {
                loggedIn: false,
                user: {}
            }
        default:
            return state
    }
}

export { userReducer }
