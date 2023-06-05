import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTE_NAMES } from 'src/common/constants';
import About from 'src/pages/About';
import Home from 'src/pages/Home';

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={ROUTE_NAMES.HOME.pathName} element={<Home />} />
            <Route path={ROUTE_NAMES.ABOUT.pathName} element={<About />} />
        </Routes>
    )
}

export default AppRoutes;
