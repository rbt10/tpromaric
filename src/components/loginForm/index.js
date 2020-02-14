import React, { useState } from 'react'
import './login-form.css'

export default function LoginForm() {
  const [login, setLogin] = useState('')
  const handleChange = event => {
    setLogin(event.target.value)
  }

  const handleSubmit = event => {
    alert('Le nom a été soumis : ' + login)
    event.preventDefault()
  }

  return (
    <div className='global'>
      <form className='login-form' onSubmit={handleSubmit}>
        <input type='email' value={login} onChange={handleChange} />
        <input type='password' value={login} onChange={handleChange} />
        <button onClick={handleSubmit}>Go</button>
      </form>
    </div>
  )
}
