import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
import { Partners } from './pages/Partners';
import { Careers } from './pages/Careers';
import { Press } from './pages/Press';
import { Sustainability } from './pages/Sustainability';
import { User, UserRole } from './types';
import { MOCK_USER } from './constants';

const App: React.FC = () => {
  // Global user state simulation
  const [user, setUser] = useState<User | null>(null);

  // Helper to toggle user role for demo purposes
  const toggleUserRole = () => {
    if (!user) {
      setUser(MOCK_USER);
    } else {
      setUser({
        ...user,
        role: user.role === UserRole.ENTREPRENEUR ? UserRole.OWNER : UserRole.ENTREPRENEUR
      });
    }
  };

  // Simulate login simply by setting the mock user if not logged in
  const handleLogin = () => {
    if (!user) setUser(MOCK_USER);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-stone-50 font-sans text-stone-900">
        <Navbar user={user} toggleRole={toggleUserRole} />
        
        <main className="flex-grow animate-fadeIn">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/kitchen/:id" element={<ListingDetails />} />
            <Route path="/dashboard" element={<Dashboard user={user || MOCK_USER} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/entrepreneurs" element={<Entrepreneurs />} />
            <Route path="/owners" element={<Owners />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/community" element={<Community />} />
            <Route path="/support" element={<Support />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press" element={<Press />} />
            <Route path="/sustainability" element={<Sustainability />} />
            
            <Route path="/login" element={
              <div className="flex items-center justify-center h-[60vh]">
                <div className="text-center p-8 bg-white rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-4">Login Simulation</h2>
                  <p className="text-stone-500 mb-6">Click below to simulate logging in as a demo user.</p>
                  <button 
                    onClick={handleLogin} 
                    className="bg-primary-700 text-white px-6 py-3 rounded hover:bg-primary-800 w-full"
                  >
                    Log in as Demo User
                  </button>
                </div>
              </div>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;