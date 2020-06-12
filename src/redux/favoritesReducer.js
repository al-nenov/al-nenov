import {USER} from '../services/userService';

let favorites = [];

function toggleFavorite(product_id) {
    return (dispatch) => {
        USER.TOGGLE_FAVORITE(product_id)
            .then((res) =>{
                dispatch({
                    type: 'TOGLE_FAVORITE',
                    payload: res
                })
            })
    }
}

function setFavorites(favorites_list) {
    return {
        type: 'SET_FAVORITES',
        payload: favorites_list
    }
}

function getFavorites() {
    return (dispatch) => {
        const usersFavorites = localStorage.user ? JSON.parse(localStorage.user).favorites : [];
        dispatch({
            type: 'GET_FAVORITES',
            payload: usersFavorites
        })
    }
}

const favoritesReducer = function(state = favorites, action) {
    switch (action.type) {
        case 'TOGLE_FAVORITE' :
            return action.payload
        case 'SET_FAVORITES' : 
            return action.payload
        case 'GET_FAVORITES' :
            return action.payload
        default: return state
    }
}

export {toggleFavorite, getFavorites, setFavorites, favoritesReducer}