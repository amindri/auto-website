import React from "react";
import logo from '../../img/logo.png';
import './NavBar.css';
import {Link} from "react-router-dom";

function NavBar() {

    return (

            <header>
            <nav className="bd-navbar navbar navbar-expand-lg">

                <a className="navbar-brand" href='#'>
                    <img src={logo} className='alwis-auto-logo'/>
                </a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active nav-link">
                            <Link  to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to="/ourservices">Our Services</Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to="/contactus">Contact Us</Link>
                        </li>
                        <li className="nav-item nav-link">
                            <a target="_blank" href="https://alwis.simplybook.me/v2/">Book Now</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </header>

    );
}

export default NavBar;
