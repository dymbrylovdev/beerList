import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IBeer} from "../../types/beer";
import axios from "axios";


const initialState: BeerState = {
    beers: [],
    loading: false,
}

export const cubeSlice = createSlice({
    name: 'beers',
    initialState,
    reducers: {
        addBeers: (state, action) => {
            state.beers = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBeersFromPage.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getBeersFromPage.fulfilled, (state, action) => {
            state.loading = false;
        })
    }
})

export const {
    addBeers
} = cubeSlice.actions;

export default cubeSlice.reducer;