import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Router } from './components/Router';
import { Home } from './pages/home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
        {/* <Home /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
