import React, { Fragment, useState } from 'react'
import CustomInput from '../../reusable/CustomInput'
import SearchNumberButton from '../SearchNumberButton'
import './style.css'
import {
    useSelector,
    useDispatch
} from 'react-redux'
import { massSearchAction } from '../../redux/actions/massSearchAction'
import { useHistory } from 'react-router-dom'
import { massSearchTab } from '../../descriptions/multiSearch'

const Index = () => {
    const loading = useSelector(state => state.search.loading)
    const search = useSelector(state => state.search);
    const { searchResult, searchParams } = search;
    const initialMassValue = Object.entries(searchResult).length === 0 ? '' : searchParams[massSearchTab];
    const dispatch = useDispatch()
    const history = useHistory();
    const [isValid, setIsValid] = useState(false);
    const [value, setValue] = useState(initialMassValue);

    const handleChange = (e) => {
        setValue(e.target.value)
        e.target.value !== '' ? setIsValid(true) : setIsValid(false)
    }

    const handleSubmit = () => {
        const inputValue = value.split(',');
        // console.log('value at submit', inputValue)
        dispatch(massSearchAction(inputValue, history))
        setValue('');
    }

    return (
        <Fragment>
            <div className="bulkNumberCheckBlockView" >
                <div className="bulkNumberCheckHelpText">
                    Copy and Paste up to 100 names, numbers or combinations
            </div>
                <div className="bulkNumberCheckInputBlock">
                    <CustomInput
                        className="bulkNumberCheckInput"
                        rows={20}
                        value={value}
                        type='textarea'
                        handleChange={handleChange}
                    />
                </div>
                <div className="bulkNumberCheckAction">
                    <SearchNumberButton disabled={(!isValid || loading)} className="theme-btn" value='Search Number' onClick={handleSubmit} />
                </div>
            </div>
        </Fragment>
    )
}

export default Index
