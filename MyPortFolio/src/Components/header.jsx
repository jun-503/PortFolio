
import { Navbar, Container, Nav } from "react-bootstrap";
import { House, Code, FileText, Shield, Journal } from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
import '../styles/Header.css';  // Import the CSS file
import ThemeSwitcher from "./ThemeSwitcher";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
    const navigate = useNavigate();
    const {isDarkTheme} = useContext(ThemeContext)
    const handleSelect = (eventKey) => {
        if (eventKey) {
            navigate(`/${eventKey}`);
        }
        else{
            navigate('/')
        }
    };

    return (
        <>
            <Navbar expand="lg" data-bs-theme="dark" className={!isDarkTheme ? 'Default-navbar':'NotDefault-navbar'} fixed="top" >
                <Container>
                    <Navbar.Brand href="/" style={{color:'gold',fontSize:'1.5rem' }}>Muhammad Junaid Zia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" onSelect={handleSelect}>
                            <Nav.Link eventKey="" className="px-4 custom-nav-link">
                                <House className="me-2" /> Home
                            </Nav.Link>
                            <Nav.Link eventKey="projects" className="px-4 custom-nav-link">
                                <Code className="me-2" /> Projects
                            </Nav.Link>
                            <Nav.Link eventKey="resume" className="px-4 custom-nav-link">
                                <FileText className="me-2" /> Resume
                            </Nav.Link>
                            <Nav.Link eventKey="certifications" className="px-4 custom-nav-link">
                                <Shield className="me-2" /> Certifications
                            </Nav.Link>
                            <Nav.Link eventKey="blogs" className="px-4 custom-nav-link">
                                <Journal className="me-2" /> Blogs
                            </Nav.Link>
                            <Nav.Item>
                                <ThemeSwitcher />
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
