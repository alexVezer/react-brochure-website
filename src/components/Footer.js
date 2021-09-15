import React from 'react'
import { Row } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
    <Row>
        <Link to={`${process.env.PUBLIC_URL}/galerie`}>Galerie</Link>
        <Link to={`${process.env.PUBLIC_URL}/despre`}>Despre noi</Link>
        <Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link>
    </Row>
        <div className="socialM">
          <Link to=""><i className="fab fa-facebook-square"></i></Link>
          <Link to=""><i className="fab fa-instagram"></i></Link>
          <Link to=""><i className="fas fa-phone-square-alt"></i></Link>
          <Link to=""><i className="fab fa-facebook-messenger"></i></Link>
        </div>  
        <h6>Copyright &copy; Alex Vezer 2021</h6>
        
        </footer>
    )
}

export default Footer
