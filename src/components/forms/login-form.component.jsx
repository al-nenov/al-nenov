import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

function LoginForm(props) {
    const { register, handleSubmit, errors, setError } = useForm({
        mode: 'onBlur'
    })
    const onSubmit = (data, event) => {
        props.action(data.username, data.password, setError)
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                    id="username"
                    ref={register({
                        required: 'Cannot be empty',
                        maxLength: 20
                    })}
                    type="username"
                    name="username"
                    placeholder="Username"
                />
                <p className="text-danger">{errors.username && errors.username.message}</p>
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    ref={register({
                        required: 'Password can not be empty',
                        validate: {
                            passwordLength: (value) => value.length >= 6
                        }
                    })}
                />
                <p className="text-danger">
                    {errors.password && errors.password.message}
                    {errors.password && errors.password.type === 'passwordLength' && (
                        <p>Your password must be atleast 6 symbols</p>
                    )}
                    {errors.login && errors.login.message}
                </p>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

LoginForm.propTypes = {
    action: PropTypes.func.isRequired
}

export default LoginForm
