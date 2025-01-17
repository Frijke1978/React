import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newname) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newname, age: 41 },
        { name: 'Manu', age: 29 },
        { name: 'Max', age: 28 }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
        persons: [
          { name: 'Frijke', age: 41 },
          { name: event.target.value, age: 29 },
          { name: 'Max', age: 28 }
        ]
      })
  }

  togglePersonsHandler = () => {
    const dowesShow = this.state.showPersons;
    this.setState({showPersons: !dowesShow});
  }

  render() {
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };

      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div>
            <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Frijke!')}
              changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          </div>
        );
      }

      return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
          <button 
              style={style}
              onClick= {this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
