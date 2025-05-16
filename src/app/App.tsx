import { Routes, Route } from 'react-router';
import Header from '@/shared/components/Header';
import HomePage from '@/pages/HomePage';
import Details from '@/pages/Details';
import NotFound from '@/pages/NotFound';
import Main from '@/shared/components/Main';

const App = () => {
   return (
      <>
         <Header />
         <Main>
            <Routes>
               <Route path='/' element={<HomePage />} />
               <Route path='/country/:name' element={<Details />} />
               <Route path='*' element={<NotFound />} />
            </Routes>
         </Main>
      </>
   );
};

export default App;
