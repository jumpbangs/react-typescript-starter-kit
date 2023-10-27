import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Container } from 'components';

import App from './App';

import './assets/css/simple.css';
import 'react-toastify/dist/ReactToastify.css';

const MOUNT_ROOT = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(MOUNT_ROOT);

const errorBoundary = () => {
  return (
    <Container>
      <h1>
        Something went wrong.
      </h1>
      <span>Please try again later.</span>
    </Container>
  )
};

root.render(
  <BrowserRouter>
    <ErrorBoundary fallback={errorBoundary()}>
      <ToastContainer />
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
