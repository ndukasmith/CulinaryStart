import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { ListingDetails } from './pages/ListingDetails';
import { Dashboard } from './pages/Dashboard';
import { Services } from './pages/Services';
import { Compliance } from './pages/Compliance';
import { Entrepreneurs } from './pages/Entrepreneurs';
import { Owners } from './pages/Owners';
import { Pricing } from './pages/Pricing';
import { Community } from './pages/Community';
import { Support } from './pages/Support';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import { Team } from './pages/Team';
import { Partners } from './pages/Partners';
import { Careers } from './pages/Careers';
import { Press } from './pages/Press';
import { Sustainability } from './pages/Sustainability';
import { Login } from './pages/Login';
import { AccountSettings } from './pages/AccountSettings';
import { SuccessStory } from './pages/SuccessStory';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { User, UserRole } from './types';
import { MOCK_USER, MOCK_HOST_USER } from './constants';

const App: React.FC = () => {
  // Global user state simulation
  const [user, setUser] = useState<User | null>(null);

  // Handle Login based on role selected in the Login Page
  const handleLogin = (role: UserRole) => {
    if (role === UserRole.ENTREPRENEUR) {
      setUser(MOCK_USER);
    } else {
      setUser(MOCK_HOST_USER);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  // Helper to toggle role for demo purposes (still useful for dev)
  const toggleUserRole = () => {
    if (user) {
      setUser(user.role === UserRole.ENTREPRENEUR ? MOCK_HOST_USER : MOCK_USER);
    }
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-stone-50 font-sans text-stone-900">
        <Navbar user={user} toggleRole={toggleUserRole} onLogout={handleLogout} />
        
        <main className="flex-grow animate-fadeIn">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/kitchen/:id" element={<ListingDetails />} />
            
            {/* Login Route */}
            <Route path="/login" element={
              user ? <Navigate to="/dashboard" replace /> : <Login onLogin={handleLogin} />
            } />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/settings" element={user ? <AccountSettings user={user} /> : <Navigate to="/login" replace />} />
            
            <Route path="/services" element={<Services />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/entrepreneurs" element={<Entrepreneurs />} />
            <Route path="/success-stories/:id" element={<SuccessStory />} />
            <Route path="/owners" element={<Owners />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/community" element={<Community />} />
            <Route path="/support" element={<Support />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press" element={<Press />} />
            <Route path="/sustainability" element={<Sustainability />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;