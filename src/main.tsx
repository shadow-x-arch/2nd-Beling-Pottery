import setupLocatorUI from "@locator/runtime";
import './index.css' // ✅ or './App.css' if that's where Tailwind directives are

if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
