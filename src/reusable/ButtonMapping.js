import React from 'react'
import CustomButton from './CustomButton'

export default ({ buttonAttributes, id }) => {
    return (
        Array.isArray(buttonAttributes)
            ?
            buttonAttributes.map(({ value, type, onClick, ...rest }, index) => {
                switch (type) {
                    case 'edit':
                    case 'delete':
                        return <CustomButton
                            onClick={() => onClick(id)}
                            {...{ ...rest }}
                            key={index}
                        >{value}</CustomButton>
                    case 'clear':
                        return <CustomButton onClick={onClick} {...{ ...rest }} key={index}>{value}</CustomButton>
                    default:
                        return <CustomButton {...{ ...rest }} key={index}>{value}</CustomButton>
                }
            })
            : <CustomButton
                type={buttonAttributes.type}
                onClick={buttonAttributes.onClick}
                className={buttonAttributes.className}
                {...buttonAttributes}
            >{buttonAttributes.value}</CustomButton>
    )
}