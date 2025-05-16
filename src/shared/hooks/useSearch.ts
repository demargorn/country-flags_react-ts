import { type ChangeEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { selectSearch } from '@/features/controls/controlsSelectors';
import { setSearch } from '@/app/providers/slices/controlsSlice';
import { useAppDispatch } from '@/app/providers/stores/store';

type TypeOnSearch = ChangeEventHandler<HTMLInputElement>;

export const useSearch = (): [string, TypeOnSearch] => {
   const dispatch = useAppDispatch();
   const search = useSelector(selectSearch);

   const handleSearch: TypeOnSearch = ({ target }) => {
      dispatch(setSearch(target.value));
   };

   return [search, handleSearch];
};
