/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import formAttributes from '../../descriptions/signIn'
import restFormAttributes from '../../descriptions/resetPassword'
import Form from '../../reusable/Form'
import CustomModal from '../../reusable/CustomModal'
import { useSelector, useDispatch } from 'react-redux'
import { clearForm } from '../../redux/actions/formAction'
import { Link, useHistory } from 'react-router-dom'
import { signInAction } from '../../redux/actions/signInAction'
import './style.css'
import { resetPasswordAction } from '../../redux/actions/resetPasswordAction'

const Index = () => {
    const formPath = 'signIn'
    const resetPassword = 'resetPassword'
    const isValid = useSelector(state => state.form.isValid?.[formPath])
    const resetPasswordValid = useSelector(state => state.form.isValid?.[resetPassword])
    const { isSuccess } = useSelector(state => state.resetPassword)
    const loading = useSelector(state => state.signIn.loading)
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory()

    useEffect(() => {
        dispatch(clearForm)
    }, [])

    useEffect(() => {
        if (isSuccess) {
            toggle()
        }
    }, [isSuccess])

    const toggle = () => setIsOpen(!isOpen);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signInAction(formPath, history))
    };

    const handleRestPassSubmit = (e) => {
        e.preventDefault()
        dispatch(resetPasswordAction(resetPassword))   
    };

    const buttonAttributes = {
        value: 'sign in',
        type: 'submit',
        disabled: (!isValid || loading),
        outline: true,
        className: 'submit-btn sign-in-btn'
    };

    const resetPassBtnAttributes = {
        value: 'Reset',
        type: 'submit',
        disabled: !resetPasswordValid,
        outline: true,
        className: 'float-right submit-btn'
    }

    return (
        <div className='py-5 bg-img about-us-bg sign-in-block'>
            <Container className='pt-3 px-4 bg-custom-light border-radius pb-5'>
                <h3 className='text-center font-weight-bold'>Sign In</h3>
                <div className='my-3 d-flex justify-center'>
                    <Form {...{ formAttributes, handleSubmit, buttonAttributes, formPath }} inputClassName={'contact-input sign-in-input'} />
                </div>
                <div className="d-flex align-center justify-between px-4">
                    <div className="text-center link" onClick={toggle}>
                        Forgot password?
                    </div>
                    <div className="text-center link">
                        <Link className="link" to="/sign-up">Sign up?</Link>
                    </div>
                </div>
                <CustomModal isOpen={isOpen} toggle={toggle} className='forgot-password-modal'>
                    <div className='modal-close-icon cursor-pointer px-2 py-2' >
                        <i className="fa fa-times float-right" onClick={toggle} aria-hidden="true"></i>
                    </div>
                    <div className='pb-4 px-4'>
                        <h5 className="pl-4 mb-3">Password reset link will be sent to you email address</h5>
                        <div className='d-flex justify-center'>
                            <Form formAttributes={restFormAttributes}
                                handleSubmit={handleRestPassSubmit}
                                buttonAttributes={resetPassBtnAttributes}
                                formPath={resetPassword}
                                inputClassName={'contact-input sign-in-input'} />
                        </div>
                    </div>
                </CustomModal>
            </Container>
        </div>
    )
}

export default Index