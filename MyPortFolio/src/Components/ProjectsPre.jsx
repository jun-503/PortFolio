import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import BigHeading from "./BigHeading";
import Card_Temp from "./Card";
import '../styles/projectspre.css'
import { Link } from "react-router-dom";

const ProjectsPre = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('src/data/Projects.json');
        if (response.status === 200) {
          const projectsData = response.data; 
          setProjects(projectsData.slice(0,3));
        }
      } catch (error) {
        console.error("Error fetching projects data", error);
        alert("Error fetching projects data");
      }
    };
    fetchData();
  }, []);

  return (
    <Container className="projects-pre">
      <Row>
        <BigHeading text="Projects" />
      </Row>
      <Row className="gy-4">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Card_Temp
                name={project.name}
                image={project.image}
                description={project.description}
              />
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <p>No Projects found.</p>
          </Col>
        )}
      </Row>
      <Row>
        <Col className="text-center mt-4">
          <Link to="/projects" className="btn btn-primary" style={{backgroundColor: '#323232',borderColor: '#14213d' }}>See More</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsPre;
