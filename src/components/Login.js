import React, {useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {login, setUserStorage} from '../services/userService';
import {loginUser} from '../redux/userReducer';
import {connect} from 'react-redux';

function Login(props) {
    const { register, handleSubmit, errors, setError } = useForm({ mode: "onBlur" });

    useEffect(() => {
        setUserStorage();
    },[])

    const onSubmit = (data, event) => {
        login(data.username, data.password)
            .then(
                (res) => {
                    if (res.status === 'Failed') {
                        setError('login', 'failed', res.message)
                    } else {
                        props.loginUser(res.username, res.password)
                    }
                }
            )
        event.target.reset();    
       
    };


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group >
                <Form.Label>Username</Form.Label>
                <Form.Control
                    id="username"
                    ref={register({ 
                        required: (
                            <p>Cannot be empty</p>
                        ),
                        maxLength: 20 
                    })} 
                    type="username" 
                    name="username" 
                    placeholder="Username" 
                />
                    {errors.username && errors.username.message}
            </Form.Group>

            <Form.Group >
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="text"
                    name="password"
                    placeholder="Password"
                    ref={register({
                        required: <p className="text-danger">Password can not be ampty</p>,
                        validate: {passwordLength: value => value.length >= 6}
                    })}
                />
                {errors.password && errors.password.message}
                {errors.password && errors.password.type === 'passwordLength' && <p>Your password must be atleast 6 symbols</p>}
            </Form.Group>
            {errors.login && errors.login.message}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

function mapStateToProps(globalState) {
    return {
        auth: globalState.userAuth
    }
}
const mapDispatchtoProps = {
    loginUser
}

export default connect(mapStateToProps, mapDispatchtoProps)(Login);