import { createSlice } from '@reduxjs/toolkit';
import { signup, auth, logout } from '../services/authApi';
import {authResponse} from '../models';

const initialState: authResponse = {
    data: null,
    isOk: false,
    message:""
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addMatcher(signup.matchFulfilled, (state, action) => {
            state.data = action.payload.data;
            state.isOk = true;
        });
        builder.addMatcher(auth.matchFulfilled, (state, action) => {
            state.data = action.payload.data;
            state.isOk = true;
        });
    },
});

export default userSlice.reducer;




