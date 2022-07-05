import React, { useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MsgContext from '../context/msgContext';

const Home = () => {

  const {msg, setMsg} = useContext(MsgContext);

  return (
    <section>
      <section className="header-section sticky-top bg-gray">
        <Container>
          <Row className='d-flex justify-content-beetween align-items-center'>
            <Col>
              <div className="logo-area">
                <img src="https://yt3.ggpht.com/TWh3tWl8WHJ4rFbx8HjNLUt8cXfnbFqSfkH1RNydL17mQ_oXQInHtQTQGOzd2Qb_ip7DO2RvDA=s88-c-k-c0x00ffffff-no-rj" alt="" />
              </div>
            </Col>
            <Col>
              <div className="menu-area">
                <ul className='d-flex justify-content-end'>
                  <li><a href="">Home</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Service</a></li>
                  <li><a href="">Conatct</a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='banner-section'>
        <Container>
          <Row>
            <Col lg="6">
              <div className="banner-let">
                <h2 className='fw-bold'>MERN-STACK DEVELOPER</h2>
                <h4 className='my-3'>Hi, I'm Sajjadur Rahman Sajjad</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum, mollitia dignissimos commodi placeat ea animi, quisquam eum nesciunt esse eveniet est autem libero quis?</p>
                <a className='btn btn-info mt-2' href="">Hire Me</a>
              </div>
            </Col>
            <Col lg="6">
              <div className="banner-img">
                <img className='w-100' src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <Row>
          <Col>
          <div className="my-3">
          <h3> { msg } </h3>
            <label htmlFor="">Home Page</label>
            <input type="text" value={msg} onChange={ (e) => setMsg(e.target.value )} className='form-control' placeholder='Type your text' />
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Home;