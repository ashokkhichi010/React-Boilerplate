import { configureStore, combineReducers } from '@reduxjs/toolkit';
import commonSlices from "./slices";
import config from "../config/config";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use the storage engine of your choice

const slicesArray = config.slices;
const reducersObj = {};

// Initialize common slices
slicesArray.forEach(({ name, initialValue }) => {
	reducersObj[name] = commonSlices(name, initialValue).reducer; // Add slice reducer to the object
});

// Combine all reducers into a root reducer
const rootReducer = combineReducers(reducersObj);

// Redux persist configuration
const persistConfig = {
	key: 'root', // The key for storing the data in storage
	storage, // The storage engine to use (e.g., localStorage)
};

// Wrap the root reducer with the persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create and export the store and persistor
export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);
