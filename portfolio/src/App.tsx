import React, { useState } from 'react'
import './App.css'
import HamburgerMenu from './components/hamburger_menu'
import { useTheme } from './theme/theme_context'
import { Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Office } from './components/fiber/office'
import Experience from './components/fiber/experience'
import { Interface } from './components/interface'
import { ScrollManager } from './components/scroll_manager'


const App = () => {

  const { theme } = useTheme();
  const [section, setSection] = useState<number>(0)
  return (
    <div className={`w-screen h-screen ${theme}`}>
      <HamburgerMenu section={section} onSectionChange={setSection} />
      <Canvas camera={{ position: [-1, 2, 5], rotation: [-Math.PI/8,0,0]}}>

        <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection}/>
            <Experience />
            <Scroll html>
              <Interface/>
            </Scroll>
        </ScrollControls>
           
      </Canvas>
      
    </div>
  );
}

export default App
