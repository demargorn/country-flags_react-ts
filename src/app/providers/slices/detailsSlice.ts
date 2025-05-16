import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { type TypeCountry, type TypeExtra, type TypeStatus } from '@/app/types';

export const loadCountryByName = createAsyncThunk<
   { data: TypeCountry[] },
   string,
   { extra: TypeExtra }
>('@details/load-country-by-name', (name, { extra: { client, API } }) => {
   return client.get(API.searchByCountry(name));
});

export const loadNeighborsByBorder = createAsyncThunk<
   { data: TypeCountry[] },
   string[],
   { extra: TypeExtra }
>('@details/load-neighbors', (borders, { extra: { client, API } }) => {
   return client.get(API.filterByCode(borders));
});

type TypeDetailsSlice = {
   currentCountry: TypeCountry | null;
   neighbors: string[];
   status: TypeStatus;
   error: string | null;
};

const initialState: TypeDetailsSlice = {
   currentCountry: null,
   neighbors: [],
   status: 'idle',
   error: null,
};

const detailsSlice = createSlice({
   name: '@details',
   initialState,
   reducers: {
      clearDetails: () => initialState,
   },

   extraReducers: (builder) => {
      builder
         .addCase(loadCountryByName.pending, (state) => {
            state.status = 'loading';
            state.error = null;
         })
         .addCase(loadCountryByName.rejected, (state) => {
            state.status = 'rejected';
            state.error = 'Can not load data';
         })
         .addCase(loadCountryByName.fulfilled, (state, action) => {
            state.status = 'idle';
            state.currentCountry = action.payload.data[0];
         })
         .addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
            state.neighbors = action.payload.data.map((country) => country.name);
         });
   },
});

export const { clearDetails } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;
