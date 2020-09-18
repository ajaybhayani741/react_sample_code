import React from 'react'
import { Button } from 'reactstrap'

const CustomButton = ({ children, fullWidth, outlined, ...otherProps }) => {
    const outline = outlined && 'outline'
    return (
        <Button {...otherProps} {...outline} style={{width: `${fullWidth && '100%'}`}}>
            {children}
        </Button>
    )
}
export default CustomButton