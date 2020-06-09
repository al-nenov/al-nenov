import {user} from '../services/userService';

const initialState =  {
    loggedIn: !!localStorage.user,
    user: localStorage.user ? JSON.parse(localStorage.user) : {}
};

function loginUser(username, password, setError) {
    return (dispatch) => {
        user.LOGIN(username, password)
            .then(
                (res) => {
                    if (res.status === 'Success') {
                        dispatch({
                            type: "LOG_IN_USER",
                            payload: res.user.username
                        })
                    } else {
                        setError('login', 'failed', res.message)
                    }
                }
            )
    }
}

function logOut() {
    return (dispatch) => {
        user.LOGOUT()
        .then((res) => {
            if (res.status === 'Success') {
                dispatch({
                    type: "LOG_OUT"
                })
            } else {
                console.error(res.message)
            }
        })
    }    
}

function registerUser(username, password, setError) {
    return (dispatch) => {
        user.REGISTER(username, password)
            .then(
                (res) => {
                    if (res.status === 'Success') {
                        dispatch({
                            type: "REGISTER_USER",
                            payload: res.user
                        })
                        dispatch({
                            type: "LOG_IN_USER",
                            payload: res.user.username
                        })
                    } else {
                        setError('login', 'failed', res.message)
                    }
                }
            )
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOG_IN_USER":
            return {
                loggedIn: true,
                user: action.payload
            }
        case "LOG_OUT":
            return {
                loggedIn: false,
                user: {}
            }    
        default: 
            return state    
    }
    
}

export {loginUser, logOut, registerUser, userReducer};