import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';

const Button = styled.button`
  background-color: red;
`;

const Header = () => {
  return (
    <>
      <div>FREE SHIPPING ON ALL ORDERS OVER $35</div>
      <header>
        Fake Company
        <button>Login/Sign Up</button>
        <button>Cart</button>
        <Button>Red Button</Button>
      </header>
      <Navigation />
    </>
  );
};

export default Header;
