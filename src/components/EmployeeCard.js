import PropTypes from "prop-types";

const EmployeeCard = ({ employee }) => {
  return (
    <li>
      {employee.firstName} {employee.lastName}
    </li>
  );
};

EmployeeCard.propTypes = {
  employee: PropTypes.object,
};

export default EmployeeCard;
