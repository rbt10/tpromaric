import React, { useState } from 'react'
import './login-form.css'
import Axios from 'axios'

export default function LoginForm(props) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginChange = event => {
    setLogin(event.target.value)
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const { headers } = await Axios.post(
      'https://easy-login-api.herokuapp.com/users/login',
      {
        username: login,
        password
      }
    )

    const token = headers['x-access-token']

    if (token) {
      localStorage.setItem('token', token)
      // console.log('props', props)
      props.history.push('characters')
    }
  }

  return (
    <div className='global'>
      <form className='login-form' onSubmit={handleSubmit}>
        <input
          type='email'
          value={login}
          onChange={handleLoginChange}
          placeholder='Email'
          required
        />

        <input
          type='password'
          value={password}
          onChange={handlePasswordChange}
          placeholder='Password'
          required
        />
        <button onClick={handleSubmit}>Go</button>
      </form>
    </div>
  )
}
