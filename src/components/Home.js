import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const Home = () => {

    return (
        <Container>
            <MenuOpen>
                <span className="open"></span>
                <span className="open"></span>
                <span className="open"></span>
            </MenuOpen>
            <Menu />
            <Name>Daniel Bailey</Name>
            <Title>Software Engineer | SLC, Utah</Title>
        </Container>
    )
}



const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    padding: 1em;
    position: relative;
    color: #1B1B1E;
    overflow-y: scroll;
`;

const Name = styled.h1`
    font-size: 4em;
    letter-spacing: -2px;
    margin-left: -4px;
    line-height: 1.0;
    font-family: 'Catamaran', sans-serif;
    @media (max-width: 320px) {
        font-size: 3.5em;
    }
`;

const Title = styled.h1`
    line-height: 1.0;
    font-family: 'Catamaran', sans-serif;
    font-size: 1.25em;
    margin: 5px 0;
    @media (max-width: 320px) {
        font-size: 1.1em;
    }
`;

const MenuOpen = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 1em;
    z-index: 99;
    span {
        width: 50px;
        height: 3px;
        border-radius: 3px;
        background-color: #fff;
        display: block;
        content: "";
        &:not(:first-child) {
            margin-top: 10px;
        }
    }
    span.open {
        &:first-child {
            transform: rotate(45deg);
        }
        &:nth-child(2) {
            display: none;
        }
        &:last-child {
            transform: rotate(-45deg) translateY(-9px) translateX(10px);
        }
    }
`;


export default Home;