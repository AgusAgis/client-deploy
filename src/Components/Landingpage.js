import "./Landingpage.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Landingpage = () => {
    return (
        <div className="body" >
        <h1 className="title"> WELCOME TO THE WORLD! </h1>
        <NavLink to ="/home" > 
        <button className="button">Enter</button>
        </NavLink>
        </div>
    )
}

export default Landingpage; 