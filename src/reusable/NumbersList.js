import React, { Fragment, useState } from 'react'
import { Col, Row } from 'reactstrap'
import ListViewCard from './ListViewCard';
import NumberPlateCard from './NumberPlateCard';
import '../components/SearchResults/search.css'

const NumbersList = ({ numbersList }) => {
    const [listView, setListView] = useState(true);

    return (
        <Fragment>
            <Col sm={{ offset: 3, size: 9 }} className='mb-2'>
                <div className="text-right">
                    <i className={"fa fa-th fa-2x px-2 " + (listView ? "text-secondary" : "")} aria-hidden="true" onClick={() => setListView(false)}></i>
                    <i className={"fa fa-align-justify fa-2x " + (listView ? "" : "text-secondary")} aria-hidden="true" onClick={() => setListView(true)}></i>
                </div>
            </Col>
            <Row className="justify-between">
                {numbersList && numbersList.length > 0 && numbersList.map(({ phone, ...rest }, index) => (
                    listView ?
                        <Col sm={12} className="px-0 align-center" key={index}>
                            <ListViewCard data={{ phone, ...rest }} heartIcon btnText={'BUY NOW'} />
                        </Col> :
                        <Col sm={4} className='search-list-column' key={index}>
                            <NumberPlateCard {...{ ...rest }}
                                heartIcon number={phone}
                                state='React app'
                                numberCard={{ phone, ...rest }}
                                btnText='BUY NOW' />
                        </Col>
                ))}
                {(!numbersList || !numbersList.length) &&
                    <Col sm={12} className="number-row">No data available</Col>
                }
            </Row>
        </Fragment>
    )
}

export default NumbersList