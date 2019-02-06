import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Fade from "react-reveal/Fade";
import { ThemeConsumer } from "../../providers/ThemeProvider";

class Experience extends Component {
   state = {
      companyIndex: 0,
      educationIndex: 0
   };

   updateCompanyIndex = index => {
      this.setState({ companyIndex: index });
   };

   updateEducationIndex = index => {
      this.setState({ educationIndex: index });
   };

   render() {
      const { companyIndex, educationIndex } = this.state;
      return (
         <ThemeConsumer>
            {value => (
               <ExperienceBackground value={value}>
                  <ExperienceContainer value={value}>
                     <Fade left distance="100px">
                        <Heading value={value}>Where I've been</Heading>
                        <WorkContainer>
                           <Company
                              onClick={() => this.updateCompanyIndex(0)}
                              index={companyIndex}
                              value={value}
                           >
                              Dev Point Labs
                           </Company>
                           <Company
                              onClick={() => this.updateCompanyIndex(1)}
                              index={companyIndex}
                              value={value}
                           >
                              Tech Birmingham
                           </Company>
                           <Company
                              onClick={() => this.updateCompanyIndex(2)}
                              index={companyIndex}
                              value={value}
                           >
                              Regions Bank
                           </Company>
                        </WorkContainer>
                        <ExperienceIndicator value={value}>
                           <ExperienceBar value={value} index={companyIndex} />
                        </ExperienceIndicator>
                        <PositionsContainer>
                           {companyIndex === 0 ? (
                              <Position>
                                 <CompanyName>Dev Point Labs</CompanyName>
                                 <Title>Software Engineer</Title>
                                 <DatesEmployed value={value}>
                                    Salt Lake City, UT (Nov 2018 - Feb 2019)
                                 </DatesEmployed>
                                 <TaskList>
                                    <Task value={value}>
                                       Received the Opportunity in Tech
                                       Scholarship from DPL to attend the winter
                                       2018 cohort.
                                    </Task>
                                    <Task value={value}>
                                       Completed the full stack Ruby on Rails
                                       web development course after completing
                                       nearly 800 hours of coursework over the
                                       course of three months.
                                    </Task>
                                    <Task value={value}>
                                       Built several projects with technologies
                                       such as Ruby, Ruby on Rails, Vanilla
                                       JavaScript, React, Redux, React Context
                                       API, Authentication, styled components,
                                       deployment with Heroku, Agile
                                       methodologies, and PostgreSQL databases.
                                    </Task>
                                    <Task value={value}>
                                       Participated in two hackathons where we
                                       built a trip planning application called
                                       Trip Hackr, and a Youtube clone called
                                       UToob. Both were built using Ruby on
                                       Rails with React front-ends.
                                    </Task>
                                 </TaskList>
                              </Position>
                           ) : null}
                           {companyIndex === 1 ? (
                              <Position>
                                 <CompanyName>Tech Birmingham</CompanyName>
                                 <Title>Assistant Instructor</Title>
                                 <DatesEmployed value={value}>
                                    Birmingham, AL (Jan 2018 - Sep 2018)
                                 </DatesEmployed>
                                 <TaskList>
                                    <Task value={value}>
                                       Volunteered once per month to help teach
                                       young adults between the ages of 9 to 17,
                                       the basics of software development.
                                    </Task>
                                    <Task value={value}>
                                       Help teach topics covering areas such as
                                       basic computer programming skills, basic
                                       JavaScript, HTML/CSS, and data.
                                    </Task>
                                 </TaskList>
                              </Position>
                           ) : null}
                           {companyIndex === 2 ? (
                              <Position>
                                 <CompanyName>Regions Bank</CompanyName>
                                 <Title>
                                    Assistant Vice President - Risk Analyst III
                                 </Title>
                                 <DatesEmployed value={value}>
                                    Birmingham, AL (Jan 2017 - Sep 2018)
                                 </DatesEmployed>
                                 <TaskList>
                                    <Task value={value}>
                                       Utilized MySQL to perform multiple data
                                       validation procedures for monthly reports
                                       to the Federal Reserve.
                                    </Task>
                                    <Task value={value}>
                                       Built several stored procedures and
                                       reports leveraging SQL to help various
                                       branches of the bank make more informed
                                       decisions about the future of its banking
                                       strategy.
                                    </Task>
                                    <Task value={value}>
                                       My direct contributions to our data
                                       validation procedures improved overall
                                       data accuracy benchmarks from 40% to over
                                       90%.
                                    </Task>
                                    <Task value={value}>
                                       Assisted fellow programmers build and
                                       design reporting software used monthly by
                                       all upper level management to assist them
                                       and their division make informed
                                       decisions for the bank.
                                    </Task>
                                 </TaskList>
                              </Position>
                           ) : null}
                        </PositionsContainer>
                     </Fade>
                     <Fade left distance="100px">
                        <h1>Where I've learned</h1>
                        <EducationContainer>
                           <Company
                              onClick={() => this.updateEducationIndex(0)}
                              index={educationIndex}
                              value={value}
                           >
                              The University of Utah
                           </Company>
                           <Company
                              onClick={() => this.updateEducationIndex(1)}
                              index={educationIndex}
                              value={value}
                           >
                              The University of Alabama at Birmingham
                           </Company>
                        </EducationContainer>
                        <EducationIndicator value={value}>
                           <EducationBar value={value} index={educationIndex} />
                        </EducationIndicator>
                        <PositionsContainer>
                           {educationIndex === 0 ? (
                              <Education>
                                 <CompanyName>
                                    The University of Utah
                                 </CompanyName>
                                 <Title>
                                    Full Time Web Development Certification,
                                    Professional Education, Dev Point Labs
                                 </Title>
                                 <DatesEmployed value={value}>
                                    Salt Lake City, UT (Nov 2018 - Feb 2019)
                                 </DatesEmployed>
                                 <TaskList>
                                    <Task value={value}>
                                       Completed The University of Utah
                                       sponsored Dev Point Labs full time
                                       software engineering bootcamp located in
                                       Salt Lake City, Utah.
                                    </Task>
                                 </TaskList>
                              </Education>
                           ) : null}
                           {educationIndex === 1 ? (
                              <Education>
                                 <CompanyName>
                                    The University of Alabama at Birmingham
                                 </CompanyName>
                                 <Title>Bachelor of Science in Finance</Title>
                                 <DatesEmployed value={value}>
                                    Birmingham, AL (2011 - 2015)
                                 </DatesEmployed>
                                 <TaskList>
                                    <Task value={value}>
                                       Volunteered as an Investment Analyst for
                                       the UAB Green and Gold Fund, in the
                                       alternatives sector (2013-2015).
                                    </Task>
                                 </TaskList>
                              </Education>
                           ) : null}
                        </PositionsContainer>
                     </Fade>
                  </ExperienceContainer>
               </ExperienceBackground>
            )}
         </ThemeConsumer>
      );
   }
}

