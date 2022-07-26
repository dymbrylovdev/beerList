import {createSlice} from "@reduxjs/toolkit";
import {getBeers} from "./AsyncActions/actionBeer";
import {BeerState, Status} from "./types";


const initialState: BeerState = {
    beers: [],
    loading: true,
    status: Status.LOADING,
}

export const cubeSlice = createSlice({
    name: 'beers',
    initialState,
    reducers: {
        addBeers: (state, action) => {
            state.beers = action.payload;
        },
    },
    extraReducers: (builder) => {
        // life ciсle  getBeersFromPage
        builder.addCase(getBeers.pending, (state, action) => {
            state.loading = true;
            state.status = Status.LOADING;
        })
        builder.addCase(getBeers.fulfilled, (state, action) => {
            state.loading = false;
            state.status = Status.SUCCESS;
            state.beers = action.payload;
        })
        builder.addCase(getBeers.rejected, (state, action) => {
            state.loading = false;   
            state.status = Status.ERROR;
            
        })
    }
})

export const {
    addBeers,
} = cubeSlice.actions;

export default cubeSlice.reducer;