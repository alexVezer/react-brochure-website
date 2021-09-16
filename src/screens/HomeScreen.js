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

         <section id='section-B'>
         <Row >
         {cards.map( card => (
        
            <Card  key={card.title} className = 'box myCard'>
             <Card.Body>
                <Card.Img variant='top' className='cardImg' src={card.image}/>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.desc}</Card.Text>
                <Button className='box'> See more</Button>
                
            </Card.Body>
            </Card>
             
         ))}
         </Row>
         </section>
         </Container>      

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
