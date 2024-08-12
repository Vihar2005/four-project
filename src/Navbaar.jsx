import React, { useContext, useEffect, useState } from 'react'

import './assets/css/bootstrap.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/jquery-ui.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css'
import './assets/css/aos.css'
import './assets/css/style.css'
import './assets/fonts/icomoon/style.css'
import './website.css'
import { Link, useNavigate } from 'react-router-dom'
import { ContextCounter } from './App'
import { auth } from './FirebaseAuth';
import { signOut } from 'firebase/auth';


const Navbaar = () => {
    const { count, setCount } = useContext(ContextCounter);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsAuthenticated(!!user);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log("User signed out successfully");
                navigate("/login");
            })
            .catch((error) => {
                console.error("Error signing out: ", error);
            });
    };

    return (
        <div>
            <header className="site-navbar" role="banner">
                <div className="site-navbar-top">
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                                <form action="" className="site-block-top-search">
                                    <span className="icon icon-search2"></span>
                                    <input type="text" className="form-control border-0" placeholder="Search" />
                                </form>
                            </div>

                            <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                                <div className="sit2e-logo">
                                    <a href="index.htm" className="js-logo-clone">Shoppers</a>
                                    {/* <Link to="/Home" className="js-logo-clone">Shoppers</Link> */}
                                </div>
                            </div>

                            <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                                <div className="site-top-icons">
                                    <ul>
                                        <li><a href="#"><span className="icon icon-person"></span></a></li>
                                        <li><a href="#"><span className="icon icon-heart-o"></span></a></li>
                                        <li>
                                            <a href="#" className="site-cart">
                                                <Link to="/Cart">
                                                    <span className="icon icon-shopping_cart"></span>
                                                    <span className="count">{count}</span>
                                                </Link>
                                            </a>
                                        </li>
                                        <li className="d-inline-block d-md-none ml-md-0"><a href="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu"></span></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <nav className="site-navigation text-right text-md-center" role="navigation">
                    <div className="container">
                        <ul className="site-menu js-clone-nav d-none d-md-block">
                            <li>
                                <Link to="/Home">Home</Link>
                            </li>
                            <li>
                                <Link to="/Shop">Shop</Link>
                                {/* <Link to="/About">About</Link> */}
                            </li>
                            <li>
                                {/* <Link to="/Shop">Shop</Link> */}
                                <Link to="/About">About</Link>
                            </li>
                            <li>
                                <Link to="/Contact">Contact</Link>
                            </li>

                            <li>
                                <Link to="/list">list</Link>
                            </li>

                            <li>
                                {isAuthenticated ? (
                                    <button onClick={handleLogout} className="btn btn-link">Logout</button>
                                ) : (
                                    <Link to="/login">Login</Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbaar
