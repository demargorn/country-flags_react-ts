import Select, { type Props } from 'react-select';
import styled from 'styled-components';
import { type TypeRegion } from '@/app/types/regions';

export type TypeCountryOption =
   | {
        label: TypeRegion;
        value: TypeRegion;
     }
   | '';

const MySelect = (props: Props<TypeCountryOption, false>) => {
   return <Select {...props} />;
};

const CustomSelect = styled(MySelect).attrs({
   styles: {
      control: (provided) => ({
         ...provided,
         backgroundColor: 'var(--colors-ui-base)',
         color: 'var(--colors-text)',
         borderRadius: 'var(--radii)',
         padding: '0.25rem',
         border: 'none',
         boxShadow: 'var(--shadow)',
         height: '50px',
      }),
      option: (provided, state) => ({
         ...provided,
         cursor: 'pointer',
         color: 'var(--colors-text)',
         backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
      }),
   },
})`
   width: 200px;
   border-radius: var(--radii);
   font-family: var(--family);
   border: none;

   & > * {
      box-shadow: var(--shadow);
   }

   & input {
      padding-left: 0.25rem;
   }

   & * {
      color: var(--colors-text) !important;
   }

   & > div[id] {
      background-color: var(--colors-ui-base);
   }
`;

export default CustomSelect;
