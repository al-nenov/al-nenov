import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productsReducer from './productsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    userAuth: userReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userAuth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor}