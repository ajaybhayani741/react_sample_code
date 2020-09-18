import React, { useState } from 'react'
import repeatersList from '../../mockdata/repeaters.json'
import { Row, Col, Input, Label } from 'reactstrap';

function Index() {
    const [repeaters, setRepeaters] = useState(repeatersList.data);
    const handleCategory = (e, id) => {
        const { checked } = e.target
        const repeatersClone = { ...repeaters };
        Object.keys(repeatersClone).map((key, i) => (
            repeatersClone[key].forEach(pattern => {
                if (pattern.id === id) {
                    pattern.checked = checked
                }
            })
        ));
        setRepeaters(repeatersClone)
    }

    return (
        <div className='popover-block'>
            <Row className={'px-5 py-3 repeater-tooltip'}>
                {Object.keys(repeaters).map((key, i) => (
                    <Col sm={'3'} key={i}>
                        {repeaters[key].length > 0 && repeaters[key].map((pattern, patternIndex) => {
                            return <div key={patternIndex}>
                                <Input type="checkbox"
                                    checked={pattern.checked}
                                    name={pattern.name}
                                    id={`${pattern.id}`}
                                    onChange={(e) => handleCategory(e, pattern.id)} />
                                <Label
                                    for={`${pattern.id}`}
                                    className='text-capitalize mb-1 w100'> <span>{pattern.name}</span>
                                </Label>
                            </div>
                        })}
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Index
