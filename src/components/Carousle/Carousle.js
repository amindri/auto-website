import React from "react";
import zero from '../../img/0.jpg';
import one from '../../img/1.jpg';
import two from '../../img/2.jpg';
import './Carousle.css';

function Carousle() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={zero} alt="First slide"/>
                    <div className="header-text">
                        <div className="row justify-content-center">
                            <h1>
                                alwis auto repairs
                            </h1>
                        </div>
                        <div className="row justify-content-center">
                            <h5>FOR VEHICLES OF ALL MAKES AND MODELS</h5>
                        </div>
                        <br/>
                        <div className="row justify-content-center">
                            <a target="_blank" className="btn-lg btn-theme"
                               href="https://alwis.simplybook.me/v2/">Book Now</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={one} alt="Second slide"/>
                    <div className="header-text">
                        <div className="row justify-content-center"><h5>SPECIALISED FOR</h5></div>
                        <div className="row justify-content-center">
                            <h1>
                                European Cars
                            </h1>
                        </div>
                        <br/>
                        <div className="row justify-content-center">
                            <a target="_blank" className="btn-lg btn-theme"
                               href="https://alwis.simplybook.me/v2/">Book Now</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={two} alt="Third slide"/>
                    <div className="header-text">
                        <div className="row justify-content-center">
                            <h5>FREE QUOTES</h5>
                        </div>
                        <div className="row justify-content-center">
                            <h1>
                                FRIENDLY SERVICE
                            </h1>
                        </div>
                        <div className="row justify-content-center">
                            <h5>CALL 082612856</h5>
                        </div>
                        <br/>
                        <div className="row justify-content-center">
                            <a target="_blank" className="btn-lg btn-theme"
                               href="https://alwis.simplybook.me/v2/">Book Now</a>
                        </div>

                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
               data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
               data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>);
    }

                export default Carousle;