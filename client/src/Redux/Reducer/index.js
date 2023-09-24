import { GET_ACTIVITIES, GET_COUNTRIES, GET_COUNTRIES_BY_ID, GET_COUNTRIES_BY_NAME, ORDER_COUNTRIES, FILTER_COUNTRIES_BY_ACTIVITY, FILTER_COUNTRIES_BY_CONTINENT } from "../Actions/action-types";

const initialState = {
    countries: [],
    countriesBackUp: [],
    countryDetail: [],
    activities: [],
};

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: [...action.payload],
                countriesBackUp: [...action.payload],
            }

        case GET_ACTIVITIES:
            return {
                ...state,
                activities: [...action.payload],
            }
        
        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                countries: [...action.payload],
            }
        
        case GET_COUNTRIES_BY_ID:
            return {
                ...state,
                countryDetail: [...action.payload],
            }
        
        case ORDER_COUNTRIES:
                if(action.payload === "orderAtoZ") {
                    let orderedAtoZ = state.countries.sort((a, b) => {
                        if(a.name > b.name) {
                            return 1;
                        }
                        if(b.name > a.name){
                            return -1;
                        }
                        return 0;
                    });
                    return { ...state, countries: orderedAtoZ };
            } else if (action.payload === "orderZtoA") {
                let orderedZtoA = state.countries.sort((a, b) => {
                    if(a.name > b.name) {
                        return -1;
                    }
                    if(b.name > a.name) {
                        return 1;
                    }
                    return 0;
                });
                return { ...state, countries: orderedZtoA };
            } else if (action.payload === "ascending") {
                let orderAscending = state.countries.sort((a, b) => {
                    b.population - a.population
                });
                return { ...state, countries: orderAscending }
            } else if (action.payload === "descending") {
                let orderDescending = state.countries.sort((a, b) => {
                    a.population - b.population
                });
                return { ...state, countries: orderDescending };
            }
            return {
                ...state,
            };
        
        case FILTER_COUNTRIES_BY_CONTINENT:
            return {
                ...state,
                countries: [...state.countriesBackUp].filter(c => c.continent.includes(action.payload))
            }
        
        case FILTER_COUNTRIES_BY_ACTIVITY: {
            let countriesByActivity = [];
            let activityMatch = state.activities.filter((a) => a.name === action.payload);

            for(const activity of activityMatch) {
                countriesByActivity = countriesByActivity.concat(activity.countries.flat());
            }

            return {
                ...state,
                countries: countriesByActivity,
            };
        }

        default:
            return { ...state };
            
        }
}

export default rootReducer;