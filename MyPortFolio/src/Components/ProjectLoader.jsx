import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { Container,Row,Col } from "react-bootstrap"
import Card_Temp from "./Card"
import BigHeadingPage from "./BigHeadingPage"


const Projects = () => {
    const projectsData = useLoaderData()
    const [projects,setProjects]  = useState([])

    useEffect(()=>{
        setProjects(projectsData)
    },[projectsData])

    return(
        <Container className="projects-pre">
        <Row>
          <BigHeadingPage text="Projects" />
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
        
      </Container>
    )

}


export default Projects