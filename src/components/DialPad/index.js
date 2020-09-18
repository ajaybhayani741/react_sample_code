import React, { Fragment, useState } from "react"
import dialPad from '../../descriptions/dialPad'
import { Button, Row, Col, Card, FormText } from 'reactstrap'
import CustomInput from "../../reusable/CustomInput"
import SearchNumberButton from '../SearchNumberButton'
import './dialPad.css'
import backSpace from '../../assets/img/backspace.svg';
import classnames from 'classnames'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { dialPadAction } from "../../redux/actions/dialPadAction"
import { dialPadTab } from "../../descriptions/multiSearch"

const toArray = (string) => {
    let charArray = [];
    // Copy character by character into array 
    for (let i = 0; i < string.length; i++) {
        charArray[i] = string.charAt(i);
    }
    return charArray
};

const toString = (array) => {
    let stringBuilder = '';
    // append element by element into string 
    for (let i = 0; i < array.length; i++) {
        stringBuilder = stringBuilder + array[i];
    }
    return stringBuilder;
};

export default function Index() {
    // console.log('props', props)
    const history = useHistory();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.search.loading)
    const search = useSelector(state => state.search);
    const { searchResult, searchParams } = search;
    // console.log('searchResult', searchResult);
    const initialDialValue = Object.entries(searchResult).length === 0 ? '310HOT4YOU' : searchParams[dialPadTab];
    const [vDialPad, setDialPad] = useState(initialDialValue ? initialDialValue : ''); // 7025200009 for testing

    const handleChange = (e, type) => {
        if (!type) {
            const { value } = e.target
            setDialPad(value)
        }
        else setDialPad(prev => prev + e)
    }

    const eraseValue = () => {
        const array = toArray(vDialPad);  // convert string in to an array        
        array.splice(vDialPad.length - 1, 1); // remove last element of array
        const result = toString(array);  // convert array into string
        setDialPad(result) // set the dialer input value
    };

    const handleSubmit = () => {
        console.log('onsubmit value', vDialPad)
        dispatch(dialPadAction(vDialPad, history))
    }

    return (
        <Fragment>
            <Card className='mb-3 mt-3 dialer-box'>
                <Row className="mx-0">
                    <Col className="dail-top-div" sm="12">
                        {/* <div className="dail-icon-width">
                            <i className="fa fa-heart dail-heart" aria-hidden="true"></i>
                        </div> */}
                        <div>
                            <CustomInput className='dialer-input'
                                value={vDialPad}
                                name='dialPad'
                                handleChange={handleChange}
                            />
                            {vDialPad.length !== 10 &&
                                <FormText className='text-danger d-block w-100'>
                                    Length should be 10 characters long
                                </FormText>
                            }
                        </div>
                        <div className="dail-icon-width text-right">
                            <img className="back-icon cursor-pointer" src={backSpace} alt='backSpace' onClick={eraseValue} />
                        </div>
                    </Col>
                </Row>

                <Row className='pt-2 px-2'>
                    {
                        dialPad.map(({ number, sm, className, alphabet }, index) => {
                            return (
                                <Col sm={sm || 4} key={index} className='text-center'>
                                    <Button className={classnames("dialer-btn-round dial-number", className)}
                                        onClick={() => handleChange(number, true)}>{number}</Button>
                                    <Row className='dialer-row justify-center'>
                                        {
                                            alphabet.map(({ value, color }, index) => {
                                                return (
                                                    <div sm={`${alphabet.length === 4 ? '3' : '4'}`} key={index}>
                                                        <span
                                                            style={{ color, border: `2px solid ${color}` }}
                                                            className='dialer-circle'
                                                            onClick={() => handleChange(value, true)}
                                                        >{value}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Row>
                                </Col>
                            )
                        })
                    }
                </Row >
            </Card>
            <SearchNumberButton
                className="theme-btn"
                value='Search Number'
                handleClick={handleSubmit}
                disabled={((vDialPad.length !== 10) || loading)}
            />
        </Fragment>
    )
}
