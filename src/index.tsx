import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';

import './assets/css/simple.css';

const MOUNT_ROOT = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(MOUNT_ROOT);

root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
