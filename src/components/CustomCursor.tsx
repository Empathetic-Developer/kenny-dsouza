import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false); // New state

  useEffect(() => {
    // Detect touch device on mount
    const checkIfTouchDevice = () => {
      // Check for common touch events (less reliable than modern pointer events)
      const hasTouchEvents = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      // Modern way using matchMedia for pointer (coarse means touch, fine means mouse)
      const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
      
      setIsTouchDevice(hasTouchEvents || hasCoarsePointer);
    };

    checkIfTouchDevice();
    window.addEventListener('resize', checkIfTouchDevice); // Re-check on resize

    // If it's a touch device, just return early and don't set up listeners
    if (isTouchDevice) {
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    document.addEventListener('mousemove', updatePosition);

    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('resize', checkIfTouchDevice); // Clean up resize listener
      if (isTouchDevice) { // Only remove if listeners were added
        return;
      }
      document.removeEventListener('mousemove', updatePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isTouchDevice]); // Re-run effect if isTouchDevice changes

  // Only render the cursor if it's not a touch device
  if (isTouchDevice) {
    return null;
  }

  return (
    <div
      className={`cursor-professional ${isHovered ? 'hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;