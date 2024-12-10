import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import HamburgerMenu from './components/hamburger_menu';
import { useTheme } from './theme/theme_context';
import { Interface } from './components/interface/interface';

const App = () => {
  const { theme } = useTheme();
  const [section, setSection] = useState<number>(0);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const docRef = useRef<HTMLDivElement>(null); // For the scrollable div!

  // These are for the Interface section, but are needed here to calculate the scroll position
  const introRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [introRef, aboutRef, experienceRef, projectRef, contactRef];

  const handleScroll = () => {
    if(docRef.current) {
      const offset = docRef.current.scrollTop;
      const middle = window.innerHeight / 2 +  offset;
      const sectionPositions = sectionRefs.map((ref) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          return rect.top + offset;
        }
        return 0;
      });

      const currentSection = sectionPositions.findIndex((pos, index) => {
        const nextPos = sectionPositions[index + 1] || Infinity;
        return middle >= pos && middle < nextPos;
      });

      setSection(currentSection);
    }

  }

  useEffect(() => {
    const selectedRef = sectionRefs[section];
    if (selectedRef?.current) {
      selectedRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [section]);

  return (
    <div ref={docRef} className={`w-screen h-screen ${theme} overflow-x-hidden`} onScroll={handleScroll}>
      <HamburgerMenu section={section} onSectionChange={setSection} />
      <Interface setSection={setSection} sectionRefs={sectionRefs} />
      <div>Scroll Position: {scrollPosition}px</div> {/* Display scroll position */}
    </div>
  );
}

export default App;
