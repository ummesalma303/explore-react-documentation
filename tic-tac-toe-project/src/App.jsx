import { useState } from 'react'
import './App.css'
import Square from './Square'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Square></Square>
    </>
  )
}

export default App
