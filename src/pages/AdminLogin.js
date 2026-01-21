import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import './AdminLogin.css';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAdmin();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(password)) {
      setPassword('');
      setError('');
    } else {
      setError('Invalid password');
      setPassword('');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="login-box">
        <div className="login-header">
          <i className="fas fa-lock"></i>
          <h1>Admin Panel</h1>
          <p>Bhigwan Bird Sanctuary</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="password">Admin Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-btn">
            <i className="fas fa-sign-in-alt"></i> Login
          </button>
        </form>

        <div className="login-footer">
          <p><i className="fas fa-info-circle"></i> Only authorized admins can access</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
