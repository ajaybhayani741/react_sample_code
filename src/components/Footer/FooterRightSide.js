import React from 'react'
import { Row } from 'reactstrap'

const emailAddress = 'test@test.com'
const telePhone = '(012) 345-6789'

const FooterRightSide = () => {
    return (
        <div className="pt-4 pb-3">
            <Row className="text">
                For more than 10 numbers,
            </Row>
            <Row className="text">
                consecutive numbers - have a
            </Row>
            <Row className="text">
                sales associate help you...
            </Row>
            <Row className="pt-3">
                <a className="text" href={`mailto:${emailAddress}`}>
                    {emailAddress}
                </a>
            </Row>
            <Row className="pt-3">
                <a className="text" href={`tele:${telePhone}`}>
                    {telePhone}
                </a>
            </Row>
        </div>
    )
}

export default FooterRightSide
