import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {productsReducer} from './productsReducer';
import {userReducer} from './userReducer';
import {cartReducer} from './cartReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    userAuth: userReducer,
    cart: cartReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userAuth', 'cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor}