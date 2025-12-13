import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router';
import LandingPage from './pages/LandingPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Footer from './components/Footer.jsx';
import Toaster from './lib/ToasterTheme.jsx';
import { useAuthContext } from './context/AuthContext.jsx';
import Loading from './components/Loading.jsx';
import ConnectPage from './pages/ConnectPage.jsx';
import Dashboard from './pages/Dashboard.jsx'
import ChatPage from './pages/ChatPage.jsx';
import { useConnectContext } from './context/ConnectContext.jsx';

function App() {

  const { checkAuth, user, isCheckingAuth } = useAuthContext();
  const { checkPair, pair } = useConnectContext();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    let pairID = localStorage.getItem("pairId");
    if(pairID) {
      checkPair(pairID);
    }
  }, []);

  if (isCheckingAuth) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="grow">
        <Routes>
          <Route path="/" element={user ? <LandingPage /> : <Navigate to="/login" />} />
          <Route path="/signup" element={!user ? <SignupPage /> : <Navigate to="/" />} />
          <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
          <Route path="/connect" element={user ? <ConnectPage /> : <Navigate to="/login" />} />
          <Route path="/dashboard" element={user && pair ? <Dashboard /> : <Navigate to={"/connect"} />} />
          <Route path="/dashboard/chat" element={user && pair ? <ChatPage /> : <Navigate to={"/connect"} />} />
        </Routes>
      </div>
      <Toaster />
      <Footer />
    </div>
  )
}

export default App