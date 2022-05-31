import { serviceWrapper } from 'services';

import {
  SET_LOGIN_PAYLOAD,
  SET_LOGOUT_PAYLOAD
} from './actionTypes';

// GET USER DATA -----------------------------
const setLoginPayload = payload => ({
  type: SET_LOGIN_PAYLOAD,
  payload,
});

export const login = (params, callback) => dispatch => {
  serviceWrapper('http://localhost:8000/profile', 'get')
    .then((res) => {
      if (res?.status === 200 && res?.data) {
        dispatch(setLoginPayload(res.data));
        // callback if needed
        callback(true);
      }
    })
};


export const isTokenValid = (token, callback) => dispatch => {
  serviceWrapper('http://localhost:8000/token', 'get')
    .then((res) => {
      if (res?.status === 200 && res?.data?.isValid) {
        // if token is valid set user data with response. response must require user data
        dispatch(setLoginPayload(res.data));
        // callback if needed
        callback(true);
      }
      return false;
    })
}

const setLogoutPayload = payload => ({
  type: SET_LOGOUT_PAYLOAD
});

export const logout = () => dispatch => {
  dispatch(setLogoutPayload());
}