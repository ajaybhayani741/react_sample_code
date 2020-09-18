import React from 'react'
import CustomButton from '../../reusable/CustomButton'

const index = ({ value, handleClick, className = '', ...props }) => {
    return (
        <div className="d-flex justify-content-center">
            <CustomButton color="success" className={className} onClick={handleClick} {...props}>{value}</ CustomButton >
        </div>
    )
}

export default index
