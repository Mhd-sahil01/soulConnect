import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router';
import LandingPage from './pages/LandingPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Footer from './components/Footer.jsx';
import Toaster from './lib/ToasterTheme.jsx';
import { useAuthContext } from './context/AuthContext.jsx';
import Loading from './components/Loading.jsx';

function App() {

  const { checkAuth, user, isCheckingAuth } = useAuthContext();

  useEffect(() => {
    checkAuth();
  }, []);

  if (isCheckingAuth) {
    return <Loading />;
  }

  return (
      <div className="flex flex-col min-h-screen">
        <div className="grow">
          <Routes>
            <Route path="/" element={user ? <LandingPage /> : <LoginPage />} />
            <Route path="/signup" element={!user ? <SignupPage /> : <LandingPage />} />
            <Route path="/login" element={!user ? <LoginPage /> : <LandingPage />} />
          </Routes>
        </div>
        <Toaster />
        <Footer />
      </div>
  )
}

export default App