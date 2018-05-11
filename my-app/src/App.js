import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';


class App extends Component {
  state = {
    persons: [
      { name: 'M', age: 28},
      { name: 'J', age: 29},
      { name: 'E', age: 26}
    ],
    showPerson: false
  }
  
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
          { name: 'Ma', age: 21 },
          { name: 'Jo', age: 22 },
          { name: 'Em', age: 26 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Maddy', age: 23 },
        { name: event.target.name.value, age: 20 },
        { name: 'Emanuel', age: 21 }
      ]
    })
  }

  togglePernonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  render() {
    const styling = {
      backgroundColour: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
       <h1> I'm a react app</h1>
       <p> this is working</p>
        <button 
          style={styling}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {
        this.state.showPerson ? 
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'theo')}
              changed={this.nameChangedHandler()} > My Hobbies : yoga </Person>
          </div> : null
        }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, 'h1', React.createElement('h1', null,  'test'));
  }
}

export default App;
