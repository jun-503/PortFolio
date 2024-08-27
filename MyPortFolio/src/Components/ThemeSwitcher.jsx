// src/components/ThemeSwitcher.jsx

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/ThemeSwitcher.css'; // Import the CSS file for styling

const ThemeSwitcher = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switcher">
      <input
        type="checkbox"
        id="theme-toggle"
        checked={isDarkTheme}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-toggle" className="theme-switcher-label"></label>
    </div>
  );
};

export default ThemeSwitcher;
