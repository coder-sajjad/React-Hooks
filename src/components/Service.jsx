import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MsgContext from '../context/msgContext';

const Service = () => {

  const {msg, setMsg, skill, location, email, name } = useContext(MsgContext);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="my-3">
              <label htmlFor="">Service Page</label>
              <input type="text" value={ msg } onChange={ (e) => setMsg(e.target.value)} className='form-control' placeholder='Type your text' />
              <h3> { msg } </h3>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='my-5'>
        <Row>
          <Col>
            <ul>
              {
                skill.map( item => 
                  <li>{item}</li>
                  )
              }
            </ul>
          </Col>
          <Col>
              <ul>
                {
                  name.map( item => 
                    <li>{item}</li>
                  )
                }
              </ul>
          </Col>
          <Col>
            <ul>
                {
                  email.map( item => 
                    <li>{item}</li>
                  )
                }
            </ul>
          </Col>
          <Col>
            <ul>
              {
                location.map( item => 
                  <li>{item}</li>
                )
              }
            </ul>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <div className="footer text-center py-3">
              <h6>All Right Reserved By S.R Sajjad</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Service;