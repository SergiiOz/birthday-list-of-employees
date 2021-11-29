import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BirthdayCard from './BirthdayCard';

const EmployeesBirthdayList = () => {
  //sorted list selected employees
  const [sortedSelectedEmloyees, setSortedSelectedEmloyees] = useState([]);

  //get selected Employees from statue redux (if employee.isActive === true)
  const selectedEmployees = useSelector((state) =>
    state.employees.listEmployees.filter((user) => user.isActive === true)
  );

  //sort list by lastName
  const sortList = (arr) => {
    const sordetArray = arr.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
    return sordetArray;
  };

  //when selected list form state redux change - sort list again
  useEffect(() => {
    const sortedListUsers = sortList(selectedEmployees);
    setSortedSelectedEmloyees(sortedListUsers);
  }, [selectedEmployees]);

  return (
    <div className="employees-birthday">
      <h3 className="title">Employees Birthday</h3>
      {/* if list from state redux emptye - show text */}
      {selectedEmployees.length === 0 ? (
        <div className="employee-card empty">Employess List is empty</div>
      ) : (
        sortedSelectedEmloyees.map((selectedEmployee) => (
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
