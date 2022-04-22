import React from "react"; 
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountriesById } from "../Redux/Actions/CountriesActions";
import { Link, useParams} from "react-router-dom";
import "./Countrydetails.css";
// import { ActivityDetail } from "./Activitydetails";

export default function Detail (){
    const dispatch = useDispatch();
    const { id } = useParams();
    const activities = useSelector((state) => state.activities);

    useEffect(() =>{
        dispatch(getCountriesById(id));
    },[dispatch])

    const countryInfo = useSelector((state) =>state.country)
    console.log(countryInfo)
return(
    <div>
    <Link to="/home">
    <button class="btn btn-secondary">Go back</button> 
    </Link>
   
   <div>
     {countryInfo ? (
<div className="details">
    <h1>{countryInfo.name}</h1>
    <p><strong>Id:</strong>{countryInfo.id}</p>
    <p><strong>Continent:</strong>{countryInfo.continents}</p>
    <p><strong>Capital:</strong>{countryInfo.capital}</p>
    <p><strong>Subregion:</strong>{countryInfo.subregion}</p>
    <p><strong>Area:</strong>{countryInfo.area}</p>
    <p><strong>Population:</strong>{countryInfo.population}</p>
    <img alt="" src={countryInfo.flags} width={150} height={100}></img>
    <p> <strong>Activities:</strong></p>
    {countryInfo.activities?.map((e)=>{
        return(
            <Link to={"/activity/" + e.id}><p>{e.name}</p></Link>
        )
    })}   
    {/* <ActivityDetail /> */}
 </div>
    ) : (
        "Not found"
    )}
   </div>
    </div>
);
}