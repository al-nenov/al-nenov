import { FAVORITES_TYPES } from './favorites.types'
import { toggleFavorite } from './favorites.utils'

let INITIAL_STATE = []

const favoritesReducer = function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FAVORITES_TYPES.TOGLE_FAVORITE:
            return toggleFavorite(state, action.payload)
        case FAVORITES_TYPES.SET_FAVORITES:
            return [...action.payload]
        default:
            return state
    }
}

export { favoritesReducer }
