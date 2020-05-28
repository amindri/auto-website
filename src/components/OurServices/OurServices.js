import React from "react";
import "./OurServices.css";

function OurServices() {
    return (

            <div style={{'background-color': '#f6f6f6'}}>

            <div className="container">
            <div className="row">
                <h3 className="title">At Alwis Auto Repairs we undertake mechanical repairs to cars of all makes and models. However, European cars are our speciality</h3>
            </div>
            <div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <i className="fas fa-book-open"/>
                                    <span className="card-title">Log Book Services</span>
                                </h5>

                                <p className="card-text">
                                    {/*With supporting text below as a natural lead-in to additional content.*/}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">

                                <h5 className="card-title">
                                    <i className="fas fa-wind"></i>
                                    <span className="card-title">Air conditioning servicing including re-gas and repairs</span>
                                </h5>
                                <p className="card-text">
                                    {/*With supporting text below as a natural lead-in to additional content.*/}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <i className="fas fa-check-circle"></i>
                                    <span className="card-title">Safety Checks</span>
                                </h5>
                                <p className="card-text">
                                    {/*With supporting text below as a natural lead-in to additional content.*/}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row"/>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <i className="fas fa-car-battery"></i>
                                    <span className="card-title">
                                    Starter motors, alternators, batteries and all electrical
                                    work
                                    </span>
                                </h5>
                                <p className="card-text">
                                    {/*With supporting text below as a natural lead-in to additional content.*/}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <i className="fas fa-stethoscope"></i>
                                    <span className="card-title">EFI scanning and diagnostics</span>
                                </h5>
                                <p className="card-text">
                                    {/*With supporting text below as a natural lead-in to additional content.*/}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default OurServices;