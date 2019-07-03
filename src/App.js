import React from 'react';
import './App.css';
import axios from 'axios'
import Routes from './Routes'


class App extends React.Component {
  state = {
    characters: null
  };

  async componentDidMount() { 
  const response = await axios('https://swapi.co/api/people/')
  const characters = response.data.results
  this.setState({
    characters: characters
  })}

  render() {
    const { characters } = this.state
    if (!characters) {
      return null
    } else {
      return(
        <Routes characters={characters}/>
      )
    }
  }
}

export default App;
