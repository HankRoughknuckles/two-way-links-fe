import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header'

class HelloMessage extends React.Component {
    render() {
        return <div>
            <Header/>
            <div className="container">
                <h1>Hello, from react!</h1>
            </div>
        </div>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<HelloMessage />, App);
