import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import BirthdayCard from './BirthdayCard';

const EmployeesBirthdayList = () => {
  //get selected Employees from state redux (if employee.isActive === true)
  const selectedEmployees = useSelector((state) =>
    state.employees.listEmployees
      .filter((user) => user.isActive === true)
      //sort by lastName
      .sort((a, b) => (a.lastName > b.lastName ? 1 : -1))
  );

  return (
    <div className="employees-birthday">
      <h3 className="title">Employees Birthday</h3>
      {/* if list from state redux emptye - show text */}
      {selectedEmployees.length === 0 ? (
        <div className="employee-card empty">Employess List is empty</div>
      ) : (
        selectedEmployees.map((selectedEmployee) => (
          //THE BIRTHDAY CARD of the One Employee
          <BirthdayCard
            key={selectedEmployee.id}
            selectedEmployee={selectedEmployee}
          />
        ))
      )}
    </div>
  );
};

EmployeesBirthdayList.propTypes = {
  selectedEmployees: PropTypes.array,
};

export default EmployeesBirthdayList;
