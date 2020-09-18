
import React, { useEffect } from 'react'
import CustomInput from './CustomInput'
import ButtonMapping from './ButtonMapping'
import { values, keys } from '../utils/regex'
import { Form, FormGroup, Col, Row, Label, FormText } from 'reactstrap';
import CustomDropDown from './CustomDropDown';
import PopOverDropDown from './PopOverDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeAction, requiredAction } from '../redux/actions/formAction';

const CustomForm = (props) => {
    const { formAttributes, handleSubmit, buttonAttributes,
        inputClassName, inputAddonClassName, labelClassName,
        rowClass, formPath, state, industryRadioClassName,
        optionsClassName } = props
    const form = useSelector(state => state.form)
    const { fieldErrors, formData } = form
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requiredAction(formAttributes, formPath));
    }, [dispatch, formAttributes, formPath])

    const handleChange = (e) => {
        const { name, value } = e.target
        dispatchAction(name, value)
    }

    const popOverHandleChange = (name, value) => {
        dispatchAction(name, value)
    }

    const dispatchAction = (name, value) => {
        dispatch(onChangeAction(name, value, formPath, formAttributes[name]))
    }

    const handleDropdownChange = (type, name, id) => {
        if (type === 'country') {
            formAttributes.state.options = state.filter(({ country_id }) => country_id === String(id))
            dispatchAction('state', '')
        }
        dispatchAction(type, name)
    }
    return (
        <Form className="form-width" onSubmit={handleSubmit}>
            <Row className={rowClass}>
                {
                    values(formAttributes).map(({ className, type, sm, xs, formGroupClassName, options, ...rest }, index) => {
                        const name = keys(formAttributes)[index];
                        // const value = formData[formPath][name];
                        let settingForm = ''
                        switch (type) {
                            case 'popover-dropdown':
                                settingForm = <PopOverDropDown {...{ ...rest, name, popOverHandleChange }} />
                                break;
                            case 'dropdown':
                                settingForm = <CustomDropDown
                                    value={formData[formPath]?.[name]}
                                    {...{ options, ...rest, name, handleDropdownChange }} />
                                break;
                            // case 'date':
                            //     settingForm = (<DatePicker id="example-datepicker"
                            //         value={this.state.value}
                            //         onChange={(v, f) => this.handleChange(v, f)} />)
                            //     break;
                            case 'radio':
                                settingForm = (
                                    options.map(({ labelName, value }, index) => {
                                        return (
                                            <div key={index} className={optionsClassName}>
                                                <CustomInput
                                                    type={type}
                                                    checked={String(formData[formPath]?.[name]) === String(value) || false}
                                                    name={name}
                                                    id={String(index)}
                                                    value={value}
                                                    onChange={(e) => handleChange(e)} />
                                                <Label
                                                    for={String(index)}
                                                    className='text-capitalize mb-1'>
                                                    {labelName}
                                                </Label>
                                            </div>
                                        )
                                    })
                                )
                                break;
                            default:
                                settingForm = (
                                    <CustomInput
                                        value={formData[formPath]?.[name] || ''}
                                        className={inputClassName || ''}
                                        {...{ name, type, handleChange, inputAddonClassName, ...rest }}
                                        invalid={fieldErrors[formPath]?.[name]}
                                    />
                                )
                                break;
                        }
                        return (
                            <Col {...{ sm, xs }} key={index} className={className}>
                                <FormGroup className={formGroupClassName || industryRadioClassName}>
                                    {rest.label && type !== 'radio' && <Label className={labelClassName ? labelClassName : ''}>{rest.label}</Label>}
                                    {settingForm}
                                    <FormText className='text-danger error-text'>
                                        {fieldErrors[formPath]?.[name] && rest.error?.length > 0 &&
                                            (formData[formPath]?.[name] === '' ? rest.error[0] : rest.error[1])
                                        }
                                    </FormText>
                                </FormGroup>
                            </Col>
                        )
                    })
                }
            </Row>
            {
                buttonAttributes &&
                <ButtonMapping buttonAttributes={buttonAttributes} />
            }
        </Form >
    )
}
export default CustomForm