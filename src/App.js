import React, { useState } from 'react'
import Button from './button'
import './index.css'

export default function App() {
  // define state
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(false)

  // update state
  const countUp = () => {
    setCount(count + 1)
    setColor((color) => color--)
  }

  const countDown = () => {
    setColor((color) => color++)
    setCount(count - 1)
  }

  const reset = () => setCount(count && color)

  return (
    <div className='App'>
      <div className='count'>
        <div className='btn'>
          <Button title='-' action={countDown} />
        </div>
        <div className='result'>
          <h1
            onClick={reset}
            className={
              countUp && color < count
                ? `green`
                : countUp && color > count
                ? 'red'
                : 'target'
            }
          >
            {count}
          </h1>
        </div>
        <div className='btn'>
          <Button title='+' action={countUp} />
        </div>
      </div>
    </div>
  )
}
