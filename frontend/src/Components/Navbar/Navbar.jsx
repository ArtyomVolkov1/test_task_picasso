import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand>Infinity</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Created by: Artyom
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navbars;