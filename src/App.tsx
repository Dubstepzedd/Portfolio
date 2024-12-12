import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import HamburgerMenu from './components/hamburger_menu';
import { useTheme } from './theme/theme_context';
import { Interface } from './components/interface/interface';
import { Footer } from './components/footer';

const App = () => {
  const { theme } = useTheme();
  const [section, setSection] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);  // Track if user is scrolling
  const [isManualChange, setIsManualChange] = useState<boolean>(false);  // Track if section change is manual

  const docRef = useRef<HTMLDivElement>(null); // For the scrollable div!

  // Refs for each section
  const introRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [introRef, aboutRef, experienceRef, projectRef];

  const handleScroll = () => {
    if (docRef.current && !isManualChange) {
      const offset = docRef.current.scrollTop;
      const middle = window.innerHeight / 2 + offset;
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

      if (currentSection !== -1) {
        setSection(currentSection);
      }
    }
  };

  useEffect(() => {
    if (isManualChange) {
      const selectedRef = sectionRefs[section];
      if (selectedRef?.current) {
        selectedRef.current.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          setIsManualChange(false); // Reset manual change after animation
        }, 1000); // Reset after scroll animation duration
      }
    }
  }, [section, isManualChange]);

  const handleManualSectionChange = (newSection: number) => {
    setIsManualChange(true);
    setSection(newSection);
  };

  return (
    <div
      ref={docRef}
      className={`w-screen h-screen ${theme} overflow-x-hidden`}
      onScroll={() => {
        if (!isManualChange) {
          setIsScrolling(true);
          handleScroll();
        }
      }}
    >
      <HamburgerMenu section={section} onSectionChange={handleManualSectionChange} />
      <Interface sectionRefs={sectionRefs} />
      <Footer />
    </div>
  );
};

export default App;
