import React from 'react'
import CustomCollapse from '../../reusable/CustomCollapse'
import FAQ from '../../mockdata/faq.json'
import { Container, Row, Col } from 'reactstrap'
import './style.css'

const CartCollapseTitle = ({ title }) => {
    return (
        <div className="que-title pl-2">{title}</div>
    )
}

const CartCollapseBody = ({ list }) => {
    return (
        <div className="py-3 px-3">
            {list.map(listItem => {
                return (<p className="faq-font mb-3" key={listItem.id}>
                    {listItem.data}
                </p>)
            })}
        </div>
    )
}

const Index = () => {
    const list = FAQ.data;
    return (
        <Container fluid='lg'>
            <Row className='faqContainer'>
                <Col sm={{offset: '2', size: '8'}} className='px-sm-5'>
                    <div className="faq-title mt-4 mb-5">FAQ</div>
                    {list.map((item, itemIndex) => (
                        <div key={itemIndex}>
                            <CustomCollapse
                            startIcon={true}
                                iconClass={{
                                    openIcon: 'fa-chevron-down',
                                    closeIcon: 'fa-chevron-up'}}
                                className='faq-collapse '
                                Title={() => <CartCollapseTitle title={item.title} />}
                                Body={() => <CartCollapseBody list={item.description} />} />
                        </div>
                    ))}
                </Col>
            </Row>            
        </Container>
    )
}

export default Index
