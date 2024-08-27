import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Card_Temp.css'; // Import the CSS file for custom styling

function Card_Temp({ name, image, description }) {
    return (
        <Card className="project-card">
            <Card.Img variant="top" src={image} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{name}</Card.Title>
                <Card.Text className="flex-grow-1">
                    {description}
                </Card.Text>
                <Button variant="primary" className="mt-auto">Github</Button>
            </Card.Body>
        </Card>
    );
}

export default Card_Temp;
