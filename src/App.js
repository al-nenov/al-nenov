import React from 'react'
import './assets/css/App.scss'

import Header from './components/header/header.component'
import Main from './components/main/main.component'
import Footer from './components/footer/footer.component'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
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
