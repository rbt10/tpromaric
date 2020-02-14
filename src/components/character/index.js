import React from 'react'
import PropTypes from 'prop-types'
import './character.css'

const Character = ({ character }) => {
  return (
    <div className='global-character'>
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
