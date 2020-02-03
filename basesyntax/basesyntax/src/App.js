import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
// import { render } from '@testing-library/react';

class App extends Component {
  state = {
    username: 'Super Frijke'
  }


// method 
usernameChangedHandler = (event) => {
  this.setState({username: event.target.value});
}

  render() {
    return (
      <div className="App">
      <UserInput 
        changed={this.usernameChangedHandler} 
        currentName={this.state.username} />
      <UserOutput userName={this.state.username} />
      <UserOutput userName={this.state.username} />
      <UserOutput userName="Frijke" />
      </div>
    );
  }
}

export default App;
