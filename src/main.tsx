// src/main.tsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import setupLocatorUI from "@locator/runtime";
import './index.css';
import App from './App.tsx';

if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
