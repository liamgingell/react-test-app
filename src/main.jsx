import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Greeting from "./assets/Greeting.jsx";
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
