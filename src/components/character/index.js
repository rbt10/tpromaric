import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './character.css'
import { motion, useAnimation, use } from 'framer-motion'

const Character = ({ character, favoris, history }) => {
  const [fav, setFav] = useState(false)
  const controls = useAnimation()
  const redirectToDetail = id => {
    history.push(`/characters/${id}`)
  }

  const variants = {
    active: {
      rotate: 360,
      transition: {
        duration: 0.5
      }
    },
    inActive: {
      rotate: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const add = () => {
    setFav(!fav)
  }

  return (
    <div className='global-character'>
      <img
        className='img-character'
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
      />
      <div className='detail-character'>
        <div className='detail-character-header'>
          <strong>{character.name}</strong>
          <motion.i
            onClick={add}
            className={`fa-heart ${fav ? 'fas icon-color' : 'far'}`}
            animate={fav ? 'active' : 'inActive'}
            variants={variants}
          />
        </div>
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
