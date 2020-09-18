/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Container } from 'reactstrap'
import formAttributes from '../../descriptions/signUp'
import Form from '../../reusable/Form'
import { useSelector, useDispatch } from 'react-redux'
import { clearForm } from '../../redux/actions/formAction'
import { Link, useHistory } from 'react-router-dom'
import './style.css'
import { signUpAction } from '../../redux/actions/signUpAction'

const Index = () => {
    const formPath = 'sign-up'
    const isValid = useSelector(state => state.form.isValid[formPath])
    const loading = useSelector(state => state.signUp.loading)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(clearForm)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUpAction(formPath, history))
    };

    const buttonAttributes = {
        value: 'sign up',
        type: 'submit',
        disabled: (!isValid || loading),
        outline: true,
        className: 'submit-btn sign-up-btn'
    };


    return (
        <div className='py-5 bg-img about-us-bg sign-in-block'>
            <Container className='pt-3 px-4 bg-custom-light border-radius pb-5'>
                <h3 className='text-center font-weight-bold'>Sign Up</h3>
                <div className='my-3 d-flex justify-center'>
                    <Form
                        {...{ formAttributes, handleSubmit, buttonAttributes, formPath }}
                        inputClassName={'contact-input sign-up-input '} />
                </div>
                <div className="text-center">
                    Already have an account ? <Link className="link" to="/sign-in">Sign In</Link>
                </div>
            </Container>
        </div>
    )
}

export default Index
