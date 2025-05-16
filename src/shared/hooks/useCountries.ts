import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { loadCountries } from '@/app/providers/slices/countriesSlice';
import { selectCountriesInfo, selectVisibleCountries } from '@/features/countries/countriesSelectors';
import { selectControls } from '@/features/controls/controlsSelectors';
import { type TypeRootState, useAppDispatch } from '@/app/providers/stores/store';
import { type TypeCountry } from '@/app/types';

export const useCountries = (): [TypeCountry[], ReturnType<typeof selectCountriesInfo>] => {
   const { status, error, qty } = useSelector(selectCountriesInfo);
   const controls = useSelector(selectControls);
   const countries = useSelector((state: TypeRootState) => selectVisibleCountries(state, controls));
   const dispatch = useAppDispatch();

   useEffect(() => {
      if (!qty) {
         dispatch(loadCountries());
      }
   }, [qty, dispatch]);

   return [countries, { status, error, qty }];
};
