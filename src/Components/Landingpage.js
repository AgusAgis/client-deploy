import "./Landingpage.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Landingpage = () => {
    return (
        <div className="body" >
        <h1 className="title"> WELCOME TO THE WORLD! </h1>
        <NavLink to ="/home" > 
        <button className="button">Enter</button>
        </NavLink>
       
        <section className="title2" >
         <a
          className="a"
          href="https://www.linkedin.com/in/agustin-agis/"
        >
          <FaLinkedin /> 
        </a>
        <a
          className="a"
          href="https://www.github.com/AgusAgis"
        >
          <FaGithub/>
        </a>
        <p>Copyright © 2022 Agustin-Agis.</p>
         <p>All rights reserved</p>
          
      </section>
      
    
        
      </div>
    )
}

export default Landingpage; 