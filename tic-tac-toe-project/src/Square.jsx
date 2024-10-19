// import Board from './Board'
import './Square.css'
import { useState } from 'react'
import './Square.css'
export default function Square({value,onSquareClick}) {
  // const [value,setValue]=useState(null)
  function handleClick() {
    // setValue('x')
  }
  return <button onClick={onSquareClick} className='square'>{value}</button>
          
     
}