import styled  from 'styled-components';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
 body {
  background: #000000;
 }
`;

export const Html = styled.html`
 margin: 0;
 box-sizing: border-box;
 padding: 0;
 text-decoration: none; 
`;

export const Container = styled.div`
height: 100%;
 width: 100%
 background-color: #000000
`;
