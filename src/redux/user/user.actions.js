import { USER } from '../../services/userService'
import { USER_TYPES } from './user.types'

export function loginUser(username, password, setError) {
    return (dispatch) => {
        USER.LOGIN(username, password).then((res) => {
            if (res.status === 'Success') {
                dispatch({
                    type: USER_TYPES.LOG_IN_USER,
                    payload: res.user.username
                })
            } else {
                setError('login', 'failed', res.message)
            }
        })
    }
}

export function logOut() {
    return (dispatch) => {
        USER.LOGOUT().then((res) => {
            if (res.status === 'Success') {
                dispatch({
                    type: USER_TYPES.LOG_OUT
                })
            } else {
                console.error(res.message)
            }
        })
    }
}

export function registerUser(username, password, setError) {
    return (dispatch) => {
        USER.REGISTER(username, password).then((res) => {
            if (res.status === 'Success') {
                USER.LOGIN(username, password).then((res) => {
                    dispatch({
                        type: USER_TYPES.LOG_IN_USER,
                        payload: res.user.username
                    })
                })
            } else {
                setError('login', 'failed', res.message)
            }
        })
    }
}
