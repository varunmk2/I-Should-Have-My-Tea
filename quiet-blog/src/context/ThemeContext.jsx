import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const themes = ['ocean', 'library', 'city', 'train'];
export const modes = ['light', 'dark'];

export const themePalettes = {
  ocean: {
    light: {
      bg: '#c8e0f5',
      bgLight: '#d8ecff',
      primary: '#2e5a8a',
      accent: '#1e7ecc',
      accentLight: '#5aabff',
      text: '#0f2a4a',
      textMuted: '#4a7aaa',
      border: '#7a9acc',
      card: '#e0ecff',
    },
    dark: {
      bg: '#0f1a2e',
      bgLight: '#1a2f4a',
      primary: '#3a7edc',
      accent: '#5aabff',
      accentLight: '#8acaff',
      text: '#d4e8f8',
      textMuted: '#8aafcc',
      border: '#3a5a8a',
      card: '#1a2f4a',
    },
  },
  library: {
    light: {
      bg: '#f5e8d8',
      bgLight: '#faf5e8',
      primary: '#8a6a4a',
      accent: '#b8794a',
      accentLight: '#d4a574',
      text: '#3a2a1a',
      textMuted: '#7a5a3a',
      border: '#c4a080',
      card: '#faf5e8',
    },
    dark: {
      bg: '#2a1f15',
      bgLight: '#3a2f25',
      primary: '#d4a574',
      accent: '#e8c4a0',
      accentLight: '#ffd9b3',
      text: '#f5e8d8',
      textMuted: '#b8a080',
      border: '#5a4a3a',
      card: '#3a2f25',
    },
  },
  city: {
    light: {
      bg: '#e8d4f5',
      bgLight: '#f0e0ff',
      primary: '#6a4a8a',
      accent: '#8a5acc',
      accentLight: '#b08aff',
      text: '#2a1a4a',
      textMuted: '#6a4a8a',
      border: '#a88acc',
      card: '#f0e0ff',
    },
    dark: {
      bg: '#1f152a',
      bgLight: '#2a1f3a',
      primary: '#b08aff',
      accent: '#c8a0ff',
      accentLight: '#e0bbff',
      text: '#e8d4f5',
      textMuted: '#9a7aaa',
      border: '#4a3a6a',
      card: '#2a1f3a',
    },
  },
  train: {
    light: {
      bg: '#f5d8e8',
      bgLight: '#fae0f0',
      primary: '#8a4a6a',
      accent: '#d45a8a',
      accentLight: '#ff8aaa',
      text: '#3a1a2a',
      textMuted: '#7a4a6a',
      border: '#c4809a',
      card: '#fae0f0',
    },
    dark: {
      bg: '#2a151f',
      bgLight: '#3a1f2f',
      primary: '#ff8aaa',
      accent: '#ff9db8',
      accentLight: '#ffb8d4',
      text: '#f5d8e8',
      textMuted: '#b88aaa',
      border: '#5a3a4a',
      card: '#3a1f2f',
    },
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('ocean');
  const [mode, setMode] = useState('light');

  const palette = themePalettes[theme][mode];

  const toggleTheme = (newTheme) => setTheme(newTheme);
  const toggleMode = () => setMode((m) => (m === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, setTheme: toggleTheme, mode, toggleMode, palette }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be inside ThemeProvider');
  return ctx;
}
