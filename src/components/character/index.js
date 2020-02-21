import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import {
  getFavorisFromLocalStorage,
  removeFavorisFromLocalStorage,
  addFavorisToLocalStorage
} from '../../services/FavorisService'
import './character.css'

const Character = ({ character, history }) => {
  const [fav, setFav] = useState(false)
  let favoris = getFavorisFromLocalStorage()
  const redirectToDetail = id => {
    history.push(`/characters/${id}`)
  }

  useEffect(() => {
    if (favoris.find(el => el.id === character.id)) {
      setFav(true)
    }
  }, [])

  useEffect(() => {
    if (fav) {
      addFavorisToLocalStorage(character)
    } else {
      removeFavorisFromLocalStorage(character.id)
    }
    favoris = getFavorisFromLocalStorage()
  }, [fav])

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
    console.log(fav)
    
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
