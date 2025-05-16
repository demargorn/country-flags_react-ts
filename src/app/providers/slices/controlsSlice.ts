import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type TypeRegion } from '@/app/types/regions';

type TypeControlsSlice = {
   search: string;
   region: TypeRegion | '';
};

const initialState: TypeControlsSlice = {
   search: '',
   region: '',
};

const controlsSlice = createSlice({
   name: '@controls',
   initialState,
   reducers: {
      setSearch: (state, action: PayloadAction<string>) => {
         state.search = action.payload;
      },

      setRegion: (state, action: PayloadAction<TypeRegion | ''>) => {
         state.region = action.payload;
      },

      clearControls: () => initialState,
   },
});

export const { setRegion, setSearch, clearControls } = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;
