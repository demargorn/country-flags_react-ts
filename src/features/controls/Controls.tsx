import styled from 'styled-components';
import { useRegion } from '@/shared/hooks/useRegion';
import Search from './Search';
import CustomSelect from './CustomSelect';
import { type TypeRegion } from '@/app/types/regions';

type TypeRegionOption = {
   [RegKey in TypeRegion]: { value: RegKey; label: RegKey };
};

const optionsMap: TypeRegionOption = {
   Africa: { value: 'Africa', label: 'Africa' },
   America: { value: 'America', label: 'America' },
   Asia: { value: 'Asia', label: 'Asia' },
   Europe: { value: 'Europe', label: 'Europe' },
   Oceania: { value: 'Oceania', label: 'Oceania' },
};
const options = Object.values(optionsMap);

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;

   @media (min-width: 767px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
   }
`;

const Controls = () => {
   const [region, handleSelect] = useRegion();

   return (
      <Wrapper>
         <Search />
         <CustomSelect
            options={options}
            placeholder='Filter by Region'
            isClearable
            isSearchable={false}
            value={region ? optionsMap[region] : ''}
            onChange={handleSelect}
         />
      </Wrapper>
   );
};

export default Controls;
