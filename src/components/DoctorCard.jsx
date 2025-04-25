import React from "react";

const DoctorCard = ({ doctor }) => {
  return (
    <div data-testid="doctor-card">
      <h4 data-testid="doctor-name">{doctor.name}</h4>
      <p data-testid="doctor-specialty">{doctor.specialty.join(", ")}</p>
      <p data-testid="doctor-experience">Experience: {doctor.experience} yrs</p>
      <p data-testid="doctor-fee">Fee: ₹{doctor.fees}</p>
    </div>
  );
};

export default DoctorCard;
