import React from 'react';
import styled from 'styled-components';
import SideMenu from './SideMenu';

class Home extends React.Component {
    state={menuOpen: false};

    toggleMenu = () => {
        this.setState(state => ({menuOpen: !state.menuOpen}))
    }

    render() {
        let {menuOpen} = this.state;
        let className = menuOpen ? "menu-bar open" : "menu-bar";
        let firstChildTransitions = ["translateY(10px)", "rotate(225deg)"];
        let lastChildTransitions = ["translateY(-10px)", "rotate(-225deg)"];
        return(
            <HomeContainer>
                <OpenMenu onClick={this.toggleMenu}>
                    <span className={className} animations={firstChildTransitions}></span>
                    <span className={className}></span>
                    <span className={className} animations={lastChildTransitions}></span>
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
    padding: 1em;
    cursor: pointer;
    z-index: 9999;
    .menu-bar {
        display: block;
        width: 50px;
        height: 2px;
        margin-top: 8px;
        border-radius: 2px;
        background-color: black;
        transition: 0.75s;
    }
    .menu-bar.open {
        &:first-child {
            transform: ${props => props.children[0].props.animations.map(animation => {
                return animation
            })}
        }
        &:nth-child(2) {
            opacity: 0;
        }
        &:last-child {
            transform: ${props => props.children[2].props.animations.map( animation => {
                return animation
            })}
        }
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
    padding: 2em;
`;

export default Home;