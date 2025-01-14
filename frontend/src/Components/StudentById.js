import React, { useState } from 'react';
import { getStudentById } from '../api/StudentService';
import './StudentById.css';

const StudentById = () => {
  const [studentId, setStudentId] = useState('');
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');

  const handleStudent = async () => {
    if (!studentId) {
      setError('Student ID cannot be empty');
      return;
    }

    try {
      const result = await getStudentById(studentId);
      setStudent(result.data);
      setError('');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('Student not found');
      } else {
        setError('Error fetching student: ' + error.message);
      }
      setStudent(null);
    }
    setStudentId('');
  };

  return (
    <div className="page-container">
      <div className="container">
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          placeholder="Enter Student ID"
        />
        <input type="submit" value="Search" onClick={handleStudent} />
        {error && <p className="error">{error}</p>}
        {student && (
          <div className="student-details">
            <h2>Student Details</h2>
            <p>ID: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Date of Birth: {student.dob}</p>
            <p>Email: {student.email}</p>
            <p>Phone: {student.phone}</p>
            <p>Address: {student.address}</p>
            <p>Course: {student.course}</p>
            <p>Branch: {student.branch}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentById;