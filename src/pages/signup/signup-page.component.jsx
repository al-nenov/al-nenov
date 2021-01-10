import React from 'react'
import LoginForm from '../../components/forms/login-form.component'
import { registerUser } from '../../redux/user/user.actions'
import { useDispatch } from 'react-redux'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Signup = () => {
    const dispatch = useDispatch()

    const signup_user = (username, password, setError) => {
        dispatch(registerUser(username, password, setError))
    }

    return (
        <Card className="p-5">
            <h3>Create new account</h3>
            <LoginForm action={signup_user} />
            <Link to="/login" className="pt-3">
                Already have an account? Login here
            </Link>
        </Card>
    )
}

export default Signup
