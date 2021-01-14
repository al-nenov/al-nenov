import React from 'react'
import { useDispatch } from 'react-redux'
import LoginForm from '../../components/forms/login-form.component'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { loginUser } from '../../redux/user/user.actions'

const Login = () => {
    const dispatch = useDispatch()
    const login_user = (emailAndPassword) => dispatch(loginUser(emailAndPassword))

    return (
        <Card className="p-5">
            <h3>Log In to your account</h3>
            <LoginForm action={login_user} />
            <Link to="/signup" className="pt-3">
                Don't have an account? Signup here
            </Link>
        </Card>
    )
}

export default Login
