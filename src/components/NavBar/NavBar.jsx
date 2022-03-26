import React from 'react'
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Widget from '../CartWidget/CartWidget';
import '../NavBar/NavBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavLink className="brand" to="/">BPRA</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <div className="navLink">
                                <NavLink className="navLink__child" to="/type/Animal">Animal</NavLink>
                                <NavLink className="navLink__child" to="/type/Alimento">Alimento</NavLink>
                                <NavLink className="navLink__child" to="/type/Habilidad">Habilidad</NavLink>
                                <NavLink className="navLink__child" to="/type/Habitat">Hábitat</NavLink>
                            </div>
                        </Nav>
                        <Nav>
                            <NavLink className="cart" eventKey={2} to="/cart">
                                <Widget />
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}

export default NavBar