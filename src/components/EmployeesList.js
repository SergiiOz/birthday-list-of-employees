import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import EmployeeCard from "./EmployeeCard";
import Spinner from "./Spiner/Spinner";

const EmployeesList = () => {
  const [sortedList, setSortedList] = useState([]);
  //get employees from state
  const employees = useSelector((state) => state.employees.listEmployees);

  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  //sort list users by char of alphabet
  const sortListByAlphabet = (arrlistUsers, arrAlphabet) => {
    const sortedList = [];

    arrAlphabet.forEach((char) => {
      const sortedUsers = {
        letter: char,
        list: arrlistUsers.filter(
          (user) => user.firstName[0].toLowerCase() === char
        ),
      };
      sortedList.push(sortedUsers);
    });

    return sortedList;
  };

  const onSorted = () => {
    const sortListUsers = sortListByAlphabet(employees, alphabet);
    setSortedList(sortListUsers);
  };

  return (
    <div className="employees-list">
      <h3 className="title">Employees</h3>
      <div>
        {/* below code with button for testing sort list */}
        <button onClick={onSorted}>Sort</button>
        {JSON.stringify(sortedList)}
        {/* above code for testing */}

        {/* sorted all list users by alphabet */}
        {employees ? (
          employees
            .sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
            .map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

EmployeesList.propTypes = {
  employees: PropTypes.array,
};

export default EmployeesList;
