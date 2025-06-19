'use client';

import { useTheme } from './ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const getThemeDisplay = () => {
    if (theme === 'terminal') {
      return {
        emoji: '⌨️',
        flag: '🇺🇸',
        name: 'Terminal'
      };
    } else {
      return {
        emoji: '🏰',
        flag: '🇬🇧', 
        name: 'Medieval'
      };
    }
  };

  const currentTheme = getThemeDisplay();
  const nextTheme = theme === 'terminal' ? 'Medieval RPG' : 'Terminal';

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle p-2 sm:p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105"
      style={{
        backgroundColor: 'var(--theme-box-bg)',
        borderColor: 'var(--theme-border)',
        color: 'var(--theme-foreground)',
        backdropFilter: 'blur(10px)'
      }}
      title={`Switch to ${nextTheme} theme`}
    >
      <div className="flex items-center gap-1 sm:gap-2">
        <span className="text-base sm:text-lg">
          {currentTheme.emoji}
        </span>
        <span className="hidden sm:inline text-xs sm:text-sm font-bold">
          {currentTheme.name}
        </span>
      </div>
    </button>
  );
} 