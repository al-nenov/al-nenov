import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root-saga'

import { productsReducer } from './products/products.reducer'
import { userReducer } from './user/user.reducer'
import { cartReducer } from './cart/cart.reducer'
import { favoritesReducer } from './favorites/favorites.reducer'
import { ordersReducer } from './orders/orders.reducer'

const rootReducer = combineReducers({
    products: productsReducer,
    userAuth: userReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
    orders: ordersReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'favorites']
}

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, compose(applyMiddleware(sagaMiddleware), reduxDevtools))
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }
