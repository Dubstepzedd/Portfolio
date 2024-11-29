import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Text3D from '../components/fiber/text-3d';

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
        <directionalLight position={[5, 0, 0]} />
        <Text3D
          text="JOEL"
          position={[0, 0, 0]}
          size={2}
          depth={0.7}
          color="red"
          ref={textRef}
          center={true}
        />
      </Suspense>
  );
};

export default Scene;
