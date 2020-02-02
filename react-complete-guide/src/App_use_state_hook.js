// Use State Hook

// import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'; // name should have capital letter
//import person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState] = useState({
        persons: [
                        {name: 'Frijke', age: 41},
                        {name: 'Max', age: 28},
                        {name: 'Manu', age: 29}
                    ],
                    otherState: 'Some other value'
    });

    const [otherState, setOtherState] = useState('Some other value');

    console.log(personsState);

const switchNameHandler = () => {
            // console.log('Was Clicked!');
            // this.state.persons[0].name = 'Frijke Schaafsma'; This does not work..
            setPersonsState({
                persons: [
                    {name: 'Frijke Schaafsma', age: 41},
                    {name: 'Max', age: 28},
                    {name: 'Manu', age: 29}
                ],
                otherState: personsState.otherState
            });
        };

        return ( 
            // jsx code
            <div className = "App" >
            <h1 > Hi, I'm a React App</h1>
            <p> This is really working </p> 
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
            </div >
        );
        
        
 };

export default app;