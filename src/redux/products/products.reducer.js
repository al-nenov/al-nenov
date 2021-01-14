import { PRODUCT_TYPES } from './products.types'

const INITIAL_STATE = {
    allProducts: [],
    isLoading: false,
    error: null
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PRODUCT_TYPES.FETCH_PRODUCTS_START:
            return {
                ...state,
                isLoading: true
            }
        case PRODUCT_TYPES.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                allProducts: action.payload,
                isLoading: false
            }
        case PRODUCT_TYPES.FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export { productsReducer }
