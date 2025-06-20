
import React, { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const SnowflakeBackground = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Create initial snowflakes
    const initialSnowflakes: Snowflake[] = [];
    for (let i = 0; i < 50; i++) {
      initialSnowflakes.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }
    setSnowflakes(initialSnowflakes);

    const animateSnowflakes = () => {
      setSnowflakes(prev => prev.map(flake => ({
        ...flake,
        y: flake.y > window.innerHeight ? -10 : flake.y + flake.speed,
        x: flake.x + Math.sin(flake.y * 0.01) * 0.5,
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
          className="absolute rounded-full bg-foreground"
          style={{
            left: `${flake.x}px`,
            top: `${flake.y}px`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default SnowflakeBackground;
