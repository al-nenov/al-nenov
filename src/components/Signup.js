import React from 'react';
import LoginForm from './forms/LoginForm';
import {user} from '../services/userService';
import {loginUser} from '../redux/userReducer';
import {connect} from 'react-redux';


function Signup(props) {

    const signup_user = (username, password, setError) => {
        user.REGISTER(username, password)
            .then(
                (res) => {
                    if (res.status === 'Success') {
                        user.LOGIN(res.user.username, res.user.password)
                        props.dispatch(loginUser(res.user.username, res.user.password))
                    } else {
                        setError('login', 'failed', res.message)
                    }
                }
            )
    };


    return (
        <>
            <h3>Create new account</h3>
            <LoginForm action={signup_user} />
        </>
    )
}



export default connect()(Signup);