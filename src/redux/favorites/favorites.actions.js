import { FAVORITES_TYPES } from './favorites.types'

export const toggleFavorite = (product_id) => ({
    type: FAVORITES_TYPES.TOGLE_FAVORITE,
    payload: product_id
})