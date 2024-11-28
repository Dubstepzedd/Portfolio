import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Text3D from './components/Text3D';

import { Group } from 'three';

const Scene = () => {
  const textRef = useRef<Group>(null);

  // useFrame hook to rotate the text
  useFrame(() => {
    if (textRef.current) {
      textRef.current.rotation.y += 0.01;
    }
  });

  return (
      <Suspense fallback={null}>
        <directionalLight position={[0, 0, 2]} />
        <Text3D
          text="Hello, World!!!!!!!!!!!!!"
          position={[0, 0, 0]}
          size={0.5}
          depth={0.1}
          color="red"
          ref={textRef}
          center={true}
        />
      </Suspense>
  );
};

export default Scene;
