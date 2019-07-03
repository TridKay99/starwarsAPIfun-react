import React from 'react'
import { Switch, Route } from 'react-router'
import List from './components/List'

class Routes extends React.Component {

  render() {
    const { characters } = this.props
    return (
      <Switch>
        <Route path='/List' render={() => {
        return <List characters={characters}/>
      }}/>
      </Switch>
    )
  }
}

export default Routes