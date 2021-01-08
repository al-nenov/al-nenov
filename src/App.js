import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './assets/css/App.scss'

import Header from './components/header/header.component'
import Main from './components/main/main.component'
import Footer from './components/footer/footer.component'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { setCurrentUser } from './redux/user/user.actions'
import firebase from './firebase/firebase.app'
import { addUserToFirestore } from './firebase/firebase.utils'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        let unsubscribeFromAuth = firebase.auth().onAuthStateChanged(async (user) => {
            console.log(user)
            if (user) {
                const userRef = await addUserToFirestore(user)
                userRef.onSnapshot((snapshot) => {
                    console.log(snapshot)
                    dispatch(
                        setCurrentUser({
                            id: snapshot.id,
                            ...snapshot.data()
                        })
                    )
                })
            } else {
                dispatch(setCurrentUser(user))
            }
        })

        return () => {
            unsubscribeFromAuth()
        }
    })

    return (
        <>
            <ToastContainer position="top-right" autoClose={2500} closeOnClick />
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default App
