import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { ThemeConsumer } from "../providers/ThemeProvider";

const SideMenu = ({ toggleMenu, open }) => (
   <ThemeConsumer>
      {value => (
         <MenuContainer>
            <Overlay onClick={toggleMenu} value={value} />
            <MenuList>
               <Link to="/" onClick={toggleMenu} className="menu-item">
                  <ListItem open={open} value={value}>
                     Home
                  </ListItem>
               </Link>
               <Link to="/about" onClick={toggleMenu} className="menu-item">
                  <ListItem open={open} value={value}>
                     About
                  </ListItem>
               </Link>
               <Link to="/work" onClick={toggleMenu} className="menu-item">
                  <ListItem open={open} value={value}>
                     Work
                  </ListItem>
               </Link>
               <Link
                  to="/experience"
                  onClick={toggleMenu}
                  className="menu-item"
                  value={value}
               >
                  <ListItem 
                  value={value} open={open}>Experience</ListItem>
               </Link>
            </MenuList>
         </MenuContainer>
      )}
   </ThemeConsumer>
);

const fadeIn = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`;

const slideIn = keyframes`
    0% {
        margin-left: -100vw;
    }
    100% {
        margin-left: 0;
    }
`;

const MenuContainer = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   height: 100vh;
   width: 100vw;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   z-index: 99;
`;

const Overlay = styled.div`
   background-color: ${({
      value: {
         darkTheme,
         colors: { light, dark }
      }
   }) => {
    if(darkTheme) {
      return dark.overlay
    } else return light.overlay
   }};
   animation: 0.5s ${fadeIn} linear;
   height: 100%;
   width: 100%;
   position: absolute;
   top: 0;
   left: 0;
   z-index: 99;
`;

const MenuList = styled.ul`
   list-style: none;
   z-index: 999;

   .menu-item {
      &:hover {
         width: 120%;
      }
   }
`;

const ListItem = styled.li`
   text-align: center;
   cursor: pointer;
   background-color: ${({
      value: {
         darkTheme,
         colors: { light, dark }
      }
   }) => {
    if(!darkTheme) {
      return dark.background
    } else return light.background
   }};
   letter-spacing: 1px;
   font-weight: lighter;
   font-size: 16px;
   color: ${({
      value: {
         darkTheme,
         colors: { light, dark }
      }
   }) => {
    if(!darkTheme) {
      return dark.fontColor
    } else return light.fontColor
   }};
   padding: 20px;
   width: 200px;
   margin-top: 10px;
   box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
   border-top-right-radius: 5px;
   border-bottom-right-radius: 5px;
   animation-name: ${slideIn};
   animation-duration: 0.5s;
   transition: 0.5s;
   &:hover {
      width: 120%;
   }
`;

export default SideMenu;
