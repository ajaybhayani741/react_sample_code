import React, { useState } from 'react'
import { Collapse } from 'reactstrap';
import PropTypes from 'prop-types';

const CustomCollapse = ({ Title, Body, className, iconClass, startIcon, initialCollapse }) => {
    const icon = iconClass ? iconClass : {
        openIcon: 'fa-plus',
        closeIcon: 'fa-minus'
    }
    const [collapse, setCollapse] = useState(initialCollapse||false);
    const [status, setStatus] = useState('Closed');

    const onEntering = () => setStatus('Opening');

    const onEntered = () => setStatus('Opened');

    const onExiting = () => setStatus('Closing');

    const onExited = () => setStatus('Closed');

    const toggle = () => setCollapse(!collapse);

    return (
        <div className={`${className||''} py-1 description`}>
            <div className="d-flex title align-center justify-between" onClick={toggle}>
                <div className='d-flex align-center'>
                    {startIcon && <div className="px-2 round-collapse-start-icon">
                        {(status === 'Closed' || status === 'Closing') && <i className={`fa-plus fa cursor-pointer`} aria-hidden="true" />}
                        {(status === 'Opened' || status === 'Opening') && <i className={`fa-minus fa cursor-pointer`} aria-hidden="true" />}
                    </div>}
                    <Title />
                </div>
                <div className="px-2 collapse-right-icon">
                    {(status === 'Closed' || status === 'Closing') && <i className={`${icon.openIcon} fa cursor-pointer`} aria-hidden="true" />}
                    {(status === 'Opened' || status === 'Opening') && <i className={`${icon.closeIcon} fa cursor-pointer`} aria-hidden="true" />}
                </div>
            </div>
            <Collapse
                isOpen={collapse}
                onEntering={onEntering}
                onEntered={onEntered}
                onExiting={onExiting}
                onExited={onExited}>
                <div>
                    <Body />
                </div>
            </Collapse>
        </div>
    )
}

CustomCollapse.propTypes = {
    Title: PropTypes.func.isRequired,
    Body: PropTypes.func.isRequired
};

export default CustomCollapse