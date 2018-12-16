import React from 'react';
import styled from 'styled-components';

const Home = () => (
    <Container>
        <Menu>Menu</Menu>
        <Line></Line>
        <Title>Software Engineer | SLC, Utah</Title>
        <Name>Daniel Bailey</Name>
    </Container>
)

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    padding: 1em;
    position: relative;
`;

const Name = styled.h1`
    font-size: 4em;
    letter-spacing: -2px;
    margin-left: -4px;
    line-height: 1.0;
    font-family: 'Catamaran', sans-serif;
`;

const Title = styled.h1`
    line-height: 1.0;
    font-family: 'Catamaran', sans-serif;
    font-size: 1.25em;
    margin-top: 5px;
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    margin: 1em;
    font-weight: 400;
    font-family: 'Catamaran', sans-serif;
    font-size: 1.25em;
`;

const Line = styled.hr`
    width: 50%;
    height: 10px;
    background-color: rgba(0,0,0,0.7);
    margin: 10px 0;
    border: none;
    outline: none;
`;

export default Home;