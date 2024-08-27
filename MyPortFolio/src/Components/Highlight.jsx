// src/components/Highlight.jsx


import PropTypes from 'prop-types';
import '../styles/Highlight.css'; 
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
const Highlight = ({ children }) => {
  const {isDarkTheme} = useContext(ThemeContext)
  return (
    <div className={isDarkTheme?"highlight-dark":"highlight"}>
      {children}
    </div>
  );
};

Highlight.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Highlight;
