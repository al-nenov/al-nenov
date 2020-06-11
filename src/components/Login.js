import React from 'react';
import LoginForm from './forms/LoginForm';
import {loginUser} from '../redux/userReducer';
import {useDispatch} from 'react-redux';
import {Container, Card} from 'react-bootstrap';

function Login(props) {
    const dispatch = useDispatch()
    const login_user = (username, password, setError) => {
        dispatch(loginUser(username, password, setError))
    };

    return (
        <Container>
            <Card className="p-5">
                <h3>Log In to your account</h3>
                <LoginForm action={login_user} />
            </Card>
            <a href="/signup">Don't have an account? Signup here</a>
        </Container> 
        
    )
}



export default Login;