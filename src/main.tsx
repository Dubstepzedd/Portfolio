import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Scene from './Scene.tsx'
import { Canvas } from '@react-three/fiber'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Canvas>
      <Scene />
    </Canvas>
  </StrictMode>,
)
