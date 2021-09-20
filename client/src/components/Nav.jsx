import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../static/css/navbar.css";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fs-4 ">
            <div className="container-fluid pb-2 " >
                <img src="" alt="Logo" />
                <a className="navbar-brand fs-2 fw-bold" href="#">Restraunt</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item px-1 ">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item px-1 ">
                            <Link className="nav-link " to="/categories">Categories </Link>
                        </li>
                        <li className="nav-item px-1 ">
                            <Link className="nav-link " to="/review">Reviews</Link>
                        </li>
                        <li className="nav-item px-1 ">
                            <Link className="nav-link " to="/sign">Login</Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Nav;