import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './NavBar';
import MostPopular from './MostPopular';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route path="/" exact component={MostPopular} />
        </div>
      </Router>
    );
  }
}

export default App;
