import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';
import { todosAPI } from './apis';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,
        [todosAPI.reducerPath]:todosAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(todosAPI.middleware),
});