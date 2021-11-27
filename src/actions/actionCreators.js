import {
  FETCH_EMPLOYEES,
  SELECT_EMPLOYEE,
  UNSELECT_EMPLOYEE,
} from './actionTypes';
import yaltisAPI from './../api/yaltisAPI';

//fetch employees list
export const getEmployees = () => {
  return async (dispatch) => {
    const response = await yaltisAPI.get();

    //add 'isActive = false' to every users
    const listWithAddedIsActive = response.data;
    for (const element of listWithAddedIsActive) {
      element.isActive = false;
    }

    dispatch({
      type: FETCH_EMPLOYEES,
      payload: listWithAddedIsActive,
    });
  };
};

//select epmloyee
export const selectEmployee = (employee) => {
  return {
    type: SELECT_EMPLOYEE,
    payload: employee,
  };
};

//unselect epmloyee
export const unSelectEmployee = (employee) => {
  return {
    type: UNSELECT_EMPLOYEE,
    payload: employee,
  };
};
