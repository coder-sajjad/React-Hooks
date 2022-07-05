import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Service from './components/Service';

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Home></Home>
            <About></About>
            <Contact></Contact>
            <Service></Service>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
