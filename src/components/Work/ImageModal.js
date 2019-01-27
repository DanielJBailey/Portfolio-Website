import React from "react";
import styled, {keyframes} from "styled-components";
import { dev_tracker_images,jeopardy_images } from "./ProjectImages";

const ImageModal = ({index, toggle}) => {
   
   return (
      <ModalContainer>
         {/* <CloseModal onClick={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"/></svg>
         </CloseModal>
         <Image src={project_images[index].src}/> */}
      </ModalContainer>
   )
}

const CloseModal = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   padding: 1em;
   background-color: rgba(0,0,0,0.4);
   cursor: pointer;

   svg {
      fill: white;
      width: 35px;
      height: 35px;
   }
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1.0;
    }
`;

const Image = styled.img`
   max-width: 100%;
   border-radius: 10px;
   box-shadow: 3px 4px 8px rgba(0,0,0,0.4);
`;

const ModalContainer = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   background-color: rgba(0,0,0,1);
   height: 100vh;
   width: 100vw;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 100px;
   z-index: 9999;
   animation: ${fadeIn} 0.3s linear;
   @media(max-width: 768px) {
      padding: 10px;
   }
`;


export default ImageModal;
