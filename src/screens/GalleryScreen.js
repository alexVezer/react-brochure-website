import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header.js'
import data from '../data/data.js'

const GalleryScreen = () => {
    const {photos} = data

    

    return (
        <Fragment>
        <Header/>
        <Container id='gall'>   
        <div className='paddT' id='gallery'>
        {
                photos.map( photo => (
                    <Row key={photo.id} className='paddT galItem'>
                        <Col>
                            <img src={`${process.env.PUBLIC_URL}${photo.link}`} alt={photo.alt} className='box galImg'></img>
                        </Col>
                        <Col>
                        <div className='box galDesc '>
                        <h3>{photo.title}</h3> 
                        <p>{photo.desc}</p>
                        <h4>{photo.price}</h4>
                        </div>
                        </Col>
                    </Row>
                ))
            }
        </div>
        </Container>
        </Fragment>
    )
}

export default GalleryScreen
