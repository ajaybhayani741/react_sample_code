import React, { Fragment } from 'react'
import formAttributes from '../../descriptions/advanceSearch'
import { Row, Col } from 'reactstrap'
import SearchNumberButton from '../SearchNumberButton'
import './style.css'

import CustomForm from '../../reusable/Form'
const index = () => {
    const handleChange = (e) => {
        console.log('e', e)
    }

    return (
        <Fragment>
            <Row>
                <Col sm={{ offset: 2, size: 8 }}>
                    <CustomForm {...{ formAttributes, handleChange }} inputClassName="advance-search-input" rowClass='py-3' />
                    <Row className="justify-center">
                        <SearchNumberButton className='theme-btn' value='Search Number' />
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
}

export default index
