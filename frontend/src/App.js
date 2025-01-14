import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import StudentList from './Components/StudentList';
import StudentForm from './Components/StudentForm';
import EditStudentForm from './Components/EditStudentForm';
import Home from './Components/Home';
import StudentById from './Components/StudentById';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-student" element={<StudentForm />} />
        <Route path="/edit-student/:id" element={<EditStudentForm />} />
        <Route path="/searchStudent" element={<StudentById />} />
        <Route path="/students" element={<StudentList />} />
      </Routes>
    </Router>
  );
}

export default App;


