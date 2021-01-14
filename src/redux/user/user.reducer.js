import { USER_TYPES } from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_TYPES.LOGIN_USER_START:
        case USER_TYPES.SIGNUP_USER_START:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case USER_TYPES.LOGIN_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case USER_TYPES.LOGIN_USER_FAILURE:
            return {
                ...state,
                currentUser: null,
                error: action.payload
            }
        case USER_TYPES.SIGNOUT_USER_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case USER_TYPES.SIGNUP_USER_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}

export { userReducer }
