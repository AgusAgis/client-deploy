import React from "react";
import {useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useParams,Link } from "react-router-dom";
import { addActivityToCountry, addCountryToAct} from "../Redux/Actions/ActivitiesActions";
import { getCountries } from "../Redux/Actions/CountriesActions";
import {Activitycard} from "./Activitycard";
import "./Activitydetail.css"

export function ActivityDetail(){
    const dispatch = useDispatch();
    const allCountry = useSelector((state) => state.countries);
    const {id} = useParams();
    const act = id;
    const activities = useSelector((state) => state.activities);
    useEffect(() => {
        dispatch(addCountryToAct());
    },[dispatch]);
    useEffect(() =>{
        dispatch(getCountries());
    },[dispatch]);


return(
    <div>
        <NavLink to="/home">
            <button class="btn btn-secondary">Go back home</button>{" "}
        </NavLink>
        <NavLink to="/activity">
            <button class="btn btn-secondary">Go back to the list</button>{" "}
        </NavLink>
        <br />
    <div >
    {activities.map((e) => {
        if(e.id == act) {
            return(
            <div className="containers">
                <Activitycard 
                name={e.name}
                difficulty={e.difficulty} 
                duration={e.duration}    
                season={e.season}  
                id={e.id}
                countries ={e.countries.map((e) => {
                    return(
                        <ul key={e.name}>
                            
                        <Link to={"/home/" + e.id}>{e.id}</Link>
                        <br />
                        <img 
                        width = {50}
                        height = {25}
                        
                        src = {e.flags}
                        alt = "flags not found"
                        />
                        </ul>
                    );
                })}
                />
                
            </div>
            );
        }
    })}
    </div>
    </div>
    )
}