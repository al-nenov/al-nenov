import React from 'react';
import {Link} from 'react-router-dom';

function About() {
    return (
        <div className="page about-page">
            <div className="section">
                <h2>Overview</h2>
                <p>
                    Simple store app built with React.
                    The purpoupse of this project is to learn and master the React and Redux foundations.
                </p>
            </div>

            <div className="section">
                <h2>What you can do with this app</h2>
                <ul>
                    <li><Link to="/login" target="blank">Create or login to your account</Link></li>
                    <li>Add or remove products to your favorites list *</li>
                    <li>Add products to Cart</li>
                    <li>Remove products from cart</li>
                    <li>Empty cart</li>
                    <li>Complete order *</li>
                    <li>See your orders and favourited products in your <Link to="/dashboard">dashboard</Link> *</li>
                    <span className="font-italic">* You need to be logged in</span>
                </ul>
            </div>

            <div className="section">
                <h2>Project on Github</h2>
                <a href="https://github.com/al-nenov/react-shop">https://github.com/al-nenov/react-shop</a>
            </div>

            <div className="section">
                <h2>Packages</h2>
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                        <ul>
                            <li><a href="https://www.npmjs.com/package/redux-thunk" target="_blank" rel="noopener noreferrer">Thunk</a></li>
                            <li><a href="https://www.npmjs.com/package/redux-persist" target="_blank" rel="noopener noreferrer">Persist</a></li>
                        </ul>
                    <li><a href="https://www.npmjs.com/package/react-router-dom" target="_blank" rel="noopener noreferrer">Router</a></li>
                    <li><a href="https://www.npmjs.com/package/prop-types" target="_blank" rel="noopener noreferrer">Prop Types</a></li>
                    <li><a href="https://www.npmjs.com/package/react-hook-form" target="_blank" rel="noopener noreferrer">React Hook Form</a></li>
                    <li><a href="https://www.npmjs.com/package/react-js-pagination" target="_blank" rel="noopener noreferrer">React js pagination</a></li>
                    <li><a href="https://www.npmjs.com/package/react-bootstrap" target="_blank" rel="noopener noreferrer">React Bootstrap</a></li>
                    <li><a href="https://www.npmjs.com/package/@fortawesome/react-fontawesome" target="_blank" rel="noopener noreferrer">Font Awesome</a></li>
                    <li><a href="https://www.npmjs.com/package/react-toastify" target="_blank" rel="noopener noreferrer">React Toastify</a></li>
                </ul>
            </div>



        </div>
    )
}

export default About
