import { FETCH_EMPLOYEES } from '../actions/actionTypes';

let initialState = {
  listEmployees: [],
};

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        listEmployees: action.payload,
      };
    default:
      return state;
  }
};
