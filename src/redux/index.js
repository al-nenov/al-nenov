import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import { productsReducer } from './productsReducer'
import { userReducer } from './userReducer'
import { cartReducer } from './cartReducer'
import { favoritesReducer } from './favoritesReducer'

const rootReducer = combineReducers({
    products: productsReducer,
    userAuth: userReducer,
    cart: cartReducer,
    favorites: favoritesReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userAuth', 'cart', 'favorites']
}

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, compose(applyMiddleware(thunk), reduxDevtools))
const persistor = persistStore(store)

export { store, persistor }
