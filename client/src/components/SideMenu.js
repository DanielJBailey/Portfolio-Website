import React from 'react';
import styled, {keyframes} from 'styled-components';

const SideMenu = ({toggleMenu, open}) => (
    <MenuContainer>
        <Overlay onClick={toggleMenu}/>
        <MenuList>
            <ListItem open={open}>Home</ListItem>
            <ListItem open={open}>About</ListItem>
            <ListItem open={open}>Work</ListItem>
            <ListItem open={open}>Experience</ListItem>
            <ListItem open={open}>Contact</ListItem>
        </MenuList>
    </MenuContainer>
)

const fadeIn = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`;

const slideIn = keyframes`
    from {margin-left: -100%}
    to {margin-left: 0}
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
    background-color: rgba(255,255,255,0.7);
    animation: 0.5s ${fadeIn} linear;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

const MenuList = styled.ul`
    list-style: none;
    width: 50vw;
    z-index: 999;
`;

const ListItem = styled.li`
    width: 100%;
    margin-left: ${props=> props.open ? "0" : "-100%"};
    text-align: center;
    cursor: pointer;
    background-color: #222f3e;
    letter-spacing: 1px;
    font-weight: lighter;
    font-size: 16px;
    color: white;
    padding: 20px;
    margin-top: 10px;
    box-shadow: 1px 1px 6px rgba(0,0,0,0.2);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    animation-name: ${slideIn};
    animation-duration: 0.5s;
    animation-delay: 1s;
`;

export default SideMenu;

