import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const accessToken = useSelector(state => state.sessionReducer.accessToken);
  return accessToken ? <Outlet /> : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  component: PropTypes.any,
};

export default PrivateRoute;
