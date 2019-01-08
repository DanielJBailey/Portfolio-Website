import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const SideMenu = ({ toggleMenu, open }) => (
  <MenuContainer>
    <Overlay onClick={toggleMenu} />
    <MenuList>
      <Link to="/" onClick={toggleMenu}>
        <ListItem open={open}>Home</ListItem>
      </Link>
      <Link to="/about" onClick={toggleMenu}>
        <ListItem open={open}>About</ListItem>
      </Link>
      <Link to="/work" onClick={toggleMenu}>
        <ListItem open={open}>Work</ListItem>
      </Link>
      <Link to="/experience" onClick={toggleMenu}>
        <ListItem open={open}>Experience</ListItem>
      </Link>
      <Link to="/contact" onClick={toggleMenu}>
        <ListItem open={open}>Contact</ListItem>
      </Link>
    </MenuList>
  </MenuContainer>
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
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Overlay = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  animation: 0.5s ${fadeIn} linear;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

const MenuList = styled.ul`
  list-style: none;
  width: 50vw;
  z-index: 999;
`;

const ListItem = styled.li`
  width: 100%;
  max-width: 250px;
  text-align: center;
  cursor: pointer;
  background-color: #222f3e;
  letter-spacing: 1px;
  font-weight: lighter;
  font-size: 16px;
  color: white;
  padding: 20px;
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