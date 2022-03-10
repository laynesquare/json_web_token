import * as api from '../api';
import { ADD, GET_COUNT } from '../constants/actionTypes';

export const getCount = () => async (dispatch) => {
  const { data } = await api.getCount();
  console.log(data);
  try {
    dispatch({ type: GET_COUNT, data });
  } catch (error) {}
};

export const add = (userIdWhoAdds) => async (dispatch) => {
  const { data } = await api.add(userIdWhoAdds);

  try {
    console.log(data);
    dispatch({ type: ADD, data });
  } catch (error) {
    console.log(error);
  }
};
