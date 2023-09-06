import React from 'react';
import Header from 'components/sections/Header/Header';
import About from 'components/sections/About/About';
import Collection from 'components/sections/Collection/Collection';
import Footer from 'components/sections/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <Collection />
      <Footer />
    </>
  );
};

export default HomePage;
