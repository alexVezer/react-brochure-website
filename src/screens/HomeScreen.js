import React, { Fragment } from 'react'
import { Button, Container, Card, Row, Col } from 'react-bootstrap'
import Box from '../components/Box'
import data from '../data/data.js'

const HomeScreen = () => {
    const {intro, out, cards} = data

    const onClickHandler = () => {
        console.log('click')
    }
    
    return (
        <Fragment>
        <div className='background'>
        </div>
        <Container>
        <section id='section-A'>
        <Box content='Logo' cls='logo'/>
        <Box content={intro} cls='intro padd'/>
        <Button className='box Btn' id='introBtn' onClick={onClickHandler}>See our work</Button>
         </section>
         </Container> 
         <section className='paddT' id='section-B'>
         <Container>
         <Row id='cards'>
         {cards.map( card => (
        
            <Card key={card.title} className = 'box'>
             <Card.Body className='myCard'>
                <Card.Img variant='top' className='cardImg' src={card.image}/>
                <div className='cardDesc'>
                <Button className='box cardBtn'>{card.title}</Button>
                <Card.Text>{card.desc}</Card.Text>
                </div>
            </Card.Body>
            </Card>
             
         ))}
         </Row>
         </Container>      
         </section>

         <div className='background' id='out'>
         <Container>  
        
         <section id='section-C'>
            <Box content={out} cls='out padd'/>
            <Button className='box Btn' id='outBtn' onClick={onClickHandler}>Contacteaza-ne!</Button>
         </section>
         
         </Container> 
         </div>
        

  
        </Fragment>
    )
}

export default HomeScreen
