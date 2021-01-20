import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/user/user.actions'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { useStyles } from './login-page.styles'
import { FormHelperText } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
    const classes = useStyles()
    const error = useSelector((state) => state.userAuth.error)

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const { email, password } = credentials

    const dispatch = useDispatch()
    const login = (userData) => dispatch(loginUser(userData))

    const handleSubmit = (ev) => {
        ev.preventDefault()
        login(credentials)
    }

    const handleChange = (ev) => {
        const { name, value } = ev.target
        setCredentials({ ...credentials, [name]: value })
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log In
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                onChange={handleChange}
                                value={email}
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                onChange={handleChange}
                                value={password}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <FormHelperText defaultValue="Error" error id="my-helper-text">
                        {error}
                    </FormHelperText>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Log In
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link component={RouterLink} to="/signup" variant="body2">
                                Don't have an account? Signup here
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

export default Login
