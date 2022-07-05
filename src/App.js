import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Service from './components/Service';
import MsgContext from './context/msgContext';

function App() {

  const [msg, setMsg] = useState('');

  return (
    <>
      <MsgContext.Provider value={{
        msg, 
        setMsg,
        skill : ['MERN-Stack Developer', 'PHP Developer', 'BlockChain Developer'],
        location : ['Dhaka', 'Mirpur', 'Uttara'],
        email : ['mern@mgail.com', 'php@gmail.com', 'clockchain@gmail.com'],
        name : ['Sajjad', 'S.R Sajjad', 'Sajjadur Rahmna']
      }}>

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
        
      </MsgContext.Provider>
    </>
  );
}

export default App;
