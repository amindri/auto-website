import React from "react";
import logo from '../../img/logo.png';
import './NavBar.css';

function NavBar() {
    return (
      <div>
          <nav className="bd-navbar navbar navbar-expand-lg">

              <a class="navbar-brand">
                  <img src={logo} className='alwis-auto-logo'/>
              </a>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                          <a class="nav-link" href="../../../public/index.html" >Home <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link">Who We Are</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link">Our Services</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link">Contact Us</a>
                      </li>
                  </ul>
              </div>
          </nav>

      </div>
    );
}
export default NavBar;
