import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from '@/features/theme/themeSelectors';
import { setTheme, type TypeTheme } from '@/app/providers/slices/themeSlice';

export const useTheme = (): [TypeTheme, () => void] => {
   const theme = useSelector(selectTheme);
   const dispatch = useDispatch();

   const handleToggleTheme = () => {
      dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
   };

   useEffect(() => {
      document.body.setAttribute('data-theme', theme);
   }, [theme]);

   return [theme, handleToggleTheme];
};
