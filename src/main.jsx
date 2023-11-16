import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  

  *{
    box-sizing: border-box;
    margin: 0px;
    padding:0px;
  }
  body{
    background-color: white;
    color:black;
    min-height: calc( 100vh - 12px);
    font-family: 'Poppins', sans-serif;
    font-weight:400px;
  }

`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);