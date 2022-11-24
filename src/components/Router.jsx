import { Routes, Route } from 'react-router-dom';
import { Bonerobot } from '../pages/bone-mr-robot/Bonerobot';
import { Caixasom } from '../pages/caixa-som/Caixasom';
import { Celular } from '../pages/celular/Celular';
import { Home } from '../pages/home/Home';
import { Mouse } from '../pages/mouse/Mouse';
import { DeskpadFriends } from '../pages/mousepad-friends/DeskpadFriends';
import { MousepadKali } from '../pages/mousepad-kali/MousepadKali';
import { MousepadRobot } from '../pages/mousepad-robot/MousepadRobot';
import { Politica } from '../pages/politica/Politica';
import { Produto } from '../pages/produto/Produto';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produto" element={<Produto />} />
      <Route path="/politica-privacidade" element={<Politica />} />
      <Route path="/mousepad-kali-linux" element={<MousepadKali />} />
      <Route path="/mousepad-mr-robot" element={<MousepadRobot />} />
      <Route path="/bone-mr-robot" element={<Bonerobot />} />
      <Route path="/caixa-de-som" element={<Caixasom />} />
      <Route path="/xiaomi-redmi-10c" element={<Celular />} />
      <Route path="/mouse-razer-original" element={<Mouse />} />
      <Route path="/deskpad-mr-robot" element={<DeskpadFriends />} />
    </Routes>
  );
}
