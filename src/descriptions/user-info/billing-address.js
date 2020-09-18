const className = 'user-info-dropdown';
const formGroupClassName = 'user-info-form-group';

export default {
    address1: {
        label: 'Address 1',
        placeholder: '',
        type: 'text',
        isRequired: true,
        sm: 6,
        formGroupClassName,
        error: [
            'Address is required'
        ]
    },
    address2: {
        label: 'Address 2 (optional)',
        placeholder: '',
        type: 'text',
        isRequired: false,
        sm: 6,
        formGroupClassName,
    },
    country: {
        label: 'Country',
        placeholder: 'Choose...',
        type: 'dropdown',
        isRequired: true,
        sm: 6,
        formGroupClassName, 
        className,
        options:[],
        error: [
            'Country is required'
        ]
    },
    state: {
        label: 'State',
        placeholder: 'Choose...',
        type: 'dropdown',
        isRequired: true,
        sm: 6,
        formGroupClassName,
        className,
        options:[],
        error: [
            'State is required'
        ]
    },
    zipcode: {
        label: 'Zip Code',
        placeholder: '',
        type: 'number',
        isRequired: true,
        sm: 6,
        formGroupClassName,
        error: [
            'Zip code is required',
            'Please enter valid zip code'
        ]
    },
}