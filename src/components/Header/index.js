import React, { useState, useEffect } from 'react';
import header from "../../descriptions/header";
import { Link, withRouter } from "react-router-dom";
import "./header.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { isLoggedIn, loggedOutUser } from '../../utils/authentication';




const Header = ({ borderBottom, location, history }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(isLoggedIn());
  const pathname = location.pathname;
  // console.log('location', location);

  useEffect(() => {
    setIsOpen(false)
    setIsLogged(isLoggedIn())
  }, [pathname])

  const UserIcon = ({ isOpen, toggle }) => (
    <Dropdown isOpen={isOpen} toggle={toggle}>
      <DropdownToggle>
        <div className='text-center'>
          <i className="fa fa-user-circle d-block" aria-hidden="true"></i>
          <div className='small-text'>User</div>
        </div>
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={() => history.push('/user-profile')}> User Profile</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => {
          // window.location.reload();
          loggedOutUser()
          return history.push('/sign-in')
        }}>Log out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div>
        <Navbar className={`header navbar-custom ${borderBottom && 'border-bottom'}`} light expand="md">
          <Link to="/">
            <img style={{ maxWidth: 150 }} alt="React app" />
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto nav-ul" navbar>
              {
                header.map(({ path, Component, linkClassName, isDropdown }, index) => {
                  return (
                    <NavItem className={`nav-item`} key={index}
                    >
                      {isDropdown ?
                        <div className="nav-link">
                          {Component}
                        </div>
                        :
                        (path === '/sign-in' && isLogged) ?
                          <UserIcon isOpen={isAccountDropdownOpen} toggle={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)} />
                          : <Link className={`nav-link ${linkClassName || ''}`} to={path}>{Component}</Link>
                      }
                    </NavItem>
                  )
                })
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default withRouter(Header);