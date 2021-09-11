import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

//import components
import Dashboard from "./components/Dashboard"

function App() {
  return (
      <Router>
        <Route path ="/" exact component = {Dashboard}/>
      </Router>
  );
}

export default App;
