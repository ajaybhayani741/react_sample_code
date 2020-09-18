import React from 'react'
import RepeatersComponent from "../components/Repeaters";
import repeatersList from '../descriptions/repeaters'

const Repeaters = () => {
    return (<RepeatersComponent 
        title="Repeaters" 
        renderList={repeatersList}
        bg={'repeaters-details-banner'} />)
}

export default Repeaters