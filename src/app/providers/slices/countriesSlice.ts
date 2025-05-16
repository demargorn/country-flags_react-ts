import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { type TypeCountry, type TypeExtra, type TypeStatus } from '@/app/types';

export const loadCountries = createAsyncThunk<
   { data: TypeCountry[] },
   undefined,
   {
      state: { countries: CountrySlice };
      extra: TypeExtra;
      rejectValue: string;
   }
>(
   '@@countries/load-countries',
   async (_, { extra: { client, API }, rejectWithValue }) => {
      try {
         return client.get(API.ALL_COUNTRIES);
      } catch (error) {
         if (error instanceof Error) return rejectWithValue(error.message);
         return rejectWithValue('Unknown error');
      }
   },
   {
      condition: (_, { getState }) => {
         const {
            countries: { status },
         } = getState();

         if (status === 'loading') {
            return false;
         }
      },
   }
);

type CountrySlice = {
   status: TypeStatus;
   error: string | null;
   list: TypeCountry[];
};

const initialState: CountrySlice = {
   status: 'idle',
   error: null,
   list: [],
};

const countrySlice = createSlice({
   name: '@@countries',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(loadCountries.pending, (state) => {
            state.status = 'loading';
            state.error = null;
         })
         .addCase(loadCountries.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload || 'Cannot load data';
         })
         .addCase(loadCountries.fulfilled, (state, action) => {
            state.status = 'received';
            state.list = action.payload.data;
         });
   },
});

export const countryReducer = countrySlice.reducer;
