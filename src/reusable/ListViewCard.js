import React from 'react';
import { Row, Col } from 'reactstrap';
import CustomButton from './CustomButton';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../redux/actions/cartAction';
import { favoriteNumberAction } from '../redux/actions/favoriteNumberAction';
import { isGuest } from '../utils/authentication';
import { useHistory } from 'react-router-dom';
import { showToast } from '../utils/toastService';

const ListViewCard = ({ data, btnText, afterActionText, heartIcon, index }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = (item) => {
        if(item.status === 'available'){
            const { originalPrice, phone, price, serialNo, state, status } = item
            dispatch(addToCartAction({ originalPrice, phone, price, serialNo, state, status }, index, history))
        } else if (item.isAdded) {
            history.push('/cart')
        }     
    };

    const handleFavorite = (value) => {
        if(!isGuest){
            const { originalPrice, phone, price, serialNo, state, status } = value
            dispatch(favoriteNumberAction({ originalPrice, phone, price, serialNo, state, status }, index, history))
        }else {
            showToast('Please sign up for add item as your favorites.', { type: 'warning' });
            history.push('/sign-up')
        }      
    };
    
    return (
        <Col sm={12} className="search-list-column">
            <Row className="align-center search-list-row">
                <Col sm={9} className="text-left px-0" >
                    <div className="search-list-plate-name">{data.serialNo}</div>
                    <div className="search-list-plate-number"> {data.phone}</div>
                    <div className={`${data.status === 'available' && 'available'} search-list-plate-available-text text-capitalize`}>{data.status}</div>
                </Col>
                <Col sm={3} className="text-right px-0">
                    <div className='pb-1'>
                        {heartIcon &&
                            <i className={`${data.isFavorite ? 'fa-heart' : 'fa-heart-o'} fa pr-1 font-weight-bold cursor-pointer`}
                                onClick={() => handleFavorite(data)} aria-hidden="true"></i>
                        }
                        {data.price &&
                            <span className="search-list-plate-name pl-4 pr-1">${data.price}</span>}<br></br>
                    </div>
                    {btnText && <CustomButton size="sm"
                        className="search-results-add-cart-button"
                        // disabled={(data.status !== 'available') ? true : false}
                        onClick={() => handleClick(data)}>
                        {(afterActionText && data.isAdded) ? afterActionText : btnText}
                    </CustomButton>}
                </Col>
            </Row>
        </Col>
    );
}
export default ListViewCard;
