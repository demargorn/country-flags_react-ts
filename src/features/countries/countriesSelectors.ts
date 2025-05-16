import { type TypeRootState } from '@/app/providers/stores/store';

export const selectCountriesInfo = (s: TypeRootState) => ({
   status: s.countries.status,
   error: s.countries.error,
   qty: s.countries.list.length,
});

export const selectAllCountries = (s: TypeRootState) => s.countries.list;
export const selectVisibleCountries = (s: TypeRootState, { search = '', region = '' }) => {
   return s.countries.list.filter(
      (country) =>
         country.name.toLowerCase().includes(search.toLowerCase()) &&
         country.region.includes(region)
   );
};
