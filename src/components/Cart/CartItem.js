import React from 'react'
import { Col } from 'reactstrap';
import CartCollapseTitle from './CartCollapseTitle';
import CartCollapseBody from './CartCollapseBody';
import CustomCollapse from '../../reusable/CustomCollapse';
import { formatePhoneNumber } from '../../descriptions/premiumNumbers'

const CartItem = ({ item, removeItem }) => {
    // console.log('item', item);
    const positions = item.phone.length === 11 ? [1, 5, 9] : [3, 7]
    item.no = formatePhoneNumber(item.phone, positions);
    const { licensePlate, no, price, additionalServices, id } = item;
    return (
        <div className='mb-3'>
            <div className="py-2 d-flex border-bottom-dim">
                <Col xs={8} className='px-0'>
                    {licensePlate && <div className={"license-plate-number"}>{licensePlate}</div>}
                    {no && <div className={"mobile-plate-number"}>{no}</div>}
                </Col>
                <Col xs={4} className='d-flex align-start justify-between'>
                    {price && <div className="license-plate-number">${price}</div>}
                    <div>
                        <i 
                        className="fa fa-trash-o cursor-pointer" aria-hidden="true"
                            onClick={() => removeItem(id)}></i>
                    </div>
                </Col>
            </div>
            {additionalServices && <div className="border-bottom-light">
                <CustomCollapse
                    Title={() => <CartCollapseTitle title={'Addition Services'} />}
                    Body={() => <CartCollapseBody additionalServices={additionalServices} />} />
            </div>}
        </div>
    )

}

export default CartItem
