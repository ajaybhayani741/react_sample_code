/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react'
import { Button, Row, Col } from 'reactstrap';
import personalFormAttribute from '../../descriptions/user-info/personal-info'
import billingFormAttribute from '../../descriptions/user-info/billing-address'
import Form from '../../reusable/Form'
import { useDispatch, useSelector } from 'react-redux';
import { getPersonalInfoAction, updatePersonalInfoAction, addPersonalInfoAction } from '../../redux/actions/userAction';
import { setFormValuesAction } from '../../redux/actions/formAction';
import country from '../../descriptions/country-state-city/country.json'
import state from '../../descriptions/country-state-city/state.json'

const formsGroup = [
    {
        title: 'Test User',
        sm: '12',
        formPath: 'personal-info',
        formAttributes: personalFormAttribute
    },
    {
        title: 'Billing Address',
        sm: '6',
        formPath: 'user-billing-address',
        formAttributes: billingFormAttribute,
        state
    }
];

const UserInfo = () => {
    let isMount = false;
    const dispatch = useDispatch();
    const userPersonalInfo = useSelector(state => state.user.userInfo);
    const formData = useSelector(state => state.form.formData)
    const isSuccess = useSelector(state => state.user.isSuccess);
    console.log('user personal info', userPersonalInfo)
    // console.log('isSuccess', isSuccess)

    useEffect(() => {
        isMount = true;
        if (isMount) dispatch(getPersonalInfoAction())
        return () => {
            isMount = false
        }
    }, []);
    React.useEffect(() => {
        billingFormAttribute.country.options = country
    }, [])

    useEffect(() => {
        if (isSuccess && Object.keys(userPersonalInfo).length !== 0) {
            // console.log('isSuccess', isSuccess)
            dispatch(setFormValuesAction(formsGroup[0].formPath, userPersonalInfo.personalInfo, personalFormAttribute))
            dispatch(setFormValuesAction(formsGroup[1].formPath, userPersonalInfo.billingAddress, billingFormAttribute))
        }
    }, [isSuccess])

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert('working')
    }

    const updateInfo = () => {
        console.log('update');
        const data = {
            personalInfo: formData[formsGroup[0].formPath],
            billingAddress: formData[formsGroup[1].formPath]
        }
        if (Object.keys(userPersonalInfo).length !== 0) {
            dispatch(updatePersonalInfoAction(data, userPersonalInfo.id))
        } else {
            dispatch(addPersonalInfoAction(data))
        }

    }

    return (
        <Fragment>
            {formsGroup.map(({ title, sm, formPath, formAttributes, state }, index) => (
                <Fragment key={index}>
                    <Row className="mt-4 mb-3">
                        <Col sm="12">
                            <div className="user-profile">
                                {title}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={sm}>
                            <Form
                                formAttributes={formAttributes}
                                formPath={formPath}
                                {...{ handleSubmit, state }} />
                        </Col>
                    </Row>
                </Fragment>
            ))}
            <Row className="mt-4 btn-margin">
                <Button className="save-btn ml-sm-auto" onClick={updateInfo}>Save</Button>
            </Row>
        </Fragment>
    )
}

export default UserInfo
