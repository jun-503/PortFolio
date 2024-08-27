
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import '../styles/skills.css'; // Import your CSS file for custom styling
import BigHeading from './BigHeading';

const skills = [
    { name: 'JavaScript', percentage: 70 },
    { name: 'React', percentage: 85 },
    { name: 'Python', percentage: 80 },
    { name: 'CSS', percentage: 75 },
    { name: 'Django', percentage: 50 },
    { name: 'HTML', percentage: 95 },
    { name: 'C#', percentage: 65 },
    { name: 'C++', percentage: 60 },
    { name: 'MySQL', percentage: 70 }
];

const Skills = () => {
    return (
        <Container className="skills-container">
            <Row style={{color:'#000814'}}>
                <Col md={12}><BigHeading text="Skills"/></Col>
            </Row>
            <Row>
                {skills.map((skill, index) => (
                    <Col md={4} className="mb-4" key={index}>
                        <div className="skill-item">
                            <div className="skill-name">
                                <h5>{skill.name}</h5>
                            </div>
                            <ProgressBar 
                                now={skill.percentage} 
                                
                                className="mb-2"
                            />
                            <p className="skill-percentage">{skill.percentage}%</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Skills;
