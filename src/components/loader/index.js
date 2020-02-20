import React from 'react'
import './style.css'

const Loader = () => {
  return (
    <div className='loader center center-screen'>
      <i
        style={{ color: 'teal' }}
        className='fa fa-circle-notch fa-spin fa-5x fa-fw'
      />
    </div>
  )
}

export default Loader
