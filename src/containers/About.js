import React from 'react'
import { Container } from 'reactstrap';

export default function About() {
    return (
        <div className='py-5 bg-img about-us-bg'>
            <Container className='pt-3 px-4 bg-custom-light border-radius pb-5'>
                <h3 className='text-center font-weight-bold'>About Us</h3>
                <div className='my-3 text-center'>
                   React app
               </div>
               
            </Container>
        </div>
    )
}
