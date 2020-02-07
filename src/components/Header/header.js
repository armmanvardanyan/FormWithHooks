import React from 'react';
import './header.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
const Header = () =>{
    
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                    <Navbar.Brand as ={Link} to="/" className="font-weight-bold ">NewHit</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/hits">Хиты</Nav.Link>
                            <Nav.Link as={Link} to="/best">Популярные</Nav.Link>
                            <Nav.Link as={Link} to="/new">Новинки</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/profile">My Profile</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
    )
}

export default Header