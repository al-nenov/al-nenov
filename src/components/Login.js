import React from 'react';
import LoginForm from './forms/LoginForm';
import {loginUser} from '../actions/userActions';
import {useDispatch} from 'react-redux';
import {Card} from 'react-bootstrap';

function Login() {
    const dispatch = useDispatch()
    const login_user = (username, password, setError) => {
        dispatch(loginUser(username, password, setError))
    };

    return (
        <Card className="p-5">
            <h3>Log In to your account</h3>
            <LoginForm action={login_user} />
            <a href="/signup">Don't have an account? Signup here</a>
        </Card>       
    )
}



export default Login;