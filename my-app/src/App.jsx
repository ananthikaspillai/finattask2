import { useState } from 'react'

import './App.css'
import BinaryComponent from './BinaryComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BinaryComponent/>
    </>
  )
}

export default App
