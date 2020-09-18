/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react'
import formAttributes from '../../descriptions/contactUs'
import Form from '../../reusable/Form'
import { useSelector } from 'react-redux'

const ContactUs = () => {

    const formPath = 'contact-us'
    const isValid = useSelector(state => state.form.isValid?.[formPath])

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('working')
    }

    const buttonAttributes = {
        value: 'submit',
        type: 'submit',
        outline: true,
        disabled: !isValid,
        className: 'float-right submit-btn'
    }

    return (
        <Fragment>
            <h5>Contact</h5>
            <Form {...{ formAttributes, handleSubmit, buttonAttributes, formPath }} inputClassName={'contact-input'} />
        </Fragment>
    )
}

export default ContactUs
