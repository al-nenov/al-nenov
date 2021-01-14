import { put, all, call, takeLatest } from 'redux-saga/effects'

import {firestore} from '../../firebase/firebase.app'
import { successFetchingProducts, errorFetchingProducts } from './products.actions'

import { PRODUCT_TYPES } from './products.types'

export function* fetchProductsData() {
    try {
        const productsSnapshot = yield firestore.collection('products').get()
        const productDocs = productsSnapshot.docs.map((item) => item.data())
        yield put(successFetchingProducts(productDocs))
    } catch(error) {
        yield put(errorFetchingProducts(error))
    }
}

export function* onFetchingProducts() {
    yield takeLatest(PRODUCT_TYPES.FETCH_PRODUCTS_START, fetchProductsData)
}

export function* productSagas() {
    yield all([
        call(onFetchingProducts)
    ])
}

