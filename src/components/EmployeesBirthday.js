import { useSelector } from 'react-redux';
import BirthdayCard from './BirthdayCard';

const EmployeesBirthday = () => {
  const selectedEmplooyees = useSelector(
    (state) => state.employees.selectedEmplooyees
  );

  return (
    <div className="employees-birthday">
      <h3 className="title">Employees Birthday</h3>
      <BirthdayCard />
    </div>
  );
};

export default EmployeesBirthday;
