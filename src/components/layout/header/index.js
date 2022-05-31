import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from 'store/actions/shared/session/actions';

const Header = () => {
  const dispatch = useDispatch();

  const userLogout = () => {
    dispatch(logout());
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none' }}>
          <li style={{ marginRight: '20px' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      <button onClick={userLogout}>
        Logout
      </button>
    </div>
  );
};

export default Header;
