
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/AboutMe.css'; // Import your CSS file for custom styling
import BigHeading from './BigHeading';

const AboutMe = () => {
    return (
        <Container fluid className="about-me-container">
            <Row className="align-items-center text-center">
                <Col md={6} className="mb-4 mb-md-0">
                    <img
                        src="src\Components\male-businessman-character-sitting-office-workplace-computer-monitor-desk.png"
                        alt="About Me"
                        className="img-fluid about-me-image"
                    />
                </Col>
                <Col md={6} className="mt-5 about-me-text" >
                    <BigHeading text="About Me"/>
                    <p >
                        Hello! I am Muhammad Junaid Zia, a passionate Software Developer
                        with experience in building dynamic and user-friendly web applications.
                        I am a CS Student at UET, Lahore <br/> <br/> I am proficient in various programming languages such as   C, C++, Java, Python, HTML, CSS, PHP, and JavaScript. <br /> <br/>Whenever possible, I also apply my passion for developing products with   Modern Javascript Library and Frameworks. <br/> <br/>In my free time, I enjoy learning new technologies and  building new web technologies and products.
                    </p>
                    
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;
