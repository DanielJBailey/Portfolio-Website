import React from "react";
import styled from "styled-components";
import { project_images } from "./ProjectImages";

const ImageModal = (index) => {
   return (
      <ModalContainer>
         <Image src={project_images[index.index].src}/>
      </ModalContainer>
   )
}

const Image = styled.img`
   max-width: 100%;
   border-radius: 10px;
   box-shadow: 3px 4px 8px rgba(0,0,0,0.4);
`;

const ModalContainer = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   background-color: rgba(0,0,0,0.7);
   height: 100vh;
   width: 100vw;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 100px;
   z-index: 9999;
`;


export default ImageModal;
