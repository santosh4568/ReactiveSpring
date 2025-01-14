import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { getStudents, deleteStudent } from '../api/StudentService';
import './StudentList.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getStudents();
      setStudents(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteStudent(id);
    setStudents(students.filter(student => student.id !== id));
  };

  const handleEdit = (id) => {
    // window.location.href = `/edit-student/${id}`;
    navigate(`/edit-student/${id}`);
  };

  return (
    <div className="student-list">
      <h2>Students</h2>
      {loading ? <p>Loading...</p> : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Course</th>
              <th>Branch</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.course}</td>
                <td>{student.branch}</td>
                <td>
                  <button onClick={() => handleDelete(student.id)}>Delete</button>
                  <button onClick={() => handleEdit(student.id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;
