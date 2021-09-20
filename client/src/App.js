import React from "react";
import { BrowserRouter as Router, NavLink, Route,Switch } from "react-router-dom";
import Navbar from "../src/components/Navbar";

//import components
import Dashboard from "./components/Dashboard.jsx";
import Categories from "./components/Categories";
import Footer from "./components/Footer"
import Review from "./components/Review"
import Sign from "./components/Sign"
import Nav from "./components/Nav";
function App() {
  return (
    <>
    
    <Router>
    <Nav/> 

    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/categories" component={Categories} />
      <Route path="/footer" component={Footer} />
      <Route path="/review" component={Review} />
      <Route path="/sign" component={Sign} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
