
export default {
    cardNumber: {
        label: 'Credit card number',
        placeholder: 'XXXXXXXXXXXXXX',
        type: 'text',
        isRequired: true,
        xs: 6,
        sm: 5,
        error: [
            'Credit card number is required',
            'Please enter valid credit card number'
        ]
    },
    exipryDate: {
        label: 'Expiration',
        placeholder: '02/2024',
        type: 'text',
        isRequired: true,
        xs: 6,
        sm: 3,
        error: [
            'expiryDate date is required'
        ]
    },
    cvv: {
        label: 'CVV',
        placeholder: 'XXX',
        type: 'password',
        isRequired: true,
        xs: 6,
        sm: 3,
        error: [
            'cvv number is required',
            'cvv only contains numbers'
        ]
    }
}