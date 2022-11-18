import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/home/Home';
import { Produto } from '../pages/home/produto/Produto';
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produto" element={<Produto />} />
    </Routes>
  );
}
