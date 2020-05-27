import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import OurServices from "./components/OurServices/OurServices";

function Routes() {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}/>
            <Route exact path='/ourservices' component={OurServices}/>
            <Route exact path='/contactus' component={ContactUs}/>
        </Switch>
    );
}
export default Routes;