import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Menu from "./Menu";
import items from "./data";

function App() {
    const [menuItems, setMenuItems] = useState(items);
    return ( <
        section id = "spec"
        class = "bg-light mt-5" >
        <
        div class = "container-lg" >
        <
        div class = "title" >
        <
        h2 > Specialties Section < /h2> <
        div className = "underline" > < /div>  <
        /div>  <
        Menu items = { menuItems }
        />  <
        /div> <
        /section>
    );
}

export default App;