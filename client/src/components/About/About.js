import React from 'react';
import styled, {keyframes} from 'styled-components';

const About = () => (
    <AboutContainer>
        <h1>About</h1>
        <Bio>Software engineer with a background and education in finance. Left the banking industry mid to late 2018, where I was an Assistant Vice President at Regions Bank in Birmingham, AL, to pursue my passion for software development. I am honored to have received the Opportunity in Tech Scholarship for Dev Point Labs, a full stack ruby on rails bootcamp, located in the heart of Salt Lake City, Utah which I graduate from in February 2019.</Bio>

        <Bio>I am skilled in vanilla JavaScript, HTML, CSS/SASS, as well as React for front end development. I have experience with build tools such as Git, Gulp, and webpack and also have strong experience with SQL, that I used extensively in the banking industry as an Analyst. I love working with Ruby on Rails on the backend, but also have experience working with Node, and Express. I have recently been using PostgreSQL, and MongoDB for databases.</Bio>

        <Bio>I have a passion for design as well as an even greater hunger for development. I love helping others learn how to code and see them get excited about things they are building. I love to be challenged every day whether it be a new algorithm challenge or designing and developing an application to solve a unique problem with technology I've never used before. I thrive in fast paced environments, surrounded by people with similair interests. I'm excited for my future in software development and look forward to meeting everyone in tech around Salt Lake.</Bio>   
    </AboutContainer>
)

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1.0;
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
    max-width: 800px;
    margin: 0 auto;

    h1 {
        &:before {
            display: block;
            content: '';
            width: 50px;
            height: 10px;
            background-color: #222f3e;
        }
    }
`;

const Bio = styled.p`
    line-height: 1.5;
    font-size: 18px;
    padding-top: 25px;
`;

export default About;