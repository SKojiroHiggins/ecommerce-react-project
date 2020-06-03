import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import IndexBody from '../IndexBody/IndexBody';

const Home = () => {
  return (
    <div className="App">
      <Navbar page='homePage' />
      <IndexBody />
      <Footer />
    </div>
  );
}

export default Home;