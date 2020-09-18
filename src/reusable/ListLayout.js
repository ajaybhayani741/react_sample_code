/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect, Fragment } from 'react'
import { Container, Row, Col, Input, Label } from 'reactstrap'
import DetailListOptions from './DetailListOptions'
import Map from '../assets/img/location-map.png'
import Icon from '../assets/img/location-icon.png'
import { AnimatedList } from 'react-animated-list'
import { useSelector } from 'react-redux'

const ListLayout = (props) => {
    let isMounted = false;
    const { location, title, renderList, handleCheck, url } = props
    const [dataList, setDataList] = useState(renderList)
    const [IsLocationPage, setIsLocationPage] = useState(false)
    const selectedData = useSelector(state => state.category.selectedList[url])

    useEffect(() => {
        isMounted = true;
        if (isMounted && location.pathname === '/location') setIsLocationPage(true)
        return () => {
            isMounted = false
        }
    }, [])

    useEffect(() => {
        if (selectedData?.length) {
            const lastSelectedData = selectedData[selectedData.length - 1];
            const lastData = document.getElementById(lastSelectedData.name);
            if (lastData) {
                lastData.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }
        }
    }, [selectedData])

    const handleCategory = (id, name, link) => e => {
        const { checked } = e.target;
        const dataListClone = [...dataList];
        dataListClone.map(data => data.id === id ? data.checked = checked : data)
        handleCheck(id, name, link, checked)
        setDataList(dataListClone)
    }

    return (
        <div className='h80'>
            <div className={`${IsLocationPage ? 'location-bg bg-img pb-4' : ''}`}>
                <Container fluid="xl" className='pt-3 position-relative'>
                    <h2 className={`${props.textLight ? 'text-white' : ''}`}>{title}</h2>
                    <Row className={`fix-block-list ${location.pathname === '/location' ? 'col-4 py-3 px-4 bg-custom-light border-radius' : 'px-5 py-2'}`}>
                        {dataList.map(({ name, id, checked, link }, i) => {
                            return (
                                <Col sm={`${location.pathname === '/location' ? '12' : '3'}`} key={i}>
                                    <div>
                                        <Input type="checkbox"
                                            checked={checked}
                                            name={name}
                                            id={String(id)}
                                            onChange={handleCategory(id, name, link)} />
                                        <Label
                                            for={String(id)}
                                            className='text-capitalize mb-1 w100'> <span>{name}</span>
                                        </Label>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                    {IsLocationPage && <Fragment>
                        <div className='location-map-box'>
                            <img className='map' src={Map} alt='map' />
                            <img className='icon' src={Icon} alt='location-icon' />
                        </div>
                        <div className='selected-option-box text-center py-3 px-1 bg-extra-light border-radius'>
                            <h4 className='text-center title'>Hover over diagram for area code</h4>
                            <div className='d-flex align-center justify-center mt-3'>
                                <div className='bg-dark'>
                                    <div className='font-14 font-weight-bold text-white py-1 px-2'>selected location :</div>
                                </div>
                                <div className='bg-light border'>
                                    <div className='font-14 py-1 px-2'>
                                        country code
                                    <span className='font-weight-bold'>(949)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>}
                </Container>
            </div>
            <Container fluid='lg'>
                {selectedData && <AnimatedList animation={"grow"}>
                    {selectedData.map(({ title, data, link }, index) => {
                        return (<DetailListOptions
                            key={index}
                            subTitle={title}
                            data={data.slice(0, 8)}
                            link={link}
                            {...props} />)
                    })}
                </AnimatedList>}
            </Container>
        </div>
    )
}

export default ListLayout
