import Card from 'react-bootstrap/Card';
import sumanth from '../images/sumanth.jpg';
function sumant() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sumanth} />
      <Card.Body>
        <Card.Title>sai sumanth</Card.Title>
        <Card.Text>
          ssumanth449@gmai.com
        </Card.Text>
        <Card.Text>
          Branch Manager
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default sumant;