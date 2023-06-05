import React from 'react';
import { Link } from 'react-router-dom';

import { HOME_TITLE } from 'src/common/constants';
import AppRoutes from 'src/routes/appRoutes';

const App = () => {
  return (
    <div>
      <Link to="/">
        <h1>{HOME_TITLE}</h1>
      </Link>
      <AppRoutes />
    </div>
  );
};

export default App;
