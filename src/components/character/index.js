import React from 'react'
import PropTypes from 'prop-types'
import './character.css'

const Character = ({ character, history }) => {
  const redirectToDetail = id => {
    history.push(`/characters/${id}`)
  }

  return (
    <div className='global-character'>
      <img
        className='img-character'
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
      />
      <div className='detail-character'>
        <strong>{character.name}</strong>
        <div className='detail-character--description'>
          {character.description}
        </div>
        <div
          className='detail-character--buttons'
          onClick={() => redirectToDetail(character.id)}
        >
          <strong>More info</strong>
          <span>
            <i className='fas fa-chevron-right'></i>
          </span>
        </div>
      </div>
    </div>
  )
}
Character.propTypes = {
  character: PropTypes.object
}
export default Character
