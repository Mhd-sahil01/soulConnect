import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx'
import { ConnectProvider } from './context/ConnectContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ConnectProvider>
          <App />
        </ConnectProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
