// import { useState } from 'react'
import { Routes, Route } from 'react-router';
import LandingPage from './pages/LandingPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Footer from './components/Footer.jsx';
import Toaster from './lib/ToasterTheme.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen">
      <div className="grow">
          <AuthProvider>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
          </AuthProvider>
      </div>
      <Toaster />
      <Footer />
    </div>
  )
}

export default App