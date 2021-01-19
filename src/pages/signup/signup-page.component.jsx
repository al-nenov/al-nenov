import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../redux/user/user.actions'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { useStyles } from './signup-page.styles'
import { FormHelperText } from '@material-ui/core'

const Signup = () => {
    const classes = useStyles()
    const error = useSelector((state) => state.userAuth.error)

    const [credentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: ''
    })

    const { displayName, email, password } = credentials

    const dispatch = useDispatch()
    const signUp = (userData) => dispatch(registerUser(userData))

    const handleSubmit = (ev) => {
        ev.preventDefault()
        signUp(credentials)
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
                    Sign up
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                onChange={handleChange}
                                value={displayName}
                                id="displayName"
                                label="Name"
                                name="displayName"
                                autoComplete="dname"
                            />
                        </Grid>
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
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

export default Signup
