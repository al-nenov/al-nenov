import React from 'react';
import LoginForm from '../../components/forms/login-form.component';
import {loginUser} from '../../actions/userActions';
import {useDispatch} from 'react-redux';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Login() {
    const dispatch = useDispatch()
    const login_user = (username, password, setError) => {
        dispatch(loginUser(username, password, setError))
    };

    return (
        <Card className="p-5">
            <h3>Log In to your account</h3>
            <LoginForm action={login_user} />
            <Link to="/signup" className="pt-3">Don't have an account? Signup here</Link>
        </Card>       
    )
}



export default Login;