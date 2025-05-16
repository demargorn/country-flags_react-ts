import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/app/providers/stores/store';
import { loadNeighborsByBorder } from '@/app/providers/slices/detailsSlice';
import { selectNeighbors } from '@/features/details/detailsSelectors';

export const useNeighbors = (borders: string[] = []) => {
   const neighbors = useSelector(selectNeighbors);
   const dispatch = useAppDispatch();

   useEffect(() => {
      if (borders.length) {
         dispatch(loadNeighborsByBorder(borders));
      }
   }, [borders, dispatch]);

   return neighbors;
};
