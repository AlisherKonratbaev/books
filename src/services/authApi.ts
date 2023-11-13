import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {UserModel, authResponse, authRequest} from "../models";
import {baseQuery} from "./helper"



export const authApi = createApi({
    reducerPath: 'authApi',
    tagTypes: ['user'],
    baseQuery: baseQuery,
    endpoints: build => ({
        // login: build.mutation<authResponse, authRequest>({
        //     query: (body) => ({
        //         url: "user/login",
        //         method: "POST",
        //         credentials: "include",
        //         body,
        //     }),
        // }),
        signup: build.mutation<authResponse, authRequest>({
            query: body => ({
                url: 'signup',
                method: 'POST',
                body,
            }),
        }),
        logout: build.query<any, void>({
            query: () => ({
                url: 'user/logout',
                method: 'GET',
                credentials: 'include',
            }),
        }),
        auth: build.query<authResponse, { Key: string; Sign: string }>({
            query: ({ Key, Sign }) => ({
                url: 'myself',
                method: 'GET',
                headers: { Key, Sign },
            }),
        }),
    }),
});

export const {logout, signup, auth} = authApi.endpoints
export const {useSignupMutation, useLogoutQuery, useAuthQuery} = authApi;