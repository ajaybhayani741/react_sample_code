import React from 'react'
import Cart from '../assets/img/cart.png';

export default [
    {
        path: '/location',
        Component: <span>Location</span>
    },
    {
        path: '/repeaters',
        Component: <span>Repeaters</span>
    },
    {
        path: '/industry',
        Component: <span>Industry</span>
    },
    {
        path: '/about',
        Component: <span>About</span>
    },
    {
        path: '/faq',
        Component: <span>FAQ</span>
    },
    {
        path: '/cart',
        Component: <img src={Cart} alt='cart-icon' />
    },
    {
        path: '/sign-in',
        Component: <span className='sign-in'>SignIn</span>,
        linkClassName: 'user-icon d-flex justify-center',
    },
    // {
    //     isDropdown: true,
    //     Component: <i className="fa fa-language language-font" aria-hidden="true"></i>
    // },
]