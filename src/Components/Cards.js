import React from "react";


export default function Cards({name, flags, continents}){
    return(
        <div className="info">
            <h1 className="text1">{name}</h1>
            <img className="flag" src={flags} alt="flag not found" width="150px" height="100px"/>
            <h1 className="text2">{continents}</h1>
            
        </div>
    );
}