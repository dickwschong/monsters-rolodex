import React from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    monsters: [],
    searchField: ''
  }
} //constructor


/* Life Cycle Methods */
// load the monster list
componentDidMount = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));

} //componentDidMount

// Filter the monster list
componentDidUpdate = () => {
//console.log("componentDidUpdate: " + this.state.searchField );

// This call infinite loops!
// let temp = this.state.monsters.filter((monster) => {
//     console.log(monster.name);
//   } );
// this.setState({monsters: temp})

} //componentDidUpdate



/* Event Handler */
handleSearch = (e) => {
//console.log(e.target.value);

  this.setState({
    searchField: e.target.value
  });

} //handleSearch



/* Self-Defined Functions */




render() {
  // object destructuring ES6
  const { monsters, searchField } = this.state;
  const filteredMonsters = monsters.filter( (monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
      // can also try indexOf
  })

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>

      <SearchBox 
        placeholder="enter here"
        handleChange={this.handleSearch}
      />

      <CardList monsters={filteredMonsters} />
    </div>
  )};

} //class App

export default App;

/*
<CardList monsters={this.state.monsters} />

<input type='search' placeholder="enter here" onChange={this.handleSearch} />



*/
