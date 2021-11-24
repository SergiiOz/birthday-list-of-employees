const BirthdayCard = ({
  selectedEmployee = { firstName: 'empty', lastName: 'empty', dob: 'emptye' },
}) => {
  return (
    <div className="birthday-card">
      <h4>
        {selectedEmployee.firstName} {selectedEmployee.lastName}
      </h4>
      <p>{selectedEmployee.dob}</p>
    </div>
  );
};

export default BirthdayCard;
