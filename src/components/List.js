import React from 'react'
import { Link } from 'react-router-dom'

const renderCharacters = (characterList) => {
  return characterList.map((character) => {
    return <Link to={`/character/${character.name}`}><h3>{character.name}</h3></Link>
  })
}

const List = (props) => {
  const { characters } = props
  const result = renderCharacters(characters)
  return (
    <>
      {result}
    </>
  )
}

export default List