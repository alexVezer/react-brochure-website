import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='box'>
        <div className="socialM">
          <Link to="/fb"><i className="fab fa-facebook-square"></i></Link>
          <Link to="/"><i className="fab fa-instagram"></i></Link>
          <Link to="/"><i className="fas fa-phone-square-alt"></i></Link>
          <Link to="/"><i className="fab fa-facebook-messenger"></i></Link>
        </div>  
            <Nav className='fBar'>
                <Link to={`${process.env.PUBLIC_URL}/galerie`}>Galerie</Link>
                <Link to={`${process.env.PUBLIC_URL}/despre`}>Despre noi</Link>
                <Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link>
            </Nav>
        <p>Copyright &copy; Alex Vezer 2021</p>
        </footer>
    )
}

export default Footer
