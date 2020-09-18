import React, { Fragment } from 'react'
import './style.css'
import { Row, Col, FormGroup, Label, Input } from 'reactstrap'
import BillingAddress from './BillingAddress'
import Payment from './Payment'
import CheckoutCart from './CheckoutCart'
import CustomButton from '../../reusable/CustomButton'
import { useSelector, useDispatch } from 'react-redux'
import { getCartItemsAction } from '../../redux/actions/cartAction'
import { checkOutAction } from '../../redux/actions/checkoutAction'


const Checkout = () => {
    const formPathBilling = 'billing-address'
    const formPathPayment = 'payment'
    const isValidBilling = useSelector(state => state.form.isValid[formPathBilling])
    const isValidPayment = useSelector(state => state.form.isValid[formPathPayment])
    const cartItems = useSelector(state => state.cart.cartItems)
    const [isValid, setIsValid] = React.useState(false)
    const [billingAddress, setBillingAddress] = React.useState(false)

    const dispatch = useDispatch();

    React.useEffect(() => {
        if (cartItems.length && isValidBilling && isValidPayment && billingAddress) {
            return setIsValid(true)
        }
        setIsValid(false)
    }, [billingAddress, cartItems.length, isValidBilling, isValidPayment])

    React.useEffect(() => {
        dispatch(getCartItemsAction())
    }, [dispatch]);

    const handleCheckout = () => {
        dispatch(checkOutAction(formPathBilling, formPathPayment))
    }

    return (
        <Fragment>
            <Row>
                <Col sm={9}>
                    <div className='border-bottom-dim'>
                        <BillingAddress formPath={formPathBilling} />
                    </div>
                    <div className='border-bottom-dim py-3'>
                        <FormGroup check>
                            <Label check className='font-14 cart-number-dark '>
                                <Input type="checkbox" onClick={(e) => setBillingAddress(e.target.checked)} />{' '}
                                Shipping address is the same as my billing address
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check className='font-14 cart-number-dark '>
                                <Input type="checkbox" />{' '}
                                Save this information for the next time
                            </Label>
                        </FormGroup>
                    </div>
                    <div className='border-bottom-dim'>
                        <Payment formPath={formPathPayment} />
                    </div>
                    <div className='mt-3'>
                        <CustomButton
                            color="primary"
                            className='cart-number-dark py-2'
                            fullWidth
                            disabled={!isValid}
                            onClick={handleCheckout}
                        >
                            {/* <Link to='/confirmation' className='d-block text-white btn btn-primary cart-number-dark py-2'> */}
                            Continue to checkout
                        {/* </Link> */}
                        </CustomButton>
                    </div>
                </Col>
                <Col sm={3}>
                    <CheckoutCart cartItems={cartItems} />
                    <div className='custom-ad-block'>
                    </div>
                    <div className='custom-ad-block mt-4'>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Checkout
