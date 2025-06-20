
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
    // Create initial snowflakes
    const initialSnowflakes: Snowflake[] = [];
    for (let i = 0; i < 80; i++) {
      initialSnowflakes.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.6 + 0.3,
        drift: Math.random() * 0.5 - 0.25,
      });
    }
    setSnowflakes(initialSnowflakes);

    const animateSnowflakes = () => {
      setSnowflakes(prev => prev.map(flake => ({
        ...flake,
        y: flake.y > window.innerHeight + 10 ? -10 : flake.y + flake.speed,
        x: flake.x + flake.drift + Math.sin(flake.y * 0.01) * 0.5,
      })));
    };

    const interval = setInterval(animateSnowflakes, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-white dark:bg-gray-200"
          style={{
            left: `${flake.x}px`,
            top: `${flake.y}px`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.5)',
          }}
        />
      ))}
    </div>
  );
};

export default SnowflakeBackground;
