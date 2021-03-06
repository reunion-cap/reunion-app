import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  FormGroup,
  Form,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [searchID, setPartyID] = useState();
  const searchParty = (event) => {
    setPartyID(event.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route,
  } = props;

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className={[
              'w-100',
              'align-items-center',
              !logged_in ? 'mr-auto' : '',
            ]}
            navbar
          >
            {!logged_in && (
              <>
                <NavItem>
                  <NavLink href={new_user_route}>Sign Up</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={sign_in_route}>Sign In</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/aboutus'>About Us</NavLink>
                </NavItem>
                <NavItem className='ml-auto'>
                  <NavbarBrand href='/'>Reunion</NavbarBrand>
                </NavItem>
              </>
            )}
            {logged_in && (
              <>
                <NavItem>
                  <NavLink href={sign_out_route}>Sign Out</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to='/eventindex'>
                    My Events
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to='/eventnew'>
                    Make Event
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/aboutus'>About Us</NavLink>
                </NavItem>
                <NavItem className='m-auto'>
                  <NavbarBrand href='/'>Reunion</NavbarBrand>
                </NavItem>
                <NavItem>
                  <Form inline className='searchbar ml-auto d-flex'>
                    <FormGroup>
                      <Label for='itemConfirmationID'>Find Party: </Label>
                      <Input
                        type='search'
                        name='itemConfirmationID'
                        onChange={searchParty}
                        placeholder='Enter Party ID'
                      />
                    </FormGroup>
                    <NavLink tag={Link} to={`/itemconfirmation/${searchID}`}>
                      Go
                    </NavLink>
                  </Form>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
