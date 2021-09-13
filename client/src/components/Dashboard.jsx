import React from "react";

import Navbar from "./Navbar";
import Carousel from "./Caraousel";
import About from "./About";

function Dashboard(){
    return(
        <div>
        <Navbar />
        <Carousel />
        <About />
        </div>
        
    );
}

export default Dashboard ;