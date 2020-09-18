import React, { Fragment, useState } from 'react'
import phoneIcon from '../../assets/img/phone.png';
import { Row, Col } from 'reactstrap';
import ordersData from '../../mockdata/orders.json'

const OrderInfo = () => {
    const [orders] = useState(ordersData.data)

    return (
        <Row className="mt-4">
            <Col sm="12 pl-sm-0">
                <div className="user-profile mb-2">
                    Order Information
                </div>
            </Col>
            {orders.length > 0 && orders.map(({ order_id, items }, orderIndex) => (
                <Fragment key={orderIndex}>
                    <div className="order-id mb-1">Order # {order_id}</div>
                    <Col sm="12">
                        <Row>
                            <Col sm="5" className="rec-border">
                                <Row>
                                    <Col xs="2" sm="2"></Col>
                                    <Col xs="6" sm="6"> </Col>
                                    <Col xs="3" sm="3">
                                        <div className="status">Status</div>
                                    </Col>
                                </Row>
                                {items.length > 0 && items.map(({ license_number, phone_number, status }, itemIndex) => (
                                    <Row className="my-3" key={itemIndex}>
                                        <Col xs="2" sm="2 align-self-center">
                                            <img src={phoneIcon} alt='user-profile' />
                                        </Col>
                                        <Col xs="6" sm="6">
                                            <div className="phone-no">{license_number}</div>
                                            <div className="second-phone-no">{phone_number}</div>
                                        </Col>
                                        <Col xs="4" sm="4">
                                            <div className="font-italic">{status}</div>
                                        </Col>
                                    </Row>
                                ))}
                            </Col>
                        </Row>
                    </Col>
                </Fragment>
            ))}
        </Row>
    )
}

export default OrderInfo
