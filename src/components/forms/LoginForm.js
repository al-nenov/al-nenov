
import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useForm} from 'react-hook-form';

function LoginForm(props) {
    const { register, handleSubmit, errors, setError } = useForm({ mode: "onBlur" });
    const onSubmit = (data, event) => {
        props.action(data.username, data.password, setError)
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
                    type="password"
                    name="password"
                    placeholder="Password"
                    ref={register({
                        required: <p className="text-danger">Password can not be empty</p>,
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

export default LoginForm