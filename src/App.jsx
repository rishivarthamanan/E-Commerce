import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import Container from './components/navbar/container'
import Containers from './components/navbar/container-two'
import Containerthree from './container-three/container-three'
import Containerfour from './container-four/container-four'
import Videos from './videos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>    
    <Navbar/>
    <Container/>
    <Containers/>
    <Containerthree/>
    <Containerfour/>
    <Videos/>



</div>



    
  )
}

export default App
