import { PRODUCT_TYPES } from './products.types'
import { firestore } from '../../firebase/firebase.app'

export const startFetchingProducts = () => ({
    type: PRODUCT_TYPES.FETCH_PRODUCTS_START
})

export const successFetchingProducts = (products) => ({
    type: PRODUCT_TYPES.FETCH_PRODUCTS_SUCCESS,
    payload: products
})

export const fetchProductsData = () => {
    return (dispatch) => {
        dispatch(startFetchingProducts())
        const productsRef = firestore.collection('products')
        productsRef.get().then((snapshot) => {
            const productDocs = snapshot.docs.map((item) => item.data())
            dispatch(successFetchingProducts(productDocs))
        })
    }
}
