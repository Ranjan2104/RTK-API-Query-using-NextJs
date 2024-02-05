'use client'
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { getUserAPi } from '../Middleware/getUserApi';
import { getAllProductApi } from '../Middleware/getAllProductApi';
import { addProductApi } from '../Middleware/addProductApi';

export const store = configureStore({
    reducer: {
        [getUserAPi.reducerPath]: getUserAPi.reducer,
        [getAllProductApi.reducerPath]: getAllProductApi.reducer,
        [addProductApi.reducerPath]: addProductApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        getUserAPi.middleware,
        getAllProductApi.middleware,
        addProductApi.middleware,
    )
})

setupListeners(store.dispatch)