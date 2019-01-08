import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import SideMenu from "./components/SideMenu";
import styled from "styled-components";
import "./App.scss";

class App extends React.Component {
  state = { menuOpen: false };

  toggleMenu = () => {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  };

  render() {
    let { menuOpen } = this.state;
    let className = menuOpen ? "menu-bar open" : "menu-bar";
    let firstChildTransitions = ["translateY(10px)", "rotate(225deg)"];
    let middleChildTransitions = ["rotateY(90deg)"]
    let lastChildTransitions = ["translateY(-10px)", "rotate(-225deg)"];
    return (
      <>
        <OpenMenu onClick={this.toggleMenu}>
          <span className={className} animations={firstChildTransitions} />
          <span className={className} animations={middleChildTransitions} />
          <span className={className} animations={lastChildTransitions} />
        </OpenMenu>
        {menuOpen ? (
          <SideMenu toggleMenu={this.toggleMenu} open={menuOpen} />
        ) : null}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </>
    );
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

  @media (max-width: 325px) {
    margin: 0;
  }
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
      transform: ${props =>
        props.children[0].props.animations.map(animation => {
          return animation;
        })};
    }
    &:nth-child(2) {
      transform-style: preserve-3d;
      transform: ${props =>
        props.children[1].props.animations.map(animation => {
          return animation;
        })};
      opacity: 0;
    }
    &:last-child {
      transform: ${props =>
        props.children[2].props.animations.map(animation => {
          return animation;
        })};
    }
  }
`;

export default App;
