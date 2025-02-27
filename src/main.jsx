import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './AuthProvider.jsx'
import Layout from './Layout.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Layout>
        <App />
      </Layout>
    </AuthProvider>
  </StrictMode>
);
