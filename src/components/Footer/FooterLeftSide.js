import React from 'react'
import footer from "../../descriptions/footer";
import { Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const FooterLeftSide = () => {
    return (
        footer.map(({ name, path }, index) => {
            return (
                <Row key={index}>
                    <Link className="link" to={path}>{name}</Link>
                </Row>
            )
        })
    )
}

export default FooterLeftSide
