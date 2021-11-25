const BirthdayCard = ({ selectedEmployee }) => {
  return (
    <div className="birthday-card">
      <h4>
        {selectedEmployee.firstName} {selectedEmployee.lastName}
      </h4>
      <p>Birthday: {selectedEmployee.dob}</p>
    </div>
  );
};

export default BirthdayCard;
