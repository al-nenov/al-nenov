import {USER} from '../services/userService';
import {FAVORITES_TYPES} from './favoritesTypes';


export function toggleFavorite(product_id) {
    return (dispatch) => {
        USER.TOGGLE_FAVORITE(product_id)
            .then((res) =>{
                dispatch({
                    type: FAVORITES_TYPES.TOGLE_FAVORITE,
                    payload: res
                })
            })
    }
}

export function setFavorites(favorites_list) {
    return {
        type: FAVORITES_TYPES.SET_FAVORITES,
        payload: favorites_list
    }
}

export function getFavorites() {
    return (dispatch) => {
        const usersFavorites = localStorage.user ? JSON.parse(localStorage.user).favorites : [];
        dispatch({
            type: FAVORITES_TYPES.GET_FAVORITES,
            payload: usersFavorites
        })
    }
}