import Card from 'react-bootstrap/Card';
import Karthik from '../images/karthikeya.jpg';
function Kat() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Karthik} />
      <Card.Body>
        <Card.Title>Karthikeya gupta (B-tech)</Card.Title>
        <Card.Text>
          karthikeyagupta93@gmail.com 
        </Card.Text>
        <Card.Text>   
          Hotel Manager
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default Kat;