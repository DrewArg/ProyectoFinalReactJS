import React from 'react'
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">BPRA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#reglamento">Reglamento</Nav.Link>
                            <NavDropdown title="Productos" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Mazos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Cartas</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#carrito">
                                Mi Carrito
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}

export default NavBar