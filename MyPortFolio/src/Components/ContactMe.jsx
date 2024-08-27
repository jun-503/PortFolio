import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BigHeading from './BigHeading';
import React from 'react';
import '../styles/ContactMe.css';
import { useState } from 'react';

function Contactme() {
    const [formData, setFields] = useState({
        name: '',
        email: '',
        message: ''
    });

    const setFieldsData = (e) => {
        const { name, value } = e.target;
        setFields(prevFields => ({
            ...prevFields,
            [name]: value
        }));
    };

    const [result, setResult] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "3c6c7917-89ff-4c23-9ee1-876e47a4faf2");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                setIsSuccess(true);
                event.target.reset();
                setFields({ name: '', email: '', message: '' });
                setTimeout(() => {
                    setResult(""); // Clear message after a delay
                    setIsSuccess(false);
                }, 5000);
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Submission error", error);
            setResult("An error occurred. Please try again.");
        }
    };

    return (
        <Container className="contact-me-container">
            <Row>
                <Col md={6}>
                    <Row className='heading'>
                        <BigHeading text="Contact ME" />
                    </Row>
                    <Row className='pb-5 align-items-center justify-content-center'>
                        <Form className='contactme-form' onSubmit={onSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Name" value={formData.name} onChange={setFieldsData} required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" value={formData.email} onChange={setFieldsData} required/>
                                <Form.Text className="text-muted">
                                    We will never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Write your query</Form.Label>
                                <Form.Control as="textarea" name="message" rows={3} value={formData.message} onChange={setFieldsData} required/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            {result && <div className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'} mt-3`} role="alert">
                                {result}
                            </div>}
                        </Form>
                    </Row>
                </Col>
                <Col md={6}>
                    {/* You can add any other content here */}
                </Col>
            </Row>
        </Container>
    );
}

export default Contactme;
