import React from 'react';
import LoginForm from './forms/LoginForm';
import {registerUser} from '../actions/userActions';
import {useDispatch} from 'react-redux';
import {Card} from 'react-bootstrap';


function Signup(props) {
    const dispatch = useDispatch()
    
    const signup_user = (username, password, setError) => {
        dispatch(registerUser(username, password, setError))
    };

    return (
        <Card className="p-5">
            <h3>Create new account</h3>
            <LoginForm action={signup_user} />
            <a href="/login">Already have an account? Login here</a>
        </Card>
    )
}



export default Signup;