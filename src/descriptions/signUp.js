import signIn from './signIn'

export default {
    ...signIn,
    confirmPassword: {
        placeholder: 'Confirm Password',
        type: 'password',
        isRequired: true,
        sm: 12,
        error: [
            'Confirm password is required',
            'Passwords mismatch'
        ]
    },
}