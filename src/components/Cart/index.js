/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './style.css'
import { Container, Row, Col, CustomInput, ButtonGroup } from 'reactstrap'
import NumberPlateCard from '../../reusable/NumberPlateCard'
// import cartItems from '../../descriptions/cartItems'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import Cart from '../../assets/img/cart.png';
import { useDispatch, useSelector } from 'react-redux'
import { getCartItemsAction, deleteFromCartAction } from '../../redux/actions/cartAction'
import { isLoggedIn, isGuest } from '../../utils/authentication'
const pink = '#eb2bc7';
// const blue = '#0969f9';
const green = '#20c931';
// const parrot = '#d0ec32';

const numbers = [
    {
        no: '1-800-777-8888',
        state: 'react',
        price: '49.99',
        color: pink
    },
    {
        no: '1-800-777-8888',
        state: 'react',
        price: '49.99',
        color: green
    }
];

const paymentAmount = {
    subtotal: {
        subject: 'Subtotal',
        amount: '49.99'
    },
    discountCode: {
        subject: 'Discount Code',
        amount: ''
    },
    grandTotal: {
        subject: 'Grandtotal',
        amount: '49.99'
    }
};

const getSubTotal = items => items.reduce(
    (accumulator, cartItem) => accumulator + cartItem.price, 0
);

const getGrandTotal = (subtotal, discount) => {
    const dec = (discount / 100).toFixed(2); //its convert 10 into 0.10
    const total = subtotal * dec; // gives the value for subtract from main value
    return (subtotal - total);
};

const Index = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    let isMounted = false;
    const guest = isGuest();
    const isLogin = isLoggedIn();
    const [cartTotalCategories, setCartTotalCategories] = useState(paymentAmount)
    const [discountCode, setDiscountCode] = useState('')

    useEffect(() => {
        if (cartItems.length > 0) {
            const subTotal = getSubTotal(cartItems);
            // console.log('subTotal', subTotal);
            const cartTotalCategoriesClone = { ...cartTotalCategories };
            cartTotalCategoriesClone['subtotal'].amount = subTotal;
            cartTotalCategoriesClone['grandTotal'].amount = subTotal;
            setCartTotalCategories(cartTotalCategoriesClone)
        }
    }, [cartItems]);

    useEffect(() => {
        if (cartItems.length > 0) {
            const cartTotalCategoriesClone = { ...cartTotalCategories };
            const total = getGrandTotal(cartTotalCategoriesClone['subtotal'].amount, discountCode);
            // console.log('total', total);
            cartTotalCategoriesClone['grandTotal'].amount = total;
            setCartTotalCategories(cartTotalCategoriesClone)
        }
    }, [discountCode]);

    useEffect(() => {
        isMounted = true
        if (isMounted && (guest || isLogin)) dispatch(getCartItemsAction())
        return () => {
            isMounted = false
        }
    }, [dispatch]);

    const removeItem = id => {
        console.log('remove', id)
        dispatch(deleteFromCartAction(id))
    }

    const handleDiscountChange = e => {
        const { name, value } = e.target;
        console.log('discount value', name, value);
        setDiscountCode(value)
    }


    return (
        <div className="cart-bg bg-img">
            <div className="py-5">
                <Container fluid="xl" className="bg-custom-light border-radius pb-3">
                    <Row className="pt-5 pb-2">
                        <div className="cart-container w-100 mb-1">
                            <Col className="d-flex align-center" sm={{ offset: 2, size: 10 }}>
                                <img className="cart-icon" src={Cart} alt='#' />
                                <div className='mb-0 pl-2 shopping-cart-title'>
                                    Shopping Cart
                                </div>
                            </Col>
                        </div>
                    </Row>
                    <Row className=" px-3">
                        <Col sm={{ offset: 2, size: 7 }}>
                            {cartItems && cartItems.length > 0 ? <div className='pr-sm-5'>
                                <div className="border-custom-bottom d-flex align-center">
                                    <Col xs={8} className="pl-0">
                                        <div className='shopping-cart-sub-title'>Item</div>
                                    </Col>
                                    <Col xs={4} >
                                        <div className='shopping-cart-sub-title'>Price</div>
                                    </Col>
                                </div>
                                {cartItems.map((item, index) => (
                                    <CartItem key={index} item={item} removeItem={removeItem} />
                                ))}
                                {Object.keys(paymentAmount).map((paymentCategory) => {
                                    return (
                                        <div className="d-flex align-center mb-2" key={paymentCategory}>
                                            <Col xs={8} className="pl-0 pr-2 pr-sm-5">
                                                <div className='text-right dark-font'>{paymentAmount[paymentCategory].subject}</div>
                                            </Col>
                                            {paymentCategory === 'discountCode' ?
                                                <Col xs={4} sm={2}>
                                                    <CustomInput
                                                        className='discount-code-input'
                                                        value={discountCode}
                                                        onChange={handleDiscountChange}
                                                        id='discount_code'
                                                        type='text' />
                                                </Col>
                                                : <Col xs={4}>
                                                    <div className="license-plate-number">${paymentAmount[paymentCategory].amount}</div>
                                                </Col>}
                                        </div>
                                    )
                                })}
                            </div> :
                                <div className="border-custom-bottom d-flex align-center">
                                    <Col xs={12} className="pl-0">
                                        <div className='shopping-cart-sub-title'>There is nothing in your cart.
                                        Let's add some items.</div>
                                    </Col>
                                    {/* <Col xs={4} >
                                        <div className='shopping-cart-sub-title'> 
                                        <Link to='/'>Continue shopping</Link>
                                        </div>
                                    </Col> */}
                                </div>
                            }
                        </Col>
                        {/* <Col sm={3} className="pl-0">
                            <div className="pb-2">
                                <h6>You may also like: </h6>
                            </div>
                            {numbers.map(({ no, state, price, color }, index) => (
                                <div key={index} className="pb-2">
                                    <NumberPlateCard color={color} number={no} state={state} price={price} btnText={'ADD TO CART'} />
                                </div>
                            ))}
                        </Col> */}
                    </Row>
                    <div className='text-center py-2'>
                        <ButtonGroup className='cart-btn-group'>
                            <Link to='/' className='white-btn border-left-50 continue-btn'>Continue Shopping</Link>
                            <Link to='/checkout'
                                className={`theme-btn border-right-50 check-out-btn ${cartItems.length === 0 ? 'in-active' : ''}`}
                            >Check Out</Link>
                        </ButtonGroup>
                    </div>
                </Container>
            </div>
        </div>
    )
}
export default Index
