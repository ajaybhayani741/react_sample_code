/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import MultiSearch from '../Home/MultiSearch';
// import { searchResult } from '../../redux/actions/SearchResult';
import NumberPlateCard from '../../reusable/NumberPlateCard';
import ListViewCard from '../../reusable/ListViewCard';
import "./search.css"
import FilterOptions from './FilterOptions';
import { useSelector } from 'react-redux';
import { formateJSON } from '../../descriptions/premiumNumbers';


const SearchResults = () => {
    const { searchResult, isSearchSuccess } = useSelector(state => state.search);
    const isCartSuccess = useSelector(state => state.cart.isSuccess);
    const SearchParameter = ["TRUCK", "WHEELS"];
    const [listView, setListView] = useState(true);
    const [formattedData, setFormattedData] = useState([]);

    useEffect(() => {
        if (searchResult?.length) {
            setFormattedData(formateJSON(searchResult));
        }
    }, [searchResult, isSearchSuccess])

    useEffect(() => {
        if (searchResult?.length) {
            setFormattedData(searchResult);
        }
    }, [searchResult, isCartSuccess])

    return (
        <div className="search-result">
            <Container className="search-result-container">
                <Col className="pt-4 pb-3">
                    <div className='text-center search-result-title'>Search Results</div>
                </Col>
                <Row sm={12} className='pb-3'>
                    <MultiSearch withoutDescription={true} />
                </Row>
                <Col md={{ offset: 3, size: 8 }} className='d-flex align-center justify-between py-1'>
                    <div>
                        <span className='related-word-text'>Related Word Search : &nbsp; </span>
                        {SearchParameter.map((word, index) => (
                            <span key={index} className='related-word-bold'>{word} &nbsp;&nbsp;</span>
                        ))}
                    </div>
                    <div >
                        <i className={"fa fa-th fa-2x px-2 " + (listView ? "tile-icon-color" : "")} aria-hidden="true" onClick={() => setListView(false)}></i>
                        <i className={"fa fa-align-justify fa-2x " + (listView ? "" : "tile-icon-color")} aria-hidden="true" onClick={() => setListView(true)}></i>
                    </div>
                </Col>
                <Row>
                    <Col md={3} className="sorting-list-divider mb-3">
                        <FilterOptions />
                    </Col>
                    <Col md={8}>
                        <Container fluid="lg" className="search-list-container">
                            <Row >
                                {
                                    formattedData.map((item, index) => (
                                        listView
                                            ? <ListViewCard btnText={'ADD CART'}
                                                afterActionText={'ADDED to CART'}
                                                heartIcon
                                                index={index}
                                                key={index}
                                                data={item}
                                            />
                                            : (<Col className='search-list-column' sm={6} lg={4} key={index} >
                                                <NumberPlateCard
                                                    staticClass={true}
                                                    paddingClass={'py-4'}
                                                    priceClass={'search-card-price'}
                                                    numberClass={'search-card-number'}
                                                    heartIcon={true}
                                                    btnText={'ADD TO CART'}
                                                    afterActionText={'ADDED to CART'}
                                                    isAdded={item.isAdded}
                                                    isFavorite={item.isFavorite}
                                                    number={item.no}
                                                    status={item.status}
                                                    color={item.color}
                                                    state={item.state}
                                                    price={item.price}
                                                    numberCard={item}
                                                    index={index}
                                                />
                                            </Col>)
                                    ))
                                }
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default SearchResults;
