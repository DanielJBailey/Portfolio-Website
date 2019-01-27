import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Fade from "react-reveal/Fade";

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
         <ExperienceContainer>
            <Fade left distance="100px">
               <h1>Where I've been</h1>
               <WorkContainer>
                  <Company
                     onClick={() => this.updateCompanyIndex(0)}
                     index={companyIndex}
                  >
                     Dev Point Labs
                  </Company>
                  <Company
                     onClick={() => this.updateCompanyIndex(1)}
                     index={companyIndex}
                  >
                     Tech Birmingham
                  </Company>
                  <Company
                     onClick={() => this.updateCompanyIndex(2)}
                     index={companyIndex}
                  >
                     Regions Bank
                  </Company>
               </WorkContainer>
               <ExperienceIndicator>
                  <ExperienceBar index={companyIndex} />
               </ExperienceIndicator>
               <PositionsContainer>
                  {companyIndex === 0 ? (
                     <Position>
                        <CompanyName>Dev Point Labs</CompanyName>
                        <Title>Software Engineer</Title>
                        <DatesEmployed>
                           Salt Lake City, UT (Nov 2018 - Feb 2019)
                        </DatesEmployed>
                        <TaskList>
                           <Task>
                              Received the Opportunity in Tech Scholarship from
                              DPL to attend the winter 2018 cohort.
                           </Task>
                           <Task>
                              Completed the full stack Ruby on Rails web
                              development course after completing nearly 800
                              hours of coursework over the course of three
                              months.
                           </Task>
                           <Task>
                              Built several projects with technologies such as
                              Ruby, Ruby on Rails, Vanilla JavaScript, React,
                              Redux, React Context API, Authentication, styled
                              components, deployment with Heroku, Agile
                              methodologies, and PostgreSQL databases.
                           </Task>
                           <Task>
                              Participated in two hackathons where we built a
                              trip planning application called Trip Hackr, and a
                              Youtube clone called UToob. Both were built using
                              Ruby on Rails with React front-ends.
                           </Task>
                        </TaskList>
                     </Position>
                  ) : null}
                  {companyIndex === 1 ? (
                     <Position>
                        <CompanyName>Tech Birmingham</CompanyName>
                        <Title>Assistant Instructor</Title>
                        <DatesEmployed>
                           Birmingham, AL (Jan 2018 - Sep 2018)
                        </DatesEmployed>
                        <TaskList>
                           <Task>
                              Volunteered once per month to help teach young
                              adults between the ages of 9 to 17, the basics of
                              software development.
                           </Task>
                           <Task>
                              Help teach topics covering areas such as basic
                              computer programming skills, basic JavaScript,
                              HTML/CSS, and data.
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
                        <DatesEmployed>
                           Birmingham, AL (Jan 2017 - Sep 2018)
                        </DatesEmployed>
                        <TaskList>
                           <Task>
                              Utilized MySQL to perform multiple data validation
                              procedures for monthly reports to the Federal
                              Reserve.
                           </Task>
                           <Task>
                              Built several stored procedures and reports
                              leveraging SQL to help various branches of the
                              bank make more informed decisions about the future
                              of its banking strategy.
                           </Task>
                           <Task>
                              My direct contributions to our data validation
                              procedures improved overall data accuracy
                              benchmarks from 40% to over 90%.
                           </Task>
                           <Task>
                              Assisted fellow programmers build and design
                              reporting software used monthly by all upper level
                              management to assist them and their division make
                              informed decisions for the bank.
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
                  >
                     The University of Utah
                  </Company>
                  <Company
                     onClick={() => this.updateEducationIndex(1)}
                     index={educationIndex}
                  >
                     The University of Alabama at Birmingham
                  </Company>
               </EducationContainer>
               <EducationIndicator>
                  <EducationBar index={educationIndex} />
               </EducationIndicator>
               <PositionsContainer>
                  {educationIndex === 0 ? (
                     <Education>
                        <CompanyName>The University of Utah</CompanyName>
                        <Title>
                           Full Time Web Development Certification, Professional
                           Education, Dev Point Labs
                        </Title>
                        <DatesEmployed>
                           Salt Lake City, UT (Nov 2018 - Feb 2019)
                        </DatesEmployed>
                        <TaskList>
                           <Task>
                              Completed The University of Utah sponsored Dev
                              Point Labs full time software engineering bootcamp
                              located in Salt Lake City, Utah.
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
                        <DatesEmployed>
                           Birmingham, AL (2011 - 2015)
                        </DatesEmployed>
                        <TaskList>
                           <Task>
                              Volunteered as an Investment Analyst for the UAB
                              Green and Gold Fund, in the alternatives sector
                              (2013-2015).
                           </Task>
                        </TaskList>
                     </Education>
                  ) : null}
               </PositionsContainer>
            </Fade>
         </ExperienceContainer>
      );
   }
}

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
const Position = styled.div`
`;
const Education = styled.div`
`;
const CompanyName = styled.h2``;
const DatesEmployed = styled.p`
   font-size: 14px;
   color: #b3b3b3;
`;
const TaskList = styled.ul`
   list-style: none;
   padding: 10px 1em;
`;
const Task = styled.li`
   font-size: 14px;
   color: #666;
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
`;

const EducationContainer = styled.ul`
   display: grid;
   grid-template-columns: 1fr 1fr;
   list-style: none;
   margin-top: 25px;
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
   color: #b3b3b3;
   &:first-child {
      color: ${props => {
         return props.index === 0 ? "#333" : "#b3b3b3";
      }};
   }
   &:nth-child(2) {
      color: ${props => {
         return props.index === 1 ? "#333" : "#b3b3b3";
      }};
   }
   &:nth-child(3) {
      color: ${props => {
         return props.index === 2 ? "#333" : "#b3b3b3";
      }};
   }
`;

const ExperienceIndicator = styled.div`
   width: 100%;
   position: relative;
   &:after {
      display: block;
      content: "";
      background-color: #ccc;
      height: 3px;
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
   background-color: #333;
   &:after {
      display: block;
      content: "";
      background-color: black;
      height: 3px;
   }
`;

const EducationIndicator = styled.div`
   width: 100%;
   position: relative;
   &:after {
      display: block;
      content: "";
      background-color: #ccc;
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
      background-color: black;
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
   @media (max-width: 425px) {
      padding: 100px 1em;
   }

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

export default Experience;
