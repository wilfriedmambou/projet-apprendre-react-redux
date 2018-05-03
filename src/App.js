import React from 'react';
import {Route} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import {Form ,Button } from "semantic-ui-react";
import LoginPage from "./components/pages/LoginPage";
import Test from "./components/pages/Test";


const App =() => (
<div className ="ui container-fluid"> 
    <Route path="/" exact component ={HomePage} />
    <Route path="/login" exact component ={LoginPage} />
    <Route path ="/enregistrement" exact component ={Test} />
</div>)
; 

export default App;
