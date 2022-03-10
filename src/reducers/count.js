import { ADD, CLEAR, GET_COUNT } from '../constants/actionTypes';

export const count = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return action?.data?.count;
    case GET_COUNT:
      return action?.data?.count;
    case CLEAR:
      return 0;
    default:
      return state;
  }
};
