import styled from 'styled-components';

const Button = styled.button`
   display: flex;
   align-items: center;
   gap: 0.75rem;
   border: none;

   padding: 0 1rem;
   background-color: var(--colors-ui-base);
   box-shadow: var(--shadow);
   line-height: 2.5;
   border-radius: var(--radii);

   color: var(--color-text);
   cursor: pointer;
`;

export default Button;
