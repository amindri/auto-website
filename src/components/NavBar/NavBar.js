import React from "react";
import logo from '../../img/logo.png';
import './NavBar.css';
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <header>

            <nav id="navigation" className="navbar navbar-expand navbar-dark bd-navbar">
                <div className="container-fluid">

                    <div className="navbar-header">
                        <a className="navbar-brand alwis-auto-logo" href='#'>
                            <img src={logo} className='logo-image' alt="aar-logo"/>
                        </a>
                    </div>
                    <ul className="mr-auto navbar-nav">
                        <li id="navHome" className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ourservices">Our Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contactus">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <a target="_blank" href="https://alwis.simplybook.me/v2/">Book Now</a>
                        </li>
                    </ul>


                </div>
            </nav>

        </header>

    );
}

export default NavBar;
