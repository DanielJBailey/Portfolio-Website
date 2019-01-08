import React from "react";
import styled, { keyframes } from "styled-components";

class About extends React.Component {
  state = { long: true };

  handleChange = () => {
    this.setState(state => ({ long: !state.long }));
  };

  render() {
    return (
      <AboutContainer>
        <h1>About</h1>
        <Choice />

        <Bio>
          Hi, my name is Daniel and I am a software engineer with a background
          and education in finance. I am originally from Birmingham, Alabama,
          but recently relocated to Salt Lake City, Utah to pursue my interest
          in software engineering.
        </Bio>
        <Bio>
          After working in the banking industry for a few years after college, I
          decided to pursue an exciting and challenging career in software
          development. I was honored to receive the Opportunity in Tech
          Scholarship for Dev Point Labs, located in the heart of Salt Lake
          City, UT. I am currently a student at Dev Point Labs and will graduate
          from the University of Utah partnered program in February of 2019.
        </Bio>
        <Bio>
          I have a passion for design as well as an even greater hunger for
          development. I thrive in fast paced environments, surrounded by people
          with similair interests. I get excited about helping others learn how
          to code, and see them get excited about things they are able to build.
          I love to be challenged every day whether it be a new algorithm
          challenge or designing and developing an application with technology
          I've never used before.
        </Bio>
        <SkillsList>
            <p>Tech I am currently using includes:</p>
            <Skill>- JavaScript</Skill>
            <Skill>- Ruby</Skill>
            <Skill>- React w/ Redux</Skill>
            <Skill>- Ruby on Rails</Skill>
            <Skill>- MySQL/PostgreSQL</Skill>
            <Skill>- HTML/CSS/SASS</Skill>
        </SkillsList>
        <Bio>
          In my free time you can usually find me snowboarding with friends,
          playing video games, traveling all over the world, trying a new
          restaurant, or exploring the outdoors with my amazing wife Jess and my
          goofy golden retriever named Riggs.
        </Bio>
        
      </AboutContainer>
    );
  }
}

const SkillsList = styled.ul`
    width: 100%;
    padding-top: 25px;
    list-style: none; 
`;

const Skill = styled.li`
    padding: 10px;
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1.0;
    }
`;

const Choice = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  z-index: 1;

  p {
    margin-left: 10px;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  padding: 2em;
  animation: ${fadeIn} 1s linear;

  h1 {
    &:before {
      display: block;
      content: "";
      width: 50px;
      height: 10px;
      background-color: #222f3e;
    }
  }
`;

const Bio = styled.p`
  line-height: 1.5;
  padding-top: 25px;

  img {
    float: right;
    @media (max-width: 425px) {
      width: 100%;
    }
  }
`;

export default About;
