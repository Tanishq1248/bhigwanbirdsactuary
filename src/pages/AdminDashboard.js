import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { bookings, updateBookingStatus, deleteBooking, logout } = useAdmin();
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBookings = bookings.filter(booking => {
    const matchStatus = filterStatus === 'all' || booking.status === filterStatus;
    const matchSearch = 
      booking.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.phone.includes(searchTerm);
    return matchStatus && matchSearch;
  });

  const stats = {
    total: bookings.length,
    pending: bookings.filter(b => b.status === 'pending').length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length,
    cancelled: bookings.filter(b => b.status === 'cancelled').length
  };

  const handleStatusChange = (id, status) => {
    updateBookingStatus(id, status);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      deleteBooking(id);
    }
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-title">
            <i className="fas fa-chart-line"></i>
            <h1>Admin Dashboard</h1>
            <p>Bhigwan Bird Sanctuary</p>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </header>

      {/* Stats Cards */}
      <section className="dashboard-stats">
        <div className="stat-card total">
          <div className="stat-icon">
            <i className="fas fa-bookmark"></i>
          </div>
          <div className="stat-content">
            <h3>Total Bookings</h3>
            <p className="stat-number">{stats.total}</p>
          </div>
        </div>

        <div className="stat-card pending">
          <div className="stat-icon">
            <i className="fas fa-clock"></i>
          </div>
          <div className="stat-content">
            <h3>Pending</h3>
            <p className="stat-number">{stats.pending}</p>
          </div>
        </div>

        <div className="stat-card confirmed">
          <div className="stat-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="stat-content">
            <h3>Confirmed</h3>
            <p className="stat-number">{stats.confirmed}</p>
          </div>
        </div>

        <div className="stat-card cancelled">
          <div className="stat-icon">
            <i className="fas fa-times-circle"></i>
          </div>
          <div className="stat-content">
            <h3>Cancelled</h3>
            <p className="stat-number">{stats.cancelled}</p>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="dashboard-controls">
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-box">
          <label>Filter by Status:</label>
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="all">All Bookings</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </section>

      {/* Bookings Table */}
      <section className="dashboard-content">
        {filteredBookings.length > 0 ? (
          <div className="bookings-table-wrapper">
            <table className="bookings-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Package</th>
                  <th>Visit Date</th>
                  <th>People</th>
                  <th>Booking Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className={`booking-row ${booking.status}`}>
                    <td className="name-cell">
                      <strong>{booking.fullName}</strong>
                    </td>
                    <td>{booking.email}</td>
                    <td>{booking.phone}</td>
                    <td>
                      <span className="package-badge">
                        {booking.package.split(' - ')[0]}
                      </span>
                    </td>
                    <td>{booking.visitDate}</td>
                    <td className="center">{booking.numPeople}</td>
                    <td className="date-cell">
                      <small>{new Date(booking.date).toLocaleDateString()}</small>
                    </td>
                    <td>
                      <select
                        value={booking.status}
                        onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                        className={`status-select ${booking.status}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="view-btn"
                          title="View Details"
                          onClick={() => {
                            alert(`
Name: ${booking.fullName}
Email: ${booking.email}
Phone: ${booking.phone}
Package: ${booking.package}
Visit Date: ${booking.visitDate}
Number of People: ${booking.numPeople}
Special Requests: ${booking.message || 'None'}
Status: ${booking.status}
Booked on: ${booking.date}
                            `);
                          }}
                        >
                          <i className="fas fa-eye"></i>
                        </button>
                        <button
                          className="delete-btn"
                          title="Delete"
                          onClick={() => handleDelete(booking.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty-state">
            <i className="fas fa-inbox"></i>
            <h3>No Bookings Found</h3>
            <p>
              {searchTerm
                ? 'Try a different search term'
                : 'No bookings in this category yet'}
            </p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>
          <i className="fas fa-info-circle"></i> Last updated:{' '}
          {new Date().toLocaleTimeString()}
        </p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
