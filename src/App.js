import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";
import Quotes from "./Quotes";
import Lamp from "./Lamp";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        working: false
    };
}

handleClick = () => {
  this.setState({ working: !this.state.working });
  console.log('Button clicked');
};
 
  render() {
const isWorkingClassName = this.state.working ? 'App-logo speed':'App-logo';
const isWorkingButton = this.state.working ? 'working' : 'not working';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={isWorkingClassName} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button
        onClick={this.handleClick}
        >
        {isWorkingButton.toUpperCase()}
        </button>
        <Quotes />
      </div>
    );
  }
}

export default App;