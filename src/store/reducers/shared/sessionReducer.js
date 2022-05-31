import {
  SET_LOGIN_PAYLOAD,
  SET_LOGOUT_PAYLOAD
} from 'store/actions/shared/session/actionTypes';

//  session data like; 
// - user data (name, id etc), 

const initialState = {
  userData: null,
  accessToken: null,
};

const sessionReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOGIN_PAYLOAD: {
      const { accessToken, name, surname } = payload || {};
      localStorage.setItem('access_token', accessToken);

      return {
        ...state,
        accessToken: accessToken,
        userData: {
          name,
          surname
        }
      };
    }
    case SET_LOGOUT_PAYLOAD: {
      localStorage.removeItem('access_token');
      return {
        ...state,
        userData: null,
        accessToken: null,
      }
    }
    default:
      return state;
  }
};

export default sessionReducer;