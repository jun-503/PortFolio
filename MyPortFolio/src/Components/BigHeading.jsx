
import { useContext } from 'react';
import '../styles/Heading.css'; // Import the CSS file for custom styling
import { ThemeContext } from '../context/ThemeContext';

const BigHeading = ({text}) => {
    const {isDarkTheme} = useContext(ThemeContext)
    return (
        <div className="big-heading-container">
            <h1 className={isDarkTheme ?'big-heading-dark':'big-heading'}>{text}</h1>
        </div>
    );
}

export default BigHeading;
