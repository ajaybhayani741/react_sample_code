import React, { useState } from 'react'
import CustomButton from './CustomButton'
import { Popover, PopoverBody } from 'reactstrap'

const PopOverDropDown = (props) => {
    // console.log('props', props)
    const { id, placeholder, Component, popOverClass, ...rest } = props;
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);

    const handleDropBtn = (e) => {
        e.preventDefault();
        // console.log(e)
    }

    return (
        <div>
            <CustomButton id={id} type='button' fullWidth className='white-btn popover-btn' onClick={handleDropBtn}>
                {placeholder}
                <span className='float-right'>
                    <i className={`fa fa-chevron-down`} aria-hidden="true"></i>
                </span>
            </CustomButton>
            <Popover className={popOverClass || 'popover-dropdown'} trigger="legacy" placement="bottom" isOpen={popoverOpen} target={id} toggle={toggle}>
                <PopoverBody className='popover-body'>
                    <Component {...rest} />
                </PopoverBody>
            </Popover>
        </div>
    )
}

export default PopOverDropDown
