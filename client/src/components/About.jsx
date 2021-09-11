import React from "react";

function About(){
    return(
        <div>
            <h1 className="heading">About Us</h1>
            <div className="about-section">
                <div className="content">
                    <p >In the 1950s, all that stood in this iconic location was a car park with a small kiosk. Even then it was the best spot for uninterrupted panoramic views of Adelaide, with the address a tourist destination in itself. In October 1985, RavoRes as we know it today opened.
                    </p>
                    <button className="btn btn-lg btn-outline-dark">Know More</button>
                </div>
                
                <img className="about-img" src="../about.jfif" alt=""/>
            </div>
            
        </div>
    );
}

export default About;