import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div>
      <h1>FORGOT PASSWORD</h1>

      <p><b>You are not authenticated</b></p>

      <p>Type your password to recover your account</p>

      <div>
        <label>Username: </label>
        <input
          type="text"
          style={{ marginBottom: '20px' }}
        />
      </div>


      <div style={{ marginBottom: '20px' }}>
        <button type='button'>Recover your account</button>
      </div>

      <div>
        <Link to="/login">Back to login</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;