import { type ReactNode } from 'react';
import styled from 'styled-components';
import Container from '@/shared/components/Container';

const Wrapper = styled.main`
   padding: 2rem 0;

   @media (min-width: 767px) {
      padding: 4rem 0;
   }
`;

interface IMainProps {
   children: ReactNode;
}

const Main = ({ children }: IMainProps) => {
   return (
      <Wrapper>
         <Container>{children}</Container>
      </Wrapper>
   );
};

export default Main;
