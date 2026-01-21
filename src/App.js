import React, { useEffect } from 'react';
import './index.css';
import { AdminProvider, useAdmin } from './context/AdminContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Packages from './components/Packages';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function AppContent() {
  const { isAuthenticated } = useAdmin();

  // If admin is authenticated, show dashboard
  if (isAuthenticated) {
    return <AdminDashboard />;
  }

  // Check if user is trying to access admin panel
  const adminAccessAttempt = localStorage.getItem('adminAccessAttempt');
  if (adminAccessAttempt) {
    return <AdminLogin />;
  }

  // Default website view
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />
      <Gallery />
      <Packages />
      <Booking />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
      
      {/* Admin Access Button - Hidden but accessible */}
      <button 
        className="admin-access-btn"
        onClick={() => {
          localStorage.setItem('adminAccessAttempt', 'true');
          window.location.reload();
        }}
        title="Admin Panel"
      >
        <i className="fas fa-cog"></i>
      </button>
    </div>
  );
}

function App() {
  useEffect(() => {
    // Show admin button on Ctrl+Shift+A press
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        const btn = document.querySelector('.admin-access-btn');
        if (btn) {
          btn.classList.add('visible');
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <AdminProvider>
      <AppContent />
    </AdminProvider>
  );
}

export default App;
