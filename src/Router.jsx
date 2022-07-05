import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/favorites" element={ <Favorites /> } />
    </Routes>
  );
}
