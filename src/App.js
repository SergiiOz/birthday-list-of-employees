import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getEmployees } from './actions/actionCreators';
import './App.css';
import EmployeesList from './components/EmployeesList';
import EmployeesBirthdayList from './components/EmployeesBirthdayList';

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  //fetch Employees List
  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <div className="container">
      <EmployeesList />
      <EmployeesBirthdayList />
    </div>
  );
};

export default App;
