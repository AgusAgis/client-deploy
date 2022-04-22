import "../Components/Home.css";
import "../Components/Cards.css"
import React from "react"; 
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries, orderAlphabetically, orderByContinent, orderNumerically } from "../Redux/Actions/CountriesActions";
import { NavLink, Link } from "react-router-dom";
import Cards from "./Cards";
import Paginado from "./Paginado";
import Searchbar from "./Searchbar";
import { getAllActivities, filterByActivity } from "../Redux/Actions/ActivitiesActions";
import { Spinner } from "./Spinner";


export default function Home (){
    const dispatch = useDispatch()
    const activity = useSelector((state)=> state.activities)
    const allCountries = useSelector((state) => state.countries) //ES MAS FACIL //conUseSelector trae todo lo que esta en el estado de paises y guardalo en esta variable// es igual a hacer mapstatetoprops
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage,setCountriesPerPage] = useState(10)
    const[orden,setOrden]= useState("")

const[isloading,setIsLoading]= useState(true);

    const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfFirstCountry= indexOfLastCountry-countriesPerPage
    const currentCountries = allCountries.slice(indexOfFirstCountry,indexOfLastCountry)
    
const paginado = (pageNumber) =>{
    setCurrentPage(pageNumber)
}
setTimeout(()=>{
   
    setIsLoading(false);
},3000);

useEffect(()=>{
    dispatch(getCountries());
},[])

useEffect(()=>{
    dispatch(getAllActivities());
},[dispatch])

    

function handleClick(e){
    e.preventDefault();
    dispatch(getCountries());
}

function handleSort(e){
    e.preventDefault();
    dispatch(orderAlphabetically(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`) //modifico el estado local y renderiza
};
function handleSort2(e){
    e.preventDefault();
    dispatch(orderNumerically(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`) //modifico el estado local y renderiza
};

function handleContinentFiltered(e){
dispatch(orderByContinent(e.target.value))
setCurrentPage(1);
setOrden(`Ordenado ${e.target.value}`);

}
function handleSelectActivity(e){
    e.preventDefault();
    if(e.target.value === "Filter By Activities"){
        dispatch(getCountries())
    }
    dispatch(filterByActivity(e.target.value))  
}
const noRepeat = activity.map((e) =>e.name).reduce((acc,activityNoRepeat) =>{
    if(!acc.includes(activityNoRepeat)){
        acc.push(activityNoRepeat)
    } return acc
},[]) 

if(isloading){
    return(
        <div>
            <Spinner />
        </div>
    )
}

return(
     <div>
          <Searchbar />
          <h1 className="link">   W O R L D W I D E C O U N T R I E S S E A R C H E R</h1>
         
        
         <div>
        
             <select onChange={ e => handleSort(e)}>
                 <option value = "">Alphabetical order</option>
                 <option value = "asc">A-Z</option>
                 <option value = "des">Z-A</option>
             </select>

             <select onChange={ e => handleContinentFiltered(e)}>
             <option value = "Continents">Continents</option>
             <option value = "North America"> North America</option>
             <option value = "South America"> South America</option>
             <option value = "Asia">Asia</option>
             <option value = "Antarctica">Antarctica</option>
             <option value = "Africa">Africa</option>
             <option value = "Europe">Europe</option>
             <option value = "Oceania">Oceania</option>
             </select>

             <select onChange={(e) => handleSelectActivity(e)} defaultValue='Filter By Activities'>
                    <option>Filter By Activities</option>
                    <option  value="All">All activities  </option>

                    {noRepeat.map((e) => (
                        <option value={e} key={e}>
                        {e}</option>
                        
                    ))}
                  
                </select>
             
             <select onChange={ e => handleSort2(e)}>
                 <option value = "population">Population</option>
                 <option value = "asc">Ascendent</option>
                 <option value = "des">Descendent</option>
             </select>
             <Paginado
             countriesPerPage={countriesPerPage}
             allCountries = {allCountries.length}
             paginado = {paginado}
             />
             {currentCountries?.map((c) =>{
                 
                 return(
                    <div className = "containera">
                    <Link  to={"/home/" + c.id}>
                    <Cards name={c.name} flags={c.flags} continents={c.continents} />
                    </Link>
                    </div>
                 )

                 })
             }
             
         </div>
     </div>
 )
};

