import React from 'react'
import { Row, Col } from 'reactstrap'
import formAttributes from '../../descriptions/areaCodeRadio'
import CustomForm from '../../reusable/Form'

const Index = () => {
    return (
        <div className='py-2 px-2'>
            <Row className='pl-4'>
                <Col sm={4} className='popover-block pl-4'>
                    <CustomForm {...{ formAttributes, formPath: 'basic-search' }} />
                </Col>
                <Col sm={8}>
                    <div className='map-container pr-5'>
                        <img alt='map' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Index
