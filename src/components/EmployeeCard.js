import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { selectEmployee, unSelectEmployee } from './../actions/actionCreators';

const EmployeeCard = ({ employee }) => {
  const dispatch = useDispatch();

  //get change from radio buttons
  const onChangeStatus = (event) => {
    //add employee in Birthday list
    if (event.target.value === 'true') {
      dispatch(selectEmployee(employee));
    }
    //remove employee from Birthday list
    if (event.target.value === 'false') {
      dispatch(unSelectEmployee(employee));
    }
  };

  return (
    <div className="employee-card">
      <h4 className={employee.isActive === true ? 'active' : ''}>
        {employee.firstName} {employee.lastName}
      </h4>
      {/* RADIO BUTTONS */}
      <div>
        <form>
          {/* NOT ACTIV button */}
          <div>
            <label>
              <input
                type="radio"
                value="false"
                name="status"
                checked={employee.isActive === false}
                onChange={onChangeStatus}
              />{' '}
              Not Active
            </label>
          </div>
          {/* ACTIVE button */}
          <div>
            <label>
              <input
                type="radio"
                value="true"
                name="status"
                checked={employee.isActive === true}
                onChange={onChangeStatus}
              />{' '}
              Active
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

EmployeeCard.propTypes = {
  employee: PropTypes.object,
};

export default EmployeeCard;
