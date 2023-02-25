
import Card from 'react-bootstrap/Card';
import Ach from '../images/achyuth.jpg';
function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Ach} />
      <Card.Body>
        <Card.Title>Achyuth (Btech, Mtech)</Card.Title>
        <Card.Text>
          achyuthwhitedevil@gmail.com
        </Card.Text>
        <Card.Text>
          Founder of South Paradise
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default BasicExample;