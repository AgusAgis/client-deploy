import axios from "axios";
export const GET_ALL_COUNTRIES ="GET_ALL_COUNTRIES";
export const GET_COUNTRIES_BY_ID = "GET_COUNTRIES_BY_ID";
export const ORDER_BY_CONTINENT = "ORDER_BY_CONTINENT";
export const ORDER_ALPHABETICALLY = "ORDER_ALPHABETICALLY";
export const GET_COUNTRIES_BY_SEARCHBAR = "GET_COUNTRIES_BY_SEARCHBAR";

export const getCountries = () => {
    return (dispatch) =>{
        axios.get("https://countries-info-searcher.herokuapp.com/countries").then((result) =>{
            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: result.data,
            })
        })
    }
}

// export const getCountries=() =>{
//     return async function(dispatch){
//         const result = await axios.get("http://localhost:3001/countries");
//         return dispatch({
//            type: GET_ALL_COUNTRIES,
//            payload: result.data,
//         });
//     };
// }

export const getCountriesById = (id) => {
    return (dispatch) => {
        axios.get(`https://countries-info-searcher.herokuapp.com/countries/${id}`).then((result) =>{
            return dispatch({
                type: GET_COUNTRIES_BY_ID,
                payload: result.data,
            })
        })
    }
}

export function orderAlphabetically(payload){
    return{
        type:"ORDER_ALPHABETICALLY",
        payload
    }
}
export function orderNumerically(payload){
    return{
        type:"ORDER_NUMERICALLY",
        payload
    }
}

export function orderByContinent(payload){
    // console.log(payload)
    return{
        type: "ORDER_BY_CONTINENT",
        payload
    }
}
export function getCountriesBySearchbar(name){
    return async function(dispatch){
        try {
            var json = await axios.get("https://countries-info-searcher.herokuapp.com/countries?name=" + name);
            return dispatch({
                type: "GET_COUNTRIES_BY_SEARCHBAR",
                payload: json.data
            })
        } catch (error) {
            console.log( error.name + "El pais que busca no existe:" + error.message)
            alert("The country you are looking for does not exist")
            
        }
    }
};
