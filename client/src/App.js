import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";

//import components
import Dashboard from "./components/Dashboard.jsx";
import Categories from "./components/Categories";
import Footer from "./components/Footer"
import Review from "./components/Review"
import Sign from "./components/Sign"
function App() {
  return (
    <div>

      <Router>
        <Route path="/" exact component={Dashboard} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/review" component={Review} />
        <Route path="/sign" component={Sign} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
