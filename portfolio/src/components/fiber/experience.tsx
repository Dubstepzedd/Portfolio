import React from "react"
import { Office } from "./office"

const Experience = () => {
    return (
        <>
         <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={0.8} />
            <Office position={[0, -2, -2]} scale={[0.5, 0.5, 0.5]} rotation={[0, -Math.PI / 8, 0]} />
        </>
    )
}

export default Experience;