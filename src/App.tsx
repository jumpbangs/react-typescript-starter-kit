import React from 'react';

import NavigationBar from 'components/navigationBar';
import AppRoutes from 'routes/appRoutes';

const App = () => {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <AppRoutes />
      </main>
    </>
  );
};

export default App;
