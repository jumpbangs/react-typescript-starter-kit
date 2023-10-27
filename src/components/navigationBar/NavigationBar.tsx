import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ROUTE_NAMES } from 'common/constants';

const navLinks = [
  { path: ROUTE_NAMES.HOME.pathName, label: ROUTE_NAMES.HOME.title },
  { path: ROUTE_NAMES.ABOUT.pathName, label: ROUTE_NAMES.ABOUT.title },
  { path: ROUTE_NAMES.COINDESK.pathName, label: ROUTE_NAMES.COINDESK.title },
];

const NavigationBar = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      {navLinks.map((link) => (
        <Link to={link.path} className={pathname === link.path ? 'current' : ''} key={link.path}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavigationBar;
