import React from "react";
import { RootState, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

interface CubeProps {
    position: [number, number, number]; // Array with 3 numbers for position
    size: [number, number, number]; // Array with 3 numbers for size
    color: string; // String for color (e.g., hex code, CSS color name)
}

const Cube = ({position, size = [1,1,1], color = "white"} : CubeProps) => {

    const ref = useRef<Mesh>(null);

    useFrame((state: RootState, delta: number) => {
        if (ref.current) {
            ref.current.rotation.y += delta;
            ref.current.position.x = Math.sin(state.clock.elapsedTime) * 2.0;
            ref.current.position.z = Math.cos(state.clock.elapsedTime) * 2.0;
        }
    });

    return (
        <mesh position={position} ref={ref}>
            <boxGeometry args={size}/>
            <meshStandardMaterial color={color}/>
        </mesh>
    );
}

export default Cube;

