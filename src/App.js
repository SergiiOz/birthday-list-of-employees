import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEmployees } from "./actions/actionCreators";
import "./App.css";
import EmployeesList from "./components/EmployeesList";
import EmployeesBirthday from "./components/EmployeesBirthday";

const App = () => {
  const dispatch = useDispatch();

  //fetch Employees List
  useEffect(() => dispatch(getEmployees()), []);

  return (
    <div className="container">
      <EmployeesList />
      <EmployeesBirthday />
    </div>
  );
};

export default App;
