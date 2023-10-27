import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTE_NAMES } from 'common/constants';
import About from 'pages/About';
import CoinDeskPage from 'pages/CoinDesk';
import Home from 'pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME.pathName} element={<Home />} />
      <Route path={ROUTE_NAMES.ABOUT.pathName} element={<About />} />
      <Route path={ROUTE_NAMES.COINDESK.pathName} element={<CoinDeskPage />} />
    </Routes>
  );
};

export default AppRoutes;
