import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MsgContext from '../context/msgContext';

const Contact = () => {

  const { msg, setMsg } = useContext(MsgContext);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="my-3">
              <label htmlFor="">Contact Page</label>
              <h3> { msg } </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact;