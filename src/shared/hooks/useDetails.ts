import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/app/providers/stores/store';
import { clearDetails, loadCountryByName } from '@/app/providers/slices/detailsSlice';
import { selectDetails } from '@/features/details/detailsSelectors';

export const useDetails = (name: string) => {
   const dispatch = useAppDispatch();
   const details = useSelector(selectDetails);

   useEffect(() => {
      dispatch(loadCountryByName(name));

      return () => {
         dispatch(clearDetails());
      };
   }, [name, dispatch]);

   return details;
};
