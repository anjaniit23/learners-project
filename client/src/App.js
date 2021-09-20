import React from "react";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
//import components
import Dashboard from "./components/Dashboard.jsx";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Review from "./components/Review";
import Sign from "./components/Sign";
import specialities from "./components/Specialities";
function App() {
  return (
    <div>

      <Router>
        <Route path="/" exact component={Dashboard} />
        <Route path="/categories" component={Categories} />
        <Route path="/specialities" component={specialities} />
        <Route path="/review" component={Review} />
        <Route path="/sign" component={Sign} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
