import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from "./components/NavBar/NavBar";
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";


ReactDOM.render(
    <BrowserRouter>
        <NavBar/>
        <Routes/>
    </BrowserRouter>, document.getElementById('header'));

var homeLink = document.getElementById('navHome').children[0];
homeLink.setAttribute('class', 'active');

var elements = document.getElementById('navigation').getElementsByTagName('a');
for (var i=0; i<elements.length; i++)
{
    var el = elements[i];
    var existingClasses = el.getAttribute("class");
    var allClasses = existingClasses != null ? existingClasses + " nav-link" : "nav-link";
    el.setAttribute( "class", allClasses);
}


// ReactDOM.render(<Carousle/>, document.getElementById('carousle'));
// ReactDOM.render(
//     <React.StrictMode>
//             <App/>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
