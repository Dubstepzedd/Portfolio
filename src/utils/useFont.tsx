import { useLoader } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/Addons.js';

type UseFontProp = {
  src: string;
};

export const useFont = ({src} : UseFontProp) => {
  return useLoader(FontLoader, src);
}