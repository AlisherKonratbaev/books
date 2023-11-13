import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../services/authApi';
import { booksApi } from '../services/booksApi';
import userReducer from './userSlice';
import booksSlice from "./booksSlice";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [booksApi.reducerPath]: booksApi.reducer,
        user: userReducer,
        books: booksSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware).concat(booksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;