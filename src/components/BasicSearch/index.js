import React from 'react'
import formAttributes from '../../descriptions/basicSearch'
import SearchNumberButton from '../SearchNumberButton'
import CustomForm from '../../reusable/Form'
import { useDispatch } from 'react-redux'
import { basicSearchAction } from '../../redux/actions/basicSearchAction'
import { useHistory } from 'react-router-dom'

const Index = () => {

    const dispatch = useDispatch()
    const history = useHistory();

    const handleClick = () => {
        dispatch(basicSearchAction('basic-search', history))
    }
    return (
        <div>
            <div className="d-flex pt-3 px-4 pb-2">
                <div className="form-inner-div basic-search">
                    <CustomForm
                        {...{ formAttributes, formPath: 'basic-search' }}
                        inputClassName="input-bg"
                        rowClass='rowContainer' />
                    <SearchNumberButton
                        className="btn-position basic-search-button"
                        value='Search Number'
                        handleClick={handleClick}
                    />
                </div>
            </div>
            <p className="bottom-txt">Letters and/or numbers are allowed (for react app)</p>
        </div>
    )
}

export default Index
