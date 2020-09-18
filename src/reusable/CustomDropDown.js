import React, { useState, Fragment } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import classnames from 'classnames'

const CustomDropDown = ({ placeholder, className, handleDropdownChange, value, name: Name, options }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown className={classnames("dropdown-bg", className)} isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                {value || placeholder}
            </DropdownToggle>
            <DropdownMenu>
                {options ?
                    options.map(({ name, id }, index) => {
                        return <DropdownItem key={index}
                            value={id}
                            onClick={(e) => handleDropdownChange(Name, name, e.target.value)}
                        >{name}</DropdownItem>
                    }) :
                    <Fragment>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem>Some Action</DropdownItem>
                        <DropdownItem disabled>Action (disabled)</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Foo Action</DropdownItem>
                        <DropdownItem>Bar Action</DropdownItem>
                        <DropdownItem>Quo Action</DropdownItem>
                    </Fragment>
                }

            </DropdownMenu>
        </Dropdown>
    );
}

export default CustomDropDown