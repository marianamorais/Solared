import styled from 'styled-components';

export const Header = styled.header`
 position: fixed;
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 color: rgb(255, 255, 255);
 z-index: 1;
 transition: 0.5s ease-out;
`;

export const Logo = styled.h1`
 color: #ffa53e;
 font-size: 17px;
 cursor: pointer;
 text-transform: uppercase;
 transition: all 0.3s ease-in; 
 padding: 0px 0% 0% 7%;
 &:hover {
  color: rgb(255, 123, 0);
 }
`;

export const HeaderNav = styled.ul`
 display: flex;
 padding: 0 7% 0 0;
`;

export const NavLink = styled.li`
 padding: 5px 20px;
 list-style: none;
 color: #000000;
 cursor: pointer;
 list-style: none;
 font-size: 16px;
 &:hover {
  color: aquamarine;
 }
`;


