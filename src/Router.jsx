import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Checkout from './pages/Checkout';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/favorites" element={ <Favorites /> } />
      <Route path="/checkout" element={ <Checkout /> } />
    </Routes>
  );
}
