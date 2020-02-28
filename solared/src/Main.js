import React from 'react';

import { Header, Logo, HeaderNav, NavLink } from './navbar';
import { GlobalStyle, Container } from './styles';

function App() {
  return (
    <>
        <Container>
          <Header>
          <Logo>
            <h1>Solared</h1>
          </Logo>
          <HeaderNav>
            <NavLink href="">About Us</NavLink>
            <NavLink href="">Team</NavLink>
            <NavLink href="">Services</NavLink>
            <NavLink href="">Jobs</NavLink>
          </HeaderNav>
        </Header> 
        </Container>
        <GlobalStyle />
    </>
      );
}

export default App;
