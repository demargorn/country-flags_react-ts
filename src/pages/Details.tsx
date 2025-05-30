import { useNavigate, useParams } from 'react-router';
import { IoArrowBack } from 'react-icons/io5';
import CountryDetails from '@/features/details/CountryDetails';
import Button from '@/shared/components/Button';

const Details = () => {
   const { name } = useParams();
   const navigate = useNavigate();

   return (
      <div>
         <Button onClick={() => navigate(-1)}>
            <IoArrowBack />Back
         </Button>
         <CountryDetails name={name} navigate={navigate} />
      </div>
   );
};

export default Details;
