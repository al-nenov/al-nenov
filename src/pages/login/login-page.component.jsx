import React from 'react'
import LoginForm from '../../components/forms/login-form.component'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import firebase from '../../firebase/firebase.app'

const Login = () => {
    const login_user = async (data, setError) => {
        const { username, password } = data
        try {
            await firebase.auth().signInWithEmailAndPassword(username, password)
        } catch (error) {
            setError('login', 'failed', error.message)
        }
    }

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
