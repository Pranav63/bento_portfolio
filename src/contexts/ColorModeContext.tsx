import React, { createContext, useContext, useState, useEffect } from 'react';

type ColorMode = 'light' | 'dark';

interface ColorModeContextType {
  colorMode: ColorMode;
  toggleColorMode: () => void;
  colors: {
    background: string;
    cardPrimary: string;
    cardSecondary: string;
    cardHighlight: string;
    text: string;
    textSecondary: string;
    border: string;
  };
}

const ColorModeContext = createContext<ColorModeContextType | undefined>(undefined);

export const ColorModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorMode>('dark');

  // Color palette for both modes
  const colorPalette = {
    dark: {
      background: '#1a2f38',  // Dark teal/green
      cardPrimary: '#233d47',  // Slightly lighter teal
      cardSecondary: '#2d4a54', // Even lighter teal
      cardHighlight: '#34565f', // Highlight teal
      text: '#e4e4e4',
      textSecondary: '#b4b4b4',
      border: '#395c68'
    },
    light: {
      background: '#f0f4f8',  // Light blue-grey
      cardPrimary: '#ffffff',
      cardSecondary: '#f8fafc',
      cardHighlight: '#edf2f7',
      text: '#2d3748',
      textSecondary: '#4a5568',
      border: '#e2e8f0'
    }
  };

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Get current color palette based on mode
  const colors = colorPalette[colorMode];

  useEffect(() => {
    // Update CSS variables when color mode changes
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [colorMode, colors]);

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode, colors }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => {
  const context = useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
};