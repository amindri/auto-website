import React from "react";
import map from "../../img/map.jpg"
import "./ContactUs.css"
function ContactUs()
{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <div className="contact-details jumbotron justify-content-md-center">
                    <div><h3>Address:</h3></div>
                    <div>
                        <p>31 Petrova Avenue</p>
                        <p>Windsor Gardens</p>
                        <p>SA 5086</p>
                    </div>

                    <br/>

                    <div><h3>Phone:</h3></div>
                    <div><p>82612856</p></div>

                    <br/>

                    <div><h3>Mobile:</h3></div>
                    <div><p>0405782727</p></div>

                    <br/>

                    <div><h3>Email:</h3></div>
                    <div><p>info@alwisautorepairs.com.au</p></div>
                    </div>
                </div>
                <div className="col-6">
                    <img src={map} className="map img-fluid" alt="location"/>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;