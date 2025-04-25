import React from "react";
import { Routes, Route } from "react-router-dom";
import DoctorListPage from "./pages/DoctorListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DoctorListPage />} />
    </Routes>
  );
}

export default App;
