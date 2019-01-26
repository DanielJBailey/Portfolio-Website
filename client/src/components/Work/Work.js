import React from 'react';
import styled from 'styled-components';

const Work = () => (
    <WorkContainer>
        <Project>1</Project>
        <Project>2</Project>
        <Project>3</Project>
        <Project>4</Project>
        <Project>5</Project>
        <Project>6</Project>
        <Project>7</Project>
        <Project>8</Project>
    </WorkContainer>
        
)

const WorkContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-start: 1;
    grid-column-end: 3;
    height: 100%;
    min-height: 100vh;
    width: 100vw;
`;

const Project = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #222f3e;
`;

export default Work;