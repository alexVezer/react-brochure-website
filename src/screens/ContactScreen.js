import Header from "../components/Header";
import React, { Fragment, useState } from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Map from "../components/Map";

const ContactScreen = () => {
    const [openForm, setOpenForm] = useState(false)

    const openFormHandler = () => {
        setOpenForm(!openForm);
    }
    
    return (
        <Fragment>
            <Header/>
            <Container className='pageTitle'>
            <h2>Contact</h2>
            </Container>
            <Container>
                        
            <Row className='contact'>
            <Col md="5">
            <ul className='box adresa'>
            <li>
                <h4>S.C. Logo S.R.L.</h4>
            </li>
            <li>
            <label>Adresa: </label><address>Lorem ipsum dolor sit amet</address>
            </li>
            <li>
            <label>Telefon: </label><phone>0040 732 078 541</phone>
            </li>
            <li>
            <label>Email: </label><email>contact@example.com</email>
            </li>
            <li>
            <label>Program: </label><span>L - V: 9:00 - 16:00</span>
            </li>
            </ul>
            </Col>
            
            <Col md="6" className='paddT'>
            
            <Map/>
            </Col>
            </Row>
            </Container>
            <Container className='padd'>
            <Row>
            <button className='box Btn' onClick={openFormHandler}>Trimite-ne un mesaj</button>
            { openForm && (

                <Form className="box padd">
                <Form.Group className="mb-3" controlId="email.contact">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="mesaj.contact">
                <Form.Label>Mesajul tau:</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <button className='box Btn' type="submit">Trimite</button>
                </Form>
                )}
            </Row>
            </Container>

        </Fragment>
    )
}

export default ContactScreen
