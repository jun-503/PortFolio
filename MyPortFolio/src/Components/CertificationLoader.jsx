import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { Container,Row,Col } from "react-bootstrap"
import Card_Temp2 from "./card2"
import BigHeadingPage from "./BigHeadingPage"


const Certifications = () => {
    const certData = useLoaderData()
    const [certifications,setCertification]  = useState([])

    useEffect(()=>{
        setCertification(certData)
    },[certData])

    return(
        <Container className="certifications-pre">
        <Row>
          <BigHeadingPage text="certifications" />
        </Row>
        <Row className="gy-4">
          {certifications.length > 0 ? (
            certifications.map((project, index) => (
              <Col key={index} xs={12} sm={6} md={4}>
                <Card_Temp2
                  name={project.name}
                  image={project.image}
                  description={project.description}
                />
              </Col>
            ))
          ) : (
            <Col xs={12}>
              <p>No certifications found.</p>
            </Col>
          )}
        </Row>
        
      </Container>
    )

}


export default Certifications