import { createSlice } from '@reduxjs/toolkit';
import { getAllBooks } from '../services/booksApi';
import { getBooksResponse } from '../models';

const initialState: getBooksResponse = {
    data: null,
    isOk: false,
    message: '',
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addMatcher(getAllBooks.matchFulfilled, (state, action) => {
            state.data = action.payload.data;
            state.isOk = true;
        });
    },
});

export default booksSlice.reducer;




