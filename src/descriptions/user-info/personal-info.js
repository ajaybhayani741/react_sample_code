
const formGroupClassName = 'user-info-form-group';
export default {
    firstName: {
        label: 'First Name',
        placeholder: '',
        type: 'text',
        isRequired: true,
        sm: 4,
        formGroupClassName,
        error: [
            'First name is required',
            'First name can only contains alphabets'
        ]
    },
    lastName: {
        label: 'Last Name',
        placeholder: '',
        type: 'text',
        isRequired: true,
        sm: 4,
        formGroupClassName,
        error: [
            'Last name is required',
            'Last name can only contains alphabets'
        ]  
    },
    company: {
        label: 'Company Name',
        placeholder: '',
        type: 'text',
        isRequired: true,
        sm: 4,
        formGroupClassName,
        error: [
            'Company name is required',
            'Company name can only contains alphabets'
        ]  
    },
    email: {
        label: 'Email',
        placeholder: '',
        type: 'email',
        isRequired: true,
        sm: 4,
        formGroupClassName,
        error: [
            'Email is required',
            'Please enter valid email address'
        ]
    },
    phoneNumber: {
        label: 'Phone Number',
        placeholder: '',
        type: 'text',
        isRequired: true,
        sm: 4,
        formGroupClassName,
        error: [
            'Phone number is required',
            'Please enter valid phone number'
        ]
    },
}