import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import BigHeading from "./BigHeading";

import Card_Temp2 from "./card2";
import '../styles/certificationspre.css'
import { Link } from "react-router-dom";

const CertificationPre = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('src/data/Cerifications.json');
        if (response.status === 200) {
          const cert_data = response.data; 
          setCertifications(cert_data.slice(0,3));
        }
      } catch (error) {
        console.error("Error fetching certifications data", error);
        alert("Error fetching certifications data");
      }
    };
    fetchData();
  }, []);

  return (
    <Container className="certifications-pre">
      <Row>
        <BigHeading text="Certification" />
      </Row>
      <Row className="gy-4">
        {certifications.length > 0 ? (
          certifications.map((certification, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Card_Temp2
                name={certification.name}
                image={certification.image}
                description={certification.description}
              />
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <p>No certifications found.</p>
          </Col>
        )}
      </Row>
      <Row>
        <Col className="text-center mt-4">
          <Link to="/certifications" className="btn btn-primary" style={{backgroundColor:'#323232',borderColor: '#14213d' }}>See More</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default CertificationPre;
