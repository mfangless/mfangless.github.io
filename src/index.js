import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);
