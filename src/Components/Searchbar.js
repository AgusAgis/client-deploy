import React from "react";
import {useState} from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCountriesBySearchbar } from "../Redux/Actions/CountriesActions";
import { getCountries } from "../Redux/Actions/CountriesActions";
import "../Components/Searchbar.css";

export default function SearchBar(){
    const dispatch = useDispatch()
    const[name, setName] = useState ("")

    function handleInputChange(e){
e.preventDefault()
setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getCountriesBySearchbar(name))
        setName("")

}
function handleClick(e){
    e.preventDefault();
    dispatch(getCountries());
}
    return(
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid"> 
        <a className="navbar-brand">W O R L D W I D E C O U N T R I E S I N F O R M A T I ON</a>
            <form onSubmit={handleSubmit}>
            <div>
            <input className="input"
            
            type = "text" 
            placeholder="Search ..." 
            value = {name} 
            onChange={(e) =>handleInputChange(e)}
            />
            <button  class="btn btn-outline-secondary" type="submit" onClick={(e) => handleSubmit(e)}>Search </button>
            <button class="btn btn-dark" onClick={e=> {handleClick(e)}}>See all the countries</button>
   
            <button class="btn btn-dark"><NavLink className="link" to="/activity"> See activities </NavLink></button>
        </div>
        </form>
        </div>
        </nav>
        
       
    )
}
