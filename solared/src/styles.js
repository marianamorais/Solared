import styled  from 'styled-components';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
 body {
  background: #000000;
 }
`;

export const Container = styled.div`
 margin: 0;
 box-sizing: border-box;
 padding: 0;
 text-decoration: none; 
 width: 100%;
 height: 100%;
`;
