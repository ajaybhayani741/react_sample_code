import { CHECK_OUT_REQUEST } from "../constants"
import { checkoutAPI } from "../api/checkoutAPI"


export const checkOutAction = (formPathBilling, formPathPayment) => (dispatch, getState) => {
    dispatch({ type: CHECK_OUT_REQUEST })
    const state = getState()
    const cartItems = [...state.cart.cartItems]
    const cartId = cartItems.map(({ id }) => id)
    const phones = cartItems.map(({ phone }) => phone)
    const amount = cartItems.map(({ price }) => price)
        .reduce(function (result, item) { return result + item; }, 0)
    let phonesDetails = []
    for (let index = 0; index < cartItems.length; index++) {
        phonesDetails.push({
            number: cartItems[index].phone,
            amount: cartItems[index].price
        })
    }
    const { firstName,
        lastName,
        email, ...rest } = { ...state.form.formData[formPathBilling] }
    let payment = { ...state.form.formData[formPathPayment] }
    payment.amount = amount
    const exp = payment.exipryDate.split("/")
    payment.exp_month = exp[0]
    payment.exp_year = exp[1]
    payment.number = payment.cardNumber
    const personalDetails = { firstName, lastName, email }


    const data = {
        cartId,
        phones,
        billingAddress: { ...rest },
        shippingAddress: { ...rest },
        personalDetails,
        payment,
        phonesDetails
    }
    console.log('cartId', data)
    checkoutAPI(data)
}
