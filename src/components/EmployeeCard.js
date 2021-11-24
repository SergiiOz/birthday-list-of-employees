import PropTypes from 'prop-types';
import { useState } from 'react';

const EmployeeCard = ({ employee }) => {
  const [status, setStatus] = useState('false');

  const onChangeStatus = (event) => {
    setStatus(event.currentTarget.value);
  };

  return (
    <div className="employee-card">
      <h4 className={status === 'true' ? 'active' : ''}>
        {employee.firstName} {employee.lastName}
      </h4>
      {/* RADIO BUTTONS */}
      {/* doesn't work ui checked radio button- need press doubleClick */}
      <div>
        <div>
          <label>
            <input
              type="radio"
              value="false"
              name="status"
              checked={status === 'false'}
              onChange={onChangeStatus}
            />{' '}
            Not Active
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              value="true"
              name="status"
              checked={status === 'true'}
              onChange={onChangeStatus}
            />{' '}
            Active
          </label>
        </div>
      </div>
      {status}
    </div>
  );
};

EmployeeCard.propTypes = {
  employee: PropTypes.object,
};

export default EmployeeCard;
