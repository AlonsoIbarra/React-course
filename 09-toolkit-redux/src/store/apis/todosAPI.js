import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const todosAPI = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder)=>({
        getTodos: builder.query({
            query: () => '/todos'
        }),
        getTodoByID: builder.query({
            query: (todoID) => `/todos/${todoID}`
        }),
    })
});

export const { useGetTodosQuery, useGetTodoByIDQuery } = todosAPI;