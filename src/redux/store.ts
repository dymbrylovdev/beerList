import { configureStore } from '@reduxjs/toolkit';
import beerReducer from './reducers/beer/beerSlice';
import filterSlice from './reducers/filter/filterSlice';

export const store = configureStore({
    reducer: {
        beerReducer,
        filterSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;