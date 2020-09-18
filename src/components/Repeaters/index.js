/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import SubListLayout from '../../reusable/SubListLayout'
import ListLayout from '../../reusable/ListLayout'
import { useDispatch } from 'react-redux'
import { repeatersAction } from '../../redux/actions/repeatersAction'
import { updateCategoryAction } from '../../redux/actions/categoryAction'

const Index = (props) => {
    const { match } = props;
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const url = match.url

    const handleCheck = (id, title, link, checked) => {
        setTitle(title)
        if (checked) {
            return dispatch(repeatersAction(id, title, link, url))
        }
        return dispatch(updateCategoryAction(title, url))
    }
    return (match.params.id ?
        <SubListLayout id={title} {...props} url="/repeaters" /> :
        <ListLayout {...props} handleCheck={handleCheck} url={url} />)
}

export default withRouter(Index)
