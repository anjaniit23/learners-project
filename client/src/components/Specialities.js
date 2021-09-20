import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./Menu";
import items from "./data";
import Nav from "./Nav";

function App() {
    const [menuItems, setMenuItems] = useState(items);
    return (
        <div>
            <Nav />
            <section id="spec" class="bg-light mt-0">
                <div class="container-lg" >
                    <div class="title" >
                        <h2 > Specialties Section </h2> '
                        <div className="underline" > </div>
                    </div>
                    <Menu items={menuItems} />
                </div>
            </section>
        </div>
    );
}

export default App;