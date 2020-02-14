import React from 'react'
import './logo.css'
import logo from '../../assets/logo.png'

export default function Logo() {
  return (
    <div className='flex-logo'>
      <img alt='pohot' src={logo} className='logo' />
    </div>
  )
}
