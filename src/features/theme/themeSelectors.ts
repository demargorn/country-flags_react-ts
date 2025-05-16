import { type TypeRootState } from '@/app/providers/stores/store';

export const selectTheme = (s: TypeRootState) => s.theme;
