import React from "react";
import {useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {Activitycard} from "./Activitycard.js";
import { getAllActivities} from "../Redux/Actions/ActivitiesActions.js"
import {NavLink,Link} from "react-router-dom";
import {addActivityToCountry} from "../Redux/Actions/ActivitiesActions.js";
import "./homeactivity.css";

export function HomeActivity(){
    const dispatch = useDispatch();
    const allActivities = useSelector((state)=>state.activities);
    const [activityPerPage, setActivityPerPage] = useState("");

    useEffect(() =>{
    dispatch(getAllActivities());
    },[dispatch]);

    return(
        
        <div > 
            <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid"> 
        <div class="container">
		<div class="row">
			<div class="col-md-8 col-md-offset-2 ">			</div>
		</div>
	</div >    <a className="navbar-brand">A C T I V I T I E S C R E A T O R</a>       
    <NavLink to="/home"> <button class="btn btn-secondary">Go back</button></NavLink>

    <NavLink to="/activity/create"> 
     <button class="btn btn-secondary float-right" >Create Activity</button>
     </NavLink>
            </div>
            </nav>
            <h1 className="activities">Activities</h1>
            
            <div >
                {allActivities?.map((e) =>{
                    return(
                        
                        <ul className="containerb" key={e.id}>
                            <div className="center">
                                <h2 className="titulo">{e.name}</h2>
                                <h4>
                                     <strong className="info">Difficulty</strong> {e.difficulty}
                                </h4>
                                <h4>
                                     <strong className="info">Countries</strong> {e.countries.length}
                                </h4>
                                <Link to={"/activity/" + e.id}><button class="btn btn-secondary">Details</button></Link>
                            </div>
                        </ul>
                        )
                        })}
                        </div>
                        </div>
                        )
                       }