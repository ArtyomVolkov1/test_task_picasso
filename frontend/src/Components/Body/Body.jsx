import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Posts from './Posts/Posts';

const Body = () => {
  return (
    <Container className='mt-3'>
      <Row className='justify-content-md-center'>
        <Col sm={7}>
          <Posts />
        </Col>
      </Row>
    </Container>
  );
};

export default Body;
