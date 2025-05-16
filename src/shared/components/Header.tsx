import { Link } from 'react-router';
import styled from 'styled-components';
import { useCleanup } from '@/shared/hooks/useCleanup';
import ThemeSwitcher from '@/features/theme/ThemeSwitcher';
import Container from './Container';

const HeaderEl = styled.header`
   box-shadow: var(--shadow);
   background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 2rem 0;
`;

const Title = styled(Link)`
   color: var(--colors-text);
   font-size: var(--fs-sm);
   text-decoration: none;
   font-weight: var(--fw-bold);
`;

const Header = () => {
   const cleanUp = useCleanup();

   return (
      <HeaderEl>
         <Container>
            <Wrapper>
               <Title to='/' onClick={cleanUp}>
                  Where is the world?
               </Title>
               <ThemeSwitcher />
            </Wrapper>
         </Container>
      </HeaderEl>
   );
};

export default Header;
