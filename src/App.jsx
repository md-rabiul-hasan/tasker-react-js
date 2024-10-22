import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import TaskBoard from './components/TaskBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <TaskBoard />
      <Footer />
    </>
  )
}

export default App
