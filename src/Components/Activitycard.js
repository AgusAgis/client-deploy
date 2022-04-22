import React from "react";


export function Activitycard({name, difficulty,duration,season, countries,id}){
    return(
        <div>
            <li className="center">
                <h3 >{name}</h3>
                <p ><strong>Difficulty:</strong>{difficulty} </p>
                <p ><strong>Duration:</strong>{duration}</p>
                <p><strong>Season:</strong>{season}</p>
                <p ><strong>Country:</strong>{countries}</p>
                <p><strong>Id:</strong>{id}</p>
            </li>
        </div>
    );
}