import React from 'react'
import billing from '../../descriptions/billing'
import Form from '../../reusable/Form'
import country from '../../descriptions/country-state-city/country.json'
import state from '../../descriptions/country-state-city/state.json'

let formAttributes = billing
const BillingAddress = ({ formPath }) => {

    React.useEffect(() => {
        formAttributes.country.options = country
    }, [])

    return (
        <div className='py-4'>
            <h3 className='pb-3'>Billing Address</h3>
            <Form {...{ formAttributes, formPath, state }}
                inputClassName='checkout-inputs'
                labelClassName='checkout-labels' />
        </div>
    )
}

export default BillingAddress
