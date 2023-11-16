// import { useState } from 'react'
import styled from "styled-components";
import CardsSection from "./Components/CardsSection";
import Header from "./Components/Header";

function App() {

  return (
    <>
      <MainContainer>
        <Header/>
      </MainContainer>
    </>
  );
};

export default App;

const MainContainer = styled.div`
  padding:10px;
`;