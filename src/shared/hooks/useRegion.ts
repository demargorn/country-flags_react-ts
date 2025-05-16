import { useSelector } from 'react-redux';
import { type SingleValue } from 'react-select';
import { useAppDispatch } from '@/app/providers/stores/store';
import { selectRegion } from '@/features/controls/controlsSelectors';
import { setRegion } from '@/app/providers/slices/controlsSlice';
import { type TypeRegion } from '@/app/types/regions';
import { type TypeCountryOption } from '@/features/controls/CustomSelect';

type TypeOnSelect = (reg: SingleValue<TypeCountryOption>) => void;

export const useRegion = (): [TypeRegion | '', TypeOnSelect] => {
   const dispatch = useAppDispatch();
   const region = useSelector(selectRegion);

   const handleSelect: TypeOnSelect = (reg) => {
      return reg ? dispatch(setRegion(reg.value)) : dispatch(setRegion(''));
   };

   return [region, handleSelect];
};
