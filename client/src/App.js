import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//import components
import Dashboard from "./components/Dashboard.jsx";
import Categories from "./components/Categories";
import Footer from "./components/Footer"
import Review from "./components/Review"

function App() {
  return (
    <Router>
      <Route path="/" exact component={Dashboard} />
      <Route path="/categories" component={Categories} />
      <Route path="/footer" component={Footer} />
      <Route path="/review" component={Review} />
    </Router>
  );
}

export default App;
