import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import EmployeeCard from './EmployeeCard';
import Spinner from './Spiner/Spinner';

const EmployeesList = () => {
  const [sortedList, setSortedList] = useState([]);
  console.log(sortedList);
  //get employees from state
  const employees = useSelector((state) => state.employees.listEmployees);

  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  //sort list users by char of alphabet
  const sortListByAlphabet = (arrlistUsers, arrAlphabet) => {
    //new array
    const sortedList = [];

    arrAlphabet.forEach((char) => {
      const sortedUsers = {
        letter: char,
        list: arrlistUsers.filter(
          (user) => user.firstName[0].toLowerCase() === char
        ),
      };
      //push to new array
      sortedList.push(sortedUsers);
    });

    return sortedList;
  };

  //one time sorted list and set to sorted
  useEffect(() => {
    const sortedListUsers = sortListByAlphabet(employees, alphabet);
    setSortedList(sortedListUsers);
  }, [employees]);

  return (
    <div className="employees-list">
      <h3 className="title">Employees</h3>
      {/*will set Spinner leter - show when wait data */}

      <div className="employees-list-content">
        {sortedList.map((columnChar, index) => {
          return (
            <div key={index} className="charColumn">
              <h3 className="title">{columnChar.letter}</h3>
              {/* if char doesn't have list  */}
              {columnChar.list.length === 0 ? (
                <div className="employee-card empty">
                  Employess List is empty
                </div>
              ) : (
                //under char show employees list
                columnChar.list.map((employee) => (
                  <EmployeeCard key={employee.id} employee={employee} />
                ))
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

EmployeesList.propTypes = {
  employees: PropTypes.array,
};

export default EmployeesList;
