// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Global Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import LandingPage from './pages/Agency'
import PrivacyPolicy from './components/Privacy'
import CookiePolicy from './components/Cookie'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <Router>
      <div className='relative min-h-screen flex flex-col'>
        {/* Navbar stays at the top of every page */}
        <Navbar />

        {/* The Routes determine what renders in the middle */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/mytrackr-finance" element={<Home />} />
   
            <Route path="/privacy" element={<PrivacyPolicy />} />
<Route path="/cookies" element={<CookiePolicy  />} />
          </Routes>
        </div>
<CookieBanner />
        {/* Footer stays at the bottom of every page */}
        <Footer />
      </div>
    </Router>
  )
}

export default App