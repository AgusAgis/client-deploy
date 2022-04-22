import './App.css';
import React from "react";
import {Route, Routes } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import Home from "./Components/Home.js";
import NavBar from "./Components/NavBar.js";
import {HomeActivity} from "./Components/homeactivity";
import {CreateActivity} from "./Components/CreateActivity";
import Cards from "./Components/Cards.js";
import Detail from './Components/Countrydetail';
import { ActivityDetail } from './Components/Activitydetails';


function App() {
  return (
       
    <div className="App">
      <Routes>
      <Route exact path ="/" element={<Landingpage />} />
      <Route exact path ="/home" element={<Home />} />
      <Route path ="/home" element={<NavBar />} />
      <Route exact path = "/home/:id" element ={<Detail />} />
      <Route path="/activity" element ={<HomeActivity />} />
      <Route exact path="/activity/create" element ={<CreateActivity />} />
      <Route exact path="/activity/:id" element ={<ActivityDetail />} />
  
      </Routes>
    </div>
  );
}

export default App;
