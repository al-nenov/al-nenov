import { PRODUCT_TYPES } from './products.types'

export const startFetchingProducts = () => ({
    type: PRODUCT_TYPES.FETCH_PRODUCTS_START
})

export const successFetchingProducts = (products) => ({
    type: PRODUCT_TYPES.FETCH_PRODUCTS_SUCCESS,
    payload: products
})

export const errorFetchingProducts = (error) => ({
    type: PRODUCT_TYPES.FETCH_PRODUCTS_ERROR,
    payload: error
})
