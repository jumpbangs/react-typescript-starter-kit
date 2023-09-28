import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import App from './App';

import './assets/css/simple.css';
import 'react-toastify/dist/ReactToastify.css';

const MOUNT_ROOT = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(MOUNT_ROOT);

root.render(
  <BrowserRouter>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <ToastContainer />
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
