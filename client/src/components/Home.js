import React from 'react';
import styled from 'styled-components';
import SideMenu from './SideMenu';

class Home extends React.Component {
    state={menuOpen: false};

    toggleMenu = () => this.setState(state => ({menuOpen: !state.menuOpen}))

    render() {
        let {menuOpen} = this.state;
        return(
            <HomeContainer>
                <OpenMenu onClick={this.toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </OpenMenu>
                {menuOpen ? <SideMenu toggleMenu={this.toggleMenu} open={menuOpen}/> : null}
                <Name>Daniel Bailey</Name>
                <Title>Software Engineer | Salt Lake City, UT</Title>
            </HomeContainer>
        )
    }
}

const OpenMenu = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: 1em;
    z-index: 9999;

    span {
        display: block;
        background-color: #222f3e;
        width: 50px;
        height: 2px;
        margin-top: 8px;
        border-radius: 2px;
    }
`;

const Name = styled.h1`
    font-size: 55px;
    font-family: 'Staatliches', cursive;
    letter-spacing: 2px;
    color: #222f3e;
    line-height: 1.0;
    @media (max-width: 325px) {
        font-size: 50px;
    }
`;

const Title = styled.p`
    font-size: 16px;
    line-height: 1.0;
    color: #222f3e;
    font-family: 'Sarabun', sans-serif;
    @media (max-width: 325px) {
        font-size: 14px;
    }
`;

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    padding: 2em 1em;
`;

export default Home;