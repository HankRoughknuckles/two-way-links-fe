import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';

import NewCrawler from './components/Crawlers/NewCrawler';

class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <div>
            <Route exact path="/" component={NewCrawler} />
          </div>
        </BrowserRouter>
      );
    }
}

let EntryPoint = document.getElementById("app");

ReactDOM.render(<App />, EntryPoint);
