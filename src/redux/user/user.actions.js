import { USER_TYPES } from './user.types'

export const setCurrentUser = (user) => {
    return {
        type: USER_TYPES.SET_CURRENT_USER,
        payload: user
    }
}

export const logOut = () => {
    // TODO implement
    alert('logout')
}

export const registerUser = (user) => {
    // TODO implement
    alert('register user')
}