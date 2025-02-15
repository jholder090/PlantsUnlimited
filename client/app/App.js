import React from 'react';
import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';
import Footer from '../features/footer/Footer';

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};


export default App;
