

import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

type ScrollManagerProps = {
    section: number;
    onSectionChange: (section: number) => void;
};

export const ScrollManager = ({ section, onSectionChange } : ScrollManagerProps) => {
    
    const data = useScroll();
    const lastScroll = useRef(0);
    const isAnimating = useRef(false);
    
    data.fill.classList.add("top-0")
    data.fill.classList.add("absolute");

    useEffect(() => {
        gsap.to(data.el, {
            duration: 1,
            scrollTop: section * data.el.clientHeight,
            onStart: () => {
                isAnimating.current = true;
            },
            onComplete: () => {
                isAnimating.current = false;
            }
        })

    }, [section]);
    useFrame(() => {
        if(isAnimating.current) {
            lastScroll.current = data.offset;
            return;
        }

        const currentSection = Math.floor(data.offset * data.pages);

        if (data.offset > lastScroll.current) {
            if (currentSection > section) {
                onSectionChange(currentSection);
            }
        } else if (data.offset < lastScroll.current) {
            if (currentSection < section) {
                onSectionChange(currentSection);
            }
        }

        lastScroll.current = data.offset;    
    });

     return null; // If I don't include this it causes errors with typing
};