import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { project_images } from "./ProjectImages";
import ImageModal from "./ImageModal";

class Work extends Component {
   state = {
      showModal: false,
      currentImage: null
   };

   toggleModal = index =>
      this.setState({
         showModal: !this.state.showModal,
         currentImage: index
      });

   closeModal = e => {
      e.stopPropagation();
      this.setState({ showModal: false });
   };

   render() {
      let { showModal, currentImage } = this.state;
      return (
         <>
            {showModal ? (
               <ImageModal index={currentImage} toggle={this.closeModal} />
            ) : null}
            <WorkContainer>
               <h1>My Current Work</h1>
               <ProjectContainer>
                  <Project>
                     <ProjectTitle>Dev Tracker</ProjectTitle>
                     <Hr />
                     <ProjectDescription>
                        Dev Tracker is a web application that we built for Dev
                        Point Labs that allows students to log in and track
                        current applications, interviews, and phone calls for
                        companies they are interested in.
                     </ProjectDescription>
                     <ProjectTech>
                        <Tech>React</Tech>
                        <Tech>Ruby on Rails</Tech>
                        <Tech>Redux</Tech>
                        <Tech>Devise Token Auth</Tech>
                        <Tech>PostgreSQL</Tech>
                        <Tech>Styled Components</Tech>
                     </ProjectTech>
                     <ProjectLinks>
                        <Link>
                           <a
                              href="https://github.com/devpointlabs/DevTracker"
                              target="_blank"
                           >
                              View Source Code
                           </a>
                        </Link>
                        <Link>
                           <a
                              href="https://dev-tracker19.herokuapp.com/"
                              target="_blank"
                           >
                              View Live
                           </a>
                        </Link>
                     </ProjectLinks>
                     <Features>
                        <Feature>
                           <FeatureTitle>Application Tracking</FeatureTitle>
                           <FeatureDescription>
                              Users can add, update, and delete applications in
                              order to keep track of multiple applications.
                           </FeatureDescription>
                        </Feature>
                        <Feature>
                           <FeatureTitle>Tracker</FeatureTitle>
                           <FeatureDescription>
                              Users can track applications in a list format and
                              filter based on application status and can take
                              advantage of a custom built search function, to
                              even further filter results.
                           </FeatureDescription>
                        </Feature>
                        <Feature>
                           <FeatureTitle>Tasks</FeatureTitle>
                           <FeatureDescription>
                              Users can create tasks to be completed and
                              schedule a due date to be completed by. Tasks are
                              then displayed on dashboard to help remind users
                              of upcoming tasks to be completed.
                           </FeatureDescription>
                        </Feature>
                        <Feature>
                           <FeatureTitle>Contacts</FeatureTitle>
                           <FeatureDescription>
                              Users can add contacts they have made for
                              companies they are interested in. Users can input
                              information such as links to their LinkedIn
                              accounts or other contact information to help
                              organize all information in one place.
                           </FeatureDescription>
                        </Feature>
                        <Feature>
                           <FeatureTitle>Event Monitoring</FeatureTitle>
                           <FeatureDescription>
                              Events were created with the goal of tracking
                              progress with companies such as upcoming
                              interviews, phone calls, or even offers our users
                              have recieved.
                           </FeatureDescription>
                        </Feature>
                     </Features>
                     <ProjectImages>
                        {project_images.map((image, i) => {
                           return (
                              <Img
                                 key={i}
                                 src={image.src}
                                 alt={image.alt}
                                 onClick={() => this.toggleModal(i)}
                              />
                           );
                        })}
                     </ProjectImages>
                  </Project>
               </ProjectContainer>
            </WorkContainer>
         </>
      );
   }
}

const ProjectLinks = styled.ul`
   list-style: none;
   margin: 10px 0;
`;

const Link = styled.li`
   display: inline-block;
   padding: 5px 10px;
   font-size: 12px;
   border-radius: 5px;
   box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
   margin-right: 10px;
   cursor: pointer;
   a {
      text-decoration: none;
      color: white;
   }
   &:hover {
      opacity: 0.8;
   }
   &:first-child {
      background-color: #333;
   }
   &:last-child {
      background-color: #7673c0;
   }
`;

const ProjectTech = styled.ul`
   list-style: none;
   margin-top: 10px;
`;
const Tech = styled.li`
   display: inline-block;
   padding: 5px;
   border: 1px solid #ccc;
   border-radius: 5px;
   margin-right: 5px;
   font-size: 14px;
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1.0;
    }
`;

const ProjectImages = styled.div`
   margin: 20px 0;
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 10px;
`;

const Img = styled.img`
   max-width: 100%;
   cursor: pointer;
   /* box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); */
   border-radius: 5px;
   border: 1px solid #ccc;
`;

const Feature = styled.li`
   padding-top: 10px;
`;
const FeatureTitle = styled.h4``;
const FeatureDescription = styled.p`
   font-size: 14px;
`;

const Features = styled.ul`
   list-style: none;
   width: 100%;
   padding: 1em;
`;

const Hr = styled.hr`
   width: 50%;
   margin: 10px 0;
   height: 2px;
   background-color: rgba(0, 0, 0, 0.2);
   border: none;
`;

const ProjectContainer = styled.div`
   display: block;
   padding: 50px 0;
`;

const WorkContainer = styled.div`
   height: 100%;
   min-height: 100vh;
   padding: 100px 2em;
   max-width: 800px;
   width: 100%;
   margin: 0 auto;
   animation: ${fadeIn} 1s linear;
   @media(max-width: 425px) {
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

const Project = styled.div`
`;


const ProjectTitle = styled.h2``;

const ProjectDescription = styled.p``;

export default Work;
