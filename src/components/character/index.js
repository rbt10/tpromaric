import React from 'react'
import PropTypes from 'prop-types'
import './character.css'

const Character = ({ character, history }) => {
  const redirectToDetail = id => {
    history.push(`/characters/${id}`)
  }

  return (
    <div
      className='global-character'
      onClick={() => redirectToDetail(character.id)}
    >
      <img
        className='img-character'
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
      />
      <div className='detail-character'>
        <strong>{character.name}</strong>
      </div>
    </div>
  )
}
Character.propTypes = {
  character: PropTypes.object
}
export default Character
