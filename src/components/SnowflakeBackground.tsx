
import React, { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  drift: number;
}

const SnowflakeBackground = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const initialSnowflakes: Snowflake[] = [];
    for (let i = 0; i < 50; i++) { // Reduced from 80 to 50
      initialSnowflakes.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1.5, // Slightly smaller
        speed: Math.random() * 1.5 + 0.8, // Slightly slower
        opacity: Math.random() * 0.4 + 0.2, // Reduced opacity
        drift: Math.random() * 0.3 - 0.15,
      });
    }
    setSnowflakes(initialSnowflakes);

    const animateSnowflakes = () => {
      setSnowflakes(prev => prev.map(flake => ({
        ...flake,
        y: flake.y > window.innerHeight + 10 ? -10 : flake.y + flake.speed,
        x: flake.x + flake.drift + Math.sin(flake.y * 0.01) * 0.3,
      })));
    };

    const interval = setInterval(animateSnowflakes, 60); // Slightly slower animation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-gray-800 dark:bg-gray-200"
          style={{
            left: `${flake.x}px`,
            top: `${flake.y}px`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            boxShadow: '0 0 4px rgba(128, 128, 128, 0.2)',
          }}
        />
      ))}
    </div>
  );
};

export default SnowflakeBackground;
