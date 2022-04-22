import axios from "axios";
export const ADD_ACTIVITY_TO_COUNTRY = "ADD_ACTIVITY_TO_COUNTRY";
export const ADD_COUNTRY = "ADD_COUNTRY";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const ADD_COUNTRY_TO_ACT = "ADD_COUNTRY_TO_ACT";


export function addActivityToCountry(activity) {
    return async function (dispatch) {
      return await axios
      .post("https://countries-info-searcher.herokuapp.com/activity", activity)
        .then((response) => {
          return dispatch({
            type: ADD_ACTIVITY_TO_COUNTRY,
            payload: response.data,
          });
        });
    };
  }
  export function addCountry(activity) {
    return async function (dispatch) {
      return await axios
      .post("https://countries-info-searcher.herokuapp.com/activity", activity)
        .then((response) => {
          return dispatch({
            type: ADD_COUNTRY,
            payload: response.data,
          });
        });
    };
  }
export function getAllActivities(){
    return async function(dispatch){
        return await axios.get("https://countries-info-searcher.herokuapp.com/activity")
        .then((response)=>{
            return dispatch({
                type: GET_ALL_ACTIVITIES,
                payload:response.data,
            })
        })
        }
    }
  export const deleteActivity = (id) => async dispatch => {
      const res = await axios.delete(`https://countries-info-searcher.herokuapp.com/activity/delete/${id}`);
  
      dispatch({
          type: DELETE_ACTIVITY,
          payload: res.data,
      })
  }
  export function filterByActivity(payload) {
    return {
        type: 'FILTER_BY_ACTIVITY',
        payload
    }
  };
  export function addCountryToAct(payload){
    return {
      type: 'ADD_COUNTRY_TO_ACT',
      payload
  }
    
  }
  

