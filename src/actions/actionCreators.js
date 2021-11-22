import { FETCH_EMPLOYEES } from './actionTypes';
import yaltisAPI from './../api/yaltisAPI';

export const getEmployees = () => {
  return async (dispatch) => {
    const response = await yaltisAPI.get();

    dispatch({
      type: FETCH_EMPLOYEES,
      payload: response.data,
    });
  };
};
