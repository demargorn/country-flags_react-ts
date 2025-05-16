import { type TypeRootState } from '@/app/providers/stores/store';

export const selectSearch = (s: TypeRootState) => s.controls.search;
export const selectRegion = (s: TypeRootState) => s.controls.region;
export const selectControls = (s: TypeRootState) => s.controls;
