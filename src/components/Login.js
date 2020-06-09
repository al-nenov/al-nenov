import React from 'react';
import LoginForm from './forms/LoginForm';
import {loginUser} from '../redux/userReducer';
import {useDispatch} from 'react-redux';

function Login(props) {
    const dispatch = useDispatch()
    const login_user = (username, password, setError) => {
        dispatch(loginUser(username, password, setError))
    };

    return (
        <>  
            <h3>Log In to your account</h3>
            <LoginForm action={login_user} />
            <a href="/signup">Don't have an account? Signup here</a>
        </>
    )
}



export default Login;