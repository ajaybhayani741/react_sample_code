export const emailValidation = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
}
export const passwordValidation = password => {
    return password.length > 7
}

export const replaceSpaceWithUnderscore = name => {
    return lowerCase(name.split(' ').join('_'));
}
export const replaceUnderscoreWithSpace = name => {
    return lowerCase(name.split('_').join(' '));
}
export const confirmPassword = (confirmPass, pass) => confirmPass === pass

export const alphabeticStringValidation = val => {
    const regex = /^[A-Za-z\-_]+$/;  //substitute: /^[A-Za-z]+$/without letters
    return regex.test(val);
}
export const zipCodeValidation = val => {
    const regex = /^[0-9]+$/;
    return (regex.test(val) && val.toString().length === 6);
}
export const values = object => object ? Object.values(object) : []

export const keys = object => object ? Object.keys(object) : []

export const isEmpty = value => value !== undefined ? value : ''

export const isEmptyString = value => value === ""

export const lowerCase = values => values.toLowerCase()

export const number = val => {
    const regex = /^[0-9]+$/;
    return regex.test(val);
}

export const mobileNumber = val => {
    const regex = /^[0-9]+$/;
    return (regex.test(val) && val.toString().length === 10);
}

export const fullNameString = val => {
    const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    return regex.test(val);
}

export const ValidateCreditCardNumber = val => {
    var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var masterCardRegEx = /^(?:5[1-5][0-9]{14})$/;
    var americaExpRegEx = /^(?:3[47][0-9]{13})$/;
    var discoverRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    var isValid = false;
    // test numbers
    // 341140185346626.
    // 375727641414391.
    // 373834279838370.
    // 348719775768795.
    // 372653007683820.

    if (visaRegEx.test(val)) {
        isValid = true;
    } else if (masterCardRegEx.test(val)) {
        isValid = true;
    } else if (americaExpRegEx.test(val)) {
        isValid = true;
    } else if (discoverRegEx.test(val) ) {
        isValid = true;
    }
    return isValid
}
