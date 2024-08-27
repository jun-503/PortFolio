
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Linkedin, Github } from 'react-bootstrap-icons';
import '../styles/Footer.css'; // Import your CSS file for custom styling
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
    const {isDarkTheme} = useContext(ThemeContext)
    return (
        <footer className={isDarkTheme ? 'footer-dark':'footer'}>
            <Container>
                <Row>
                    <Col md={4} className="text-center text-md-left mb-3 mb-md-0">
                        <h5 className="footer-heading">About Me</h5>
                        <p className="footer-text" style={{color:'#aaa'}}>
                            I am Muhammad Junaid Zia, a passionate Software Developer. Connect with me on social media!
                        </p>
                    </Col>
                    <Col md={4} className="text-center mb-3 mb-md-0">
                        <h5 className="footer-heading">Quick Links</h5>
                        <ul className="footer-links list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/resume">Resume</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                        </ul>
                    </Col>
                    <Col md={4} className="text-center text-md-right">
                        <h5 className="footer-heading">Follow Me</h5>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Facebook size={30} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Twitter size={30} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={30} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <Github size={30} />
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="text-center">
                        <p className="footer-copy">&copy; {new Date().getFullYear()} Muhammad Junaid Zia. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;

