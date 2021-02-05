import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.25rem calc((100vw - 1000px) / 2);
  z-index: 10;

  /* Third Nav */
  /* justify-content: flex-start; */
  @media screen and (max-width: 960px) {
      transition: 0.8s all ease
  }
`;

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

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 768px) {
    display: none;
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

export const NavItem = styled.li`
    height:80px;
`