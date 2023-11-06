import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicTimePicker from './components/DateTimePicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BasicTimePicker/>
    </>
  )
}

export default App
