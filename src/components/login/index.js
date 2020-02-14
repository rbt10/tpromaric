import React from 'react'
import './login.css'
import Logo from '../logo'
import LoginForm from '../loginForm'

export default function Login(props) {
  return (
    <div className='login-backgound'>
      <Logo></Logo>
      <LoginForm history={props.history}></LoginForm>
    </div>
  )
}
