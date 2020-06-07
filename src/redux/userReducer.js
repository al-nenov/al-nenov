const initialState =  {
    loggedIn: !!localStorage.user,
    user: localStorage.user ? JSON.parse(localStorage.user) : {}
};

export function loginUser(user) {
    return {
        type: "LOG_IN_USER",
        payload: user
    }
}

export function logOut() {
    return {
        type: "LOG_OUT"
    }
}

export function registerUser(user) {
    return {
        type: "REGISTER_USER",
        payload: user
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

export default userReducer;