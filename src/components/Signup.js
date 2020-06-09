import React from 'react';
import LoginForm from './forms/LoginForm';
import {registerUser} from '../redux/userReducer';
import {useDispatch} from 'react-redux';


function Signup(props) {
    const dispatch = useDispatch()
    
    const signup_user = (username, password, setError) => {
        dispatch(registerUser(username, password, setError))
    };

    return (
        <>
            <h3>Create new account</h3>
            <LoginForm action={signup_user} />
        </>
    )
}



export default Signup;