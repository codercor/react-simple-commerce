import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import userSlice from './slices/userSlice';
const reducers = combineReducers({
    user: userSlice,
});


const persistedReducer = persistReducer({
    key: 'root',
    storage,
    whitelist: ['user']
}, reducers);
const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export default store;