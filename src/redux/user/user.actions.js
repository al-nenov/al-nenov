import { USER_TYPES } from './user.types'

export const checkAuthSession = () => ({
    type: USER_TYPES.CHECK_USER_SESSION
})

export const loginUser = (emailAndPassword) => ({
    type: USER_TYPES.LOGIN_USER_START,
    payload: emailAndPassword
})

export const loginSuccess = (user) => ({
    type: USER_TYPES.LOGIN_USER_SUCCESS,
    payload: user
})

export const loginFailure = (error) => ({
    type: USER_TYPES.LOGIN_USER_FAILURE,
    payload: error
})

export const logOut = () => ({
    type: USER_TYPES.SIGNOUT_USER_START
})

export const logoutSuccess = () => ({
    type: USER_TYPES.SIGNOUT_USER_SUCCESS
})

export const logoutFail = (error) => ({
    type: USER_TYPES.SIGNOUT_USER_FAILURE,
    payload: error
})

export const registerUser = (userData) => ({
    type: USER_TYPES.SIGNUP_USER_START,
    payload: userData
})
