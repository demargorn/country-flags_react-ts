import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type TypeTheme = 'light' | 'dark';

const themeSlice = createSlice({
   name: '@theme',
   initialState: 'light' as TypeTheme,
   reducers: {
      setTheme: (_, { payload }: PayloadAction<TypeTheme>) => payload,
   },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
