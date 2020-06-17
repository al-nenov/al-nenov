import {FAVORITES_TYPES} from '../actions/favoritesTypes';
let favorites = [];

const favoritesReducer = function(state = favorites, action) {
    switch (action.type) {
        case FAVORITES_TYPES.TOGLE_FAVORITE :
            return action.payload
        case FAVORITES_TYPES.SET_FAVORITES : 
            return action.payload
        case FAVORITES_TYPES.GET_FAVORITES :
            return action.payload
        default: return state
    }
}

export {favoritesReducer}