import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { bookRequest, getBooksResponse, createBookResponse, BookModel } from '../models';
import { baseQuery } from './helper';

export const booksApi = createApi({
    reducerPath: 'booksApi',
    tagTypes: ['books'],
    baseQuery: baseQuery,
    endpoints: build => ({
        getAllBooks: build.query<getBooksResponse, { Key: string; Sign: string }>({
            query: ({ Key, Sign }) => ({
                url: 'books',
                method: 'GET',
                headers: { Key, Sign },
            }),
            providesTags: result => ['books'],
        }),
        createBook: build.mutation<createBookResponse, bookRequest & { Key: string; Sign: string }>({
            query: ({ Key, Sign, ...body }) => ({
                url: 'books',
                method: 'POST',
                body,
                headers: { Key, Sign },
            }),
            invalidatesTags: ['books'],
        }),
        deleteBook: build.mutation<getBooksResponse, { id: number } & { Key: string; Sign: string }>({
            query: ({ id, Key, Sign }) => ({
                url: `books/${id}`,
                method: 'DELETE',
                headers: { Key, Sign },
            }),
            invalidatesTags: ['books'],
        }),
        editBook: build.mutation<getBooksResponse, Partial<BookModel> & { Key: string; Sign: string; status: number }>({
            query: ({ Key, Sign, status, ...body }) => ({
                url: `books/${body.id}`,
                method: 'PATCH',
                body:{status},
                headers: { Key, Sign },
            }),
            invalidatesTags: ['books'],
        }),
    }),
});

export const { getAllBooks } = booksApi.endpoints;
export const { useGetAllBooksQuery, useCreateBookMutation, useDeleteBookMutation, useEditBookMutation } = booksApi;