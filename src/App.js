import React from 'react';
import './assets/css/App.scss';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        closeOnClick
      />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
