import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import CustomButton from './CustomButton'
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../redux/actions/cartAction';
import { favoriteNumberAction } from '../redux/actions/favoriteNumberAction';
import { isGuest } from '../utils/authentication';
import { useHistory } from 'react-router-dom';
import { showToast } from '../utils/toastService';

const NumberPlateCard = ({
    number,
    paddingClass,
    numberClass,
    priceClass,
    color,
    state,
    price,
    btnText,
    heartIcon,
    staticClass,
    status,
    isFavorite,
    isAdded,
    afterActionText,
    numberCard,
    index,
    colIndex
}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleClick = (item) => {
        if (item.status === 'available') {
            const { originalPrice, phone, price, serialNo, state, status } = item
            dispatch(addToCartAction({ originalPrice, phone, price, serialNo, state, status }, index, history))
        } else if (item.isAdded) {
            history.push('/cart')
        }
    }

    const handleFavorite = (value) => {
        if (!isGuest) {
            const { originalPrice, phone, price, serialNo, state, status } = value
            dispatch(favoriteNumberAction({ originalPrice, phone, price, serialNo, state, status }, index, history, colIndex))
        } else {
            showToast('Please sign up for add item as your favorites.', { type: 'warning' });
            history.push('/sign-up');
        }
    }
    return (
        <Fragment>
            <div className='premium-card'>
                <Col className={`${paddingClass ? paddingClass : 'py-4 py-lg-5'} d-flex align-center pl-0`} xs="12">
                    <div className={`${priceClass ? priceClass : 'premium-price'}`}
                        style={{ background: color ? color : 'blue' }}>
                        ${price}
                    </div>
                    <div>
                        <div className={`${numberClass ? numberClass : 'number-plate-number pt-1'} text-white`}>{number}</div>
                    </div>
                </Col>
                <Col xs="12">
                    <div className="state-name text-center">{state}</div>
                </Col>
            </div>
            <Row className={`pt-2 pb-2 heart-row ${staticClass ? 'heart-font' : ''}`}>
                <Col sm={12} className={`${staticClass ? 'text-right' : 'text-center'}`}>
                    {heartIcon ?
                        <i className={`fa heart-in-card ${isFavorite ? 'fa-heart' : 'fa-heart-o'}`}
                            aria-hidden="true" onClick={() => handleFavorite(numberCard)}></i> : ''}
                    {/* <i className="fa fa-heart heart-in-card" aria-hidden="true"></i> */}
                    {btnText && <CustomButton size="sm"
                        disabled={status !== 'available' ? true : false}
                        onClick={() => handleClick(numberCard)}
                        className={`add-to-card-btn card-btn ${staticClass ? 'favorit-btn' : ''}`}>
                        {(afterActionText && isAdded) ? afterActionText : btnText}
                    </CustomButton>}
                </Col>
            </Row>
        </Fragment>
    )
}

export default NumberPlateCard
