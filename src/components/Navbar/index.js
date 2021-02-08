import React from 'react';
import {
  Nav,
  NavbarContainer,
  NavLinks,
  NavLink,
  Bars,
  NavMenu,
  NavLogo,
  MobileIcon,
  NavItem
} from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../images/olaf.svg';

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
          <NavMenu>
              <NavItem>
                <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">
                  Projects
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='members' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">
                  Our Team
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLink to="/snowman">
                  Snowman
                </NavLink>
              </NavItem>
            </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
