import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router';
import LandingPage from './pages/LandingPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Footer from './components/Footer.jsx';
import Toaster from './lib/ToasterTheme.jsx';
import { useAuthContext } from './context/AuthContext.jsx';

function App() {

  const { checkAuth, user, isCheckingAuth } = useAuthContext();

  useEffect(() => {
    checkAuth();
  }, []);

  console.log(user);


  return (
      <div className="flex flex-col min-h-screen">
        <div className="grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
        <Toaster />
        <Footer />
      </div>
  )
}

export default App