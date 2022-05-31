import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from 'store/actions/shared/session/actions';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = () => {

    if (username.length > 0 && password.length > 0) {
      const params = { username, password };

      dispatch(login(params, (res) => {
        if (res) {
          // redirect to home page if login is successful
          navigate('/');
        }
      }))
    }
    else {
      setShowError(true);
    }
  }

  return (
    <div>
      <h1>LOGIN</h1>

      <p><b>You are not authenticated</b></p>

      <div style={{ color: 'red', fontWeight: 'bold' }}>
        Type any username and password
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            const { value } = e.target;
            setUsername(value);
          }}
        />
      </div>

      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            const { value } = e.target;
            setPassword(value);
          }}
        />
      </div>


      {showError &&
        <div style={{ color: 'red', fontWeight: 'bold' }}>
          <p>Please enter username and pass</p>
        </div>
      }

      <button
        type='button'
        onClick={() => {
          userLogin()
        }}
        style={{ margin: '20px 0' }}
      >
        Login
      </button>

      <div>
        <Link to="/forgot-password">Forgot Password</Link>
      </div>

    </div>
  );
};

export default Login;
