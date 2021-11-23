import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import EmployeeCard from "./EmployeeCard";
import Spinner from "./Spiner/Spinner";

const EmployeesList = () => {
  //get employees from state
  const employees = useSelector((state) => state.employees.listEmployees);

  return (
    <div className="employees-list">
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
  );
};

EmployeesList.propTypes = {
  employees: PropTypes.array,
};

export default EmployeesList;
