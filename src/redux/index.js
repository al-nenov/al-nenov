import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import {productsReducer} from './productsReducer';
import {userReducer} from './userReducer';
import {cartReducer} from './cartReducer';
import {favoritesReducer} from './favoritesReducer';

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

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor}