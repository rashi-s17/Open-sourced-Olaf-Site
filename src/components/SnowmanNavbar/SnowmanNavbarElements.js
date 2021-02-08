import { FaBars } from 'react-icons/fa';
import { Link as Link } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index: 100;

  /* Third Nav */
  /* justify-content: flex-start; */
  @media screen and (max-width: 960px) {
      transition: 0.8s all ease
  }
`;

export const NavbarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 80px;
   z-index: 1;
   width: 100%;
   padding: 0 24px;
   max-width: 1100px;

`
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavLogo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
  margin-top: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
       display: block;
       position: absolute;
       top: 0;
       right: 0;
       transform: translate(-100%, 60%);
       font-size: 1.8rem;
       cursor: pointer;
       color: #fff;
  }
`

export const NavLinks = styled(LinkS)`
  display: flex;
  color: #fff;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;
