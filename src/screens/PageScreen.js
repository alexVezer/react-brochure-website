import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Box from '../components/Box'
import Header from '../components/Header'
import data from '../data/data'
import {useParams} from 'react-router-dom'

const PageScreen = () => {
const { page } = data

    return (
       
        <Fragment>
        <Header/>
        <div className='background'>
        </div>
        <Container>
        <section id='page'>
        <Box content={page.title} cls='pageTitle'/>

        <Box content={ page.content} cls='pageCont padd'/>
        </section>
        </Container>
            
        </Fragment>
    )
}

export default PageScreen
