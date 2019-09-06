import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";
import styled from 'styled-components';
import './App.css';

import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
import { Grid, Form, Input, TextArea, Button, Select } from "semantic-ui-react";

//styled component - main page container
const Container = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid red;

`;

//styled component - div containing the main heading and the cards
const AppContainer = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;      
    background-size: cover;
    border: 1px solid blue;
    

`;

//styled component - page heading
const MainHeading = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: black;
  text-stroke: 5px black;
 

`;


function App() {

  
  return (

    <Container>
      <AppContainer>
      

      <MainHeading>Women's World Cup</MainHeading>      

     

      </AppContainer>
      
    </Container>
  );
}


export default App;
