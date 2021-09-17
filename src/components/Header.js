import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar className='box nBar' expand='md'>
        <Container>
            <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link to={`${process.env.PUBLIC_URL}/servicii`}>Servicii</Link>
                    <Link to={`${process.env.PUBLIC_URL}/galerie`}>Galerie</Link>
                    <Link to={`${process.env.PUBLIC_URL}/despre`}>Despre noi</Link>
                    <Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>       
        </Navbar>
    )
}

export default Header
