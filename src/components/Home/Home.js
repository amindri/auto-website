import React from "react";
import Carousle from "../Carousle/Carousle";

function Home() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>
                            At Alwis Auto Repairs we undertake mechanical repairs to cars of all makes and models.
                            However, European cars are our speciality.
                            Free quotes provided upon request
                        </p>
                    </div>

                </div>
            </div>
            <Carousle/>
        </div>

    );

}

export default Home;