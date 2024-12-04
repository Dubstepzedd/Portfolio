import React from 'react'
import './App.css'
import HamburgerMenu from './components/hamburger_menu'
import { Canvas  } from '@react-three/fiber'
import Cube from './components/fiber/cube'
import { useTheme } from './theme/theme_context'

const App = () => {

  const { theme } = useTheme();
  
  return (
    <div className={`w-screen ${theme}`}>
      <HamburgerMenu />
      <div className='h-screen bg-slate-600'>
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <Cube position={[0,0,0]} size={[1,1,1]} color={"red"}/>
        </Canvas>
      </div>
    </div>
  )
}

export default App
