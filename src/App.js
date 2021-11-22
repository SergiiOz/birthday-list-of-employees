import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEmployees } from './actions/actionCreators';
import './App.css';
import Spinner from './components/Spiner/Spinner';

const App = () => {
  //get all amployees
  const employees = useSelector((state) => state.employees.listEmployees);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getEmployees()), []);
  console.log('employees', employees);
  return (
    <div className="container">
      {' '}
      <ol>
        {employees ? (
          employees.map((employee) => (
            <li key={employee.id}>{employee.firstName}</li>
          ))
        ) : (
          <Spinner />
        )}
      </ol>
    </div>
  );
};

export default App;
