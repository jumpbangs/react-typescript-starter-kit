import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './assets/css/simple.css';

const MOUNT_ROOT = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(MOUNT_ROOT);

root.render(
  <BrowserRouter>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </BrowserRouter>
);
