import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './assets/css/simple.css';

const MOUNT_ROOT = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(MOUNT_ROOT);

root.render(
  <BrowserRouter>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
