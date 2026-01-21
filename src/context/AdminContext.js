import React, { createContext, useState, useContext, useEffect } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [adminPassword] = useState('admin123'); // Change this to your secure password

  useEffect(() => {
    // Check if admin is logged in
    const loggedIn = localStorage.getItem('adminLoggedIn');
    if (loggedIn) {
      setIsAuthenticated(true);
    }

    // Load bookings from localStorage
    const savedBookings = localStorage.getItem('bhigwanBookings');
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  const login = (password) => {
    if (password === adminPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('adminLoggedIn', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminAccessAttempt');
    // Redirect to home page
    window.location.href = '/';
  };

  const addBooking = (booking) => {
    const newBooking = {
      ...booking,
      id: Date.now(),
      date: new Date().toLocaleString(),
      status: 'pending'
    };
    const updatedBookings = [newBooking, ...bookings];
    setBookings(updatedBookings);
    localStorage.setItem('bhigwanBookings', JSON.stringify(updatedBookings));
  };

  const updateBookingStatus = (id, status) => {
    const updatedBookings = bookings.map(booking =>
      booking.id === id ? { ...booking, status } : booking
    );
    setBookings(updatedBookings);
    localStorage.setItem('bhigwanBookings', JSON.stringify(updatedBookings));
  };

  const deleteBooking = (id) => {
    const updatedBookings = bookings.filter(booking => booking.id !== id);
    setBookings(updatedBookings);
    localStorage.setItem('bhigwanBookings', JSON.stringify(updatedBookings));
  };

  const value = {
    isAuthenticated,
    bookings,
    login,
    logout,
    addBooking,
    updateBookingStatus,
    deleteBooking
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};
