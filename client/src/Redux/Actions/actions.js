import axios from "axios";
import { GET_COUNTRIES,GET_ACTIVITIES,GET_COUNTRIES_BY_ID,GET_COUNTRIES_BY_NAME,ORDER_COUNTRIES,FILTER_COUNTRIES_BY_ACTIVITY,FILTER_COUNTRIES_BY_CONTINENT, CREATE } from "../Actions/action-types";

export function postActivity(state) {
    return async function(dispatch) {
        try {
            await axios.post("http://localhost:3001/countries/activities/", state);
            alert("Activity created successfully!")
        } catch (error) {
            console.log(error);
        }
    }
};


export function getCountries() {
    return async function(dispatch){
        try {
            const response = axios.get("http://localhost:3001/countries/");
        } catch (error) {
            console.log(error);
        }
    }
};
