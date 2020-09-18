export default {
    email: {
        placeholder: 'Email',
        type: 'email',
        isRequired: true,
        xs: 12,
        error: [
            'Email is required',
            'Please enter valid email address'
        ]
    },
    password: {
        placeholder: 'Password',
        type: 'password',
        isRequired: true,
        xs: 12,
        error: [
            'Password is required',
            'Password must contain at least eight characters!'
        ]
    },
}