import { useState } from 'react'
import './App.css'
import Square from './Square'
import Board from './Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Square></Square> */}
      <Board></Board>
    </>
  )
}

export default App
