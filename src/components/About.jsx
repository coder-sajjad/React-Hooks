import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MsgContext from '../context/msgContext';

const About = () => {

  const { msg, setMsg } = useContext(MsgContext);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="my-3">
              <h3> { msg } </h3>
              <label htmlFor="">About Page</label>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About;