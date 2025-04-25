import React from "react";
import specialtiesList from "../utils/specialtiesList";

const FilterPanel = ({
  consultMode,
  setConsultMode,
  specialties,
  setSpecialties,
  sortBy,
  setSortBy,
}) => {
  const handleSpecialty = (specialty) => {
    setSpecialties((prev) =>
      prev.includes(specialty)
        ? prev.filter((s) => s !== specialty)
        : [...prev, specialty]
    );
  };

  return (
    <div>
      <h3 data-testid="filter-header-moc">Consultation Mode</h3>
      <label>
        <input
          type="radio"
          data-testid="filter-video-consult"
          checked={consultMode === "Video Consult"}
          onChange={() => setConsultMode("Video Consult")}
        />{" "}
        Video Consult
      </label>
      <label>
        <input
          type="radio"
          data-testid="filter-in-clinic"
          checked={consultMode === "In Clinic"}
          onChange={() => setConsultMode("In Clinic")}
        />{" "}
        In Clinic
      </label>

      <h3 data-testid="filter-header-speciality">Speciality</h3>
      {specialtiesList.map((spec) => (
        <label key={spec}>
          <input
            type="checkbox"
            data-testid={`filter-specialty-${spec.replace(/\s|\//g, "-")}`}
            checked={specialties.includes(spec)}
            onChange={() => handleSpecialty(spec)}
          />
          {spec}
        </label>
      ))}

      <h3 data-testid="filter-header-sort">Sort</h3>
      <label>
        <input
          type="radio"
          data-testid="sort-fees"
          checked={sortBy === "fees"}
          onChange={() => setSortBy("fees")}
        />{" "}
        Fees (asc)
      </label>
      <label>
        <input
          type="radio"
          data-testid="sort-experience"
          checked={sortBy === "experience"}
          onChange={() => setSortBy("experience")}
        />{" "}
        Experience (desc)
      </label>
    </div>
  );
};

export default FilterPanel;
