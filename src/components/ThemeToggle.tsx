
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <div className="relative">
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="neu-button relative w-16 h-8 rounded-full p-1 transition-all duration-300"
        aria-label="Toggle theme"
      >
        {/* Track */}
        <div className={`absolute inset-1 rounded-full transition-colors duration-300 ${
          isDark ? 'bg-primary/20' : 'bg-secondary/20'
        }`} />
        
        {/* Thumb */}
        <div className={`relative w-6 h-6 rounded-full transition-all duration-300 transform ${
          isDark ? 'translate-x-8 bg-primary' : 'translate-x-0 bg-secondary'
        } flex items-center justify-center shadow-lg`}>
          <Sun 
            className={`absolute w-4 h-4 transition-all duration-300 ${
              !isDark 
                ? 'rotate-0 scale-100 opacity-100' 
                : 'rotate-90 scale-0 opacity-0'
            } ${!isDark ? 'text-yellow-600' : 'text-white'}`} 
          />
          <Moon 
            className={`absolute w-4 h-4 transition-all duration-300 ${
              isDark 
                ? 'rotate-0 scale-100 opacity-100' 
                : '-rotate-90 scale-0 opacity-0'
            } text-white`} 
          />
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
