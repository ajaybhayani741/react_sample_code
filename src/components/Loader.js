import React from 'react';
import { Spinner } from 'reactstrap';

const Loader = () => {
    return (
        <div>
            <Spinner className="center-div" animation="border" />
        </div>
    )
}

export default Loader
