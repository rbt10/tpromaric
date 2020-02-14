import React from 'react'
import './App.css'
import Routes from './config/routes'
import { ThemeProvider } from 'styled-components'
import theme from './config/themes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
