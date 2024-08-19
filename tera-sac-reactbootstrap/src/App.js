import React from 'react';
import { Offcanvas, Container, Navbar, Nav } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TelaDeLogin() {
  return (
    <>
      {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((x) => (
        <Navbar key={x} expand={x} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="inicio">Tera Sac</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${x}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${x}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${x}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${x}`}>
                  Opcoes
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                </Nav>          
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}