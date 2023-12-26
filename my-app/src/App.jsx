import { useState } from 'react'

import './App.css'
import BinaryComponent from './components/BinaryComponent'
import BinaryVisualizer from './components/BinaryVisualizer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BinaryComponent/>
     <BinaryVisualizer/>
    </>
  )
}

export default App
