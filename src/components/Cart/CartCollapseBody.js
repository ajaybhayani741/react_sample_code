import React, { Fragment } from 'react'
import { Col, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const CartCollapseBody = ({ additionalServices }) => {
    return (
        <Fragment>
            {additionalServices && additionalServices.length > 0 && additionalServices.map((item, index) => (
                <div key={index} className='d-flex align-center px-1 pb-1'>
                    <Col xs={8} className='d-flex'>
                        <Input type="checkbox" defaultChecked /><div className='cart-collapse-title'>{item.service}</div>
                    </Col>
                    <Col xs={4} >
                        <div className='cart-collapse-title'>{item.charge}</div>
                    </Col>
                </div>
            ))}
        </Fragment>
    )
};

export default CartCollapseBody

CartCollapseBody.propTypes = {
    additionalServices: PropTypes.array.isRequired
};
