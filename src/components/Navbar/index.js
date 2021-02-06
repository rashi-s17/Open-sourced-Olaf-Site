import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavLogo,
  MobileIcon
} from './NavbarElements';
import logo from '../../assets/olaf.svg';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
            <NavLogo>
                Open Sourced Olaf
            </NavLogo>
        </NavLink> 
        <MobileIcon onClick={toggle}>
        <Bars />
        </MobileIcon>
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/members' activeStyle>
            Pod Members
          </NavLink>
          <NavLink to='/projects' activeStyle>
            Projects
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
