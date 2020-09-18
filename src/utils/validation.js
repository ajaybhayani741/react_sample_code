import {
    emailValidation,
    passwordValidation,
    confirmPassword,
    alphabeticStringValidation,
    isEmpty,
    mobileNumber,
    number,
    ValidateCreditCardNumber
} from './regex'
let password = '';

export default (name, value) => {
    // console.log('value length', value)
    if (name === 'password') {
        password = value
    }
    switch (name) {
        case 'firstName':
        case 'lastName':
        case 'userName':
            return alphabeticStringValidation(value)
        case 'email':
            return emailValidation(value)
        case 'password':
            return passwordValidation(value)
        case 'confirmPassword':
            return confirmPassword(value, password)
        case 'phone':
        case 'phoneNumber':
            return mobileNumber(value)
        case 'message':
        case 'address1':
        case 'state':
        case 'city':
        case 'company':
        case 'nameOnCard':
        case 'zipcode':
        case 'country':
            return isEmpty(value)
        case 'cardNumber':
            return ValidateCreditCardNumber(value)
        case 'cvv':
            return number(value)
        case 'exipryDate':
            return true
        default:
            return false
    }
}