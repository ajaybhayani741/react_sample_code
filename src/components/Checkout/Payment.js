import React from 'react'
import formAttributes from '../../descriptions/payment'
import Form from '../../reusable/Form'

const Payment = ({ formPath }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('working')
    }
    return (
        <div className='py-4'>
            <h3 className='pb-3'>Payment</h3>
            <Form {...{ formAttributes, handleSubmit, formPath }}
                radioClassName='payment-radio'
                inputClassName='checkout-inputs'
                labelClassName='checkout-labels' />
        </div>
    )
}

export default Payment
