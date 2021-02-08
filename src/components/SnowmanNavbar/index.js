import React from 'react';
import {
  Nav,
  NavbarContainer,
  NavLink,
  Bars,
  NavLogo,
  MobileIcon,
} from './SnowmanNavbarElements';
import { animateScroll as scroll } from 'react-scroll';

const toggleHome = () => {
  scroll.scrollToTop();
};

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLink to="/" onClick={toggleHome}>
            <NavLogo> Open Sourced Olaf </NavLogo>
          </NavLink>
          <MobileIcon onClick={toggle}>
            <Bars />
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
