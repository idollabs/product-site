import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <>
      <div>FREE SHIPPING ON ALL ORDERS OVER $35</div>
      <header>
        Fake Company
        <button>Login/Sign Up</button>
        <button>Cart</button>
      </header>
      <Navigation />
    </>
  );
};

export default Header;
