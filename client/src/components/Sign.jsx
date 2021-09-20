import React, { useState } from "react";
import Pizzas from "../static/img/SignUp/pizza.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../static/css/sign.css";
import Signup from "./SignUp";
import Login from "./Login";
import Nav from "./Nav";
const Sign = () => {
    const [isNew, setNew] = useState(false);
    return (
        <div>
            <Nav />
            <div className="card justify-content-center align-content-center width">
                <div className="row">
                    <div className="col-sm-6 imgs">

                        <img src={Pizzas} alt="" height="540px" style={{ opacity: "0.7" }} />
                    </div>
                    <div className="col-sm-6 ps-4">
                        <div className="row pt-2 pb-2" >
                        </div>

                        {isNew ? <Signup user={isNew} setuser={setNew} /> : <Login
                            user={isNew}
                            setuser={setNew}
                        />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sign;