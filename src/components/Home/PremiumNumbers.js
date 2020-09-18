/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { formateJSON } from '../../descriptions/premiumNumbers'
import { Row, Col, Container } from 'reactstrap'
import CustomButton from '../../reusable/CustomButton'
import NumberPlateCard from '../../reusable/NumberPlateCard'
import { AnimatedList } from "react-animated-list";

const PremiumNumbers = () => {
    const [currentTouchedColumn, setCurrentTouchedColumn] = useState(0)
    const featuredNumbers = useSelector(state => state.featuredNumber.featuredNumbers);
    const [slots, setSlots] = React.useState({
        0: 1,
        1: 1,
        2: 1,
        3: 1
    });
    const [displayNumbers, setDisplayNumbers] = useState([]);
    const numbersPerCategory = 3;
    let isMounted = false;
    useEffect(() => {
        if (featuredNumbers.length) {
            featuredNumbers.map((col) => {
                col.numbers = formateJSON(col.numbers)
                return col;
            });
        };
    }, [featuredNumbers])

    useEffect(() => {
        isMounted = true;
        const currentTableData = featuredNumbers.map((col, colIndex) => {
            // Logic for displaying premiumNumbers
            const count = col.numbers.length / numbersPerCategory;
            const indexOfLastTableData = slots[colIndex] * numbersPerCategory;
            col.buttonText = (slots[colIndex] < count) ? 'more' : count !== 1 ? 'less' : 'more'
            col.buttonDisabled = count < 1 ? true : false;
            // let currentItems = col.numbers.slice(0, indexOfLastTableData);
            const displayNumbersClone = displayNumbers.slice();
            const numbersArray = displayNumbersClone[colIndex]?.numbers;
            let currentItems = (numbersArray?.length > 3) ?
                (
                    (col.buttonText !== 'more' && currentTouchedColumn === colIndex) ?
                        col.numbers.slice(0, indexOfLastTableData)
                        : numbersArray
                )
                : col.numbers.slice(0, indexOfLastTableData);
            return { ...col, numbers: currentItems, count }
        })
        if (isMounted) setDisplayNumbers(currentTableData)
    }, [slots, featuredNumbers])

    const maximizeSlots = (index) => {
        const slotsClone = { ...slots };
        slotsClone[index] += 1;
        setSlots(slotsClone);
        setCurrentTouchedColumn(index)
    }

    const minimizeSlots = index => {
        const displayNumbersClone = displayNumbers.slice();
        const numbersArray = displayNumbersClone[index].numbers;
        if (numbersArray.length > 3) {
            numbersArray.splice((numbersArray.length - 1), 1);
            if (numbersArray.length === 3) {
                displayNumbersClone[index].buttonText = 'more';
                setSlots({ ...slots, [index]: 1 })
            }
        }
        displayNumbersClone[index].numbers = numbersArray
        setDisplayNumbers(displayNumbersClone)
        setCurrentTouchedColumn(index)
    }

    return (
        <Container fluid="lg">
            <Row className="py-5">
                {
                    displayNumbers.map(({ value, numbers, buttonText, buttonDisabled }, colIndex) => {
                        return (
                            <Fragment key={colIndex}>
                                <Col sm='3' className="premium-number-col-divider py-1">
                                    <h3 className='text-center pb-4'> {value} </h3>
                                    <AnimatedList animation={"grow"}>
                                        {
                                            numbers.map((numberCard, index) => {
                                                const { no, state, price, color, id, status, isFavorite } = numberCard;
                                                return (
                                                    <Col sm='12' key={id} className='mb-3 px-0'>
                                                        <NumberPlateCard
                                                            number={no}
                                                            color={color}
                                                            state={state}
                                                            price={price}
                                                            status={status}
                                                            btnText='ADD TO CART'
                                                            heartIcon
                                                            isFavorite={isFavorite}
                                                            index={index}
                                                            colIndex={colIndex}
                                                            numberCard={numberCard}
                                                        />
                                                    </Col>
                                                )
                                            })
                                        }
                                    </AnimatedList>
                                    <Col sm='12' className="text-center">
                                        <CustomButton
                                            size="sm"
                                            outline
                                            className="more-btn"
                                            disabled={buttonDisabled}
                                            onClick={(e) => buttonText === 'more' ?
                                                maximizeSlots(colIndex) :
                                                minimizeSlots(colIndex)}>
                                            {buttonText}
                                        </CustomButton>
                                    </Col>

                                </Col>
                            </Fragment>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default PremiumNumbers

