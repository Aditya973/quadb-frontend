import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CryptoHolder from './context/CryptoHolder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CryptoHolder>
      <App />
    </CryptoHolder>
  </React.StrictMode>
);

