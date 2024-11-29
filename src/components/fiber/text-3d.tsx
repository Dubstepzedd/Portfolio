import { extend, Object3DNode } from '@react-three/fiber'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { useFont } from '../../utils/useFont';
import { forwardRef, useEffect, useRef } from 'react';
import { Group } from 'three';

interface Text3DProps {
    text: string;
    position: [number, number, number];
    size: number;
    depth: number;
    color: string;
    fontName?: string;
    center?: boolean;
}

extend({ TextGeometry })

declare module "@react-three/fiber" {
    interface ThreeElements {
      textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
    }
}
  
const Text3D = forwardRef<Group, Text3DProps>(({ text, position, size, depth, color, fontName = "Raleway_Regular", center = false }, ref) => {
    const font = useFont({ src: `./fonts/${fontName}.json` });
    const geo = useRef<TextGeometry>(null);

    useEffect(() => {
        if (geo.current && center) {
            geo.current.computeBoundingBox();
            geo.current.center();
        }

    }, [position, text, size, depth, color, fontName]);
    return (
        <group ref={ref} position={position} >
            <mesh>
                <textGeometry ref={geo} args={[text, { font, size: size, depth: depth }]}/>
                <meshStandardMaterial color={color}/>
            </mesh>
        </group>
    )
});

export default Text3D;