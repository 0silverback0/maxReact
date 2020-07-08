
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 state = {
    persons: [
    {name: "Marcell", age: 30},
    {name: "Trina", age: 29},
    {name: "Darius", age: 7}
  ]
};

 switchNameHandler =() => {
  //console.log('was clicked');
  // Dont do this: this.state.persons[0].name="Marcell Gibbs"
  this.setState( {
    persons:[
    {name: "Marcell", age: 30},
    {name: "Trina", age: 29},
    {name: "Darius", age: 7}
  ]
  } )
};

 nameChangedHandler = (event) => {
  this.setState( {
    persons: [
      {name: "Marcell", age: 30},
      {name: event.target.value, age: 29},
      {name: "Darius", age: 7}
    ]
  } )
}    

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={() => this.switchNameHandler("Marzy Baby!")}>Switch Names</button>
        <Person
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}>My hobbies: coding</Person>
        <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this,"Marz!!")}
        changed={this.nameChangedHandler}>My hobbies: none</Person>
        <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}/>
      </div>
    );
}
}


export default App;


/*

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
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  render () {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
*/