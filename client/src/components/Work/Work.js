import React, { Component } from "react";
import styled from "styled-components";
import { project_images } from "./ProjectImages";
import ImageModal from "./ImageModal";

class Work extends Component {
   state = {
      showModal: false,
      currentImage: null
   };

   toggleModal = (index) =>
      this.setState({
         showModal: !this.state.showModal,  
         currentImage: index
      });

   render() {
      let { showModal, currentImage } = this.state;
      return (
         <>
            {showModal ? <ImageModal index={currentImage} /> : null}
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
                     <ClickMessage>
                        Click on images to view larger...
                     </ClickMessage>
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
                  <Project />
                  <Project />
               </ProjectContainer>
            </WorkContainer>
         </>
      );
   }
}

const ClickMessage = styled.p`
   font-size: 14px;
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
   padding: 1em 2em;
`;

const Hr = styled.hr`
   width: 50%;
   margin: 10px 0;
   height: 2px;
   background-color: rgba(0, 0, 0, 0.2);
   border: none;
`;

const ProjectContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   grid-gap: 1em;
   padding: 50px 0;
`;

const WorkContainer = styled.div`
   height: 100%;
   min-height: 100vh;
   padding: 100px 2em;
   max-width: 800px;
   width: 100%;
   margin: 0 auto;

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

const Project = styled.div``;

const ProjectTitle = styled.h2``;

const ProjectDescription = styled.p``;

export default Work;
