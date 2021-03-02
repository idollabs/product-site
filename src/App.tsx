import React from 'react';
import Header from './components/Header';
import Carousel from './components/home-page/Carousel';
import PopularItems from './components/home-page/PopularItems';
import EmailList from './components/home-page/EmailList';
import Footer from './components/Footer';
import DisplayItems from './components/home-page/DisplayItems';

const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <PopularItems />
      <EmailList />
      <Footer />
      <DisplayItems />
    </>
  );
};

export default App;
