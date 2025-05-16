import { useAppDispatch } from '@/app/providers/stores/store';
import { clearControls } from '@/app/providers/slices/controlsSlice';

export const useCleanup = () => {
   const dispatch = useAppDispatch();
   const cleanUp = () => dispatch(clearControls());

   return cleanUp;
};
