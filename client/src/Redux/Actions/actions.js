import axios from "axios";
import { GET_COUNTRIES,GET_ACTIVITIES,GET_COUNTRIES_BY_ID,GET_COUNTRIES_BY_NAME,ORDER_COUNTRIES,FILTER_COUNTRIES_BY_ACTIVITY,FILTER_COUNTRIES_BY_CONTINENT, CLEANER, CLEAN_ERROR, } from "../Actions/action-types";

export function postActivity(state) {
    return async function() {
        try {
            await axios.post("http://localhost:3001/countries/activities/", state);
            alert("Activity created successfully!")
        } catch (error) {
            console.log(error);
        }
    }
}


export function getCountries() {
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/countries/");
            dispatch({
                type: GET_COUNTRIES,
                payload:response.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export function getActivities() {
    return async function(dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/countries/activities")
            dispatch({
                type: GET_ACTIVITIES,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getCountryById(id) {
    return async function(dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/countries/${id}`)
            dispatch({
                type: GET_COUNTRIES_BY_ID,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getCountryByName(name) {
    return async function(dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/countries/${name}`)
            dispatch({
                type: GET_COUNTRIES_BY_NAME,
                payload: response.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function orderCountries(order) {
    return {
        type: ORDER_COUNTRIES,
        payload: order,
    }
}

export function filterCountriesByContinent(filter) {
    return {
        type: FILTER_COUNTRIES_BY_CONTINENT,
        payload: filter,
    }
}

export function filterCountriesByActivity(filter) {
    return {
        type: FILTER_COUNTRIES_BY_ACTIVITY,
        payload: filter,
    }
}

export function cleaner() {
    return { type: CLEANER }
}

export function cleanError() {
    return { type: CLEAN_ERROR }
}