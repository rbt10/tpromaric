import React from 'react'
import './style.css'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { shuffle } from 'lodash'

const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 300
}

const Loader = () => {
  const [colors, setColors] = useState(initialColors)
  useAnimation()
  useEffect(() => {
    setTimeout(() => setColors(shuffle(colors)), 300)
  }, [colors])
  return (
    <div className='center-screen'>
      <ul className='ul-loader'>
        {colors.map(background => (
          <motion.li
            key={background}
            layoutTransition={spring}
            style={{ background }}
          />
        ))}
      </ul>
    </div>
  )
}
const initialColors = ['#b61c1c', '#9f0d0d', '#960202', '#7c0303']
export default Loader
