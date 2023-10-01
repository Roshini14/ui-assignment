import React, { useEffect, useState } from "react";
import Header from "./Header";
import Body from "./Body";
// import { ApplicantsData } from "./../data/students_data.js";
import "./../App.css";

function Main() {
  const [students, setStudents] = useState([]);
  const [applicationStatus, setApplicationStatus] = useState(
    "Opportunity Browsing"
  ); // Change this to the desired status
  const ApplicationStatus = [
    { value: "Applied" },
    { value: "Shortlisted" },
    { value: "Technical Interview" },
    { value: "Opportunity Browsing" },
    { value: "Video Interview I" },
    { value: "Video Interview II" },
    { value: "Video Interview III" },
    { value: "Offer" },
    { value: "Withdrawn" },
  ];

  function handleChange(value) {
    setApplicationStatus(value);
  }
  useEffect(() => {
    // Fetch the JSON data using a relative path
    fetch("/data/students_data.json") // Note the leading '/' to specify the public directory
      .then((response) => response.json())
      .then((jsonData) => {
        setStudents(jsonData); // Set the data in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const countStudentsByStatus = (status) => {
    const filteredStudents = students.filter(
      (student) => student.application_status === status
    );
    return filteredStudents.length;
  };
  const filteredStudents = students.filter(
    (student) => student.application_status === applicationStatus
  );
  return (
    <div className="App">
      <header className="App-header">
        <Header
          application_status={applicationStatus}
          handleChange={handleChange}
        />
        <Body
          application_status={applicationStatus}
          students={filteredStudents}
        />
      </header>
    </div>
  );
}

export default Main;