const Heading = styled.h1`
   &:before {
      display: block;
      content: "";
      width: 50px;
      height: 10px;
      background-color: ${({
         value: {
            darkTheme,
            colors: { light, dark }
         }
      }) => {
         if (darkTheme) {
            return "#fff";
         } else return light.fontColor;
      }};
   }
`;

const ExperienceBackground = styled.div`
   width: 100%;
   height: 100%;
   min-height: 100vh;
   background-color: ${({
      value: {
         darkTheme,
         colors: { light, dark }
      }
   }) => {
      if (darkTheme) {
         return dark.background;
      } else return light.background;
   }};
`;

const fadeIn = keyframes`
    0% {
       opacity: 0;
      }
      100% {
         opacity: 1.0;
      }
`;

const PositionsContainer = styled.div`
   padding: 2em;
   @media (max-width: 425px) {
      padding: 2em 0;
   }
`;
const Title = styled.h4``;
const Position = styled.div``;
const Education = styled.div``;
const CompanyName = styled.h2``;
const DatesEmployed = styled.p`
   font-size: 14px;
   color: ${({
      value: {
         darkTheme,
         colors: { light, dark }
      }
   }) => {
      if (darkTheme) {
         return dark.lightText;
      } else return light.lightText;
   }};
`;
const TaskList = styled.ul`
   list-style: none;
   padding: 10px 1em;
`;
const Task = styled.li`
   font-size: 14px;
   color: ${({
      value: {
         darkTheme,
         colors: { light, dark }
      }
   }) => {
      if (darkTheme) {
         return dark.lightText;
      } else return light.lightText;
   }};
   line-height: 1.5;

   &:not(:first-child) {
      margin-top: 10px;
   }

   &:before {
      display: inline-block;
      content: "►";
      padding-right: 5px;
   }

   .scholarship {
      font-style: italic;
   }
`;

