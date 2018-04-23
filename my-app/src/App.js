import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';


class App extends Component {
  state = {
    persons: [
      { name: 'M', age: 28},
      { name: 'J', age: 29},
      { name: 'E', age: 26}
    ]
  }
  switchNameHandler = () => {
    this.setState({
      persons: [
          { name: 'Ma', age: 21 },
          { name: 'Jo', age: 22 },
          { name: 'Em', age: 26 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
       <h1> I'm a react app</h1>
       <p> this is working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies : yoga </Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, 'h1', React.createElement('h1', null,  'test'));
  }
}

export default App;
