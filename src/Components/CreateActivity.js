import React, { useEffect, useState } from "react"; 
import { useSelector, useDispatch } from "react-redux";
import {NavLink} from "react-router-dom";
import { getCountries } from "../Redux/Actions/CountriesActions.js";
import {addActivityToCountry, getAllActivities} from "../Redux/Actions/ActivitiesActions.js";
import "./CreateActivity.css"

export function CreateActivity(){
    const dispatch = useDispatch();
    const activities = useSelector((state)=> state.activities)
    const countries = useSelector((state)=> state.countries)
    
    
    // paso lo que necesita el post
    const [input, setInput] = useState({
        name:"",
        difficulty:"",
        duration: "",
        season:"",
        country:[], // para meter más de un país
        
    })

const[inputError, setInputError] = useState({}) //para menejar errores

function handleSelect(e){
    setInput({
        ...input,
        season: e.target.value
    })
}
function handleSelect2(e){
    setInput({
        ...input,
        duration: e.target.value
    })
}
function handleSelectCountries(e){
    setInput({
        ...input,
       country: [...input.country, e.target.value],
    })
}


function handleChange(e){
    setInput(() =>{
        const newInput={
            ...input,
            [e.target.name] : e.target.value,
        }
        const errors= validate(newInput);
        setInputError(errors);
        return newInput;
    })
    console.log(input)
    
}
function handleSubmit(e){
e.preventDefault();
console.log(input)

if(
    !input.name ||
    !input.duration ||
    !input.difficulty ||
    !input.season 
  ){return alert("You must complete all the gaps")}
dispatch(addActivityToCountry(input))
alert("Activity successfully created!")
setInput({
    ...input,
    name: "",
    season: "", 
    difficulty: "",
    duration: "",
    country:[]
   
})

}
  useEffect(() =>{
    dispatch(addActivityToCountry(input))
    },[dispatch]);

    useEffect(() =>{
        dispatch(getCountries())
        },[dispatch]);
    


function validate(input){
    let error ={};

    if(!input.name){
        error.name ="Name is required";
    } else if (!/^[A-Z]+$/i.test(input.name)){
        error.name="Name is invalid";
    }
    if(!input.difficulty){
        error.difficulty ="Difficulty is required";
    }else if (input.difficulty < 1 || input.difficulty > 5){
        error.difficulty= "Difficulty  is a number from 1 to 5";
    }
    return error;
}
        return(
        <div className="form">
            <NavLink to="/activity"><button class="submit-btn">Return to created activities</button></NavLink>
            <NavLink to="/home"><button class="submit-btn">Return to Home</button></NavLink>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <div class="form-holder">
            <div>
                <label >Name</label>
                <input type="text" placeholder="write the activity's name" 
                
                className= {inputError.name && "input2, inputdanger"}
                value={input.name} name="name"
                onChange={(e) =>handleChange(e)}></input>
                {inputError.name && (
                    <p className="danger" >{inputError.name}</p>
                )}
                
            </div>

            <div >        
                <label  >Difficulty</label>
                <input  placeholder="Choose the difficulty" 
                className= {inputError.difficulty && "inputdanger"}
                type="number"
                value={input.difficulty} name="difficulty"
                onChange={(e) =>handleChange(e)}></input>
                {inputError.difficulty && (
                    <p className="danger">{inputError.difficulty}</p>
                )}
            </div>
            <div >
            <label >Season</label>
                <select onChange={(e) =>handleSelect(e)}>
                <option value = "default">Moment of the year</option>
                <option value = "summer">summer</option>
                <option value = "winter">winter</option>
                <option value = "fall">fall</option>
                <option value = "spring"> spring </option>
                </select>
           </div>
           <div>
                <label  >Duration</label>
                <select onChange={(e) =>handleSelect2(e)}>
                <option value = "default">Time</option>
                <option value = "1 hour">1 hour</option>
                <option value = "2 hours">2 hours</option>
                <option value = "3 hours">3 hours</option>
                <option value = "4 hours +">4 hours + </option>
                
                
                </select>
                {inputError.duration && (
                    <p className="danger">{inputError.duration}</p>
                )}
            </div>

            <select onChange={(e) => handleSelectCountries(e)}>
                {countries?.map((e)=>{
                    return(
                    <option value={e.name} key={e.id} multiple="multiple">{e.name}</option>
                    )
                })}
            </select>
            <ul><li>{input.country.map(el => el + " , ")}</li></ul>
            </div>
            <button className="submit-btn"  type="submit" >Create Activity</button>
            </form>
            
            
        </div>
    )
                   }
               
