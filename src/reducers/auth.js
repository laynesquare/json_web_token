import { AUTH, LOGOUT } from '../constants/actionTypes';

export const auth = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action?.data };
    // to change the state (the value in the "authData" property) efficiently, here the destructuring is used
    case LOGOUT:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: null };
    default:
      return state;
  }
};
