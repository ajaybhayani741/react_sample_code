/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import SubListLayout from '../../reusable/SubListLayout'
import ListLayout from '../../reusable/ListLayout'
import { useDispatch } from 'react-redux'
import { locationAction } from '../../redux/actions/locationAction'
import { updateCategoryAction } from '../../redux/actions/categoryAction'

const Index = (props) => {
    const { match } = props;
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const url = match.url
    const handleCheck = (id, title, link, checked) => {
        setTitle(title)
        if (checked) {
            return dispatch(locationAction(id, title, link,))
        }
        return dispatch(updateCategoryAction(title))
    }
    return (match.params.id ?
        <SubListLayout id={title} {...props} url="/location" /> :
        <ListLayout  {...props} handleCheck={handleCheck} url={url} />)
}

export default withRouter(Index)

