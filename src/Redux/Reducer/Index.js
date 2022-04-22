import { GET_ALL_COUNTRIES, GET_COUNTRIES_BY_ID} from "../Actions/CountriesActions";
import {GET_ALL_ACTIVITIES, ADD_ACTIVITY_TO_COUNTRY, ADD_COUNTRY_TO_ACT } from "../Actions/ActivitiesActions";
import { GET_COUNTRIES_BY_SEARCHBAR} from "../Actions/CountriesActions";

const initialState = {
    countries: [], //guardo todos los países
    countries2: [], // copia para modificar y filtrar
    country:[],
    filtercountries:[],
    activities: [],
}
export default function reducer(state = initialState, action) {
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                countries2: action.payload,
            }
            case GET_COUNTRIES_BY_SEARCHBAR:
                return {
                    ...state,
                    countries: action.payload
                }
        case GET_COUNTRIES_BY_ID:
            return {
                ...state,
                country: action.payload, //arreglo sobre el que estoy renderizando// otro filtro que hice en el back
            }
        
            
        case GET_ALL_ACTIVITIES:
            return{
                ...state,
                activities: action.payload,
            }
            case ADD_ACTIVITY_TO_COUNTRY:
                return{
                    ...state,
                    
                    
                }
            case ADD_COUNTRY_TO_ACT:
                return{
                    ...state,
                    activity:action.payload
                    
                }
            case "ORDER_ALPHABETICALLY":
                let sortedArr = action.payload ==="asc" ?
                state.countries.sort((a,b) => a.name.localeCompare(b.name))
                 :
                state.countries.sort((a,b) => b.name.localeCompare(a.name));
                return{
                    ...state,
                    countries:sortedArr
                }
                case "ORDER_BY_CONTINENT":
                    let allContinents = state.countries2 
                    let continentsFiltered = action.payload === "Continents" ? allContinents : allContinents.filter( el => el.continents === action.payload)
                    return{
                        ...state,
                        countries: continentsFiltered,
                        filtercountries: continentsFiltered,

                    }

                    case "ORDER_NUMERICALLY":
                let sortedArr2 = action.payload ==="asc" ?
                state.countries.sort(function(a,b){
                    if(a.population > b.population){
                        return 1;
                    }
                    if (b.population >a.population){
                        return -1;
                    }
                    return 0;
                }) :
                state.countries.sort(function (a,b){
                    if(a.population > b.population){
                        return -1;
                    }
                    if(b.population >a.population){
                        return 1;
                    }
                    return 0;
                })
                return{
                    ...state,
                    countries:sortedArr2
                }


                case 'FILTER_BY_ACTIVITY':
            const filterActivities = state.countries2;
            const activity = action.payload === "All"
                ? filterActivities.filter((country) => country.activities.length > 0)
                : filterActivities.filter(
                    (country) =>
                    country.activities &&
                    country.activities
                            .map((activities) => activities.name?activities.name:activities)
                            .includes(action.payload)
                );
            return {
                ...state,
                countries: activity,
            };
            
        default:
        return state;
        

    }
}