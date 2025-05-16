import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import * as API from '@/app/providers/stores/config/config';

import { themeReducer } from '@/app/providers/slices/themeSlice';
import { controlsReducer } from '@/app/providers/slices/controlsSlice';
import { countryReducer } from '@/app/providers/slices/countriesSlice';
import { detailsReducer } from '@/app/providers/slices/detailsSlice';

const store = configureStore({
   reducer: {
      theme: themeReducer,
      controls: controlsReducer,
      countries: countryReducer,
      details: detailsReducer,
   },

   devTools: true,

   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         thunk: {
            extraArgument: {
               client: axios,
               API,
            },
         },

         serializableCheck: false,
      }),
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type TypeAppDispatch = typeof store.dispatch;
export const useAppDispatch: () => TypeAppDispatch = useDispatch;

export default store;
