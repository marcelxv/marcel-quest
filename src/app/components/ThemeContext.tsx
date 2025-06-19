'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'terminal' | 'medieval';

export interface ThemeColors {
  background: string;
  foreground: string;
  secondary: string;
  border: string;
  boxBackground: string;
  accent: string;
  hover: string;
  easterEgg: string;
}

export interface ThemeConfig {
  name: string;
  colors: ThemeColors;
  fonts: {
    primary: string;
    mono: string;
  };
  effects: {
    scanLines: boolean;
    glitch: boolean;
    textShadow: string;
    boxShadow: string;
  };
}

const themes: Record<Theme, ThemeConfig> = {
  terminal: {
    name: '⌨️ Terminal',
    colors: {
      background: '#000000',
      foreground: '#00ff00',
      secondary: '#88cc88',
      border: '#00aa00',
      boxBackground: 'rgba(0, 20, 0, 0.9)',
      accent: '#00ff00',
      hover: 'rgba(0, 255, 0, 0.1)',
      easterEgg: '#ffff00'
    },
    fonts: {
      primary: "'Courier New', 'Monaco', 'Menlo', monospace",
      mono: "'Courier New', 'Monaco', 'Menlo', monospace"
    },
    effects: {
      scanLines: true,
      glitch: true,
      textShadow: '0 0 5px rgba(0, 255, 0, 0.3)',
      boxShadow: '0 0 10px rgba(0, 255, 0, 0.3), inset 0 0 10px rgba(0, 255, 0, 0.1)'
    }
  },
  medieval: {
    name: '🏰 Medieval RPG',
    colors: {
      background: 'linear-gradient(135deg, #2d1b3d 0%, #1a0f2e 50%, #2d1b3d 100%)',
      foreground: '#f4e6d7',
      secondary: '#e6d7c3',
      border: '#c9a876',
      boxBackground: 'rgba(45, 27, 61, 0.88)',
      accent: '#d4af37',
      hover: 'rgba(196, 164, 110, 0.12)',
      easterEgg: '#cd7f8a'
    },
    fonts: {
      primary: "var(--font-uncial-antiqua), var(--font-cinzel), 'Luminari', 'Papyrus', 'Times New Roman', serif",
      mono: "'Courier New', monospace"
    },
    effects: {
      scanLines: false,
      glitch: false,
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7), 0 0 8px rgba(212, 175, 55, 0.3)',
      boxShadow: '0 0 20px rgba(196, 164, 110, 0.25), inset 0 0 20px rgba(196, 164, 110, 0.08)'
    }
  }
};

interface ThemeContextType {
  theme: Theme;
  themeConfig: ThemeConfig;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('terminal');

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('marcel-quest-theme') as Theme;
    if (savedTheme && themes[savedTheme]) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem('marcel-quest-theme', theme);
    
    // Apply theme to CSS custom properties
    const themeConfig = themes[theme];
    const root = document.documentElement;
    
    root.style.setProperty('--theme-background', themeConfig.colors.background);
    root.style.setProperty('--theme-foreground', themeConfig.colors.foreground);
    root.style.setProperty('--theme-secondary', themeConfig.colors.secondary);
    root.style.setProperty('--theme-border', themeConfig.colors.border);
    root.style.setProperty('--theme-box-bg', themeConfig.colors.boxBackground);
    root.style.setProperty('--theme-accent', themeConfig.colors.accent);
    root.style.setProperty('--theme-hover', themeConfig.colors.hover);
    root.style.setProperty('--theme-easter-egg', themeConfig.colors.easterEgg);
    root.style.setProperty('--theme-font-primary', themeConfig.fonts.primary);
    root.style.setProperty('--theme-font-mono', themeConfig.fonts.mono);
    root.style.setProperty('--theme-text-shadow', themeConfig.effects.textShadow);
    root.style.setProperty('--theme-box-shadow', themeConfig.effects.boxShadow);

    // Add/remove body classes for theme-specific effects
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'terminal' ? 'medieval' : 'terminal');
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      themeConfig: themes[theme], 
      toggleTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 