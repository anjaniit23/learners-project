import React from "react";

import Slide1 from "../static/img/Dashboard/slide-1.jpg";
import Slide2 from "../static/img/Dashboard/slide-2.jpg"
import Slide3 from "../static/img/Dashboard/slide-3.jpg"
import "../static/css/index.css";

function Carousel(){
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Slide1} className="d-block w-100" alt="..." />
                    <div className="carousel-content">
                        <h2>First slide label</h2>
                        <p className="carousel-p">Some representative placeholder content for the first slide.</p>
                        <button className="btn btn-light custom-btn">Order</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Slide2} className="d-block w-100" alt="..." />
                    <div className="carousel-content">
                        <h2>Second slide label</h2>
                        <p className="carousel-p">Some representative placeholder content for the first slide.</p>
                        <button className="btn btn-light custom-btn">Order</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Slide3} className="d-block w-100" alt="..." />
                    <div className="carousel-content">
                        <h2>Third slide label</h2>
                        <p className="carousel-p">Some representative placeholder content for the first slide.</p>
                        <button className="btn btn-light custom-btn">Order</button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;