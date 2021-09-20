import React from "react";
import Logo from "../static/img/Dashboard/logo.png"
import "../static/css/index.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <a href="/" className="navbar-brand"><img className="logo" src={Logo} alt=""></img></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Dinning Delight</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body ">
                    <ul className="navbar-nav ">
                        <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
                        <li className="nav-item"><Link to="/categories" className="nav-link">Categories</Link></li>
                        <li className="nav-item"><Link to="/specialities" className="nav-link">Specialities</Link></li>
                        <li className="nav-item"><Link to="/review" className="nav-link">Reviews</Link></li>
                        <li className="nav-item"><Link to="/sign" className="nav-link">SignIn</Link></li>
                    </ul>
                </div>

            </div>
        </nav>);
}

export default Navbar;