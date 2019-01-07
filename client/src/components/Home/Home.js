import React from "react";
import styled from "styled-components";

const Home = () => (
  <HomeContainer>
    <Name>Daniel Bailey</Name>
    <Title>Software Engineer | Salt Lake City, UT</Title>
  </HomeContainer>
);

const Name = styled.h1`
  font-size: 55px;
  font-family: "Staatliches", cursive;
  letter-spacing: 2px;
  color: #222f3e;
  line-height: 1;
  @media (max-width: 325px) {
    font-size: 50px;
  }
`;

const Title = styled.p`
  font-size: 16px;
  line-height: 1;
  color: #222f3e;
  font-family: "Sarabun", sans-serif;
  @media (max-width: 325px) {
    font-size: 14px;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  padding: 2em;
`;

export default Home;
