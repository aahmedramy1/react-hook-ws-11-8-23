import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PetsCard = ({ pet }) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pet.photo} />
            <Card.Body>
                <Card.Title>{pet.name}, {pet.type}, {pet.race}</Card.Title>
                <Card.Text>
                    {pet.location}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PetsCard;