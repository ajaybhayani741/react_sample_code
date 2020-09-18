import React from 'react'
import IndustriesComponent from "../components/Industries";
import industriesList from '../descriptions/industryCheckbox'
const Industries = () => {
    return (<IndustriesComponent
        title="Industries"
        bg={'industry-details-banner'}
        renderList={industriesList} />)
}

export default Industries