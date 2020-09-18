import React from 'react'
import { Modal } from 'reactstrap'

const CustomModal = ({ children, ...props}) => {
    return (
        <div>
            <Modal {...props}>
               {children}
            </Modal>
        </div>
    )
}
export default CustomModal