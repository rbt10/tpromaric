import React, { useEffect } from 'react'
import './login.css'
import Logo from '../logo'
import LoginForm from '../loginForm'

export default function Login(props) {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      props.history.push('characters')
    }
  }, [])
  return (
    <div className='login-backgound'>
      <Logo></Logo>
      <LoginForm history={props.history}></LoginForm>
    </div>
  )
}
