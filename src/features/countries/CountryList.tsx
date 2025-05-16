import { useNavigate } from 'react-router';
import { useCountries } from '@/shared/hooks/useCountries';
import List from '@/shared/components/List';
import Card from '@/shared/components/Card';
import { type TypeCountryInfo } from '@/app/types';

const CountryList = () => {
   const [countries, { error, status }] = useCountries();
   const navigate = useNavigate();

   return (
      <>
         {error && <h2>Can't fetch data</h2>}
         {status === 'loading' && <h2>Loading...</h2>}
         {status === 'received' && (
            <List>
               {countries.map((c) => {
                  const countryInfo: TypeCountryInfo = {
                     img: c.flags.png,
                     name: c.name,
                     info: [
                        {
                           title: 'Population',
                           description: c.population.toLocaleString(),
                        },
                        {
                           title: 'Region',
                           description: c.region,
                        },
                        {
                           title: 'Capital',
                           description: c.capital,
                        },
                     ],
                  };

                  return (
                     <Card
                        key={c.name}
                        onClick={() => void navigate(`/country/${c.name}`)}
                        {...countryInfo}
                     />
                  );
               })}
            </List>
         )}
      </>
   );
};

export default CountryList;
