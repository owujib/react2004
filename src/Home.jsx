import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import './home.css';
import './App.css';

const Home = () => {
  return (
    <div className="home">
      <Jumbotron>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
          exercitationem eligendi necessitatibus, a voluptas eum placeat
          repudiandae provident earum voluptatibus officiis eaque vel! Saepe
          dolorem praesentium, blanditiis odio enim quibusdam!
        </p>
        <Link to="#" className="btn btn-info shadow">
          read more
        </Link>
      </Jumbotron>
      <Row className="m-4">
        <Col className="shadow m-3" md={3}>
          <h3>title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            error!
          </p>
        </Col>
        <Col className="shadow m-3" md={3}>
          <h3>title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            error!
          </p>
        </Col>
        <Col className="shadow m-3" md={3}>
          <h3>title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            error!
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