const WorkContainer = styled.ul`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   list-style: none;
   margin-top: 25px;
   background-color: transparent;
`;

const EducationContainer = styled.ul`
   display: grid;
   grid-template-columns: 1fr 1fr;
   list-style: none;
   margin-top: 25px;
   background-color: transparent;
`;

const Company = styled.li`
   font-size: 14px;
   display: flex;
   flex-direction: column;
   cursor: pointer;
   justify-content: center;
   align-items: center;
   padding: 10px 5px;
   text-align: center;

   &:first-child {
      color: ${props => {
         if (props.index === 0 && props.value.darkTheme) {
            return props.value.colors.dark.fontColor;
         } else if (props.index !== 0 && props.value.darkTheme) {
            return props.value.colors.dark.lightText;
         }
      }};
   }
   &:nth-child(2) {
      color: ${props => {
         if (props.index === 1 && props.value.darkTheme) {
            return props.value.colors.dark.fontColor;
         } else if (props.index !== 0 && props.value.darkTheme) {
            return props.value.colors.dark.lightText;
         }
      }};
   }
   &:nth-child(3) {
      color: ${props => {
         if (props.index === 2 && props.value.darkTheme) {
            return props.value.colors.dark.fontColor;
         } else if (props.index !== 0 && props.value.darkTheme) {
            return props.value.colors.dark.lightText;
         }
      }};
   }
`;

const ExperienceIndicator = styled.div`
   width: 100%;
   position: relative;
   &:after {
      display: block;
      content: "";
      height: 3px;
      background-color: ${({
         value: {
            darkTheme
         }
      }) => {
         if (darkTheme) {
            return "rgba(0,0,0,0.4)";
         } else return "#ccc";
      }};
   }
`;

const ExperienceBar = styled.div`
   position: absolute;
   transition: 0.5s ease-in-out;
   bottom: 0;
   left: ${props => {
      switch (props.index) {
         case 0:
            return "0";
         case 1:
            return "33.333%";
         case 2:
            return "66.666%";
         default:
            return "0";
      }
   }};
   width: 33.333%;
   &:after {
      display: block;
      content: "";
      background-color: ${({
         value: {
            darkTheme,
            colors: {light, dark}
         }
      }) => {
         if (darkTheme) {
            return dark.fontColor;
         } else return light.fontColor;
      }};
      height: 3px;
   }
`;

const EducationIndicator = styled.div`
   width: 100%;
   position: relative;
   &:after {
      display: block;
      content: "";
      background-color: ${({
         value: {
            darkTheme
         }
      }) => {
         if (darkTheme) {
            return "rgba(0,0,0,0.4)";
         } else return "#ccc";
      }};
      height: 3px;
   }
`;

const EducationBar = styled.div`
   position: absolute;
   transition: 0.5s ease-in-out;
   bottom: 0;
   left: ${props => {
      switch (props.index) {
         case 0:
            return "0";
         case 1:
            return "50%";
         default:
            return "0";
      }
   }};
   width: 50%;
   background-color: #333;
   &:after {
      display: block;
      content: "";
      background-color: ${({
         value: {
            darkTheme,
            colors: {light, dark}
         }
      }) => {
         if (darkTheme) {
            return dark.fontColor;
         } else return light.fontColor;
      }};
      height: 3px;
   }
`;

const ExperienceContainer = styled.div`
   height: 100%;
   min-height: 100vh;
   padding: 100px 2em;
   max-width: 600px;
   width: 100%;
   margin: 0 auto;
   animation: ${fadeIn} 1s linear;
   color: ${({
      value: {
         darkTheme,
         colors: { light, dark }
      }
   }) => {
      if (darkTheme) {
         return dark.fontColor;
      } else return light.fontColor;
   }};
   @media (max-width: 425px) {
      padding: 100px 1em;
   }
`;

export default Experience;
