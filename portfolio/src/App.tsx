import React, { useState } from 'react'
import './App.css'
import HamburgerMenu from './components/hamburger_menu'
import { useTheme } from './theme/theme_context'
import { Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Experience from './components/fiber/office_scene'
import { Interface } from './components/interface/interface'
import { ScrollManager } from './components/scroll_manager'


const App = () => {

  const { theme } = useTheme();
  const [section, setSection] = useState<number>(0)

  return (
    <div className={`w-screen h-screen ${theme}`}>
      <HamburgerMenu section={section} onSectionChange={setSection} />
      <Canvas camera={{ position: [-1, 2, 5], rotation: [-Math.PI/8,0,0]}} className='dark:bg-slate-700 bg-gray-300'>
        <ScrollControls pages={5} damping={0.1} infinite={false}>
            <ScrollManager section={section} onSectionChange={setSection}/>
            <Experience />
            <Scroll html>
              <Interface setSection={setSection}/>
            </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App
