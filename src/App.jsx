import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Router } from './components/Router';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Router />
        {/* <Home /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
