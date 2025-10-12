import { useState } from 'react'
import logo from './assets/logo.svg'
import './App.css'

import Home from './components/home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
