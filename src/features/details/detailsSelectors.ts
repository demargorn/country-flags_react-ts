import { type TypeRootState } from '@/app/providers/stores/store';

export const selectCurrentCountry = (s: TypeRootState) => s.details.currentCountry;
export const selectDetails = (s: TypeRootState) => s.details;
export const selectNeighbors = (s: TypeRootState) => s.details.neighbors;
