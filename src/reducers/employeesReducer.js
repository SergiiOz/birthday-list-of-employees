import {
  FETCH_EMPLOYEES,
  SELECT_EMPLOYEE,
  UNSELECT_EMPLOYEE,
} from '../actions/actionTypes';

let initialState = {
  listEmployees: [],
  isLoading: true,
};

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        listEmployees: action.payload,
        isLoading: false,
      };
    case SELECT_EMPLOYEE:
      return {
        ...state,
        //if user.id from list === id from action -> change isActive = true
        listEmployees: state.listEmployees.map((user) => {
          if (user.id === action.payload.id) {
            return { ...user, isActive: true };
          }
          return user;
        }),
      };
    case UNSELECT_EMPLOYEE:
      return {
        ...state,
        //if user.id from list === id from action -> change isActive = false
        listEmployees: state.listEmployees.map((user) => {
          if (user.id === action.payload.id) {
            return { ...user, isActive: false };
          }
          return user;
        }),
      };
    default:
      return state;
  }
};
