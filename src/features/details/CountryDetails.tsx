import { type NavigateFunction } from 'react-router';
import { useDetails } from '@/shared/hooks/useDetails';
import Info from './Info';

interface ICountryDetailsProps {
   navigate: NavigateFunction;
   name?: string;
}

const CountryDetails = ({ name = '', navigate }: ICountryDetailsProps) => {
   const { status, error, currentCountry } = useDetails(name);

   return (
      <>
         {status === 'loading' && <h2>Loading...</h2>}
         {error && <h2>{error}</h2>}
         {currentCountry && <Info push={navigate} {...currentCountry} />}
      </>
   );
};

export default CountryDetails;
