
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Linkedin, Github } from 'react-bootstrap-icons'; // Correct import names
import '../styles/Introduction.css'; // Import your CSS file for custom styling
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Introduction = () => {
    const{isDarkTheme} = useContext(ThemeContext)
    const myPic = '/MyPic.jpg'
    return (
        <Container fluid className="mt-5 intro-container">
            <Row className="align-items-center text-center">
                <Col md={6} className="mb-4 mb-md-0">
                    <img
                        src={myPic} // Replace with your image URL
                        alt="Muhammad Junaid Zia"
                        className="img-fluid rounded-circle my-custom-img"
                        
                    />
                </Col>
                <Col md={6} className={isDarkTheme?'intro-para-dark':'intro-para'}>
                    <h1 >Hey, I am Muhammad Junaid Zia</h1>
                    <p>I am a Software Developer.</p>
                </Col>
            </Row>
            <Row className="text-center mt-4">
                <Col>
                    <div className={isDarkTheme ? 'social-media-icons-dark':'social-media-icons'}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <Facebook size={40} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter size={40} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={40} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <Github size={40} /> {/* Ensure the icon name is correct */}
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Introduction;
