import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './assets/css/App.scss'

import Header from './components/header/header.component'
import Main from './components/main/main.component'
import Footer from './components/footer/footer.component'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { checkAuthSession } from './redux/user/user.actions'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkAuthSession())
    }, [])

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
