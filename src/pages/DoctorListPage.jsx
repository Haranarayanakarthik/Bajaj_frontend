import React, { useEffect, useState } from "react";
import Autocomplete from "../components/Autocomplete";
import FilterPanel from "../components/FilterPanel";
import DoctorCard from "../components/DoctorCard";
import { useSearchParams } from "react-router-dom";

const API_URL = "https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json";

const DoctorListPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // filters
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [consultMode, setConsultMode] = useState(
    searchParams.get("mode") || ""
  );
  const [specialties, setSpecialties] = useState(
    searchParams.getAll("specialties") || []
  );
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
      });
  }, []);

  useEffect(() => {
    let data = [...doctors];

    if (search) {
      data = data.filter((d) =>
        d.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (consultMode) {
      data = data.filter((d) => d.consultation_type === consultMode);
    }

    if (specialties.length > 0) {
      data = data.filter((d) =>
        specialties.every((s) => d.specialty.includes(s))
      );
    }

    if (sortBy === "fees") {
      data.sort((a, b) => a.fees - b.fees);
    } else if (sortBy === "experience") {
      data.sort((a, b) => b.experience - a.experience);
    }

    setFiltered(data);

    const params = {};
    if (search) params.search = search;
    if (consultMode) params.mode = consultMode;
    if (specialties.length) params.specialties = specialties;
    if (sortBy) params.sort = sortBy;
    setSearchParams(params);
  }, [search, consultMode, specialties, sortBy, doctors]);

  return (
    <div>
      <Autocomplete value={search} setValue={setSearch} data={doctors} />
      <FilterPanel
        consultMode={consultMode}
        setConsultMode={setConsultMode}
        specialties={specialties}
        setSpecialties={setSpecialties}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <div>
        {filtered.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
};

export default DoctorListPage;
