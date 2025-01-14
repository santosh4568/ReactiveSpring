import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getStudentById, updateStudent } from '../api/StudentService';
import './EditStudent.css';

const EditStudentForm = () => {
  const { id } = useParams(); // Extract the studentId from the URL
  const navigate = useNavigate();
  const [student, setStudent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudent = async () => {
      const result = await getStudentById(id);
      setStudent(result.data);
      setLoading(false);
    };
    fetchStudent();
  }, [id]);

  const handleUpdate = async (updatedStudent) => {
    await updateStudent(updatedStudent);
    // Handle post-update logic here
    // window.location.href = '/students';
    navigate('/students');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(student);
    }}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={student.name}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={student.email}
          onChange={(e) => setStudent({ ...student, email: e.target.value })}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          value={student.phone}
          onChange={(e) => setStudent({ ...student, phone: e.target.value })}
        />
      </div>
      <div>
        <label>Course:</label>
        <input
          type="text"
          value={student.course}
          onChange={(e) => setStudent({ ...student, course: e.target.value })}
        />
      </div>
      <div>
        <label>Branch:</label>
        <input
          type="text"
          value={student.branch}
          onChange={(e) => setStudent({ ...student, branch: e.target.value })}
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default EditStudentForm;